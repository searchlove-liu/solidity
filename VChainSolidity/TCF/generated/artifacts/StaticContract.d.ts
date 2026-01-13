export declare const Artifact_StaticContract: {
  "contractName": "StaticContract",
  "sourceName": "contracts/static.sol",
  "abi": [],
  "bytecode": "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220c6c1a273ca58e94cad33270e1996bb690e6a351ed4ae16cf20a0a51a5cdd11d764736f6c63430008010033",
  "deployedBytecode": "0x6080604052600080fdfea2646970667358221220c6c1a273ca58e94cad33270e1996bb690e6a351ed4ae16cf20a0a51a5cdd11d764736f6c63430008010033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/static.sol",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "evm": {
    "bytecode": {
      "generatedSources": [],
      "linkReferences": {},
      "object": "6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220c6c1a273ca58e94cad33270e1996bb690e6a351ed4ae16cf20a0a51a5cdd11d764736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x3F DUP1 PUSH1 0x1D PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xC6 0xC1 LOG2 PUSH20 0xCA58E94CAD33270E1996BB690E6A351ED4AE16CF KECCAK256 LOG0 0xA5 BYTE 0x5C 0xDD GT 0xD7 PUSH5 0x736F6C6343 STOP ADDMOD ADD STOP CALLER ",
      "sourceMap": "788:36:11:-:0;;;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "6080604052600080fdfea2646970667358221220c6c1a273ca58e94cad33270e1996bb690e6a351ed4ae16cf20a0a51a5cdd11d764736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xC6 0xC1 LOG2 PUSH20 0xCA58E94CAD33270E1996BB690E6A351ED4AE16CF KECCAK256 LOG0 0xA5 BYTE 0x5C 0xDD GT 0xD7 PUSH5 0x736F6C6343 STOP ADDMOD ADD STOP CALLER ",
      "sourceMap": "788:36:11:-:0;;;;;"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "12600",
        "executionCost": "66",
        "totalCost": "12666"
      }
    },
    "methodIdentifiers": {}
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/static.sol\":\"StaticContract\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/static.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// Compatible with OpenZeppelin Contracts 4.9.6\\r\\n\\r\\n// import {TCF} from \\\"./TCF.sol\\\";\\r\\n\\r\\n/***\\r\\n * @dev \\u9759\\u6001\\u5408\\u7ea6\\uff0c\\u7ee7\\u627f\\u4e86TCF\\u5408\\u7ea6\\u3002\\u529f\\u80fd\\uff1a\\u8ba1\\u7b97\\u7b97\\u529b\\uff0cNFT\\u8fc7\\u671f\\u4e4b\\u540e\\u8ba9NFT\\u65e0\\u6548\\uff08\\u4e0d\\u518d\\u4f5c\\u4e3a\\u7b97\\u529b\\u8ba1\\u7b97\\u7684\\u4f9d\\u636e\\uff09\\u3002\\r\\n * \\u5b9e\\u73b0\\uff1a\\u7b97\\u529b\\u6307\\u4ee3\\u7528\\u6237\\u82b1\\u8d39\\u591a\\u5c11usdt/100\\u3002\\u5c06ERC1155\\u5408\\u7ea6\\u5730\\u5740\\u4f20\\u5165\\u52a8\\u6001\\u7b97\\u529b\\u5408\\u7ea6\\u548c\\u9759\\u6001\\u7b97\\u529b\\u5408\\u7ea6\\uff0c\\r\\n * \\u56e0\\u4e3a\\u5728\\u8ba1\\u7b97\\u7b97\\u529b\\u65f6\\u9700\\u8981\\u77e5\\u9053\\u7528\\u6237\\u62e5\\u6709\\u591a\\u5c11\\u4e2aNFT\\uff0c\\u7136\\u540e\\u6839\\u636e\\u62e5\\u6709\\u7684NFT\\u6765\\u8ba1\\u7b97\\u7528\\u6237\\u62e5\\u6709\\u591a\\u5c11\\u7b97\\u529b\\u3002\\r\\n * \\u540c\\u65f6\\u5bf9\\u4e8e\\u9759\\u6001\\u5956\\u52b1\\u548c\\u52a8\\u6001\\u5956\\u52b1\\uff0c\\u6bcf\\u5929\\u5728\\u8ba1\\u7b97\\u7b97\\u529b\\u7684\\u65f6\\u5019\\u81ea\\u52a8\\u53e0\\u52a0\\uff0c\\u7136\\u540e\\u5c06\\u8ba1\\u7b97\\u5f97\\u5230\\u7684\\u5956\\u52b1\\u4fdd\\u5b58\\u5728\\u533a\\u5757\\u94fe\\u5916\\uff0c\\r\\n * \\u7528\\u6237\\u9700\\u8981\\u624b\\u52a8\\u63d0\\u6b3e\\u3002\\uff08\\u56e0\\u4e3a\\u9759\\u6001\\u5408\\u7ea6\\u548c\\u52a8\\u6001\\u5408\\u7ea6\\u6781\\u5ea6\\u4f9d\\u8d56NFT\\u5408\\u7ea6\\uff0c\\u6240\\u4ee5\\u5148\\u5199NFT\\u5408\\u7ea6\\uff09\\r\\n */\\r\\n\\r\\ncontract StaticContract {\\r\\n    //\\r\\n}\\r\\n\",\"keccak256\":\"0x883a8e9b7b45bea4dcb5b5fadb5f346a620d2c3b2d42f473ad467d90630dce1e\",\"license\":\"MIT\"}},\"version\":1}",
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