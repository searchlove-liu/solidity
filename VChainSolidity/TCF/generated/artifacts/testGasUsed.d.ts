export declare const Artifact_testGasUsed: {
  "contractName": "testGasUsed",
  "sourceName": "contracts/testGasUsed.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "NFTDeadline",
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
          "name": "_key",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_deleteData",
          "type": "bool"
        }
      ],
      "name": "pushData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5061022a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063581fe0371461003b578063ff51c6ba14610057575b600080fd5b61005560048036038101906100509190610137565b610087565b005b610071600480360381019061006c919061010e565b6100b3565b60405161007e9190610195565b60405180910390f35b816000808581526020019081526020016000208190555080156100ae576100ad836100cb565b5b505050565b60006020528060005260406000206000915090505481565b6000808281526020019081526020016000206000905550565b6000813590506100f3816101c6565b92915050565b600081359050610108816101dd565b92915050565b60006020828403121561012057600080fd5b600061012e848285016100f9565b91505092915050565b60008060006060848603121561014c57600080fd5b600061015a868287016100f9565b935050602061016b868287016100f9565b925050604061017c868287016100e4565b9150509250925092565b61018f816101bc565b82525050565b60006020820190506101aa6000830184610186565b92915050565b60008115159050919050565b6000819050919050565b6101cf816101b0565b81146101da57600080fd5b50565b6101e6816101bc565b81146101f157600080fd5b5056fea26469706673582212208ff62484b2fa946cb0cd6ac08eed0960e4b2d9a0409fabd825bcd3e5f7639f6a64736f6c63430008010033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c8063581fe0371461003b578063ff51c6ba14610057575b600080fd5b61005560048036038101906100509190610137565b610087565b005b610071600480360381019061006c919061010e565b6100b3565b60405161007e9190610195565b60405180910390f35b816000808581526020019081526020016000208190555080156100ae576100ad836100cb565b5b505050565b60006020528060005260406000206000915090505481565b6000808281526020019081526020016000206000905550565b6000813590506100f3816101c6565b92915050565b600081359050610108816101dd565b92915050565b60006020828403121561012057600080fd5b600061012e848285016100f9565b91505092915050565b60008060006060848603121561014c57600080fd5b600061015a868287016100f9565b935050602061016b868287016100f9565b925050604061017c868287016100e4565b9150509250925092565b61018f816101bc565b82525050565b60006020820190506101aa6000830184610186565b92915050565b60008115159050919050565b6000819050919050565b6101cf816101b0565b81146101da57600080fd5b50565b6101e6816101bc565b81146101f157600080fd5b5056fea26469706673582212208ff62484b2fa946cb0cd6ac08eed0960e4b2d9a0409fabd825bcd3e5f7639f6a64736f6c63430008010033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/testGasUsed.sol",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "evm": {
    "bytecode": {
      "generatedSources": [],
      "linkReferences": {},
      "object": "608060405234801561001057600080fd5b5061022a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063581fe0371461003b578063ff51c6ba14610057575b600080fd5b61005560048036038101906100509190610137565b610087565b005b610071600480360381019061006c919061010e565b6100b3565b60405161007e9190610195565b60405180910390f35b816000808581526020019081526020016000208190555080156100ae576100ad836100cb565b5b505050565b60006020528060005260406000206000915090505481565b6000808281526020019081526020016000206000905550565b6000813590506100f3816101c6565b92915050565b600081359050610108816101dd565b92915050565b60006020828403121561012057600080fd5b600061012e848285016100f9565b91505092915050565b60008060006060848603121561014c57600080fd5b600061015a868287016100f9565b935050602061016b868287016100f9565b925050604061017c868287016100e4565b9150509250925092565b61018f816101bc565b82525050565b60006020820190506101aa6000830184610186565b92915050565b60008115159050919050565b6000819050919050565b6101cf816101b0565b81146101da57600080fd5b50565b6101e6816101bc565b81146101f157600080fd5b5056fea26469706673582212208ff62484b2fa946cb0cd6ac08eed0960e4b2d9a0409fabd825bcd3e5f7639f6a64736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x22A DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x36 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x581FE037 EQ PUSH2 0x3B JUMPI DUP1 PUSH4 0xFF51C6BA EQ PUSH2 0x57 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x55 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x50 SWAP2 SWAP1 PUSH2 0x137 JUMP JUMPDEST PUSH2 0x87 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x71 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x6C SWAP2 SWAP1 PUSH2 0x10E JUMP JUMPDEST PUSH2 0xB3 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x7E SWAP2 SWAP1 PUSH2 0x195 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST DUP2 PUSH1 0x0 DUP1 DUP6 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP1 ISZERO PUSH2 0xAE JUMPI PUSH2 0xAD DUP4 PUSH2 0xCB JUMP JUMPDEST JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SWAP1 POP SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0xF3 DUP2 PUSH2 0x1C6 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x108 DUP2 PUSH2 0x1DD JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x120 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x12E DUP5 DUP3 DUP6 ADD PUSH2 0xF9 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x14C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x15A DUP7 DUP3 DUP8 ADD PUSH2 0xF9 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0x16B DUP7 DUP3 DUP8 ADD PUSH2 0xF9 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 PUSH2 0x17C DUP7 DUP3 DUP8 ADD PUSH2 0xE4 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH2 0x18F DUP2 PUSH2 0x1BC JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1AA PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x186 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x1CF DUP2 PUSH2 0x1B0 JUMP JUMPDEST DUP2 EQ PUSH2 0x1DA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x1E6 DUP2 PUSH2 0x1BC JUMP JUMPDEST DUP2 EQ PUSH2 0x1F1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 DUP16 0xF6 0x24 DUP5 0xB2 STATICCALL SWAP5 PUSH13 0xB0CD6AC08EED0960E4B2D9A040 SWAP16 0xAB 0xD8 0x25 0xBC 0xD3 0xE5 0xF7 PUSH4 0x9F6A6473 PUSH16 0x6C634300080100330000000000000000 ",
      "sourceMap": "109:432:10:-:0;;;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [
        {
          "ast": {
            "nodeType": "YulBlock",
            "src": "0:1889:11",
            "statements": [
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "56:84:11",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "66:29:11",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "88:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "75:12:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "75:20:11"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "66:5:11"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "128:5:11"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_t_bool",
                          "nodeType": "YulIdentifier",
                          "src": "104:23:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "104:30:11"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "104:30:11"
                    }
                  ]
                },
                "name": "abi_decode_t_bool",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nodeType": "YulTypedName",
                    "src": "34:6:11",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nodeType": "YulTypedName",
                    "src": "42:3:11",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "50:5:11",
                    "type": ""
                  }
                ],
                "src": "7:133:11"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "198:87:11",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "208:29:11",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "230:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "217:12:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "217:20:11"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "208:5:11"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "273:5:11"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "246:26:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "246:33:11"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "246:33:11"
                    }
                  ]
                },
                "name": "abi_decode_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nodeType": "YulTypedName",
                    "src": "176:6:11",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nodeType": "YulTypedName",
                    "src": "184:3:11",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "192:5:11",
                    "type": ""
                  }
                ],
                "src": "146:139:11"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "357:196:11",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "403:16:11",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "412:1:11",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "415:1:11",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "405:6:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "405:12:11"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "405:12:11"
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
                                "src": "378:7:11"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "387:9:11"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "374:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "374:23:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "399:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "370:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "370:32:11"
                      },
                      "nodeType": "YulIf",
                      "src": "367:2:11"
                    },
                    {
                      "nodeType": "YulBlock",
                      "src": "429:117:11",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "444:15:11",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "458:1:11",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nodeType": "YulTypedName",
                              "src": "448:6:11",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "473:63:11",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "508:9:11"
                                  },
                                  {
                                    "name": "offset",
                                    "nodeType": "YulIdentifier",
                                    "src": "519:6:11"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "504:3:11"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "504:22:11"
                              },
                              {
                                "name": "dataEnd",
                                "nodeType": "YulIdentifier",
                                "src": "528:7:11"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "483:20:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "483:53:11"
                          },
                          "variableNames": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "473:6:11"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "327:9:11",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "338:7:11",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "350:6:11",
                    "type": ""
                  }
                ],
                "src": "291:262:11"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "656:449:11",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "702:16:11",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "711:1:11",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "714:1:11",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "704:6:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "704:12:11"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "704:12:11"
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
                                "src": "677:7:11"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "686:9:11"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "673:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "673:23:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "698:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "669:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "669:32:11"
                      },
                      "nodeType": "YulIf",
                      "src": "666:2:11"
                    },
                    {
                      "nodeType": "YulBlock",
                      "src": "728:117:11",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "743:15:11",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "757:1:11",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nodeType": "YulTypedName",
                              "src": "747:6:11",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "772:63:11",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "807:9:11"
                                  },
                                  {
                                    "name": "offset",
                                    "nodeType": "YulIdentifier",
                                    "src": "818:6:11"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "803:3:11"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "803:22:11"
                              },
                              {
                                "name": "dataEnd",
                                "nodeType": "YulIdentifier",
                                "src": "827:7:11"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "782:20:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "782:53:11"
                          },
                          "variableNames": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "772:6:11"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nodeType": "YulBlock",
                      "src": "855:118:11",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "870:16:11",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "884:2:11",
                            "type": "",
                            "value": "32"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nodeType": "YulTypedName",
                              "src": "874:6:11",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "900:63:11",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "935:9:11"
                                  },
                                  {
                                    "name": "offset",
                                    "nodeType": "YulIdentifier",
                                    "src": "946:6:11"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "931:3:11"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "931:22:11"
                              },
                              {
                                "name": "dataEnd",
                                "nodeType": "YulIdentifier",
                                "src": "955:7:11"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "910:20:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "910:53:11"
                          },
                          "variableNames": [
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "900:6:11"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nodeType": "YulBlock",
                      "src": "983:115:11",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "998:16:11",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1012:2:11",
                            "type": "",
                            "value": "64"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nodeType": "YulTypedName",
                              "src": "1002:6:11",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "1028:60:11",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "1060:9:11"
                                  },
                                  {
                                    "name": "offset",
                                    "nodeType": "YulIdentifier",
                                    "src": "1071:6:11"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1056:3:11"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1056:22:11"
                              },
                              {
                                "name": "dataEnd",
                                "nodeType": "YulIdentifier",
                                "src": "1080:7:11"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_bool",
                              "nodeType": "YulIdentifier",
                              "src": "1038:17:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1038:50:11"
                          },
                          "variableNames": [
                            {
                              "name": "value2",
                              "nodeType": "YulIdentifier",
                              "src": "1028:6:11"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_uint256t_uint256t_bool",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "610:9:11",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "621:7:11",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "633:6:11",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nodeType": "YulTypedName",
                    "src": "641:6:11",
                    "type": ""
                  },
                  {
                    "name": "value2",
                    "nodeType": "YulTypedName",
                    "src": "649:6:11",
                    "type": ""
                  }
                ],
                "src": "559:546:11"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1176:53:11",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "1193:3:11"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1216:5:11"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "1198:17:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1198:24:11"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1186:6:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1186:37:11"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1186:37:11"
                    }
                  ]
                },
                "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "1164:5:11",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nodeType": "YulTypedName",
                    "src": "1171:3:11",
                    "type": ""
                  }
                ],
                "src": "1111:118:11"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1333:124:11",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "1343:26:11",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1355:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1366:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1351:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1351:18:11"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "1343:4:11"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1423:6:11"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1436:9:11"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1447:1:11",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1432:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1432:17:11"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                          "nodeType": "YulIdentifier",
                          "src": "1379:43:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1379:71:11"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1379:71:11"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1305:9:11",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "1317:6:11",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "1328:4:11",
                    "type": ""
                  }
                ],
                "src": "1235:222:11"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1505:48:11",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "1515:32:11",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1540:5:11"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "1533:6:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1533:13:11"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "1526:6:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1526:21:11"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nodeType": "YulIdentifier",
                          "src": "1515:7:11"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_bool",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "1487:5:11",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nodeType": "YulTypedName",
                    "src": "1497:7:11",
                    "type": ""
                  }
                ],
                "src": "1463:90:11"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1604:32:11",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "1614:16:11",
                      "value": {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1625:5:11"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nodeType": "YulIdentifier",
                          "src": "1614:7:11"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "1586:5:11",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nodeType": "YulTypedName",
                    "src": "1596:7:11",
                    "type": ""
                  }
                ],
                "src": "1559:77:11"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1682:76:11",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1736:16:11",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1745:1:11",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1748:1:11",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "1738:6:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1738:12:11"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1738:12:11"
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
                                "src": "1705:5:11"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "1727:5:11"
                                  }
                                ],
                                "functionName": {
                                  "name": "cleanup_t_bool",
                                  "nodeType": "YulIdentifier",
                                  "src": "1712:14:11"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1712:21:11"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "1702:2:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1702:32:11"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "1695:6:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1695:40:11"
                      },
                      "nodeType": "YulIf",
                      "src": "1692:2:11"
                    }
                  ]
                },
                "name": "validator_revert_t_bool",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "1675:5:11",
                    "type": ""
                  }
                ],
                "src": "1642:116:11"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1807:79:11",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1864:16:11",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1873:1:11",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1876:1:11",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "1866:6:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1866:12:11"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1866:12:11"
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
                                "src": "1830:5:11"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "1855:5:11"
                                  }
                                ],
                                "functionName": {
                                  "name": "cleanup_t_uint256",
                                  "nodeType": "YulIdentifier",
                                  "src": "1837:17:11"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1837:24:11"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "1827:2:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1827:35:11"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "1820:6:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1820:43:11"
                      },
                      "nodeType": "YulIf",
                      "src": "1817:2:11"
                    }
                  ]
                },
                "name": "validator_revert_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "1800:5:11",
                    "type": ""
                  }
                ],
                "src": "1764:122:11"
              }
            ]
          },
          "contents": "{\n\n    function abi_decode_t_bool(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint256t_uint256t_bool(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_bool(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
          "id": 11,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "608060405234801561001057600080fd5b50600436106100365760003560e01c8063581fe0371461003b578063ff51c6ba14610057575b600080fd5b61005560048036038101906100509190610137565b610087565b005b610071600480360381019061006c919061010e565b6100b3565b60405161007e9190610195565b60405180910390f35b816000808581526020019081526020016000208190555080156100ae576100ad836100cb565b5b505050565b60006020528060005260406000206000915090505481565b6000808281526020019081526020016000206000905550565b6000813590506100f3816101c6565b92915050565b600081359050610108816101dd565b92915050565b60006020828403121561012057600080fd5b600061012e848285016100f9565b91505092915050565b60008060006060848603121561014c57600080fd5b600061015a868287016100f9565b935050602061016b868287016100f9565b925050604061017c868287016100e4565b9150509250925092565b61018f816101bc565b82525050565b60006020820190506101aa6000830184610186565b92915050565b60008115159050919050565b6000819050919050565b6101cf816101b0565b81146101da57600080fd5b50565b6101e6816101bc565b81146101f157600080fd5b5056fea26469706673582212208ff62484b2fa946cb0cd6ac08eed0960e4b2d9a0409fabd825bcd3e5f7639f6a64736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x36 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x581FE037 EQ PUSH2 0x3B JUMPI DUP1 PUSH4 0xFF51C6BA EQ PUSH2 0x57 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x55 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x50 SWAP2 SWAP1 PUSH2 0x137 JUMP JUMPDEST PUSH2 0x87 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x71 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x6C SWAP2 SWAP1 PUSH2 0x10E JUMP JUMPDEST PUSH2 0xB3 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x7E SWAP2 SWAP1 PUSH2 0x195 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST DUP2 PUSH1 0x0 DUP1 DUP6 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP1 ISZERO PUSH2 0xAE JUMPI PUSH2 0xAD DUP4 PUSH2 0xCB JUMP JUMPDEST JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SWAP1 POP SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0xF3 DUP2 PUSH2 0x1C6 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x108 DUP2 PUSH2 0x1DD JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x120 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x12E DUP5 DUP3 DUP6 ADD PUSH2 0xF9 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x14C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x15A DUP7 DUP3 DUP8 ADD PUSH2 0xF9 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0x16B DUP7 DUP3 DUP8 ADD PUSH2 0xF9 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 PUSH2 0x17C DUP7 DUP3 DUP8 ADD PUSH2 0xE4 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH2 0x18F DUP2 PUSH2 0x1BC JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1AA PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x186 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x1CF DUP2 PUSH2 0x1B0 JUMP JUMPDEST DUP2 EQ PUSH2 0x1DA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x1E6 DUP2 PUSH2 0x1BC JUMP JUMPDEST DUP2 EQ PUSH2 0x1F1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 DUP16 0xF6 0x24 DUP5 0xB2 STATICCALL SWAP5 PUSH13 0xB0CD6AC08EED0960E4B2D9A040 SWAP16 0xAB 0xD8 0x25 0xBC 0xD3 0xE5 0xF7 PUSH4 0x9F6A6473 PUSH16 0x6C634300080100330000000000000000 ",
      "sourceMap": "109:432:10:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;266:183;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;136:46;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;266:183;369:6;349:11;:17;361:4;349:17;;;;;;;;;;;:26;;;;389:11;385:58;;;416:16;427:4;416:10;:16::i;:::-;385:58;266:183;;;:::o;136:46::-;;;;;;;;;;;;;;;;;:::o;455:84::-;515:11;:17;527:4;515:17;;;;;;;;;;;508:24;;;455:84;:::o;7:133:11:-;;88:6;75:20;66:29;;104:30;128:5;104:30;:::i;:::-;56:84;;;;:::o;146:139::-;;230:6;217:20;208:29;;246:33;273:5;246:33;:::i;:::-;198:87;;;;:::o;291:262::-;;399:2;387:9;378:7;374:23;370:32;367:2;;;415:1;412;405:12;367:2;458:1;483:53;528:7;519:6;508:9;504:22;483:53;:::i;:::-;473:63;;429:117;357:196;;;;:::o;559:546::-;;;;698:2;686:9;677:7;673:23;669:32;666:2;;;714:1;711;704:12;666:2;757:1;782:53;827:7;818:6;807:9;803:22;782:53;:::i;:::-;772:63;;728:117;884:2;910:53;955:7;946:6;935:9;931:22;910:53;:::i;:::-;900:63;;855:118;1012:2;1038:50;1080:7;1071:6;1060:9;1056:22;1038:50;:::i;:::-;1028:60;;983:115;656:449;;;;;:::o;1111:118::-;1198:24;1216:5;1198:24;:::i;:::-;1193:3;1186:37;1176:53;;:::o;1235:222::-;;1366:2;1355:9;1351:18;1343:26;;1379:71;1447:1;1436:9;1432:17;1423:6;1379:71;:::i;:::-;1333:124;;;;:::o;1463:90::-;;1540:5;1533:13;1526:21;1515:32;;1505:48;;;:::o;1559:77::-;;1625:5;1614:16;;1604:32;;;:::o;1642:116::-;1712:21;1727:5;1712:21;:::i;:::-;1705:5;1702:32;1692:2;;1748:1;1745;1738:12;1692:2;1682:76;:::o;1764:122::-;1837:24;1855:5;1837:24;:::i;:::-;1830:5;1827:35;1817:2;;1876:1;1873;1866:12;1817:2;1807:79;:::o"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "110800",
        "executionCost": "159",
        "totalCost": "110959"
      },
      "external": {
        "NFTDeadline(uint256)": "infinite",
        "pushData(uint256,uint256,bool)": "infinite"
      },
      "internal": {
        "deleteData(uint256)": "5104"
      }
    },
    "methodIdentifiers": {
      "NFTDeadline(uint256)": "ff51c6ba",
      "pushData(uint256,uint256,bool)": "581fe037"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"NFTDeadline\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_key\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_deleteData\",\"type\":\"bool\"}],\"name\":\"pushData\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/testGasUsed.sol\":\"testGasUsed\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/testGasUsed.sol\":{\"content\":\"// SPDX-License-Identifier:MIT\\n\\npragma solidity ^0.8.1;\\n\\n/***\\n * @dev:\\u6d4b\\u8bd5\\u5220\\u9664map\\u6570\\u636e\\u6d88\\u8017\\u7684gas\\n */\\n\\ncontract testGasUsed {\\n    mapping(uint256 => uint256) public NFTDeadline;\\n\\n    // \\u6d4b\\u8bd5\\u4e24\\u6b21\\uff0c\\u7b2c\\u4e00\\u6b21\\u5220\\u9664\\uff0c\\u7b2c\\u4e8c\\u6b21\\u4e0d\\u5220\\u9664\\uff0c\\u67e5\\u770b\\u6d88\\u8017gas\\n    function pushData(uint256 _key, uint256 _value, bool _deleteData) public {\\n        NFTDeadline[_key] = _value;\\n        if (_deleteData) {\\n            deleteData(_key);\\n        }\\n    }\\n\\n    function deleteData(uint256 _key) internal {\\n        delete NFTDeadline[_key];\\n    }\\n}\\n\",\"keccak256\":\"0x22206796c97ad581231d597d162e1681033a9561dc72295a0b69ea2d5bbf63bc\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 1314,
        "contract": "project/contracts/testGasUsed.sol:testGasUsed",
        "label": "NFTDeadline",
        "offset": 0,
        "slot": "0",
        "type": "t_mapping(t_uint256,t_uint256)"
      }
    ],
    "types": {
      "t_mapping(t_uint256,t_uint256)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
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
};