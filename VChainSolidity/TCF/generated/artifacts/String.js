export const Artifact_String = /** @type {const} **/ ({
  "contractName": "String",
  "sourceName": "contracts/String.sol",
  "abi": [],
  "bytecode": "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212201b9bf160581e6324e05f16dca49f68cd01fd51214ad23e7a3502eb7adbfa551364736f6c63430008010033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212201b9bf160581e6324e05f16dca49f68cd01fd51214ad23e7a3502eb7adbfa551364736f6c63430008010033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/String.sol",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "evm": {
    "bytecode": {
      "generatedSources": [],
      "linkReferences": {},
      "object": "60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212201b9bf160581e6324e05f16dca49f68cd01fd51214ad23e7a3502eb7adbfa551364736f6c63430008010033",
      "opcodes": "PUSH1 0x56 PUSH1 0x50 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x43 JUMPI PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x0 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 SHL SWAP12 CALL PUSH1 0x58 0x1E PUSH4 0x24E05F16 0xDC LOG4 SWAP16 PUSH9 0xCD01FD51214AD23E7A CALLDATALOAD MUL 0xEB PUSH27 0xDBFA551364736F6C63430008010033000000000000000000000000 ",
      "sourceMap": "62:1228:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212201b9bf160581e6324e05f16dca49f68cd01fd51214ad23e7a3502eb7adbfa551364736f6c63430008010033",
      "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 SHL SWAP12 CALL PUSH1 0x58 0x1E PUSH4 0x24E05F16 0xDC LOG4 SWAP16 PUSH9 0xCD01FD51214AD23E7A CALLDATALOAD MUL 0xEB PUSH27 0xDBFA551364736F6C63430008010033000000000000000000000000 ",
      "sourceMap": "62:1228:0:-:0;;;;;;;;"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "17200",
        "executionCost": "97",
        "totalCost": "17297"
      },
      "internal": {
        "equal(string memory,string memory)": "infinite",
        "toHexString(address)": "infinite",
        "toHexString(uint256,uint256)": "infinite"
      }
    },
    "methodIdentifiers": {}
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/String.sol\":\"String\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/String.sol\":{\"content\":\"//SPDX-License-Identidifier:MIT\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nlibrary String {\\r\\n    bytes16 private constant _SYMBOLS = \\\"0123456789abcdef\\\";\\r\\n\\r\\n    /**\\r\\n     * @dev Converts an `address` with fixed length of 20 bytes to its not checksummed ASCII `string` hexadecimal representation.\\r\\n     */\\r\\n    function toHexString(address addr) internal pure returns (string memory) {\\r\\n        return toHexString(uint256(uint160(addr)), 20);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\r\\n     */\\r\\n    function toHexString(\\r\\n        uint256 value,\\r\\n        uint256 length\\r\\n    ) internal pure returns (string memory) {\\r\\n        bytes memory buffer = new bytes(2 * length + 2);\\r\\n        buffer[0] = \\\"0\\\";\\r\\n        buffer[1] = \\\"x\\\";\\r\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\r\\n            buffer[i] = _SYMBOLS[value & 0xf];\\r\\n            value >>= 4;\\r\\n        }\\r\\n        require(value == 0, \\\"Strings: hex length insufficient\\\");\\r\\n        return string(buffer);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns true if the two strings are equal.\\r\\n     */\\r\\n    function equal(\\r\\n        string memory a,\\r\\n        string memory b\\r\\n    ) internal pure returns (bool) {\\r\\n        return keccak256(bytes(a)) == keccak256(bytes(b));\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0xbbbc72b84820f104b74fb2753e47987b7854fb923de69d4cd7af7e67fa1f24f2\"}},\"version\":1}",
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