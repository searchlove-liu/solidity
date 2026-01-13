export const Artifact_IERC20Permit = /** @type {const} **/ ({
  "contractName": "IERC20Permit",
  "sourceName": "contracts/openzeppelin_l/contracts/token/ERC20/extensions/IERC20Permit.sol",
  "abi": [
    {
      "inputs": [],
      "name": "DOMAIN_SEPARATOR",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
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
        }
      ],
      "name": "nonces",
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
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "permit",
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
  "inputSourceName": "project/contracts/openzeppelin_l/contracts/token/ERC20/extensions/IERC20Permit.sol",
  "devdoc": {
    "details": "Interface of the ERC20 Permit extension allowing approvals to be made via signatures, as defined in https://eips.ethereum.org/EIPS/eip-2612[EIP-2612]. Adds the {permit} method, which can be used to change an account's ERC20 allowance (see {IERC20-allowance}) by presenting a message signed by the account. By not relying on {IERC20-approve}, the token holder account doesn't need to send a transaction, and thus is not required to hold Ether at all. ==== Security Considerations There are two important considerations concerning the use of `permit`. The first is that a valid permit signature expresses an allowance, and it should not be assumed to convey additional meaning. In particular, it should not be considered as an intention to spend the allowance in any specific way. The second is that because permits have built-in replay protection and can be submitted by anyone, they can be frontrun. A protocol that uses permits should take this into consideration and allow a `permit` call to fail. Combining these two aspects, a pattern that may be generally recommended is: ```solidity function doThingWithPermit(..., uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public {     try token.permit(msg.sender, address(this), value, deadline, v, r, s) {} catch {}     doThing(..., value); } function doThing(..., uint256 value) public {     token.safeTransferFrom(msg.sender, address(this), value);     ... } ``` Observe that: 1) `msg.sender` is used as the owner, leaving no ambiguity as to the signer intent, and 2) the use of `try/catch` allows the permit to fail and makes the code tolerant to frontrunning. (See also {SafeERC20-safeTransferFrom}). Additionally, note that smart contract wallets (such as Argent or Safe) are not able to produce permit signatures, so contracts should have entry points that don't rely on permit.",
    "kind": "dev",
    "methods": {
      "DOMAIN_SEPARATOR()": {
        "details": "Returns the domain separator used in the encoding of the signature for {permit}, as defined by {EIP712}."
      },
      "nonces(address)": {
        "details": "Returns the current nonce for `owner`. This value must be included whenever a signature is generated for {permit}. Every successful call to {permit} increases ``owner``'s nonce by one. This prevents a signature from being used multiple times."
      },
      "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": {
        "details": "Sets `value` as the allowance of `spender` over ``owner``'s tokens, given ``owner``'s signed approval. IMPORTANT: The same issues {IERC20-approve} has related to transaction ordering also apply here. Emits an {Approval} event. Requirements: - `spender` cannot be the zero address. - `deadline` must be a timestamp in the future. - `v`, `r` and `s` must be a valid `secp256k1` signature from `owner` over the EIP712-formatted function arguments. - the signature must use ``owner``'s current nonce (see {nonces}). For more information on the signature format, see the https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP section]. CAUTION: See Security Considerations above."
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
      "DOMAIN_SEPARATOR()": "3644e515",
      "nonces(address)": "7ecebe00",
      "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the ERC20 Permit extension allowing approvals to be made via signatures, as defined in https://eips.ethereum.org/EIPS/eip-2612[EIP-2612]. Adds the {permit} method, which can be used to change an account's ERC20 allowance (see {IERC20-allowance}) by presenting a message signed by the account. By not relying on {IERC20-approve}, the token holder account doesn't need to send a transaction, and thus is not required to hold Ether at all. ==== Security Considerations There are two important considerations concerning the use of `permit`. The first is that a valid permit signature expresses an allowance, and it should not be assumed to convey additional meaning. In particular, it should not be considered as an intention to spend the allowance in any specific way. The second is that because permits have built-in replay protection and can be submitted by anyone, they can be frontrun. A protocol that uses permits should take this into consideration and allow a `permit` call to fail. Combining these two aspects, a pattern that may be generally recommended is: ```solidity function doThingWithPermit(..., uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public {     try token.permit(msg.sender, address(this), value, deadline, v, r, s) {} catch {}     doThing(..., value); } function doThing(..., uint256 value) public {     token.safeTransferFrom(msg.sender, address(this), value);     ... } ``` Observe that: 1) `msg.sender` is used as the owner, leaving no ambiguity as to the signer intent, and 2) the use of `try/catch` allows the permit to fail and makes the code tolerant to frontrunning. (See also {SafeERC20-safeTransferFrom}). Additionally, note that smart contract wallets (such as Argent or Safe) are not able to produce permit signatures, so contracts should have entry points that don't rely on permit.\",\"kind\":\"dev\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"details\":\"Returns the domain separator used in the encoding of the signature for {permit}, as defined by {EIP712}.\"},\"nonces(address)\":{\"details\":\"Returns the current nonce for `owner`. This value must be included whenever a signature is generated for {permit}. Every successful call to {permit} increases ``owner``'s nonce by one. This prevents a signature from being used multiple times.\"},\"permit(address,address,uint256,uint256,uint8,bytes32,bytes32)\":{\"details\":\"Sets `value` as the allowance of `spender` over ``owner``'s tokens, given ``owner``'s signed approval. IMPORTANT: The same issues {IERC20-approve} has related to transaction ordering also apply here. Emits an {Approval} event. Requirements: - `spender` cannot be the zero address. - `deadline` must be a timestamp in the future. - `v`, `r` and `s` must be a valid `secp256k1` signature from `owner` over the EIP712-formatted function arguments. - the signature must use ``owner``'s current nonce (see {nonces}). For more information on the signature format, see the https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP section]. CAUTION: See Security Considerations above.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/openzeppelin_l/contracts/token/ERC20/extensions/IERC20Permit.sol\":\"IERC20Permit\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@4.9.6/\"]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.4) (token/ERC20/extensions/IERC20Permit.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC20 Permit extension allowing approvals to be made via signatures, as defined in\\r\\n * https://eips.ethereum.org/EIPS/eip-2612[EIP-2612].\\r\\n *\\r\\n * Adds the {permit} method, which can be used to change an account's ERC20 allowance (see {IERC20-allowance}) by\\r\\n * presenting a message signed by the account. By not relying on {IERC20-approve}, the token holder account doesn't\\r\\n * need to send a transaction, and thus is not required to hold Ether at all.\\r\\n *\\r\\n * ==== Security Considerations\\r\\n *\\r\\n * There are two important considerations concerning the use of `permit`. The first is that a valid permit signature\\r\\n * expresses an allowance, and it should not be assumed to convey additional meaning. In particular, it should not be\\r\\n * considered as an intention to spend the allowance in any specific way. The second is that because permits have\\r\\n * built-in replay protection and can be submitted by anyone, they can be frontrun. A protocol that uses permits should\\r\\n * take this into consideration and allow a `permit` call to fail. Combining these two aspects, a pattern that may be\\r\\n * generally recommended is:\\r\\n *\\r\\n * ```solidity\\r\\n * function doThingWithPermit(..., uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public {\\r\\n *     try token.permit(msg.sender, address(this), value, deadline, v, r, s) {} catch {}\\r\\n *     doThing(..., value);\\r\\n * }\\r\\n *\\r\\n * function doThing(..., uint256 value) public {\\r\\n *     token.safeTransferFrom(msg.sender, address(this), value);\\r\\n *     ...\\r\\n * }\\r\\n * ```\\r\\n *\\r\\n * Observe that: 1) `msg.sender` is used as the owner, leaving no ambiguity as to the signer intent, and 2) the use of\\r\\n * `try/catch` allows the permit to fail and makes the code tolerant to frontrunning. (See also\\r\\n * {SafeERC20-safeTransferFrom}).\\r\\n *\\r\\n * Additionally, note that smart contract wallets (such as Argent or Safe) are not able to produce permit signatures, so\\r\\n * contracts should have entry points that don't rely on permit.\\r\\n */\\r\\ninterface IERC20Permit {\\r\\n    /**\\r\\n     * @dev Sets `value` as the allowance of `spender` over ``owner``'s tokens,\\r\\n     * given ``owner``'s signed approval.\\r\\n     *\\r\\n     * IMPORTANT: The same issues {IERC20-approve} has related to transaction\\r\\n     * ordering also apply here.\\r\\n     *\\r\\n     * Emits an {Approval} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `spender` cannot be the zero address.\\r\\n     * - `deadline` must be a timestamp in the future.\\r\\n     * - `v`, `r` and `s` must be a valid `secp256k1` signature from `owner`\\r\\n     * over the EIP712-formatted function arguments.\\r\\n     * - the signature must use ``owner``'s current nonce (see {nonces}).\\r\\n     *\\r\\n     * For more information on the signature format, see the\\r\\n     * https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP\\r\\n     * section].\\r\\n     *\\r\\n     * CAUTION: See Security Considerations above.\\r\\n     */\\r\\n    function permit(\\r\\n        address owner,\\r\\n        address spender,\\r\\n        uint256 value,\\r\\n        uint256 deadline,\\r\\n        uint8 v,\\r\\n        bytes32 r,\\r\\n        bytes32 s\\r\\n    ) external;\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the current nonce for `owner`. This value must be\\r\\n     * included whenever a signature is generated for {permit}.\\r\\n     *\\r\\n     * Every successful call to {permit} increases ``owner``'s nonce by one. This\\r\\n     * prevents a signature from being used multiple times.\\r\\n     */\\r\\n    function nonces(address owner) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the domain separator used in the encoding of the signature for {permit}, as defined by {EIP712}.\\r\\n     */\\r\\n    // solhint-disable-next-line func-name-mixedcase\\r\\n    function DOMAIN_SEPARATOR() external view returns (bytes32);\\r\\n}\\r\\n\",\"keccak256\":\"0x2e01d1586d86fdcba868fa58ad50f017c51a2e96179a7f4fe1fbb9568a5ad2ac\",\"license\":\"MIT\"}},\"version\":1}",
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