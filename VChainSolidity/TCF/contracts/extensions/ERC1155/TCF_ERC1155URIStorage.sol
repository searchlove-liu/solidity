// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC1155/extensions/ERC1155URIStorage.sol)

pragma solidity ^0.8.0;

import "./TCF_ERC1155.sol";
import {utils} from "../../utils.sol";

/**
 * @dev ERC1155 token with storage based token URI management.
 * Inspired by the ERC721URIStorage extension
 *
 * _Available since v4.6._
 */
abstract contract TCF_ERC1155URIStorage is TCF_ERC1155, utils {
    // using Strings for uint256;

    // Optional base URI
    string[6] private _baseURI;

    // 标识是否被初始化
    uint8 private _initializedURIStorage = 0;

    // Optional mapping for token URIs
    mapping(uint256 => mapping(uint256 => string)) private _tokenURIs;

    // 测试_baseURI
    // function test_BaseURI() public view returns (string[6] memory) {
    //     return _baseURI;
    // }

    function _uri(
        uint256 tokenId,
        uint256 editionId
    ) public view virtual returns (string memory) {
        require(tokenId < 6, E.ERR_TOKENID_RANGE);
        require(
            TCF_ERC1155.ownerOf(tokenId, editionId) != address(0),
            E.ERR_INVALID_EDITIONID
        );
        // string memory tokenURI = _tokenURIs[tokenId][editionId];
        // If token URI is set, concatenate base URI and tokenURI (via abi.encodePacked).
        return
            string(
                abi.encodePacked(
                    _baseURI[tokenId],
                    utils.uintToString(editionId),
                    ".json"
                )
            );
    }

    /**
     * @dev Sets `tokenURI` as the tokenURI of `tokenId`.
     */
    function _setURI(
        uint256 tokenId,
        uint256 editionId,
        string memory tokenURI
    ) internal virtual {
        _tokenURIs[tokenId][editionId] = tokenURI;
        emit URI(uri(tokenId), tokenId);
    }

    /**
     * @dev Sets `baseURI` as the `_baseURI` for all tokens
     */
    //  todo :将string改为bytes
    function _setBaseURI(bytes[6] memory baseURI) internal virtual {
        require(_initializedURIStorage == 0, "Base URI already initialized");
        for (uint256 i = 0; i < 6; i++) {
            _baseURI[i] = string(baseURI[i]);
        }
        _initializedURIStorage = 1;
    }
}
