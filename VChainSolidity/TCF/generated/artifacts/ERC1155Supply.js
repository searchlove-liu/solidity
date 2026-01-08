export const Artifact_ERC1155Supply = /** @type {const} **/ ({
  "contractName": "ERC1155Supply",
  "sourceName": "contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155Supply.sol",
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
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "exists",
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
      "name": "totalSupply",
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
  "inputSourceName": "project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155Supply.sol",
  "devdoc": {
    "details": "Extension of ERC1155 that adds tracking of total supply per id. Useful for scenarios where Fungible and Non-fungible tokens have to be clearly identified. Note: While a totalSupply of 1 might mean the corresponding is an NFT, there is no guarantees that no other token with the same id are not going to be minted.",
    "kind": "dev",
    "methods": {
      "balanceOf(address,uint256)": {
        "details": "See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address."
      },
      "balanceOfBatch(address[],uint256[])": {
        "details": "See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length."
      },
      "exists(uint256)": {
        "details": "Indicates whether any token exist with a given id, or not."
      },
      "isApprovedForAll(address,address)": {
        "details": "See {IERC1155-isApprovedForAll}."
      },
      "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": {
        "details": "See {IERC1155-safeBatchTransferFrom}."
      },
      "safeTransferFrom(address,address,uint256,uint256,bytes)": {
        "details": "See {IERC1155-safeTransferFrom}."
      },
      "setApprovalForAll(address,bool)": {
        "details": "See {IERC1155-setApprovalForAll}."
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}."
      },
      "totalSupply(uint256)": {
        "details": "Total amount of tokens in with a given id."
      },
      "uri(uint256)": {
        "details": "See {IERC1155MetadataURI-uri}. This implementation returns the same URI for *all* token types. It relies on the token type ID substitution mechanism https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP]. Clients calling this function must replace the `\\{id\\}` substring with the actual token type ID."
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
      "exists(uint256)": "4f558e79",
      "isApprovedForAll(address,address)": "e985e9c5",
      "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": "2eb2c2d6",
      "safeTransferFrom(address,address,uint256,uint256,bytes)": "f242432a",
      "setApprovalForAll(address,bool)": "a22cb465",
      "supportsInterface(bytes4)": "01ffc9a7",
      "totalSupply(uint256)": "bd85b039",
      "uri(uint256)": "0e89341c"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"TransferBatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"URI\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"}],\"name\":\"balanceOfBatch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"exists\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeBatchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"uri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Extension of ERC1155 that adds tracking of total supply per id. Useful for scenarios where Fungible and Non-fungible tokens have to be clearly identified. Note: While a totalSupply of 1 might mean the corresponding is an NFT, there is no guarantees that no other token with the same id are not going to be minted.\",\"kind\":\"dev\",\"methods\":{\"balanceOf(address,uint256)\":{\"details\":\"See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.\"},\"balanceOfBatch(address[],uint256[])\":{\"details\":\"See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.\"},\"exists(uint256)\":{\"details\":\"Indicates whether any token exist with a given id, or not.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC1155-isApprovedForAll}.\"},\"safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)\":{\"details\":\"See {IERC1155-safeBatchTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,uint256,bytes)\":{\"details\":\"See {IERC1155-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC1155-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"totalSupply(uint256)\":{\"details\":\"Total amount of tokens in with a given id.\"},\"uri(uint256)\":{\"details\":\"See {IERC1155MetadataURI-uri}. This implementation returns the same URI for *all* token types. It relies on the token type ID substitution mechanism https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP]. Clients calling this function must replace the `\\\\{id\\\\}` substring with the actual token type ID.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155Supply.sol\":\"ERC1155Supply\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/proxy/utils/Initializable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.5.0) (proxy/utils/Initializable.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../../utils/Address.sol\\\";\\n\\n/**\\n * @dev This is a base contract to aid in writing upgradeable contracts, or any kind of contract that will be deployed\\n * behind a proxy. Since proxied contracts do not make use of a constructor, it's common to move constructor logic to an\\n * external initializer function, usually called `initialize`. It then becomes necessary to protect this initializer\\n * function so it can only be called once. The {initializer} modifier provided by this contract will have this effect.\\n *\\n * TIP: To avoid leaving the proxy in an uninitialized state, the initializer function should be called as early as\\n * possible by providing the encoded function call as the `_data` argument to {ERC1967Proxy-constructor}.\\n *\\n * CAUTION: When used with inheritance, manual care must be taken to not invoke a parent initializer twice, or to ensure\\n * that all initializers are idempotent. This is not verified automatically as constructors are by Solidity.\\n *\\n * [CAUTION]\\n * ====\\n * Avoid leaving a contract uninitialized.\\n *\\n * An uninitialized contract can be taken over by an attacker. This applies to both a proxy and its implementation\\n * contract, which may impact the proxy. To initialize the implementation contract, you can either invoke the\\n * initializer manually, or you can include a constructor to automatically mark it as initialized when it is deployed:\\n *\\n * [.hljs-theme-light.nopadding]\\n * ====\\n */\\nabstract contract Initializable {\\n    /**\\n     * @dev Indicates that the contract has been initialized.\\n     */\\n    bool private _initialized;\\n\\n    /**\\n     * @dev Indicates that the contract is in the process of being initialized.\\n     */\\n    bool private _initializing;\\n\\n    /**\\n     * @dev Modifier to protect an initializer function from being invoked twice.\\n     */\\n    modifier initializer() {\\n        // If the contract is initializing we ignore whether _initialized is set in order to support multiple\\n        // inheritance patterns, but we only do this in the context of a constructor, because in other contexts the\\n        // contract may have been reentered.\\n        require(_initializing ? _isConstructor() : !_initialized, \\\"Initializable: contract is already initialized\\\");\\n\\n        bool isTopLevelCall = !_initializing;\\n        if (isTopLevelCall) {\\n            _initializing = true;\\n            _initialized = true;\\n        }\\n\\n        _;\\n\\n        if (isTopLevelCall) {\\n            _initializing = false;\\n        }\\n    }\\n\\n    /**\\n     * @dev Modifier to protect an initialization function so that it can only be invoked by functions with the\\n     * {initializer} modifier, directly or indirectly.\\n     */\\n    modifier onlyInitializing() {\\n        require(_initializing, \\\"Initializable: contract is not initializing\\\");\\n        _;\\n    }\\n\\n    function _isConstructor() private view returns (bool) {\\n        // \\u5982\\u679c\\u662f\\u5408\\u7ea6\\u7684\\u8bdd\\u8fd4\\u56defalse\\n        return !Address.isContract(address(this));\\n    }\\n\\n}\",\"keccak256\":\"0x71a6fd2651bdb8bb73d9ef54a314b20289e37994011309a14e94ad1eada4a940\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC1155/ERC1155.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC1155/ERC1155.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IERC1155.sol\\\";\\nimport \\\"./IERC1155Receiver.sol\\\";\\nimport \\\"./extensions/IERC1155MetadataURI.sol\\\";\\nimport \\\"../../utils/Address.sol\\\";\\nimport \\\"../../utils/Context.sol\\\";\\nimport \\\"../../utils/introspection/ERC165.sol\\\";\\nimport \\\"./../../proxy/utils/Initializable.sol\\\";\\n\\n/**\\n * @dev Implementation of the basic standard multi-token.\\n * See https://eips.ethereum.org/EIPS/eip-1155\\n * Originally based on code by Enjin: https://github.com/enjin/erc-1155\\n *\\n * _Available since v3.1._\\n */\\n\\ncontract ERC1155 is\\n    Context,\\n    Initializable,\\n    ERC165,\\n    IERC1155,\\n    IERC1155MetadataURI\\n{\\n    using Address for address;\\n\\n    // Mapping from token ID to account balances\\n    mapping(uint256 => mapping(address => uint256)) private _balances;\\n\\n    // Mapping from account to operator approvals\\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\\n\\n    // Used as the URI for all token types by relying on ID substitution, e.g. https://token-cdn-domain/{id}.json\\n    string private _uri;\\n\\n    // /**\\n    //  * @dev See {_setURI}.\\n    //  */\\n    // constructor(string memory uri_) {\\n    //     _setURI(uri_);\\n    // }\\n\\n    /**\\n     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.\\n     */\\n    function __ERC1155_init(string memory uri_) internal onlyInitializing {\\n        __ERC721_init_unchained(uri_);\\n    }\\n\\n    // \\u6ce8\\u610f\\u4fee\\u9970\\u5668\\u4e3aonlyInitializing\\uff0c\\u610f\\u601d\\u662f\\uff0c\\u5982\\u679cB\\u5408\\u7ea6\\u88abA\\u5408\\u7ea6\\u7ee7\\u627f\\uff0cA\\u5408\\u7ea6\\u540c\\u6837\\u6709\\u521d\\u59cb\\u5316\\u51fd\\u6570\\uff0c\\n    // \\u5f53A\\u5408\\u7ea6\\u4f7f\\u7528initializer\\u4fee\\u9970\\u5668\\uff0c\\u4fee\\u9970\\u5668init\\u51fd\\u6570\\u3002\\u5e76\\u4e14\\u8c03\\u7528\\u8fd9\\u4e2ainit\\u51fd\\u6570\\u4e4b\\u540e\\uff0c_initializing\\u8bbe\\u4e3atrue.\\n    // \\u4f46B\\u5408\\u7ea6\\u4e5f\\u9700\\u8981\\u521d\\u59cb\\u5316\\uff0c\\u4f46\\u56e0\\u4e3aA\\u5408\\u7ea6\\u7684\\u521d\\u59cb\\u5316\\u51fd\\u6570\\u7684\\u4fee\\u9970\\u5668\\u4e3aonlyInitializing\\uff0c\\u6240\\u4ee5B\\u5408\\u7ea6\\u4e5f\\u53ef\\u4ee5\\u6b63\\u786e\\u88ab\\u521d\\u59cb\\u5316\\u6210\\u529f\\n    function __ERC721_init_unchained(\\n        string memory uri_\\n    ) internal onlyInitializing {\\n        _setURI(uri_);\\n    }\\n\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(\\n        bytes4 interfaceId\\n    ) public view virtual override(ERC165, IERC165) returns (bool) {\\n        return\\n            interfaceId == type(IERC1155).interfaceId ||\\n            interfaceId == type(IERC1155MetadataURI).interfaceId ||\\n            super.supportsInterface(interfaceId);\\n    }\\n\\n    /**\\n     * @dev See {IERC1155MetadataURI-uri}.\\n     *\\n     * This implementation returns the same URI for *all* token types. It relies\\n     * on the token type ID substitution mechanism\\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].\\n     *\\n     * Clients calling this function must replace the `\\\\{id\\\\}` substring with the\\n     * actual token type ID.\\n     */\\n    function uri(uint256) public view virtual override returns (string memory) {\\n        return _uri;\\n    }\\n\\n    /**\\n     * @dev See {IERC1155-balanceOf}.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     */\\n    function balanceOf(\\n        address account,\\n        uint256 id\\n    ) public view virtual override returns (uint256) {\\n        require(\\n            account != address(0),\\n            \\\"ERC1155: address zero is not a valid owner\\\"\\n        );\\n        return _balances[id][account];\\n    }\\n\\n    /**\\n     * @dev See {IERC1155-balanceOfBatch}.\\n     *\\n     * Requirements:\\n     *\\n     * - `accounts` and `ids` must have the same length.\\n     */\\n    function balanceOfBatch(\\n        address[] memory accounts,\\n        uint256[] memory ids\\n    ) public view virtual override returns (uint256[] memory) {\\n        require(\\n            accounts.length == ids.length,\\n            \\\"ERC1155: accounts and ids length mismatch\\\"\\n        );\\n\\n        uint256[] memory batchBalances = new uint256[](accounts.length);\\n\\n        for (uint256 i = 0; i < accounts.length; ++i) {\\n            batchBalances[i] = balanceOf(accounts[i], ids[i]);\\n        }\\n\\n        return batchBalances;\\n    }\\n\\n    /**\\n     * @dev See {IERC1155-setApprovalForAll}.\\n     */\\n    function setApprovalForAll(\\n        address operator,\\n        bool approved\\n    ) public virtual override {\\n        _setApprovalForAll(_msgSender(), operator, approved);\\n    }\\n\\n    /**\\n     * @dev See {IERC1155-isApprovedForAll}.\\n     */\\n    function isApprovedForAll(\\n        address account,\\n        address operator\\n    ) public view virtual override returns (bool) {\\n        return _operatorApprovals[account][operator];\\n    }\\n\\n    /**\\n     * @dev See {IERC1155-safeTransferFrom}.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 id,\\n        uint256 amount,\\n        bytes memory data\\n    ) public virtual override {\\n        require(\\n            from == _msgSender() || isApprovedForAll(from, _msgSender()),\\n            \\\"ERC1155: caller is not token owner or approved\\\"\\n        );\\n        _safeTransferFrom(from, to, id, amount, data);\\n    }\\n\\n    /**\\n     * @dev See {IERC1155-safeBatchTransferFrom}.\\n     */\\n    function safeBatchTransferFrom(\\n        address from,\\n        address to,\\n        uint256[] memory ids,\\n        uint256[] memory amounts,\\n        bytes memory data\\n    ) public virtual override {\\n        require(\\n            from == _msgSender() || isApprovedForAll(from, _msgSender()),\\n            \\\"ERC1155: caller is not token owner or approved\\\"\\n        );\\n        _safeBatchTransferFrom(from, to, ids, amounts, data);\\n    }\\n\\n    /**\\n     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.\\n     *\\n     * Emits a {TransferSingle} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `to` cannot be the zero address.\\n     * - `from` must have a balance of tokens of type `id` of at least `amount`.\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\\n     * acceptance magic value.\\n     */\\n    function _safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 id,\\n        uint256 amount,\\n        bytes memory data\\n    ) internal virtual {\\n        require(to != address(0), \\\"ERC1155: transfer to the zero address\\\");\\n\\n        address operator = _msgSender();\\n        uint256[] memory ids = _asSingletonArray(id);\\n        uint256[] memory amounts = _asSingletonArray(amount);\\n\\n        _beforeTokenTransfer(operator, from, to, ids, amounts, data);\\n\\n        uint256 fromBalance = _balances[id][from];\\n        require(\\n            fromBalance >= amount,\\n            \\\"ERC1155: insufficient balance for transfer\\\"\\n        );\\n        unchecked {\\n            _balances[id][from] = fromBalance - amount;\\n        }\\n        _balances[id][to] += amount;\\n\\n        emit TransferSingle(operator, from, to, id, amount);\\n\\n        _afterTokenTransfer(operator, from, to, ids, amounts, data);\\n\\n        _doSafeTransferAcceptanceCheck(operator, from, to, id, amount, data);\\n    }\\n\\n    /**\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_safeTransferFrom}.\\n     *\\n     * Emits a {TransferBatch} event.\\n     *\\n     * Requirements:\\n     *\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\\n     * acceptance magic value.\\n     */\\n    function _safeBatchTransferFrom(\\n        address from,\\n        address to,\\n        uint256[] memory ids,\\n        uint256[] memory amounts,\\n        bytes memory data\\n    ) internal virtual {\\n        require(\\n            ids.length == amounts.length,\\n            \\\"ERC1155: ids and amounts length mismatch\\\"\\n        );\\n        require(to != address(0), \\\"ERC1155: transfer to the zero address\\\");\\n\\n        address operator = _msgSender();\\n\\n        _beforeTokenTransfer(operator, from, to, ids, amounts, data);\\n\\n        for (uint256 i = 0; i < ids.length; ++i) {\\n            uint256 id = ids[i];\\n            uint256 amount = amounts[i];\\n\\n            uint256 fromBalance = _balances[id][from];\\n            require(\\n                fromBalance >= amount,\\n                \\\"ERC1155: insufficient balance for transfer\\\"\\n            );\\n            unchecked {\\n                _balances[id][from] = fromBalance - amount;\\n            }\\n            _balances[id][to] += amount;\\n        }\\n\\n        emit TransferBatch(operator, from, to, ids, amounts);\\n\\n        _afterTokenTransfer(operator, from, to, ids, amounts, data);\\n\\n        _doSafeBatchTransferAcceptanceCheck(\\n            operator,\\n            from,\\n            to,\\n            ids,\\n            amounts,\\n            data\\n        );\\n    }\\n\\n    /**\\n     * @dev Sets a new URI for all token types, by relying on the token type ID\\n     * substitution mechanism\\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].\\n     *\\n     * By this mechanism, any occurrence of the `\\\\{id\\\\}` substring in either the\\n     * URI or any of the amounts in the JSON file at said URI will be replaced by\\n     * clients with the token type ID.\\n     *\\n     * For example, the `https://token-cdn-domain/\\\\{id\\\\}.json` URI would be\\n     * interpreted by clients as\\n     * `https://token-cdn-domain/000000000000000000000000000000000000000000000000000000000004cce0.json`\\n     * for token type ID 0x4cce0.\\n     *\\n     * See {uri}.\\n     *\\n     * Because these URIs cannot be meaningfully represented by the {URI} event,\\n     * this function emits no events.\\n     */\\n    function _setURI(string memory newuri) internal virtual {\\n        _uri = newuri;\\n    }\\n\\n    /**\\n     * @dev Creates `amount` tokens of token type `id`, and assigns them to `to`.\\n     *\\n     * Emits a {TransferSingle} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `to` cannot be the zero address.\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\\n     * acceptance magic value.\\n     */\\n    function _mint(\\n        address to,\\n        uint256 id,\\n        uint256 amount,\\n        bytes memory data\\n    ) internal virtual {\\n        require(to != address(0), \\\"ERC1155: mint to the zero address\\\");\\n\\n        address operator = _msgSender();\\n        uint256[] memory ids = _asSingletonArray(id);\\n        uint256[] memory amounts = _asSingletonArray(amount);\\n\\n        _beforeTokenTransfer(operator, address(0), to, ids, amounts, data);\\n\\n        _balances[id][to] += amount;\\n        emit TransferSingle(operator, address(0), to, id, amount);\\n\\n        _afterTokenTransfer(operator, address(0), to, ids, amounts, data);\\n\\n        _doSafeTransferAcceptanceCheck(\\n            operator,\\n            address(0),\\n            to,\\n            id,\\n            amount,\\n            data\\n        );\\n    }\\n\\n    /**\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_mint}.\\n     *\\n     * Emits a {TransferBatch} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `ids` and `amounts` must have the same length.\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\\n     * acceptance magic value.\\n     */\\n    function _mintBatch(\\n        address to,\\n        uint256[] memory ids,\\n        uint256[] memory amounts,\\n        bytes memory data\\n    ) internal virtual {\\n        require(to != address(0), \\\"ERC1155: mint to the zero address\\\");\\n        require(\\n            ids.length == amounts.length,\\n            \\\"ERC1155: ids and amounts length mismatch\\\"\\n        );\\n\\n        address operator = _msgSender();\\n\\n        _beforeTokenTransfer(operator, address(0), to, ids, amounts, data);\\n\\n        for (uint256 i = 0; i < ids.length; i++) {\\n            _balances[ids[i]][to] += amounts[i];\\n        }\\n\\n        emit TransferBatch(operator, address(0), to, ids, amounts);\\n\\n        _afterTokenTransfer(operator, address(0), to, ids, amounts, data);\\n\\n        _doSafeBatchTransferAcceptanceCheck(\\n            operator,\\n            address(0),\\n            to,\\n            ids,\\n            amounts,\\n            data\\n        );\\n    }\\n\\n    /**\\n     * @dev Destroys `amount` tokens of token type `id` from `from`\\n     *\\n     * Emits a {TransferSingle} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `from` must have at least `amount` tokens of token type `id`.\\n     */\\n    function _burn(address from, uint256 id, uint256 amount) internal virtual {\\n        require(from != address(0), \\\"ERC1155: burn from the zero address\\\");\\n\\n        address operator = _msgSender();\\n        uint256[] memory ids = _asSingletonArray(id);\\n        uint256[] memory amounts = _asSingletonArray(amount);\\n\\n        _beforeTokenTransfer(operator, from, address(0), ids, amounts, \\\"\\\");\\n\\n        uint256 fromBalance = _balances[id][from];\\n        require(fromBalance >= amount, \\\"ERC1155: burn amount exceeds balance\\\");\\n        unchecked {\\n            _balances[id][from] = fromBalance - amount;\\n        }\\n\\n        emit TransferSingle(operator, from, address(0), id, amount);\\n\\n        _afterTokenTransfer(operator, from, address(0), ids, amounts, \\\"\\\");\\n    }\\n\\n    /**\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_burn}.\\n     *\\n     * Emits a {TransferBatch} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `ids` and `amounts` must have the same length.\\n     */\\n    function _burnBatch(\\n        address from,\\n        uint256[] memory ids,\\n        uint256[] memory amounts\\n    ) internal virtual {\\n        require(from != address(0), \\\"ERC1155: burn from the zero address\\\");\\n        require(\\n            ids.length == amounts.length,\\n            \\\"ERC1155: ids and amounts length mismatch\\\"\\n        );\\n\\n        address operator = _msgSender();\\n\\n        _beforeTokenTransfer(operator, from, address(0), ids, amounts, \\\"\\\");\\n\\n        for (uint256 i = 0; i < ids.length; i++) {\\n            uint256 id = ids[i];\\n            uint256 amount = amounts[i];\\n\\n            uint256 fromBalance = _balances[id][from];\\n            require(\\n                fromBalance >= amount,\\n                \\\"ERC1155: burn amount exceeds balance\\\"\\n            );\\n            unchecked {\\n                _balances[id][from] = fromBalance - amount;\\n            }\\n        }\\n\\n        emit TransferBatch(operator, from, address(0), ids, amounts);\\n\\n        _afterTokenTransfer(operator, from, address(0), ids, amounts, \\\"\\\");\\n    }\\n\\n    /**\\n     * @dev Approve `operator` to operate on all of `owner` tokens\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     */\\n    function _setApprovalForAll(\\n        address owner,\\n        address operator,\\n        bool approved\\n    ) internal virtual {\\n        require(owner != operator, \\\"ERC1155: setting approval status for self\\\");\\n        _operatorApprovals[owner][operator] = approved;\\n        emit ApprovalForAll(owner, operator, approved);\\n    }\\n\\n    /**\\n     * @dev Hook that is called before any token transfer. This includes minting\\n     * and burning, as well as batched variants.\\n     *\\n     * The same hook is called on both single and batched variants. For single\\n     * transfers, the length of the `ids` and `amounts` arrays will be 1.\\n     *\\n     * Calling conditions (for each `id` and `amount` pair):\\n     *\\n     * - When `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\n     * of token type `id` will be  transferred to `to`.\\n     * - When `from` is zero, `amount` tokens of token type `id` will be minted\\n     * for `to`.\\n     * - when `to` is zero, `amount` of ``from``'s tokens of token type `id`\\n     * will be burned.\\n     * - `from` and `to` are never both zero.\\n     * - `ids` and `amounts` have the same, non-zero length.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _beforeTokenTransfer(\\n        address operator,\\n        address from,\\n        address to,\\n        uint256[] memory ids,\\n        uint256[] memory amounts,\\n        bytes memory data\\n    ) internal virtual {}\\n\\n    /**\\n     * @dev Hook that is called after any token transfer. This includes minting\\n     * and burning, as well as batched variants.\\n     *\\n     * The same hook is called on both single and batched variants. For single\\n     * transfers, the length of the `id` and `amount` arrays will be 1.\\n     *\\n     * Calling conditions (for each `id` and `amount` pair):\\n     *\\n     * - When `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\n     * of token type `id` will be  transferred to `to`.\\n     * - When `from` is zero, `amount` tokens of token type `id` will be minted\\n     * for `to`.\\n     * - when `to` is zero, `amount` of ``from``'s tokens of token type `id`\\n     * will be burned.\\n     * - `from` and `to` are never both zero.\\n     * - `ids` and `amounts` have the same, non-zero length.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _afterTokenTransfer(\\n        address operator,\\n        address from,\\n        address to,\\n        uint256[] memory ids,\\n        uint256[] memory amounts,\\n        bytes memory data\\n    ) internal virtual {}\\n\\n    function _doSafeTransferAcceptanceCheck(\\n        address operator,\\n        address from,\\n        address to,\\n        uint256 id,\\n        uint256 amount,\\n        bytes memory data\\n    ) private {\\n        if (to.isContract()) {\\n            try\\n                IERC1155Receiver(to).onERC1155Received(\\n                    operator,\\n                    from,\\n                    id,\\n                    amount,\\n                    data\\n                )\\n            returns (bytes4 response) {\\n                if (response != IERC1155Receiver.onERC1155Received.selector) {\\n                    revert(\\\"ERC1155: ERC1155Receiver rejected tokens\\\");\\n                }\\n            } catch Error(string memory reason) {\\n                revert(reason);\\n            } catch {\\n                revert(\\\"ERC1155: transfer to non-ERC1155Receiver implementer\\\");\\n            }\\n        }\\n    }\\n\\n    function _doSafeBatchTransferAcceptanceCheck(\\n        address operator,\\n        address from,\\n        address to,\\n        uint256[] memory ids,\\n        uint256[] memory amounts,\\n        bytes memory data\\n    ) private {\\n        if (to.isContract()) {\\n            try\\n                IERC1155Receiver(to).onERC1155BatchReceived(\\n                    operator,\\n                    from,\\n                    ids,\\n                    amounts,\\n                    data\\n                )\\n            returns (bytes4 response) {\\n                if (\\n                    response != IERC1155Receiver.onERC1155BatchReceived.selector\\n                ) {\\n                    revert(\\\"ERC1155: ERC1155Receiver rejected tokens\\\");\\n                }\\n            } catch Error(string memory reason) {\\n                revert(reason);\\n            } catch {\\n                revert(\\\"ERC1155: transfer to non-ERC1155Receiver implementer\\\");\\n            }\\n        }\\n    }\\n\\n    function _asSingletonArray(\\n        uint256 element\\n    ) private pure returns (uint256[] memory) {\\n        uint256[] memory array = new uint256[](1);\\n        array[0] = element;\\n\\n        return array;\\n    }\\n}\\n\",\"keccak256\":\"0x6925b4933093e2de4c3af0ee19e68410aaa171f5ee06d396237dbd9be0b7dd00\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC1155/IERC1155.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC1155/IERC1155.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\n\\n/**\\n * @dev Required interface of an ERC1155 compliant contract, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-1155[EIP].\\n *\\n * _Available since v3.1._\\n */\\ninterface IERC1155 is IERC165 {\\n    /**\\n     * @dev Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.\\n     */\\n    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);\\n\\n    /**\\n     * @dev Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all\\n     * transfers.\\n     */\\n    event TransferBatch(\\n        address indexed operator,\\n        address indexed from,\\n        address indexed to,\\n        uint256[] ids,\\n        uint256[] values\\n    );\\n\\n    /**\\n     * @dev Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to\\n     * `approved`.\\n     */\\n    event ApprovalForAll(address indexed account, address indexed operator, bool approved);\\n\\n    /**\\n     * @dev Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.\\n     *\\n     * If an {URI} event was emitted for `id`, the standard\\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value\\n     * returned by {IERC1155MetadataURI-uri}.\\n     */\\n    event URI(string value, uint256 indexed id);\\n\\n    /**\\n     * @dev Returns the amount of tokens of token type `id` owned by `account`.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     */\\n    function balanceOf(address account, uint256 id) external view returns (uint256);\\n\\n    /**\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.\\n     *\\n     * Requirements:\\n     *\\n     * - `accounts` and `ids` must have the same length.\\n     */\\n    function balanceOfBatch(\\n        address[] calldata accounts,\\n        uint256[] calldata ids\\n    ) external view returns (uint256[] memory);\\n\\n    /**\\n     * @dev Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`,\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `operator` cannot be the caller.\\n     */\\n    function setApprovalForAll(address operator, bool approved) external;\\n\\n    /**\\n     * @dev Returns true if `operator` is approved to transfer ``account``'s tokens.\\n     *\\n     * See {setApprovalForAll}.\\n     */\\n    function isApprovedForAll(address account, address operator) external view returns (bool);\\n\\n    /**\\n     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.\\n     *\\n     * Emits a {TransferSingle} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `to` cannot be the zero address.\\n     * - If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}.\\n     * - `from` must have a balance of tokens of type `id` of at least `amount`.\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\\n     * acceptance magic value.\\n     */\\n    function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;\\n\\n    /**\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.\\n     *\\n     * Emits a {TransferBatch} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `ids` and `amounts` must have the same length.\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\\n     * acceptance magic value.\\n     */\\n    function safeBatchTransferFrom(\\n        address from,\\n        address to,\\n        uint256[] calldata ids,\\n        uint256[] calldata amounts,\\n        bytes calldata data\\n    ) external;\\n}\\n\",\"keccak256\":\"0xcab667ddad478ff0d39c2053ca77fac778af8483c18ab07d810277b4216fd582\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC1155/IERC1155Receiver.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\n\\n/**\\n * @dev _Available since v3.1._\\n */\\ninterface IERC1155Receiver is IERC165 {\\n    /**\\n     * @dev Handles the receipt of a single ERC1155 token type. This function is\\n     * called at the end of a `safeTransferFrom` after the balance has been updated.\\n     *\\n     * NOTE: To accept the transfer, this must return\\n     * `bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))`\\n     * (i.e. 0xf23a6e61, or its own function selector).\\n     *\\n     * @param operator The address which initiated the transfer (i.e. msg.sender)\\n     * @param from The address which previously owned the token\\n     * @param id The ID of the token being transferred\\n     * @param value The amount of tokens being transferred\\n     * @param data Additional data with no specified format\\n     * @return `bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))` if transfer is allowed\\n     */\\n    function onERC1155Received(\\n        address operator,\\n        address from,\\n        uint256 id,\\n        uint256 value,\\n        bytes calldata data\\n    ) external returns (bytes4);\\n\\n    /**\\n     * @dev Handles the receipt of a multiple ERC1155 token types. This function\\n     * is called at the end of a `safeBatchTransferFrom` after the balances have\\n     * been updated.\\n     *\\n     * NOTE: To accept the transfer(s), this must return\\n     * `bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))`\\n     * (i.e. 0xbc197c81, or its own function selector).\\n     *\\n     * @param operator The address which initiated the batch transfer (i.e. msg.sender)\\n     * @param from The address which previously owned the token\\n     * @param ids An array containing ids of each token being transferred (order and length must match values array)\\n     * @param values An array containing amounts of each token being transferred (order and length must match ids array)\\n     * @param data Additional data with no specified format\\n     * @return `bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))` if transfer is allowed\\n     */\\n    function onERC1155BatchReceived(\\n        address operator,\\n        address from,\\n        uint256[] calldata ids,\\n        uint256[] calldata values,\\n        bytes calldata data\\n    ) external returns (bytes4);\\n}\\n\",\"keccak256\":\"0xeb373f1fdc7b755c6a750123a9b9e3a8a02c1470042fd6505d875000a80bde0b\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155Supply.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC1155/extensions/ERC1155Supply.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../ERC1155.sol\\\";\\n\\n/**\\n * @dev Extension of ERC1155 that adds tracking of total supply per id.\\n *\\n * Useful for scenarios where Fungible and Non-fungible tokens have to be\\n * clearly identified. Note: While a totalSupply of 1 might mean the\\n * corresponding is an NFT, there is no guarantees that no other token with the\\n * same id are not going to be minted.\\n */\\nabstract contract ERC1155Supply is ERC1155 {\\n    mapping(uint256 => uint256) private _totalSupply;\\n\\n    /**\\n     * @dev Total amount of tokens in with a given id.\\n     */\\n    function totalSupply(uint256 id) public view virtual returns (uint256) {\\n        return _totalSupply[id];\\n    }\\n\\n    /**\\n     * @dev Indicates whether any token exist with a given id, or not.\\n     */\\n    function exists(uint256 id) public view virtual returns (bool) {\\n        return ERC1155Supply.totalSupply(id) > 0;\\n    }\\n\\n    /**\\n     * @dev See {ERC1155-_beforeTokenTransfer}.\\n     */\\n    function _beforeTokenTransfer(\\n        address operator,\\n        address from,\\n        address to,\\n        uint256[] memory ids,\\n        uint256[] memory amounts,\\n        bytes memory data\\n    ) internal virtual override {\\n        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);\\n\\n        if (from == address(0)) {\\n            for (uint256 i = 0; i < ids.length; ++i) {\\n                _totalSupply[ids[i]] += amounts[i];\\n            }\\n        }\\n\\n        if (to == address(0)) {\\n            for (uint256 i = 0; i < ids.length; ++i) {\\n                uint256 id = ids[i];\\n                uint256 amount = amounts[i];\\n                uint256 supply = _totalSupply[id];\\n                require(\\n                    supply >= amount,\\n                    \\\"ERC1155: burn amount exceeds totalSupply\\\"\\n                );\\n                unchecked {\\n                    _totalSupply[id] = supply - amount;\\n                }\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x34bfbc9bccce79a82181b8bf42ea795e55505180907f81efe7071a64387dd54e\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC1155/extensions/IERC1155MetadataURI.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../IERC1155.sol\\\";\\n\\n/**\\n * @dev Interface of the optional ERC1155MetadataExtension interface, as defined\\n * in the https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[EIP].\\n *\\n * _Available since v3.1._\\n */\\ninterface IERC1155MetadataURI is IERC1155 {\\n    /**\\n     * @dev Returns the URI for token type `id`.\\n     *\\n     * If the `\\\\{id\\\\}` substring is present in the URI, it must be replaced by\\n     * clients with the actual token type ID.\\n     */\\n    function uri(uint256 id) external view returns (string memory);\\n}\\n\",\"keccak256\":\"0xa66d18b9a85458d28fc3304717964502ae36f7f8a2ff35bc83f6f85d74b03574\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/Address.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.5.0) (utils/Address.sol)\\n\\npragma solidity ^0.8.1;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     * ====\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * You shouldn't rely on `isContract` to protect against flash loan attacks!\\n     *\\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\\n     * constructor.\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize/address.code.length, which returns 0\\n        // for contracts in construction, since the code is only stored at the end\\n        // of the constructor execution.\\n\\n        return account.code.length > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\\"Address: insufficient balance\\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\\"\\\");\\n        require(success, \\\"Address: unable to send value, recipient may have reverted\\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCall(target, data, \\\"Address: low-level call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\\"Address: low-level call with value failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\\"Address: insufficient balance for call\\\");\\n        require(isContract(target), \\\"Address: call to non-contract\\\");\\n\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\\"Address: low-level static call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        require(isContract(target), \\\"Address: static call to non-contract\\\");\\n\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\\"Address: low-level delegate call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(isContract(target), \\\"Address: delegate call to non-contract\\\");\\n\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn't, either by bubbling the\\n     * revert reason using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            // Look for revert reason and bubble it up if present\\n            if (returndata.length > 0) {\\n                // The easiest way to bubble the revert reason is using memory via assembly\\n\\n                assembly {\\n                    let returndata_size := mload(returndata)\\n                    revert(add(32, returndata), returndata_size)\\n                }\\n            } else {\\n                revert(errorMessage);\\n            }\\n        }\\n    }\\n}\",\"keccak256\":\"0x4f73eedf878079f3c11b05bb9db39c789ae782c0c1a15a8a31ad36aa7047a32f\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.4) (utils/Context.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n\\n    function _contextSuffixLength() internal view virtual returns (uint256) {\\n        return 0;\\n    }\\n}\",\"keccak256\":\"0x8aa05408d20fbf4fff8dea1d82463167f3711b0a0506cc1ed40bacf05466f3b4\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/introspection/ERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IERC165.sol\\\";\\n\\n/**\\n * @dev Implementation of the {IERC165} interface.\\n *\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\n * for the additional interface id that will be supported. For example:\\n *\\n * ```solidity\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\n * }\\n * ```\\n *\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\n */\\nabstract contract ERC165 is IERC165 {\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IERC165).interfaceId;\\n    }\\n}\\n\",\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 782,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155Supply.sol:ERC1155Supply",
        "label": "_initialized",
        "offset": 0,
        "slot": "0",
        "type": "t_bool"
      },
      {
        "astId": 785,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155Supply.sol:ERC1155Supply",
        "label": "_initializing",
        "offset": 1,
        "slot": "0",
        "type": "t_bool"
      },
      {
        "astId": 986,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155Supply.sol:ERC1155Supply",
        "label": "_balances",
        "offset": 0,
        "slot": "1",
        "type": "t_mapping(t_uint256,t_mapping(t_address,t_uint256))"
      },
      {
        "astId": 992,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155Supply.sol:ERC1155Supply",
        "label": "_operatorApprovals",
        "offset": 0,
        "slot": "2",
        "type": "t_mapping(t_address,t_mapping(t_address,t_bool))"
      },
      {
        "astId": 994,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155Supply.sol:ERC1155Supply",
        "label": "_uri",
        "offset": 0,
        "slot": "3",
        "type": "t_string_storage"
      },
      {
        "astId": 2487,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155Supply.sol:ERC1155Supply",
        "label": "_totalSupply",
        "offset": 0,
        "slot": "4",
        "type": "t_mapping(t_uint256,t_uint256)"
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
      "t_mapping(t_uint256,t_mapping(t_address,t_uint256))": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => mapping(address => uint256))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_address,t_uint256)"
      },
      "t_mapping(t_uint256,t_uint256)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
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