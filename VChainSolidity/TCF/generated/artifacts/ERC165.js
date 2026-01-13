export const Artifact_ERC165 = /** @type {const} **/ ({
  "contractName": "ERC165",
  "sourceName": "contracts/openzeppelin_l/contracts/utils/introspection/ERC165.sol",
  "abi": [
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
  "inputSourceName": "project/contracts/openzeppelin_l/contracts/utils/introspection/ERC165.sol",
  "devdoc": {
    "details": "Implementation of the {IERC165} interface. Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check for the additional interface id that will be supported. For example: ```solidity function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId); } ``` Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.",
    "kind": "dev",
    "methods": {
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}."
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
      "supportsInterface(bytes4)": "01ffc9a7"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Implementation of the {IERC165} interface. Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check for the additional interface id that will be supported. For example: ```solidity function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId); } ``` Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\",\"kind\":\"dev\",\"methods\":{\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/openzeppelin_l/contracts/utils/introspection/ERC165.sol\":\"ERC165\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@4.9.6/\"]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/utils/introspection/ERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"./IERC165.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Implementation of the {IERC165} interface.\\r\\n *\\r\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\r\\n * for the additional interface id that will be supported. For example:\\r\\n *\\r\\n * ```solidity\\r\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\r\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\r\\n * }\\r\\n * ```\\r\\n *\\r\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\r\\n */\\r\\nabstract contract ERC165 is IERC165 {\\r\\n    /**\\r\\n     * @dev See {IERC165-supportsInterface}.\\r\\n     */\\r\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\r\\n        return interfaceId == type(IERC165).interfaceId;\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x3d3fe7b1901114d50828f5c77ba7f09a2a6a65223620c837364d31b60e5982ac\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC165 standard, as defined in the\\r\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\r\\n *\\r\\n * Implementers can declare support of contract interfaces, which can then be\\r\\n * queried by others ({ERC165Checker}).\\r\\n *\\r\\n * For an implementation, see {ERC165}.\\r\\n */\\r\\ninterface IERC165 {\\r\\n    /**\\r\\n     * @dev Returns true if this contract implements the interface defined by\\r\\n     * `interfaceId`. See the corresponding\\r\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\r\\n     * to learn more about how these ids are created.\\r\\n     *\\r\\n     * This function call must use less than 30 000 gas.\\r\\n     */\\r\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\r\\n}\\r\\n\",\"keccak256\":\"0x540685d7ece3faa56f38253270ff11b18e63949fb8659c408123b1874674492e\",\"license\":\"MIT\"}},\"version\":1}",
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