// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.5.0
pragma solidity ^0.8.27;

import {
    OwnableUpgradeable
} from "@openzeppelin/contracts-upgradeable@5.5.0/access/OwnableUpgradeable.sol";
// 0.8.2版本修复了0.8.1中存在的三个具体Bug，这些Bug都可能导致合约在特定情况下行为异常：
//  **Yul优化器错误**：优化器在对涉及`keccak256`哈希计算和常量的代码进行某些重组时，可能会生成**错误的字节码**。
//  （在进行合约升级时，需要用到keccak256，计算数据存储位置，所以erc1967代码中都使用0.8.2版本及以上）
// UUPSUpgradeable中也继承了UUPSUpgradeable，所以这个代码在低版本最低也需要0.8.2编译器
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
        // 注意这里是逻辑合约，使用这个函数会让修改逻辑合约状态，让别人无法直接调用逻辑合约的升级函数。
        _disableInitializers();
    }

    // 在proxy部署时执行这个初始化函数
    function initialize(address initialOwner) public initializer {
        __Ownable_init(initialOwner);
    }

    function setValue() public {
        MyTokenStorage storage $ = _getMyTokenStorage();
        $._nextTokenId++;
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
