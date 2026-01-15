export declare const Artifact_testRevert: {
  "contractName": "testRevert",
  "sourceName": "contracts/test.sol",
  "abi": [
    {
      "inputs": [],
      "name": "getValue",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "number",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060dc8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063209652551460375780638381f58a14603f575b600080fd5b603d6059565b005b60456078565b60405160509190609d565b60405180910390f35b60405162461bcd60e51b8152600401606f90607e565b60405180910390fd5b60005481565b6020808252600590820152646e6968616f60d81b604082015260600190565b9081526020019056fea2646970667358221220b07bad980f9dcce1bb1e673c2073e74719c3ed08a2594636471a2cf52a195fcd64736f6c63430008010033",
  "deployedBytecode": "0x6080604052348015600f57600080fd5b506004361060325760003560e01c8063209652551460375780638381f58a14603f575b600080fd5b603d6059565b005b60456078565b60405160509190609d565b60405180910390f35b60405162461bcd60e51b8152600401606f90607e565b60405180910390fd5b60005481565b6020808252600590820152646e6968616f60d81b604082015260600190565b9081526020019056fea2646970667358221220b07bad980f9dcce1bb1e673c2073e74719c3ed08a2594636471a2cf52a195fcd64736f6c63430008010033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/test.sol",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "evm": {
    "bytecode": {
      "generatedSources": [],
      "linkReferences": {},
      "object": "608060405234801561001057600080fd5b5060dc8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063209652551460375780638381f58a14603f575b600080fd5b603d6059565b005b60456078565b60405160509190609d565b60405180910390f35b60405162461bcd60e51b8152600401606f90607e565b60405180910390fd5b60005481565b6020808252600590820152646e6968616f60d81b604082015260600190565b9081526020019056fea2646970667358221220b07bad980f9dcce1bb1e673c2073e74719c3ed08a2594636471a2cf52a195fcd64736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0xDC DUP1 PUSH2 0x1F PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH1 0x32 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x20965255 EQ PUSH1 0x37 JUMPI DUP1 PUSH4 0x8381F58A EQ PUSH1 0x3F JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x3D PUSH1 0x59 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x45 PUSH1 0x78 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x50 SWAP2 SWAP1 PUSH1 0x9D JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x6F SWAP1 PUSH1 0x7E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x5 SWAP1 DUP3 ADD MSTORE PUSH5 0x6E6968616F PUSH1 0xD8 SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST SWAP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xB0 PUSH28 0xAD980F9DCCE1BB1E673C2073E74719C3ED08A2594636471A2CF52A19 0x5F 0xCD PUSH5 0x736F6C6343 STOP ADDMOD ADD STOP CALLER ",
      "sourceMap": "2510:119:47:-:0;;;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [
        {
          "ast": {
            "nodeType": "YulBlock",
            "src": "0:526:48",
            "statements": [
              {
                "nodeType": "YulBlock",
                "src": "6:3:48",
                "statements": []
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "188:154:48",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "205:9:48"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "216:2:48",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "198:6:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "198:21:48"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "198:21:48"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "239:9:48"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "250:2:48",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "235:3:48"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "235:18:48"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "255:1:48",
                            "type": "",
                            "value": "5"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "228:6:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "228:29:48"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "228:29:48"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "277:9:48"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "288:2:48",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "273:3:48"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "273:18:48"
                          },
                          {
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "293:7:48",
                            "type": "",
                            "value": "nihao"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "266:6:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "266:35:48"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "266:35:48"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "310:26:48",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "322:9:48"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "333:2:48",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "318:3:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "318:18:48"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "310:4:48"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_a13b3854a06355deb6fab86421145634846dca29993658c59d61ff3b60925748__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "165:9:48",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "179:4:48",
                    "type": ""
                  }
                ],
                "src": "14:328:48"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "448:76:48",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "458:26:48",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "470:9:48"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "481:2:48",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "466:3:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "466:18:48"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "458:4:48"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "500:9:48"
                          },
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "511:6:48"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "493:6:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "493:25:48"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "493:25:48"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "417:9:48",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "428:6:48",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "439:4:48",
                    "type": ""
                  }
                ],
                "src": "347:177:48"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_encode_tuple_t_stringliteral_a13b3854a06355deb6fab86421145634846dca29993658c59d61ff3b60925748__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 5)\n        mstore(add(headStart, 64), \"nihao\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n}",
          "id": 48,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "6080604052348015600f57600080fd5b506004361060325760003560e01c8063209652551460375780638381f58a14603f575b600080fd5b603d6059565b005b60456078565b60405160509190609d565b60405180910390f35b60405162461bcd60e51b8152600401606f90607e565b60405180910390fd5b60005481565b6020808252600590820152646e6968616f60d81b604082015260600190565b9081526020019056fea2646970667358221220b07bad980f9dcce1bb1e673c2073e74719c3ed08a2594636471a2cf52a195fcd64736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH1 0x32 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x20965255 EQ PUSH1 0x37 JUMPI DUP1 PUSH4 0x8381F58A EQ PUSH1 0x3F JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x3D PUSH1 0x59 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x45 PUSH1 0x78 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x50 SWAP2 SWAP1 PUSH1 0x9D JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x6F SWAP1 PUSH1 0x7E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x5 SWAP1 DUP3 ADD MSTORE PUSH5 0x6E6968616F PUSH1 0xD8 SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST SWAP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xB0 PUSH28 0xAD980F9DCCE1BB1E673C2073E74719C3ED08A2594636471A2CF52A19 0x5F 0xCD PUSH5 0x736F6C6343 STOP ADDMOD ADD STOP CALLER ",
      "sourceMap": "2510:119:47:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2565:61;;;:::i;:::-;;2537:21;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2565:61;2603:15;;-1:-1:-1;;;2603:15:47;;;;;;;:::i;:::-;;;;;;;;2537:21;;;;:::o;14:328:48:-;216:2;198:21;;;255:1;235:18;;;228:29;-1:-1:-1;;;288:2:48;273:18;;266:35;333:2;318:18;;188:154::o;347:177::-;493:25;;;481:2;466:18;;448:76::o"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "44000",
        "executionCost": "93",
        "totalCost": "44093"
      },
      "external": {
        "getValue()": "257",
        "number()": "1028"
      }
    },
    "methodIdentifiers": {
      "getValue()": "20965255",
      "number()": "8381f58a"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"getValue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"number\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/test.sol\":\"testRevert\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@4.9.6/\"]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/token/ERC20/IERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/IERC20.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\r\\n */\\r\\ninterface IERC20 {\\r\\n    /**\\r\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\r\\n     * another (`to`).\\r\\n     *\\r\\n     * Note that `value` may be zero.\\r\\n     */\\r\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\r\\n     * a call to {approve}. `value` is the new allowance.\\r\\n     */\\r\\n    event Approval(\\r\\n        address indexed owner,\\r\\n        address indexed spender,\\r\\n        uint256 value\\r\\n    );\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens in existence.\\r\\n     */\\r\\n    function totalSupply() external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens owned by `account`.\\r\\n     */\\r\\n    function balanceOf(address account) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from the caller's account to `to`.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transfer(address to, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the remaining number of tokens that `spender` will be\\r\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\r\\n     * zero by default.\\r\\n     *\\r\\n     * This value changes when {approve} or {transferFrom} are called.\\r\\n     */\\r\\n    function allowance(\\r\\n        address owner,\\r\\n        address spender\\r\\n    ) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\r\\n     * that someone may use both the old and the new allowance by unfortunate\\r\\n     * transaction ordering. One possible solution to mitigate this race\\r\\n     * condition is to first reduce the spender's allowance to 0 and set the\\r\\n     * desired value afterwards:\\r\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\r\\n     *\\r\\n     * Emits an {Approval} event.\\r\\n     */\\r\\n    function approve(address spender, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from `from` to `to` using the\\r\\n     * allowance mechanism. `amount` is then deducted from the caller's\\r\\n     * allowance.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 amount\\r\\n    ) external returns (bool);\\r\\n}\\r\\n\",\"keccak256\":\"0x0daeecf13274cee034f010e0b6d63166eae133e1b0f6f5ca1e6ade67b16c5808\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/IERC20Metadata.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../IERC20.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Interface for the optional metadata functions from the ERC20 standard.\\r\\n *\\r\\n * _Available since v4.1._\\r\\n */\\r\\ninterface IERC20Metadata is IERC20 {\\r\\n    /**\\r\\n     * @dev Returns the name of the token.\\r\\n     */\\r\\n    function name() external view returns (string memory);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the symbol of the token.\\r\\n     */\\r\\n    function symbol() external view returns (string memory);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the decimals places of the token.\\r\\n     */\\r\\n    function decimals() external view returns (uint8);\\r\\n}\\r\\n\",\"keccak256\":\"0x0270cb4e50d6bcdd780df229606076d39df796860d266b5426f374c36f34fe89\",\"license\":\"MIT\"},\"project/contracts/test.sol\":{\"content\":\"// SPDX-License-Identifier:MIT\\r\\n\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\nimport {\\r\\n    IERC20Metadata\\r\\n} from \\\"./openzeppelin_l/contracts/token/ERC20/extensions/IERC20Metadata.sol\\\";\\r\\nimport {IERC20} from \\\"./openzeppelin_l/contracts/token/ERC20/IERC20.sol\\\";\\r\\n/***\\r\\n * @dev:\\u6d4b\\u8bd5\\u5220\\u9664map\\u6570\\u636e\\u6d88\\u8017\\u7684gas\\r\\n */\\r\\n\\r\\ncontract testGasUsed {\\r\\n    mapping(uint256 => uint256) public NFTDeadline;\\r\\n    uint256 number;\\r\\n    address tokenAddress;\\r\\n\\r\\n    // \\u6d4b\\u8bd5\\u4e24\\u6b21\\uff0c\\u7b2c\\u4e00\\u6b21\\u5220\\u9664\\uff0c\\u7b2c\\u4e8c\\u6b21\\u4e0d\\u5220\\u9664\\uff0c\\u67e5\\u770b\\u6d88\\u8017gas\\r\\n    function pushData(uint256 _key, uint256 _value, bool _deleteData) public {\\r\\n        NFTDeadline[_key] = _value;\\r\\n        if (_deleteData) {\\r\\n            deleteData(_key);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function deleteData(uint256 _key) internal {\\r\\n        delete NFTDeadline[_key];\\r\\n    }\\r\\n\\r\\n    function getIERC20MetadataInterfaceId() public pure returns (bytes4) {\\r\\n        return type(IERC20Metadata).interfaceId;\\r\\n    }\\r\\n\\r\\n    function useCall(address tokenAddress) public view returns (string memory) {\\r\\n        bytes memory callData = abi.encodeWithSignature(\\\"symbol()\\\");\\r\\n        // \\u5982\\u679c\\u4f20\\u5165EOA\\u5730\\u5740\\uff0c\\u4f1a\\u8fd4\\u56desuccess\\uff0c\\u4f46\\u957f\\u5ea6\\u4e3a0\\r\\n        (bool success, bytes memory data) = tokenAddress.staticcall(callData);\\r\\n        if (success && data.length > 0) {\\r\\n            return abi.decode(data, (string));\\r\\n        }\\r\\n        return \\\"false\\\";\\r\\n    }\\r\\n\\r\\n    function testRevert() public {\\r\\n        revert(\\\"nihao\\\");\\r\\n        number = 1;\\r\\n    }\\r\\n\\r\\n    function getAddress() external pure returns (address) {\\r\\n        return address(0x1);\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testMapping {\\r\\n    mapping(address => uint8) public supportTokenAddress;\\r\\n\\r\\n    function init(address[] calldata tokenAddresses) public {\\r\\n        initTokenAddress(tokenAddresses);\\r\\n    }\\r\\n\\r\\n    function initTokenAddress(address[] calldata tokenAddresses) internal {\\r\\n        uint256 len = tokenAddresses.length;\\r\\n        for (uint256 i = 0; i < len; i++) {\\r\\n            supportTokenAddress[tokenAddresses[i]] = 1;\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testCallContractFunction {\\r\\n    function testInternalCallContractFunction(\\r\\n        address tokenAddress\\r\\n    ) public view returns (string memory) {\\r\\n        IERC20Metadata IERC20TokenAddress = IERC20Metadata(tokenAddress);\\r\\n        string memory symbol = IERC20TokenAddress.symbol();\\r\\n        return symbol;\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testInterfaceID {\\r\\n    function getIERC20MetadataInterfaceId() public pure returns (bytes4) {\\r\\n        return type(IERC20Metadata).interfaceId;\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testRevert {\\r\\n    uint256 public number;\\r\\n    function getValue() public {\\r\\n        revert(\\\"nihao\\\");\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x0f4439c927b41a31369fc89f6ac4f8e1d358f3a478f3e347589cd8942efc6019\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 9229,
        "contract": "project/contracts/test.sol:testRevert",
        "label": "number",
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