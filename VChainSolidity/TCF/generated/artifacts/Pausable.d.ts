export declare const Artifact_Pausable: {
  "contractName": "Pausable",
  "sourceName": "contracts/openzeppelin_l/contracts/security/Pausable.sol",
  "abi": [
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/openzeppelin_l/contracts/security/Pausable.sol",
  "devdoc": {
    "details": "Contract module which allows children to implement an emergency stop mechanism that can be triggered by an authorized account. This module is used through inheritance. It will make available the modifiers `whenNotPaused` and `whenPaused`, which can be applied to the functions of your contract. Note that they will not be pausable by simply including this module, only once the modifiers are put in place.",
    "events": {
      "Paused(address)": {
        "details": "Emitted when the pause is triggered by `account`."
      },
      "Unpaused(address)": {
        "details": "Emitted when the pause is lifted by `account`."
      }
    },
    "kind": "dev",
    "methods": {
      "constructor": {
        "details": "Initializes the contract in unpaused state."
      },
      "paused()": {
        "details": "Returns true if the contract is paused, and false otherwise."
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
      "paused()": "5c975abb"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Contract module which allows children to implement an emergency stop mechanism that can be triggered by an authorized account. This module is used through inheritance. It will make available the modifiers `whenNotPaused` and `whenPaused`, which can be applied to the functions of your contract. Note that they will not be pausable by simply including this module, only once the modifiers are put in place.\",\"events\":{\"Paused(address)\":{\"details\":\"Emitted when the pause is triggered by `account`.\"},\"Unpaused(address)\":{\"details\":\"Emitted when the pause is lifted by `account`.\"}},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"details\":\"Initializes the contract in unpaused state.\"},\"paused()\":{\"details\":\"Returns true if the contract is paused, and false otherwise.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/openzeppelin_l/contracts/security/Pausable.sol\":\"Pausable\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@4.9.6/\"]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/security/Pausable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.7.0) (security/Pausable.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../utils/Context.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Contract module which allows children to implement an emergency stop\\r\\n * mechanism that can be triggered by an authorized account.\\r\\n *\\r\\n * This module is used through inheritance. It will make available the\\r\\n * modifiers `whenNotPaused` and `whenPaused`, which can be applied to\\r\\n * the functions of your contract. Note that they will not be pausable by\\r\\n * simply including this module, only once the modifiers are put in place.\\r\\n */\\r\\nabstract contract Pausable is Context {\\r\\n    /**\\r\\n     * @dev Emitted when the pause is triggered by `account`.\\r\\n     */\\r\\n    event Paused(address account);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when the pause is lifted by `account`.\\r\\n     */\\r\\n    event Unpaused(address account);\\r\\n\\r\\n    bool private _paused;\\r\\n\\r\\n    /**\\r\\n     * @dev Initializes the contract in unpaused state.\\r\\n     */\\r\\n    constructor() {\\r\\n        _paused = false;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Modifier to make a function callable only when the contract is not paused.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - The contract must not be paused.\\r\\n     */\\r\\n    modifier whenNotPaused() {\\r\\n        _requireNotPaused();\\r\\n        _;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Modifier to make a function callable only when the contract is paused.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - The contract must be paused.\\r\\n     */\\r\\n    modifier whenPaused() {\\r\\n        _requirePaused();\\r\\n        _;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns true if the contract is paused, and false otherwise.\\r\\n     */\\r\\n    function paused() public view virtual returns (bool) {\\r\\n        return _paused;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Throws if the contract is paused.\\r\\n     */\\r\\n    function _requireNotPaused() internal view virtual {\\r\\n        require(!paused(), \\\"Pausable: paused\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Throws if the contract is not paused.\\r\\n     */\\r\\n    function _requirePaused() internal view virtual {\\r\\n        require(paused(), \\\"Pausable: not paused\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Triggers stopped state.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - The contract must not be paused.\\r\\n     */\\r\\n    function _pause() internal virtual whenNotPaused {\\r\\n        _paused = true;\\r\\n        emit Paused(_msgSender());\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns to normal state.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - The contract must be paused.\\r\\n     */\\r\\n    function _unpause() internal virtual whenPaused {\\r\\n        _paused = false;\\r\\n        emit Unpaused(_msgSender());\\r\\n    }\\r\\n}\",\"keccak256\":\"0x0040bef7a18b93312613bc16b57fc4b318d6120323da2140b3a5ea0dd7124df0\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.4) (utils/Context.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Provides information about the current execution context, including the\\r\\n * sender of the transaction and its data. While these are generally available\\r\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\r\\n * manner, since when dealing with meta-transactions the account sending and\\r\\n * paying for execution may not be the actual sender (as far as an application\\r\\n * is concerned).\\r\\n *\\r\\n * This contract is only required for intermediate, library-like contracts.\\r\\n */\\r\\nabstract contract Context {\\r\\n    function _msgSender() internal view virtual returns (address) {\\r\\n        return msg.sender;\\r\\n    }\\r\\n\\r\\n    function _msgData() internal view virtual returns (bytes calldata) {\\r\\n        return msg.data;\\r\\n    }\\r\\n\\r\\n    function _contextSuffixLength() internal view virtual returns (uint256) {\\r\\n        return 0;\\r\\n    }\\r\\n}\",\"keccak256\":\"0xef320168c89f0928606f4baf62131f67a759b0aed0ea445871758821a8c37b99\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 5832,
        "contract": "project/contracts/openzeppelin_l/contracts/security/Pausable.sol:Pausable",
        "label": "_paused",
        "offset": 0,
        "slot": "0",
        "type": "t_bool"
      }
    ],
    "types": {
      "t_bool": {
        "encoding": "inplace",
        "label": "bool",
        "numberOfBytes": "1"
      }
    }
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
};