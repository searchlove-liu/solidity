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

    function getValue() public view returns (uint256) {
        // 在这里绝对不能将 storage 改为 memory，因为_getOwnableStorage()返回的是指向链上存储位置的引用，如果这里
        // 使用memory将无法获取数据。
        // 虽然当前使用memory也会返回正确的数据，但感觉有bug
        MyTokenStorage storage $ = _getMyTokenStorage();
        return $._nextTokenId;
    }

// 这个函数必须是private或internal，因为返回值是storage，仅在合约内部使用
// 如果这个是public，A合约执行这个函数，上下文是A合约，返回的是本合约的数据指针，所以不可以。
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
