export declare const Artifact_IERC1155Receiver: {
  "contractName": "IERC1155Receiver",
  "sourceName": "contracts/openzeppelin_l/contracts/token/ERC1155/IERC1155Receiver.sol",
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
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "onERC1155BatchReceived",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
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
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "onERC1155Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/openzeppelin_l/contracts/token/ERC1155/IERC1155Receiver.sol",
  "devdoc": {
    "details": "_Available since v3.1._",
    "kind": "dev",
    "methods": {
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": {
        "details": "Handles the receipt of a multiple ERC1155 token types. This function is called at the end of a `safeBatchTransferFrom` after the balances have been updated. NOTE: To accept the transfer(s), this must return `bytes4(keccak256(\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\"))` (i.e. 0xbc197c81, or its own function selector).",
        "params": {
          "data": "Additional data with no specified format",
          "from": "The address which previously owned the token",
          "ids": "An array containing ids of each token being transferred (order and length must match values array)",
          "operator": "The address which initiated the batch transfer (i.e. msg.sender)",
          "values": "An array containing amounts of each token being transferred (order and length must match ids array)"
        },
        "returns": {
          "_0": "`bytes4(keccak256(\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\"))` if transfer is allowed"
        }
      },
      "onERC1155Received(address,address,uint256,uint256,bytes)": {
        "details": "Handles the receipt of a single ERC1155 token type. This function is called at the end of a `safeTransferFrom` after the balance has been updated. NOTE: To accept the transfer, this must return `bytes4(keccak256(\"onERC1155Received(address,address,uint256,uint256,bytes)\"))` (i.e. 0xf23a6e61, or its own function selector).",
        "params": {
          "data": "Additional data with no specified format",
          "from": "The address which previously owned the token",
          "id": "The ID of the token being transferred",
          "operator": "The address which initiated the transfer (i.e. msg.sender)",
          "value": "The amount of tokens being transferred"
        },
        "returns": {
          "_0": "`bytes4(keccak256(\"onERC1155Received(address,address,uint256,uint256,bytes)\"))` if transfer is allowed"
        }
      },
      "supportsInterface(bytes4)": {
        "details": "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
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
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": "bc197c81",
      "onERC1155Received(address,address,uint256,uint256,bytes)": "f23a6e61",
      "supportsInterface(bytes4)": "01ffc9a7"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onERC1155BatchReceived\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onERC1155Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"_Available since v3.1._\",\"kind\":\"dev\",\"methods\":{\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\":{\"details\":\"Handles the receipt of a multiple ERC1155 token types. This function is called at the end of a `safeBatchTransferFrom` after the balances have been updated. NOTE: To accept the transfer(s), this must return `bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))` (i.e. 0xbc197c81, or its own function selector).\",\"params\":{\"data\":\"Additional data with no specified format\",\"from\":\"The address which previously owned the token\",\"ids\":\"An array containing ids of each token being transferred (order and length must match values array)\",\"operator\":\"The address which initiated the batch transfer (i.e. msg.sender)\",\"values\":\"An array containing amounts of each token being transferred (order and length must match ids array)\"},\"returns\":{\"_0\":\"`bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))` if transfer is allowed\"}},\"onERC1155Received(address,address,uint256,uint256,bytes)\":{\"details\":\"Handles the receipt of a single ERC1155 token type. This function is called at the end of a `safeTransferFrom` after the balance has been updated. NOTE: To accept the transfer, this must return `bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))` (i.e. 0xf23a6e61, or its own function selector).\",\"params\":{\"data\":\"Additional data with no specified format\",\"from\":\"The address which previously owned the token\",\"id\":\"The ID of the token being transferred\",\"operator\":\"The address which initiated the transfer (i.e. msg.sender)\",\"value\":\"The amount of tokens being transferred\"},\"returns\":{\"_0\":\"`bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))` if transfer is allowed\"}},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/openzeppelin_l/contracts/token/ERC1155/IERC1155Receiver.sol\":\"IERC1155Receiver\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC1155/IERC1155Receiver.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\n\\n/**\\n * @dev _Available since v3.1._\\n */\\ninterface IERC1155Receiver is IERC165 {\\n    /**\\n     * @dev Handles the receipt of a single ERC1155 token type. This function is\\n     * called at the end of a `safeTransferFrom` after the balance has been updated.\\n     *\\n     * NOTE: To accept the transfer, this must return\\n     * `bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))`\\n     * (i.e. 0xf23a6e61, or its own function selector).\\n     *\\n     * @param operator The address which initiated the transfer (i.e. msg.sender)\\n     * @param from The address which previously owned the token\\n     * @param id The ID of the token being transferred\\n     * @param value The amount of tokens being transferred\\n     * @param data Additional data with no specified format\\n     * @return `bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))` if transfer is allowed\\n     */\\n    function onERC1155Received(\\n        address operator,\\n        address from,\\n        uint256 id,\\n        uint256 value,\\n        bytes calldata data\\n    ) external returns (bytes4);\\n\\n    /**\\n     * @dev Handles the receipt of a multiple ERC1155 token types. This function\\n     * is called at the end of a `safeBatchTransferFrom` after the balances have\\n     * been updated.\\n     *\\n     * NOTE: To accept the transfer(s), this must return\\n     * `bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))`\\n     * (i.e. 0xbc197c81, or its own function selector).\\n     *\\n     * @param operator The address which initiated the batch transfer (i.e. msg.sender)\\n     * @param from The address which previously owned the token\\n     * @param ids An array containing ids of each token being transferred (order and length must match values array)\\n     * @param values An array containing amounts of each token being transferred (order and length must match ids array)\\n     * @param data Additional data with no specified format\\n     * @return `bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))` if transfer is allowed\\n     */\\n    function onERC1155BatchReceived(\\n        address operator,\\n        address from,\\n        uint256[] calldata ids,\\n        uint256[] calldata values,\\n        bytes calldata data\\n    ) external returns (bytes4);\\n}\\n\",\"keccak256\":\"0xeb373f1fdc7b755c6a750123a9b9e3a8a02c1470042fd6505d875000a80bde0b\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\"}},\"version\":1}",
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