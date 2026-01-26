export declare const Artifact_TCF_ErrorCode: {
  "contractName": "TCF_ErrorCode",
  "sourceName": "contracts/extensions/TCF_ErrorCode.sol",
  "abi": [],
  "bytecode": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220ef673703f746658c09d554be30ddd525bab1f74e28e14cd544886f5707a9145b64736f6c63430008010033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220ef673703f746658c09d554be30ddd525bab1f74e28e14cd544886f5707a9145b64736f6c63430008010033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/extensions/TCF_ErrorCode.sol",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "evm": {
    "bytecode": {
      "generatedSources": [],
      "linkReferences": {},
      "object": "60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220ef673703f746658c09d554be30ddd525bab1f74e28e14cd544886f5707a9145b64736f6c63430008010033",
      "opcodes": "PUSH1 0x56 PUSH1 0x37 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x2A JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x0 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xEF PUSH8 0x3703F746658C09D5 SLOAD 0xBE ADDRESS 0xDD 0xD5 0x25 0xBA 0xB1 0xF7 0x4E 0x28 0xE1 0x4C 0xD5 DIFFICULTY DUP9 PUSH16 0x5707A9145B64736F6C63430008010033 ",
      "sourceMap": "60:1749:5:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;60:1749:5;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220ef673703f746658c09d554be30ddd525bab1f74e28e14cd544886f5707a9145b64736f6c63430008010033",
      "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xEF PUSH8 0x3703F746658C09D5 SLOAD 0xBE ADDRESS 0xDD 0xD5 0x25 0xBA 0xB1 0xF7 0x4E 0x28 0xE1 0x4C 0xD5 DIFFICULTY DUP9 PUSH16 0x5707A9145B64736F6C63430008010033 ",
      "sourceMap": "60:1749:5:-:0;;;;;;;;"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "17200",
        "executionCost": "103",
        "totalCost": "17303"
      }
    },
    "methodIdentifiers": {}
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/extensions/TCF_ErrorCode.sol\":\"TCF_ErrorCode\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/extensions/TCF_ErrorCode.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\nlibrary TCF_ErrorCode {\\r\\n    string internal constant ERR_ADDR_LEN = \\\"ADDR_LEN\\\";\\r\\n    string internal constant ERR_ADDR_EXISTS = \\\"ADDR_EXISTS\\\";\\r\\n    string internal constant ERR_NOT_DCF_USDT = \\\"NOT_DCF_USDT\\\";\\r\\n    string internal constant ERR_DUP_DCF = \\\"DUP_DCF\\\";\\r\\n    string internal constant ERR_DUP_USDT = \\\"DUP_USDT\\\";\\r\\n    string internal constant ERR_PRICES_LEN = \\\"PRICES_LEN\\\";\\r\\n    string internal constant ERR_TOKEN_UNSUPPORTED = \\\"TOKEN_UNSUPPORTED\\\";\\r\\n    string internal constant ERR_TOKENID_RANGE = \\\"TOKENID_RANGE\\\";\\r\\n    string internal constant ERR_NATURE_TOKEN_DEL = \\\"NATURE_TOKEN_DEL\\\";\\r\\n    string internal constant ERR_PRICES_INITIALIZED = \\\"PRICES_INITIALIZED\\\";\\r\\n    string internal constant ERR_NFT_SENDED_VALID = \\\"NFT_SENDED_VALID\\\";\\r\\n    string internal constant ERR_INCORRECT_FUNDS = \\\"INCORRECT_FUNDS\\\";\\r\\n    string internal constant ERR_INVALID_EDITIONID = \\\"INVALID_EDITIONID\\\";\\r\\n    string internal constant ERR_TOKEN_NOT_OWNED = \\\"TOKEN_NOT_OWNED\\\";\\r\\n    string internal constant ERR_DATA_INVALID = \\\"DATA_INVALID\\\";\\r\\n    string internal constant ERR_ZERO_ADDRESS = \\\"ZERO_ADDRESS\\\";\\r\\n    string internal constant ERR_PRICES_NOT_INITIALIZED =\\r\\n        \\\"PRICES_NOT_INITIALIZED\\\";\\r\\n    string internal constant ERR_ROOT_NOT_INITIALIZED = \\\"ROOT_NOT_INITIALIZED\\\";\\r\\n    string internal constant ERR_ROOT_INITIALIZED = \\\"ROOT_INITIALIZED\\\";\\r\\n    string internal constant ERR_NODE_NOT_EXISTS = \\\"NODE_NOT_EXISTS\\\";\\r\\n    string internal constant ERR_PRICE_NOT_SET = \\\"PRICE_NOT_SET\\\";\\r\\n    string internal constant ERR_TC_TRANSFER_FAILED = \\\"TC_TRANSFER_FAILED\\\";\\r\\n    string internal constant ERR_BASEURI_NOT_INITIALIZED =\\r\\n        \\\"BASEURI_NOT_INITIALIZED\\\";\\r\\n    string internal constant ERR_FUNCTION_NOT_SUPPORTED =\\r\\n        \\\"FUNCTION_NOT_SUPPORTED\\\";\\r\\n}\\r\\n\",\"keccak256\":\"0x431c57274208217ff107e7f597cf2e5a58597e5732ce4e08fd6d08e19f1dbdc6\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [],
    "types": null
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
};