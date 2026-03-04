// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts 4.9.6

pragma solidity ^0.8.1;
import {TCF_ERC1155} from "./TCF_ERC1155.sol";
import {Ownable} from "../../openzeppelin_l/contracts/access/Ownable.sol";

// 获取支持的token地址
// 1、获取支持的token数
// 2、遍历调用tokenAddress_array

// 查看某个地址是否支持
// 调用supportedTokenAmount

// 查看比例和权限时长
// 调用NFTS(uint256 tokenID)函数，参数是NFT id
// 返回数组，第一个元素是比例，第二个元素是有效时长

// 查看支持的token地址
// hasupportedTokenAmount函数，获取支持的token数量
// 调用tokenAddress_array(uint256 index)函数，参数是索引，返回对应地址。原生代币返回0x1地址

/**
 * @dev 管理tcf——nft的价格，比例，有效时长，支持的token地址
 */

// TODO:增加修改支持token的功能（不增加，如果增加，如果将原地址的资产转移到新的合约地址，很麻烦）
// TODO:将tokenAddress_array改为private

contract TCF_NFTPrice is TCF_ERC1155, Ownable {
    // 支持的支付方式，常量TC,DCF,USDT(后期确定DCF和USDT的合约地址之后再写)
    // TC原生代币的没有地址,所以使用0x1地址
    // 0表示不支持，1表示支持
    // 设置它的原因：用于检测设置价格时，传入的地址正确
    mapping(address => uint8) internal supportTokenType;
    // 包含TC
    uint256 public supportedTokenAmount;
    // 支持的token数组，原生代币返回0x1地址
    address[] public tokenAddress_array;

    // 如果支持的token Address已经初始化，则为1，否则为0
    uint8 internal initedTokenAddress;

    // 如果这个合约价格被初始化，则设为1
    uint8 public NFTPrice_initialized;

    // 支付方式，这个结构用于初始化代币价格时，外部将数据传入智能合约
    // 原生代币没有地址，所以在传入时，设为空
    struct priceTypeAndAomut {
        address tokenAddress;
        uint256 amount;
    }

    // 权益：保存价格，比例，有限期
    // 可优化，使用两个map用于存储素具，一份是ratio与indate集合，另一份是价格
    // 对于某一个NFT的ratio和indate，先赋值给memory，然后一次性保存在storage，比当前少一次对storage的存储，但增加了代码量。
    // 所以还是算了
    struct equities_store {
        // 三种支付方式的价格，TC,DCF,USDT
        mapping(address => uint256) prices;
        // 动态比例，10% ,这里就为10
        uint8 ratio;
        // 有效期
        // 最大值4294967295，约为136年，在修改有效期时不可以超过这个值
        uint56 indate;
    }

    // 6种NFT的权益。如果使用mapping如果后期想要增加产品，修改合约代码量会小一些
    // NFTS使用mapping，在初始化的时候进行了大量写操作，消耗了大量gas。但在mint操作，获取对应NFT价格时，减少了便利操作，降低了gas消耗。
    // mapping不支持memory，不能设置临时变量一次性给NFTS赋值
    // 因为只有6种，所以使用uint256
    mapping(uint256 => equities_store) private NFTS;

    // 原生支持TC
    constructor() {
        supportTokenType[address(0x1)] = 1;
        tokenAddress_array.push(address(0x1));
        supportedTokenAmount = 1;
    }

    event NFTPriceChanged(
        uint256 indexed tokenID,
        address indexed paymentToken,
        uint256 oldPrice,
        uint256 newPrice
    );

    event DynamicRatioChanged(
        uint256 indexed tokenID,
        uint8 previousRatio,
        uint8 newRatio
    );

    /**
     * @dev 初始化价格.TC代币的地址设为0
     * @notice 只能调用一次，调用前必须确保支持的代币地址已经初始化，不需要检查token地址是否初始化，因为在构造函数中，初始化了TC
     * @param prices 6种NFT,每中NFT的三类价格
     */
    function initPrice(
        priceTypeAndAomut[2][6] calldata prices
    ) external onlyOwner {
        // 这里不对token是否初始化进行检查，是因为在构造函数中，初始化了TC
        require(initedTokenAddress == 1, "TOKEN_NOT_INITIALIZED");
        require(NFTPrice_initialized == 0, "PRICES_INITIALIZED");

        string memory code = checkInitPricesParams(prices);
        if (bytes(code).length != 0) {
            revert(code);
        }

        // 以太坊测试
        // uint56[6] memory indetes = [
        //     uint56(15552000),
        //     uint56(17280000),
        //     uint56(20736000),
        //     uint56(24192000),
        //     uint56(27648000),
        //     uint56(31104000)
        // ];

        // 有效时长，分别对应 180 200 240 280 320 360  单位是天
        // 测试的时候：天数*每天的秒
        // 这里注意单位是纳秒，对应voidChain的区块时间
        // 以太坊的话，改为秒即可
        // 如果需要测试其他功能可以将其暂且修改为秒，测试完其他功能之后，在改为纳秒
        // uint56[6] memory indetes = [
        //     15552000000000000,
        //     17280000000000000,
        //     20736000000000000,
        //     24192000000000000,
        //     27648000000000000,
        //     31104000000000000
        // ];

        // 用于voidChain测试，voidChain初块时间很慢，所以某个NFT过期之后立刻触发一个交易，然后发布一个区块
        // 在检测NFT是否过期时，就会使用最新区块的时间。否则一直没有区块，nft就会一直不过期。
        uint56[6] memory indetes = [
            // 一天的纳秒数
            86400000000000,
            // 两天的纳秒数
            172800000000000,
            // 三天的纳秒数
            259200000000000,
            // 四天的纳秒数
            345600000000000,
            // 五天的纳秒数
            432000000000000,
            // 360天的纳秒数
            31104000000000000
        ];

        // uint56[6] memory indetes = [
        //     // 一分钟的纳秒数
        //     60000000000,
        //     // 两分钟的纳秒数
        //     120000000000,
        //     // 三分钟的纳秒数
        //     180000000000,
        //     // 四天的纳秒数
        //     345600000000000,
        //     // 五天的纳秒数
        //     432000000000000,
        //     // 360天的纳秒数
        //     31104000000000000
        // ];

        // 动态比例
        uint8[6] memory ratios = [40, 50, 60, 80, 90, 100];

        // equities_parm[6] memory NFTS_;
        uint256 addressLen = prices[0].length;

        for (uint256 i = 0; i < 6; ++i) {
            // 跟新NFTS数据
            NFTS[i].indate = indetes[i];
            NFTS[i].ratio = ratios[i];
            for (uint256 j = 0; j < addressLen; j++) {
                address tokenAddress = prices[i][j].tokenAddress;
                // 如果为原生代币，地址设为0x1
                if (tokenAddress == address(0)) {
                    tokenAddress = address(0x1);
                }
                NFTS[i].prices[tokenAddress] = prices[i][j].amount;
            }
        }
        NFTPrice_initialized = 1;
    }

    /**
     * @dev 修改单个NFT价格
     * @param tokenId NFT类型/ID（0-5）
     * @param tokenAddress 支付代币地址；原生代币传入address(0)
     * @param amount 新价格
     */
    function changeNFTPrice(
        uint256 tokenId,
        address tokenAddress,
        uint256 amount
    ) external onlyOwner {
        string memory code = _checkAccessPriceDetail(tokenId, tokenAddress);
        if (bytes(code).length != 0) {
            revert(code);
        }

        if (tokenAddress == address(0)) {
            tokenAddress = address(0x1);
        }
        uint256 oldPrice = NFTS[tokenId].prices[tokenAddress];
        NFTS[tokenId].prices[tokenAddress] = amount;
        emit NFTPriceChanged(tokenId, tokenAddress, oldPrice, amount);
    }

    /**
     * @dev 获取某个NFT在某种支付方式下的价格。
     * @param tokenId NFT类型/ID（0-5）
     * @param _tokenAddress 支付代币地址；原生代币传入address(0)
     * @return errorMessage 错误码/错误信息；成功时为空字符串
     * @return price 价格；当errorMessage非空时为0
     */
    function getNFTPrice(
        uint256 tokenId,
        address _tokenAddress
    ) public view returns (string memory, uint256) {
        string memory errorMessage = _checkAccessPriceDetail(
            tokenId,
            _tokenAddress
        );

        if (bytes(errorMessage).length != 0) {
            return (errorMessage, 0);
        }

        if (_tokenAddress == address(0)) {
            _tokenAddress = address(0x1);
        }

        uint256 price = NFTS[tokenId].prices[_tokenAddress];
        if (price == 0) {
            return ("PRICE_NOT_SET", 0);
        }

        return ("", price);
    }

    function getNFTEquityDetails(
        uint256 tokenId
    ) public view returns (uint8 ratio, uint56 indate) {
        require(NFTPrice_initialized == 1, "PRICES_NOT_INITIALIZED");
        require(tokenId < 6, "TOKENID_RANGE");
        ratio = NFTS[tokenId].ratio;
        indate = NFTS[tokenId].indate;
    }

    function _checkAccessPriceDetail(
        uint256 _tokenId,
        address _tokenAddress
    ) private view returns (string memory) {
        if (NFTPrice_initialized != 1) {
            return "PRICES_NOT_INITIALIZED";
        }
        if (_tokenId > 5) {
            return "TOKENID_RANGE";
        }
        // 防止价格没有初始化，然后调用getNFTPrice函数，导致获取价格为0
        if (_tokenAddress == address(0x0)) {
            _tokenAddress = address(0x1);
        }
        if (supportTokenType[_tokenAddress] != 1) {
            return _detailAddr(_tokenAddress, "TOKEN_UNSUPPORTED");
        }
        return "";
    }

    /**
     * @dev 初始化价格参数检查：长度、代币是否在支持列表内等。
     * @param prices 6种NFT的价格参数（每种NFT包含 supportedTokenAmount 个价格项）
     * @return 错误码/错误信息；成功时为空字符串
     */
    function checkInitPricesParams(
        priceTypeAndAomut[2][6] calldata prices
    ) public view returns (string memory) {
        // 1、检查tokenAddresses和prices[i].priceData.length相同
        // 2、价格里面必须支持原生代币
        // 3、检查价格参数中每个NFT支持的token Address 是否在所支持的tokenAddress列表之内
        // 4、强制每个 NFT 的价格列表包含原生代币项且各 tokenAddress 唯一，避免重复地址导致的价格覆盖或漏配风险
        for (uint256 i = 0; i < 6; ++i) {
            // 计划支持3种代币，包括USDT,TC,DCF
            // 1、不强制要求tokenAddresses长度为2的原因：项目可能暂时不支持USDT。为什么是2，因为TC是原生代币，所以不需要传入地址
            if (prices[i].length != supportedTokenAmount) {
                return "PRICES_LEN";
            }

            // 要求支付方式为支持的代币类型
            // 要求价格里面必须支持原生代币
            bool TCExist;
            bool DCFExist;
            priceTypeAndAomut[2] memory price = prices[i];
            for (uint256 j = 0; j < supportedTokenAmount; ++j) {
                // 保证每个NFT的价格列表中，都包含原生代币，除原生代币外，其他代币地址必须唯一
                address tokenAddress = price[j].tokenAddress;
                if (tokenAddress == address(0)) {
                    TCExist = true;
                } else {
                    DCFExist = true;
                }
                // 获取购买某个NFT时，支持的某种支付方式的合约地址
                if (
                    price[j].tokenAddress != address(0) &&
                    // 在initSupportToken中已经设置
                    supportTokenType[price[j].tokenAddress] != 1
                ) {
                    return
                        _detailAddr(price[j].tokenAddress, "TOKEN_UNSUPPORTED");
                }
            }

            // 强制每个 NFT 的价格列表包含原生代币项和 DCF 代币项
            if (!TCExist) {
                return "TC_PRICE_MUST_EXIST";
            }
            if (!DCFExist) {
                return "DCF_PRICE_MUST_EXIST";
            }
        }

        return "";
    }

    // /**
    //  * @dev 替换支持的代币。不支持，因为原始合约中用户有钱，如果增加这个，需要写转移资产的合约。
    //  * @param oldTokenAddress 要替换的代币合约地址
    //  */
    //
    // function replaceSupportedToken(
    //     address oldTokenAddress,
    //     address newTokenAddress
    // ) external onlyOwner {
    //     // 原生代币不能被删除
    //     require(oldTokenAddress != address(0), "NATURE_TOKEN_DEL");
    //     // 检查就tokenAddress是否被初始化过
    //     require(
    //         supportTokenType[oldTokenAddress] == 1,
    //         _detailAddr(oldTokenAddress, "TOKEN_UNSUPPORTED")
    //     );
    //     // 检查新新插入的地址是否合法
    //     string memory code = _checkTokenAddressesCode(newTokenAddress);
    //     if (bytes(code).length != 0) {
    //         revert(code);
    //     }

    //     // 删除map列表中要删除的地址
    //     delete supportTokenType[oldTokenAddress];
    //     // supportedTokenAmount包含原生代币数，但原生token没有地址，所以tokenAddress_array元素数=supportedTokenAmount-1
    //     for (uint256 i = 0; i < supportedTokenAmount - 1; i++) {
    //         if (tokenAddress_array[i] == oldTokenAddress) {
    //             tokenAddress_array[i] = newTokenAddress;
    //             supportTokenType[newTokenAddress] = 1;
    //             supportTokenType[oldTokenAddress] = 0;
    //             break;
    //         }
    //     }
    //     supportedTokenAmount -= 1;
    // }

    /**
     * @dev 添加支持的代币地址列表（原生代币不需要传入地址）。构造函数中已经添加了原生代币TC。
     * 如果项目只支持TC，则不需要调用这个函数。
     * @param _tokenAddress 代币合约地址
     */
    function addSupportedToken(address _tokenAddress) public onlyOwner {
        require(initedTokenAddress == 0, "TOKEN_INITIALIZED");
        string memory code = _checkTokenAddressesCode(_tokenAddress);
        if (bytes(code).length != 0) {
            revert(code);
        }
        // uint256 len = tokenAddresses.length;
        // for (uint256 i = 0; i < len; i++) {
        // 如果传入0地址，参数检查无法通过，所以这里不需要进行检查
        // if (tokenAddresses[i] == address(0)) {
        //     // 原生代币不允许添加
        //     supportTokenType[address(0x1)] = 1;
        //     tokenAddress_array.push(address(0x1));
        // } else {}
        supportTokenType[_tokenAddress] = 1;
        tokenAddress_array.push(_tokenAddress);
        // }

        supportedTokenAmount += 1;
        initedTokenAddress = 1;
    }

    // 查看某个地址是否支持
    function isSupported(address token) external view returns (uint8) {
        if (token == address(0)) {
            token = address(0x1);
        }
        return supportTokenType[token];
    }

    // 修改动态比例
    // 40%的动态比例是40，而不是0.4
    function changeDynamicRatio(
        uint256 tokenId,
        uint8 newRatio
    ) external onlyOwner {
        require(NFTPrice_initialized == 1, "PRICES_NOT_INITIALIZED");
        require(tokenId < 6, "TOKENID_RANGE");
        uint8 previousRatio = NFTS[tokenId].ratio;
        NFTS[tokenId].ratio = newRatio;
        emit DynamicRatioChanged(tokenId, previousRatio, newRatio);
    }

    // /**
    //  * @dev 对新增的支持代币地址进行校验（地址数量、重复、是否为DCF/USDT等）。
    //  * @param _tokenAddresses 代币合约地址数组
    //  * @return 错误码/错误信息；成功时为空字符串
    //  */
    // function checkTokenAddressesCode(
    //     address _tokenAddress
    // ) external view returns (string memory) {
    //     return _checkTokenAddressesCode(_tokenAddress);
    // }

    // 设置支持的token时，进行参数检查
    function _checkTokenAddressesCode(
        address tokenAddress
    ) private view returns (string memory) {
        // 检查地址是否已经存在
        if (supportTokenType[tokenAddress] == 1) {
            return _detailAddr(tokenAddress, "ADDR_EXISTS");
        }

        // 检查是否为DCF合约，没有继续操作是因为，在继续之前需要检查这两个合约是否为erc20合约
        // 不可以通过erc163合约来实现（USDT没有实现erc163），直接使用call调用
        bytes memory callData = abi.encodeWithSignature("symbol()");
        // 如果传入EOA地址，会返回success，但长度为0
        (bool success, bytes memory data) = tokenAddress.staticcall(callData);
        // 如果地址和EOA地址返回success，但data长度为0
        // 地址为零也会返回错误信息
        if (success && data.length > 0) {
            string memory symbol = abi.decode(data, (string));
            // 必须是DCF或USDT合约
            bytes32 symbolHash = keccak256(bytes(symbol));
            if (symbolHash != keccak256(bytes("DCF"))) {
                return _detailAddr(tokenAddress, "NOT_DCF");
            }
        } else {
            return _detailAddr(tokenAddress, "NOT_DCF");
        }

        return "";
    }

    function _toHexString(
        address account
    ) private pure returns (string memory) {
        bytes20 data = bytes20(account);
        bytes16 hexSymbols = 0x30313233343536373839616263646566;
        bytes memory str = new bytes(42);
        str[0] = "0";
        str[1] = "x";
        for (uint256 i = 0; i < 20; i++) {
            uint8 b = uint8(data[i]);
            str[2 + i * 2] = bytes1(hexSymbols[b >> 4]);
            str[3 + i * 2] = bytes1(hexSymbols[b & 0x0f]);
        }
        return string(str);
    }

    function _detailAddr(
        address addr,
        string memory code
    ) private pure returns (string memory) {
        return string(abi.encodePacked(code, " ", _toHexString(addr)));
    }
}
