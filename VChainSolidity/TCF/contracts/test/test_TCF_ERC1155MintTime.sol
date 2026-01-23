// SPDX-License-Identifier:MIT

pragma solidity ^0.8.1;

import {TCF_ERC1155MintTime} from "./../extensions/ERC1155/TCF_ERC1155MintTime.sol";

// 对TCF_ERC1155MintTime.sol合约进行测试
contract test_TCF_ERC1155MintTime is TCF_ERC1155MintTime {
    // 测试mint函数
    function testMint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public {
        TCF_ERC1155MintTime._mint(to, id, amount, data);
    }

    // 测试_safeTransferFrom
    function testSafeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256[] calldata indexes,
        bytes memory data
    ) public {
        TCF_ERC1155MintTime._safeTransferFrom(from, to, id, indexes, data);
    }
}
