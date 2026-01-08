// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts 4.9.6

pragma solidity ^0.8.1;

import {TCF_NFT} from "./TCF_NFT.sol";
import {Initializable} from "./openzeppelin_l/contracts/proxy/utils/Initializable.sol";

contract TCF_NFTPrice is Initializable, TCF_NFT {
    // 支持的支付方式，常量TC,TCF,USDT(后期确定TCF和USDT的合约地址之后再写)
    // TC原生代币的没有地址不在这里面存放
    // 0表示不支持，1表示支持
    // 设置它的原因：用于检测设置价格时，传入的地址正确
    mapping(address => uint8) public supportTokenType;

    // 如果这个合约被初始化，则设为1
    uint8 TCF_NFTPrice_initialized;

    // 支付方式，这个结构用于初始化代币价格时，外部将数据传入智能合约
    // 原生代币没有地址，所以在传入时，设为空
    struct priceTypeAndAomut {
        address tokenAddress;
        uint256 amount;
    }

    // 一种NFT的支付方式，用于参数传递
    struct oneTokenPriceTypeAndAomut_parm {
        priceTypeAndAomut[] priceData;
    }

    // 一种NFT的支付方式，用于存储数据
    struct oneTokenPriceTypeAndAomut_store {
        // 原生代币没有地址，使用0x1来代替
        mapping(address => uint256) priceData;
    }

    // 权益：保存价格，比例，有限期
    struct equities_parm {
        // 三种支付方式的价格，TC,TCF,USDT
        oneTokenPriceTypeAndAomut_parm price;
        // 动态比例，10% ,这里就为10
        uint256 ratio;
        // 有效期
        uint256 indate;
    }

    // 权益：保存价格，比例，有限期
    // 用于存储数据
    struct equities_store {
        // 三种支付方式的价格，TC,TCF,USDT
        oneTokenPriceTypeAndAomut_store price;
        // 动态比例，10% ,这里就为10
        uint256 ratio;
        // 有效期
        uint256 indate;
    }

    // 6种NFT的权益。如果使用mapping如果后期想要增加产品，修改合约代码量会小一些
    // NFTS使用mapping，在初始化的时候进行了大量写操作，消耗了大量gas。但在mint操作，获取对应NFT价格时，减少了便利操作，降低了gas消耗。
    // mapping不支持memory，不能设置临时变量一次性给NFTS赋值
    mapping(uint256 => equities_store) NFTS;

    /***
     * @dev 初始化函数
     * @param prices 每个NFT的三种价格
     * @param tokenAddresses 支持的token 地址
     */
    function __TCF_NFTPrice_init_(
        oneTokenPriceTypeAndAomut_parm[6] calldata prices,
        address[] calldata tokenAddresses
    ) external onlyOwner initializer {
        __ERC1155_init("");
        initSupportToken(tokenAddresses);
        // 必须在initSupportToken和initEquities之间
        // initSupportToken初始化了支持的代币（supportTokenType），_NFTPrice_checkInitializeParams使用supportTokenType
        // 且_NFTPrice_checkInitializeParams检查的参数主要用于initEquities
        _NFTPrice_checkInitializeParams(prices, tokenAddresses);
        initEquities(prices);
    }

    // 初始化NFT权益
    // TC代币的地址设为0
    function initEquities(
        oneTokenPriceTypeAndAomut_parm[6] calldata prices
    ) internal {
        require(
            prices.length == 6,
            "InitEquities: The prices'length must be 6"
        );
        // 有效时长，分别对应 180 200 240 280 320 360  单位是天
        // 测试的时候：天数*每天的秒
        uint256[6] memory indetes = [
            uint256(15552000),
            uint256(17280000),
            uint256(20736000),
            uint256(24192000),
            uint256(27648000),
            uint256(31104000)
        ];
        // 动态比例
        uint256[6] memory ratios = [
            uint256(40),
            uint256(50),
            uint256(60),
            uint256(80),
            uint256(90),
            uint256(100)
        ];

        // equities_parm[6] memory NFTS_;
        mapping(uint256 => equities_store) storage NFTS_ = NFTS;
        equities_parm memory NFT;

        for (uint256 i = 0; i < 6; ++i) {
            // 获取支付方式,这里不设置数组长度为3(TC TCF USDT)，是因为前期可能不支持USDT
            priceTypeAndAomut[] memory priceTypeAndAomuts = prices[i].priceData;

            NFT = equities_parm({
                ratio: ratios[i],
                // 180天对应的秒
                indate: indetes[i],
                price: prices[i]
            });

            // 跟新NFTS数据
            NFTS_[i].indate = indetes[i];
            NFTS_[i].ratio = ratios[i];
            for (uint j = 0; j < 3; i++) {
                address tokenAddress = priceTypeAndAomuts[j].tokenAddress;
                // 如果为原生代币，地址设为0x1
                if (tokenAddress == address(0)) {
                    tokenAddress = address(0x1);
                }
                NFTS_[i].price.priceData[tokenAddress] = priceTypeAndAomuts[j]
                    .amount;
            }
        }
        TCF_NFTPrice_initialized = 1;
    }

    // 设置单个NFT价格
    function setNFTPrice(
        uint256 tokenID,
        address tokenAddress,
        uint256 amount
    ) external {
        require(
            tokenID < 6,
            "SetNFTPrice: TokenID must be one of 0,1,2,3,4 or 5"
        );
        require(
            supportTokenType[tokenAddress] == 1,
            "SetNFTPrice: TokenAddress Isn't support or tokenAddress is error"
        );
        NFTS[tokenID].price.priceData[tokenAddress] = amount;
    }

    // 设置支持的token 类型
    // 设置长度可以为2，参数只传TCF和USDT地址
    function initSupportToken(address[] calldata tokenAddresses) internal {
        require(
            tokenAddresses.length < 3,
            "initSupportToken:The project only supporte two types of token of TC TCF and USDT"
        );
        uint256 len = tokenAddresses.length;
        for (uint i = 0; i < len; i++) {
            require(
                tokenAddresses[i] != address(0),
                "initSupportToken:tokenAddress can not be zone"
            );
        }

        if (len == 2) {
            require(
                tokenAddresses[0] != tokenAddresses[1],
                "initSupportToken: The two token addresses cannot be the same"
            );
        }

        for (uint256 i = 0; i < len; i++) {
            supportTokenType[tokenAddresses[i]] = 1;
        }
    }

    function changeSupportedToken(
        address oldTokenAddress,
        address newTokenAddress
    ) external {
        require(
            supportTokenType[oldTokenAddress] == 1,
            "ChangeSupportedToken: old token address is not exist"
        );
        delete supportTokenType[oldTokenAddress];
        supportTokenType[newTokenAddress] = 1;
    }

    // 为什么要单独进行检查参数，因为如果把每个检查的目标发在不同位置进行检查，
    // 每次都需要进行遍历，需要消耗比较多的gas，所以放在一起，减少gas消耗
    function _NFTPrice_checkInitializeParams(
        oneTokenPriceTypeAndAomut_parm[6] calldata prices,
        address[] calldata tokenAddresses
    ) private view {
        // 1、检查tokenAddresses和prices[i].priceData.length相同
        // 2、价格里面必须支持原生代币
        // 3、检查价格参数中每个NFT支持的token Address 是否在所支持的tokenAddress列表之内
        // 4、如果
        uint256 len = prices.length;
        //TC原生代币没有地址，但必须支持原生代币，所以传入的地址+1和传入的每个NFT价格与地址对 相等
        uint256 addressLength = tokenAddresses.length + 1;
        address tokenAddress;
        for (uint256 i = 0; i < len; ++i) {
            // 计划支持3种代币，包括USDT,TC,TCF
            // 1、不强制要求tokenAddresses长度为2的原因：项目可能暂时不支持USDT。为什么是2，因为TC是原生代币，所以不需要传入地址
            require(
                prices[i].priceData.length == addressLength,
                "_NFTPrice_checkInitializeParams: token addresses's length +1 must equal to pairs amount of price and token address"
            );

            // 要求支付方式为支持的代币类型
            // 要求价格里面必须支持原生代币
            oneTokenPriceTypeAndAomut_parm memory price = prices[i];
            bool TCExist = false;
            for (uint256 j = 0; j < addressLength; ++j) {
                // 获取购买某个NFT时，支持的某种支付方式的合约地址
                tokenAddress = price.priceData[j].tokenAddress;
                require(
                    tokenAddress == address(0) ||
                        // 在initSupportToken中已经设置
                        supportTokenType[tokenAddress] == 1,
                    "_NFTPrice_checkInitializeParams: TokenAddress Isn't support or tokenAddress is error"
                );

                if (tokenAddress == address(0)) {
                    TCExist = true;
                }
            }
            require(
                TCExist,
                "_NFTPrice_checkInitializeParams: TC price of NFT isn't exist,or TC address must set to 0x0"
            );
        }
    }
}
