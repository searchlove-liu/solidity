export const Artifact_ERC1155URIStorage = /** @type {const} **/ ({
  "contractName": "ERC1155URIStorage",
  "sourceName": "contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol",
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
          "name": "tokenId",
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
  "inputSourceName": "project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol",
  "devdoc": {
    "details": "ERC1155 token with storage based token URI management. Inspired by the ERC721URIStorage extension _Available since v4.6._",
    "kind": "dev",
    "methods": {
      "balanceOf(address,uint256)": {
        "details": "See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address."
      },
      "balanceOfBatch(address[],uint256[])": {
        "details": "See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length."
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
      "uri(uint256)": {
        "details": "See {IERC1155MetadataURI-uri}. This implementation returns the concatenation of the `_baseURI` and the token-specific uri if the latter is set This enables the following behaviors: - if `_tokenURIs[tokenId]` is set, then the result is the concatenation   of `_baseURI` and `_tokenURIs[tokenId]` (keep in mind that `_baseURI`   is empty per default); - if `_tokenURIs[tokenId]` is NOT set then we fallback to `super.uri()`   which in most cases will contain `ERC1155._uri`; - if `_tokenURIs[tokenId]` is NOT set, and if the parents do not have a   uri value set, then the result is empty."
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
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"TransferBatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"URI\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"}],\"name\":\"balanceOfBatch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeBatchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"uri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"ERC1155 token with storage based token URI management. Inspired by the ERC721URIStorage extension _Available since v4.6._\",\"kind\":\"dev\",\"methods\":{\"balanceOf(address,uint256)\":{\"details\":\"See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.\"},\"balanceOfBatch(address[],uint256[])\":{\"details\":\"See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC1155-isApprovedForAll}.\"},\"safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)\":{\"details\":\"See {IERC1155-safeBatchTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,uint256,bytes)\":{\"details\":\"See {IERC1155-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC1155-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"uri(uint256)\":{\"details\":\"See {IERC1155MetadataURI-uri}. This implementation returns the concatenation of the `_baseURI` and the token-specific uri if the latter is set This enables the following behaviors: - if `_tokenURIs[tokenId]` is set, then the result is the concatenation   of `_baseURI` and `_tokenURIs[tokenId]` (keep in mind that `_baseURI`   is empty per default); - if `_tokenURIs[tokenId]` is NOT set then we fallback to `super.uri()`   which in most cases will contain `ERC1155._uri`; - if `_tokenURIs[tokenId]` is NOT set, and if the parents do not have a   uri value set, then the result is empty.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol\":\"ERC1155URIStorage\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@4.9.6/\"]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/proxy/utils/Initializable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.5.0) (proxy/utils/Initializable.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../../utils/Address.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev This is a base contract to aid in writing upgradeable contracts, or any kind of contract that will be deployed\\r\\n * behind a proxy. Since proxied contracts do not make use of a constructor, it's common to move constructor logic to an\\r\\n * external initializer function, usually called `initialize`. It then becomes necessary to protect this initializer\\r\\n * function so it can only be called once. The {initializer} modifier provided by this contract will have this effect.\\r\\n *\\r\\n * TIP: To avoid leaving the proxy in an uninitialized state, the initializer function should be called as early as\\r\\n * possible by providing the encoded function call as the `_data` argument to {ERC1967Proxy-constructor}.\\r\\n *\\r\\n * CAUTION: When used with inheritance, manual care must be taken to not invoke a parent initializer twice, or to ensure\\r\\n * that all initializers are idempotent. This is not verified automatically as constructors are by Solidity.\\r\\n *\\r\\n * [CAUTION]\\r\\n * ====\\r\\n * Avoid leaving a contract uninitialized.\\r\\n *\\r\\n * An uninitialized contract can be taken over by an attacker. This applies to both a proxy and its implementation\\r\\n * contract, which may impact the proxy. To initialize the implementation contract, you can either invoke the\\r\\n * initializer manually, or you can include a constructor to automatically mark it as initialized when it is deployed:\\r\\n *\\r\\n * [.hljs-theme-light.nopadding]\\r\\n * ====\\r\\n */\\r\\nabstract contract Initializable {\\r\\n    /**\\r\\n     * @dev Indicates that the contract has been initialized.\\r\\n     */\\r\\n    bool private _initialized;\\r\\n\\r\\n    /**\\r\\n     * @dev Indicates that the contract is in the process of being initialized.\\r\\n     */\\r\\n    bool private _initializing;\\r\\n\\r\\n    /**\\r\\n     * @dev Modifier to protect an initializer function from being invoked twice.\\r\\n     */\\r\\n    modifier initializer() {\\r\\n        // If the contract is initializing we ignore whether _initialized is set in order to support multiple\\r\\n        // inheritance patterns, but we only do this in the context of a constructor, because in other contexts the\\r\\n        // contract may have been reentered.\\r\\n        require(_initializing ? _isConstructor() : !_initialized, \\\"Initializable: contract is already initialized\\\");\\r\\n\\r\\n        bool isTopLevelCall = !_initializing;\\r\\n        if (isTopLevelCall) {\\r\\n            _initializing = true;\\r\\n            _initialized = true;\\r\\n        }\\r\\n\\r\\n        _;\\r\\n\\r\\n        if (isTopLevelCall) {\\r\\n            _initializing = false;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Modifier to protect an initialization function so that it can only be invoked by functions with the\\r\\n     * {initializer} modifier, directly or indirectly.\\r\\n     */\\r\\n    modifier onlyInitializing() {\\r\\n        require(_initializing, \\\"Initializable: contract is not initializing\\\");\\r\\n        _;\\r\\n    }\\r\\n\\r\\n    function _isConstructor() private view returns (bool) {\\r\\n        // \\u5982\\u679c\\u662f\\u5408\\u7ea6\\u7684\\u8bdd\\u8fd4\\u56defalse\\r\\n        return !Address.isContract(address(this));\\r\\n    }\\r\\n\\r\\n}\",\"keccak256\":\"0x7c31bc73fd4bd908c826fa10fad7182eea1aaa0e9820dd27460321a33eab4a73\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC1155/ERC1155.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC1155/ERC1155.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"./IERC1155.sol\\\";\\r\\nimport \\\"./IERC1155Receiver.sol\\\";\\r\\nimport \\\"./extensions/IERC1155MetadataURI.sol\\\";\\r\\nimport \\\"../../utils/Address.sol\\\";\\r\\nimport \\\"../../utils/Context.sol\\\";\\r\\nimport \\\"../../utils/introspection/ERC165.sol\\\";\\r\\nimport \\\"./../../proxy/utils/Initializable.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Implementation of the basic standard multi-token.\\r\\n * See https://eips.ethereum.org/EIPS/eip-1155\\r\\n * Originally based on code by Enjin: https://github.com/enjin/erc-1155\\r\\n *\\r\\n * _Available since v3.1._\\r\\n */\\r\\n\\r\\ncontract ERC1155 is\\r\\n    Context,\\r\\n    Initializable,\\r\\n    ERC165,\\r\\n    IERC1155,\\r\\n    IERC1155MetadataURI\\r\\n{\\r\\n    using Address for address;\\r\\n\\r\\n    // Mapping from token ID to account balances\\r\\n    mapping(uint256 => mapping(address => uint256)) private _balances;\\r\\n\\r\\n    // Mapping from account to operator approvals\\r\\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\\r\\n\\r\\n    // Used as the URI for all token types by relying on ID substitution, e.g. https://token-cdn-domain/{id}.json\\r\\n    string private _uri;\\r\\n\\r\\n    // /**\\r\\n    //  * @dev See {_setURI}.\\r\\n    //  */\\r\\n    // constructor(string memory uri_) {\\r\\n    //     _setURI(uri_);\\r\\n    // }\\r\\n\\r\\n    /**\\r\\n     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.\\r\\n     */\\r\\n    function __ERC1155_init(string memory uri_) internal onlyInitializing {\\r\\n        __ERC721_init_unchained(uri_);\\r\\n    }\\r\\n\\r\\n    // \\u6ce8\\u610f\\u4fee\\u9970\\u5668\\u4e3aonlyInitializing\\uff0c\\u610f\\u601d\\u662f\\uff0c\\u5982\\u679cB\\u5408\\u7ea6\\u88abA\\u5408\\u7ea6\\u7ee7\\u627f\\uff0cA\\u5408\\u7ea6\\u540c\\u6837\\u6709\\u521d\\u59cb\\u5316\\u51fd\\u6570\\uff0c\\r\\n    // \\u5f53A\\u5408\\u7ea6\\u4f7f\\u7528initializer\\u4fee\\u9970\\u5668\\uff0c\\u4fee\\u9970\\u5668init\\u51fd\\u6570\\u3002\\u5e76\\u4e14\\u8c03\\u7528\\u8fd9\\u4e2ainit\\u51fd\\u6570\\u4e4b\\u540e\\uff0c_initializing\\u8bbe\\u4e3atrue.\\r\\n    // \\u4f46B\\u5408\\u7ea6\\u4e5f\\u9700\\u8981\\u521d\\u59cb\\u5316\\uff0c\\u4f46\\u56e0\\u4e3aA\\u5408\\u7ea6\\u7684\\u521d\\u59cb\\u5316\\u51fd\\u6570\\u7684\\u4fee\\u9970\\u5668\\u4e3aonlyInitializing\\uff0c\\u6240\\u4ee5B\\u5408\\u7ea6\\u4e5f\\u53ef\\u4ee5\\u6b63\\u786e\\u88ab\\u521d\\u59cb\\u5316\\u6210\\u529f\\r\\n    function __ERC721_init_unchained(\\r\\n        string memory uri_\\r\\n    ) internal onlyInitializing {\\r\\n        _setURI(uri_);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC165-supportsInterface}.\\r\\n     */\\r\\n    function supportsInterface(\\r\\n        bytes4 interfaceId\\r\\n    ) public view virtual override(ERC165, IERC165) returns (bool) {\\r\\n        return\\r\\n            interfaceId == type(IERC1155).interfaceId ||\\r\\n            interfaceId == type(IERC1155MetadataURI).interfaceId ||\\r\\n            super.supportsInterface(interfaceId);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC1155MetadataURI-uri}.\\r\\n     *\\r\\n     * This implementation returns the same URI for *all* token types. It relies\\r\\n     * on the token type ID substitution mechanism\\r\\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].\\r\\n     *\\r\\n     * Clients calling this function must replace the `\\\\{id\\\\}` substring with the\\r\\n     * actual token type ID.\\r\\n     */\\r\\n    function uri(uint256) public view virtual override returns (string memory) {\\r\\n        return _uri;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC1155-balanceOf}.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `account` cannot be the zero address.\\r\\n     */\\r\\n    function balanceOf(\\r\\n        address account,\\r\\n        uint256 id\\r\\n    ) public view virtual override returns (uint256) {\\r\\n        require(\\r\\n            account != address(0),\\r\\n            \\\"ERC1155: address zero is not a valid owner\\\"\\r\\n        );\\r\\n        return _balances[id][account];\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC1155-balanceOfBatch}.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `accounts` and `ids` must have the same length.\\r\\n     */\\r\\n    function balanceOfBatch(\\r\\n        address[] memory accounts,\\r\\n        uint256[] memory ids\\r\\n    ) public view virtual override returns (uint256[] memory) {\\r\\n        require(\\r\\n            accounts.length == ids.length,\\r\\n            \\\"ERC1155: accounts and ids length mismatch\\\"\\r\\n        );\\r\\n\\r\\n        uint256[] memory batchBalances = new uint256[](accounts.length);\\r\\n\\r\\n        for (uint256 i = 0; i < accounts.length; ++i) {\\r\\n            batchBalances[i] = balanceOf(accounts[i], ids[i]);\\r\\n        }\\r\\n\\r\\n        return batchBalances;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC1155-setApprovalForAll}.\\r\\n     */\\r\\n    function setApprovalForAll(\\r\\n        address operator,\\r\\n        bool approved\\r\\n    ) public virtual override {\\r\\n        _setApprovalForAll(_msgSender(), operator, approved);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC1155-isApprovedForAll}.\\r\\n     */\\r\\n    function isApprovedForAll(\\r\\n        address account,\\r\\n        address operator\\r\\n    ) public view virtual override returns (bool) {\\r\\n        return _operatorApprovals[account][operator];\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC1155-safeTransferFrom}.\\r\\n     */\\r\\n    function safeTransferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 id,\\r\\n        uint256 amount,\\r\\n        bytes memory data\\r\\n    ) public virtual override {\\r\\n        require(\\r\\n            from == _msgSender() || isApprovedForAll(from, _msgSender()),\\r\\n            \\\"ERC1155: caller is not token owner or approved\\\"\\r\\n        );\\r\\n        _safeTransferFrom(from, to, id, amount, data);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC1155-safeBatchTransferFrom}.\\r\\n     */\\r\\n    function safeBatchTransferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256[] memory ids,\\r\\n        uint256[] memory amounts,\\r\\n        bytes memory data\\r\\n    ) public virtual override {\\r\\n        require(\\r\\n            from == _msgSender() || isApprovedForAll(from, _msgSender()),\\r\\n            \\\"ERC1155: caller is not token owner or approved\\\"\\r\\n        );\\r\\n        _safeBatchTransferFrom(from, to, ids, amounts, data);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.\\r\\n     *\\r\\n     * Emits a {TransferSingle} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `to` cannot be the zero address.\\r\\n     * - `from` must have a balance of tokens of type `id` of at least `amount`.\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\\r\\n     * acceptance magic value.\\r\\n     */\\r\\n    function _safeTransferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 id,\\r\\n        uint256 amount,\\r\\n        bytes memory data\\r\\n    ) internal virtual {\\r\\n        require(to != address(0), \\\"ERC1155: transfer to the zero address\\\");\\r\\n\\r\\n        address operator = _msgSender();\\r\\n        uint256[] memory ids = _asSingletonArray(id);\\r\\n        uint256[] memory amounts = _asSingletonArray(amount);\\r\\n\\r\\n        _beforeTokenTransfer(operator, from, to, ids, amounts, data);\\r\\n\\r\\n        uint256 fromBalance = _balances[id][from];\\r\\n        require(\\r\\n            fromBalance >= amount,\\r\\n            \\\"ERC1155: insufficient balance for transfer\\\"\\r\\n        );\\r\\n        unchecked {\\r\\n            _balances[id][from] = fromBalance - amount;\\r\\n        }\\r\\n        _balances[id][to] += amount;\\r\\n\\r\\n        emit TransferSingle(operator, from, to, id, amount);\\r\\n\\r\\n        _afterTokenTransfer(operator, from, to, ids, amounts, data);\\r\\n\\r\\n        _doSafeTransferAcceptanceCheck(operator, from, to, id, amount, data);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_safeTransferFrom}.\\r\\n     *\\r\\n     * Emits a {TransferBatch} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\\r\\n     * acceptance magic value.\\r\\n     */\\r\\n    function _safeBatchTransferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256[] memory ids,\\r\\n        uint256[] memory amounts,\\r\\n        bytes memory data\\r\\n    ) internal virtual {\\r\\n        require(\\r\\n            ids.length == amounts.length,\\r\\n            \\\"ERC1155: ids and amounts length mismatch\\\"\\r\\n        );\\r\\n        require(to != address(0), \\\"ERC1155: transfer to the zero address\\\");\\r\\n\\r\\n        address operator = _msgSender();\\r\\n\\r\\n        _beforeTokenTransfer(operator, from, to, ids, amounts, data);\\r\\n\\r\\n        for (uint256 i = 0; i < ids.length; ++i) {\\r\\n            uint256 id = ids[i];\\r\\n            uint256 amount = amounts[i];\\r\\n\\r\\n            uint256 fromBalance = _balances[id][from];\\r\\n            require(\\r\\n                fromBalance >= amount,\\r\\n                \\\"ERC1155: insufficient balance for transfer\\\"\\r\\n            );\\r\\n            unchecked {\\r\\n                _balances[id][from] = fromBalance - amount;\\r\\n            }\\r\\n            _balances[id][to] += amount;\\r\\n        }\\r\\n\\r\\n        emit TransferBatch(operator, from, to, ids, amounts);\\r\\n\\r\\n        _afterTokenTransfer(operator, from, to, ids, amounts, data);\\r\\n\\r\\n        _doSafeBatchTransferAcceptanceCheck(\\r\\n            operator,\\r\\n            from,\\r\\n            to,\\r\\n            ids,\\r\\n            amounts,\\r\\n            data\\r\\n        );\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Sets a new URI for all token types, by relying on the token type ID\\r\\n     * substitution mechanism\\r\\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].\\r\\n     *\\r\\n     * By this mechanism, any occurrence of the `\\\\{id\\\\}` substring in either the\\r\\n     * URI or any of the amounts in the JSON file at said URI will be replaced by\\r\\n     * clients with the token type ID.\\r\\n     *\\r\\n     * For example, the `https://token-cdn-domain/\\\\{id\\\\}.json` URI would be\\r\\n     * interpreted by clients as\\r\\n     * `https://token-cdn-domain/000000000000000000000000000000000000000000000000000000000004cce0.json`\\r\\n     * for token type ID 0x4cce0.\\r\\n     *\\r\\n     * See {uri}.\\r\\n     *\\r\\n     * Because these URIs cannot be meaningfully represented by the {URI} event,\\r\\n     * this function emits no events.\\r\\n     */\\r\\n    function _setURI(string memory newuri) internal virtual {\\r\\n        _uri = newuri;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Creates `amount` tokens of token type `id`, and assigns them to `to`.\\r\\n     *\\r\\n     * Emits a {TransferSingle} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `to` cannot be the zero address.\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\\r\\n     * acceptance magic value.\\r\\n     */\\r\\n    function _mint(\\r\\n        address to,\\r\\n        uint256 id,\\r\\n        uint256 amount,\\r\\n        bytes memory data\\r\\n    ) internal virtual {\\r\\n        require(to != address(0), \\\"ERC1155: mint to the zero address\\\");\\r\\n\\r\\n        address operator = _msgSender();\\r\\n        uint256[] memory ids = _asSingletonArray(id);\\r\\n        uint256[] memory amounts = _asSingletonArray(amount);\\r\\n\\r\\n        _beforeTokenTransfer(operator, address(0), to, ids, amounts, data);\\r\\n\\r\\n        _balances[id][to] += amount;\\r\\n        emit TransferSingle(operator, address(0), to, id, amount);\\r\\n\\r\\n        _afterTokenTransfer(operator, address(0), to, ids, amounts, data);\\r\\n\\r\\n        _doSafeTransferAcceptanceCheck(\\r\\n            operator,\\r\\n            address(0),\\r\\n            to,\\r\\n            id,\\r\\n            amount,\\r\\n            data\\r\\n        );\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_mint}.\\r\\n     *\\r\\n     * Emits a {TransferBatch} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `ids` and `amounts` must have the same length.\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\\r\\n     * acceptance magic value.\\r\\n     */\\r\\n    function _mintBatch(\\r\\n        address to,\\r\\n        uint256[] memory ids,\\r\\n        uint256[] memory amounts,\\r\\n        bytes memory data\\r\\n    ) internal virtual {\\r\\n        require(to != address(0), \\\"ERC1155: mint to the zero address\\\");\\r\\n        require(\\r\\n            ids.length == amounts.length,\\r\\n            \\\"ERC1155: ids and amounts length mismatch\\\"\\r\\n        );\\r\\n\\r\\n        address operator = _msgSender();\\r\\n\\r\\n        _beforeTokenTransfer(operator, address(0), to, ids, amounts, data);\\r\\n\\r\\n        for (uint256 i = 0; i < ids.length; i++) {\\r\\n            _balances[ids[i]][to] += amounts[i];\\r\\n        }\\r\\n\\r\\n        emit TransferBatch(operator, address(0), to, ids, amounts);\\r\\n\\r\\n        _afterTokenTransfer(operator, address(0), to, ids, amounts, data);\\r\\n\\r\\n        _doSafeBatchTransferAcceptanceCheck(\\r\\n            operator,\\r\\n            address(0),\\r\\n            to,\\r\\n            ids,\\r\\n            amounts,\\r\\n            data\\r\\n        );\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Destroys `amount` tokens of token type `id` from `from`\\r\\n     *\\r\\n     * Emits a {TransferSingle} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `from` cannot be the zero address.\\r\\n     * - `from` must have at least `amount` tokens of token type `id`.\\r\\n     */\\r\\n    function _burn(address from, uint256 id, uint256 amount) internal virtual {\\r\\n        require(from != address(0), \\\"ERC1155: burn from the zero address\\\");\\r\\n\\r\\n        address operator = _msgSender();\\r\\n        uint256[] memory ids = _asSingletonArray(id);\\r\\n        uint256[] memory amounts = _asSingletonArray(amount);\\r\\n\\r\\n        _beforeTokenTransfer(operator, from, address(0), ids, amounts, \\\"\\\");\\r\\n\\r\\n        uint256 fromBalance = _balances[id][from];\\r\\n        require(fromBalance >= amount, \\\"ERC1155: burn amount exceeds balance\\\");\\r\\n        unchecked {\\r\\n            _balances[id][from] = fromBalance - amount;\\r\\n        }\\r\\n\\r\\n        emit TransferSingle(operator, from, address(0), id, amount);\\r\\n\\r\\n        _afterTokenTransfer(operator, from, address(0), ids, amounts, \\\"\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_burn}.\\r\\n     *\\r\\n     * Emits a {TransferBatch} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `ids` and `amounts` must have the same length.\\r\\n     */\\r\\n    function _burnBatch(\\r\\n        address from,\\r\\n        uint256[] memory ids,\\r\\n        uint256[] memory amounts\\r\\n    ) internal virtual {\\r\\n        require(from != address(0), \\\"ERC1155: burn from the zero address\\\");\\r\\n        require(\\r\\n            ids.length == amounts.length,\\r\\n            \\\"ERC1155: ids and amounts length mismatch\\\"\\r\\n        );\\r\\n\\r\\n        address operator = _msgSender();\\r\\n\\r\\n        _beforeTokenTransfer(operator, from, address(0), ids, amounts, \\\"\\\");\\r\\n\\r\\n        for (uint256 i = 0; i < ids.length; i++) {\\r\\n            uint256 id = ids[i];\\r\\n            uint256 amount = amounts[i];\\r\\n\\r\\n            uint256 fromBalance = _balances[id][from];\\r\\n            require(\\r\\n                fromBalance >= amount,\\r\\n                \\\"ERC1155: burn amount exceeds balance\\\"\\r\\n            );\\r\\n            unchecked {\\r\\n                _balances[id][from] = fromBalance - amount;\\r\\n            }\\r\\n        }\\r\\n\\r\\n        emit TransferBatch(operator, from, address(0), ids, amounts);\\r\\n\\r\\n        _afterTokenTransfer(operator, from, address(0), ids, amounts, \\\"\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Approve `operator` to operate on all of `owner` tokens\\r\\n     *\\r\\n     * Emits an {ApprovalForAll} event.\\r\\n     */\\r\\n    function _setApprovalForAll(\\r\\n        address owner,\\r\\n        address operator,\\r\\n        bool approved\\r\\n    ) internal virtual {\\r\\n        require(owner != operator, \\\"ERC1155: setting approval status for self\\\");\\r\\n        _operatorApprovals[owner][operator] = approved;\\r\\n        emit ApprovalForAll(owner, operator, approved);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Hook that is called before any token transfer. This includes minting\\r\\n     * and burning, as well as batched variants.\\r\\n     *\\r\\n     * The same hook is called on both single and batched variants. For single\\r\\n     * transfers, the length of the `ids` and `amounts` arrays will be 1.\\r\\n     *\\r\\n     * Calling conditions (for each `id` and `amount` pair):\\r\\n     *\\r\\n     * - When `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\r\\n     * of token type `id` will be  transferred to `to`.\\r\\n     * - When `from` is zero, `amount` tokens of token type `id` will be minted\\r\\n     * for `to`.\\r\\n     * - when `to` is zero, `amount` of ``from``'s tokens of token type `id`\\r\\n     * will be burned.\\r\\n     * - `from` and `to` are never both zero.\\r\\n     * - `ids` and `amounts` have the same, non-zero length.\\r\\n     *\\r\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\r\\n     */\\r\\n    function _beforeTokenTransfer(\\r\\n        address operator,\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256[] memory ids,\\r\\n        uint256[] memory amounts,\\r\\n        bytes memory data\\r\\n    ) internal virtual {}\\r\\n\\r\\n    /**\\r\\n     * @dev Hook that is called after any token transfer. This includes minting\\r\\n     * and burning, as well as batched variants.\\r\\n     *\\r\\n     * The same hook is called on both single and batched variants. For single\\r\\n     * transfers, the length of the `id` and `amount` arrays will be 1.\\r\\n     *\\r\\n     * Calling conditions (for each `id` and `amount` pair):\\r\\n     *\\r\\n     * - When `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\r\\n     * of token type `id` will be  transferred to `to`.\\r\\n     * - When `from` is zero, `amount` tokens of token type `id` will be minted\\r\\n     * for `to`.\\r\\n     * - when `to` is zero, `amount` of ``from``'s tokens of token type `id`\\r\\n     * will be burned.\\r\\n     * - `from` and `to` are never both zero.\\r\\n     * - `ids` and `amounts` have the same, non-zero length.\\r\\n     *\\r\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\r\\n     */\\r\\n    function _afterTokenTransfer(\\r\\n        address operator,\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256[] memory ids,\\r\\n        uint256[] memory amounts,\\r\\n        bytes memory data\\r\\n    ) internal virtual {}\\r\\n\\r\\n    function _doSafeTransferAcceptanceCheck(\\r\\n        address operator,\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 id,\\r\\n        uint256 amount,\\r\\n        bytes memory data\\r\\n    ) private {\\r\\n        if (to.isContract()) {\\r\\n            try\\r\\n                IERC1155Receiver(to).onERC1155Received(\\r\\n                    operator,\\r\\n                    from,\\r\\n                    id,\\r\\n                    amount,\\r\\n                    data\\r\\n                )\\r\\n            returns (bytes4 response) {\\r\\n                if (response != IERC1155Receiver.onERC1155Received.selector) {\\r\\n                    revert(\\\"ERC1155: ERC1155Receiver rejected tokens\\\");\\r\\n                }\\r\\n            } catch Error(string memory reason) {\\r\\n                revert(reason);\\r\\n            } catch {\\r\\n                revert(\\\"ERC1155: transfer to non-ERC1155Receiver implementer\\\");\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function _doSafeBatchTransferAcceptanceCheck(\\r\\n        address operator,\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256[] memory ids,\\r\\n        uint256[] memory amounts,\\r\\n        bytes memory data\\r\\n    ) private {\\r\\n        if (to.isContract()) {\\r\\n            try\\r\\n                IERC1155Receiver(to).onERC1155BatchReceived(\\r\\n                    operator,\\r\\n                    from,\\r\\n                    ids,\\r\\n                    amounts,\\r\\n                    data\\r\\n                )\\r\\n            returns (bytes4 response) {\\r\\n                if (\\r\\n                    response != IERC1155Receiver.onERC1155BatchReceived.selector\\r\\n                ) {\\r\\n                    revert(\\\"ERC1155: ERC1155Receiver rejected tokens\\\");\\r\\n                }\\r\\n            } catch Error(string memory reason) {\\r\\n                revert(reason);\\r\\n            } catch {\\r\\n                revert(\\\"ERC1155: transfer to non-ERC1155Receiver implementer\\\");\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function _asSingletonArray(\\r\\n        uint256 element\\r\\n    ) private pure returns (uint256[] memory) {\\r\\n        uint256[] memory array = new uint256[](1);\\r\\n        array[0] = element;\\r\\n\\r\\n        return array;\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0xaf8a5f89c4025550c26a5d6fae2d478f65bb78ca293166e100b795320eac1f99\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC1155/IERC1155.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC1155/IERC1155.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Required interface of an ERC1155 compliant contract, as defined in the\\r\\n * https://eips.ethereum.org/EIPS/eip-1155[EIP].\\r\\n *\\r\\n * _Available since v3.1._\\r\\n */\\r\\ninterface IERC1155 is IERC165 {\\r\\n    /**\\r\\n     * @dev Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.\\r\\n     */\\r\\n    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);\\r\\n\\r\\n    /**\\r\\n     * @dev Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all\\r\\n     * transfers.\\r\\n     */\\r\\n    event TransferBatch(\\r\\n        address indexed operator,\\r\\n        address indexed from,\\r\\n        address indexed to,\\r\\n        uint256[] ids,\\r\\n        uint256[] values\\r\\n    );\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to\\r\\n     * `approved`.\\r\\n     */\\r\\n    event ApprovalForAll(address indexed account, address indexed operator, bool approved);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.\\r\\n     *\\r\\n     * If an {URI} event was emitted for `id`, the standard\\r\\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value\\r\\n     * returned by {IERC1155MetadataURI-uri}.\\r\\n     */\\r\\n    event URI(string value, uint256 indexed id);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens of token type `id` owned by `account`.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `account` cannot be the zero address.\\r\\n     */\\r\\n    function balanceOf(address account, uint256 id) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `accounts` and `ids` must have the same length.\\r\\n     */\\r\\n    function balanceOfBatch(\\r\\n        address[] calldata accounts,\\r\\n        uint256[] calldata ids\\r\\n    ) external view returns (uint256[] memory);\\r\\n\\r\\n    /**\\r\\n     * @dev Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`,\\r\\n     *\\r\\n     * Emits an {ApprovalForAll} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `operator` cannot be the caller.\\r\\n     */\\r\\n    function setApprovalForAll(address operator, bool approved) external;\\r\\n\\r\\n    /**\\r\\n     * @dev Returns true if `operator` is approved to transfer ``account``'s tokens.\\r\\n     *\\r\\n     * See {setApprovalForAll}.\\r\\n     */\\r\\n    function isApprovedForAll(address account, address operator) external view returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.\\r\\n     *\\r\\n     * Emits a {TransferSingle} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `to` cannot be the zero address.\\r\\n     * - If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}.\\r\\n     * - `from` must have a balance of tokens of type `id` of at least `amount`.\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\\r\\n     * acceptance magic value.\\r\\n     */\\r\\n    function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;\\r\\n\\r\\n    /**\\r\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.\\r\\n     *\\r\\n     * Emits a {TransferBatch} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `ids` and `amounts` must have the same length.\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\\r\\n     * acceptance magic value.\\r\\n     */\\r\\n    function safeBatchTransferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256[] calldata ids,\\r\\n        uint256[] calldata amounts,\\r\\n        bytes calldata data\\r\\n    ) external;\\r\\n}\\r\\n\",\"keccak256\":\"0x27e077bddceb5d947903026c4354aea73eddf88fd149c365825591ddb226ab5e\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC1155/IERC1155Receiver.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev _Available since v3.1._\\r\\n */\\r\\ninterface IERC1155Receiver is IERC165 {\\r\\n    /**\\r\\n     * @dev Handles the receipt of a single ERC1155 token type. This function is\\r\\n     * called at the end of a `safeTransferFrom` after the balance has been updated.\\r\\n     *\\r\\n     * NOTE: To accept the transfer, this must return\\r\\n     * `bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))`\\r\\n     * (i.e. 0xf23a6e61, or its own function selector).\\r\\n     *\\r\\n     * @param operator The address which initiated the transfer (i.e. msg.sender)\\r\\n     * @param from The address which previously owned the token\\r\\n     * @param id The ID of the token being transferred\\r\\n     * @param value The amount of tokens being transferred\\r\\n     * @param data Additional data with no specified format\\r\\n     * @return `bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))` if transfer is allowed\\r\\n     */\\r\\n    function onERC1155Received(\\r\\n        address operator,\\r\\n        address from,\\r\\n        uint256 id,\\r\\n        uint256 value,\\r\\n        bytes calldata data\\r\\n    ) external returns (bytes4);\\r\\n\\r\\n    /**\\r\\n     * @dev Handles the receipt of a multiple ERC1155 token types. This function\\r\\n     * is called at the end of a `safeBatchTransferFrom` after the balances have\\r\\n     * been updated.\\r\\n     *\\r\\n     * NOTE: To accept the transfer(s), this must return\\r\\n     * `bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))`\\r\\n     * (i.e. 0xbc197c81, or its own function selector).\\r\\n     *\\r\\n     * @param operator The address which initiated the batch transfer (i.e. msg.sender)\\r\\n     * @param from The address which previously owned the token\\r\\n     * @param ids An array containing ids of each token being transferred (order and length must match values array)\\r\\n     * @param values An array containing amounts of each token being transferred (order and length must match ids array)\\r\\n     * @param data Additional data with no specified format\\r\\n     * @return `bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))` if transfer is allowed\\r\\n     */\\r\\n    function onERC1155BatchReceived(\\r\\n        address operator,\\r\\n        address from,\\r\\n        uint256[] calldata ids,\\r\\n        uint256[] calldata values,\\r\\n        bytes calldata data\\r\\n    ) external returns (bytes4);\\r\\n}\\r\\n\",\"keccak256\":\"0x93c3ecba425886b8933e548ed3adbfc56e40ff66f5c60532458fb06ba81598e5\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC1155/extensions/ERC1155URIStorage.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../../../utils/Strings.sol\\\";\\r\\nimport \\\"../ERC1155.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev ERC1155 token with storage based token URI management.\\r\\n * Inspired by the ERC721URIStorage extension\\r\\n *\\r\\n * _Available since v4.6._\\r\\n */\\r\\nabstract contract ERC1155URIStorage is ERC1155 {\\r\\n    using Strings for uint256;\\r\\n\\r\\n    // Optional base URI\\r\\n    string private _baseURI = \\\"\\\";\\r\\n\\r\\n    // Optional mapping for token URIs\\r\\n    mapping(uint256 => string) private _tokenURIs;\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC1155MetadataURI-uri}.\\r\\n     *\\r\\n     * This implementation returns the concatenation of the `_baseURI`\\r\\n     * and the token-specific uri if the latter is set\\r\\n     *\\r\\n     * This enables the following behaviors:\\r\\n     *\\r\\n     * - if `_tokenURIs[tokenId]` is set, then the result is the concatenation\\r\\n     *   of `_baseURI` and `_tokenURIs[tokenId]` (keep in mind that `_baseURI`\\r\\n     *   is empty per default);\\r\\n     *\\r\\n     * - if `_tokenURIs[tokenId]` is NOT set then we fallback to `super.uri()`\\r\\n     *   which in most cases will contain `ERC1155._uri`;\\r\\n     *\\r\\n     * - if `_tokenURIs[tokenId]` is NOT set, and if the parents do not have a\\r\\n     *   uri value set, then the result is empty.\\r\\n     */\\r\\n    function uri(\\r\\n        uint256 tokenId\\r\\n    ) public view virtual override returns (string memory) {\\r\\n        string memory tokenURI = _tokenURIs[tokenId];\\r\\n\\r\\n        // If token URI is set, concatenate base URI and tokenURI (via abi.encodePacked).\\r\\n        return\\r\\n            bytes(tokenURI).length > 0\\r\\n                ? string(abi.encodePacked(_baseURI, tokenURI))\\r\\n                : super.uri(tokenId);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Sets `tokenURI` as the tokenURI of `tokenId`.\\r\\n     */\\r\\n    function _setURI(uint256 tokenId, string memory tokenURI) internal virtual {\\r\\n        _tokenURIs[tokenId] = tokenURI;\\r\\n        emit URI(uri(tokenId), tokenId);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Sets `baseURI` as the `_baseURI` for all tokens\\r\\n     */\\r\\n    function _setBaseURI(string memory baseURI) internal virtual {\\r\\n        _baseURI = baseURI;\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x81e630c4e0d41ee82e00173ea511faae016c2389faaaae4ece7be3e078f4b827\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (token/ERC1155/extensions/IERC1155MetadataURI.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../IERC1155.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Interface of the optional ERC1155MetadataExtension interface, as defined\\r\\n * in the https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[EIP].\\r\\n *\\r\\n * _Available since v3.1._\\r\\n */\\r\\ninterface IERC1155MetadataURI is IERC1155 {\\r\\n    /**\\r\\n     * @dev Returns the URI for token type `id`.\\r\\n     *\\r\\n     * If the `\\\\{id\\\\}` substring is present in the URI, it must be replaced by\\r\\n     * clients with the actual token type ID.\\r\\n     */\\r\\n    function uri(uint256 id) external view returns (string memory);\\r\\n}\\r\\n\",\"keccak256\":\"0x2d6f48f294e6e798d26a8160091e39e173f955566f5ddce18ab15766356e4930\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/Address.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.5.0) (utils/Address.sol)\\r\\n\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\n/**\\r\\n * @dev Collection of functions related to the address type\\r\\n */\\r\\nlibrary Address {\\r\\n    /**\\r\\n     * @dev Returns true if `account` is a contract.\\r\\n     *\\r\\n     * [IMPORTANT]\\r\\n     * ====\\r\\n     * It is unsafe to assume that an address for which this function returns\\r\\n     * false is an externally-owned account (EOA) and not a contract.\\r\\n     *\\r\\n     * Among others, `isContract` will return false for the following\\r\\n     * types of addresses:\\r\\n     *\\r\\n     *  - an externally-owned account\\r\\n     *  - a contract in construction\\r\\n     *  - an address where a contract will be created\\r\\n     *  - an address where a contract lived, but was destroyed\\r\\n     * ====\\r\\n     *\\r\\n     * [IMPORTANT]\\r\\n     * ====\\r\\n     * You shouldn't rely on `isContract` to protect against flash loan attacks!\\r\\n     *\\r\\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\\r\\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\\r\\n     * constructor.\\r\\n     * ====\\r\\n     */\\r\\n    function isContract(address account) internal view returns (bool) {\\r\\n        // This method relies on extcodesize/address.code.length, which returns 0\\r\\n        // for contracts in construction, since the code is only stored at the end\\r\\n        // of the constructor execution.\\r\\n\\r\\n        return account.code.length > 0;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\r\\n     * `recipient`, forwarding all available gas and reverting on errors.\\r\\n     *\\r\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\r\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\r\\n     * imposed by `transfer`, making them unable to receive funds via\\r\\n     * `transfer`. {sendValue} removes this limitation.\\r\\n     *\\r\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\r\\n     *\\r\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\r\\n     * taken to not create reentrancy vulnerabilities. Consider using\\r\\n     * {ReentrancyGuard} or the\\r\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\r\\n     */\\r\\n    function sendValue(address payable recipient, uint256 amount) internal {\\r\\n        require(address(this).balance >= amount, \\\"Address: insufficient balance\\\");\\r\\n\\r\\n        (bool success, ) = recipient.call{value: amount}(\\\"\\\");\\r\\n        require(success, \\\"Address: unable to send value, recipient may have reverted\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Performs a Solidity function call using a low level `call`. A\\r\\n     * plain `call` is an unsafe replacement for a function call: use this\\r\\n     * function instead.\\r\\n     *\\r\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\r\\n     * function (like regular Solidity function calls).\\r\\n     *\\r\\n     * Returns the raw returned data. To convert to the expected return value,\\r\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `target` must be a contract.\\r\\n     * - calling `target` with `data` must not revert.\\r\\n     *\\r\\n     * _Available since v3.1._\\r\\n     */\\r\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\r\\n        return functionCall(target, data, \\\"Address: low-level call failed\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\r\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\r\\n     *\\r\\n     * _Available since v3.1._\\r\\n     */\\r\\n    function functionCall(\\r\\n        address target,\\r\\n        bytes memory data,\\r\\n        string memory errorMessage\\r\\n    ) internal returns (bytes memory) {\\r\\n        return functionCallWithValue(target, data, 0, errorMessage);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\r\\n     * but also transferring `value` wei to `target`.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - the calling contract must have an ETH balance of at least `value`.\\r\\n     * - the called Solidity function must be `payable`.\\r\\n     *\\r\\n     * _Available since v3.1._\\r\\n     */\\r\\n    function functionCallWithValue(\\r\\n        address target,\\r\\n        bytes memory data,\\r\\n        uint256 value\\r\\n    ) internal returns (bytes memory) {\\r\\n        return functionCallWithValue(target, data, value, \\\"Address: low-level call with value failed\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\r\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\r\\n     *\\r\\n     * _Available since v3.1._\\r\\n     */\\r\\n    function functionCallWithValue(\\r\\n        address target,\\r\\n        bytes memory data,\\r\\n        uint256 value,\\r\\n        string memory errorMessage\\r\\n    ) internal returns (bytes memory) {\\r\\n        require(address(this).balance >= value, \\\"Address: insufficient balance for call\\\");\\r\\n        require(isContract(target), \\\"Address: call to non-contract\\\");\\r\\n\\r\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\r\\n        return verifyCallResult(success, returndata, errorMessage);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\r\\n     * but performing a static call.\\r\\n     *\\r\\n     * _Available since v3.3._\\r\\n     */\\r\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\r\\n        return functionStaticCall(target, data, \\\"Address: low-level static call failed\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\r\\n     * but performing a static call.\\r\\n     *\\r\\n     * _Available since v3.3._\\r\\n     */\\r\\n    function functionStaticCall(\\r\\n        address target,\\r\\n        bytes memory data,\\r\\n        string memory errorMessage\\r\\n    ) internal view returns (bytes memory) {\\r\\n        require(isContract(target), \\\"Address: static call to non-contract\\\");\\r\\n\\r\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\r\\n        return verifyCallResult(success, returndata, errorMessage);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\r\\n     * but performing a delegate call.\\r\\n     *\\r\\n     * _Available since v3.4._\\r\\n     */\\r\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\r\\n        return functionDelegateCall(target, data, \\\"Address: low-level delegate call failed\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\r\\n     * but performing a delegate call.\\r\\n     *\\r\\n     * _Available since v3.4._\\r\\n     */\\r\\n    function functionDelegateCall(\\r\\n        address target,\\r\\n        bytes memory data,\\r\\n        string memory errorMessage\\r\\n    ) internal returns (bytes memory) {\\r\\n        require(isContract(target), \\\"Address: delegate call to non-contract\\\");\\r\\n\\r\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\r\\n        return verifyCallResult(success, returndata, errorMessage);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn't, either by bubbling the\\r\\n     * revert reason using the provided one.\\r\\n     *\\r\\n     * _Available since v4.3._\\r\\n     */\\r\\n    function verifyCallResult(\\r\\n        bool success,\\r\\n        bytes memory returndata,\\r\\n        string memory errorMessage\\r\\n    ) internal pure returns (bytes memory) {\\r\\n        if (success) {\\r\\n            return returndata;\\r\\n        } else {\\r\\n            // Look for revert reason and bubble it up if present\\r\\n            if (returndata.length > 0) {\\r\\n                // The easiest way to bubble the revert reason is using memory via assembly\\r\\n\\r\\n                assembly {\\r\\n                    let returndata_size := mload(returndata)\\r\\n                    revert(add(32, returndata), returndata_size)\\r\\n                }\\r\\n            } else {\\r\\n                revert(errorMessage);\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n}\",\"keccak256\":\"0x4f82ac554df2b88092b0dff60e01918ddb7b4d34935150ad5a82c03ce83ed225\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.4) (utils/Context.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Provides information about the current execution context, including the\\r\\n * sender of the transaction and its data. While these are generally available\\r\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\r\\n * manner, since when dealing with meta-transactions the account sending and\\r\\n * paying for execution may not be the actual sender (as far as an application\\r\\n * is concerned).\\r\\n *\\r\\n * This contract is only required for intermediate, library-like contracts.\\r\\n */\\r\\nabstract contract Context {\\r\\n    function _msgSender() internal view virtual returns (address) {\\r\\n        return msg.sender;\\r\\n    }\\r\\n\\r\\n    function _msgData() internal view virtual returns (bytes calldata) {\\r\\n        return msg.data;\\r\\n    }\\r\\n\\r\\n    function _contextSuffixLength() internal view virtual returns (uint256) {\\r\\n        return 0;\\r\\n    }\\r\\n}\",\"keccak256\":\"0xef320168c89f0928606f4baf62131f67a759b0aed0ea445871758821a8c37b99\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/Strings.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (utils/Strings.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"./math/Math.sol\\\";\\r\\nimport \\\"./math/SignedMath.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev String operations.\\r\\n */\\r\\nlibrary Strings {\\r\\n    bytes16 private constant _SYMBOLS = \\\"0123456789abcdef\\\";\\r\\n    uint8 private constant _ADDRESS_LENGTH = 20;\\r\\n\\r\\n    /**\\r\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\r\\n     */\\r\\n    function toString(uint256 value) internal pure returns (string memory) {\\r\\n        unchecked {\\r\\n            uint256 length = Math.log10(value) + 1;\\r\\n            string memory buffer = new string(length);\\r\\n            uint256 ptr;\\r\\n            /// @solidity memory-safe-assembly\\r\\n            assembly {\\r\\n                ptr := add(buffer, add(32, length))\\r\\n            }\\r\\n            while (true) {\\r\\n                ptr--;\\r\\n                /// @solidity memory-safe-assembly\\r\\n                assembly {\\r\\n                    mstore8(ptr, byte(mod(value, 10), _SYMBOLS))\\r\\n                }\\r\\n                value /= 10;\\r\\n                if (value == 0) break;\\r\\n            }\\r\\n            return buffer;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Converts a `int256` to its ASCII `string` decimal representation.\\r\\n     */\\r\\n    function toString(int256 value) internal pure returns (string memory) {\\r\\n        return\\r\\n            string(\\r\\n                abi.encodePacked(\\r\\n                    value < 0 ? \\\"-\\\" : \\\"\\\",\\r\\n                    toString(SignedMath.abs(value))\\r\\n                )\\r\\n            );\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\r\\n     */\\r\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\r\\n        unchecked {\\r\\n            return toHexString(value, Math.log256(value) + 1);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\r\\n     */\\r\\n    function toHexString(\\r\\n        uint256 value,\\r\\n        uint256 length\\r\\n    ) internal pure returns (string memory) {\\r\\n        bytes memory buffer = new bytes(2 * length + 2);\\r\\n        buffer[0] = \\\"0\\\";\\r\\n        buffer[1] = \\\"x\\\";\\r\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\r\\n            buffer[i] = _SYMBOLS[value & 0xf];\\r\\n            value >>= 4;\\r\\n        }\\r\\n        require(value == 0, \\\"Strings: hex length insufficient\\\");\\r\\n        return string(buffer);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Converts an `address` with fixed length of 20 bytes to its not checksummed ASCII `string` hexadecimal representation.\\r\\n     */\\r\\n    function toHexString(address addr) internal pure returns (string memory) {\\r\\n        return toHexString(uint256(uint160(addr)), _ADDRESS_LENGTH);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns true if the two strings are equal.\\r\\n     */\\r\\n    function equal(\\r\\n        string memory a,\\r\\n        string memory b\\r\\n    ) internal pure returns (bool) {\\r\\n        return keccak256(bytes(a)) == keccak256(bytes(b));\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x33dabc28124774d38cd3cbf24437182310079c0370c281e47b0f5321ed6a01a0\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/introspection/ERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"./IERC165.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Implementation of the {IERC165} interface.\\r\\n *\\r\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\r\\n * for the additional interface id that will be supported. For example:\\r\\n *\\r\\n * ```solidity\\r\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\r\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\r\\n * }\\r\\n * ```\\r\\n *\\r\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\r\\n */\\r\\nabstract contract ERC165 is IERC165 {\\r\\n    /**\\r\\n     * @dev See {IERC165-supportsInterface}.\\r\\n     */\\r\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\r\\n        return interfaceId == type(IERC165).interfaceId;\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x3d3fe7b1901114d50828f5c77ba7f09a2a6a65223620c837364d31b60e5982ac\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC165 standard, as defined in the\\r\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\r\\n *\\r\\n * Implementers can declare support of contract interfaces, which can then be\\r\\n * queried by others ({ERC165Checker}).\\r\\n *\\r\\n * For an implementation, see {ERC165}.\\r\\n */\\r\\ninterface IERC165 {\\r\\n    /**\\r\\n     * @dev Returns true if this contract implements the interface defined by\\r\\n     * `interfaceId`. See the corresponding\\r\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\r\\n     * to learn more about how these ids are created.\\r\\n     *\\r\\n     * This function call must use less than 30 000 gas.\\r\\n     */\\r\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\r\\n}\\r\\n\",\"keccak256\":\"0x540685d7ece3faa56f38253270ff11b18e63949fb8659c408123b1874674492e\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/math/Math.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (utils/math/Math.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Standard math utilities missing in the Solidity language.\\r\\n */\\r\\nlibrary Math {\\r\\n    enum Rounding {\\r\\n        Down, // Toward negative infinity\\r\\n        Up, // Toward infinity\\r\\n        Zero // Toward zero\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the largest of two numbers.\\r\\n     */\\r\\n    function max(uint256 a, uint256 b) internal pure returns (uint256) {\\r\\n        return a > b ? a : b;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the smallest of two numbers.\\r\\n     */\\r\\n    function min(uint256 a, uint256 b) internal pure returns (uint256) {\\r\\n        return a < b ? a : b;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the average of two numbers. The result is rounded towards\\r\\n     * zero.\\r\\n     */\\r\\n    function average(uint256 a, uint256 b) internal pure returns (uint256) {\\r\\n        // (a + b) / 2 can overflow.\\r\\n        return (a & b) + (a ^ b) / 2;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the ceiling of the division of two numbers.\\r\\n     *\\r\\n     * This differs from standard division with `/` in that it rounds up instead\\r\\n     * of rounding down.\\r\\n     */\\r\\n    function ceilDiv(uint256 a, uint256 b) internal pure returns (uint256) {\\r\\n        // (a + b - 1) / b can overflow on addition, so we distribute.\\r\\n        return a == 0 ? 0 : (a - 1) / b + 1;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @notice Calculates floor(x * y / denominator) with full precision. Throws if result overflows a uint256 or denominator == 0\\r\\n     * @dev Original credit to Remco Bloemen under MIT license (https://xn--2-umb.com/21/muldiv)\\r\\n     * with further edits by Uniswap Labs also under MIT license.\\r\\n     */\\r\\n    function mulDiv(\\r\\n        uint256 x,\\r\\n        uint256 y,\\r\\n        uint256 denominator\\r\\n    ) internal pure returns (uint256 result) {\\r\\n        unchecked {\\r\\n            // 512-bit multiply [prod1 prod0] = x * y. Compute the product mod 2^256 and mod 2^256 - 1, then use\\r\\n            // use the Chinese Remainder Theorem to reconstruct the 512 bit result. The result is stored in two 256\\r\\n            // variables such that product = prod1 * 2^256 + prod0.\\r\\n            uint256 prod0; // Least significant 256 bits of the product\\r\\n            uint256 prod1; // Most significant 256 bits of the product\\r\\n            assembly {\\r\\n                let mm := mulmod(x, y, not(0))\\r\\n                prod0 := mul(x, y)\\r\\n                prod1 := sub(sub(mm, prod0), lt(mm, prod0))\\r\\n            }\\r\\n\\r\\n            // Handle non-overflow cases, 256 by 256 division.\\r\\n            if (prod1 == 0) {\\r\\n                // Solidity will revert if denominator == 0, unlike the div opcode on its own.\\r\\n                // The surrounding unchecked block does not change this fact.\\r\\n                // See https://docs.soliditylang.org/en/latest/control-structures.html#checked-or-unchecked-arithmetic.\\r\\n                return prod0 / denominator;\\r\\n            }\\r\\n\\r\\n            // Make sure the result is less than 2^256. Also prevents denominator == 0.\\r\\n            require(denominator > prod1, \\\"Math: mulDiv overflow\\\");\\r\\n\\r\\n            ///////////////////////////////////////////////\\r\\n            // 512 by 256 division.\\r\\n            ///////////////////////////////////////////////\\r\\n\\r\\n            // Make division exact by subtracting the remainder from [prod1 prod0].\\r\\n            uint256 remainder;\\r\\n            assembly {\\r\\n                // Compute remainder using mulmod.\\r\\n                remainder := mulmod(x, y, denominator)\\r\\n\\r\\n                // Subtract 256 bit number from 512 bit number.\\r\\n                prod1 := sub(prod1, gt(remainder, prod0))\\r\\n                prod0 := sub(prod0, remainder)\\r\\n            }\\r\\n\\r\\n            // Factor powers of two out of denominator and compute largest power of two divisor of denominator. Always >= 1.\\r\\n            // See https://cs.stackexchange.com/q/138556/92363.\\r\\n\\r\\n            // Does not overflow because the denominator cannot be zero at this stage in the function.\\r\\n            uint256 twos = denominator & (~denominator + 1);\\r\\n            assembly {\\r\\n                // Divide denominator by twos.\\r\\n                denominator := div(denominator, twos)\\r\\n\\r\\n                // Divide [prod1 prod0] by twos.\\r\\n                prod0 := div(prod0, twos)\\r\\n\\r\\n                // Flip twos such that it is 2^256 / twos. If twos is zero, then it becomes one.\\r\\n                twos := add(div(sub(0, twos), twos), 1)\\r\\n            }\\r\\n\\r\\n            // Shift in bits from prod1 into prod0.\\r\\n            prod0 |= prod1 * twos;\\r\\n\\r\\n            // Invert denominator mod 2^256. Now that denominator is an odd number, it has an inverse modulo 2^256 such\\r\\n            // that denominator * inv = 1 mod 2^256. Compute the inverse by starting with a seed that is correct for\\r\\n            // four bits. That is, denominator * inv = 1 mod 2^4.\\r\\n            uint256 inverse = (3 * denominator) ^ 2;\\r\\n\\r\\n            // Use the Newton-Raphson iteration to improve the precision. Thanks to Hensel's lifting lemma, this also works\\r\\n            // in modular arithmetic, doubling the correct bits in each step.\\r\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^8\\r\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^16\\r\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^32\\r\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^64\\r\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^128\\r\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^256\\r\\n\\r\\n            // Because the division is now exact we can divide by multiplying with the modular inverse of denominator.\\r\\n            // This will give us the correct result modulo 2^256. Since the preconditions guarantee that the outcome is\\r\\n            // less than 2^256, this is the final result. We don't need to compute the high bits of the result and prod1\\r\\n            // is no longer required.\\r\\n            result = prod0 * inverse;\\r\\n            return result;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @notice Calculates x * y / denominator with full precision, following the selected rounding direction.\\r\\n     */\\r\\n    function mulDiv(\\r\\n        uint256 x,\\r\\n        uint256 y,\\r\\n        uint256 denominator,\\r\\n        Rounding rounding\\r\\n    ) internal pure returns (uint256) {\\r\\n        uint256 result = mulDiv(x, y, denominator);\\r\\n        if (rounding == Rounding.Up && mulmod(x, y, denominator) > 0) {\\r\\n            result += 1;\\r\\n        }\\r\\n        return result;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the square root of a number. If the number is not a perfect square, the value is rounded down.\\r\\n     *\\r\\n     * Inspired by Henry S. Warren, Jr.'s \\\"Hacker's Delight\\\" (Chapter 11).\\r\\n     */\\r\\n    function sqrt(uint256 a) internal pure returns (uint256) {\\r\\n        if (a == 0) {\\r\\n            return 0;\\r\\n        }\\r\\n\\r\\n        // For our first guess, we get the biggest power of 2 which is smaller than the square root of the target.\\r\\n        //\\r\\n        // We know that the \\\"msb\\\" (most significant bit) of our target number `a` is a power of 2 such that we have\\r\\n        // `msb(a) <= a < 2*msb(a)`. This value can be written `msb(a)=2**k` with `k=log2(a)`.\\r\\n        //\\r\\n        // This can be rewritten `2**log2(a) <= a < 2**(log2(a) + 1)`\\r\\n        // \\u2192 `sqrt(2**k) <= sqrt(a) < sqrt(2**(k+1))`\\r\\n        // \\u2192 `2**(k/2) <= sqrt(a) < 2**((k+1)/2) <= 2**(k/2 + 1)`\\r\\n        //\\r\\n        // Consequently, `2**(log2(a) / 2)` is a good first approximation of `sqrt(a)` with at least 1 correct bit.\\r\\n        uint256 result = 1 << (log2(a) >> 1);\\r\\n\\r\\n        // At this point `result` is an estimation with one bit of precision. We know the true value is a uint128,\\r\\n        // since it is the square root of a uint256. Newton's method converges quadratically (precision doubles at\\r\\n        // every iteration). We thus need at most 7 iteration to turn our partial result with one bit of precision\\r\\n        // into the expected uint128 result.\\r\\n        unchecked {\\r\\n            result = (result + a / result) >> 1;\\r\\n            result = (result + a / result) >> 1;\\r\\n            result = (result + a / result) >> 1;\\r\\n            result = (result + a / result) >> 1;\\r\\n            result = (result + a / result) >> 1;\\r\\n            result = (result + a / result) >> 1;\\r\\n            result = (result + a / result) >> 1;\\r\\n            return min(result, a / result);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @notice Calculates sqrt(a), following the selected rounding direction.\\r\\n     */\\r\\n    function sqrt(\\r\\n        uint256 a,\\r\\n        Rounding rounding\\r\\n    ) internal pure returns (uint256) {\\r\\n        unchecked {\\r\\n            uint256 result = sqrt(a);\\r\\n            return\\r\\n                result +\\r\\n                (rounding == Rounding.Up && result * result < a ? 1 : 0);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Return the log in base 2, rounded down, of a positive value.\\r\\n     * Returns 0 if given 0.\\r\\n     */\\r\\n    function log2(uint256 value) internal pure returns (uint256) {\\r\\n        uint256 result = 0;\\r\\n        unchecked {\\r\\n            if (value >> 128 > 0) {\\r\\n                value >>= 128;\\r\\n                result += 128;\\r\\n            }\\r\\n            if (value >> 64 > 0) {\\r\\n                value >>= 64;\\r\\n                result += 64;\\r\\n            }\\r\\n            if (value >> 32 > 0) {\\r\\n                value >>= 32;\\r\\n                result += 32;\\r\\n            }\\r\\n            if (value >> 16 > 0) {\\r\\n                value >>= 16;\\r\\n                result += 16;\\r\\n            }\\r\\n            if (value >> 8 > 0) {\\r\\n                value >>= 8;\\r\\n                result += 8;\\r\\n            }\\r\\n            if (value >> 4 > 0) {\\r\\n                value >>= 4;\\r\\n                result += 4;\\r\\n            }\\r\\n            if (value >> 2 > 0) {\\r\\n                value >>= 2;\\r\\n                result += 2;\\r\\n            }\\r\\n            if (value >> 1 > 0) {\\r\\n                result += 1;\\r\\n            }\\r\\n        }\\r\\n        return result;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Return the log in base 2, following the selected rounding direction, of a positive value.\\r\\n     * Returns 0 if given 0.\\r\\n     */\\r\\n    function log2(\\r\\n        uint256 value,\\r\\n        Rounding rounding\\r\\n    ) internal pure returns (uint256) {\\r\\n        unchecked {\\r\\n            uint256 result = log2(value);\\r\\n            return\\r\\n                result +\\r\\n                (rounding == Rounding.Up && 1 << result < value ? 1 : 0);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Return the log in base 10, rounded down, of a positive value.\\r\\n     * Returns 0 if given 0.\\r\\n     */\\r\\n    function log10(uint256 value) internal pure returns (uint256) {\\r\\n        uint256 result = 0;\\r\\n        unchecked {\\r\\n            if (value >= 10 ** 64) {\\r\\n                value /= 10 ** 64;\\r\\n                result += 64;\\r\\n            }\\r\\n            if (value >= 10 ** 32) {\\r\\n                value /= 10 ** 32;\\r\\n                result += 32;\\r\\n            }\\r\\n            if (value >= 10 ** 16) {\\r\\n                value /= 10 ** 16;\\r\\n                result += 16;\\r\\n            }\\r\\n            if (value >= 10 ** 8) {\\r\\n                value /= 10 ** 8;\\r\\n                result += 8;\\r\\n            }\\r\\n            if (value >= 10 ** 4) {\\r\\n                value /= 10 ** 4;\\r\\n                result += 4;\\r\\n            }\\r\\n            if (value >= 10 ** 2) {\\r\\n                value /= 10 ** 2;\\r\\n                result += 2;\\r\\n            }\\r\\n            if (value >= 10 ** 1) {\\r\\n                result += 1;\\r\\n            }\\r\\n        }\\r\\n        return result;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Return the log in base 10, following the selected rounding direction, of a positive value.\\r\\n     * Returns 0 if given 0.\\r\\n     */\\r\\n    function log10(\\r\\n        uint256 value,\\r\\n        Rounding rounding\\r\\n    ) internal pure returns (uint256) {\\r\\n        unchecked {\\r\\n            uint256 result = log10(value);\\r\\n            return\\r\\n                result +\\r\\n                (rounding == Rounding.Up && 10 ** result < value ? 1 : 0);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Return the log in base 256, rounded down, of a positive value.\\r\\n     * Returns 0 if given 0.\\r\\n     *\\r\\n     * Adding one to the result gives the number of pairs of hex symbols needed to represent `value` as a hex string.\\r\\n     */\\r\\n    function log256(uint256 value) internal pure returns (uint256) {\\r\\n        uint256 result = 0;\\r\\n        unchecked {\\r\\n            if (value >> 128 > 0) {\\r\\n                value >>= 128;\\r\\n                result += 16;\\r\\n            }\\r\\n            if (value >> 64 > 0) {\\r\\n                value >>= 64;\\r\\n                result += 8;\\r\\n            }\\r\\n            if (value >> 32 > 0) {\\r\\n                value >>= 32;\\r\\n                result += 4;\\r\\n            }\\r\\n            if (value >> 16 > 0) {\\r\\n                value >>= 16;\\r\\n                result += 2;\\r\\n            }\\r\\n            if (value >> 8 > 0) {\\r\\n                result += 1;\\r\\n            }\\r\\n        }\\r\\n        return result;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Return the log in base 256, following the selected rounding direction, of a positive value.\\r\\n     * Returns 0 if given 0.\\r\\n     */\\r\\n    function log256(\\r\\n        uint256 value,\\r\\n        Rounding rounding\\r\\n    ) internal pure returns (uint256) {\\r\\n        unchecked {\\r\\n            uint256 result = log256(value);\\r\\n            return\\r\\n                result +\\r\\n                (rounding == Rounding.Up && 1 << (result << 3) < value ? 1 : 0);\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0xbf672c6a2594a9756172866e54e2e499e8be05030f3f0a53c0b768461004660b\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/math/SignedMath.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.8.0) (utils/math/SignedMath.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Standard signed math utilities missing in the Solidity language.\\r\\n */\\r\\nlibrary SignedMath {\\r\\n    /**\\r\\n     * @dev Returns the largest of two signed numbers.\\r\\n     */\\r\\n    function max(int256 a, int256 b) internal pure returns (int256) {\\r\\n        return a > b ? a : b;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the smallest of two signed numbers.\\r\\n     */\\r\\n    function min(int256 a, int256 b) internal pure returns (int256) {\\r\\n        return a < b ? a : b;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the average of two signed numbers without overflow.\\r\\n     * The result is rounded towards zero.\\r\\n     */\\r\\n    function average(int256 a, int256 b) internal pure returns (int256) {\\r\\n        // Formula from the book \\\"Hacker's Delight\\\"\\r\\n        int256 x = (a & b) + ((a ^ b) >> 1);\\r\\n        return x + (int256(uint256(x) >> 255) & (a ^ b));\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the absolute unsigned value of a signed value.\\r\\n     */\\r\\n    function abs(int256 n) internal pure returns (uint256) {\\r\\n        unchecked {\\r\\n            // must be unchecked in order to support `n = type(int256).min`\\r\\n            return uint256(n >= 0 ? n : -n);\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x7b249694790ca2ae6a813e28025e0ebb9bccb5940a6cba637911fd9c17012055\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 2583,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol:ERC1155URIStorage",
        "label": "_initialized",
        "offset": 0,
        "slot": "0",
        "type": "t_bool"
      },
      {
        "astId": 2586,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol:ERC1155URIStorage",
        "label": "_initializing",
        "offset": 1,
        "slot": "0",
        "type": "t_bool"
      },
      {
        "astId": 2787,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol:ERC1155URIStorage",
        "label": "_balances",
        "offset": 0,
        "slot": "1",
        "type": "t_mapping(t_uint256,t_mapping(t_address,t_uint256))"
      },
      {
        "astId": 2793,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol:ERC1155URIStorage",
        "label": "_operatorApprovals",
        "offset": 0,
        "slot": "2",
        "type": "t_mapping(t_address,t_mapping(t_address,t_bool))"
      },
      {
        "astId": 2795,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol:ERC1155URIStorage",
        "label": "_uri",
        "offset": 0,
        "slot": "3",
        "type": "t_string_storage"
      },
      {
        "astId": 4448,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol:ERC1155URIStorage",
        "label": "_baseURI",
        "offset": 0,
        "slot": "4",
        "type": "t_string_storage"
      },
      {
        "astId": 4452,
        "contract": "project/contracts/openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol:ERC1155URIStorage",
        "label": "_tokenURIs",
        "offset": 0,
        "slot": "5",
        "type": "t_mapping(t_uint256,t_string_storage)"
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
      }
    }
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
});