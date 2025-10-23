// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.4.0
pragma solidity ^0.8.27;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721Burnable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import {ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {ERC721Pausable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC721, ERC721Enumerable, ERC721URIStorage, ERC721Pausable, Ownable, ERC721Burnable {
    uint256 private _nextTokenId;
    string private uri ;
    uint256 public MAX_NFT_AMOUNT=20;
    uint8 public constant MAX_TIME_OF_PREMINT = 5;
    // 表示可以进行preMite的成员
    // 可以设为address => uint8,uint8表示每个地址剩余preMint的次数。初始值都一样。
    // 当前代码有一个bug就是，每个address调用safeMint也会被算作preMint，可以通过上面方式解决
    mapping(address => uint8) public whiteList;
    // premint 开放或关闭标志，true表示可以进行preMint
    bool public preMintWindow;
    // mint 开放或关闭标志，true表示可以进行mint
    bool public mintWindow;


    // 这里说明部署这个合约的人不是合约所有者，所以这里传入合约所有者
    constructor(address initialOwner)
        ERC721("Dog", "D")
        Ownable(initialOwner)
    {}

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    // 设置mint和premint开放
    function setMintWindow(bool mintStatus,bool premintStatus) external onlyOwner {
        mintWindow = mintStatus;
        preMintWindow = premintStatus;
    }

// 为内部mint NFT使用
// 使用preMint想要调用addToWhiteList将地址加入白名单
// 调用setMintWindow将preMintWindow设为true
    function preMint()
        public
        payable  
        returns (uint256)
    {
        // mint 一个NFT需要花费的金额
        // require(msg.value == 2 wei ,"The price of minting a NFT is 5 wei!");
        require(preMintWindow,"PreMint is not open!");
        // 因为后面需要重复读取storage中数据，gas消耗很多，所以提前放入memory的变量中。memory变量读取消耗gas小
        uint8 preMintAmount = whiteList[msg.sender];
        require (preMintAmount > 0 ,"You are not in the white list or the number of times you premint has been used up!");
        // require (balanceOf(msg.sender) < 1,"Max amount of NFT preMint is 1!");
        require(totalSupply() < MAX_NFT_AMOUNT,"Dog NFT is sold out!");
        // preMint amount -1
        whiteList[msg.sender] = preMintAmount - 1;
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
        return tokenId;
    }

    // 向白名单中增加成员
    function addToWhiteList(address[] calldata addrs) external {
        uint len = addrs.length;
        // 使用++i 可以更省gas费用
        for (uint i = 0; i < len;++i){
            whiteList[addrs[i]] = MAX_TIME_OF_PREMINT ;
        }
    }

// 以后可以加上onlyOwner
    function safeMint()
        public
        payable 
        returns (uint256)
    {
        require(mintWindow,"Mint is not open!");
        // mint 一个NFT需要花费的金额
        require(msg.value == 5 wei ,"The price of minting a NFT is 5 wei!");
        require(totalSupply() < MAX_NFT_AMOUNT);
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
        return tokenId;
    }

    // The following functions are overrides required by Solidity.

    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable, ERC721Pausable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
