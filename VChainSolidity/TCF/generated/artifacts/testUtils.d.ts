export declare const Artifact_testUtils: {
  "contractName": "testUtils",
  "sourceName": "contracts/test/test_utils.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "testUintToString",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506102d4806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80639de6111e14610030575b600080fd5b61004361003e366004610195565b610059565b60405161005091906101ad565b60405180910390f35b60606100648261006c565b90505b919050565b60608161009157506040805180820190915260018152600360fc1b6020820152610067565b8160005b81156100bb57806100a581610243565b91506100b49050600a83610218565b9150610095565b60008167ffffffffffffffff8111156100e457634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561010e576020820181803683370190505b508593509050815b831561018c57806101268161022c565b91506101359050600a8561025e565b610140906030610200565b60f81b82828151811061016357634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610185600a85610218565b9350610116565b50949350505050565b6000602082840312156101a6578081fd5b5035919050565b6000602080835283518082850152825b818110156101d9578581018301518582016040015282016101bd565b818111156101ea5783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561021357610213610272565b500190565b60008261022757610227610288565b500490565b60008161023b5761023b610272565b506000190190565b600060001982141561025757610257610272565b5060010190565b60008261026d5761026d610288565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fdfea2646970667358221220a47cb321989aadab9a3cf752a6a7a4f1956f6b9e093aee609572efabdd0c617e64736f6c63430008010033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061002b5760003560e01c80639de6111e14610030575b600080fd5b61004361003e366004610195565b610059565b60405161005091906101ad565b60405180910390f35b60606100648261006c565b90505b919050565b60608161009157506040805180820190915260018152600360fc1b6020820152610067565b8160005b81156100bb57806100a581610243565b91506100b49050600a83610218565b9150610095565b60008167ffffffffffffffff8111156100e457634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561010e576020820181803683370190505b508593509050815b831561018c57806101268161022c565b91506101359050600a8561025e565b610140906030610200565b60f81b82828151811061016357634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610185600a85610218565b9350610116565b50949350505050565b6000602082840312156101a6578081fd5b5035919050565b6000602080835283518082850152825b818110156101d9578581018301518582016040015282016101bd565b818111156101ea5783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561021357610213610272565b500190565b60008261022757610227610288565b500490565b60008161023b5761023b610272565b506000190190565b600060001982141561025757610257610272565b5060010190565b60008261026d5761026d610288565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fdfea2646970667358221220a47cb321989aadab9a3cf752a6a7a4f1956f6b9e093aee609572efabdd0c617e64736f6c63430008010033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/test/test_utils.sol",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "evm": {
    "bytecode": {
      "generatedSources": [],
      "linkReferences": {},
      "object": "608060405234801561001057600080fd5b506102d4806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80639de6111e14610030575b600080fd5b61004361003e366004610195565b610059565b60405161005091906101ad565b60405180910390f35b60606100648261006c565b90505b919050565b60608161009157506040805180820190915260018152600360fc1b6020820152610067565b8160005b81156100bb57806100a581610243565b91506100b49050600a83610218565b9150610095565b60008167ffffffffffffffff8111156100e457634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561010e576020820181803683370190505b508593509050815b831561018c57806101268161022c565b91506101359050600a8561025e565b610140906030610200565b60f81b82828151811061016357634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610185600a85610218565b9350610116565b50949350505050565b6000602082840312156101a6578081fd5b5035919050565b6000602080835283518082850152825b818110156101d9578581018301518582016040015282016101bd565b818111156101ea5783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561021357610213610272565b500190565b60008261022757610227610288565b500490565b60008161023b5761023b610272565b506000190190565b600060001982141561025757610257610272565b5060010190565b60008261026d5761026d610288565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fdfea2646970667358221220a47cb321989aadab9a3cf752a6a7a4f1956f6b9e093aee609572efabdd0c617e64736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2D4 DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x2B JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x9DE6111E EQ PUSH2 0x30 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x43 PUSH2 0x3E CALLDATASIZE PUSH1 0x4 PUSH2 0x195 JUMP JUMPDEST PUSH2 0x59 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x50 SWAP2 SWAP1 PUSH2 0x1AD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x60 PUSH2 0x64 DUP3 PUSH2 0x6C JUMP JUMPDEST SWAP1 POP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x60 DUP2 PUSH2 0x91 JUMPI POP PUSH1 0x40 DUP1 MLOAD DUP1 DUP3 ADD SWAP1 SWAP2 MSTORE PUSH1 0x1 DUP2 MSTORE PUSH1 0x3 PUSH1 0xFC SHL PUSH1 0x20 DUP3 ADD MSTORE PUSH2 0x67 JUMP JUMPDEST DUP2 PUSH1 0x0 JUMPDEST DUP2 ISZERO PUSH2 0xBB JUMPI DUP1 PUSH2 0xA5 DUP2 PUSH2 0x243 JUMP JUMPDEST SWAP2 POP PUSH2 0xB4 SWAP1 POP PUSH1 0xA DUP4 PUSH2 0x218 JUMP JUMPDEST SWAP2 POP PUSH2 0x95 JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0xE4 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP1 DUP3 MSTORE DUP1 PUSH1 0x1F ADD PUSH1 0x1F NOT AND PUSH1 0x20 ADD DUP3 ADD PUSH1 0x40 MSTORE DUP1 ISZERO PUSH2 0x10E JUMPI PUSH1 0x20 DUP3 ADD DUP2 DUP1 CALLDATASIZE DUP4 CALLDATACOPY ADD SWAP1 POP JUMPDEST POP DUP6 SWAP4 POP SWAP1 POP DUP2 JUMPDEST DUP4 ISZERO PUSH2 0x18C JUMPI DUP1 PUSH2 0x126 DUP2 PUSH2 0x22C JUMP JUMPDEST SWAP2 POP PUSH2 0x135 SWAP1 POP PUSH1 0xA DUP6 PUSH2 0x25E JUMP JUMPDEST PUSH2 0x140 SWAP1 PUSH1 0x30 PUSH2 0x200 JUMP JUMPDEST PUSH1 0xF8 SHL DUP3 DUP3 DUP2 MLOAD DUP2 LT PUSH2 0x163 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x20 ADD ADD SWAP1 PUSH1 0x1 PUSH1 0x1 PUSH1 0xF8 SHL SUB NOT AND SWAP1 DUP2 PUSH1 0x0 BYTE SWAP1 MSTORE8 POP PUSH2 0x185 PUSH1 0xA DUP6 PUSH2 0x218 JUMP JUMPDEST SWAP4 POP PUSH2 0x116 JUMP JUMPDEST POP SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1A6 JUMPI DUP1 DUP2 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP1 DUP4 MSTORE DUP4 MLOAD DUP1 DUP3 DUP6 ADD MSTORE DUP3 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x1D9 JUMPI DUP6 DUP2 ADD DUP4 ADD MLOAD DUP6 DUP3 ADD PUSH1 0x40 ADD MSTORE DUP3 ADD PUSH2 0x1BD JUMP JUMPDEST DUP2 DUP2 GT ISZERO PUSH2 0x1EA JUMPI DUP4 PUSH1 0x40 DUP4 DUP8 ADD ADD MSTORE JUMPDEST POP PUSH1 0x1F ADD PUSH1 0x1F NOT AND SWAP3 SWAP1 SWAP3 ADD PUSH1 0x40 ADD SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 NOT DUP3 GT ISZERO PUSH2 0x213 JUMPI PUSH2 0x213 PUSH2 0x272 JUMP JUMPDEST POP ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH2 0x227 JUMPI PUSH2 0x227 PUSH2 0x288 JUMP JUMPDEST POP DIV SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH2 0x23B JUMPI PUSH2 0x23B PUSH2 0x272 JUMP JUMPDEST POP PUSH1 0x0 NOT ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x0 NOT DUP3 EQ ISZERO PUSH2 0x257 JUMPI PUSH2 0x257 PUSH2 0x272 JUMP JUMPDEST POP PUSH1 0x1 ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH2 0x26D JUMPI PUSH2 0x26D PUSH2 0x288 JUMP JUMPDEST POP MOD SWAP1 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 LOG4 PUSH29 0xB321989AADAB9A3CF752A6A7A4F1956F6B9E093AEE609572EFABDD0C61 PUSH31 0x64736F6C634300080100330000000000000000000000000000000000000000 ",
      "sourceMap": "100:176:13:-:0;;;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [
        {
          "ast": {
            "nodeType": "YulBlock",
            "src": "0:1734:15",
            "statements": [
              {
                "nodeType": "YulBlock",
                "src": "6:3:15",
                "statements": []
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "84:120:15",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "130:26:15",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "139:6:15"
                                },
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "147:6:15"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "132:6:15"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "132:22:15"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "132:22:15"
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
                                "src": "105:7:15"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "114:9:15"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "101:3:15"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "101:23:15"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "126:2:15",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "97:3:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "97:32:15"
                      },
                      "nodeType": "YulIf",
                      "src": "94:2:15"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "165:33:15",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "188:9:15"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "175:12:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "175:23:15"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "165:6:15"
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
                    "src": "50:9:15",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "61:7:15",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "73:6:15",
                    "type": ""
                  }
                ],
                "src": "14:190:15"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "330:482:15",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "340:12:15",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "350:2:15",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "_1",
                          "nodeType": "YulTypedName",
                          "src": "344:2:15",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "368:9:15"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "379:2:15"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "361:6:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "361:21:15"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "361:21:15"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "391:27:15",
                      "value": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "411:6:15"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "405:5:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "405:13:15"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nodeType": "YulTypedName",
                          "src": "395:6:15",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "438:9:15"
                              },
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "449:2:15"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "434:3:15"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "434:18:15"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "454:6:15"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "427:6:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "427:34:15"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "427:34:15"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "470:13:15",
                      "value": {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "479:4:15"
                      },
                      "variables": [
                        {
                          "name": "i",
                          "nodeType": "YulTypedName",
                          "src": "474:1:15",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "542:90:15",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "571:9:15"
                                        },
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "582:1:15"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "567:3:15"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "567:17:15"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "586:2:15",
                                      "type": "",
                                      "value": "64"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "563:3:15"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "563:26:15"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "value0",
                                              "nodeType": "YulIdentifier",
                                              "src": "605:6:15"
                                            },
                                            {
                                              "name": "i",
                                              "nodeType": "YulIdentifier",
                                              "src": "613:1:15"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "601:3:15"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "601:14:15"
                                        },
                                        {
                                          "name": "_1",
                                          "nodeType": "YulIdentifier",
                                          "src": "617:2:15"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "597:3:15"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "597:23:15"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nodeType": "YulIdentifier",
                                    "src": "591:5:15"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "591:30:15"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nodeType": "YulIdentifier",
                                "src": "556:6:15"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "556:66:15"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "556:66:15"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "503:1:15"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "506:6:15"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "500:2:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "500:13:15"
                      },
                      "nodeType": "YulForLoop",
                      "post": {
                        "nodeType": "YulBlock",
                        "src": "514:19:15",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "516:15:15",
                            "value": {
                              "arguments": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "525:1:15"
                                },
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "528:2:15"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "521:3:15"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "521:10:15"
                            },
                            "variableNames": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "516:1:15"
                              }
                            ]
                          }
                        ]
                      },
                      "pre": {
                        "nodeType": "YulBlock",
                        "src": "496:3:15",
                        "statements": []
                      },
                      "src": "492:140:15"
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "666:69:15",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "headStart",
                                          "nodeType": "YulIdentifier",
                                          "src": "695:9:15"
                                        },
                                        {
                                          "name": "length",
                                          "nodeType": "YulIdentifier",
                                          "src": "706:6:15"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "691:3:15"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "691:22:15"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "715:2:15",
                                      "type": "",
                                      "value": "64"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "687:3:15"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "687:31:15"
                                },
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "720:4:15"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nodeType": "YulIdentifier",
                                "src": "680:6:15"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "680:45:15"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "680:45:15"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "647:1:15"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "650:6:15"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "644:2:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "644:13:15"
                      },
                      "nodeType": "YulIf",
                      "src": "641:2:15"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "744:62:15",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "760:9:15"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "length",
                                        "nodeType": "YulIdentifier",
                                        "src": "779:6:15"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "787:2:15",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "775:3:15"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "775:15:15"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "796:2:15",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "792:3:15"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "792:7:15"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "771:3:15"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "771:29:15"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "756:3:15"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "756:45:15"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "803:2:15",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "752:3:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "752:54:15"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "744:4:15"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "299:9:15",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "310:6:15",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "321:4:15",
                    "type": ""
                  }
                ],
                "src": "209:603:15"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "865:80:15",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "892:22:15",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nodeType": "YulIdentifier",
                                "src": "894:16:15"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "894:18:15"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "894:18:15"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "881:1:15"
                          },
                          {
                            "arguments": [
                              {
                                "name": "y",
                                "nodeType": "YulIdentifier",
                                "src": "888:1:15"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "884:3:15"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "884:6:15"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "878:2:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "878:13:15"
                      },
                      "nodeType": "YulIf",
                      "src": "875:2:15"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "923:16:15",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "934:1:15"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "937:1:15"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "930:3:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "930:9:15"
                      },
                      "variableNames": [
                        {
                          "name": "sum",
                          "nodeType": "YulIdentifier",
                          "src": "923:3:15"
                        }
                      ]
                    }
                  ]
                },
                "name": "checked_add_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "x",
                    "nodeType": "YulTypedName",
                    "src": "848:1:15",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nodeType": "YulTypedName",
                    "src": "851:1:15",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "sum",
                    "nodeType": "YulTypedName",
                    "src": "857:3:15",
                    "type": ""
                  }
                ],
                "src": "817:128:15"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "996:74:15",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1019:22:15",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x12",
                                "nodeType": "YulIdentifier",
                                "src": "1021:16:15"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1021:18:15"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1021:18:15"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "1016:1:15"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "1009:6:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1009:9:15"
                      },
                      "nodeType": "YulIf",
                      "src": "1006:2:15"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1050:14:15",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "1059:1:15"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "1062:1:15"
                          }
                        ],
                        "functionName": {
                          "name": "div",
                          "nodeType": "YulIdentifier",
                          "src": "1055:3:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1055:9:15"
                      },
                      "variableNames": [
                        {
                          "name": "r",
                          "nodeType": "YulIdentifier",
                          "src": "1050:1:15"
                        }
                      ]
                    }
                  ]
                },
                "name": "checked_div_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "x",
                    "nodeType": "YulTypedName",
                    "src": "981:1:15",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nodeType": "YulTypedName",
                    "src": "984:1:15",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "r",
                    "nodeType": "YulTypedName",
                    "src": "990:1:15",
                    "type": ""
                  }
                ],
                "src": "950:120:15"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1122:89:15",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1149:22:15",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nodeType": "YulIdentifier",
                                "src": "1151:16:15"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1151:18:15"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1151:18:15"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1142:5:15"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "1135:6:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1135:13:15"
                      },
                      "nodeType": "YulIf",
                      "src": "1132:2:15"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1180:25:15",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1191:5:15"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1202:1:15",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "1198:3:15"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1198:6:15"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1187:3:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1187:18:15"
                      },
                      "variableNames": [
                        {
                          "name": "ret",
                          "nodeType": "YulIdentifier",
                          "src": "1180:3:15"
                        }
                      ]
                    }
                  ]
                },
                "name": "decrement_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "1104:5:15",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "ret",
                    "nodeType": "YulTypedName",
                    "src": "1114:3:15",
                    "type": ""
                  }
                ],
                "src": "1075:136:15"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1263:88:15",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1294:22:15",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nodeType": "YulIdentifier",
                                "src": "1296:16:15"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1296:18:15"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1296:18:15"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1279:5:15"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1290:1:15",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "1286:3:15"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1286:6:15"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "1276:2:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1276:17:15"
                      },
                      "nodeType": "YulIf",
                      "src": "1273:2:15"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1325:20:15",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1336:5:15"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1343:1:15",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1332:3:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1332:13:15"
                      },
                      "variableNames": [
                        {
                          "name": "ret",
                          "nodeType": "YulIdentifier",
                          "src": "1325:3:15"
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
                    "src": "1245:5:15",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "ret",
                    "nodeType": "YulTypedName",
                    "src": "1255:3:15",
                    "type": ""
                  }
                ],
                "src": "1216:135:15"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1394:74:15",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1417:22:15",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x12",
                                "nodeType": "YulIdentifier",
                                "src": "1419:16:15"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1419:18:15"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1419:18:15"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "1414:1:15"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "1407:6:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1407:9:15"
                      },
                      "nodeType": "YulIf",
                      "src": "1404:2:15"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1448:14:15",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "1457:1:15"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "1460:1:15"
                          }
                        ],
                        "functionName": {
                          "name": "mod",
                          "nodeType": "YulIdentifier",
                          "src": "1453:3:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1453:9:15"
                      },
                      "variableNames": [
                        {
                          "name": "r",
                          "nodeType": "YulIdentifier",
                          "src": "1448:1:15"
                        }
                      ]
                    }
                  ]
                },
                "name": "mod_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "x",
                    "nodeType": "YulTypedName",
                    "src": "1379:1:15",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nodeType": "YulTypedName",
                    "src": "1382:1:15",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "r",
                    "nodeType": "YulTypedName",
                    "src": "1388:1:15",
                    "type": ""
                  }
                ],
                "src": "1356:112:15"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1505:95:15",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1522:1:15",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1529:3:15",
                                "type": "",
                                "value": "224"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1534:10:15",
                                "type": "",
                                "value": "0x4e487b71"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nodeType": "YulIdentifier",
                              "src": "1525:3:15"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1525:20:15"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1515:6:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1515:31:15"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1515:31:15"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1562:1:15",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1565:4:15",
                            "type": "",
                            "value": "0x11"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1555:6:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1555:15:15"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1555:15:15"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1586:1:15",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1589:4:15",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nodeType": "YulIdentifier",
                          "src": "1579:6:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1579:15:15"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1579:15:15"
                    }
                  ]
                },
                "name": "panic_error_0x11",
                "nodeType": "YulFunctionDefinition",
                "src": "1473:127:15"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1637:95:15",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1654:1:15",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1661:3:15",
                                "type": "",
                                "value": "224"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1666:10:15",
                                "type": "",
                                "value": "0x4e487b71"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nodeType": "YulIdentifier",
                              "src": "1657:3:15"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1657:20:15"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1647:6:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1647:31:15"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1647:31:15"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1694:1:15",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1697:4:15",
                            "type": "",
                            "value": "0x12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1687:6:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1687:15:15"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1687:15:15"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1718:1:15",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1721:4:15",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nodeType": "YulIdentifier",
                          "src": "1711:6:15"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1711:15:15"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1711:15:15"
                    }
                  ]
                },
                "name": "panic_error_0x12",
                "nodeType": "YulFunctionDefinition",
                "src": "1605:127:15"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        value0 := calldataload(headStart)\n    }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        mstore(headStart, _1)\n        let length := mload(value0)\n        mstore(add(headStart, _1), length)\n        let i := tail\n        for { } lt(i, length) { i := add(i, _1) }\n        {\n            mstore(add(add(headStart, i), 64), mload(add(add(value0, i), _1)))\n        }\n        if gt(i, length)\n        {\n            mstore(add(add(headStart, length), 64), tail)\n        }\n        tail := add(add(headStart, and(add(length, 31), not(31))), 64)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        if gt(x, not(y)) { panic_error_0x11() }\n        sum := add(x, y)\n    }\n    function checked_div_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := div(x, y)\n    }\n    function decrement_t_uint256(value) -> ret\n    {\n        if iszero(value) { panic_error_0x11() }\n        ret := add(value, not(0))\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0)) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n    function mod_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function panic_error_0x12()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n}",
          "id": 15,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "608060405234801561001057600080fd5b506004361061002b5760003560e01c80639de6111e14610030575b600080fd5b61004361003e366004610195565b610059565b60405161005091906101ad565b60405180910390f35b60606100648261006c565b90505b919050565b60608161009157506040805180820190915260018152600360fc1b6020820152610067565b8160005b81156100bb57806100a581610243565b91506100b49050600a83610218565b9150610095565b60008167ffffffffffffffff8111156100e457634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561010e576020820181803683370190505b508593509050815b831561018c57806101268161022c565b91506101359050600a8561025e565b610140906030610200565b60f81b82828151811061016357634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610185600a85610218565b9350610116565b50949350505050565b6000602082840312156101a6578081fd5b5035919050565b6000602080835283518082850152825b818110156101d9578581018301518582016040015282016101bd565b818111156101ea5783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561021357610213610272565b500190565b60008261022757610227610288565b500490565b60008161023b5761023b610272565b506000190190565b600060001982141561025757610257610272565b5060010190565b60008261026d5761026d610288565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fdfea2646970667358221220a47cb321989aadab9a3cf752a6a7a4f1956f6b9e093aee609572efabdd0c617e64736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x2B JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x9DE6111E EQ PUSH2 0x30 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x43 PUSH2 0x3E CALLDATASIZE PUSH1 0x4 PUSH2 0x195 JUMP JUMPDEST PUSH2 0x59 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x50 SWAP2 SWAP1 PUSH2 0x1AD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x60 PUSH2 0x64 DUP3 PUSH2 0x6C JUMP JUMPDEST SWAP1 POP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x60 DUP2 PUSH2 0x91 JUMPI POP PUSH1 0x40 DUP1 MLOAD DUP1 DUP3 ADD SWAP1 SWAP2 MSTORE PUSH1 0x1 DUP2 MSTORE PUSH1 0x3 PUSH1 0xFC SHL PUSH1 0x20 DUP3 ADD MSTORE PUSH2 0x67 JUMP JUMPDEST DUP2 PUSH1 0x0 JUMPDEST DUP2 ISZERO PUSH2 0xBB JUMPI DUP1 PUSH2 0xA5 DUP2 PUSH2 0x243 JUMP JUMPDEST SWAP2 POP PUSH2 0xB4 SWAP1 POP PUSH1 0xA DUP4 PUSH2 0x218 JUMP JUMPDEST SWAP2 POP PUSH2 0x95 JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0xE4 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP1 DUP3 MSTORE DUP1 PUSH1 0x1F ADD PUSH1 0x1F NOT AND PUSH1 0x20 ADD DUP3 ADD PUSH1 0x40 MSTORE DUP1 ISZERO PUSH2 0x10E JUMPI PUSH1 0x20 DUP3 ADD DUP2 DUP1 CALLDATASIZE DUP4 CALLDATACOPY ADD SWAP1 POP JUMPDEST POP DUP6 SWAP4 POP SWAP1 POP DUP2 JUMPDEST DUP4 ISZERO PUSH2 0x18C JUMPI DUP1 PUSH2 0x126 DUP2 PUSH2 0x22C JUMP JUMPDEST SWAP2 POP PUSH2 0x135 SWAP1 POP PUSH1 0xA DUP6 PUSH2 0x25E JUMP JUMPDEST PUSH2 0x140 SWAP1 PUSH1 0x30 PUSH2 0x200 JUMP JUMPDEST PUSH1 0xF8 SHL DUP3 DUP3 DUP2 MLOAD DUP2 LT PUSH2 0x163 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x20 ADD ADD SWAP1 PUSH1 0x1 PUSH1 0x1 PUSH1 0xF8 SHL SUB NOT AND SWAP1 DUP2 PUSH1 0x0 BYTE SWAP1 MSTORE8 POP PUSH2 0x185 PUSH1 0xA DUP6 PUSH2 0x218 JUMP JUMPDEST SWAP4 POP PUSH2 0x116 JUMP JUMPDEST POP SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1A6 JUMPI DUP1 DUP2 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP1 DUP4 MSTORE DUP4 MLOAD DUP1 DUP3 DUP6 ADD MSTORE DUP3 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x1D9 JUMPI DUP6 DUP2 ADD DUP4 ADD MLOAD DUP6 DUP3 ADD PUSH1 0x40 ADD MSTORE DUP3 ADD PUSH2 0x1BD JUMP JUMPDEST DUP2 DUP2 GT ISZERO PUSH2 0x1EA JUMPI DUP4 PUSH1 0x40 DUP4 DUP8 ADD ADD MSTORE JUMPDEST POP PUSH1 0x1F ADD PUSH1 0x1F NOT AND SWAP3 SWAP1 SWAP3 ADD PUSH1 0x40 ADD SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 NOT DUP3 GT ISZERO PUSH2 0x213 JUMPI PUSH2 0x213 PUSH2 0x272 JUMP JUMPDEST POP ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH2 0x227 JUMPI PUSH2 0x227 PUSH2 0x288 JUMP JUMPDEST POP DIV SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH2 0x23B JUMPI PUSH2 0x23B PUSH2 0x272 JUMP JUMPDEST POP PUSH1 0x0 NOT ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x0 NOT DUP3 EQ ISZERO PUSH2 0x257 JUMPI PUSH2 0x257 PUSH2 0x272 JUMP JUMPDEST POP PUSH1 0x1 ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH2 0x26D JUMPI PUSH2 0x26D PUSH2 0x288 JUMP JUMPDEST POP MOD SWAP1 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 LOG4 PUSH29 0xB321989AADAB9A3CF752A6A7A4F1956F6B9E093AEE609572EFABDD0C61 PUSH31 0x64736F6C634300080100330000000000000000000000000000000000000000 ",
      "sourceMap": "100:176:13:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;135:138;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;;213:13;246:19;259:5;246:12;:19::i;:::-;239:26;;135:138;;;;:::o;83:692:14:-;143:13;173:10;169:53;;-1:-1:-1;200:10:14;;;;;;;;;;;;-1:-1:-1;;;200:10:14;;;;;;169:53;249:5;234:12;326:78;333:9;;326:78;;359:8;;;;:::i;:::-;;-1:-1:-1;382:10:14;;-1:-1:-1;390:2:14;382:10;;:::i;:::-;;;326:78;;;416:19;448:6;438:17;;;;;;-1:-1:-1;;;438:17:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;438:17:14;-1:-1:-1;547:5:14;;-1:-1:-1;416:39:14;-1:-1:-1;487:6:14;563:173;570:9;;563:173;;596:12;;;;:::i;:::-;;-1:-1:-1;663:9:14;;-1:-1:-1;670:2:14;663:4;:9;:::i;:::-;657:16;;:2;:16;:::i;:::-;644:31;;623:6;630:10;623:18;;;;;;-1:-1:-1;;;623:18:14;;;;;;;;;;;;:52;-1:-1:-1;;;;;623:52:14;;;;;;;;-1:-1:-1;714:10:14;722:2;714:10;;:::i;:::-;;;563:173;;;-1:-1:-1;760:6:14;83:692;-1:-1:-1;;;;83:692:14:o;14:190:15:-;;126:2;114:9;105:7;101:23;97:32;94:2;;;147:6;139;132:22;94:2;-1:-1:-1;175:23:15;;84:120;-1:-1:-1;84:120:15:o;209:603::-;;350:2;379;368:9;361:21;411:6;405:13;454:6;449:2;438:9;434:18;427:34;479:4;492:140;506:6;503:1;500:13;492:140;;;601:14;;;597:23;;591:30;567:17;;;586:2;563:26;556:66;521:10;;492:140;;;650:6;647:1;644:13;641:2;;;720:4;715:2;706:6;695:9;691:22;687:31;680:45;641:2;-1:-1:-1;796:2:15;775:15;-1:-1:-1;;771:29:15;756:45;;;;803:2;752:54;;330:482;-1:-1:-1;;;330:482:15:o;817:128::-;;888:1;884:6;881:1;878:13;875:2;;;894:18;;:::i;:::-;-1:-1:-1;930:9:15;;865:80::o;950:120::-;;1016:1;1006:2;;1021:18;;:::i;:::-;-1:-1:-1;1055:9:15;;996:74::o;1075:136::-;;1142:5;1132:2;;1151:18;;:::i;:::-;-1:-1:-1;;;1187:18:15;;1122:89::o;1216:135::-;;-1:-1:-1;;1276:17:15;;1273:2;;;1296:18;;:::i;:::-;-1:-1:-1;1343:1:15;1332:13;;1263:88::o;1356:112::-;;1414:1;1404:2;;1419:18;;:::i;:::-;-1:-1:-1;1453:9:15;;1394:74::o;1473:127::-;1534:10;1529:3;1525:20;1522:1;1515:31;1565:4;1562:1;1555:15;1589:4;1586:1;1579:15;1605:127;1666:10;1661:3;1657:20;1654:1;1647:31;1697:4;1694:1;1687:15;1721:4;1718:1;1711:15"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "144800",
        "executionCost": "190",
        "totalCost": "144990"
      },
      "external": {
        "testUintToString(uint256)": "infinite"
      }
    },
    "methodIdentifiers": {
      "testUintToString(uint256)": "9de6111e"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"testUintToString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/test/test_utils.sol\":\"testUtils\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/test/test_utils.sol\":{\"content\":\"// SPDX-License-Identifier:MIT\\r\\n\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\nimport {utils} from \\\"../utils.sol\\\";\\r\\n\\r\\ncontract testUtils is utils {\\r\\n    function testUintToString(\\r\\n        uint256 value\\r\\n    ) public pure returns (string memory) {\\r\\n        return uintToString(value);\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0xb11ec76468659c6863df5c58e5ea3fc4e90dbeda7c04282a1753a694b90f825d\",\"license\":\"MIT\"},\"project/contracts/utils.sol\":{\"content\":\"// SPDX-License-Identifier:MIT\\r\\n\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\ncontract utils {\\r\\n    function uintToString(uint256 value) internal pure returns (string memory) {\\r\\n        if (value == 0) {\\r\\n            return \\\"0\\\";\\r\\n        }\\r\\n\\r\\n        uint256 temp = value;\\r\\n        uint256 digits;\\r\\n\\r\\n        // \\u8ba1\\u7b97\\u9700\\u8981\\u591a\\u5c11\\u4f4d\\r\\n        while (temp != 0) {\\r\\n            digits++;\\r\\n            temp /= 10;\\r\\n        }\\r\\n\\r\\n        bytes memory buffer = new bytes(digits);\\r\\n        uint256 writeIndex = digits;\\r\\n\\r\\n        // \\u4ece\\u4f4e\\u4f4d\\u586b\\u5165\\u5b57\\u7b26\\r\\n        temp = value;\\r\\n        while (temp != 0) {\\r\\n            writeIndex--;\\r\\n            buffer[writeIndex] = bytes1(uint8(48 + (temp % 10))); // '0' \\u7684 ascii \\u662f 48\\r\\n            temp /= 10;\\r\\n        }\\r\\n        return string(buffer);\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0xcc8be5ed79f7a541ed76a6482c8d3dd8750e30910ee1ebd5dfee8f260e6f3a9b\",\"license\":\"MIT\"}},\"version\":1}",
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