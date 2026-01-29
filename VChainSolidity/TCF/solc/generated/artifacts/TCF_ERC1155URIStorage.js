export const Artifact_TCF_ERC1155URIStorage = /** @type {const} **/ ({
  "contractName": "TCF_ERC1155URIStorage",
  "sourceName": "contracts/extensions/ERC1155/TCF_ERC1155URIStorage.sol",
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
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
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
          "internalType": "uint256[]",
          "name": "indexes",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "ESafeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "Euri",
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
      "inputs": [],
      "name": "_initializedURIStorage",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
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
          "name": "",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
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
      "inputs": [],
      "name": "owner",
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "editionId",
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
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "",
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
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
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
          "internalType": "bytes[6]",
          "name": "baseURI",
          "type": "bytes[6]"
        }
      ],
      "name": "setBaseURI",
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
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
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
  "inputSourceName": "project/contracts/extensions/ERC1155/TCF_ERC1155URIStorage.sol",
  "devdoc": {
    "details": "ERC1155 token with storage based token URI management. Inspired by the ERC721URIStorage extension _Available since v4.6._",
    "kind": "dev",
    "methods": {
      "ESafeTransferFrom(address,address,uint256,uint256[],bytes)": {
        "details": "安全转移无效的token，可以删除，因为后面会在TCF_NFT中实现",
        "params": {
          "indexes": "无效token在mintTimes数组中的位置"
        }
      },
      "balanceOf(address,uint256)": {
        "details": "See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address."
      },
      "balanceOfBatch(address[],uint256[])": {
        "details": "See {IERC1155-balanceOfBatch}.没有实现 Requirements: - `accounts` and `ids` must have the same length."
      },
      "isApprovedForAll(address,address)": {
        "details": "See {IERC1155-isApprovedForAll}."
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
      },
      "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": {
        "details": "See {IERC1155-safeBatchTransferFrom}."
      },
      "safeTransferFrom(address,address,uint256,uint256,bytes)": {
        "details": "See {IERC1155-safeTransferFrom}.没有实现"
      },
      "setApprovalForAll(address,bool)": {
        "details": "See {IERC1155-setApprovalForAll}."
      },
      "setBaseURI(bytes[6])": {
        "details": "Sets `baseURI` as the `_baseURI` for all tokens Only callable by the owner.可以被设置多次"
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
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
      "ESafeTransferFrom(address,address,uint256,uint256[],bytes)": "598c27bc",
      "Euri(uint256)": "d3ab7443",
      "_initializedURIStorage()": "7a915fde",
      "balanceOf(address,uint256)": "00fdd58e",
      "balanceOfBatch(address[],uint256[])": "4e1273f4",
      "isApprovedForAll(address,address)": "e985e9c5",
      "owner()": "8da5cb5b",
      "ownerOf(uint256,uint256)": "d9dad80d",
      "renounceOwnership()": "715018a6",
      "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": "2eb2c2d6",
      "safeTransferFrom(address,address,uint256,uint256,bytes)": "f242432a",
      "setApprovalForAll(address,bool)": "a22cb465",
      "setBaseURI(bytes[6])": "2fedbf3c",
      "supportsInterface(bytes4)": "01ffc9a7",
      "transferOwnership(address)": "f2fde38b",
      "uri(uint256)": "0e89341c"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"TransferBatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"URI\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256[]\",\"name\":\"indexes\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ESafeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Euri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"_initializedURIStorage\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"name\":\"balanceOfBatch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"editionId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"safeBatchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes[6]\",\"name\":\"baseURI\",\"type\":\"bytes[6]\"}],\"name\":\"setBaseURI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"uri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"ERC1155 token with storage based token URI management. Inspired by the ERC721URIStorage extension _Available since v4.6._\",\"kind\":\"dev\",\"methods\":{\"ESafeTransferFrom(address,address,uint256,uint256[],bytes)\":{\"details\":\"\\u5b89\\u5168\\u8f6c\\u79fb\\u65e0\\u6548\\u7684token\\uff0c\\u53ef\\u4ee5\\u5220\\u9664\\uff0c\\u56e0\\u4e3a\\u540e\\u9762\\u4f1a\\u5728TCF_NFT\\u4e2d\\u5b9e\\u73b0\",\"params\":{\"indexes\":\"\\u65e0\\u6548token\\u5728mintTimes\\u6570\\u7ec4\\u4e2d\\u7684\\u4f4d\\u7f6e\"}},\"balanceOf(address,uint256)\":{\"details\":\"See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.\"},\"balanceOfBatch(address[],uint256[])\":{\"details\":\"See {IERC1155-balanceOfBatch}.\\u6ca1\\u6709\\u5b9e\\u73b0 Requirements: - `accounts` and `ids` must have the same length.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC1155-isApprovedForAll}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)\":{\"details\":\"See {IERC1155-safeBatchTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,uint256,bytes)\":{\"details\":\"See {IERC1155-safeTransferFrom}.\\u6ca1\\u6709\\u5b9e\\u73b0\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC1155-setApprovalForAll}.\"},\"setBaseURI(bytes[6])\":{\"details\":\"Sets `baseURI` as the `_baseURI` for all tokens Only callable by the owner.\\u53ef\\u4ee5\\u88ab\\u8bbe\\u7f6e\\u591a\\u6b21\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/extensions/ERC1155/TCF_ERC1155URIStorage.sol\":\"TCF_ERC1155URIStorage\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/extensions/ERC1155/TCF_ERC1155.sol\":{\"content\":\"//SPDX-License-Identifier:MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.6) (token/ERC1155/ERC1155.sol)\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../../openzeppelin_l/contracts/token/ERC1155/IERC1155.sol\\\";\\r\\nimport \\\"../../openzeppelin_l/contracts/token/ERC1155/IERC1155Receiver.sol\\\";\\r\\nimport \\\"../../openzeppelin_l/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\\\";\\r\\nimport \\\"../../openzeppelin_l/contracts/utils/Context.sol\\\";\\r\\nimport \\\"../../openzeppelin_l/contracts/utils/introspection/ERC165.sol\\\";\\r\\n\\r\\ncontract TCF_ERC1155 is Context, ERC165, IERC1155, IERC1155MetadataURI {\\r\\n    // \\u5c06ERC1155\\u8d4b\\u503c\\u5230\\u8fd9\\u4e2a\\u51fd\\u6570\\r\\n    // 1\\u3001\\u7528\\u6237mint NFT\\u65f6\\u4fdd\\u5b58NFT\\u521b\\u5efa\\u65f6\\u95f4\\uff0c\\u521b\\u5efa\\u65f6\\u95f4:{amount\\uff0cuint32[]}\\r\\n    // 2\\u3001transfer\\r\\n    // 2.1\\uff1a\\u7528\\u6237\\u8f6c\\u9001NFT\\u65f6\\uff0c\\u8fde\\u540c\\u521b\\u5efa\\u65f6\\u95f4\\u4e00\\u540c\\u8f6c\\u7ed9\\u53e6\\u4e00\\u4e2a\\u7528\\u6237\\uff08\\u5728\\u5f53\\u524d\\u5408\\u7ea6\\u4e2d\\u5b9e\\u73b0\\uff09\\r\\n    // 2.2\\uff1a\\u7528\\u6237\\u8f6c\\u9001NFT\\u65f6\\uff0c\\u53ea\\u6709\\u8fc7\\u671f\\u7684NFT\\u624d\\u80fd\\u88ab\\u8f6c\\u9001\\uff08\\u8fd9\\u4e2a\\u529f\\u80fd\\u5728TCF_NFT.sol\\u4e2d\\u5b9e\\u73b0\\uff0c\\u56e0\\u4e3a\\u8fd9\\u91cc\\u6ca1\\u6709\\u6bcf\\u4e2aNFT\\u7684\\u6743\\u9650\\u65f6\\u957f\\uff09\\r\\n    // 3.3\\uff1a\\u8f6c\\u9001NFT\\u65f6\\uff0c\\u9700\\u8981\\u4f20\\u5165index\\u6570\\u7ec4\\uff0c\\u8868\\u793a\\u53ef\\u8f6c\\u79fbtoken\\u5728\\u65f6\\u95f4\\u6233\\u6570\\u7ec4\\u7684index\\r\\n    // 3.4\\uff1a\\u6267\\u884c\\u8f6ctoken\\u64cd\\u4f5c\\u662f\\uff0c\\u628a\\u67d0\\u4e2a\\u4f4d\\u7f6e\\u7684\\u7a7f\\u4ef6\\u65f6\\u95f4\\u8ffd\\u52a0\\u5230\\u76ee\\u6807\\u5730\\u5740\\u7684\\u65f6\\u95f4\\u6233\\u5217\\u8868\\u4e2d\\uff0c\\u5c06\\u53d1\\u9001\\u65b9\\u65f6\\u95f4\\u6233\\u6570\\u7ec4\\u7684\\u5bf9\\u5e94\\u4f4d\\u7f6e\\u8d4b\\u503c\\u4e3a0\\uff0c\\u4e0d\\u9700\\u8981\\u5220\\u9664\\uff0c\\u6216\\u628a\\u5176\\u5b83\\u4f4d\\u7f6e\\u7684\\u6570\\u636e\\u590d\\u5236\\u5230\\u8fd9\\u4e2a\\u4f4d\\u7f6e\\r\\n    // 3\\u3001\\u6709\\u6548\\u671f\\u5b58\\u50a8\\r\\n    // 3.1\\uff1a\\u4fdd\\u5b58\\u5728\\u6570\\u7ec4\\u4e2d\\uff0c\\u914d\\u5957\\u4e24\\u4e2a\\u5904\\u7406\\u51fd\\u6570\\r\\n    // 3.2\\uff1a\\u83b7\\u53d6\\u8fc7\\u671ftoken\\u7684index\\u6570\\u7ec4\\r\\n    // 3.3\\uff1a\\u83b7\\u53d6\\u6709\\u6548token\\u7684index\\u6570\\u7ec4\\r\\n    uint256[6] internal _nextTokenId;\\r\\n    //  mapping(tokenID =>mapping(editionId => address))\\r\\n    //  editionID\\u8868\\u793a\\u540c\\u4e00\\u7c7btokenID\\u4e0b\\u7684\\u4e0d\\u540cNFT\\r\\n    mapping(uint256 => mapping(uint256 => address)) private _owners;\\r\\n    // \\u7528\\u6237\\u7684token\\u6570\\u91cf, mapping(tokenId => mapping(owner => amount))\\r\\n    mapping(uint256 => mapping(address => uint256)) private _balances;\\r\\n\\r\\n    // Mapping from account to operator approvals\\r\\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC165-supportsInterface}.\\r\\n     */\\r\\n    function supportsInterface(\\r\\n        bytes4 interfaceId\\r\\n    ) public view virtual override(ERC165, IERC165) returns (bool) {\\r\\n        return\\r\\n            interfaceId == type(IERC1155).interfaceId ||\\r\\n            interfaceId == type(IERC1155MetadataURI).interfaceId ||\\r\\n            super.supportsInterface(interfaceId);\\r\\n    }\\r\\n\\r\\n    // /**\\r\\n    //  * @dev See {IERC1155MetadataURI-uri}.\\r\\n    //  *\\r\\n    //  * This implementation returns the same URI for *all* token types. It relies\\r\\n    //  * on the token type ID substitution mechanism\\r\\n    //  * https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].\\r\\n    //  *\\r\\n    //  * Clients calling this function must replace the `\\\\{id\\\\}` substring with the\\r\\n    //  * actual token type ID.\\r\\n    //  */\\r\\n    function uri(uint256) public view virtual override returns (string memory) {\\r\\n        revert(\\\"USE_Euri\\\");\\r\\n    }\\r\\n\\r\\n    // owner\\r\\n    function ownerOf(\\r\\n        uint256 tokenId,\\r\\n        uint256 editionId\\r\\n    ) public view returns (address) {\\r\\n        require(tokenId < 6, \\\"TOKENID_RANGE\\\");\\r\\n        address owner = _owners[tokenId][editionId];\\r\\n        return owner;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC1155-balanceOf}.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `account` cannot be the zero address.\\r\\n     */\\r\\n    function balanceOf(\\r\\n        address account,\\r\\n        uint256 id\\r\\n    ) public view virtual override returns (uint256) {\\r\\n        require(account != address(0), \\\"ZERO_ADDRESS\\\");\\r\\n        require(id < 6, \\\"ERR_TOKENID_RANGE\\\");\\r\\n        return _balances[id][account];\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC1155-balanceOfBatch}.\\u6ca1\\u6709\\u5b9e\\u73b0\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `accounts` and `ids` must have the same length.\\r\\n     */\\r\\n    function balanceOfBatch(\\r\\n        address[] memory,\\r\\n        uint256[] memory\\r\\n    ) public view virtual override returns (uint256[] memory) {\\r\\n        revert(\\\"NOT_IMPLEMENTED\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC1155-setApprovalForAll}.\\r\\n     */\\r\\n    function setApprovalForAll(\\r\\n        address operator,\\r\\n        bool approved\\r\\n    ) public virtual override {\\r\\n        _setApprovalForAll(_msgSender(), operator, approved);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC1155-isApprovedForAll}.\\r\\n     */\\r\\n    function isApprovedForAll(\\r\\n        address account,\\r\\n        address operator\\r\\n    ) public view virtual override returns (bool) {\\r\\n        return _operatorApprovals[account][operator];\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC1155-safeTransferFrom}.\\u6ca1\\u6709\\u5b9e\\u73b0\\r\\n     */\\r\\n    function safeTransferFrom(\\r\\n        address,\\r\\n        address,\\r\\n        uint256,\\r\\n        uint256,\\r\\n        bytes memory\\r\\n    ) public virtual override {\\r\\n        revert(\\\"USE_ESafeTransferFrom\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev \\u5b89\\u5168\\u8f6c\\u79fb\\u65e0\\u6548\\u7684token\\uff0c\\u53ef\\u4ee5\\u5220\\u9664\\uff0c\\u56e0\\u4e3a\\u540e\\u9762\\u4f1a\\u5728TCF_NFT\\u4e2d\\u5b9e\\u73b0\\r\\n     * @param indexes \\u65e0\\u6548token\\u5728mintTimes\\u6570\\u7ec4\\u4e2d\\u7684\\u4f4d\\u7f6e\\r\\n     */\\r\\n    function ESafeTransferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 id,\\r\\n        uint256[] calldata indexes,\\r\\n        bytes memory data\\r\\n    ) public virtual {\\r\\n        require(\\r\\n            from == _msgSender() || isApprovedForAll(from, _msgSender()),\\r\\n            \\\"CALLER_NOT_OWNER_APPROVED\\\"\\r\\n        );\\r\\n        _safeTransferFrom(from, to, id, indexes, data);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC1155-safeBatchTransferFrom}.\\r\\n     */\\r\\n    function safeBatchTransferFrom(\\r\\n        address,\\r\\n        address,\\r\\n        uint256[] memory,\\r\\n        uint256[] memory,\\r\\n        bytes memory\\r\\n    ) public virtual override {\\r\\n        revert(\\\"NOT_IMPLEMENTED\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.\\r\\n     *\\r\\n     * Emits a {TransferSingle} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `to` cannot be the zero address.\\r\\n     * - `from` must have a balance of tokens of type `id` of at least `amount`.\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\\r\\n     * acceptance magic value.\\r\\n     */\\r\\n    function _safeTransferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 tokenId,\\r\\n        uint256[] calldata indexes,\\r\\n        bytes memory data\\r\\n    ) internal virtual {\\r\\n        require(to != address(0), \\\"ZERO_ADDRESS\\\");\\r\\n        require(tokenId < 6, \\\"TOKENID_RANGE\\\");\\r\\n        for (uint i = 0; i < indexes.length; i++) {\\r\\n            require(_owners[tokenId][indexes[i]] == from, \\\"TOKEN_NOT_OWNED\\\");\\r\\n        }\\r\\n        // \\u4e0d\\u9700\\u8981\\u68c0\\u67e5\\u4f59\\u989d\\uff0c\\u56e0\\u4e3a\\uff0c\\u5982\\u679cowners\\u4e2d\\u5b58\\u5728\\u8fd9\\u4e2atokenId\\u548ceditionId\\u7684\\u8bb0\\u5f55\\uff0c\\u8868\\u793a\\u7528\\u6237\\u62e5\\u6709\\u8fd9\\u4e2aNFT\\r\\n\\r\\n        address operator = _msgSender();\\r\\n        uint256[] memory ids = _asSingletonArray(tokenId);\\r\\n        uint256[] memory amounts = _asSingletonArray(indexes.length);\\r\\n        _beforeTokenTransfer(operator, from, to, ids, amounts, data);\\r\\n\\r\\n        // \\u68c0\\u67e5\\u4e24\\u6b21\\uff0c\\u9632\\u6b62\\u5728beforeTokenTransfer\\u4e2d\\u88ab\\u4fee\\u6539\\r\\n        for (uint i = 0; i < indexes.length; i++) {\\r\\n            require(_owners[tokenId][indexes[i]] == from, \\\"TOKEN_NOT_OWNED\\\");\\r\\n        }\\r\\n\\r\\n        uint256 fromBalance = _balances[tokenId][from];\\r\\n        unchecked {\\r\\n            _balances[tokenId][from] = fromBalance - indexes.length;\\r\\n            for (uint i = 0; i < indexes.length; i++) {\\r\\n                _owners[tokenId][indexes[i]] = to;\\r\\n            }\\r\\n        }\\r\\n        _balances[tokenId][to] += indexes.length;\\r\\n        emit TransferSingle(operator, from, to, tokenId, indexes.length);\\r\\n        _afterTokenTransfer(operator, from, to, ids, amounts, data);\\r\\n        _doSafeTransferAcceptanceCheck(\\r\\n            operator,\\r\\n            from,\\r\\n            to,\\r\\n            tokenId,\\r\\n            indexes.length,\\r\\n            data\\r\\n        );\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_safeTransferFrom}.\\r\\n     *\\r\\n     * Emits a {TransferBatch} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\\r\\n     * acceptance magic value.\\r\\n     */\\r\\n    function _safeBatchTransferFrom(\\r\\n        address,\\r\\n        address,\\r\\n        uint256[] memory,\\r\\n        uint256[] memory,\\r\\n        bytes memory\\r\\n    ) internal virtual {\\r\\n        revert(\\\"NOT_IMPLEMENTED\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Sets a new URI for all token types, by relying on the token type ID\\r\\n     * substitution mechanism\\r\\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].\\r\\n     *\\r\\n     * By this mechanism, any occurrence of the `\\\\{id\\\\}` substring in either the\\r\\n     * URI or any of the amounts in the JSON file at said URI will be replaced by\\r\\n     * clients with the token type ID.\\r\\n     *\\r\\n     * For example, the `https://token-cdn-domain/\\\\{id\\\\}.json` URI would be\\r\\n     * interpreted by clients as\\r\\n     * `https://token-cdn-domain/000000000000000000000000000000000000000000000000000000000004cce0.json`\\r\\n     * for token type ID 0x4cce0.\\r\\n     *\\r\\n     * See {uri}.\\r\\n     *\\r\\n     * Because these URIs cannot be meaningfully represented by the {URI} event,\\r\\n     * this function emits no events.\\r\\n     */\\r\\n    function _setURI(string memory) internal virtual {\\r\\n        // _uri = newuri;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Creates `amount` tokens of token type `id`, and assigns them to `to`.\\r\\n     *\\r\\n     * Emits a {TransferSingle} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `to` cannot be the zero address.\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\\r\\n     * acceptance magic value.\\r\\n     */\\r\\n    function _mint(\\r\\n        address to,\\r\\n        uint256 id,\\r\\n        uint256 amount,\\r\\n        bytes memory data\\r\\n    ) internal virtual {\\r\\n        require(id < 6, \\\"TOKENID_RANGE\\\");\\r\\n        require(to != address(0), \\\"ZERO_ADDRESS\\\");\\r\\n\\r\\n        address operator = _msgSender();\\r\\n        uint256[] memory ids = _asSingletonArray(id);\\r\\n        uint256[] memory amounts = _asSingletonArray(amount);\\r\\n\\r\\n        _beforeTokenTransfer(operator, address(0), to, ids, amounts, data);\\r\\n\\r\\n        // \\u66f4\\u65b0\\u7528\\u6237\\u8d44\\u4ea7\\r\\n        _balances[id][to] += amount;\\r\\n        for (uint i = 0; i < amount; i++) {\\r\\n            _owners[id][_nextTokenId[id] + i] = to;\\r\\n        }\\r\\n        _nextTokenId[id] += amount;\\r\\n\\r\\n        // _balances[id][to] = oldMintTime_Amount;\\r\\n        emit TransferSingle(operator, address(0), to, id, amount);\\r\\n\\r\\n        _afterTokenTransfer(operator, address(0), to, ids, amounts, data);\\r\\n\\r\\n        _doSafeTransferAcceptanceCheck(\\r\\n            operator,\\r\\n            address(0),\\r\\n            to,\\r\\n            id,\\r\\n            amount,\\r\\n            data\\r\\n        );\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_mint}.\\r\\n     *\\r\\n     * Emits a {TransferBatch} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `ids` and `amounts` must have the same length.\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\\r\\n     * acceptance magic value.\\r\\n     */\\r\\n    function _mintBatch(\\r\\n        address,\\r\\n        uint256[] memory,\\r\\n        uint256[] memory,\\r\\n        bytes memory\\r\\n    ) internal virtual {\\r\\n        revert(\\\"NOT_IMPLEMENTED\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Destroys `amount` tokens of token type `id` from `from`\\r\\n     *\\r\\n     * Emits a {TransferSingle} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `from` cannot be the zero address.\\r\\n     * - `from` must have at least `amount` tokens of token type `id`.\\r\\n     */\\r\\n    function _burn(address, uint256, uint256) internal virtual {\\r\\n        revert(\\\"NOT_IMPLEMENTED\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_burn}.\\r\\n     *\\r\\n     * Emits a {TransferBatch} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `ids` and `amounts` must have the same length.\\r\\n     */\\r\\n    function _burnBatch(\\r\\n        address,\\r\\n        uint256[] memory,\\r\\n        uint256[] memory\\r\\n    ) internal virtual {\\r\\n        revert(\\\"NOT_IMPLEMENTED\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Approve `operator` to operate on all of `owner` tokens\\r\\n     *\\r\\n     * Emits an {ApprovalForAll} event.\\r\\n     */\\r\\n    function _setApprovalForAll(\\r\\n        address owner,\\r\\n        address operator,\\r\\n        bool approved\\r\\n    ) internal virtual {\\r\\n        // \\u4e0d\\u53ef\\u4ee5\\u6388\\u6743\\u7ed9\\u81ea\\u5df1\\r\\n        require(owner != operator, \\\"APPROVAL_SELF\\\");\\r\\n        _operatorApprovals[owner][operator] = approved;\\r\\n        emit ApprovalForAll(owner, operator, approved);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Hook that is called before any token transfer. This includes minting\\r\\n     * and burning, as well as batched variants.\\r\\n     *\\r\\n     * The same hook is called on both single and batched variants. For single\\r\\n     * transfers, the length of the `ids` and `amounts` arrays will be 1.\\r\\n     *\\r\\n     * Calling conditions (for each `id` and `amount` pair):\\r\\n     *\\r\\n     * - When `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\r\\n     * of token type `id` will be  transferred to `to`.\\r\\n     * - When `from` is zero, `amount` tokens of token type `id` will be minted\\r\\n     * for `to`.\\r\\n     * - when `to` is zero, `amount` of ``from``'s tokens of token type `id`\\r\\n     * will be burned.\\r\\n     * - `from` and `to` are never both zero.\\r\\n     * - `ids` and `amounts` have the same, non-zero length.\\r\\n     *\\r\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\r\\n     */\\r\\n    function _beforeTokenTransfer(\\r\\n        address operator,\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256[] memory ids,\\r\\n        uint256[] memory amounts,\\r\\n        bytes memory data\\r\\n    ) internal virtual {}\\r\\n\\r\\n    /**\\r\\n     * @dev Hook that is called after any token transfer. This includes minting\\r\\n     * and burning, as well as batched variants.\\r\\n     *\\r\\n     * The same hook is called on both single and batched variants. For single\\r\\n     * transfers, the length of the `id` and `amount` arrays will be 1.\\r\\n     *\\r\\n     * Calling conditions (for each `id` and `amount` pair):\\r\\n     *\\r\\n     * - When `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\r\\n     * of token type `id` will be  transferred to `to`.\\r\\n     * - When `from` is zero, `amount` tokens of token type `id` will be minted\\r\\n     * for `to`.\\r\\n     * - when `to` is zero, `amount` of ``from``'s tokens of token type `id`\\r\\n     * will be burned.\\r\\n     * - `from` and `to` are never both zero.\\r\\n     * - `ids` and `amounts` have the same, non-zero length.\\r\\n     *\\r\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\r\\n     */\\r\\n    function _afterTokenTransfer(\\r\\n        address operator,\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256[] memory ids,\\r\\n        uint256[] memory amounts,\\r\\n        bytes memory data\\r\\n    ) internal virtual {}\\r\\n\\r\\n    function _doSafeTransferAcceptanceCheck(\\r\\n        address operator,\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 id,\\r\\n        uint256 amount,\\r\\n        bytes memory data\\r\\n    ) private {\\r\\n        if (to.code.length > 0) {\\r\\n            try\\r\\n                IERC1155Receiver(to).onERC1155Received(\\r\\n                    operator,\\r\\n                    from,\\r\\n                    id,\\r\\n                    amount,\\r\\n                    data\\r\\n                )\\r\\n            returns (bytes4 response) {\\r\\n                if (response != IERC1155Receiver.onERC1155Received.selector) {\\r\\n                    revert(\\\"ERC1155RECEIVER_REJECTED_TOKENS\\\");\\r\\n                }\\r\\n            } catch Error(string memory reason) {\\r\\n                revert(reason);\\r\\n            } catch {\\r\\n                revert(\\\"transfer_to_non-ERC1155Receiver_implementer\\\");\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function _doSafeBatchTransferAcceptanceCheck(\\r\\n        address,\\r\\n        address,\\r\\n        address,\\r\\n        uint256[] memory,\\r\\n        uint256[] memory,\\r\\n        bytes memory\\r\\n    ) private pure {\\r\\n        revert(\\\"NOT_IMPLEMENTED\\\");\\r\\n    }\\r\\n\\r\\n    function _asSingletonArray(\\r\\n        uint256 element\\r\\n    ) private pure returns (uint256[] memory) {\\r\\n        uint256[] memory array = new uint256[](1);\\r\\n        array[0] = element;\\r\\n\\r\\n        return array;\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0xa2080a4accc6eada5dbef24db65f330235208c5e7239254334f665ea95226381\",\"license\":\"MIT\"},\"project/contracts/extensions/ERC1155/TCF_ERC1155URIStorage.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC1155/extensions/ERC1155URIStorage.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"./TCF_ERC1155.sol\\\";\\r\\nimport {utils} from \\\"../../utils.sol\\\";\\r\\nimport {Ownable} from \\\"../../openzeppelin_l/contracts/access/Ownable.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev ERC1155 token with storage based token URI management.\\r\\n * Inspired by the ERC721URIStorage extension\\r\\n *\\r\\n * _Available since v4.6._\\r\\n */\\r\\n\\r\\n//  TODO: \\u67e5\\u770bPinata\\u7b49IPFS\\u5b58\\u50a8\\u670d\\u52a1\\u5546\\u7684\\u4f7f\\u7528\\u60c5\\u51b5\\r\\n// \\u5220\\u9664baseURI\\r\\n\\r\\nabstract contract TCF_ERC1155URIStorage is TCF_ERC1155, Ownable, utils {\\r\\n    // using Strings for uint256;\\r\\n\\r\\n    // Optional base URI\\r\\n    string[6] private _baseURI;\\r\\n\\r\\n    // \\u6807\\u8bc6\\u662f\\u5426\\u88ab\\u521d\\u59cb\\u5316\\r\\n    uint8 public _initializedURIStorage;\\r\\n\\r\\n    // Optional mapping for token URIs\\r\\n    mapping(uint256 => mapping(uint256 => string)) private _tokenURIs;\\r\\n\\r\\n    // \\u6d4b\\u8bd5_baseURI\\r\\n    // function test_BaseURI() public view returns (string[6] memory) {\\r\\n    //     return _baseURI;\\r\\n    // }\\r\\n\\r\\n    function Euri(uint256 tokenId) public view virtual returns (string memory) {\\r\\n        require(_initializedURIStorage == 1, \\\"BASEURI_NOT_INITIALIZED\\\");\\r\\n        require(tokenId < 6, \\\"TOKENID_RANGE\\\");\\r\\n        return _baseURI[tokenId];\\r\\n    }\\r\\n\\r\\n    // /**\\r\\n    //  * @dev Sets `tokenURI` as the tokenURI of `tokenId`.\\r\\n    //  */\\r\\n    // function _setURI(uint256, uint256, string memory) internal virtual {\\r\\n    //     // \\u6ca1\\u6709\\u5b9e\\u73b0\\u8bbe\\u7f6e\\u5355\\u4e2aURI\\u7684\\u529f\\u80fd\\r\\n    //     revert(E.ERR_FUNCTION_NOT_SUPPORTED);\\r\\n    //     // _tokenURIs[tokenId][editionId] = tokenURI;\\r\\n    //     // emit URI(uri(tokenId), tokenId);\\r\\n    // }\\r\\n\\r\\n    /**\\r\\n     * @dev Sets `baseURI` as the `_baseURI` for all tokens\\r\\n     * Only callable by the owner.\\u53ef\\u4ee5\\u88ab\\u8bbe\\u7f6e\\u591a\\u6b21\\r\\n     */\\r\\n    // \\u5982\\u679c\\u4ee3\\u7801\\u91cf\\u5141\\u8bb8\\uff0c\\u53ef\\u4ee5\\u5220\\u9664onlyOwner\\u4fee\\u9970\\u5668\\uff0c\\u4fee\\u9970\\u5668\\u6539\\u4e3ainternal\\uff0c\\u5728TCF_NFT\\u4e2d\\u8986\\u5199\\uff0c\\u7136\\u540e\\u52a0\\u4e0aonlyOwner\\u4fee\\u9970\\u5668\\r\\n    // \\u56e0\\u4e3a\\u90a3\\u6837\\u66f4\\u5bb9\\u6613\\u6269\\u5c55\\r\\n    function setBaseURI(bytes[6] memory baseURI) external virtual onlyOwner {\\r\\n        for (uint256 i = 0; i < 6; i++) {\\r\\n            _baseURI[i] = string(baseURI[i]);\\r\\n        }\\r\\n        _initializedURIStorage = 1;\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x048f4b5536a03081cd049258403a488557fa92fa124586b1d84418b2b921bab4\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/access/Ownable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (access/Ownable.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../utils/Context.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Contract module which provides a basic access control mechanism, where\\r\\n * there is an account (an owner) that can be granted exclusive access to\\r\\n * specific functions.\\r\\n *\\r\\n * By default, the owner account will be the one that deploys the contract. This\\r\\n * can later be changed with {transferOwnership}.\\r\\n *\\r\\n * This module is used through inheritance. It will make available the modifier\\r\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\r\\n * the owner.\\r\\n */\\r\\nabstract contract Ownable is Context {\\r\\n    address private _owner;\\r\\n\\r\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\r\\n\\r\\n    /**\\r\\n     * @dev Initializes the contract setting the deployer as the initial owner.\\r\\n     */\\r\\n    constructor() {\\r\\n        _transferOwnership(_msgSender());\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Throws if called by any account other than the owner.\\r\\n     */\\r\\n    modifier onlyOwner() {\\r\\n        _checkOwner();\\r\\n        _;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the address of the current owner.\\r\\n     */\\r\\n    function owner() public view virtual returns (address) {\\r\\n        return _owner;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Throws if the sender is not the owner.\\r\\n     */\\r\\n    function _checkOwner() internal view virtual {\\r\\n        require(owner() == _msgSender(), \\\"Ownable: caller is not the owner\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Leaves the contract without owner. It will not be possible to call\\r\\n     * `onlyOwner` functions. Can only be called by the current owner.\\r\\n     *\\r\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\r\\n     * thereby disabling any functionality that is only available to the owner.\\r\\n     */\\r\\n    function renounceOwnership() public virtual onlyOwner {\\r\\n        _transferOwnership(address(0));\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\r\\n     * Can only be called by the current owner.\\r\\n     */\\r\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\r\\n        require(newOwner != address(0), \\\"Ownable: new owner is the zero address\\\");\\r\\n        _transferOwnership(newOwner);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\r\\n     * Internal function without access restriction.\\r\\n     */\\r\\n    function _transferOwnership(address newOwner) internal virtual {\\r\\n        address oldOwner = _owner;\\r\\n        _owner = newOwner;\\r\\n        emit OwnershipTransferred(oldOwner, newOwner);\\r\\n    }\\r\\n}\",\"keccak256\":\"0x64bd2dd78a11d236cdf538dd598cd16a0fa973dc8b5e4aefc21c1eee213ab7e8\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC1155/IERC1155.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC1155/IERC1155.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Required interface of an ERC1155 compliant contract, as defined in the\\r\\n * https://eips.ethereum.org/EIPS/eip-1155[EIP].\\r\\n *\\r\\n * _Available since v3.1._\\r\\n */\\r\\ninterface IERC1155 is IERC165 {\\r\\n    /**\\r\\n     * @dev Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.\\r\\n     */\\r\\n    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);\\r\\n\\r\\n    /**\\r\\n     * @dev Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all\\r\\n     * transfers.\\r\\n     */\\r\\n    event TransferBatch(\\r\\n        address indexed operator,\\r\\n        address indexed from,\\r\\n        address indexed to,\\r\\n        uint256[] ids,\\r\\n        uint256[] values\\r\\n    );\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to\\r\\n     * `approved`.\\r\\n     */\\r\\n    event ApprovalForAll(address indexed account, address indexed operator, bool approved);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.\\r\\n     *\\r\\n     * If an {URI} event was emitted for `id`, the standard\\r\\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value\\r\\n     * returned by {IERC1155MetadataURI-uri}.\\r\\n     */\\r\\n    event URI(string value, uint256 indexed id);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens of token type `id` owned by `account`.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `account` cannot be the zero address.\\r\\n     */\\r\\n    function balanceOf(address account, uint256 id) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `accounts` and `ids` must have the same length.\\r\\n     */\\r\\n    function balanceOfBatch(\\r\\n        address[] calldata accounts,\\r\\n        uint256[] calldata ids\\r\\n    ) external view returns (uint256[] memory);\\r\\n\\r\\n    /**\\r\\n     * @dev Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`,\\r\\n     *\\r\\n     * Emits an {ApprovalForAll} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `operator` cannot be the caller.\\r\\n     */\\r\\n    function setApprovalForAll(address operator, bool approved) external;\\r\\n\\r\\n    /**\\r\\n     * @dev Returns true if `operator` is approved to transfer ``account``'s tokens.\\r\\n     *\\r\\n     * See {setApprovalForAll}.\\r\\n     */\\r\\n    function isApprovedForAll(address account, address operator) external view returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.\\r\\n     *\\r\\n     * Emits a {TransferSingle} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `to` cannot be the zero address.\\r\\n     * - If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}.\\r\\n     * - `from` must have a balance of tokens of type `id` of at least `amount`.\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\\r\\n     * acceptance magic value.\\r\\n     */\\r\\n    function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;\\r\\n\\r\\n    /**\\r\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.\\r\\n     *\\r\\n     * Emits a {TransferBatch} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `ids` and `amounts` must have the same length.\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\\r\\n     * acceptance magic value.\\r\\n     */\\r\\n    function safeBatchTransferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256[] calldata ids,\\r\\n        uint256[] calldata amounts,\\r\\n        bytes calldata data\\r\\n    ) external;\\r\\n}\\r\\n\",\"keccak256\":\"0x27e077bddceb5d947903026c4354aea73eddf88fd149c365825591ddb226ab5e\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC1155/IERC1155Receiver.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev _Available since v3.1._\\r\\n */\\r\\ninterface IERC1155Receiver is IERC165 {\\r\\n    /**\\r\\n     * @dev Handles the receipt of a single ERC1155 token type. This function is\\r\\n     * called at the end of a `safeTransferFrom` after the balance has been updated.\\r\\n     *\\r\\n     * NOTE: To accept the transfer, this must return\\r\\n     * `bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))`\\r\\n     * (i.e. 0xf23a6e61, or its own function selector).\\r\\n     *\\r\\n     * @param operator The address which initiated the transfer (i.e. msg.sender)\\r\\n     * @param from The address which previously owned the token\\r\\n     * @param id The ID of the token being transferred\\r\\n     * @param value The amount of tokens being transferred\\r\\n     * @param data Additional data with no specified format\\r\\n     * @return `bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))` if transfer is allowed\\r\\n     */\\r\\n    function onERC1155Received(\\r\\n        address operator,\\r\\n        address from,\\r\\n        uint256 id,\\r\\n        uint256 value,\\r\\n        bytes calldata data\\r\\n    ) external returns (bytes4);\\r\\n\\r\\n    /**\\r\\n     * @dev Handles the receipt of a multiple ERC1155 token types. This function\\r\\n     * is called at the end of a `safeBatchTransferFrom` after the balances have\\r\\n     * been updated.\\r\\n     *\\r\\n     * NOTE: To accept the transfer(s), this must return\\r\\n     * `bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))`\\r\\n     * (i.e. 0xbc197c81, or its own function selector).\\r\\n     *\\r\\n     * @param operator The address which initiated the batch transfer (i.e. msg.sender)\\r\\n     * @param from The address which previously owned the token\\r\\n     * @param ids An array containing ids of each token being transferred (order and length must match values array)\\r\\n     * @param values An array containing amounts of each token being transferred (order and length must match ids array)\\r\\n     * @param data Additional data with no specified format\\r\\n     * @return `bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))` if transfer is allowed\\r\\n     */\\r\\n    function onERC1155BatchReceived(\\r\\n        address operator,\\r\\n        address from,\\r\\n        uint256[] calldata ids,\\r\\n        uint256[] calldata values,\\r\\n        bytes calldata data\\r\\n    ) external returns (bytes4);\\r\\n}\\r\\n\",\"keccak256\":\"0x93c3ecba425886b8933e548ed3adbfc56e40ff66f5c60532458fb06ba81598e5\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (token/ERC1155/extensions/IERC1155MetadataURI.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../IERC1155.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Interface of the optional ERC1155MetadataExtension interface, as defined\\r\\n * in the https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[EIP].\\r\\n *\\r\\n * _Available since v3.1._\\r\\n */\\r\\ninterface IERC1155MetadataURI is IERC1155 {\\r\\n    /**\\r\\n     * @dev Returns the URI for token type `id`.\\r\\n     *\\r\\n     * If the `\\\\{id\\\\}` substring is present in the URI, it must be replaced by\\r\\n     * clients with the actual token type ID.\\r\\n     */\\r\\n    function uri(uint256 id) external view returns (string memory);\\r\\n}\\r\\n\",\"keccak256\":\"0x2d6f48f294e6e798d26a8160091e39e173f955566f5ddce18ab15766356e4930\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.4) (utils/Context.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Provides information about the current execution context, including the\\r\\n * sender of the transaction and its data. While these are generally available\\r\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\r\\n * manner, since when dealing with meta-transactions the account sending and\\r\\n * paying for execution may not be the actual sender (as far as an application\\r\\n * is concerned).\\r\\n *\\r\\n * This contract is only required for intermediate, library-like contracts.\\r\\n */\\r\\nabstract contract Context {\\r\\n    function _msgSender() internal view virtual returns (address) {\\r\\n        return msg.sender;\\r\\n    }\\r\\n\\r\\n    function _msgData() internal view virtual returns (bytes calldata) {\\r\\n        return msg.data;\\r\\n    }\\r\\n\\r\\n    function _contextSuffixLength() internal view virtual returns (uint256) {\\r\\n        return 0;\\r\\n    }\\r\\n}\",\"keccak256\":\"0xef320168c89f0928606f4baf62131f67a759b0aed0ea445871758821a8c37b99\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/introspection/ERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"./IERC165.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Implementation of the {IERC165} interface.\\r\\n *\\r\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\r\\n * for the additional interface id that will be supported. For example:\\r\\n *\\r\\n * ```solidity\\r\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\r\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\r\\n * }\\r\\n * ```\\r\\n *\\r\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\r\\n */\\r\\nabstract contract ERC165 is IERC165 {\\r\\n    /**\\r\\n     * @dev See {IERC165-supportsInterface}.\\r\\n     */\\r\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\r\\n        return interfaceId == type(IERC165).interfaceId;\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x3d3fe7b1901114d50828f5c77ba7f09a2a6a65223620c837364d31b60e5982ac\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC165 standard, as defined in the\\r\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\r\\n *\\r\\n * Implementers can declare support of contract interfaces, which can then be\\r\\n * queried by others ({ERC165Checker}).\\r\\n *\\r\\n * For an implementation, see {ERC165}.\\r\\n */\\r\\ninterface IERC165 {\\r\\n    /**\\r\\n     * @dev Returns true if this contract implements the interface defined by\\r\\n     * `interfaceId`. See the corresponding\\r\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\r\\n     * to learn more about how these ids are created.\\r\\n     *\\r\\n     * This function call must use less than 30 000 gas.\\r\\n     */\\r\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\r\\n}\\r\\n\",\"keccak256\":\"0x540685d7ece3faa56f38253270ff11b18e63949fb8659c408123b1874674492e\",\"license\":\"MIT\"},\"project/contracts/utils.sol\":{\"content\":\"// SPDX-License-Identifier:MIT\\r\\n\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\ncontract utils {\\r\\n    function uintToString(uint256 value) internal pure returns (string memory) {\\r\\n        if (value == 0) {\\r\\n            return \\\"0\\\";\\r\\n        }\\r\\n\\r\\n        uint256 temp = value;\\r\\n        uint256 digits;\\r\\n\\r\\n        // \\u8ba1\\u7b97\\u9700\\u8981\\u591a\\u5c11\\u4f4d\\r\\n        while (temp != 0) {\\r\\n            digits++;\\r\\n            temp /= 10;\\r\\n        }\\r\\n\\r\\n        bytes memory buffer = new bytes(digits);\\r\\n        uint256 writeIndex = digits;\\r\\n\\r\\n        // \\u4ece\\u4f4e\\u4f4d\\u586b\\u5165\\u5b57\\u7b26\\r\\n        temp = value;\\r\\n        while (temp != 0) {\\r\\n            writeIndex--;\\r\\n            buffer[writeIndex] = bytes1(uint8(48 + (temp % 10))); // '0' \\u7684 ascii \\u662f 48\\r\\n            temp /= 10;\\r\\n        }\\r\\n        return string(buffer);\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0xcc8be5ed79f7a541ed76a6482c8d3dd8750e30910ee1ebd5dfee8f260e6f3a9b\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 458,
        "contract": "project/contracts/extensions/ERC1155/TCF_ERC1155URIStorage.sol:TCF_ERC1155URIStorage",
        "label": "_nextTokenId",
        "offset": 0,
        "slot": "0",
        "type": "t_array(t_uint256)6_storage"
      },
      {
        "astId": 464,
        "contract": "project/contracts/extensions/ERC1155/TCF_ERC1155URIStorage.sol:TCF_ERC1155URIStorage",
        "label": "_owners",
        "offset": 0,
        "slot": "6",
        "type": "t_mapping(t_uint256,t_mapping(t_uint256,t_address))"
      },
      {
        "astId": 470,
        "contract": "project/contracts/extensions/ERC1155/TCF_ERC1155URIStorage.sol:TCF_ERC1155URIStorage",
        "label": "_balances",
        "offset": 0,
        "slot": "7",
        "type": "t_mapping(t_uint256,t_mapping(t_address,t_uint256))"
      },
      {
        "astId": 476,
        "contract": "project/contracts/extensions/ERC1155/TCF_ERC1155URIStorage.sol:TCF_ERC1155URIStorage",
        "label": "_operatorApprovals",
        "offset": 0,
        "slot": "8",
        "type": "t_mapping(t_address,t_mapping(t_address,t_bool))"
      },
      {
        "astId": 3530,
        "contract": "project/contracts/extensions/ERC1155/TCF_ERC1155URIStorage.sol:TCF_ERC1155URIStorage",
        "label": "_owner",
        "offset": 0,
        "slot": "9",
        "type": "t_address"
      },
      {
        "astId": 1797,
        "contract": "project/contracts/extensions/ERC1155/TCF_ERC1155URIStorage.sol:TCF_ERC1155URIStorage",
        "label": "_baseURI",
        "offset": 0,
        "slot": "10",
        "type": "t_array(t_string_storage)6_storage"
      },
      {
        "astId": 1799,
        "contract": "project/contracts/extensions/ERC1155/TCF_ERC1155URIStorage.sol:TCF_ERC1155URIStorage",
        "label": "_initializedURIStorage",
        "offset": 0,
        "slot": "16",
        "type": "t_uint8"
      },
      {
        "astId": 1805,
        "contract": "project/contracts/extensions/ERC1155/TCF_ERC1155URIStorage.sol:TCF_ERC1155URIStorage",
        "label": "_tokenURIs",
        "offset": 0,
        "slot": "17",
        "type": "t_mapping(t_uint256,t_mapping(t_uint256,t_string_storage))"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_array(t_string_storage)6_storage": {
        "base": "t_string_storage",
        "encoding": "inplace",
        "label": "string[6]",
        "numberOfBytes": "192"
      },
      "t_array(t_uint256)6_storage": {
        "base": "t_uint256",
        "encoding": "inplace",
        "label": "uint256[6]",
        "numberOfBytes": "192"
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
      "t_mapping(t_uint256,t_mapping(t_address,t_uint256))": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => mapping(address => uint256))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_address,t_uint256)"
      },
      "t_mapping(t_uint256,t_mapping(t_uint256,t_address))": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => mapping(uint256 => address))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_uint256,t_address)"
      },
      "t_mapping(t_uint256,t_mapping(t_uint256,t_string_storage))": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => mapping(uint256 => string))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_uint256,t_string_storage)"
      },
      "t_mapping(t_uint256,t_string_storage)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => string)",
        "numberOfBytes": "32",
        "value": "t_string_storage"
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
      },
      "t_uint8": {
        "encoding": "inplace",
        "label": "uint8",
        "numberOfBytes": "1"
      }
    }
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
});