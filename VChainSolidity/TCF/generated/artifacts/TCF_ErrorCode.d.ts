export declare const Artifact_TCF_ErrorCode: {
  "contractName": "TCF_ErrorCode",
  "sourceName": "contracts/extensions/TCF_ErrorCode.sol",
  "abi": [],
  "bytecode": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122037aee5dac9733c6af943b908cd1e9ef2897683a0b30e616753bee604bf6dfe0c64736f6c63430008010033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122037aee5dac9733c6af943b908cd1e9ef2897683a0b30e616753bee604bf6dfe0c64736f6c63430008010033",
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
      "object": "60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122037aee5dac9733c6af943b908cd1e9ef2897683a0b30e616753bee604bf6dfe0c64736f6c63430008010033",
      "opcodes": "PUSH1 0x56 PUSH1 0x37 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x2A JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x0 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 CALLDATACOPY 0xAE 0xE5 0xDA 0xC9 PUSH20 0x3C6AF943B908CD1E9EF2897683A0B30E616753BE 0xE6 DIV 0xBF PUSH14 0xFE0C64736F6C6343000801003300 ",
      "sourceMap": "60:1342:6:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;60:1342:6;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122037aee5dac9733c6af943b908cd1e9ef2897683a0b30e616753bee604bf6dfe0c64736f6c63430008010033",
      "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 CALLDATACOPY 0xAE 0xE5 0xDA 0xC9 PUSH20 0x3C6AF943B908CD1E9EF2897683A0B30E616753BE 0xE6 DIV 0xBF PUSH14 0xFE0C64736F6C6343000801003300 ",
      "sourceMap": "60:1342:6:-:0;;;;;;;;"
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
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/extensions/TCF_ErrorCode.sol\":\"TCF_ErrorCode\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/extensions/TCF_ErrorCode.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\nlibrary TCF_ErrorCode {\\r\\n    string internal constant ERR_ADDR_LEN = \\\"ADDR_LEN\\\";\\r\\n    string internal constant ERR_ADDR_EXISTS = \\\"ADDR_EXISTS\\\";\\r\\n    string internal constant ERR_NOT_DCF_USDT = \\\"NOT_DCF_USDT\\\";\\r\\n    string internal constant ERR_DUP_DCF = \\\"DUP_DCF\\\";\\r\\n    string internal constant ERR_DUP_USDT = \\\"DUP_USDT\\\";\\r\\n    string internal constant ERR_PRICES_LEN = \\\"PRICES_LEN\\\";\\r\\n    string internal constant ERR_TOKEN_UNSUPPORTED = \\\"TOKEN_UNSUPPORTED\\\";\\r\\n    string internal constant ERR_TOKENID_RANGE = \\\"TOKENID_RANGE\\\";\\r\\n    string internal constant ERR_NATURE_TOKEN_DEL = \\\"NATURE_TOKEN_DEL\\\";\\r\\n    string internal constant ERR_PRICES_INITIALIZED = \\\"PRICES_INITIALIZED\\\";\\r\\n    string internal constant ERR_NFT_SENDED_VALID = \\\"NFT_SENDED_VALID\\\";\\r\\n    string internal constant ERR_INCORRECT_FUNDS = \\\"INCORRECT_FUNDS\\\";\\r\\n    string internal constant ERR_INVALID_EDITIONID = \\\"INVALID_EDITIONID\\\";\\r\\n    string internal constant ERR_TOKEN_NOT_OWNED = \\\"TOKEN_NOT_OWNED\\\";\\r\\n    string internal constant ERR_DATA_INVALID = \\\"DATA_INVALID\\\";\\r\\n    string internal constant ERR_ADDRESS_ZERO = \\\"ZERO_ADDRESS\\\";\\r\\n    string internal constant ERR_PRICES_NOT_INITIALIZED =\\r\\n        \\\"PRICES_NOT_INITIALIZED\\\";\\r\\n    string internal constant ERR_ROOT_NOT_INITIALIZED = \\\"ROOT_NOT_INITIALIZED\\\";\\r\\n    string internal constant ERR_NODE_NOT_EXISTS = \\\"NODE_NOT_EXISTS\\\";\\r\\n}\\r\\n\",\"keccak256\":\"0xadbf93442dd9728fec5ca9a4ff08d89d78e1233426b7c18ccc2064e598bf95c9\",\"license\":\"MIT\"}},\"version\":1}",
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