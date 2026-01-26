export declare const Artifact_SignedMath: {
  "contractName": "SignedMath",
  "sourceName": "contracts/openzeppelin_l/contracts/utils/math/SignedMath.sol",
  "abi": [],
  "bytecode": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212202ead92fd35c42a67ef573ccb3c0b36a7b663b3c9266bed1a32d8f91af8a4925964736f6c63430008010033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212202ead92fd35c42a67ef573ccb3c0b36a7b663b3c9266bed1a32d8f91af8a4925964736f6c63430008010033",
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
      "object": "60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212202ead92fd35c42a67ef573ccb3c0b36a7b663b3c9266bed1a32d8f91af8a4925964736f6c63430008010033",
      "opcodes": "PUSH1 0x56 PUSH1 0x37 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x2A JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x0 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x2E 0xAD SWAP3 REVERT CALLDATALOAD 0xC4 0x2A PUSH8 0xEF573CCB3C0B36A7 0xB6 PUSH4 0xB3C9266B 0xED BYTE ORIGIN 0xD8 0xF9 BYTE 0xF8 LOG4 SWAP3 MSIZE PUSH5 0x736F6C6343 STOP ADDMOD ADD STOP CALLER ",
      "sourceMap": "223:1081:57:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;223:1081:57;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212202ead92fd35c42a67ef573ccb3c0b36a7b663b3c9266bed1a32d8f91af8a4925964736f6c63430008010033",
      "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x2E 0xAD SWAP3 REVERT CALLDATALOAD 0xC4 0x2A PUSH8 0xEF573CCB3C0B36A7 0xB6 PUSH4 0xB3C9266B 0xED BYTE ORIGIN 0xD8 0xF9 BYTE 0xF8 LOG4 SWAP3 MSIZE PUSH5 0x736F6C6343 STOP ADDMOD ADD STOP CALLER ",
      "sourceMap": "223:1081:57:-:0;;;;;;;;"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "17200",
        "executionCost": "103",
        "totalCost": "17303"
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
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Standard signed math utilities missing in the Solidity language.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/openzeppelin_l/contracts/utils/math/SignedMath.sol\":\"SignedMath\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@4.9.6/\"]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/utils/math/SignedMath.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.8.0) (utils/math/SignedMath.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Standard signed math utilities missing in the Solidity language.\\r\\n */\\r\\nlibrary SignedMath {\\r\\n    /**\\r\\n     * @dev Returns the largest of two signed numbers.\\r\\n     */\\r\\n    function max(int256 a, int256 b) internal pure returns (int256) {\\r\\n        return a > b ? a : b;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the smallest of two signed numbers.\\r\\n     */\\r\\n    function min(int256 a, int256 b) internal pure returns (int256) {\\r\\n        return a < b ? a : b;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the average of two signed numbers without overflow.\\r\\n     * The result is rounded towards zero.\\r\\n     */\\r\\n    function average(int256 a, int256 b) internal pure returns (int256) {\\r\\n        // Formula from the book \\\"Hacker's Delight\\\"\\r\\n        int256 x = (a & b) + ((a ^ b) >> 1);\\r\\n        return x + (int256(uint256(x) >> 255) & (a ^ b));\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the absolute unsigned value of a signed value.\\r\\n     */\\r\\n    function abs(int256 n) internal pure returns (uint256) {\\r\\n        unchecked {\\r\\n            // must be unchecked in order to support `n = type(int256).min`\\r\\n            return uint256(n >= 0 ? n : -n);\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x7b249694790ca2ae6a813e28025e0ebb9bccb5940a6cba637911fd9c17012055\",\"license\":\"MIT\"}},\"version\":1}",
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