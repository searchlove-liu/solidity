// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.4.0
pragma solidity ^0.8.27;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {
    ERC721Burnable
} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import {
    ERC721Enumerable
} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {
    ERC721Pausable
} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import {
    ERC721URIStorage
} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// 它的方法被@chainlink/contracts@1.5.0/src/v0.8/shared/access/ConfirmedOwnerWithProposal.sol所实现，所以不用再次导入。
// 至于为什么上面方法没有导入就可以使用，是因为他被VRFConsumerBaseV2Plus.sol中的ConfirmedOwner所调用，
// 并且在VRFConsumerBaseV2Plus.sol中，将msg.sender作为owner
// import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {
    VRFConsumerBaseV2Plus
} from "@chainlink/contracts@1.5.0/src/v0.8/vrf/dev/VRFConsumerBaseV2Plus.sol";
import {
    VRFV2PlusClient
} from "@chainlink/contracts@1.5.0/src/v0.8/vrf/dev/libraries/VRFV2PlusClient.sol";

contract MyToken is
    ERC721,
    ERC721Enumerable,
    ERC721URIStorage,
    ERC721Pausable,
    ERC721Burnable,
    VRFConsumerBaseV2Plus
{
    uint256 private _nextTokenId;
    string private uri;
    uint256 public MAX_NFT_AMOUNT = 20;
    uint8 public constant MAX_TIME_OF_PREMINT = 5;
    // 表示可以进行preMite的成员
    // 可以设为address => uint8,uint8表示每个地址剩余preMint的次数。初始值都一样。
    // 当前代码有一个bug就是，每个address调用safeMint也会被算作preMint，可以通过上面方式解决
    mapping(address => uint8) public whiteList;
    // premint 开放或关闭标志，true表示可以进行preMint
    bool public preMintWindow;
    // mint 开放或关闭标志，true表示可以进行mint
    bool public mintWindow;

    // METADATA of NFT
    // 访问：https://ipfs.io/ipfs/QmWuqpwJqZj7FNSqEXvcVRU3h32bDYQbCuhqh2Y2kprH7J
    string constant METADATA_SHIBAINU =
        "ipfs://QmY1mv8RbUibNeWNJUNj6MKh5J4S9G7T4srsyvA5EEsu1J";
    string constant METADATA_HUSKY =
        "ipfs://QmWuqpwJqZj7FNSqEXvcVRU3h32bDYQbCuhqh2Y2kprH7J";
    string constant METADATA_BULLDOG =
        "ipfs://QmdotKeeQhBFqTr4ksSE7nNDAGG8ydsaCN9tqLP11co6Ai";
    string constant METADATA_SHEPHERD =
        "ipfs://QmTTakCHecH9oZR7N4XPhAcAnsA4gaYB4Cq5D57T9MsYXR";

    // 以下时获取随机数的参数
    //     event RequestSent(uint256 requestId, uint32 numWords);
    //     event RequestFulfilled(uint256 requestId, uint256[] randomWords);

    //     struct requestStatus {
    //     bool fulfilled; // whether the request has been successfully fulfilled
    //     bool exists; // whether a requestId exists
    //     uint256[] randomWords;
    //   }

    mapping(uint256 => uint256) public reqIdToNFTId;

    // mapping(uint256 => requestStatus)
    //     public s_requests; /* requestId --> requestStatus */

    // Your subscription ID.参考https://vrf.chain.link/
    uint256 public s_subscriptionId;

    // // Past request IDs.
    // uint256[] public requestIds;
    // uint256 public lastRequestId;

    // The gas lane to use, which specifies the maximum gas price to bump to.
    // For a list of available gas lanes on each network,
    // see https://docs.chain.link/vrf/v2-5/supported-networks
    //部署在某个网络中的linkToken合约
    bytes32 public keyHash =
        0x787d74caea10b2b357790d5b5247c2f63d1d91572a9846f780606e4d953677ae;

    // Depends on the number of requested values that you want sent to the
    // fulfillRandomWords() function. Storing each word costs about 20,000 gas,
    // so 100,000 is a safe default for this example contract. Test and adjust
    // this limit based on the network that you select, the size of the request,
    // and the processing of the callback request in the fulfillRandomWords()
    // function.
    uint32 public callbackGasLimit = 100_000;

    // The default is 3, but you can set this higher.
    uint16 public requestConfirmations = 3;

    // For this example, retrieve 1 random values in one request.
    // Cannot exceed VRFCoordinatorV2_5.MAX_NUM_WORDS.
    uint32 public numWords = 1;

    /**
     * @param _vrfCoordinator address of VRFCoordinator contract。参考：https://docs.chain.link/vrf/v2-5/supported-networks#coordinator-parameters
     * 如果是sepolia：0x9DdfaCa8183c41ad55329BdeeD9F6A8d53168B1B
     * 假设要调用一个合约，需要知道目标合约的abi，合约地址，就可以得到一个handler，通过handler就可以调用合约中的函数。vrfCoordinator就是针对vrf合约的handler
     * param initialOwner: 这里说明部署这个合约的人不是合约所有者，所以这里传入合约所有者，并将值传递给Ownable(initialOwner)（之前版本）
     * 但因为Ownable被VRFConsumerBaseV2Plus.sol中的ConfirmedOwner所实现，所以不再导入Ownable
     * 并且在VRFConsumerBaseV2Plus.sol中，将msg.sender作为owner
     * @param subscriptionId: 参考https://vrf.chain.link/,sepolia网络可使用：
     * 94668201116556404667932990827623502682118598806400263731078003937484671294555
     * 在部署这个合约之后，需要复制这个合约地址，并在subscription详情中点击Add consumer，并将合约地址复制进去，不然这个合约将无法使用subscriptionId
     * 参考：https://vrf.chain.link/#/side-drawer/subscription/sepolia/94668201116556404667932990827623502682118598806400263731078003937484671294555
     */
    constructor(
        address _vrfCoordinator,
        // address initialOwner,
        uint256 subscriptionId
    ) ERC721("Dog", "D") VRFConsumerBaseV2Plus(_vrfCoordinator) {
        // if (_vrfCoordinator == address(0)){
        //     // 如果是sepolia，不需要传入
        //     VRFConsumerBaseV2Plus(0x9DdfaCa8183c41ad55329BdeeD9F6A8d53168B1B);
        // }else {
        //     VRFConsumerBaseV2Plus(_vrfCoordinator);
        // }

        s_subscriptionId = subscriptionId;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    // 设置mint和premint开放
    function setMintWindow(
        bool mintStatus,
        bool premintStatus
    ) external onlyOwner {
        mintWindow = mintStatus;
        preMintWindow = premintStatus;
    }

    // 为内部mint NFT使用
    // 使用preMint想要调用addToWhiteList将地址加入白名单
    // 调用setMintWindow将preMintWindow设为true
    function preMint() public returns (uint256) {
        // mint 一个NFT需要花费的金额
        // require(msg.value == 2 wei ,"The price of minting a NFT is 5 wei!");
        require(preMintWindow, "PreMint is not open!");
        // 因为后面需要重复读取storage中数据，gas消耗很多，所以提前放入memory的变量中。memory变量读取消耗gas小
        uint8 preMintAmount = whiteList[msg.sender];
        require(
            preMintAmount > 0,
            "You are not in the white list or the number of times you premint has been used up!"
        );
        // require (balanceOf(msg.sender) < 1,"Max amount of NFT preMint is 1!");
        require(totalSupply() < MAX_NFT_AMOUNT, "Dog NFT is sold out!");
        // preMint amount -1
        whiteList[msg.sender] = preMintAmount - 1;
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
        requestRandomWords(false, tokenId);
        // _setTokenURI(tokenId, uri);
        return tokenId;
    }

    // 向白名单中增加成员
    function addToWhiteList(address[] calldata addrs) external {
        uint len = addrs.length;
        // 使用++i 可以更省gas费用
        for (uint i = 0; i < len; ++i) {
            whiteList[addrs[i]] = MAX_TIME_OF_PREMINT;
        }
    }

    // 以后可以加上onlyOwner
    function safeMint() public payable returns (uint256) {
        require(mintWindow, "Mint is not open!");
        // mint 一个NFT需要花费的金额
        require(msg.value == 5 wei, "The price of minting a NFT is 5 wei!");
        require(totalSupply() < MAX_NFT_AMOUNT);
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
        requestRandomWords(false, tokenId);
        // _setTokenURI(tokenId, uri);
        return tokenId;
    }

    function withdraw(address addr) external onlyOwner {
        payable(addr).transfer(address(this).balance);
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address to,
        uint256 tokenId,
        address auth
    )
        internal
        override(ERC721, ERC721Enumerable, ERC721Pausable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(
        address account,
        uint128 value
    ) internal override(ERC721, ERC721Enumerable) {
        super._increaseBalance(account, value);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    // Assumes the subscription is funded sufficiently.
    // @param enableNativePayment: Set to `true` to enable payment in native tokens, or
    // `false` to pay in LINK
    // 这里还没有生成随机数
    function requestRandomWords(
        bool enableNativePayment,
        uint256 NFTID
    ) internal returns (uint256 requestId) {
        // Will revert if subscription is not set and funded.
        requestId = s_vrfCoordinator.requestRandomWords(
            VRFV2PlusClient.RandomWordsRequest({
                keyHash: keyHash,
                subId: s_subscriptionId,
                requestConfirmations: requestConfirmations,
                callbackGasLimit: callbackGasLimit,
                numWords: numWords,
                extraArgs: VRFV2PlusClient._argsToBytes(
                    VRFV2PlusClient.ExtraArgsV1({
                        nativePayment: enableNativePayment
                    })
                )
            })
        );
        reqIdToNFTId[requestId] = NFTID;
        // s_requests[requestId] = requestStatus({
        //     randomWords: new uint256[](0),
        //     exists: true,
        //     fulfilled: false
        // });
        // requestIds.push(requestId);
        // lastRequestId = requestId;
        // emit RequestSent(requestId, numWords);
        return requestId;
    }

    // 这个函数时回调函数，不是本合约调用，是发送requestRandomWords请求之后，chainlink合约调用，并把随机数传进来。
    function fulfillRandomWords(
        uint256 _requestId,
        uint256[] calldata _randomWords
    ) internal override {
        uint256 randomNumber = _randomWords[0] % 4;
        uint256 tokenId = reqIdToNFTId[_requestId];
        if (randomNumber == 0) {
            _setTokenURI(tokenId, METADATA_SHIBAINU);
        } else if (randomNumber == 1) {
            _setTokenURI(tokenId, METADATA_HUSKY);
        } else if (randomNumber == 2) {
            _setTokenURI(tokenId, METADATA_BULLDOG);
        } else {
            _setTokenURI(tokenId, METADATA_SHEPHERD);
        }

        // require(s_requests[_requestId].exists, "request not found");
        // s_requests[_requestId].fulfilled = true;
        // s_requests[_requestId].randomWords = _randomWords;
        // emit RequestFulfilled(_requestId, _randomWords);
    }

    // function getRequestStatus(
    // uint256 _requestId
    // ) external view returns (bool fulfilled, uint256[] memory randomWords) {
    // require(s_requests[_requestId].exists, "request not found");
    // requestStatus memory request = s_requests[_requestId];
    // _setTokenURI(tokenId, uri);
    // return (request.fulfilled, request.randomWords);
    // }
}
