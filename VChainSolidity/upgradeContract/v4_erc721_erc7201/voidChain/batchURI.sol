// SPDX-License-Identifier:MIT

pragma solidity 0.8.1;

// import {
//     ERC721Upgradeable
// } from "../openzeppelin_L/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";

// import {
//     ERC721EnumerableUpgradeable
// } from "../openzeppelin_L/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";

// import {
//     ERC721URIStorageUpgradeable
// } from "../openzeppelin_L/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";

import {MyToken} from "./../myTokenV1.sol";

contract batchURIAndId is MyToken {
    
    // // _beforeTokenTransfer,_burn,supportsInterface,tokenURI必须覆写，随后为实际的逻辑
    // function _beforeTokenTransfer(
    //     address from,
    //     address to,
    //     uint256 firstTokenId,
    //     uint256 batchSize
    // )
    //     internal
    //     virtual
    //     override(
    //         ERC721Upgradeable,
    //         ERC721EnumerableUpgradeable
    //     )
    // {
    //     super._beforeTokenTransfer(from, to, firstTokenId, batchSize);
    // }

    // function _burn(
    //     uint256 tokenId
    // ) internal override(ERC721Upgradeable, ERC721URIStorageUpgradeable) {
    //     // super调用继承链上最近的父合约，也就是ERC721URIStorage中的burn。
    //     super._burn(tokenId);
    // }

    // function supportsInterface(
    //     bytes4 interfaceId
    // )
    //     public
    //     view
    //     override(
    //         ERC721Upgradeable,
    //         ERC721EnumerableUpgradeable,
    //         ERC721URIStorageUpgradeable
    //     )
    //     returns (bool)
    // {
    //     return super.supportsInterface(interfaceId);
    // }

    // function tokenURI(
    //     uint256 tokenId
    // )
    //     public
    //     view
    //     override(ERC721Upgradeable, ERC721URIStorageUpgradeable)
    //     returns (string memory)
    // {
    //     return super.tokenURI(tokenId);
    // }

    // 实际的逻辑
    struct NFT {
        string uri;
        uint256 id;
        address contractAddress;
        string tokenStandard;
    }
    /***
    * @dev 获取批次URI
    * @param startIndex index的开始位置
    * @param batchSize 获取uri的树木
    * @return 
    */
    // 权限控制，无
    function getBatchURI (uint256 startIndex,uint256 batchSize,address owner)external view returns(NFT[] memory NFTs){
        //参数检查
        require(owner != address(0),"batchURIAndId:address zero is not a valid owner");
        uint256 balanceOfOwner =  balanceOf(owner);
        require(startIndex < balanceOfOwner,"batchURIAndId:the startIndex out of range");
        // 获取batchSize和balanceOfOwner的最小值min
        uint256 maxAmount = balanceOfOwner-1 - startIndex;  //balanceOfOwner-1最大的index
        uint256 reallyAmount;
        if (maxAmount < batchSize) {
            reallyAmount = maxAmount;
        }else{
            reallyAmount = batchSize;
        }
        // 创建reallyAmount大小的NFTS数组
        NFT[] memory NFTs = new NFT[](reallyAmount);

        // 使用for语句向这个数组中填充
        for (uint256 i =0 ; i < reallyAmount; i++ ){
            uint256 tokenId = tokenByIndex(i);
            string memory tokenUri = tokenURI(tokenId);
            NFTs[i]=NFT({
                uri:tokenUri,
                id: tokenId,
                contractAddress:address(this),
                tokenStandard:"erc721"
            });
        }
    }

    /***
    * @dev 获取批次id
    * @param startIndex index的开始位置
    * @param batchSize 获取uri的树木
    */
    function getBatchID (uint256 startIndex,uint256 batchSize_,address owner)external view {

    }
}