export const Artifact_IERC1155MetadataURI = /** @type {const} **/ ({
  "contractName": "IERC1155MetadataURI",
  "sourceName": "contracts/openzeppelin_l/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol",
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
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "uri",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
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
  "inputSourceName": "project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol",
  "devdoc": {
    "details": "Interface of the optional ERC1155MetadataExtension interface, as defined in the https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[EIP]. _Available since v3.1._",
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
      },
      "uri(uint256)": {
        "details": "Returns the URI for token type `id`. If the `\\{id\\}` substring is present in the URI, it must be replaced by clients with the actual token type ID."
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
      "supportsInterface(bytes4)": "01ffc9a7",
      "uri(uint256)": "0e89341c"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"TransferBatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"URI\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"}],\"name\":\"balanceOfBatch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeBatchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"uri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the optional ERC1155MetadataExtension interface, as defined in the https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[EIP]. _Available since v3.1._\",\"kind\":\"dev\",\"methods\":{\"balanceOf(address,uint256)\":{\"details\":\"Returns the amount of tokens of token type `id` owned by `account`. Requirements: - `account` cannot be the zero address.\"},\"balanceOfBatch(address[],uint256[])\":{\"details\":\"xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}. Requirements: - `accounts` and `ids` must have the same length.\"},\"isApprovedForAll(address,address)\":{\"details\":\"Returns true if `operator` is approved to transfer ``account``'s tokens. See {setApprovalForAll}.\"},\"safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)\":{\"details\":\"xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}. Emits a {TransferBatch} event. Requirements: - `ids` and `amounts` must have the same length. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the acceptance magic value.\"},\"safeTransferFrom(address,address,uint256,uint256,bytes)\":{\"details\":\"Transfers `amount` tokens of token type `id` from `from` to `to`. Emits a {TransferSingle} event. Requirements: - `to` cannot be the zero address. - If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}. - `from` must have a balance of tokens of type `id` of at least `amount`. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the acceptance magic value.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`, Emits an {ApprovalForAll} event. Requirements: - `operator` cannot be the caller.\"},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"},\"uri(uint256)\":{\"details\":\"Returns the URI for token type `id`. If the `\\\\{id\\\\}` substring is present in the URI, it must be replaced by clients with the actual token type ID.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\":\"IERC1155MetadataURI\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/token/ERC1155/IERC1155.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC1155/IERC1155.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\n\\n/**\\n * @dev Required interface of an ERC1155 compliant contract, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-1155[EIP].\\n *\\n * _Available since v3.1._\\n */\\ninterface IERC1155 is IERC165 {\\n    /**\\n     * @dev Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.\\n     */\\n    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);\\n\\n    /**\\n     * @dev Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all\\n     * transfers.\\n     */\\n    event TransferBatch(\\n        address indexed operator,\\n        address indexed from,\\n        address indexed to,\\n        uint256[] ids,\\n        uint256[] values\\n    );\\n\\n    /**\\n     * @dev Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to\\n     * `approved`.\\n     */\\n    event ApprovalForAll(address indexed account, address indexed operator, bool approved);\\n\\n    /**\\n     * @dev Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.\\n     *\\n     * If an {URI} event was emitted for `id`, the standard\\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value\\n     * returned by {IERC1155MetadataURI-uri}.\\n     */\\n    event URI(string value, uint256 indexed id);\\n\\n    /**\\n     * @dev Returns the amount of tokens of token type `id` owned by `account`.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     */\\n    function balanceOf(address account, uint256 id) external view returns (uint256);\\n\\n    /**\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.\\n     *\\n     * Requirements:\\n     *\\n     * - `accounts` and `ids` must have the same length.\\n     */\\n    function balanceOfBatch(\\n        address[] calldata accounts,\\n        uint256[] calldata ids\\n    ) external view returns (uint256[] memory);\\n\\n    /**\\n     * @dev Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`,\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `operator` cannot be the caller.\\n     */\\n    function setApprovalForAll(address operator, bool approved) external;\\n\\n    /**\\n     * @dev Returns true if `operator` is approved to transfer ``account``'s tokens.\\n     *\\n     * See {setApprovalForAll}.\\n     */\\n    function isApprovedForAll(address account, address operator) external view returns (bool);\\n\\n    /**\\n     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.\\n     *\\n     * Emits a {TransferSingle} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `to` cannot be the zero address.\\n     * - If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}.\\n     * - `from` must have a balance of tokens of type `id` of at least `amount`.\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\\n     * acceptance magic value.\\n     */\\n    function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;\\n\\n    /**\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.\\n     *\\n     * Emits a {TransferBatch} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `ids` and `amounts` must have the same length.\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\\n     * acceptance magic value.\\n     */\\n    function safeBatchTransferFrom(\\n        address from,\\n        address to,\\n        uint256[] calldata ids,\\n        uint256[] calldata amounts,\\n        bytes calldata data\\n    ) external;\\n}\\n\",\"keccak256\":\"0xcab667ddad478ff0d39c2053ca77fac778af8483c18ab07d810277b4216fd582\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC1155/extensions/IERC1155MetadataURI.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../IERC1155.sol\\\";\\n\\n/**\\n * @dev Interface of the optional ERC1155MetadataExtension interface, as defined\\n * in the https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[EIP].\\n *\\n * _Available since v3.1._\\n */\\ninterface IERC1155MetadataURI is IERC1155 {\\n    /**\\n     * @dev Returns the URI for token type `id`.\\n     *\\n     * If the `\\\\{id\\\\}` substring is present in the URI, it must be replaced by\\n     * clients with the actual token type ID.\\n     */\\n    function uri(uint256 id) external view returns (string memory);\\n}\\n\",\"keccak256\":\"0xa66d18b9a85458d28fc3304717964502ae36f7f8a2ff35bc83f6f85d74b03574\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\"}},\"version\":1}",
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