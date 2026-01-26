// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.9.6) (interfaces/IERC4906.sol)

pragma solidity ^0.8.0;

import "../utils/introspection/IERC165.sol";

/// @dev EIP-4906: Metadata Update Extension for ERC-721 tokens.
interface IERC4906 is IERC165 {
    event MetadataUpdate(uint256 _tokenId);
    event BatchMetadataUpdate(uint256 _fromTokenId, uint256 _toTokenId);
}
