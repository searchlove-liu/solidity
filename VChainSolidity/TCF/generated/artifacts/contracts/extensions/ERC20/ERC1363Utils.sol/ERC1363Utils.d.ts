export declare const Artifact_ERC1363Utils: {
  "contractName": "ERC1363Utils",
  "sourceName": "contracts/extensions/ERC20/ERC1363Utils.sol",
  "abi": [],
  "bytecode": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212202d348b95a8731bbfeaa8c237cc4b321c699ef1b1adb35873ade5bb4edd1c4d3264736f6c63430008010033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212202d348b95a8731bbfeaa8c237cc4b321c699ef1b1adb35873ade5bb4edd1c4d3264736f6c63430008010033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/extensions/ERC20/ERC1363Utils.sol",
  "devdoc": {
    "details": "Library that provides common ERC-1363 utility functions. See https://eips.ethereum.org/EIPS/eip-1363[ERC-1363].",
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "evm": {
    "bytecode": {
      "generatedSources": [],
      "linkReferences": {},
      "object": "60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212202d348b95a8731bbfeaa8c237cc4b321c699ef1b1adb35873ade5bb4edd1c4d3264736f6c63430008010033",
      "opcodes": "PUSH1 0x56 PUSH1 0x37 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x2A JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x0 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x2D CALLVALUE DUP12 SWAP6 0xA8 PUSH20 0x1BBFEAA8C237CC4B321C699EF1B1ADB35873ADE5 0xBB 0x4E 0xDD SHR 0x4D ORIGIN PUSH5 0x736F6C6343 STOP ADDMOD ADD STOP CALLER ",
      "sourceMap": "395:1636:7:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;395:1636:7;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212202d348b95a8731bbfeaa8c237cc4b321c699ef1b1adb35873ade5bb4edd1c4d3264736f6c63430008010033",
      "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x2D CALLVALUE DUP12 SWAP6 0xA8 PUSH20 0x1BBFEAA8C237CC4B321C699EF1B1ADB35873ADE5 0xBB 0x4E 0xDD SHR 0x4D ORIGIN PUSH5 0x736F6C6343 STOP ADDMOD ADD STOP CALLER ",
      "sourceMap": "395:1636:7:-:0;;;;;;;;"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "17200",
        "executionCost": "103",
        "totalCost": "17303"
      },
      "internal": {
        "checkOnERC1363TransferReceived(address,address,address,uint256,bytes memory)": "infinite"
      }
    },
    "methodIdentifiers": {}
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Library that provides common ERC-1363 utility functions. See https://eips.ethereum.org/EIPS/eip-1363[ERC-1363].\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/extensions/ERC20/ERC1363Utils.sol\":\"ERC1363Utils\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/extensions/ERC20/ERC1363Utils.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v5.4.0) (token/ERC20/utils/ERC1363Utils.sol)\\r\\n\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\nimport {\\r\\n    IERC1363Receiver\\r\\n} from \\\"../../openzeppelin_l/contracts/interfaces/IERC1363Receiver.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Library that provides common ERC-1363 utility functions.\\r\\n *\\r\\n * See https://eips.ethereum.org/EIPS/eip-1363[ERC-1363].\\r\\n */\\r\\nlibrary ERC1363Utils {\\r\\n    /**\\r\\n     * @dev Performs a call to {IERC1363Receiver-onTransferReceived} on a target address.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - The target has code (i.e. is a contract).\\r\\n     * - The target `to` must implement the {IERC1363Receiver} interface.\\r\\n     * - The target must return the {IERC1363Receiver-onTransferReceived} selector to accept the transfer.\\r\\n     */\\r\\n    function checkOnERC1363TransferReceived(\\r\\n        address operator,\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 value,\\r\\n        bytes memory data\\r\\n    ) internal {\\r\\n        require(to.code.length != 0, \\\"ERC1363: transfer to non-contract\\\");\\r\\n\\r\\n        try\\r\\n            IERC1363Receiver(to).onTransferReceived(operator, from, value, data)\\r\\n        returns (bytes4 retval) {\\r\\n            // \\u9519\\u8bef\\u4fe1\\u606f\\u8868\\u793a\\u63a5\\u6536\\u8005\\u5408\\u7ea6\\u6ca1\\u6709\\u6b63\\u786e\\u5b9e\\u73b0\\u63a5\\u53e3IERC1363Receiver\\u6216IERC1363Spender\\r\\n            // \\u6216\\u8005\\u66f4\\u901a\\u4fd7\\u7b2c\\u8bf4\\uff0cto\\u5408\\u7ea6\\u5730\\u5740\\u4e0d\\u6b63\\u786e\\r\\n            require(\\r\\n                retval == IERC1363Receiver.onTransferReceived.selector,\\r\\n                \\\"ERC1363: to is a incorrect address\\\"\\r\\n            );\\r\\n        } catch (bytes memory reason) {\\r\\n            if (reason.length == 0) {\\r\\n                // \\u8fd9\\u91cc\\u8868\\u793a\\u63a5\\u53d7\\u8005\\uff08to\\uff09\\uff0c\\u4e0d\\u662f\\u5408\\u7ea6\\u6216\\u8005\\u6ca1\\u6709\\u5b9e\\u73b0IERC1363Receiver\\u63a5\\u53e3\\u6216IERC1363Spender\\r\\n                // \\u6216\\u8005\\u66f4\\u901a\\u4fd7\\u7684\\u8bf4\\uff0cto\\u5408\\u7ea6\\u5730\\u5740\\u4e0d\\u6b63\\u786e\\r\\n                revert(\\\"ERC1363: to is a incorrect address\\\");\\r\\n            } else {\\r\\n                assembly {\\r\\n                    revert(add(reason, 0x20), mload(reason))\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x1990f99945888d70787ceb1018b2e8375d8982b1f60336e21f38323ec4f79402\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/interfaces/IERC1363Receiver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (interfaces/IERC1363Receiver.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface for any contract that wants to support {IERC1363-transferAndCall}\\r\\n * or {IERC1363-transferFromAndCall} from {ERC1363} token contracts.\\r\\n */\\r\\ninterface IERC1363Receiver {\\r\\n    /*\\r\\n     * Note: the ERC-165 identifier for this interface is 0x88a7ca5c.\\r\\n     * 0x88a7ca5c === bytes4(keccak256(\\\"onTransferReceived(address,address,uint256,bytes)\\\"))\\r\\n     */\\r\\n\\r\\n    /**\\r\\n     * @notice Handle the receipt of ERC1363 tokens\\r\\n     * @dev Any ERC1363 smart contract calls this function on the recipient\\r\\n     * after a `transfer` or a `transferFrom`. This function MAY throw to revert and reject the\\r\\n     * transfer. Return of other than the magic value MUST result in the\\r\\n     * transaction being reverted.\\r\\n     * Note: the token contract address is always the message sender.\\r\\n     * @param operator address The address which called `transferAndCall` or `transferFromAndCall` function\\r\\n     * @param from address The address which are token transferred from\\r\\n     * @param amount uint256 The amount of tokens transferred\\r\\n     * @param data bytes Additional data with no specified format\\r\\n     * @return `bytes4(keccak256(\\\"onTransferReceived(address,address,uint256,bytes)\\\"))` unless throwing\\r\\n     */\\r\\n    function onTransferReceived(\\r\\n        address operator,\\r\\n        address from,\\r\\n        uint256 amount,\\r\\n        bytes memory data\\r\\n    ) external returns (bytes4);\\r\\n}\\r\\n\",\"keccak256\":\"0xc149a479b8c794103eeb3c93fa50226aa0eee57d42e38c16a898d9a9d3beff9e\",\"license\":\"MIT\"}},\"version\":1}",
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