// SPDX-License-Identifier:MIT

pragma solidity ^0.8.1;

// 测试TCF_ERC1155URIStorage合约
import {TCF_ERC1155URIStorage} from "./../extensions/ERC1155/TCF_ERC1155URIStorage.sol";

contract test_TCF_ERC1155URIStorage is TCF_ERC1155URIStorage {
    // 测试_setBaseURI函数
    function test_SetBaseURI(bytes[6] memory baseURI) public {
        TCF_ERC1155URIStorage._setBaseURI(baseURI);
    }
}
