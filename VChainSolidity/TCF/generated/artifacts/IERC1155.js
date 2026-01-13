export const Artifact_IERC1155 = /** @type {const} **/ ({
  "contractName": "IERC1155",
  "sourceName": "contracts/openzeppelin_l/contracts/token/ERC1155/IERC1155.sol",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "TransferBatch",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "TransferSingle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "value",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "URI",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "accounts",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        }
      ],
      "name": "balanceOfBatch",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeBatchTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
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
      "name": "safeTransferFrom",
      "outputs": [],
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
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
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
  "inputSourceName": "project/contracts/openzeppelin_l/contracts/token/ERC1155/IERC1155.sol",
  "devdoc": {
    "details": "Required interface of an ERC1155 compliant contract, as defined in the https://eips.ethereum.org/EIPS/eip-1155[EIP]. _Available since v3.1._",
    "events": {
      "ApprovalForAll(address,address,bool)": {
        "details": "Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to `approved`."
      },
      "TransferBatch(address,address,address,uint256[],uint256[])": {
        "details": "Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all transfers."
      },
      "TransferSingle(address,address,address,uint256,uint256)": {
        "details": "Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`."
      },
      "URI(string,uint256)": {
        "details": "Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI. If an {URI} event was emitted for `id`, the standard https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value returned by {IERC1155MetadataURI-uri}."
      }
    },
    "kind": "dev",
    "methods": {
      "balanceOf(address,uint256)": {
        "details": "Returns the amount of tokens of token type `id` owned by `account`. Requirements: - `account` cannot be the zero address."
      },
      "balanceOfBatch(address[],uint256[])": {
        "details": "xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}. Requirements: - `accounts` and `ids` must have the same length."
      },
      "isApprovedForAll(address,address)": {
        "details": "Returns true if `operator` is approved to transfer ``account``'s tokens. See {setApprovalForAll}."
      },
      "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": {
        "details": "xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}. Emits a {TransferBatch} event. Requirements: - `ids` and `amounts` must have the same length. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the acceptance magic value."
      },
      "safeTransferFrom(address,address,uint256,uint256,bytes)": {
        "details": "Transfers `amount` tokens of token type `id` from `from` to `to`. Emits a {TransferSingle} event. Requirements: - `to` cannot be the zero address. - If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}. - `from` must have a balance of tokens of type `id` of at least `amount`. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the acceptance magic value."
      },
      "setApprovalForAll(address,bool)": {
        "details": "Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`, Emits an {ApprovalForAll} event. Requirements: - `operator` cannot be the caller."
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
      "balanceOf(address,uint256)": "00fdd58e",
      "balanceOfBatch(address[],uint256[])": "4e1273f4",
      "isApprovedForAll(address,address)": "e985e9c5",
      "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": "2eb2c2d6",
      "safeTransferFrom(address,address,uint256,uint256,bytes)": "f242432a",
      "setApprovalForAll(address,bool)": "a22cb465",
      "supportsInterface(bytes4)": "01ffc9a7"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"TransferBatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"URI\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"}],\"name\":\"balanceOfBatch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeBatchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Required interface of an ERC1155 compliant contract, as defined in the https://eips.ethereum.org/EIPS/eip-1155[EIP]. _Available since v3.1._\",\"events\":{\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to `approved`.\"},\"TransferBatch(address,address,address,uint256[],uint256[])\":{\"details\":\"Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all transfers.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"details\":\"Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.\"},\"URI(string,uint256)\":{\"details\":\"Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI. If an {URI} event was emitted for `id`, the standard https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value returned by {IERC1155MetadataURI-uri}.\"}},\"kind\":\"dev\",\"methods\":{\"balanceOf(address,uint256)\":{\"details\":\"Returns the amount of tokens of token type `id` owned by `account`. Requirements: - `account` cannot be the zero address.\"},\"balanceOfBatch(address[],uint256[])\":{\"details\":\"xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}. Requirements: - `accounts` and `ids` must have the same length.\"},\"isApprovedForAll(address,address)\":{\"details\":\"Returns true if `operator` is approved to transfer ``account``'s tokens. See {setApprovalForAll}.\"},\"safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)\":{\"details\":\"xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}. Emits a {TransferBatch} event. Requirements: - `ids` and `amounts` must have the same length. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the acceptance magic value.\"},\"safeTransferFrom(address,address,uint256,uint256,bytes)\":{\"details\":\"Transfers `amount` tokens of token type `id` from `from` to `to`. Emits a {TransferSingle} event. Requirements: - `to` cannot be the zero address. - If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}. - `from` must have a balance of tokens of type `id` of at least `amount`. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the acceptance magic value.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`, Emits an {ApprovalForAll} event. Requirements: - `operator` cannot be the caller.\"},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/openzeppelin_l/contracts/token/ERC1155/IERC1155.sol\":\"IERC1155\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@4.9.6/\"]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/token/ERC1155/IERC1155.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC1155/IERC1155.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Required interface of an ERC1155 compliant contract, as defined in the\\r\\n * https://eips.ethereum.org/EIPS/eip-1155[EIP].\\r\\n *\\r\\n * _Available since v3.1._\\r\\n */\\r\\ninterface IERC1155 is IERC165 {\\r\\n    /**\\r\\n     * @dev Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.\\r\\n     */\\r\\n    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);\\r\\n\\r\\n    /**\\r\\n     * @dev Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all\\r\\n     * transfers.\\r\\n     */\\r\\n    event TransferBatch(\\r\\n        address indexed operator,\\r\\n        address indexed from,\\r\\n        address indexed to,\\r\\n        uint256[] ids,\\r\\n        uint256[] values\\r\\n    );\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to\\r\\n     * `approved`.\\r\\n     */\\r\\n    event ApprovalForAll(address indexed account, address indexed operator, bool approved);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.\\r\\n     *\\r\\n     * If an {URI} event was emitted for `id`, the standard\\r\\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value\\r\\n     * returned by {IERC1155MetadataURI-uri}.\\r\\n     */\\r\\n    event URI(string value, uint256 indexed id);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens of token type `id` owned by `account`.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `account` cannot be the zero address.\\r\\n     */\\r\\n    function balanceOf(address account, uint256 id) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `accounts` and `ids` must have the same length.\\r\\n     */\\r\\n    function balanceOfBatch(\\r\\n        address[] calldata accounts,\\r\\n        uint256[] calldata ids\\r\\n    ) external view returns (uint256[] memory);\\r\\n\\r\\n    /**\\r\\n     * @dev Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`,\\r\\n     *\\r\\n     * Emits an {ApprovalForAll} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `operator` cannot be the caller.\\r\\n     */\\r\\n    function setApprovalForAll(address operator, bool approved) external;\\r\\n\\r\\n    /**\\r\\n     * @dev Returns true if `operator` is approved to transfer ``account``'s tokens.\\r\\n     *\\r\\n     * See {setApprovalForAll}.\\r\\n     */\\r\\n    function isApprovedForAll(address account, address operator) external view returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.\\r\\n     *\\r\\n     * Emits a {TransferSingle} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `to` cannot be the zero address.\\r\\n     * - If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}.\\r\\n     * - `from` must have a balance of tokens of type `id` of at least `amount`.\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\\r\\n     * acceptance magic value.\\r\\n     */\\r\\n    function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;\\r\\n\\r\\n    /**\\r\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.\\r\\n     *\\r\\n     * Emits a {TransferBatch} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `ids` and `amounts` must have the same length.\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\\r\\n     * acceptance magic value.\\r\\n     */\\r\\n    function safeBatchTransferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256[] calldata ids,\\r\\n        uint256[] calldata amounts,\\r\\n        bytes calldata data\\r\\n    ) external;\\r\\n}\\r\\n\",\"keccak256\":\"0x27e077bddceb5d947903026c4354aea73eddf88fd149c365825591ddb226ab5e\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC165 standard, as defined in the\\r\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\r\\n *\\r\\n * Implementers can declare support of contract interfaces, which can then be\\r\\n * queried by others ({ERC165Checker}).\\r\\n *\\r\\n * For an implementation, see {ERC165}.\\r\\n */\\r\\ninterface IERC165 {\\r\\n    /**\\r\\n     * @dev Returns true if this contract implements the interface defined by\\r\\n     * `interfaceId`. See the corresponding\\r\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\r\\n     * to learn more about how these ids are created.\\r\\n     *\\r\\n     * This function call must use less than 30 000 gas.\\r\\n     */\\r\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\r\\n}\\r\\n\",\"keccak256\":\"0x540685d7ece3faa56f38253270ff11b18e63949fb8659c408123b1874674492e\",\"license\":\"MIT\"}},\"version\":1}",
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