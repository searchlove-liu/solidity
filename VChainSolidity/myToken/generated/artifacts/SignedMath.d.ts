export declare const Artifact_SignedMath: {
  "contractName": "SignedMath",
  "sourceName": "contracts/openzeppelin_l/contracts/utils/math/SignedMath.sol",
  "abi": [],
  "bytecode": "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122087d4e633cf10a225d0bd263e270685a79c03470e4ae9f5a0c0b4a77ed3ee314464736f6c63430008010033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122087d4e633cf10a225d0bd263e270685a79c03470e4ae9f5a0c0b4a77ed3ee314464736f6c63430008010033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/openzeppelin_l/contracts/utils/math/SignedMath.sol",
  "devdoc": {
    "details": "Standard signed math utilities missing in the Solidity language.",
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "evm": {
    "bytecode": {
      "generatedSources": [],
      "linkReferences": {},
      "object": "60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122087d4e633cf10a225d0bd263e270685a79c03470e4ae9f5a0c0b4a77ed3ee314464736f6c63430008010033",
      "opcodes": "PUSH1 0x56 PUSH1 0x50 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x43 JUMPI PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x0 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 DUP8 0xD4 0xE6 CALLER 0xCF LT LOG2 0x25 0xD0 0xBD 0x26 RETURNDATACOPY 0x27 MOD DUP6 0xA7 SWAP13 SUB SELFBALANCE 0xE 0x4A 0xE9 CREATE2 LOG0 0xC0 0xB4 0xA7 PUSH31 0xD3EE314464736F6C6343000801003300000000000000000000000000000000 ",
      "sourceMap": "215:1047:26:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122087d4e633cf10a225d0bd263e270685a79c03470e4ae9f5a0c0b4a77ed3ee314464736f6c63430008010033",
      "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 DUP8 0xD4 0xE6 CALLER 0xCF LT LOG2 0x25 0xD0 0xBD 0x26 RETURNDATACOPY 0x27 MOD DUP6 0xA7 SWAP13 SUB SELFBALANCE 0xE 0x4A 0xE9 CREATE2 LOG0 0xC0 0xB4 0xA7 PUSH31 0xD3EE314464736F6C6343000801003300000000000000000000000000000000 ",
      "sourceMap": "215:1047:26:-:0;;;;;;;;"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "17200",
        "executionCost": "97",
        "totalCost": "17297"
      },
      "internal": {
        "abs(int256)": "infinite",
        "average(int256,int256)": "infinite",
        "max(int256,int256)": "infinite",
        "min(int256,int256)": "infinite"
      }
    },
    "methodIdentifiers": {}
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Standard signed math utilities missing in the Solidity language.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/openzeppelin_l/contracts/utils/math/SignedMath.sol\":\"SignedMath\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@4.9.6/\"]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/utils/math/SignedMath.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.8.0) (utils/math/SignedMath.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Standard signed math utilities missing in the Solidity language.\\n */\\nlibrary SignedMath {\\n    /**\\n     * @dev Returns the largest of two signed numbers.\\n     */\\n    function max(int256 a, int256 b) internal pure returns (int256) {\\n        return a > b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the smallest of two signed numbers.\\n     */\\n    function min(int256 a, int256 b) internal pure returns (int256) {\\n        return a < b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the average of two signed numbers without overflow.\\n     * The result is rounded towards zero.\\n     */\\n    function average(int256 a, int256 b) internal pure returns (int256) {\\n        // Formula from the book \\\"Hacker's Delight\\\"\\n        int256 x = (a & b) + ((a ^ b) >> 1);\\n        return x + (int256(uint256(x) >> 255) & (a ^ b));\\n    }\\n\\n    /**\\n     * @dev Returns the absolute unsigned value of a signed value.\\n     */\\n    function abs(int256 n) internal pure returns (uint256) {\\n        unchecked {\\n            // must be unchecked in order to support `n = type(int256).min`\\n            return uint256(n >= 0 ? n : -n);\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc\",\"license\":\"MIT\"}},\"version\":1}",
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