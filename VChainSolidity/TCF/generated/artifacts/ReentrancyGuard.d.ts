export declare const Artifact_ReentrancyGuard: {
  "contractName": "ReentrancyGuard",
  "sourceName": "contracts/openzeppelin_l/contracts/security/ReentrancyGuard.sol",
  "abi": [],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/openzeppelin_l/contracts/security/ReentrancyGuard.sol",
  "devdoc": {
    "details": "Contract module that helps prevent reentrant calls to a function. Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier available, which can be applied to functions to make sure there are no nested (reentrant) calls to them. Note that because there is a single `nonReentrant` guard, functions marked as `nonReentrant` may not call one another. This can be worked around by making those functions `private`, and then adding `external` `nonReentrant` entry points to them. TIP: If you would like to learn more about reentrancy and alternative ways to protect against it, check out our blog post https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].",
    "kind": "dev",
    "methods": {},
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
    "methodIdentifiers": {}
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Contract module that helps prevent reentrant calls to a function. Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier available, which can be applied to functions to make sure there are no nested (reentrant) calls to them. Note that because there is a single `nonReentrant` guard, functions marked as `nonReentrant` may not call one another. This can be worked around by making those functions `private`, and then adding `external` `nonReentrant` entry points to them. TIP: If you would like to learn more about reentrancy and alternative ways to protect against it, check out our blog post https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/openzeppelin_l/contracts/security/ReentrancyGuard.sol\":\"ReentrancyGuard\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@4.9.6/\"]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/security/ReentrancyGuard.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (security/ReentrancyGuard.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Contract module that helps prevent reentrant calls to a function.\\r\\n *\\r\\n * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\\r\\n * available, which can be applied to functions to make sure there are no nested\\r\\n * (reentrant) calls to them.\\r\\n *\\r\\n * Note that because there is a single `nonReentrant` guard, functions marked as\\r\\n * `nonReentrant` may not call one another. This can be worked around by making\\r\\n * those functions `private`, and then adding `external` `nonReentrant` entry\\r\\n * points to them.\\r\\n *\\r\\n * TIP: If you would like to learn more about reentrancy and alternative ways\\r\\n * to protect against it, check out our blog post\\r\\n * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].\\r\\n */\\r\\nabstract contract ReentrancyGuard {\\r\\n    // Booleans are more expensive than uint256 or any type that takes up a full\\r\\n    // word because each write operation emits an extra SLOAD to first read the\\r\\n    // slot's contents, replace the bits taken up by the boolean, and then write\\r\\n    // back. This is the compiler's defense against contract upgrades and\\r\\n    // pointer aliasing, and it cannot be disabled.\\r\\n\\r\\n    // The values being non-zero value makes deployment a bit more expensive,\\r\\n    // but in exchange the refund on every call to nonReentrant will be lower in\\r\\n    // amount. Since refunds are capped to a percentage of the total\\r\\n    // transaction's gas, it is best to keep them low in cases like this one, to\\r\\n    // increase the likelihood of the full refund coming into effect.\\r\\n    uint256 private constant _NOT_ENTERED = 1;\\r\\n    uint256 private constant _ENTERED = 2;\\r\\n\\r\\n    uint256 private _status;\\r\\n\\r\\n    constructor() {\\r\\n        _status = _NOT_ENTERED;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Prevents a contract from calling itself, directly or indirectly.\\r\\n     * Calling a `nonReentrant` function from another `nonReentrant`\\r\\n     * function is not supported. It is possible to prevent this from happening\\r\\n     * by making the `nonReentrant` function external, and making it call a\\r\\n     * `private` function that does the actual work.\\r\\n     */\\r\\n    modifier nonReentrant() {\\r\\n        _nonReentrantBefore();\\r\\n        _;\\r\\n        _nonReentrantAfter();\\r\\n    }\\r\\n\\r\\n    function _nonReentrantBefore() private {\\r\\n        // On the first call to nonReentrant, _status will be _NOT_ENTERED\\r\\n        require(_status != _ENTERED, \\\"ReentrancyGuard: reentrant call\\\");\\r\\n\\r\\n        // Any calls to nonReentrant after this point will fail\\r\\n        _status = _ENTERED;\\r\\n    }\\r\\n\\r\\n    function _nonReentrantAfter() private {\\r\\n        // By storing the original value once again, a refund is triggered (see\\r\\n        // https://eips.ethereum.org/EIPS/eip-2200)\\r\\n        _status = _NOT_ENTERED;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns true if the reentrancy guard is currently set to \\\"entered\\\", which indicates there is a\\r\\n     * `nonReentrant` function in the call stack.\\r\\n     */\\r\\n    function _reentrancyGuardEntered() internal view returns (bool) {\\r\\n        return _status == _ENTERED;\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0xbec94e472f5fde800401cdc48fe89c0260ab92b22965ddce17a715f9825b4f12\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 5933,
        "contract": "project/contracts/openzeppelin_l/contracts/security/ReentrancyGuard.sol:ReentrancyGuard",
        "label": "_status",
        "offset": 0,
        "slot": "0",
        "type": "t_uint256"
      }
    ],
    "types": {
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
};