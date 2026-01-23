// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./TCF_ERC1155.sol";

/**
 * @dev This implements an optional extension of {ERC721} defined in the EIP that adds
 * enumerability of all the token ids in the contract as well as all token ids owned by each
 * account.
 */
abstract contract ERC1155Enumerable is TCF_ERC1155 {
    // // Mapping from owner to list of owned token IDs
    // mapping(address => mapping(uint256 => uint256)) private _ownedTokens;
    // // Mapping from token ID to index of the owner tokens list
    // mapping(uint256 => uint256) private _ownedTokensIndex;
    // /**
    //  * @dev See {IERC721Enumerable-tokenOfOwnerByIndex}.
    //  */
    // function tokenOfOwnerByIndex(
    //     address owner,
    //     uint256 index
    // ) public view virtual override returns (uint256) {
    //     require(
    //         index < TCF_ERC1155.balanceOf(owner),
    //         "ERC1155Enumerable: owner index out of bounds"
    //     );
    //     return _ownedTokens[owner][index];
    // }
    // /**
    //  * @dev See {ERC721-_beforeTokenTransfer}.
    //  */
    // function _beforeTokenTransfer(
    //     address from,
    //     address to,
    //     uint256 firstTokenId,
    //     uint256 batchSize
    // ) internal virtual override {
    //     super._beforeTokenTransfer(from, to, firstTokenId, batchSize);
    //     if (batchSize > 1) {
    //         // Will only trigger during construction. Batch transferring (minting) is not available afterwards.
    //         revert("ERC721Enumerable: consecutive transfers not supported");
    //     }
    //     uint256 tokenId = firstTokenId;
    //     if (from == address(0)) {
    //         _addTokenToAllTokensEnumeration(tokenId);
    //     } else if (from != to) {
    //         _removeTokenFromOwnerEnumeration(from, tokenId);
    //     }
    //     if (to == address(0)) {
    //         _removeTokenFromAllTokensEnumeration(tokenId);
    //     } else if (to != from) {
    //         _addTokenToOwnerEnumeration(to, tokenId);
    //     }
    // }
    // /**
    //  * @dev Private function to add a token to this extension's ownership-tracking data structures.
    //  * @param to address representing the new owner of the given token ID
    //  * @param tokenId uint256 ID of the token to be added to the tokens list of the given address
    //  */
    // function _addTokenToOwnerEnumeration(address to, uint256 tokenId) private {
    //     uint256 length = TCF_ERC1155.balanceOf(to);
    //     _ownedTokens[to][length] = tokenId;
    //     _ownedTokensIndex[tokenId] = length;
    // }
    // /**
    //  * @dev Private function to remove a token from this extension's ownership-tracking data structures. Note that
    //  * while the token is not assigned a new owner, the `_ownedTokensIndex` mapping is _not_ updated: this allows for
    //  * gas optimizations e.g. when performing a transfer operation (avoiding double writes).
    //  * This has O(1) time complexity, but alters the order of the _ownedTokens array.
    //  * @param from address representing the previous owner of the given token ID
    //  * @param tokenId uint256 ID of the token to be removed from the tokens list of the given address
    //  */
    // function _removeTokenFromOwnerEnumeration(
    //     address from,
    //     uint256 tokenId
    // ) private {
    //     // To prevent a gap in from's tokens array, we store the last token in the index of the token to delete, and
    //     // then delete the last slot (swap and pop).
    //     uint256 lastTokenIndex = TCF_ERC1155.balanceOf(from) - 1;
    //     uint256 tokenIndex = _ownedTokensIndex[tokenId];
    //     // When the token to delete is the last token, the swap operation is unnecessary
    //     if (tokenIndex != lastTokenIndex) {
    //         uint256 lastTokenId = _ownedTokens[from][lastTokenIndex];
    //         _ownedTokens[from][tokenIndex] = lastTokenId; // Move the last token to the slot of the to-delete token
    //         _ownedTokensIndex[lastTokenId] = tokenIndex; // Update the moved token's index
    //     }
    //     // This also deletes the contents at the last position of the array
    //     delete _ownedTokensIndex[tokenId];
    //     delete _ownedTokens[from][lastTokenIndex];
    // }
}
