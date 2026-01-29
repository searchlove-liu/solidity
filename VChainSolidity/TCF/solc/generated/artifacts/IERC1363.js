export const Artifact_IERC1363 = /** @type {const} **/ ({
  "contractName": "IERC1363",
  "sourceName": "contracts/openzeppelin_l/contracts/interfaces/IERC1363.sol",
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
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
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
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
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
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approveAndCall",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
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
      "name": "approveAndCall",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
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
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferAndCall",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
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
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "transferAndCall",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
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
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "transferFromAndCall",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFromAndCall",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/openzeppelin_l/contracts/interfaces/IERC1363.sol",
  "devdoc": {
    "details": "Interface of an ERC1363 compliant contract, as defined in the https://eips.ethereum.org/EIPS/eip-1363[EIP]. Defines a interface for ERC20 tokens that supports executing recipient code after `transfer` or `transferFrom`, or spender code after `approve`.",
    "kind": "dev",
    "methods": {
      "allowance(address,address)": {
        "details": "Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called."
      },
      "approve(address,uint256)": {
        "details": "Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event."
      },
      "approveAndCall(address,uint256)": {
        "details": "Approve the passed address to spend the specified amount of tokens on behalf of msg.sender and then call `onApprovalReceived` on spender.",
        "params": {
          "amount": "uint256 The amount of tokens to be spent",
          "spender": "address The address which will spend the funds"
        }
      },
      "approveAndCall(address,uint256,bytes)": {
        "details": "Approve the passed address to spend the specified amount of tokens on behalf of msg.sender and then call `onApprovalReceived` on spender.",
        "params": {
          "amount": "uint256 The amount of tokens to be spent",
          "data": "bytes Additional data with no specified format, sent in call to `spender`",
          "spender": "address The address which will spend the funds"
        }
      },
      "balanceOf(address)": {
        "details": "Returns the amount of tokens owned by `account`."
      },
      "supportsInterface(bytes4)": {
        "details": "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
      },
      "totalSupply()": {
        "details": "Returns the amount of tokens in existence."
      },
      "transfer(address,uint256)": {
        "details": "Moves `amount` tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."
      },
      "transferAndCall(address,uint256)": {
        "details": "Transfer tokens from `msg.sender` to another address and then call `onTransferReceived` on receiver",
        "params": {
          "amount": "uint256 The amount of tokens to be transferred",
          "to": "address The address which you want to transfer to"
        },
        "returns": {
          "_0": "true unless throwing"
        }
      },
      "transferAndCall(address,uint256,bytes)": {
        "details": "Transfer tokens from `msg.sender` to another address and then call `onTransferReceived` on receiver",
        "params": {
          "amount": "uint256 The amount of tokens to be transferred",
          "data": "bytes Additional data with no specified format, sent in call to `to`",
          "to": "address The address which you want to transfer to"
        },
        "returns": {
          "_0": "true unless throwing"
        }
      },
      "transferFrom(address,address,uint256)": {
        "details": "Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."
      },
      "transferFromAndCall(address,address,uint256)": {
        "details": "Transfer tokens from one address to another and then call `onTransferReceived` on receiver",
        "params": {
          "amount": "uint256 The amount of tokens to be transferred",
          "from": "address The address which you want to send tokens from",
          "to": "address The address which you want to transfer to"
        },
        "returns": {
          "_0": "true unless throwing"
        }
      },
      "transferFromAndCall(address,address,uint256,bytes)": {
        "details": "Transfer tokens from one address to another and then call `onTransferReceived` on receiver",
        "params": {
          "amount": "uint256 The amount of tokens to be transferred",
          "data": "bytes Additional data with no specified format, sent in call to `to`",
          "from": "address The address which you want to send tokens from",
          "to": "address The address which you want to transfer to"
        },
        "returns": {
          "_0": "true unless throwing"
        }
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
      "allowance(address,address)": "dd62ed3e",
      "approve(address,uint256)": "095ea7b3",
      "approveAndCall(address,uint256)": "3177029f",
      "approveAndCall(address,uint256,bytes)": "cae9ca51",
      "balanceOf(address)": "70a08231",
      "supportsInterface(bytes4)": "01ffc9a7",
      "totalSupply()": "18160ddd",
      "transfer(address,uint256)": "a9059cbb",
      "transferAndCall(address,uint256)": "1296ee62",
      "transferAndCall(address,uint256,bytes)": "4000aea0",
      "transferFrom(address,address,uint256)": "23b872dd",
      "transferFromAndCall(address,address,uint256)": "d8fbe994",
      "transferFromAndCall(address,address,uint256,bytes)": "c1d34b89"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approveAndCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"approveAndCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferAndCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"transferAndCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"transferFromAndCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFromAndCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of an ERC1363 compliant contract, as defined in the https://eips.ethereum.org/EIPS/eip-1363[EIP]. Defines a interface for ERC20 tokens that supports executing recipient code after `transfer` or `transferFrom`, or spender code after `approve`.\",\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.\"},\"approve(address,uint256)\":{\"details\":\"Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.\"},\"approveAndCall(address,uint256)\":{\"details\":\"Approve the passed address to spend the specified amount of tokens on behalf of msg.sender and then call `onApprovalReceived` on spender.\",\"params\":{\"amount\":\"uint256 The amount of tokens to be spent\",\"spender\":\"address The address which will spend the funds\"}},\"approveAndCall(address,uint256,bytes)\":{\"details\":\"Approve the passed address to spend the specified amount of tokens on behalf of msg.sender and then call `onApprovalReceived` on spender.\",\"params\":{\"amount\":\"uint256 The amount of tokens to be spent\",\"data\":\"bytes Additional data with no specified format, sent in call to `spender`\",\"spender\":\"address The address which will spend the funds\"}},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by `account`.\"},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"},\"totalSupply()\":{\"details\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Moves `amount` tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"},\"transferAndCall(address,uint256)\":{\"details\":\"Transfer tokens from `msg.sender` to another address and then call `onTransferReceived` on receiver\",\"params\":{\"amount\":\"uint256 The amount of tokens to be transferred\",\"to\":\"address The address which you want to transfer to\"},\"returns\":{\"_0\":\"true unless throwing\"}},\"transferAndCall(address,uint256,bytes)\":{\"details\":\"Transfer tokens from `msg.sender` to another address and then call `onTransferReceived` on receiver\",\"params\":{\"amount\":\"uint256 The amount of tokens to be transferred\",\"data\":\"bytes Additional data with no specified format, sent in call to `to`\",\"to\":\"address The address which you want to transfer to\"},\"returns\":{\"_0\":\"true unless throwing\"}},\"transferFrom(address,address,uint256)\":{\"details\":\"Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"},\"transferFromAndCall(address,address,uint256)\":{\"details\":\"Transfer tokens from one address to another and then call `onTransferReceived` on receiver\",\"params\":{\"amount\":\"uint256 The amount of tokens to be transferred\",\"from\":\"address The address which you want to send tokens from\",\"to\":\"address The address which you want to transfer to\"},\"returns\":{\"_0\":\"true unless throwing\"}},\"transferFromAndCall(address,address,uint256,bytes)\":{\"details\":\"Transfer tokens from one address to another and then call `onTransferReceived` on receiver\",\"params\":{\"amount\":\"uint256 The amount of tokens to be transferred\",\"data\":\"bytes Additional data with no specified format, sent in call to `to`\",\"from\":\"address The address which you want to send tokens from\",\"to\":\"address The address which you want to transfer to\"},\"returns\":{\"_0\":\"true unless throwing\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/openzeppelin_l/contracts/interfaces/IERC1363.sol\":\"IERC1363\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@4.9.6/\"]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/interfaces/IERC1363.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (interfaces/IERC1363.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"./IERC20.sol\\\";\\r\\nimport \\\"./IERC165.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Interface of an ERC1363 compliant contract, as defined in the\\r\\n * https://eips.ethereum.org/EIPS/eip-1363[EIP].\\r\\n *\\r\\n * Defines a interface for ERC20 tokens that supports executing recipient\\r\\n * code after `transfer` or `transferFrom`, or spender code after `approve`.\\r\\n */\\r\\ninterface IERC1363 is IERC165, IERC20 {\\r\\n    /*\\r\\n     * Note: the ERC-165 identifier for this interface is 0xb0202a11.\\r\\n     * 0xb0202a11 ===\\r\\n     *   bytes4(keccak256('transferAndCall(address,uint256)')) ^\\r\\n     *   bytes4(keccak256('transferAndCall(address,uint256,bytes)')) ^\\r\\n     *   bytes4(keccak256('transferFromAndCall(address,address,uint256)')) ^\\r\\n     *   bytes4(keccak256('transferFromAndCall(address,address,uint256,bytes)')) ^\\r\\n     *   bytes4(keccak256('approveAndCall(address,uint256)')) ^\\r\\n     *   bytes4(keccak256('approveAndCall(address,uint256,bytes)'))\\r\\n     */\\r\\n\\r\\n    /**\\r\\n     * @dev Transfer tokens from `msg.sender` to another address and then call `onTransferReceived` on receiver\\r\\n     * @param to address The address which you want to transfer to\\r\\n     * @param amount uint256 The amount of tokens to be transferred\\r\\n     * @return true unless throwing\\r\\n     */\\r\\n    function transferAndCall(\\r\\n        address to,\\r\\n        uint256 amount\\r\\n    ) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Transfer tokens from `msg.sender` to another address and then call `onTransferReceived` on receiver\\r\\n     * @param to address The address which you want to transfer to\\r\\n     * @param amount uint256 The amount of tokens to be transferred\\r\\n     * @param data bytes Additional data with no specified format, sent in call to `to`\\r\\n     * @return true unless throwing\\r\\n     */\\r\\n    function transferAndCall(\\r\\n        address to,\\r\\n        uint256 amount,\\r\\n        bytes memory data\\r\\n    ) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Transfer tokens from one address to another and then call `onTransferReceived` on receiver\\r\\n     * @param from address The address which you want to send tokens from\\r\\n     * @param to address The address which you want to transfer to\\r\\n     * @param amount uint256 The amount of tokens to be transferred\\r\\n     * @return true unless throwing\\r\\n     */\\r\\n    function transferFromAndCall(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 amount\\r\\n    ) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Transfer tokens from one address to another and then call `onTransferReceived` on receiver\\r\\n     * @param from address The address which you want to send tokens from\\r\\n     * @param to address The address which you want to transfer to\\r\\n     * @param amount uint256 The amount of tokens to be transferred\\r\\n     * @param data bytes Additional data with no specified format, sent in call to `to`\\r\\n     * @return true unless throwing\\r\\n     */\\r\\n    function transferFromAndCall(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 amount,\\r\\n        bytes memory data\\r\\n    ) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Approve the passed address to spend the specified amount of tokens on behalf of msg.sender\\r\\n     * and then call `onApprovalReceived` on spender.\\r\\n     * @param spender address The address which will spend the funds\\r\\n     * @param amount uint256 The amount of tokens to be spent\\r\\n     */\\r\\n    function approveAndCall(\\r\\n        address spender,\\r\\n        uint256 amount\\r\\n    ) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Approve the passed address to spend the specified amount of tokens on behalf of msg.sender\\r\\n     * and then call `onApprovalReceived` on spender.\\r\\n     * @param spender address The address which will spend the funds\\r\\n     * @param amount uint256 The amount of tokens to be spent\\r\\n     * @param data bytes Additional data with no specified format, sent in call to `spender`\\r\\n     */\\r\\n    function approveAndCall(\\r\\n        address spender,\\r\\n        uint256 amount,\\r\\n        bytes memory data\\r\\n    ) external returns (bool);\\r\\n}\\r\\n\",\"keccak256\":\"0x3cd3e6ab33a4f5205d8dacedc538c7b8c8104439c2be4d5de5d136267fc54faa\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/interfaces/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (interfaces/IERC165.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../utils/introspection/IERC165.sol\\\";\\r\\n\",\"keccak256\":\"0x8045f7d526dd93c933f0f46b1637bace1ecb8282f150e004ada0bda898f8715f\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/interfaces/IERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (interfaces/IERC20.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../token/ERC20/IERC20.sol\\\";\\r\\n\",\"keccak256\":\"0x704c9b04b6cdd778ac5ac4bc8e9b37aeda16730c99c8980224fff2938190f82a\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC20/IERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/IERC20.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\r\\n */\\r\\ninterface IERC20 {\\r\\n    /**\\r\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\r\\n     * another (`to`).\\r\\n     *\\r\\n     * Note that `value` may be zero.\\r\\n     */\\r\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\r\\n     * a call to {approve}. `value` is the new allowance.\\r\\n     */\\r\\n    event Approval(\\r\\n        address indexed owner,\\r\\n        address indexed spender,\\r\\n        uint256 value\\r\\n    );\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens in existence.\\r\\n     */\\r\\n    function totalSupply() external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens owned by `account`.\\r\\n     */\\r\\n    function balanceOf(address account) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from the caller's account to `to`.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transfer(address to, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the remaining number of tokens that `spender` will be\\r\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\r\\n     * zero by default.\\r\\n     *\\r\\n     * This value changes when {approve} or {transferFrom} are called.\\r\\n     */\\r\\n    function allowance(\\r\\n        address owner,\\r\\n        address spender\\r\\n    ) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\r\\n     * that someone may use both the old and the new allowance by unfortunate\\r\\n     * transaction ordering. One possible solution to mitigate this race\\r\\n     * condition is to first reduce the spender's allowance to 0 and set the\\r\\n     * desired value afterwards:\\r\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\r\\n     *\\r\\n     * Emits an {Approval} event.\\r\\n     */\\r\\n    function approve(address spender, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from `from` to `to` using the\\r\\n     * allowance mechanism. `amount` is then deducted from the caller's\\r\\n     * allowance.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 amount\\r\\n    ) external returns (bool);\\r\\n}\\r\\n\",\"keccak256\":\"0x0daeecf13274cee034f010e0b6d63166eae133e1b0f6f5ca1e6ade67b16c5808\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC165 standard, as defined in the\\r\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\r\\n *\\r\\n * Implementers can declare support of contract interfaces, which can then be\\r\\n * queried by others ({ERC165Checker}).\\r\\n *\\r\\n * For an implementation, see {ERC165}.\\r\\n */\\r\\ninterface IERC165 {\\r\\n    /**\\r\\n     * @dev Returns true if this contract implements the interface defined by\\r\\n     * `interfaceId`. See the corresponding\\r\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\r\\n     * to learn more about how these ids are created.\\r\\n     *\\r\\n     * This function call must use less than 30 000 gas.\\r\\n     */\\r\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\r\\n}\\r\\n\",\"keccak256\":\"0x540685d7ece3faa56f38253270ff11b18e63949fb8659c408123b1874674492e\",\"license\":\"MIT\"}},\"version\":1}",
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