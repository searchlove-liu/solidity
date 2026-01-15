export const Artifact_ERC721Pausable = /** @type {const} **/ ({
  "contractName": "ERC721Pausable",
  "sourceName": "contracts/openzeppelin_l/contracts/token/ERC721/extensions/ERC721Pausable.sol",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
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
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
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
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
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
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
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
          "name": "tokenId",
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
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/openzeppelin_l/contracts/token/ERC721/extensions/ERC721Pausable.sol",
  "devdoc": {
    "details": "ERC721 token with pausable token transfers, minting and burning. Useful for scenarios such as preventing trades until the end of an evaluation period, or having an emergency switch for freezing all token transfers in the event of a large bug. IMPORTANT: This contract does not include public pause and unpause functions. In addition to inheriting this contract, you must define both functions, invoking the {Pausable-_pause} and {Pausable-_unpause} internal functions, with appropriate access control, e.g. using {AccessControl} or {Ownable}. Not doing so will make the contract unpausable.",
    "kind": "dev",
    "methods": {
      "approve(address,uint256)": {
        "details": "See {IERC721-approve}."
      },
      "balanceOf(address)": {
        "details": "See {IERC721-balanceOf}."
      },
      "getApproved(uint256)": {
        "details": "See {IERC721-getApproved}."
      },
      "isApprovedForAll(address,address)": {
        "details": "See {IERC721-isApprovedForAll}."
      },
      "name()": {
        "details": "See {IERC721Metadata-name}."
      },
      "ownerOf(uint256)": {
        "details": "See {IERC721-ownerOf}."
      },
      "paused()": {
        "details": "Returns true if the contract is paused, and false otherwise."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "setApprovalForAll(address,bool)": {
        "details": "See {IERC721-setApprovalForAll}."
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}."
      },
      "symbol()": {
        "details": "See {IERC721Metadata-symbol}."
      },
      "tokenURI(uint256)": {
        "details": "See {IERC721Metadata-tokenURI}."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC721-transferFrom}."
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
      "approve(address,uint256)": "095ea7b3",
      "balanceOf(address)": "70a08231",
      "getApproved(uint256)": "081812fc",
      "isApprovedForAll(address,address)": "e985e9c5",
      "name()": "06fdde03",
      "ownerOf(uint256)": "6352211e",
      "paused()": "5c975abb",
      "safeTransferFrom(address,address,uint256)": "42842e0e",
      "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
      "setApprovalForAll(address,bool)": "a22cb465",
      "supportsInterface(bytes4)": "01ffc9a7",
      "symbol()": "95d89b41",
      "tokenURI(uint256)": "c87b56dd",
      "transferFrom(address,address,uint256)": "23b872dd"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"ERC721 token with pausable token transfers, minting and burning. Useful for scenarios such as preventing trades until the end of an evaluation period, or having an emergency switch for freezing all token transfers in the event of a large bug. IMPORTANT: This contract does not include public pause and unpause functions. In addition to inheriting this contract, you must define both functions, invoking the {Pausable-_pause} and {Pausable-_unpause} internal functions, with appropriate access control, e.g. using {AccessControl} or {Ownable}. Not doing so will make the contract unpausable.\",\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"paused()\":{\"details\":\"Returns true if the contract is paused, and false otherwise.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/openzeppelin_l/contracts/token/ERC721/extensions/ERC721Pausable.sol\":\"ERC721Pausable\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@4.9.6/\"]},\"sources\":{\"npm/@openzeppelin/contracts@4.9.6/token/ERC721/IERC721.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC721/IERC721.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\n\\n/**\\n * @dev Required interface of an ERC721 compliant contract.\\n */\\ninterface IERC721 is IERC165 {\\n    /**\\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\n     */\\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\\n     */\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\n\\n    /**\\n     * @dev Returns the number of tokens in ``owner``'s account.\\n     */\\n    function balanceOf(address owner) external view returns (uint256 balance);\\n\\n    /**\\n     * @dev Returns the owner of the `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function ownerOf(uint256 tokenId) external view returns (address owner);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must have been allowed to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(address from, address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Transfers `tokenId` token from `from` to `to`.\\n     *\\n     * WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC721\\n     * or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must\\n     * understand this adds an external call which potentially creates a reentrancy vulnerability.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(address from, address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\\n     * The approval is cleared when the token is transferred.\\n     *\\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\\n     *\\n     * Requirements:\\n     *\\n     * - The caller must own the token or be an approved operator.\\n     * - `tokenId` must exist.\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Approve or remove `operator` as an operator for the caller.\\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\\n     *\\n     * Requirements:\\n     *\\n     * - The `operator` cannot be the caller.\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     */\\n    function setApprovalForAll(address operator, bool approved) external;\\n\\n    /**\\n     * @dev Returns the account approved for `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function getApproved(uint256 tokenId) external view returns (address operator);\\n\\n    /**\\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\\n     *\\n     * See {setApprovalForAll}\\n     */\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x5bce51e11f7d194b79ea59fe00c9e8de9fa2c5530124960f29a24d4c740a3266\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@4.9.6/token/ERC721/IERC721Receiver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC721/IERC721Receiver.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @title ERC721 token receiver interface\\n * @dev Interface for any contract that wants to support safeTransfers\\n * from ERC721 asset contracts.\\n */\\ninterface IERC721Receiver {\\n    /**\\n     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\\n     * by `operator` from `from`, this function is called.\\n     *\\n     * It must return its Solidity selector to confirm the token transfer.\\n     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\\n     *\\n     * The selector can be obtained in Solidity with `IERC721Receiver.onERC721Received.selector`.\\n     */\\n    function onERC721Received(\\n        address operator,\\n        address from,\\n        uint256 tokenId,\\n        bytes calldata data\\n    ) external returns (bytes4);\\n}\\n\",\"keccak256\":\"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@4.9.6/token/ERC721/extensions/IERC721Metadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/IERC721Metadata.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../IERC721.sol\\\";\\n\\n/**\\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\\n * @dev See https://eips.ethereum.org/EIPS/eip-721\\n */\\ninterface IERC721Metadata is IERC721 {\\n    /**\\n     * @dev Returns the token collection name.\\n     */\\n    function name() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the token collection symbol.\\n     */\\n    function symbol() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token.\\n     */\\n    function tokenURI(uint256 tokenId) external view returns (string memory);\\n}\\n\",\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@4.9.6/utils/Strings.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (utils/Strings.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./math/Math.sol\\\";\\nimport \\\"./math/SignedMath.sol\\\";\\n\\n/**\\n * @dev String operations.\\n */\\nlibrary Strings {\\n    bytes16 private constant _SYMBOLS = \\\"0123456789abcdef\\\";\\n    uint8 private constant _ADDRESS_LENGTH = 20;\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\n     */\\n    function toString(uint256 value) internal pure returns (string memory) {\\n        unchecked {\\n            uint256 length = Math.log10(value) + 1;\\n            string memory buffer = new string(length);\\n            uint256 ptr;\\n            /// @solidity memory-safe-assembly\\n            assembly {\\n                ptr := add(buffer, add(32, length))\\n            }\\n            while (true) {\\n                ptr--;\\n                /// @solidity memory-safe-assembly\\n                assembly {\\n                    mstore8(ptr, byte(mod(value, 10), _SYMBOLS))\\n                }\\n                value /= 10;\\n                if (value == 0) break;\\n            }\\n            return buffer;\\n        }\\n    }\\n\\n    /**\\n     * @dev Converts a `int256` to its ASCII `string` decimal representation.\\n     */\\n    function toString(int256 value) internal pure returns (string memory) {\\n        return string(abi.encodePacked(value < 0 ? \\\"-\\\" : \\\"\\\", toString(SignedMath.abs(value))));\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\n     */\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\n        unchecked {\\n            return toHexString(value, Math.log256(value) + 1);\\n        }\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\n     */\\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\\n        bytes memory buffer = new bytes(2 * length + 2);\\n        buffer[0] = \\\"0\\\";\\n        buffer[1] = \\\"x\\\";\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\n            buffer[i] = _SYMBOLS[value & 0xf];\\n            value >>= 4;\\n        }\\n        require(value == 0, \\\"Strings: hex length insufficient\\\");\\n        return string(buffer);\\n    }\\n\\n    /**\\n     * @dev Converts an `address` with fixed length of 20 bytes to its not checksummed ASCII `string` hexadecimal representation.\\n     */\\n    function toHexString(address addr) internal pure returns (string memory) {\\n        return toHexString(uint256(uint160(addr)), _ADDRESS_LENGTH);\\n    }\\n\\n    /**\\n     * @dev Returns true if the two strings are equal.\\n     */\\n    function equal(string memory a, string memory b) internal pure returns (bool) {\\n        return keccak256(bytes(a)) == keccak256(bytes(b));\\n    }\\n}\\n\",\"keccak256\":\"0x3088eb2868e8d13d89d16670b5f8612c4ab9ff8956272837d8e90106c59c14a0\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@4.9.6/utils/introspection/ERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IERC165.sol\\\";\\n\\n/**\\n * @dev Implementation of the {IERC165} interface.\\n *\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\n * for the additional interface id that will be supported. For example:\\n *\\n * ```solidity\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\n * }\\n * ```\\n *\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\n */\\nabstract contract ERC165 is IERC165 {\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IERC165).interfaceId;\\n    }\\n}\\n\",\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@4.9.6/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@4.9.6/utils/math/Math.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (utils/math/Math.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Standard math utilities missing in the Solidity language.\\n */\\nlibrary Math {\\n    enum Rounding {\\n        Down, // Toward negative infinity\\n        Up, // Toward infinity\\n        Zero // Toward zero\\n    }\\n\\n    /**\\n     * @dev Returns the largest of two numbers.\\n     */\\n    function max(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a > b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the smallest of two numbers.\\n     */\\n    function min(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a < b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the average of two numbers. The result is rounded towards\\n     * zero.\\n     */\\n    function average(uint256 a, uint256 b) internal pure returns (uint256) {\\n        // (a + b) / 2 can overflow.\\n        return (a & b) + (a ^ b) / 2;\\n    }\\n\\n    /**\\n     * @dev Returns the ceiling of the division of two numbers.\\n     *\\n     * This differs from standard division with `/` in that it rounds up instead\\n     * of rounding down.\\n     */\\n    function ceilDiv(uint256 a, uint256 b) internal pure returns (uint256) {\\n        // (a + b - 1) / b can overflow on addition, so we distribute.\\n        return a == 0 ? 0 : (a - 1) / b + 1;\\n    }\\n\\n    /**\\n     * @notice Calculates floor(x * y / denominator) with full precision. Throws if result overflows a uint256 or denominator == 0\\n     * @dev Original credit to Remco Bloemen under MIT license (https://xn--2-umb.com/21/muldiv)\\n     * with further edits by Uniswap Labs also under MIT license.\\n     */\\n    function mulDiv(uint256 x, uint256 y, uint256 denominator) internal pure returns (uint256 result) {\\n        unchecked {\\n            // 512-bit multiply [prod1 prod0] = x * y. Compute the product mod 2^256 and mod 2^256 - 1, then use\\n            // use the Chinese Remainder Theorem to reconstruct the 512 bit result. The result is stored in two 256\\n            // variables such that product = prod1 * 2^256 + prod0.\\n            uint256 prod0; // Least significant 256 bits of the product\\n            uint256 prod1; // Most significant 256 bits of the product\\n            assembly {\\n                let mm := mulmod(x, y, not(0))\\n                prod0 := mul(x, y)\\n                prod1 := sub(sub(mm, prod0), lt(mm, prod0))\\n            }\\n\\n            // Handle non-overflow cases, 256 by 256 division.\\n            if (prod1 == 0) {\\n                // Solidity will revert if denominator == 0, unlike the div opcode on its own.\\n                // The surrounding unchecked block does not change this fact.\\n                // See https://docs.soliditylang.org/en/latest/control-structures.html#checked-or-unchecked-arithmetic.\\n                return prod0 / denominator;\\n            }\\n\\n            // Make sure the result is less than 2^256. Also prevents denominator == 0.\\n            require(denominator > prod1, \\\"Math: mulDiv overflow\\\");\\n\\n            ///////////////////////////////////////////////\\n            // 512 by 256 division.\\n            ///////////////////////////////////////////////\\n\\n            // Make division exact by subtracting the remainder from [prod1 prod0].\\n            uint256 remainder;\\n            assembly {\\n                // Compute remainder using mulmod.\\n                remainder := mulmod(x, y, denominator)\\n\\n                // Subtract 256 bit number from 512 bit number.\\n                prod1 := sub(prod1, gt(remainder, prod0))\\n                prod0 := sub(prod0, remainder)\\n            }\\n\\n            // Factor powers of two out of denominator and compute largest power of two divisor of denominator. Always >= 1.\\n            // See https://cs.stackexchange.com/q/138556/92363.\\n\\n            // Does not overflow because the denominator cannot be zero at this stage in the function.\\n            uint256 twos = denominator & (~denominator + 1);\\n            assembly {\\n                // Divide denominator by twos.\\n                denominator := div(denominator, twos)\\n\\n                // Divide [prod1 prod0] by twos.\\n                prod0 := div(prod0, twos)\\n\\n                // Flip twos such that it is 2^256 / twos. If twos is zero, then it becomes one.\\n                twos := add(div(sub(0, twos), twos), 1)\\n            }\\n\\n            // Shift in bits from prod1 into prod0.\\n            prod0 |= prod1 * twos;\\n\\n            // Invert denominator mod 2^256. Now that denominator is an odd number, it has an inverse modulo 2^256 such\\n            // that denominator * inv = 1 mod 2^256. Compute the inverse by starting with a seed that is correct for\\n            // four bits. That is, denominator * inv = 1 mod 2^4.\\n            uint256 inverse = (3 * denominator) ^ 2;\\n\\n            // Use the Newton-Raphson iteration to improve the precision. Thanks to Hensel's lifting lemma, this also works\\n            // in modular arithmetic, doubling the correct bits in each step.\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^8\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^16\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^32\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^64\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^128\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^256\\n\\n            // Because the division is now exact we can divide by multiplying with the modular inverse of denominator.\\n            // This will give us the correct result modulo 2^256. Since the preconditions guarantee that the outcome is\\n            // less than 2^256, this is the final result. We don't need to compute the high bits of the result and prod1\\n            // is no longer required.\\n            result = prod0 * inverse;\\n            return result;\\n        }\\n    }\\n\\n    /**\\n     * @notice Calculates x * y / denominator with full precision, following the selected rounding direction.\\n     */\\n    function mulDiv(uint256 x, uint256 y, uint256 denominator, Rounding rounding) internal pure returns (uint256) {\\n        uint256 result = mulDiv(x, y, denominator);\\n        if (rounding == Rounding.Up && mulmod(x, y, denominator) > 0) {\\n            result += 1;\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Returns the square root of a number. If the number is not a perfect square, the value is rounded down.\\n     *\\n     * Inspired by Henry S. Warren, Jr.'s \\\"Hacker's Delight\\\" (Chapter 11).\\n     */\\n    function sqrt(uint256 a) internal pure returns (uint256) {\\n        if (a == 0) {\\n            return 0;\\n        }\\n\\n        // For our first guess, we get the biggest power of 2 which is smaller than the square root of the target.\\n        //\\n        // We know that the \\\"msb\\\" (most significant bit) of our target number `a` is a power of 2 such that we have\\n        // `msb(a) <= a < 2*msb(a)`. This value can be written `msb(a)=2**k` with `k=log2(a)`.\\n        //\\n        // This can be rewritten `2**log2(a) <= a < 2**(log2(a) + 1)`\\n        // \\u2192 `sqrt(2**k) <= sqrt(a) < sqrt(2**(k+1))`\\n        // \\u2192 `2**(k/2) <= sqrt(a) < 2**((k+1)/2) <= 2**(k/2 + 1)`\\n        //\\n        // Consequently, `2**(log2(a) / 2)` is a good first approximation of `sqrt(a)` with at least 1 correct bit.\\n        uint256 result = 1 << (log2(a) >> 1);\\n\\n        // At this point `result` is an estimation with one bit of precision. We know the true value is a uint128,\\n        // since it is the square root of a uint256. Newton's method converges quadratically (precision doubles at\\n        // every iteration). We thus need at most 7 iteration to turn our partial result with one bit of precision\\n        // into the expected uint128 result.\\n        unchecked {\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            return min(result, a / result);\\n        }\\n    }\\n\\n    /**\\n     * @notice Calculates sqrt(a), following the selected rounding direction.\\n     */\\n    function sqrt(uint256 a, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = sqrt(a);\\n            return result + (rounding == Rounding.Up && result * result < a ? 1 : 0);\\n        }\\n    }\\n\\n    /**\\n     * @dev Return the log in base 2, rounded down, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log2(uint256 value) internal pure returns (uint256) {\\n        uint256 result = 0;\\n        unchecked {\\n            if (value >> 128 > 0) {\\n                value >>= 128;\\n                result += 128;\\n            }\\n            if (value >> 64 > 0) {\\n                value >>= 64;\\n                result += 64;\\n            }\\n            if (value >> 32 > 0) {\\n                value >>= 32;\\n                result += 32;\\n            }\\n            if (value >> 16 > 0) {\\n                value >>= 16;\\n                result += 16;\\n            }\\n            if (value >> 8 > 0) {\\n                value >>= 8;\\n                result += 8;\\n            }\\n            if (value >> 4 > 0) {\\n                value >>= 4;\\n                result += 4;\\n            }\\n            if (value >> 2 > 0) {\\n                value >>= 2;\\n                result += 2;\\n            }\\n            if (value >> 1 > 0) {\\n                result += 1;\\n            }\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Return the log in base 2, following the selected rounding direction, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log2(uint256 value, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = log2(value);\\n            return result + (rounding == Rounding.Up && 1 << result < value ? 1 : 0);\\n        }\\n    }\\n\\n    /**\\n     * @dev Return the log in base 10, rounded down, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log10(uint256 value) internal pure returns (uint256) {\\n        uint256 result = 0;\\n        unchecked {\\n            if (value >= 10 ** 64) {\\n                value /= 10 ** 64;\\n                result += 64;\\n            }\\n            if (value >= 10 ** 32) {\\n                value /= 10 ** 32;\\n                result += 32;\\n            }\\n            if (value >= 10 ** 16) {\\n                value /= 10 ** 16;\\n                result += 16;\\n            }\\n            if (value >= 10 ** 8) {\\n                value /= 10 ** 8;\\n                result += 8;\\n            }\\n            if (value >= 10 ** 4) {\\n                value /= 10 ** 4;\\n                result += 4;\\n            }\\n            if (value >= 10 ** 2) {\\n                value /= 10 ** 2;\\n                result += 2;\\n            }\\n            if (value >= 10 ** 1) {\\n                result += 1;\\n            }\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Return the log in base 10, following the selected rounding direction, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log10(uint256 value, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = log10(value);\\n            return result + (rounding == Rounding.Up && 10 ** result < value ? 1 : 0);\\n        }\\n    }\\n\\n    /**\\n     * @dev Return the log in base 256, rounded down, of a positive value.\\n     * Returns 0 if given 0.\\n     *\\n     * Adding one to the result gives the number of pairs of hex symbols needed to represent `value` as a hex string.\\n     */\\n    function log256(uint256 value) internal pure returns (uint256) {\\n        uint256 result = 0;\\n        unchecked {\\n            if (value >> 128 > 0) {\\n                value >>= 128;\\n                result += 16;\\n            }\\n            if (value >> 64 > 0) {\\n                value >>= 64;\\n                result += 8;\\n            }\\n            if (value >> 32 > 0) {\\n                value >>= 32;\\n                result += 4;\\n            }\\n            if (value >> 16 > 0) {\\n                value >>= 16;\\n                result += 2;\\n            }\\n            if (value >> 8 > 0) {\\n                result += 1;\\n            }\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Return the log in base 256, following the selected rounding direction, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log256(uint256 value, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = log256(value);\\n            return result + (rounding == Rounding.Up && 1 << (result << 3) < value ? 1 : 0);\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xe4455ac1eb7fc497bb7402579e7b4d64d928b846fce7d2b6fde06d366f21c2b3\",\"license\":\"MIT\"},\"npm/@openzeppelin/contracts@4.9.6/utils/math/SignedMath.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.8.0) (utils/math/SignedMath.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Standard signed math utilities missing in the Solidity language.\\n */\\nlibrary SignedMath {\\n    /**\\n     * @dev Returns the largest of two signed numbers.\\n     */\\n    function max(int256 a, int256 b) internal pure returns (int256) {\\n        return a > b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the smallest of two signed numbers.\\n     */\\n    function min(int256 a, int256 b) internal pure returns (int256) {\\n        return a < b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the average of two signed numbers without overflow.\\n     * The result is rounded towards zero.\\n     */\\n    function average(int256 a, int256 b) internal pure returns (int256) {\\n        // Formula from the book \\\"Hacker's Delight\\\"\\n        int256 x = (a & b) + ((a ^ b) >> 1);\\n        return x + (int256(uint256(x) >> 255) & (a ^ b));\\n    }\\n\\n    /**\\n     * @dev Returns the absolute unsigned value of a signed value.\\n     */\\n    function abs(int256 n) internal pure returns (uint256) {\\n        unchecked {\\n            // must be unchecked in order to support `n = type(int256).min`\\n            return uint256(n >= 0 ? n : -n);\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/proxy/utils/Initializable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.5.0) (proxy/utils/Initializable.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../../utils/Address.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev This is a base contract to aid in writing upgradeable contracts, or any kind of contract that will be deployed\\r\\n * behind a proxy. Since proxied contracts do not make use of a constructor, it's common to move constructor logic to an\\r\\n * external initializer function, usually called `initialize`. It then becomes necessary to protect this initializer\\r\\n * function so it can only be called once. The {initializer} modifier provided by this contract will have this effect.\\r\\n *\\r\\n * TIP: To avoid leaving the proxy in an uninitialized state, the initializer function should be called as early as\\r\\n * possible by providing the encoded function call as the `_data` argument to {ERC1967Proxy-constructor}.\\r\\n *\\r\\n * CAUTION: When used with inheritance, manual care must be taken to not invoke a parent initializer twice, or to ensure\\r\\n * that all initializers are idempotent. This is not verified automatically as constructors are by Solidity.\\r\\n *\\r\\n * [CAUTION]\\r\\n * ====\\r\\n * Avoid leaving a contract uninitialized.\\r\\n *\\r\\n * An uninitialized contract can be taken over by an attacker. This applies to both a proxy and its implementation\\r\\n * contract, which may impact the proxy. To initialize the implementation contract, you can either invoke the\\r\\n * initializer manually, or you can include a constructor to automatically mark it as initialized when it is deployed:\\r\\n *\\r\\n * [.hljs-theme-light.nopadding]\\r\\n * ====\\r\\n */\\r\\nabstract contract Initializable {\\r\\n    /**\\r\\n     * @dev Indicates that the contract has been initialized.\\r\\n     */\\r\\n    bool private _initialized;\\r\\n\\r\\n    /**\\r\\n     * @dev Indicates that the contract is in the process of being initialized.\\r\\n     */\\r\\n    bool private _initializing;\\r\\n\\r\\n    /**\\r\\n     * @dev Modifier to protect an initializer function from being invoked twice.\\r\\n     */\\r\\n    modifier initializer() {\\r\\n        // If the contract is initializing we ignore whether _initialized is set in order to support multiple\\r\\n        // inheritance patterns, but we only do this in the context of a constructor, because in other contexts the\\r\\n        // contract may have been reentered.\\r\\n        require(_initializing ? _isConstructor() : !_initialized, \\\"Initializable: contract is already initialized\\\");\\r\\n\\r\\n        bool isTopLevelCall = !_initializing;\\r\\n        if (isTopLevelCall) {\\r\\n            _initializing = true;\\r\\n            _initialized = true;\\r\\n        }\\r\\n\\r\\n        _;\\r\\n\\r\\n        if (isTopLevelCall) {\\r\\n            _initializing = false;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Modifier to protect an initialization function so that it can only be invoked by functions with the\\r\\n     * {initializer} modifier, directly or indirectly.\\r\\n     */\\r\\n    modifier onlyInitializing() {\\r\\n        require(_initializing, \\\"Initializable: contract is not initializing\\\");\\r\\n        _;\\r\\n    }\\r\\n\\r\\n    function _isConstructor() private view returns (bool) {\\r\\n        // \\u5982\\u679c\\u662f\\u5408\\u7ea6\\u7684\\u8bdd\\u8fd4\\u56defalse\\r\\n        return !Address.isContract(address(this));\\r\\n    }\\r\\n\\r\\n}\",\"keccak256\":\"0x7c31bc73fd4bd908c826fa10fad7182eea1aaa0e9820dd27460321a33eab4a73\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/security/Pausable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.7.0) (security/Pausable.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../utils/Context.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Contract module which allows children to implement an emergency stop\\r\\n * mechanism that can be triggered by an authorized account.\\r\\n *\\r\\n * This module is used through inheritance. It will make available the\\r\\n * modifiers `whenNotPaused` and `whenPaused`, which can be applied to\\r\\n * the functions of your contract. Note that they will not be pausable by\\r\\n * simply including this module, only once the modifiers are put in place.\\r\\n */\\r\\nabstract contract Pausable is Context {\\r\\n    /**\\r\\n     * @dev Emitted when the pause is triggered by `account`.\\r\\n     */\\r\\n    event Paused(address account);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when the pause is lifted by `account`.\\r\\n     */\\r\\n    event Unpaused(address account);\\r\\n\\r\\n    bool private _paused;\\r\\n\\r\\n    /**\\r\\n     * @dev Initializes the contract in unpaused state.\\r\\n     */\\r\\n    constructor() {\\r\\n        _paused = false;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Modifier to make a function callable only when the contract is not paused.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - The contract must not be paused.\\r\\n     */\\r\\n    modifier whenNotPaused() {\\r\\n        _requireNotPaused();\\r\\n        _;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Modifier to make a function callable only when the contract is paused.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - The contract must be paused.\\r\\n     */\\r\\n    modifier whenPaused() {\\r\\n        _requirePaused();\\r\\n        _;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns true if the contract is paused, and false otherwise.\\r\\n     */\\r\\n    function paused() public view virtual returns (bool) {\\r\\n        return _paused;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Throws if the contract is paused.\\r\\n     */\\r\\n    function _requireNotPaused() internal view virtual {\\r\\n        require(!paused(), \\\"Pausable: paused\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Throws if the contract is not paused.\\r\\n     */\\r\\n    function _requirePaused() internal view virtual {\\r\\n        require(paused(), \\\"Pausable: not paused\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Triggers stopped state.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - The contract must not be paused.\\r\\n     */\\r\\n    function _pause() internal virtual whenNotPaused {\\r\\n        _paused = true;\\r\\n        emit Paused(_msgSender());\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns to normal state.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - The contract must be paused.\\r\\n     */\\r\\n    function _unpause() internal virtual whenPaused {\\r\\n        _paused = false;\\r\\n        emit Unpaused(_msgSender());\\r\\n    }\\r\\n}\",\"keccak256\":\"0x0040bef7a18b93312613bc16b57fc4b318d6120323da2140b3a5ea0dd7124df0\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC721/ERC721.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC721/ERC721.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n// \\u6709\\u7248\\u672c\\u63a7\\u5236\\uff0c\\u4e0d\\u9700\\u8981\\u5199\\u7248\\u672c,\\u4f8b\\u5982\\u4e0b\\u9762\\u4e0d\\u9700\\u8981\\u534f\\u5546@4.9.6\\r\\n// import \\\"@openzeppelin/contracts@4.9.6/token/ERC721/IERC721.sol\\\";\\r\\nimport \\\"@openzeppelin/contracts/token/ERC721/IERC721.sol\\\";\\r\\nimport \\\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\\\";\\r\\nimport \\\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\\\";\\r\\n// import \\\"@openzeppelin/contracts@4.9.6/utils/Address.sol\\\";\\r\\nimport \\\"../../utils/Context.sol\\\";\\r\\nimport \\\"@openzeppelin/contracts/utils/Strings.sol\\\";\\r\\nimport \\\"@openzeppelin/contracts/utils/introspection/ERC165.sol\\\";\\r\\nimport \\\"./../../proxy/utils/Initializable.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including\\r\\n * the Metadata extension, but not including the Enumerable extension, which is available separately as\\r\\n * {ERC721Enumerable}.\\r\\n */\\r\\ncontract ERC721 is Context, Initializable, ERC165, IERC721, IERC721Metadata {\\r\\n    // Address \\u662f\\u5e93\\uff0c\\u4e0d\\u9700\\u8981\\u76f4\\u63a5\\u7ee7\\u627f\\u3002\\r\\n    using Address for address;\\r\\n    using Strings for uint256;\\r\\n\\r\\n    // Token name\\r\\n    string private _name;\\r\\n\\r\\n    // Token symbol\\r\\n    string private _symbol;\\r\\n\\r\\n    // Mapping from token ID to owner address\\r\\n    mapping(uint256 => address) private _owners;\\r\\n\\r\\n    // Mapping owner address to token count\\r\\n    mapping(address => uint256) private _balances;\\r\\n\\r\\n    // Mapping from token ID to approved address\\r\\n    mapping(uint256 => address) private _tokenApprovals;\\r\\n\\r\\n    // Mapping from owner to operator approvals\\r\\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\\r\\n\\r\\n    /**\\r\\n     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.\\r\\n     */\\r\\n    function __ERC721_init(\\r\\n        string memory name_,\\r\\n        string memory symbol_\\r\\n    ) internal onlyInitializing {\\r\\n        __ERC721_init_unchained(name_, symbol_);\\r\\n    }\\r\\n\\r\\n    // \\u6ce8\\u610f\\u4fee\\u9970\\u5668\\u4e3aonlyInitializing\\uff0c\\u610f\\u601d\\u662f\\uff0c\\u5982\\u679cB\\u5408\\u7ea6\\u88abA\\u5408\\u7ea6\\u7ee7\\u627f\\uff0cA\\u5408\\u7ea6\\u540c\\u6837\\u6709\\u521d\\u59cb\\u5316\\u51fd\\u6570\\uff0c\\r\\n    // \\u5f53A\\u5408\\u7ea6\\u4f7f\\u7528initializer\\u4fee\\u9970\\u5668\\uff0c\\u4fee\\u9970\\u5668init\\u51fd\\u6570\\u3002\\u5e76\\u4e14\\u8c03\\u7528\\u8fd9\\u4e2ainit\\u51fd\\u6570\\u4e4b\\u540e\\uff0c_initializing\\u8bbe\\u4e3atrue.\\r\\n    // \\u4f46B\\u5408\\u7ea6\\u4e5f\\u9700\\u8981\\u521d\\u59cb\\u5316\\uff0c\\u4f46\\u56e0\\u4e3aA\\u5408\\u7ea6\\u7684\\u521d\\u59cb\\u5316\\u51fd\\u6570\\u7684\\u4fee\\u9970\\u5668\\u4e3aonlyInitializing\\uff0c\\u6240\\u4ee5B\\u5408\\u7ea6\\u4e5f\\u53ef\\u4ee5\\u6b63\\u786e\\u88ab\\u521d\\u59cb\\u5316\\u6210\\u529f\\r\\n    function __ERC721_init_unchained(\\r\\n        string memory name_,\\r\\n        string memory symbol_\\r\\n    ) internal onlyInitializing {\\r\\n        _name = name_;\\r\\n        _symbol = symbol_;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC165-supportsInterface}.\\r\\n     */\\r\\n    function supportsInterface(\\r\\n        bytes4 interfaceId\\r\\n    ) public view virtual override(ERC165, IERC165) returns (bool) {\\r\\n        return\\r\\n            interfaceId == type(IERC721).interfaceId ||\\r\\n            interfaceId == type(IERC721Metadata).interfaceId ||\\r\\n            super.supportsInterface(interfaceId);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC721-balanceOf}.\\r\\n     */\\r\\n    function balanceOf(\\r\\n        address owner\\r\\n    ) public view virtual override returns (uint256) {\\r\\n        require(\\r\\n            owner != address(0),\\r\\n            \\\"ERC721: address zero is not a valid owner\\\"\\r\\n        );\\r\\n        return _balances[owner];\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC721-ownerOf}.\\r\\n     */\\r\\n    function ownerOf(\\r\\n        uint256 tokenId\\r\\n    ) public view virtual override returns (address) {\\r\\n        address owner = _ownerOf(tokenId);\\r\\n        require(owner != address(0), \\\"ERC721: invalid token ID\\\");\\r\\n        return owner;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC721Metadata-name}.\\r\\n     */\\r\\n    function name() public view virtual override returns (string memory) {\\r\\n        return _name;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC721Metadata-symbol}.\\r\\n     */\\r\\n    function symbol() public view virtual override returns (string memory) {\\r\\n        return _symbol;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC721Metadata-tokenURI}.\\r\\n     */\\r\\n    //  \\u4e00\\u822c\\u6267\\u884c\\u5230\\u8fd9\\u91cc\\uff0c\\u8bf4\\u660ebaseURI\\u4e0d\\u4e3a\\u7a7a\\uff0c\\u4e14mint\\u7684\\u65f6\\u5019\\u6ca1\\u6709\\u8bbe\\u7f6euri\\u3002\\r\\n    function tokenURI(\\r\\n        uint256 tokenId\\r\\n    ) public view virtual override returns (string memory) {\\r\\n        _requireMinted(tokenId);\\r\\n        string memory baseURI = _baseURI();\\r\\n        // return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : \\\"\\\";\\r\\n        return\\r\\n            bytes(baseURI).length > 0\\r\\n                ? string(abi.encodePacked(baseURI, tokenId.toString(), \\\".json\\\"))\\r\\n                : \\\"\\\";\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each\\r\\n     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty\\r\\n     * by default, can be overridden in child contracts.\\r\\n     */\\r\\n    function _baseURI() internal view virtual returns (string memory) {\\r\\n        return \\\"\\\";\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC721-approve}.\\r\\n     */\\r\\n    function approve(address to, uint256 tokenId) public virtual override {\\r\\n        address owner = ERC721.ownerOf(tokenId);\\r\\n        require(to != owner, \\\"ERC721: approval to current owner\\\");\\r\\n\\r\\n        require(\\r\\n            _msgSender() == owner || isApprovedForAll(owner, _msgSender()),\\r\\n            \\\"ERC721: approve caller is not token owner or approved for all\\\"\\r\\n        );\\r\\n\\r\\n        _approve(to, tokenId);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC721-getApproved}.\\r\\n     */\\r\\n    function getApproved(\\r\\n        uint256 tokenId\\r\\n    ) public view virtual override returns (address) {\\r\\n        _requireMinted(tokenId);\\r\\n\\r\\n        return _tokenApprovals[tokenId];\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC721-setApprovalForAll}.\\r\\n     */\\r\\n    function setApprovalForAll(\\r\\n        address operator,\\r\\n        bool approved\\r\\n    ) public virtual override {\\r\\n        _setApprovalForAll(_msgSender(), operator, approved);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC721-isApprovedForAll}.\\r\\n     */\\r\\n    function isApprovedForAll(\\r\\n        address owner,\\r\\n        address operator\\r\\n    ) public view virtual override returns (bool) {\\r\\n        return _operatorApprovals[owner][operator];\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC721-transferFrom}.\\r\\n     */\\r\\n    function transferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 tokenId\\r\\n    ) public virtual override {\\r\\n        //solhint-disable-next-line max-line-length\\r\\n        require(\\r\\n            _isApprovedOrOwner(_msgSender(), tokenId),\\r\\n            \\\"ERC721: caller is not token owner or approved\\\"\\r\\n        );\\r\\n\\r\\n        _transfer(from, to, tokenId);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC721-safeTransferFrom}.\\r\\n     */\\r\\n    function safeTransferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 tokenId\\r\\n    ) public virtual override {\\r\\n        safeTransferFrom(from, to, tokenId, \\\"\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC721-safeTransferFrom}.\\r\\n     */\\r\\n    function safeTransferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 tokenId,\\r\\n        bytes memory data\\r\\n    ) public virtual override {\\r\\n        require(\\r\\n            _isApprovedOrOwner(_msgSender(), tokenId),\\r\\n            \\\"ERC721: caller is not token owner or approved\\\"\\r\\n        );\\r\\n        _safeTransfer(from, to, tokenId, data);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\r\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\r\\n     *\\r\\n     * `data` is additional data, it has no specified format and it is sent in call to `to`.\\r\\n     *\\r\\n     * This internal function is equivalent to {safeTransferFrom}, and can be used to e.g.\\r\\n     * implement alternative mechanisms to perform token transfer, such as signature-based.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `from` cannot be the zero address.\\r\\n     * - `to` cannot be the zero address.\\r\\n     * - `tokenId` token must exist and be owned by `from`.\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function _safeTransfer(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 tokenId,\\r\\n        bytes memory data\\r\\n    ) internal virtual {\\r\\n        _transfer(from, to, tokenId);\\r\\n        require(\\r\\n            _checkOnERC721Received(from, to, tokenId, data),\\r\\n            \\\"ERC721: transfer to non ERC721Receiver implementer\\\"\\r\\n        );\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the owner of the `tokenId`. Does NOT revert if token doesn't exist\\r\\n     */\\r\\n    function _ownerOf(uint256 tokenId) internal view virtual returns (address) {\\r\\n        return _owners[tokenId];\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns whether `tokenId` exists.\\r\\n     *\\r\\n     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.\\r\\n     *\\r\\n     * Tokens start existing when they are minted (`_mint`),\\r\\n     * and stop existing when they are burned (`_burn`).\\r\\n     */\\r\\n    function _exists(uint256 tokenId) internal view virtual returns (bool) {\\r\\n        return _ownerOf(tokenId) != address(0);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns whether `spender` is allowed to manage `tokenId`.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `tokenId` must exist.\\r\\n     */\\r\\n    function _isApprovedOrOwner(\\r\\n        address spender,\\r\\n        uint256 tokenId\\r\\n    ) internal view virtual returns (bool) {\\r\\n        address owner = ERC721.ownerOf(tokenId);\\r\\n        return (spender == owner ||\\r\\n            isApprovedForAll(owner, spender) ||\\r\\n            getApproved(tokenId) == spender);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Safely mints `tokenId` and transfers it to `to`.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `tokenId` must not exist.\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function _safeMint(address to, uint256 tokenId) internal virtual {\\r\\n        _safeMint(to, tokenId, \\\"\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-ERC721-_safeMint-address-uint256-}[`_safeMint`], with an additional `data` parameter which is\\r\\n     * forwarded in {IERC721Receiver-onERC721Received} to contract recipients.\\r\\n     */\\r\\n    function _safeMint(\\r\\n        address to,\\r\\n        uint256 tokenId,\\r\\n        bytes memory data\\r\\n    ) internal virtual {\\r\\n        _mint(to, tokenId);\\r\\n        require(\\r\\n            _checkOnERC721Received(address(0), to, tokenId, data),\\r\\n            \\\"ERC721: transfer to non ERC721Receiver implementer\\\"\\r\\n        );\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Mints `tokenId` and transfers it to `to`.\\r\\n     *\\r\\n     * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `tokenId` must not exist.\\r\\n     * - `to` cannot be the zero address.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function _mint(address to, uint256 tokenId) internal virtual {\\r\\n        require(to != address(0), \\\"ERC721: mint to the zero address\\\");\\r\\n        require(!_exists(tokenId), \\\"ERC721: token already minted\\\");\\r\\n\\r\\n        _beforeTokenTransfer(address(0), to, tokenId, 1);\\r\\n\\r\\n        // Check that tokenId was not minted by `_beforeTokenTransfer` hook\\r\\n        require(!_exists(tokenId), \\\"ERC721: token already minted\\\");\\r\\n\\r\\n        unchecked {\\r\\n            // Will not overflow unless all 2**256 token ids are minted to the same owner.\\r\\n            // Given that tokens are minted one by one, it is impossible in practice that\\r\\n            // this ever happens. Might change if we allow batch minting.\\r\\n            // The ERC fails to describe this case.\\r\\n            _balances[to] += 1;\\r\\n        }\\r\\n\\r\\n        _owners[tokenId] = to;\\r\\n\\r\\n        emit Transfer(address(0), to, tokenId);\\r\\n\\r\\n        _afterTokenTransfer(address(0), to, tokenId, 1);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Destroys `tokenId`.\\r\\n     * The approval is cleared when the token is burned.\\r\\n     * This is an internal function that does not check if the sender is authorized to operate on the token.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `tokenId` must exist.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function _burn(uint256 tokenId) internal virtual {\\r\\n        address owner = ERC721.ownerOf(tokenId);\\r\\n\\r\\n        _beforeTokenTransfer(owner, address(0), tokenId, 1);\\r\\n\\r\\n        // Update ownership in case tokenId was transferred by `_beforeTokenTransfer` hook\\r\\n        owner = ERC721.ownerOf(tokenId);\\r\\n\\r\\n        // Clear approvals\\r\\n        delete _tokenApprovals[tokenId];\\r\\n\\r\\n        unchecked {\\r\\n            // Cannot overflow, as that would require more tokens to be burned/transferred\\r\\n            // out than the owner initially received through minting and transferring in.\\r\\n            _balances[owner] -= 1;\\r\\n        }\\r\\n        delete _owners[tokenId];\\r\\n\\r\\n        emit Transfer(owner, address(0), tokenId);\\r\\n\\r\\n        _afterTokenTransfer(owner, address(0), tokenId, 1);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Transfers `tokenId` from `from` to `to`.\\r\\n     *  As opposed to {transferFrom}, this imposes no restrictions on msg.sender.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `to` cannot be the zero address.\\r\\n     * - `tokenId` token must be owned by `from`.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function _transfer(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 tokenId\\r\\n    ) internal virtual {\\r\\n        require(\\r\\n            ERC721.ownerOf(tokenId) == from,\\r\\n            \\\"ERC721: transfer from incorrect owner\\\"\\r\\n        );\\r\\n        require(to != address(0), \\\"ERC721: transfer to the zero address\\\");\\r\\n\\r\\n        _beforeTokenTransfer(from, to, tokenId, 1);\\r\\n\\r\\n        // Check that tokenId was not transferred by `_beforeTokenTransfer` hook\\r\\n        require(\\r\\n            ERC721.ownerOf(tokenId) == from,\\r\\n            \\\"ERC721: transfer from incorrect owner\\\"\\r\\n        );\\r\\n\\r\\n        // Clear approvals from the previous owner\\r\\n        delete _tokenApprovals[tokenId];\\r\\n\\r\\n        unchecked {\\r\\n            // `_balances[from]` cannot overflow for the same reason as described in `_burn`:\\r\\n            // `from`'s balance is the number of token held, which is at least one before the current\\r\\n            // transfer.\\r\\n            // `_balances[to]` could overflow in the conditions described in `_mint`. That would require\\r\\n            // all 2**256 token ids to be minted, which in practice is impossible.\\r\\n            _balances[from] -= 1;\\r\\n            _balances[to] += 1;\\r\\n        }\\r\\n        _owners[tokenId] = to;\\r\\n\\r\\n        emit Transfer(from, to, tokenId);\\r\\n\\r\\n        _afterTokenTransfer(from, to, tokenId, 1);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Approve `to` to operate on `tokenId`\\r\\n     *\\r\\n     * Emits an {Approval} event.\\r\\n     */\\r\\n    function _approve(address to, uint256 tokenId) internal virtual {\\r\\n        _tokenApprovals[tokenId] = to;\\r\\n        emit Approval(ERC721.ownerOf(tokenId), to, tokenId);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Approve `operator` to operate on all of `owner` tokens\\r\\n     *\\r\\n     * Emits an {ApprovalForAll} event.\\r\\n     */\\r\\n    function _setApprovalForAll(\\r\\n        address owner,\\r\\n        address operator,\\r\\n        bool approved\\r\\n    ) internal virtual {\\r\\n        require(owner != operator, \\\"ERC721: approve to caller\\\");\\r\\n        _operatorApprovals[owner][operator] = approved;\\r\\n        emit ApprovalForAll(owner, operator, approved);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Reverts if the `tokenId` has not been minted yet.\\r\\n     */\\r\\n    function _requireMinted(uint256 tokenId) internal view virtual {\\r\\n        require(_exists(tokenId), \\\"ERC721: invalid token ID\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Internal function to invoke {IERC721Receiver-onERC721Received} on a target address.\\r\\n     * The call is not executed if the target address is not a contract.\\r\\n     *\\r\\n     * @param from address representing the previous owner of the given token ID\\r\\n     * @param to target address that will receive the tokens\\r\\n     * @param tokenId uint256 ID of the token to be transferred\\r\\n     * @param data bytes optional data to send along with the call\\r\\n     * @return bool whether the call correctly returned the expected magic value\\r\\n     */\\r\\n    function _checkOnERC721Received(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 tokenId,\\r\\n        bytes memory data\\r\\n    ) private returns (bool) {\\r\\n        if (to.isContract()) {\\r\\n            try\\r\\n                IERC721Receiver(to).onERC721Received(\\r\\n                    _msgSender(),\\r\\n                    from,\\r\\n                    tokenId,\\r\\n                    data\\r\\n                )\\r\\n            returns (bytes4 retval) {\\r\\n                return retval == IERC721Receiver.onERC721Received.selector;\\r\\n            } catch (bytes memory reason) {\\r\\n                if (reason.length == 0) {\\r\\n                    revert(\\r\\n                        \\\"ERC721: transfer to non ERC721Receiver implementer\\\"\\r\\n                    );\\r\\n                } else {\\r\\n                    /// @solidity memory-safe-assembly\\r\\n                    assembly {\\r\\n                        revert(add(32, reason), mload(reason))\\r\\n                    }\\r\\n                }\\r\\n            }\\r\\n        } else {\\r\\n            return true;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Hook that is called before any token transfer. This includes minting and burning. If {ERC721Consecutive} is\\r\\n     * used, the hook may be called as part of a consecutive (batch) mint, as indicated by `batchSize` greater than 1.\\r\\n     *\\r\\n     * Calling conditions:\\r\\n     *\\r\\n     * - When `from` and `to` are both non-zero, ``from``'s tokens will be transferred to `to`.\\r\\n     * - When `from` is zero, the tokens will be minted for `to`.\\r\\n     * - When `to` is zero, ``from``'s tokens will be burned.\\r\\n     * - `from` and `to` are never both zero.\\r\\n     * - `batchSize` is non-zero.\\r\\n     *\\r\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\r\\n     */\\r\\n    function _beforeTokenTransfer(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 firstTokenId,\\r\\n        uint256 batchSize\\r\\n    ) internal virtual {}\\r\\n\\r\\n    /**\\r\\n     * @dev Hook that is called after any token transfer. This includes minting and burning. If {ERC721Consecutive} is\\r\\n     * used, the hook may be called as part of a consecutive (batch) mint, as indicated by `batchSize` greater than 1.\\r\\n     *\\r\\n     * Calling conditions:\\r\\n     *\\r\\n     * - When `from` and `to` are both non-zero, ``from``'s tokens were transferred to `to`.\\r\\n     * - When `from` is zero, the tokens were minted for `to`.\\r\\n     * - When `to` is zero, ``from``'s tokens were burned.\\r\\n     * - `from` and `to` are never both zero.\\r\\n     * - `batchSize` is non-zero.\\r\\n     *\\r\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\r\\n     */\\r\\n    function _afterTokenTransfer(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 firstTokenId,\\r\\n        uint256 batchSize\\r\\n    ) internal virtual {}\\r\\n\\r\\n    /**\\r\\n     * @dev Unsafe write access to the balances, used by extensions that \\\"mint\\\" tokens using an {ownerOf} override.\\r\\n     *\\r\\n     * WARNING: Anyone calling this MUST ensure that the balances remain consistent with the ownership. The invariant\\r\\n     * being that for any address `a` the value returned by `balanceOf(a)` must be equal to the number of tokens such\\r\\n     * that `ownerOf(tokenId)` is `a`.\\r\\n     */\\r\\n    // solhint-disable-next-line func-name-mixedcase\\r\\n    function __unsafe_increaseBalance(\\r\\n        address account,\\r\\n        uint256 amount\\r\\n    ) internal {\\r\\n        _balances[account] += amount;\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x535cb63e5d6e35e8d05bdb982774d5a06f88291ef68194bf37257198d291c127\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC721/extensions/ERC721Pausable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.8.2) (token/ERC721/extensions/ERC721Pausable.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../ERC721.sol\\\";\\r\\nimport \\\"../../../security/Pausable.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev ERC721 token with pausable token transfers, minting and burning.\\r\\n *\\r\\n * Useful for scenarios such as preventing trades until the end of an evaluation\\r\\n * period, or having an emergency switch for freezing all token transfers in the\\r\\n * event of a large bug.\\r\\n *\\r\\n * IMPORTANT: This contract does not include public pause and unpause functions. In\\r\\n * addition to inheriting this contract, you must define both functions, invoking the\\r\\n * {Pausable-_pause} and {Pausable-_unpause} internal functions, with appropriate\\r\\n * access control, e.g. using {AccessControl} or {Ownable}. Not doing so will\\r\\n * make the contract unpausable.\\r\\n */\\r\\nabstract contract ERC721Pausable is ERC721, Pausable {\\r\\n    /**\\r\\n     * @dev See {ERC721-_beforeTokenTransfer}.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - the contract must not be paused.\\r\\n     */\\r\\n    function _beforeTokenTransfer(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 firstTokenId,\\r\\n        uint256 batchSize\\r\\n    ) internal virtual override {\\r\\n        super._beforeTokenTransfer(from, to, firstTokenId, batchSize);\\r\\n\\r\\n        require(!paused(), \\\"ERC721Pausable: token transfer while paused\\\");\\r\\n    }\\r\\n}\",\"keccak256\":\"0x99c6a2ff669c67e7741b289cfb049847871f18ff040dcf704160136f39522b80\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/Address.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.5.0) (utils/Address.sol)\\r\\n\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\n/**\\r\\n * @dev Collection of functions related to the address type\\r\\n */\\r\\nlibrary Address {\\r\\n    /**\\r\\n     * @dev Returns true if `account` is a contract.\\r\\n     *\\r\\n     * [IMPORTANT]\\r\\n     * ====\\r\\n     * It is unsafe to assume that an address for which this function returns\\r\\n     * false is an externally-owned account (EOA) and not a contract.\\r\\n     *\\r\\n     * Among others, `isContract` will return false for the following\\r\\n     * types of addresses:\\r\\n     *\\r\\n     *  - an externally-owned account\\r\\n     *  - a contract in construction\\r\\n     *  - an address where a contract will be created\\r\\n     *  - an address where a contract lived, but was destroyed\\r\\n     * ====\\r\\n     *\\r\\n     * [IMPORTANT]\\r\\n     * ====\\r\\n     * You shouldn't rely on `isContract` to protect against flash loan attacks!\\r\\n     *\\r\\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\\r\\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\\r\\n     * constructor.\\r\\n     * ====\\r\\n     */\\r\\n    function isContract(address account) internal view returns (bool) {\\r\\n        // This method relies on extcodesize/address.code.length, which returns 0\\r\\n        // for contracts in construction, since the code is only stored at the end\\r\\n        // of the constructor execution.\\r\\n\\r\\n        return account.code.length > 0;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\r\\n     * `recipient`, forwarding all available gas and reverting on errors.\\r\\n     *\\r\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\r\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\r\\n     * imposed by `transfer`, making them unable to receive funds via\\r\\n     * `transfer`. {sendValue} removes this limitation.\\r\\n     *\\r\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\r\\n     *\\r\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\r\\n     * taken to not create reentrancy vulnerabilities. Consider using\\r\\n     * {ReentrancyGuard} or the\\r\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\r\\n     */\\r\\n    function sendValue(address payable recipient, uint256 amount) internal {\\r\\n        require(address(this).balance >= amount, \\\"Address: insufficient balance\\\");\\r\\n\\r\\n        (bool success, ) = recipient.call{value: amount}(\\\"\\\");\\r\\n        require(success, \\\"Address: unable to send value, recipient may have reverted\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Performs a Solidity function call using a low level `call`. A\\r\\n     * plain `call` is an unsafe replacement for a function call: use this\\r\\n     * function instead.\\r\\n     *\\r\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\r\\n     * function (like regular Solidity function calls).\\r\\n     *\\r\\n     * Returns the raw returned data. To convert to the expected return value,\\r\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `target` must be a contract.\\r\\n     * - calling `target` with `data` must not revert.\\r\\n     *\\r\\n     * _Available since v3.1._\\r\\n     */\\r\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\r\\n        return functionCall(target, data, \\\"Address: low-level call failed\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\r\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\r\\n     *\\r\\n     * _Available since v3.1._\\r\\n     */\\r\\n    function functionCall(\\r\\n        address target,\\r\\n        bytes memory data,\\r\\n        string memory errorMessage\\r\\n    ) internal returns (bytes memory) {\\r\\n        return functionCallWithValue(target, data, 0, errorMessage);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\r\\n     * but also transferring `value` wei to `target`.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - the calling contract must have an ETH balance of at least `value`.\\r\\n     * - the called Solidity function must be `payable`.\\r\\n     *\\r\\n     * _Available since v3.1._\\r\\n     */\\r\\n    function functionCallWithValue(\\r\\n        address target,\\r\\n        bytes memory data,\\r\\n        uint256 value\\r\\n    ) internal returns (bytes memory) {\\r\\n        return functionCallWithValue(target, data, value, \\\"Address: low-level call with value failed\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\r\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\r\\n     *\\r\\n     * _Available since v3.1._\\r\\n     */\\r\\n    function functionCallWithValue(\\r\\n        address target,\\r\\n        bytes memory data,\\r\\n        uint256 value,\\r\\n        string memory errorMessage\\r\\n    ) internal returns (bytes memory) {\\r\\n        require(address(this).balance >= value, \\\"Address: insufficient balance for call\\\");\\r\\n        require(isContract(target), \\\"Address: call to non-contract\\\");\\r\\n\\r\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\r\\n        return verifyCallResult(success, returndata, errorMessage);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\r\\n     * but performing a static call.\\r\\n     *\\r\\n     * _Available since v3.3._\\r\\n     */\\r\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\r\\n        return functionStaticCall(target, data, \\\"Address: low-level static call failed\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\r\\n     * but performing a static call.\\r\\n     *\\r\\n     * _Available since v3.3._\\r\\n     */\\r\\n    function functionStaticCall(\\r\\n        address target,\\r\\n        bytes memory data,\\r\\n        string memory errorMessage\\r\\n    ) internal view returns (bytes memory) {\\r\\n        require(isContract(target), \\\"Address: static call to non-contract\\\");\\r\\n\\r\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\r\\n        return verifyCallResult(success, returndata, errorMessage);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\r\\n     * but performing a delegate call.\\r\\n     *\\r\\n     * _Available since v3.4._\\r\\n     */\\r\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\r\\n        return functionDelegateCall(target, data, \\\"Address: low-level delegate call failed\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\r\\n     * but performing a delegate call.\\r\\n     *\\r\\n     * _Available since v3.4._\\r\\n     */\\r\\n    function functionDelegateCall(\\r\\n        address target,\\r\\n        bytes memory data,\\r\\n        string memory errorMessage\\r\\n    ) internal returns (bytes memory) {\\r\\n        require(isContract(target), \\\"Address: delegate call to non-contract\\\");\\r\\n\\r\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\r\\n        return verifyCallResult(success, returndata, errorMessage);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn't, either by bubbling the\\r\\n     * revert reason using the provided one.\\r\\n     *\\r\\n     * _Available since v4.3._\\r\\n     */\\r\\n    function verifyCallResult(\\r\\n        bool success,\\r\\n        bytes memory returndata,\\r\\n        string memory errorMessage\\r\\n    ) internal pure returns (bytes memory) {\\r\\n        if (success) {\\r\\n            return returndata;\\r\\n        } else {\\r\\n            // Look for revert reason and bubble it up if present\\r\\n            if (returndata.length > 0) {\\r\\n                // The easiest way to bubble the revert reason is using memory via assembly\\r\\n\\r\\n                assembly {\\r\\n                    let returndata_size := mload(returndata)\\r\\n                    revert(add(32, returndata), returndata_size)\\r\\n                }\\r\\n            } else {\\r\\n                revert(errorMessage);\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n}\",\"keccak256\":\"0x4f82ac554df2b88092b0dff60e01918ddb7b4d34935150ad5a82c03ce83ed225\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.4) (utils/Context.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Provides information about the current execution context, including the\\r\\n * sender of the transaction and its data. While these are generally available\\r\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\r\\n * manner, since when dealing with meta-transactions the account sending and\\r\\n * paying for execution may not be the actual sender (as far as an application\\r\\n * is concerned).\\r\\n *\\r\\n * This contract is only required for intermediate, library-like contracts.\\r\\n */\\r\\nabstract contract Context {\\r\\n    function _msgSender() internal view virtual returns (address) {\\r\\n        return msg.sender;\\r\\n    }\\r\\n\\r\\n    function _msgData() internal view virtual returns (bytes calldata) {\\r\\n        return msg.data;\\r\\n    }\\r\\n\\r\\n    function _contextSuffixLength() internal view virtual returns (uint256) {\\r\\n        return 0;\\r\\n    }\\r\\n}\",\"keccak256\":\"0xef320168c89f0928606f4baf62131f67a759b0aed0ea445871758821a8c37b99\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 2820,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC721/extensions/ERC721Pausable.sol:ERC721Pausable",
        "label": "_initialized",
        "offset": 0,
        "slot": "0",
        "type": "t_bool"
      },
      {
        "astId": 2823,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC721/extensions/ERC721Pausable.sol:ERC721Pausable",
        "label": "_initializing",
        "offset": 1,
        "slot": "0",
        "type": "t_bool"
      },
      {
        "astId": 5958,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC721/extensions/ERC721Pausable.sol:ERC721Pausable",
        "label": "_name",
        "offset": 0,
        "slot": "1",
        "type": "t_string_storage"
      },
      {
        "astId": 5960,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC721/extensions/ERC721Pausable.sol:ERC721Pausable",
        "label": "_symbol",
        "offset": 0,
        "slot": "2",
        "type": "t_string_storage"
      },
      {
        "astId": 5964,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC721/extensions/ERC721Pausable.sol:ERC721Pausable",
        "label": "_owners",
        "offset": 0,
        "slot": "3",
        "type": "t_mapping(t_uint256,t_address)"
      },
      {
        "astId": 5968,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC721/extensions/ERC721Pausable.sol:ERC721Pausable",
        "label": "_balances",
        "offset": 0,
        "slot": "4",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 5972,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC721/extensions/ERC721Pausable.sol:ERC721Pausable",
        "label": "_tokenApprovals",
        "offset": 0,
        "slot": "5",
        "type": "t_mapping(t_uint256,t_address)"
      },
      {
        "astId": 5978,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC721/extensions/ERC721Pausable.sol:ERC721Pausable",
        "label": "_operatorApprovals",
        "offset": 0,
        "slot": "6",
        "type": "t_mapping(t_address,t_mapping(t_address,t_bool))"
      },
      {
        "astId": 2905,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC721/extensions/ERC721Pausable.sol:ERC721Pausable",
        "label": "_paused",
        "offset": 0,
        "slot": "7",
        "type": "t_bool"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_bool": {
        "encoding": "inplace",
        "label": "bool",
        "numberOfBytes": "1"
      },
      "t_mapping(t_address,t_bool)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => bool)",
        "numberOfBytes": "32",
        "value": "t_bool"
      },
      "t_mapping(t_address,t_mapping(t_address,t_bool))": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => mapping(address => bool))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_address,t_bool)"
      },
      "t_mapping(t_address,t_uint256)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_mapping(t_uint256,t_address)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => address)",
        "numberOfBytes": "32",
        "value": "t_address"
      },
      "t_string_storage": {
        "encoding": "bytes",
        "label": "string",
        "numberOfBytes": "32"
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      }
    }
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
});