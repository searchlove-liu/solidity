export const Artifact_testMapping = /** @type {const} **/ ({
  "contractName": "testMapping",
  "sourceName": "contracts/test.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "tokenAddresses",
          "type": "address[]"
        }
      ],
      "name": "init",
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
        }
      ],
      "name": "supportTokenAddress",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5061022d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a92317b21461003b578063c6044c4614610064575b600080fd5b61004e610049366004610125565b610079565b60405161005b91906101c2565b60405180910390f35b610077610072366004610153565b61008e565b005b60006020819052908152604090205460ff1681565b610098828261009c565b5050565b8060005b8181101561011f5760016000808686858181106100cd57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906100e29190610125565b6001600160a01b031681526020810191909152604001600020805460ff191660ff9290921691909117905580610117816101d0565b9150506100a0565b50505050565b600060208284031215610136578081fd5b81356001600160a01b038116811461014c578182fd5b9392505050565b60008060208385031215610165578081fd5b823567ffffffffffffffff8082111561017c578283fd5b818501915085601f83011261018f578283fd5b81358181111561019d578384fd5b86602080830285010111156101b0578384fd5b60209290920196919550909350505050565b60ff91909116815260200190565b60006000198214156101f057634e487b7160e01b81526011600452602481fd5b506001019056fea2646970667358221220d90971ca1abbd88c8195b706204bb66e2324a2121d7f94ba4ec16917993ca78a64736f6c63430008010033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c8063a92317b21461003b578063c6044c4614610064575b600080fd5b61004e610049366004610125565b610079565b60405161005b91906101c2565b60405180910390f35b610077610072366004610153565b61008e565b005b60006020819052908152604090205460ff1681565b610098828261009c565b5050565b8060005b8181101561011f5760016000808686858181106100cd57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906100e29190610125565b6001600160a01b031681526020810191909152604001600020805460ff191660ff9290921691909117905580610117816101d0565b9150506100a0565b50505050565b600060208284031215610136578081fd5b81356001600160a01b038116811461014c578182fd5b9392505050565b60008060208385031215610165578081fd5b823567ffffffffffffffff8082111561017c578283fd5b818501915085601f83011261018f578283fd5b81358181111561019d578384fd5b86602080830285010111156101b0578384fd5b60209290920196919550909350505050565b60ff91909116815260200190565b60006000198214156101f057634e487b7160e01b81526011600452602481fd5b506001019056fea2646970667358221220d90971ca1abbd88c8195b706204bb66e2324a2121d7f94ba4ec16917993ca78a64736f6c63430008010033",
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
      "object": "608060405234801561001057600080fd5b5061022d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a92317b21461003b578063c6044c4614610064575b600080fd5b61004e610049366004610125565b610079565b60405161005b91906101c2565b60405180910390f35b610077610072366004610153565b61008e565b005b60006020819052908152604090205460ff1681565b610098828261009c565b5050565b8060005b8181101561011f5760016000808686858181106100cd57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906100e29190610125565b6001600160a01b031681526020810191909152604001600020805460ff191660ff9290921691909117905580610117816101d0565b9150506100a0565b50505050565b600060208284031215610136578081fd5b81356001600160a01b038116811461014c578182fd5b9392505050565b60008060208385031215610165578081fd5b823567ffffffffffffffff8082111561017c578283fd5b818501915085601f83011261018f578283fd5b81358181111561019d578384fd5b86602080830285010111156101b0578384fd5b60209290920196919550909350505050565b60ff91909116815260200190565b60006000198214156101f057634e487b7160e01b81526011600452602481fd5b506001019056fea2646970667358221220d90971ca1abbd88c8195b706204bb66e2324a2121d7f94ba4ec16917993ca78a64736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x22D DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x36 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0xA92317B2 EQ PUSH2 0x3B JUMPI DUP1 PUSH4 0xC6044C46 EQ PUSH2 0x64 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x4E PUSH2 0x49 CALLDATASIZE PUSH1 0x4 PUSH2 0x125 JUMP JUMPDEST PUSH2 0x79 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x5B SWAP2 SWAP1 PUSH2 0x1C2 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x77 PUSH2 0x72 CALLDATASIZE PUSH1 0x4 PUSH2 0x153 JUMP JUMPDEST PUSH2 0x8E JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP2 SWAP1 MSTORE SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH2 0x98 DUP3 DUP3 PUSH2 0x9C JUMP JUMPDEST POP POP JUMP JUMPDEST DUP1 PUSH1 0x0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x11F JUMPI PUSH1 0x1 PUSH1 0x0 DUP1 DUP7 DUP7 DUP6 DUP2 DUP2 LT PUSH2 0xCD JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST SWAP1 POP PUSH1 0x20 MUL ADD PUSH1 0x20 DUP2 ADD SWAP1 PUSH2 0xE2 SWAP2 SWAP1 PUSH2 0x125 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 MSTORE PUSH1 0x20 DUP2 ADD SWAP2 SWAP1 SWAP2 MSTORE PUSH1 0x40 ADD PUSH1 0x0 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0xFF SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE DUP1 PUSH2 0x117 DUP2 PUSH2 0x1D0 JUMP JUMPDEST SWAP2 POP POP PUSH2 0xA0 JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x136 JUMPI DUP1 DUP2 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0x14C JUMPI DUP2 DUP3 REVERT JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x20 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x165 JUMPI DUP1 DUP2 REVERT JUMPDEST DUP3 CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x17C JUMPI DUP3 DUP4 REVERT JUMPDEST DUP2 DUP6 ADD SWAP2 POP DUP6 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x18F JUMPI DUP3 DUP4 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x19D JUMPI DUP4 DUP5 REVERT JUMPDEST DUP7 PUSH1 0x20 DUP1 DUP4 MUL DUP6 ADD ADD GT ISZERO PUSH2 0x1B0 JUMPI DUP4 DUP5 REVERT JUMPDEST PUSH1 0x20 SWAP3 SWAP1 SWAP3 ADD SWAP7 SWAP2 SWAP6 POP SWAP1 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0xFF SWAP2 SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x0 NOT DUP3 EQ ISZERO PUSH2 0x1F0 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 DUP2 REVERT JUMPDEST POP PUSH1 0x1 ADD SWAP1 JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xD9 MULMOD PUSH18 0xCA1ABBD88C8195B706204BB66E2324A2121D PUSH32 0x94BA4EC16917993CA78A64736F6C634300080100330000000000000000000000 ",
      "sourceMap": "1564:444:47:-:0;;;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [
        {
          "ast": {
            "nodeType": "YulBlock",
            "src": "0:1423:48",
            "statements": [
              {
                "nodeType": "YulBlock",
                "src": "6:3:48",
                "statements": []
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "84:236:48",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "130:26:48",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "139:6:48"
                                },
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "147:6:48"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "132:6:48"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "132:22:48"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "132:22:48"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nodeType": "YulIdentifier",
                                "src": "105:7:48"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "114:9:48"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "101:3:48"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "101:23:48"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "126:2:48",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "97:3:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "97:32:48"
                      },
                      "nodeType": "YulIf",
                      "src": "94:2:48"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "165:36:48",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "191:9:48"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "178:12:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "178:23:48"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nodeType": "YulTypedName",
                          "src": "169:5:48",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "264:26:48",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "273:6:48"
                                },
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "281:6:48"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "266:6:48"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "266:22:48"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "266:22:48"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "223:5:48"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "234:5:48"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "249:3:48",
                                            "type": "",
                                            "value": "160"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "254:1:48",
                                            "type": "",
                                            "value": "1"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nodeType": "YulIdentifier",
                                          "src": "245:3:48"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "245:11:48"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "258:1:48",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sub",
                                      "nodeType": "YulIdentifier",
                                      "src": "241:3:48"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "241:19:48"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "230:3:48"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "230:31:48"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "220:2:48"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "220:42:48"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "213:6:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "213:50:48"
                      },
                      "nodeType": "YulIf",
                      "src": "210:2:48"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "299:15:48",
                      "value": {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "309:5:48"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "299:6:48"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_address",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "50:9:48",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "61:7:48",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "73:6:48",
                    "type": ""
                  }
                ],
                "src": "14:306:48"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "430:561:48",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "476:26:48",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value1",
                                  "nodeType": "YulIdentifier",
                                  "src": "485:6:48"
                                },
                                {
                                  "name": "value1",
                                  "nodeType": "YulIdentifier",
                                  "src": "493:6:48"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "478:6:48"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "478:22:48"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "478:22:48"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nodeType": "YulIdentifier",
                                "src": "451:7:48"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "460:9:48"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "447:3:48"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "447:23:48"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "472:2:48",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "443:3:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "443:32:48"
                      },
                      "nodeType": "YulIf",
                      "src": "440:2:48"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "511:37:48",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "538:9:48"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "525:12:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "525:23:48"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "515:6:48",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "557:28:48",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "567:18:48",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      },
                      "variables": [
                        {
                          "name": "_1",
                          "nodeType": "YulTypedName",
                          "src": "561:2:48",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "612:26:48",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value1",
                                  "nodeType": "YulIdentifier",
                                  "src": "621:6:48"
                                },
                                {
                                  "name": "value1",
                                  "nodeType": "YulIdentifier",
                                  "src": "629:6:48"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "614:6:48"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "614:22:48"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "614:22:48"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "600:6:48"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "608:2:48"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "597:2:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "597:14:48"
                      },
                      "nodeType": "YulIf",
                      "src": "594:2:48"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "647:32:48",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "661:9:48"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "672:6:48"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "657:3:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "657:22:48"
                      },
                      "variables": [
                        {
                          "name": "_2",
                          "nodeType": "YulTypedName",
                          "src": "651:2:48",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "727:26:48",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value1",
                                  "nodeType": "YulIdentifier",
                                  "src": "736:6:48"
                                },
                                {
                                  "name": "value1",
                                  "nodeType": "YulIdentifier",
                                  "src": "744:6:48"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "729:6:48"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "729:22:48"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "729:22:48"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "_2",
                                    "nodeType": "YulIdentifier",
                                    "src": "706:2:48"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "710:4:48",
                                    "type": "",
                                    "value": "0x1f"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "702:3:48"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "702:13:48"
                              },
                              {
                                "name": "dataEnd",
                                "nodeType": "YulIdentifier",
                                "src": "717:7:48"
                              }
                            ],
                            "functionName": {
                              "name": "slt",
                              "nodeType": "YulIdentifier",
                              "src": "698:3:48"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "698:27:48"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "691:6:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "691:35:48"
                      },
                      "nodeType": "YulIf",
                      "src": "688:2:48"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "762:30:48",
                      "value": {
                        "arguments": [
                          {
                            "name": "_2",
                            "nodeType": "YulIdentifier",
                            "src": "789:2:48"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "776:12:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "776:16:48"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nodeType": "YulTypedName",
                          "src": "766:6:48",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "819:26:48",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value1",
                                  "nodeType": "YulIdentifier",
                                  "src": "828:6:48"
                                },
                                {
                                  "name": "value1",
                                  "nodeType": "YulIdentifier",
                                  "src": "836:6:48"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "821:6:48"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "821:22:48"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "821:22:48"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "807:6:48"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "815:2:48"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "804:2:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "804:14:48"
                      },
                      "nodeType": "YulIf",
                      "src": "801:2:48"
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "904:26:48",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value1",
                                  "nodeType": "YulIdentifier",
                                  "src": "913:6:48"
                                },
                                {
                                  "name": "value1",
                                  "nodeType": "YulIdentifier",
                                  "src": "921:6:48"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "906:6:48"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "906:22:48"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "906:22:48"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "_2",
                                    "nodeType": "YulIdentifier",
                                    "src": "868:2:48"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "length",
                                        "nodeType": "YulIdentifier",
                                        "src": "876:6:48"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "884:2:48",
                                        "type": "",
                                        "value": "32"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mul",
                                      "nodeType": "YulIdentifier",
                                      "src": "872:3:48"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "872:15:48"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "864:3:48"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "864:24:48"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "890:2:48",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "860:3:48"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "860:33:48"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "895:7:48"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "857:2:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "857:46:48"
                      },
                      "nodeType": "YulIf",
                      "src": "854:2:48"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "939:21:48",
                      "value": {
                        "arguments": [
                          {
                            "name": "_2",
                            "nodeType": "YulIdentifier",
                            "src": "953:2:48"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "957:2:48",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "949:3:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "949:11:48"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "939:6:48"
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "969:16:48",
                      "value": {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "979:6:48"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "969:6:48"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_array$_t_address_$dyn_calldata_ptr",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "388:9:48",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "399:7:48",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "411:6:48",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nodeType": "YulTypedName",
                    "src": "419:6:48",
                    "type": ""
                  }
                ],
                "src": "325:666:48"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1093:87:48",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "1103:26:48",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1115:9:48"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1126:2:48",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1111:3:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1111:18:48"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "1103:4:48"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1145:9:48"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "1160:6:48"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1168:4:48",
                                "type": "",
                                "value": "0xff"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "1156:3:48"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1156:17:48"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1138:6:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1138:36:48"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1138:36:48"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1062:9:48",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "1073:6:48",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "1084:4:48",
                    "type": ""
                  }
                ],
                "src": "996:184:48"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1232:189:48",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1271:115:48",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "ret",
                                  "nodeType": "YulIdentifier",
                                  "src": "1292:3:48"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1301:3:48",
                                      "type": "",
                                      "value": "224"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1306:10:48",
                                      "type": "",
                                      "value": "0x4e487b71"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "1297:3:48"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1297:20:48"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nodeType": "YulIdentifier",
                                "src": "1285:6:48"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1285:33:48"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1285:33:48"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1338:1:48",
                                  "type": "",
                                  "value": "4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1341:4:48",
                                  "type": "",
                                  "value": "0x11"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nodeType": "YulIdentifier",
                                "src": "1331:6:48"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1331:15:48"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1331:15:48"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "ret",
                                  "nodeType": "YulIdentifier",
                                  "src": "1366:3:48"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1371:4:48",
                                  "type": "",
                                  "value": "0x24"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "1359:6:48"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1359:17:48"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1359:17:48"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1248:5:48"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1259:1:48",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "1255:3:48"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1255:6:48"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "1245:2:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1245:17:48"
                      },
                      "nodeType": "YulIf",
                      "src": "1242:2:48"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1395:20:48",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1406:5:48"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1413:1:48",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1402:3:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1402:13:48"
                      },
                      "variableNames": [
                        {
                          "name": "ret",
                          "nodeType": "YulIdentifier",
                          "src": "1395:3:48"
                        }
                      ]
                    }
                  ]
                },
                "name": "increment_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "1214:5:48",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "ret",
                    "nodeType": "YulTypedName",
                    "src": "1224:3:48",
                    "type": ""
                  }
                ],
                "src": "1185:236:48"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        let value := calldataload(headStart)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(value0, value0) }\n        value0 := value\n    }\n    function abi_decode_tuple_t_array$_t_address_$dyn_calldata_ptr(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value1, value1) }\n        let offset := calldataload(headStart)\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(value1, value1) }\n        let _2 := add(headStart, offset)\n        if iszero(slt(add(_2, 0x1f), dataEnd)) { revert(value1, value1) }\n        let length := calldataload(_2)\n        if gt(length, _1) { revert(value1, value1) }\n        if gt(add(add(_2, mul(length, 32)), 32), dataEnd) { revert(value1, value1) }\n        value0 := add(_2, 32)\n        value1 := length\n    }\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xff))\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0))\n        {\n            mstore(ret, shl(224, 0x4e487b71))\n            mstore(4, 0x11)\n            revert(ret, 0x24)\n        }\n        ret := add(value, 1)\n    }\n}",
          "id": 48,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "608060405234801561001057600080fd5b50600436106100365760003560e01c8063a92317b21461003b578063c6044c4614610064575b600080fd5b61004e610049366004610125565b610079565b60405161005b91906101c2565b60405180910390f35b610077610072366004610153565b61008e565b005b60006020819052908152604090205460ff1681565b610098828261009c565b5050565b8060005b8181101561011f5760016000808686858181106100cd57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906100e29190610125565b6001600160a01b031681526020810191909152604001600020805460ff191660ff9290921691909117905580610117816101d0565b9150506100a0565b50505050565b600060208284031215610136578081fd5b81356001600160a01b038116811461014c578182fd5b9392505050565b60008060208385031215610165578081fd5b823567ffffffffffffffff8082111561017c578283fd5b818501915085601f83011261018f578283fd5b81358181111561019d578384fd5b86602080830285010111156101b0578384fd5b60209290920196919550909350505050565b60ff91909116815260200190565b60006000198214156101f057634e487b7160e01b81526011600452602481fd5b506001019056fea2646970667358221220d90971ca1abbd88c8195b706204bb66e2324a2121d7f94ba4ec16917993ca78a64736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x36 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0xA92317B2 EQ PUSH2 0x3B JUMPI DUP1 PUSH4 0xC6044C46 EQ PUSH2 0x64 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x4E PUSH2 0x49 CALLDATASIZE PUSH1 0x4 PUSH2 0x125 JUMP JUMPDEST PUSH2 0x79 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x5B SWAP2 SWAP1 PUSH2 0x1C2 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x77 PUSH2 0x72 CALLDATASIZE PUSH1 0x4 PUSH2 0x153 JUMP JUMPDEST PUSH2 0x8E JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP2 SWAP1 MSTORE SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH2 0x98 DUP3 DUP3 PUSH2 0x9C JUMP JUMPDEST POP POP JUMP JUMPDEST DUP1 PUSH1 0x0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x11F JUMPI PUSH1 0x1 PUSH1 0x0 DUP1 DUP7 DUP7 DUP6 DUP2 DUP2 LT PUSH2 0xCD JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST SWAP1 POP PUSH1 0x20 MUL ADD PUSH1 0x20 DUP2 ADD SWAP1 PUSH2 0xE2 SWAP2 SWAP1 PUSH2 0x125 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 MSTORE PUSH1 0x20 DUP2 ADD SWAP2 SWAP1 SWAP2 MSTORE PUSH1 0x40 ADD PUSH1 0x0 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0xFF SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE DUP1 PUSH2 0x117 DUP2 PUSH2 0x1D0 JUMP JUMPDEST SWAP2 POP POP PUSH2 0xA0 JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x136 JUMPI DUP1 DUP2 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0x14C JUMPI DUP2 DUP3 REVERT JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x20 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x165 JUMPI DUP1 DUP2 REVERT JUMPDEST DUP3 CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x17C JUMPI DUP3 DUP4 REVERT JUMPDEST DUP2 DUP6 ADD SWAP2 POP DUP6 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x18F JUMPI DUP3 DUP4 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x19D JUMPI DUP4 DUP5 REVERT JUMPDEST DUP7 PUSH1 0x20 DUP1 DUP4 MUL DUP6 ADD ADD GT ISZERO PUSH2 0x1B0 JUMPI DUP4 DUP5 REVERT JUMPDEST PUSH1 0x20 SWAP3 SWAP1 SWAP3 ADD SWAP7 SWAP2 SWAP6 POP SWAP1 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0xFF SWAP2 SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x0 NOT DUP3 EQ ISZERO PUSH2 0x1F0 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 DUP2 REVERT JUMPDEST POP PUSH1 0x1 ADD SWAP1 JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xD9 MULMOD PUSH18 0xCA1ABBD88C8195B706204BB66E2324A2121D PUSH32 0x94BA4EC16917993CA78A64736F6C634300080100330000000000000000000000 ",
      "sourceMap": "1564:444:47:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1592:52;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1653:107;;;;;;:::i;:::-;;:::i;:::-;;1592:52;;;;;;;;;;;;;;;;:::o;1653:107::-;1720:32;1737:14;;1720:16;:32::i;:::-;1653:107;;:::o;1768:237::-;1863:14;1849:11;1895:103;1919:3;1915:1;:7;1895:103;;;1985:1;1944:19;:38;1964:14;;1979:1;1964:17;;;;;-1:-1:-1;;;1964:17:47;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;1944:38:47;;;;;;;;;;;;-1:-1:-1;1944:38:47;:42;;-1:-1:-1;;1944:42:47;;;;;;;;;;;;1924:3;;;;:::i;:::-;;;;1895:103;;;;1768:237;;;:::o;14:306:48:-;;126:2;114:9;105:7;101:23;97:32;94:2;;;147:6;139;132:22;94:2;178:23;;-1:-1:-1;;;;;230:31:48;;220:42;;210:2;;281:6;273;266:22;210:2;309:5;84:236;-1:-1:-1;;;84:236:48:o;325:666::-;;;472:2;460:9;451:7;447:23;443:32;440:2;;;493:6;485;478:22;440:2;538:9;525:23;567:18;608:2;600:6;597:14;594:2;;;629:6;621;614:22;594:2;672:6;661:9;657:22;647:32;;717:7;710:4;706:2;702:13;698:27;688:2;;744:6;736;729:22;688:2;789;776:16;815:2;807:6;804:14;801:2;;;836:6;828;821:22;801:2;895:7;890:2;884;876:6;872:15;868:2;864:24;860:33;857:46;854:2;;;921:6;913;906:22;854:2;957;949:11;;;;;979:6;;-1:-1:-1;430:561:48;;-1:-1:-1;;;;430:561:48:o;996:184::-;1168:4;1156:17;;;;1138:36;;1126:2;1111:18;;1093:87::o;1185:236::-;;-1:-1:-1;;1245:17:48;;1242:2;;;-1:-1:-1;;;1285:33:48;;1341:4;1338:1;1331:15;1371:4;1292:3;1359:17;1242:2;-1:-1:-1;1413:1:48;1402:13;;1232:189::o"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "111400",
        "executionCost": "159",
        "totalCost": "111559"
      },
      "external": {
        "init(address[])": "infinite",
        "supportTokenAddress(address)": "1216"
      },
      "internal": {
        "initTokenAddress(address[] calldata)": "infinite"
      }
    },
    "methodIdentifiers": {
      "init(address[])": "c6044c46",
      "supportTokenAddress(address)": "a92317b2"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"}],\"name\":\"init\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"supportTokenAddress\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/test.sol\":\"testMapping\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@4.9.6/\"]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/token/ERC20/IERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/IERC20.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\r\\n */\\r\\ninterface IERC20 {\\r\\n    /**\\r\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\r\\n     * another (`to`).\\r\\n     *\\r\\n     * Note that `value` may be zero.\\r\\n     */\\r\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\r\\n     * a call to {approve}. `value` is the new allowance.\\r\\n     */\\r\\n    event Approval(\\r\\n        address indexed owner,\\r\\n        address indexed spender,\\r\\n        uint256 value\\r\\n    );\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens in existence.\\r\\n     */\\r\\n    function totalSupply() external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens owned by `account`.\\r\\n     */\\r\\n    function balanceOf(address account) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from the caller's account to `to`.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transfer(address to, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the remaining number of tokens that `spender` will be\\r\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\r\\n     * zero by default.\\r\\n     *\\r\\n     * This value changes when {approve} or {transferFrom} are called.\\r\\n     */\\r\\n    function allowance(\\r\\n        address owner,\\r\\n        address spender\\r\\n    ) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\r\\n     * that someone may use both the old and the new allowance by unfortunate\\r\\n     * transaction ordering. One possible solution to mitigate this race\\r\\n     * condition is to first reduce the spender's allowance to 0 and set the\\r\\n     * desired value afterwards:\\r\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\r\\n     *\\r\\n     * Emits an {Approval} event.\\r\\n     */\\r\\n    function approve(address spender, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from `from` to `to` using the\\r\\n     * allowance mechanism. `amount` is then deducted from the caller's\\r\\n     * allowance.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 amount\\r\\n    ) external returns (bool);\\r\\n}\\r\\n\",\"keccak256\":\"0x0daeecf13274cee034f010e0b6d63166eae133e1b0f6f5ca1e6ade67b16c5808\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/IERC20Metadata.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../IERC20.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Interface for the optional metadata functions from the ERC20 standard.\\r\\n *\\r\\n * _Available since v4.1._\\r\\n */\\r\\ninterface IERC20Metadata is IERC20 {\\r\\n    /**\\r\\n     * @dev Returns the name of the token.\\r\\n     */\\r\\n    function name() external view returns (string memory);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the symbol of the token.\\r\\n     */\\r\\n    function symbol() external view returns (string memory);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the decimals places of the token.\\r\\n     */\\r\\n    function decimals() external view returns (uint8);\\r\\n}\\r\\n\",\"keccak256\":\"0x0270cb4e50d6bcdd780df229606076d39df796860d266b5426f374c36f34fe89\",\"license\":\"MIT\"},\"project/contracts/test.sol\":{\"content\":\"// SPDX-License-Identifier:MIT\\r\\n\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\nimport {\\r\\n    IERC20Metadata\\r\\n} from \\\"./openzeppelin_l/contracts/token/ERC20/extensions/IERC20Metadata.sol\\\";\\r\\nimport {IERC20} from \\\"./openzeppelin_l/contracts/token/ERC20/IERC20.sol\\\";\\r\\n/***\\r\\n * @dev:\\u6d4b\\u8bd5\\u5220\\u9664map\\u6570\\u636e\\u6d88\\u8017\\u7684gas\\r\\n */\\r\\n\\r\\ncontract testGasUsed {\\r\\n    mapping(uint256 => uint256) public NFTDeadline;\\r\\n    uint256 number;\\r\\n    address tokenAddress;\\r\\n\\r\\n    // \\u6d4b\\u8bd5\\u4e24\\u6b21\\uff0c\\u7b2c\\u4e00\\u6b21\\u5220\\u9664\\uff0c\\u7b2c\\u4e8c\\u6b21\\u4e0d\\u5220\\u9664\\uff0c\\u67e5\\u770b\\u6d88\\u8017gas\\r\\n    function pushData(uint256 _key, uint256 _value, bool _deleteData) public {\\r\\n        NFTDeadline[_key] = _value;\\r\\n        if (_deleteData) {\\r\\n            deleteData(_key);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function deleteData(uint256 _key) internal {\\r\\n        delete NFTDeadline[_key];\\r\\n    }\\r\\n\\r\\n    function getIERC20MetadataInterfaceId() public pure returns (bytes4) {\\r\\n        return type(IERC20Metadata).interfaceId;\\r\\n    }\\r\\n\\r\\n    function useCall(address tokenAddress) public view returns (string memory) {\\r\\n        bytes memory callData = abi.encodeWithSignature(\\\"symbol()\\\");\\r\\n        // \\u5982\\u679c\\u4f20\\u5165EOA\\u5730\\u5740\\uff0c\\u4f1a\\u8fd4\\u56desuccess\\uff0c\\u4f46\\u957f\\u5ea6\\u4e3a0\\r\\n        (bool success, bytes memory data) = tokenAddress.staticcall(callData);\\r\\n        if (success && data.length > 0) {\\r\\n            return abi.decode(data, (string));\\r\\n        }\\r\\n        return \\\"false\\\";\\r\\n    }\\r\\n\\r\\n    function testRevert() public {\\r\\n        revert(\\\"nihao\\\");\\r\\n        number = 1;\\r\\n    }\\r\\n\\r\\n    function getAddress() external pure returns (address) {\\r\\n        return address(0x1);\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testMapping {\\r\\n    mapping(address => uint8) public supportTokenAddress;\\r\\n\\r\\n    function init(address[] calldata tokenAddresses) public {\\r\\n        initTokenAddress(tokenAddresses);\\r\\n    }\\r\\n\\r\\n    function initTokenAddress(address[] calldata tokenAddresses) internal {\\r\\n        uint256 len = tokenAddresses.length;\\r\\n        for (uint256 i = 0; i < len; i++) {\\r\\n            supportTokenAddress[tokenAddresses[i]] = 1;\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testCallContractFunction {\\r\\n    function testInternalCallContractFunction(\\r\\n        address tokenAddress\\r\\n    ) public view returns (string memory) {\\r\\n        IERC20Metadata IERC20TokenAddress = IERC20Metadata(tokenAddress);\\r\\n        string memory symbol = IERC20TokenAddress.symbol();\\r\\n        return symbol;\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testInterfaceID {\\r\\n    function getIERC20MetadataInterfaceId() public pure returns (bytes4) {\\r\\n        return type(IERC20Metadata).interfaceId;\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testRevert {\\r\\n    uint256 public number;\\r\\n    function getValue() public {\\r\\n        revert(\\\"nihao\\\");\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x0f4439c927b41a31369fc89f6ac4f8e1d358f3a478f3e347589cd8942efc6019\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 9147,
        "contract": "project/contracts/test.sol:testMapping",
        "label": "supportTokenAddress",
        "offset": 0,
        "slot": "0",
        "type": "t_mapping(t_address,t_uint8)"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_mapping(t_address,t_uint8)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => uint8)",
        "numberOfBytes": "32",
        "value": "t_uint8"
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