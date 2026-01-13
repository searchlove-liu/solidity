// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts 4.9.6

pragma solidity ^0.8.1;

import {TCF_NFT} from "./TCF_NFT.sol";
import {String} from "./String.sol";

// TODO:response_CheckTokenAddressesParams删除，检查参数只返回string，正确返回空，不正确，返回提示信息
// TODO:number临时变量，改为uint8,增加length检查,继续使用uint256，改为uint8不会减少智能合约容量
// TODO:设置支持的token 数目和token的地址，地址使用数组保存。
// TODO:删除初始化支持的token函数

contract TCF_NFTPrice is TCF_NFT {
    using String for address;
    using String for string;
    // 支持的支付方式，常量TC,TCF,USDT(后期确定TCF和USDT的合约地址之后再写)
    // TC原生代币的没有地址不在这里面存放
    // 0表示不支持，1表示支持
    // 设置它的原因：用于检测设置价格时，传入的地址正确
    mapping(address => uint8) public supportTokenType;
    // 包含TC
    uint256 public supportedTokenAmount;
    // 支持的token数组
    address[] public tokenAddress_array;

    // 如果支持的token Address已经初始化，则为1，否则为0
    uint8 public initedTokenAddress;

    // 如果这个合约价格被初始化，则设为1
    uint8 NFTPrice_initialized;

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
        priceTypeAndAomut[] price;
        // 动态比例，10% ,这里就为10
        uint256 ratio;
        // 有效期
        uint256 indate;
    }

    // 权益：保存价格，比例，有限期
    // 用于存储数据
    struct equities_store {
        // 三种支付方式的价格，TC,TCF,USDT
        mapping(address => uint256) prices;
        // 动态比例，10% ,这里就为10
        uint256 ratio;
        // 有效期
        uint256 indate;
    }

    // 6种NFT的权益。如果使用mapping如果后期想要增加产品，修改合约代码量会小一些
    // NFTS使用mapping，在初始化的时候进行了大量写操作，消耗了大量gas。但在mint操作，获取对应NFT价格时，减少了便利操作，降低了gas消耗。
    // mapping不支持memory，不能设置临时变量一次性给NFTS赋值
    // 因为只有6种，所以使用uint256
    mapping(uint256 => equities_store) NFTS;

    /***
     * @dev 初始化函数
     * @param prices 每个NFT的三种价格
     * @param tokenAddresses 支持的token 地址
     */
    function TCF_NFTPrice_init(
        oneTokenPriceTypeAndAomut_parm[6] calldata prices,
        address[] memory tokenAddresses
    ) public onlyOwner {
        // __ERC1155_init("");
        // initSupportToken(tokenAddresses);
        // 必须在initSupportToken和initEquities之间
        // initSupportToken初始化了支持的代币（supportTokenType），_NFTPrice_checkInitializeParams使用supportTokenType
        // 且_NFTPrice_checkInitializeParams检查的参数主要用于initEquities
        // _NFTPrice_checkInitializeParams(prices, tokenAddresses);
        // initEquities(prices);
    }

    // 初始化NFT权益
    // TC代币的地址设为0
    function initEquities(priceTypeAndAomut[][6] calldata prices) internal {
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
            40,
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
            priceTypeAndAomut[] memory priceTypeAndAomuts = prices[i];

            // 跟新NFTS数据
            NFTS_[i].indate = indetes[i];
            NFTS_[i].ratio = ratios[i];
            for (uint j = 0; j < priceTypeAndAomuts.length; i++) {
                address tokenAddress = priceTypeAndAomuts[j].tokenAddress;
                // 如果为原生代币，地址设为0x1
                if (tokenAddress == address(0)) {
                    tokenAddress = address(0x1);
                }
                NFTS_[i].prices[tokenAddress] = priceTypeAndAomuts[j].amount;
            }
        }
        NFTPrice_initialized = 1;
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
        NFTS[tokenID].prices[tokenAddress] = amount;
    }

    // 检查就tokenAddress是否被初始化过
    // 后期改为数组，为了方便操作，操作改为calldata
    // 应该改为delSupportToken和addSupportToken
    function deleteSupportedToken(address oldTokenAddress) external onlyOwner {
        require(
            supportTokenType[oldTokenAddress] == 1,
            "ChangeSupportedToken: old token address is not exist"
        );

        delete supportTokenType[oldTokenAddress];
        // supportedTokenAmount包含原生代币数，但原生token没有地址，所以tokenAddress_array元素数=supportedTokenAmount-1
        for (uint256 i = 0; i < supportedTokenAmount - 1; i++) {
            if (tokenAddress_array[i] == oldTokenAddress) {
                // supportedTokenAmount包含原生代币数，但原生代币地址为空，不保存，所以减2
                // 将最后一个元素放置在删除的位置
                tokenAddress_array[i] = tokenAddress_array[
                    supportedTokenAmount - 2
                ];
                // 删除最后一个元素
                tokenAddress_array[supportedTokenAmount - 2] = address(0);
            }
        }
        supportedTokenAmount -= 1;
    }

    function addSupportedToken(
        address[] memory tokenAddresses,
        bool checkParams
    ) external onlyOwner {
        if (checkParams) {
            string memory response = checkTokenAddressesParams(tokenAddresses);
            if (!response.equal("")) {
                revert(response);
            }
        }

        uint256 len = tokenAddresses.length;
        for (uint256 i = 0; i < len; i++) {
            supportTokenType[tokenAddresses[i]] = 1;
            tokenAddress_array.push(tokenAddresses[i]);
        }

        if (initedTokenAddress == 1) {
            supportedTokenAmount += len;
        } else {
            initedTokenAddress = 1;
            supportedTokenAmount = len + 1;
        }
    }

    function getSupportTokenAddress() external view returns (address[] memory) {
        return tokenAddress_array;
    }

    // 为什么要单独进行检查参数，因为如果把每个检查的目标发在不同位置进行检查，
    // 每次都需要进行遍历，需要消耗比较多的gas，所以放在一起，减少gas消耗
    // 后台需要检查的：不要传入相同的地址
    function checkPricesParams(
        priceTypeAndAomut[][6] calldata prices
    ) public view returns (string memory) {
        // 1、检查tokenAddresses和prices[i].priceData.length相同
        // 2、价格里面必须支持原生代币
        // 3、检查价格参数中每个NFT支持的token Address 是否在所支持的tokenAddress列表之内
        // 4、检查支持的tokenAddress是否被初始化

        address tokenAddress;
        for (uint256 i = 0; i < 6; ++i) {
            // 计划支持3种代币，包括USDT,TC,TCF
            // 1、不强制要求tokenAddresses长度为2的原因：项目可能暂时不支持USDT。为什么是2，因为TC是原生代币，所以不需要传入地址
            if (prices[i].length != supportedTokenAmount) {
                return
                    "The pairs amount of price and token address must equal to SupportedTokenAmount";
            }

            // 要求支付方式为支持的代币类型
            // 要求价格里面必须支持原生代币
            priceTypeAndAomut[] memory price = prices[i];
            // bool TCExist = false;
            for (uint256 j = 0; j < supportedTokenAmount; ++j) {
                // 获取购买某个NFT时，支持的某种支付方式的合约地址
                if (
                    price[j].tokenAddress != address(0) &&
                    // 在initSupportToken中已经设置
                    supportTokenType[price[j].tokenAddress] != 1
                ) {
                    return
                        "TokenAddress Isn't support or supported token not initialized";
                }

                // 代码量过大，删除一些不必要的检查
                // if (tokenAddress == address(0)) {
                //     if (TCExist == true) {
                //         return
                //             "Only one zero address representing TC is allowed";
                //     } else {
                //         TCExist = true;
                //     }
                // }
            }

            // if (!TCExist) {
            //     return "One zero address representing TC must exist";
            // }
        }

        return "";
    }

    // 在设置支持的合约地址之前，检查传入的参数,用于外部调用
    function checkTokenAddressesParams_external(
        address[] memory tokenAddresses
    ) external view returns (string memory) {
        return checkTokenAddressesParams(tokenAddresses);
    }

    // 在设置支持的合约地址之前，检查传入的参数，降低gas费
    function checkTokenAddressesParams(
        address[] memory tokenAddresses
    ) internal view returns (string memory response) {
        //在修改合约地址时，也会调用这个函数，但修改合约地址时，已经初始化链外，所以不可以加初始化检查
        // if (initedTokenAddress == 1) {
        //     response.message = "Token addresses had been initialized";
        //     return response;
        // }

        uint256 len = tokenAddresses.length;
        // 检查数据长度
        if (len > 2) {
            return "Address length must < 3,TCF or USDT";
        }

        // 检查是否为TCF或USDT,在检查是否合约地址之后
        bool TCFExist;
        bool USDTExist;
        for (uint256 i = 0; i < len; i++) {
            // 检查地址是否已经存在
            if (supportTokenType[tokenAddresses[i]] == 1) {
                return
                    string(
                        abi.encodePacked(
                            tokenAddresses[i].toHexString(),
                            " exists"
                        )
                    );
            }

            // 检查是否为TCF合约和USDT合约，没有继续操作是因为，在继续之前需要检查这两个合约是否为erc20合约
            // 不可以通过erc163合约来实现（USDT没有实现erc163），直接使用call调用
            bytes memory callData = abi.encodeWithSignature("symbol()");
            // 如果传入EOA地址，会返回success，但长度为0
            (bool success, bytes memory data) = tokenAddresses[i].staticcall(
                callData
            );
            // 如果地址和EOA地址返回success，但data长度为0
            // 地址为零也会返回错误信息
            if (success && data.length > 0) {
                string memory symbol = abi.decode(data, (string));
                // 必须是TCF或USDT合约
                if (!symbol.equal("TCF") && !symbol.equal("USDT")) {
                    return
                        string(
                            abi.encodePacked(
                                tokenAddresses[i].toHexString(),
                                " isn't TCF or USDT"
                            )
                        );
                } else if (symbol.equal("TCF")) {
                    // 上一个地址是TCF,并且这个地址也是TCF
                    if (TCFExist) {
                        return "Both address are TCF";
                    } else {
                        TCFExist = true;
                    }
                } else {
                    // 上一个地址是USDT,并且这个地址也是USDT
                    if (USDTExist) {
                        return "Both address are USDT";
                    } else {
                        USDTExist = true;
                    }
                }
            } else {
                return
                    string(
                        abi.encodePacked(
                            tokenAddresses[i].toHexString(),
                            " isn't TCF or USDT"
                        )
                    );
            }
        }
        return "";
    }
}
