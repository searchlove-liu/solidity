// SPDX-License-Identifier:MIT

pragma solidity ^0.8.1;

import {TCF_ERC1155} from "./../extensions/ERC1155/TCF_ERC1155.sol";

contract test_TCF_ERC1155 is TCF_ERC1155 {
    // 测试mint函数
    function testMint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public {
        TCF_ERC1155._mint(to, id, amount, data);
    }

    // 测试_mintBatch
    // function testMintBatch(
    //     address to,
    //     uint256[] memory ids,
    //     uint256[] memory amounts,
    //     bytes memory data
    // ) public {
    //     TCF_ERC1155._mintBatch(to, ids, amounts, data);
    // }

    // 测试_balanceOf
    // function testBalanceOfValid(
    //     address account,
    //     uint256 id,
    //     uint32 indate
    // ) public view returns (uint256[] memory) {
    //     return TCF_ERC1155._balanceOf_valid(account, id, indate);
    // }

    // 测试_balanceOf_Invalid
    // function testBalanceOfInvalid(
    //     address account,
    //     uint256 id,
    //     uint32 indate
    // ) public view returns (uint256[] memory) {
    //     return TCF_ERC1155._balanceOf_invalid(account, id, indate);
    // }

    // 测试ownerOf
    function testOwnerOf(
        uint256 tokenId,
        uint256 editionId
    ) public view returns (address) {
        return TCF_ERC1155.ownerOf(tokenId, editionId);
    }

    // 测试_safeTransferFrom
    function testSafeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256[] calldata indexes,
        bytes memory data
    ) public {
        TCF_ERC1155._safeTransferFrom(from, to, id, indexes, data);
    }
}
