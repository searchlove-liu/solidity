// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC1155/extensions/ERC1155URIStorage.sol)

pragma solidity ^0.8.0;

import "./TCF_ERC1155.sol";
import {utils} from "../../utils.sol";
import {Ownable} from "../../openzeppelin_l/contracts/access/Ownable.sol";

/**
 * @dev ERC1155 token with storage based token URI management.
 * Inspired by the ERC721URIStorage extension
 *
 * _Available since v4.6._
 */

//  TODO: 查看Pinata等IPFS存储服务商的使用情况
// 删除baseURI

abstract contract TCF_ERC1155URIStorage is TCF_ERC1155, Ownable, utils {
    // using Strings for uint256;

    // Optional base URI
    string[6] private _baseURI;

    // 标识是否被初始化
    uint8 public _initializedURIStorage;

    // Optional mapping for token URIs
    mapping(uint256 => mapping(uint256 => string)) private _tokenURIs;

    // 测试_baseURI
    // function test_BaseURI() public view returns (string[6] memory) {
    //     return _baseURI;
    // }

    function Euri(uint256 tokenId) public view virtual returns (string memory) {
        require(_initializedURIStorage == 1, "BASEURI_NOT_INITIALIZED");
        require(tokenId < 6, "TOKENID_RANGE");
        return _baseURI[tokenId];
    }

    // /**
    //  * @dev Sets `tokenURI` as the tokenURI of `tokenId`.
    //  */
    // function _setURI(uint256, uint256, string memory) internal virtual {
    //     // 没有实现设置单个URI的功能
    //     revert(E.ERR_FUNCTION_NOT_SUPPORTED);
    //     // _tokenURIs[tokenId][editionId] = tokenURI;
    //     // emit URI(uri(tokenId), tokenId);
    // }

    /**
     * @dev Sets `baseURI` as the `_baseURI` for all tokens
     * Only callable by the owner.可以被设置多次
     */
    //  todo :将string改为bytes
    function setBaseURI(bytes[6] memory baseURI) external virtual onlyOwner {
        for (uint256 i = 0; i < 6; i++) {
            _baseURI[i] = string(baseURI[i]);
        }
        _initializedURIStorage = 1;
    }
}
