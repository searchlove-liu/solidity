export declare const Artifact_IERC1363Receiver: {
  "contractName": "IERC1363Receiver",
  "sourceName": "contracts/openzeppelin_l/contracts/interfaces/IERC1363Receiver.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "onTransferReceived",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/openzeppelin_l/contracts/interfaces/IERC1363Receiver.sol",
  "devdoc": {
    "details": "Interface for any contract that wants to support {IERC1363-transferAndCall} or {IERC1363-transferFromAndCall} from {ERC1363} token contracts.",
    "kind": "dev",
    "methods": {
      "onTransferReceived(address,address,uint256,bytes)": {
        "details": "Any ERC1363 smart contract calls this function on the recipient after a `transfer` or a `transferFrom`. This function MAY throw to revert and reject the transfer. Return of other than the magic value MUST result in the transaction being reverted. Note: the token contract address is always the message sender.",
        "params": {
          "amount": "uint256 The amount of tokens transferred",
          "data": "bytes Additional data with no specified format",
          "from": "address The address which are token transferred from",
          "operator": "address The address which called `transferAndCall` or `transferFromAndCall` function"
        },
        "returns": {
          "_0": "`bytes4(keccak256(\"onTransferReceived(address,address,uint256,bytes)\"))` unless throwing"
        }
      }
    },
    "version": 1
  },
  "evm": {
    "bytecode": {
      "generatedSources": [],
      "linkReferences": {},
      "object": "",
      "opcodes": "",
      "sourceMap": ""
    },
    "deployedBytecode": {
      "generatedSources": [],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "",
      "opcodes": "",
      "sourceMap": ""
    },
    "gasEstimates": null,
    "methodIdentifiers": {
      "onTransferReceived(address,address,uint256,bytes)": "88a7ca5c"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onTransferReceived\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface for any contract that wants to support {IERC1363-transferAndCall} or {IERC1363-transferFromAndCall} from {ERC1363} token contracts.\",\"kind\":\"dev\",\"methods\":{\"onTransferReceived(address,address,uint256,bytes)\":{\"details\":\"Any ERC1363 smart contract calls this function on the recipient after a `transfer` or a `transferFrom`. This function MAY throw to revert and reject the transfer. Return of other than the magic value MUST result in the transaction being reverted. Note: the token contract address is always the message sender.\",\"params\":{\"amount\":\"uint256 The amount of tokens transferred\",\"data\":\"bytes Additional data with no specified format\",\"from\":\"address The address which are token transferred from\",\"operator\":\"address The address which called `transferAndCall` or `transferFromAndCall` function\"},\"returns\":{\"_0\":\"`bytes4(keccak256(\\\"onTransferReceived(address,address,uint256,bytes)\\\"))` unless throwing\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"onTransferReceived(address,address,uint256,bytes)\":{\"notice\":\"Handle the receipt of ERC1363 tokens\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/openzeppelin_l/contracts/interfaces/IERC1363Receiver.sol\":\"IERC1363Receiver\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/interfaces/IERC1363Receiver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (interfaces/IERC1363Receiver.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface for any contract that wants to support {IERC1363-transferAndCall}\\r\\n * or {IERC1363-transferFromAndCall} from {ERC1363} token contracts.\\r\\n */\\r\\ninterface IERC1363Receiver {\\r\\n    /*\\r\\n     * Note: the ERC-165 identifier for this interface is 0x88a7ca5c.\\r\\n     * 0x88a7ca5c === bytes4(keccak256(\\\"onTransferReceived(address,address,uint256,bytes)\\\"))\\r\\n     */\\r\\n\\r\\n    /**\\r\\n     * @notice Handle the receipt of ERC1363 tokens\\r\\n     * @dev Any ERC1363 smart contract calls this function on the recipient\\r\\n     * after a `transfer` or a `transferFrom`. This function MAY throw to revert and reject the\\r\\n     * transfer. Return of other than the magic value MUST result in the\\r\\n     * transaction being reverted.\\r\\n     * Note: the token contract address is always the message sender.\\r\\n     * @param operator address The address which called `transferAndCall` or `transferFromAndCall` function\\r\\n     * @param from address The address which are token transferred from\\r\\n     * @param amount uint256 The amount of tokens transferred\\r\\n     * @param data bytes Additional data with no specified format\\r\\n     * @return `bytes4(keccak256(\\\"onTransferReceived(address,address,uint256,bytes)\\\"))` unless throwing\\r\\n     */\\r\\n    function onTransferReceived(\\r\\n        address operator,\\r\\n        address from,\\r\\n        uint256 amount,\\r\\n        bytes memory data\\r\\n    ) external returns (bytes4);\\r\\n}\\r\\n\",\"keccak256\":\"0xc149a479b8c794103eeb3c93fa50226aa0eee57d42e38c16a898d9a9d3beff9e\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [],
    "types": null
  },
  "userdoc": {
    "kind": "user",
    "methods": {
      "onTransferReceived(address,address,uint256,bytes)": {
        "notice": "Handle the receipt of ERC1363 tokens"
      }
    },
    "version": 1
  }
};