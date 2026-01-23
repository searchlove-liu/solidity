// SPDX-License-Identifier:MIT

pragma solidity ^0.8.1;

import {TCF_NFTPrice} from "../extensions/ERC1155/TCF_NFTPrice.sol";

contract test_TCF_NFTPrice is TCF_NFTPrice {
    // 测试_getNFTPrice函数
    function test_GetNFTPrice(uint256 id) public view returns (uint256) {}
}
