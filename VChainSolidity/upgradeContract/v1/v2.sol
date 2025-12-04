// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.5.0
pragma solidity ^0.8.27;

import {
    OwnableUpgradeable
} from "@openzeppelin/contracts-upgradeable@5.5.0/access/OwnableUpgradeable.sol";
import {
    UUPSUpgradeable
} from "@openzeppelin/contracts@5.5.0/proxy/utils/UUPSUpgradeable.sol";

contract MyToken is OwnableUpgradeable, UUPSUpgradeable {
    /// @custom:storage-location erc7201:myProject.MyToken
    struct MyTokenStorage {
        uint256 _nextTokenId;
    }

    // keccak256(abi.encode(uint256(keccak256("myProject.MyToken")) - 1)) & ~bytes32(uint256(0xff))
    bytes32 private constant MYTOKEN_STORAGE_LOCATION =
        0xfbb7c9e4123fcf4b1aad53c70358f7b1c1d7cf28092f5178b53e55db565e9200;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(address initialOwner) public initializer {
        __Ownable_init(initialOwner);
    }

    function setValue() public {
        MyTokenStorage storage $ = _getMyTokenStorage();
        $._nextTokenId += 2;
    }

    function getValue() public pure returns (uint256) {
        MyTokenStorage memory $ = _getMyTokenStorage();
        return $._nextTokenId;
    }

    function _getMyTokenStorage()
        private
        pure
        returns (MyTokenStorage storage $)
    {
        assembly {
            $.slot := MYTOKEN_STORAGE_LOCATION
        }
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}
}
