export const Artifact_IERC1363Spender = /** @type {const} **/ ({
  "contractName": "IERC1363Spender",
  "sourceName": "contracts/openzeppelin_l/contracts/interfaces/IERC1363Spender.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
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
      "name": "onApprovalReceived",
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
  "inputSourceName": "project/contracts/openzeppelin_l/contracts/interfaces/IERC1363Spender.sol",
  "devdoc": {
    "details": "Interface for any contract that wants to support {IERC1363-approveAndCall} from {ERC1363} token contracts.",
    "kind": "dev",
    "methods": {
      "onApprovalReceived(address,uint256,bytes)": {
        "details": "Any ERC1363 smart contract calls this function on the recipient after an `approve`. This function MAY throw to revert and reject the approval. Return of other than the magic value MUST result in the transaction being reverted. Note: the token contract address is always the message sender.",
        "params": {
          "amount": "uint256 The amount of tokens to be spent",
          "data": "bytes Additional data with no specified format",
          "owner": "address The address which called `approveAndCall` function"
        },
        "returns": {
          "_0": "`bytes4(keccak256(\"onApprovalReceived(address,uint256,bytes)\"))`unless throwing"
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
      "onApprovalReceived(address,uint256,bytes)": "7b04a2d0"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onApprovalReceived\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface for any contract that wants to support {IERC1363-approveAndCall} from {ERC1363} token contracts.\",\"kind\":\"dev\",\"methods\":{\"onApprovalReceived(address,uint256,bytes)\":{\"details\":\"Any ERC1363 smart contract calls this function on the recipient after an `approve`. This function MAY throw to revert and reject the approval. Return of other than the magic value MUST result in the transaction being reverted. Note: the token contract address is always the message sender.\",\"params\":{\"amount\":\"uint256 The amount of tokens to be spent\",\"data\":\"bytes Additional data with no specified format\",\"owner\":\"address The address which called `approveAndCall` function\"},\"returns\":{\"_0\":\"`bytes4(keccak256(\\\"onApprovalReceived(address,uint256,bytes)\\\"))`unless throwing\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"onApprovalReceived(address,uint256,bytes)\":{\"notice\":\"Handle the approval of ERC1363 tokens\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/openzeppelin_l/contracts/interfaces/IERC1363Spender.sol\":\"IERC1363Spender\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/interfaces/IERC1363Spender.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (interfaces/IERC1363Spender.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface for any contract that wants to support {IERC1363-approveAndCall}\\r\\n * from {ERC1363} token contracts.\\r\\n */\\r\\ninterface IERC1363Spender {\\r\\n    /*\\r\\n     * Note: the ERC-165 identifier for this interface is 0x7b04a2d0.\\r\\n     * 0x7b04a2d0 === bytes4(keccak256(\\\"onApprovalReceived(address,uint256,bytes)\\\"))\\r\\n     */\\r\\n\\r\\n    /**\\r\\n     * @notice Handle the approval of ERC1363 tokens\\r\\n     * @dev Any ERC1363 smart contract calls this function on the recipient\\r\\n     * after an `approve`. This function MAY throw to revert and reject the\\r\\n     * approval. Return of other than the magic value MUST result in the\\r\\n     * transaction being reverted.\\r\\n     * Note: the token contract address is always the message sender.\\r\\n     * @param owner address The address which called `approveAndCall` function\\r\\n     * @param amount uint256 The amount of tokens to be spent\\r\\n     * @param data bytes Additional data with no specified format\\r\\n     * @return `bytes4(keccak256(\\\"onApprovalReceived(address,uint256,bytes)\\\"))`unless throwing\\r\\n     */\\r\\n    function onApprovalReceived(\\r\\n        address owner,\\r\\n        uint256 amount,\\r\\n        bytes memory data\\r\\n    ) external returns (bytes4);\\r\\n}\\r\\n\",\"keccak256\":\"0x4219f8eebc18a36830f8eb280b966f34abb21b0bb305ba99dbb9917a4dfd9aeb\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [],
    "types": null
  },
  "userdoc": {
    "kind": "user",
    "methods": {
      "onApprovalReceived(address,uint256,bytes)": {
        "notice": "Handle the approval of ERC1363 tokens"
      }
    },
    "version": 1
  }
});