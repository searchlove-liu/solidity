export const Artifact_utils = /** @type {const} **/ ({
  "contractName": "utils",
  "sourceName": "contracts/utils.sol",
  "abi": [],
  "bytecode": "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220f06d7a17eefbb3578a1edc88ff7949af537a3d2299162834a00044a593e3223c64736f6c63430008010033",
  "deployedBytecode": "0x6080604052600080fdfea2646970667358221220f06d7a17eefbb3578a1edc88ff7949af537a3d2299162834a00044a593e3223c64736f6c63430008010033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/utils.sol",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "evm": {
    "bytecode": {
      "generatedSources": [],
      "linkReferences": {},
      "object": "6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220f06d7a17eefbb3578a1edc88ff7949af537a3d2299162834a00044a593e3223c64736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x3F DUP1 PUSH1 0x1D PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 CREATE PUSH14 0x7A17EEFBB3578A1EDC88FF7949AF MSTORE8 PUSH27 0x3D2299162834A00044A593E3223C64736F6C634300080100330000 ",
      "sourceMap": "61:717:14:-:0;;;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "6080604052600080fdfea2646970667358221220f06d7a17eefbb3578a1edc88ff7949af537a3d2299162834a00044a593e3223c64736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 CREATE PUSH14 0x7A17EEFBB3578A1EDC88FF7949AF MSTORE8 PUSH27 0x3D2299162834A00044A593E3223C64736F6C634300080100330000 ",
      "sourceMap": "61:717:14:-:0;;;;;"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "12600",
        "executionCost": "66",
        "totalCost": "12666"
      },
      "internal": {
        "uintToString(uint256)": "infinite"
      }
    },
    "methodIdentifiers": {}
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/utils.sol\":\"utils\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/utils.sol\":{\"content\":\"// SPDX-License-Identifier:MIT\\r\\n\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\ncontract utils {\\r\\n    function uintToString(uint256 value) internal pure returns (string memory) {\\r\\n        if (value == 0) {\\r\\n            return \\\"0\\\";\\r\\n        }\\r\\n\\r\\n        uint256 temp = value;\\r\\n        uint256 digits;\\r\\n\\r\\n        // \\u8ba1\\u7b97\\u9700\\u8981\\u591a\\u5c11\\u4f4d\\r\\n        while (temp != 0) {\\r\\n            digits++;\\r\\n            temp /= 10;\\r\\n        }\\r\\n\\r\\n        bytes memory buffer = new bytes(digits);\\r\\n        uint256 writeIndex = digits;\\r\\n\\r\\n        // \\u4ece\\u4f4e\\u4f4d\\u586b\\u5165\\u5b57\\u7b26\\r\\n        temp = value;\\r\\n        while (temp != 0) {\\r\\n            writeIndex--;\\r\\n            buffer[writeIndex] = bytes1(uint8(48 + (temp % 10))); // '0' \\u7684 ascii \\u662f 48\\r\\n            temp /= 10;\\r\\n        }\\r\\n        return string(buffer);\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0xcc8be5ed79f7a541ed76a6482c8d3dd8750e30910ee1ebd5dfee8f260e6f3a9b\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [],
    "types": null
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
});