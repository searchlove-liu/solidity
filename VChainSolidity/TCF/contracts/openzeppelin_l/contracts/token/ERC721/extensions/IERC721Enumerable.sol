// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.9.6) (token/ERC721/extensions/IERC721Enumerable.sol)

pragma solidity ^0.8.0;

import "../IERC721.sol";

/**
 * @dev ERC-721 Non-Fungible Token Standard, optional enumeration extension
 */
interface IERC721Enumerable is IERC721 {
    function totalSupply() external view returns (uint256);

    function tokenOfOwnerByIndex(
        address owner,
        uint256 index
    ) external view returns (uint256);

    function tokenByIndex(uint256 index) external view returns (uint256);
}
