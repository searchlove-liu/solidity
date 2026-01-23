// SPDX-License-Identifier:MIT

pragma solidity ^0.8.1;

import {BinaryTree} from "./../extensions/binaryTree/binaryTree.sol";

// 增加mint NFT功能的BinaryTree合约，用于测试
contract test_BinaryTree is BinaryTree {
    // 测试mint函数
    function testMint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public {
        _mint(to, id, amount, data);
    }
}
