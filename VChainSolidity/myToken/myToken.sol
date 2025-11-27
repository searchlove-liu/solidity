// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.5.0
pragma solidity 0.8.1;

import {ERC721} from "./openzeppelin/contracts/token/ERC721/ERC721.sol"; 
// import {ERC721} from "@openzeppelin/contracts@4.9.6/token/ERC721/ERC721.sol";
// 这个ERC721Burnable 实现的burn，内部也是调用erc721的_burn函数
// import {ERC721Burnable} from "@openzeppelin/contracts@4.9.6/token/ERC721/extensions/ERC721Burnable.sol";
import {ERC721Enumerable} from "./openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {ERC721URIStorage} from "./openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {Ownable} from "@openzeppelin/contracts@4.9.6/access/Ownable.sol";
import {Initializable} from "./openzeppelin/contracts/proxy/utils/Initializable.sol";

contract MyToken is Initializable,ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    // constructor(address initialOwner)
    //     ERC721("MyToken", "MTK")
    // {}

    // 注意修饰器为initializer，意思是，如果当前合约正在执行这个初始化函数，
    // 那么别人无法再次进去这个函数（）。
    function initialize(bytes calldata _tokenName,bytes calldata _tokenSymbol) public initializer {
        ERC721.__ERC721_init(string(_tokenName), string(_tokenSymbol));
    }

    function safeMint(address to, bytes memory uri)
        public
        onlyOwner
        returns (uint256)
    {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, string(uri));
        return tokenId;
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 firstTokenId,
        uint256 batchSize
    ) internal virtual override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, firstTokenId, batchSize);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmZ3D7Ak6N6VM5cART2U1zWVPJhvdmaS2iyRh3ANDGCNML/";
    }

    // 烧掉发某个token
    function burn (uint256 tokenId)public {
        // 安全检查
        _burn(tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        // super调用继承链上最近的父合约，也就是ERC721URIStorage中的burn。
        super._burn(tokenId);
    }

}
