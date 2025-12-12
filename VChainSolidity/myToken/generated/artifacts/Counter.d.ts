export declare const Artifact_Counter: {
  "contractName": "Counter",
  "sourceName": "contracts/Counter.sol",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "by",
          "type": "uint256"
        }
      ],
      "name": "Increment",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "inc",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "by",
          "type": "uint256"
        }
      ],
      "name": "incBy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "x",
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
  "bytecode": "0x608060405234801561001057600080fd5b506103e2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630c55699c14610046578063371303c01461006457806370119d061461006e575b600080fd5b61004e61008a565b60405161005b9190610230565b60405180910390f35b61006c610090565b005b6100886004803603810190610083919061018b565b6100e1565b005b60005481565b6000808154809291906100a2906102ce565b91905055507f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a8160016040516100d791906101f5565b60405180910390a1565b60008111610124576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011b90610210565b60405180910390fd5b80600080828254610135919061025c565b925050819055507f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a818160405161016b9190610230565b60405180910390a150565b60008135905061018581610395565b92915050565b60006020828403121561019d57600080fd5b60006101ab84828501610176565b91505092915050565b6101bd816102bc565b82525050565b60006101d060238361024b565b91506101db82610346565b604082019050919050565b6101ef816102b2565b82525050565b600060208201905061020a60008301846101b4565b92915050565b60006020820190508181036000830152610229816101c3565b9050919050565b600060208201905061024560008301846101e6565b92915050565b600082825260208201905092915050565b6000610267826102b2565b9150610272836102b2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156102a7576102a6610317565b5b828201905092915050565b6000819050919050565b60006102c7826102b2565b9050919050565b60006102d9826102b2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561030c5761030b610317565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f696e6342793a20696e6372656d656e742073686f756c6420626520706f73697460008201527f6976650000000000000000000000000000000000000000000000000000000000602082015250565b61039e816102b2565b81146103a957600080fd5b5056fea26469706673582212201117f4e51ffcbdaf72ba8ed4c018ee10334f0defaf6414a0ce95cd879431d65064736f6c63430008010033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80630c55699c14610046578063371303c01461006457806370119d061461006e575b600080fd5b61004e61008a565b60405161005b9190610230565b60405180910390f35b61006c610090565b005b6100886004803603810190610083919061018b565b6100e1565b005b60005481565b6000808154809291906100a2906102ce565b91905055507f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a8160016040516100d791906101f5565b60405180910390a1565b60008111610124576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011b90610210565b60405180910390fd5b80600080828254610135919061025c565b925050819055507f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a818160405161016b9190610230565b60405180910390a150565b60008135905061018581610395565b92915050565b60006020828403121561019d57600080fd5b60006101ab84828501610176565b91505092915050565b6101bd816102bc565b82525050565b60006101d060238361024b565b91506101db82610346565b604082019050919050565b6101ef816102b2565b82525050565b600060208201905061020a60008301846101b4565b92915050565b60006020820190508181036000830152610229816101c3565b9050919050565b600060208201905061024560008301846101e6565b92915050565b600082825260208201905092915050565b6000610267826102b2565b9150610272836102b2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156102a7576102a6610317565b5b828201905092915050565b6000819050919050565b60006102c7826102b2565b9050919050565b60006102d9826102b2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561030c5761030b610317565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f696e6342793a20696e6372656d656e742073686f756c6420626520706f73697460008201527f6976650000000000000000000000000000000000000000000000000000000000602082015250565b61039e816102b2565b81146103a957600080fd5b5056fea26469706673582212201117f4e51ffcbdaf72ba8ed4c018ee10334f0defaf6414a0ce95cd879431d65064736f6c63430008010033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/Counter.sol",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "evm": {
    "bytecode": {
      "generatedSources": [],
      "linkReferences": {},
      "object": "608060405234801561001057600080fd5b506103e2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630c55699c14610046578063371303c01461006457806370119d061461006e575b600080fd5b61004e61008a565b60405161005b9190610230565b60405180910390f35b61006c610090565b005b6100886004803603810190610083919061018b565b6100e1565b005b60005481565b6000808154809291906100a2906102ce565b91905055507f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a8160016040516100d791906101f5565b60405180910390a1565b60008111610124576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011b90610210565b60405180910390fd5b80600080828254610135919061025c565b925050819055507f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a818160405161016b9190610230565b60405180910390a150565b60008135905061018581610395565b92915050565b60006020828403121561019d57600080fd5b60006101ab84828501610176565b91505092915050565b6101bd816102bc565b82525050565b60006101d060238361024b565b91506101db82610346565b604082019050919050565b6101ef816102b2565b82525050565b600060208201905061020a60008301846101b4565b92915050565b60006020820190508181036000830152610229816101c3565b9050919050565b600060208201905061024560008301846101e6565b92915050565b600082825260208201905092915050565b6000610267826102b2565b9150610272836102b2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156102a7576102a6610317565b5b828201905092915050565b6000819050919050565b60006102c7826102b2565b9050919050565b60006102d9826102b2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561030c5761030b610317565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f696e6342793a20696e6372656d656e742073686f756c6420626520706f73697460008201527f6976650000000000000000000000000000000000000000000000000000000000602082015250565b61039e816102b2565b81146103a957600080fd5b5056fea26469706673582212201117f4e51ffcbdaf72ba8ed4c018ee10334f0defaf6414a0ce95cd879431d65064736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x3E2 DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x41 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0xC55699C EQ PUSH2 0x46 JUMPI DUP1 PUSH4 0x371303C0 EQ PUSH2 0x64 JUMPI DUP1 PUSH4 0x70119D06 EQ PUSH2 0x6E JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x4E PUSH2 0x8A JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x5B SWAP2 SWAP1 PUSH2 0x230 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x6C PUSH2 0x90 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x88 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x83 SWAP2 SWAP1 PUSH2 0x18B JUMP JUMPDEST PUSH2 0xE1 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 DUP2 SLOAD DUP1 SWAP3 SWAP2 SWAP1 PUSH2 0xA2 SWAP1 PUSH2 0x2CE JUMP JUMPDEST SWAP2 SWAP1 POP SSTORE POP PUSH32 0x51AF157C2EEE40F68107A47A49C32FBBEB0A3C9E5CD37AA56E88E6BE92368A81 PUSH1 0x1 PUSH1 0x40 MLOAD PUSH2 0xD7 SWAP2 SWAP1 PUSH2 0x1F5 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 JUMP JUMPDEST PUSH1 0x0 DUP2 GT PUSH2 0x124 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x11B SWAP1 PUSH2 0x210 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x0 DUP1 DUP3 DUP3 SLOAD PUSH2 0x135 SWAP2 SWAP1 PUSH2 0x25C JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP PUSH32 0x51AF157C2EEE40F68107A47A49C32FBBEB0A3C9E5CD37AA56E88E6BE92368A81 DUP2 PUSH1 0x40 MLOAD PUSH2 0x16B SWAP2 SWAP1 PUSH2 0x230 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x185 DUP2 PUSH2 0x395 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x19D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1AB DUP5 DUP3 DUP6 ADD PUSH2 0x176 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x1BD DUP2 PUSH2 0x2BC JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1D0 PUSH1 0x23 DUP4 PUSH2 0x24B JUMP JUMPDEST SWAP2 POP PUSH2 0x1DB DUP3 PUSH2 0x346 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x1EF DUP2 PUSH2 0x2B2 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x20A PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1B4 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x229 DUP2 PUSH2 0x1C3 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x245 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1E6 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x267 DUP3 PUSH2 0x2B2 JUMP JUMPDEST SWAP2 POP PUSH2 0x272 DUP4 PUSH2 0x2B2 JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP3 GT ISZERO PUSH2 0x2A7 JUMPI PUSH2 0x2A6 PUSH2 0x317 JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2C7 DUP3 PUSH2 0x2B2 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2D9 DUP3 PUSH2 0x2B2 JUMP JUMPDEST SWAP2 POP PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 EQ ISZERO PUSH2 0x30C JUMPI PUSH2 0x30B PUSH2 0x317 JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x696E6342793A20696E6372656D656E742073686F756C6420626520706F736974 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6976650000000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH2 0x39E DUP2 PUSH2 0x2B2 JUMP JUMPDEST DUP2 EQ PUSH2 0x3A9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 GT OR DELEGATECALL 0xE5 0x1F 0xFC 0xBD 0xAF PUSH19 0xBA8ED4C018EE10334F0DEFAF6414A0CE95CD87 SWAP5 BALANCE 0xD6 POP PUSH5 0x736F6C6343 STOP ADDMOD ADD STOP CALLER ",
      "sourceMap": "64:298:12:-:0;;;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [
        {
          "ast": {
            "nodeType": "YulBlock",
            "src": "0:3440:28",
            "statements": [
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "59:87:28",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "69:29:28",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "91:6:28"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "78:12:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "78:20:28"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "69:5:28"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "134:5:28"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "107:26:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "107:33:28"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "107:33:28"
                    }
                  ]
                },
                "name": "abi_decode_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nodeType": "YulTypedName",
                    "src": "37:6:28",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nodeType": "YulTypedName",
                    "src": "45:3:28",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "53:5:28",
                    "type": ""
                  }
                ],
                "src": "7:139:28"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "218:196:28",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "264:16:28",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "273:1:28",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "276:1:28",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "266:6:28"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "266:12:28"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "266:12:28"
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
                                "src": "239:7:28"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "248:9:28"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "235:3:28"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "235:23:28"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "260:2:28",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "231:3:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "231:32:28"
                      },
                      "nodeType": "YulIf",
                      "src": "228:2:28"
                    },
                    {
                      "nodeType": "YulBlock",
                      "src": "290:117:28",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "305:15:28",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "319:1:28",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nodeType": "YulTypedName",
                              "src": "309:6:28",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "334:63:28",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "369:9:28"
                                  },
                                  {
                                    "name": "offset",
                                    "nodeType": "YulIdentifier",
                                    "src": "380:6:28"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "365:3:28"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "365:22:28"
                              },
                              {
                                "name": "dataEnd",
                                "nodeType": "YulIdentifier",
                                "src": "389:7:28"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "344:20:28"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "344:53:28"
                          },
                          "variableNames": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "334:6:28"
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
                    "src": "188:9:28",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "199:7:28",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "211:6:28",
                    "type": ""
                  }
                ],
                "src": "152:262:28"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "493:74:28",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "510:3:28"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "554:5:28"
                              }
                            ],
                            "functionName": {
                              "name": "convert_t_rational_1_by_1_to_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "515:38:28"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "515:45:28"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "503:6:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "503:58:28"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "503:58:28"
                    }
                  ]
                },
                "name": "abi_encode_t_rational_1_by_1_to_t_uint256_fromStack",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "481:5:28",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nodeType": "YulTypedName",
                    "src": "488:3:28",
                    "type": ""
                  }
                ],
                "src": "420:147:28"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "719:220:28",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "729:74:28",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "795:3:28"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "800:2:28",
                            "type": "",
                            "value": "35"
                          }
                        ],
                        "functionName": {
                          "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                          "nodeType": "YulIdentifier",
                          "src": "736:58:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "736:67:28"
                      },
                      "variableNames": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "729:3:28"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "901:3:28"
                          }
                        ],
                        "functionName": {
                          "name": "store_literal_in_memory_fad4697d3fcdb4442d762ccd36772e2a032f18c62f2361e273fa5186a96318ba",
                          "nodeType": "YulIdentifier",
                          "src": "812:88:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "812:93:28"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "812:93:28"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "914:19:28",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "925:3:28"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "930:2:28",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "921:3:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "921:12:28"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "914:3:28"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_t_stringliteral_fad4697d3fcdb4442d762ccd36772e2a032f18c62f2361e273fa5186a96318ba_to_t_string_memory_ptr_fromStack",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nodeType": "YulTypedName",
                    "src": "707:3:28",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nodeType": "YulTypedName",
                    "src": "715:3:28",
                    "type": ""
                  }
                ],
                "src": "573:366:28"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1010:53:28",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "1027:3:28"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1050:5:28"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "1032:17:28"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1032:24:28"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1020:6:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1020:37:28"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1020:37:28"
                    }
                  ]
                },
                "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "998:5:28",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nodeType": "YulTypedName",
                    "src": "1005:3:28",
                    "type": ""
                  }
                ],
                "src": "945:118:28"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1175:132:28",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "1185:26:28",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1197:9:28"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1208:2:28",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1193:3:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1193:18:28"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "1185:4:28"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1273:6:28"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1286:9:28"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1297:1:28",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1282:3:28"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1282:17:28"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_rational_1_by_1_to_t_uint256_fromStack",
                          "nodeType": "YulIdentifier",
                          "src": "1221:51:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1221:79:28"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1221:79:28"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_rational_1_by_1__to_t_uint256__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1147:9:28",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "1159:6:28",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "1170:4:28",
                    "type": ""
                  }
                ],
                "src": "1069:238:28"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1484:248:28",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "1494:26:28",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1506:9:28"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1517:2:28",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1502:3:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1502:18:28"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "1494:4:28"
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
                                "src": "1541:9:28"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1552:1:28",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1537:3:28"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1537:17:28"
                          },
                          {
                            "arguments": [
                              {
                                "name": "tail",
                                "nodeType": "YulIdentifier",
                                "src": "1560:4:28"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1566:9:28"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "1556:3:28"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1556:20:28"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1530:6:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1530:47:28"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1530:47:28"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1586:139:28",
                      "value": {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "1720:4:28"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_stringliteral_fad4697d3fcdb4442d762ccd36772e2a032f18c62f2361e273fa5186a96318ba_to_t_string_memory_ptr_fromStack",
                          "nodeType": "YulIdentifier",
                          "src": "1594:124:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1594:131:28"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "1586:4:28"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_fad4697d3fcdb4442d762ccd36772e2a032f18c62f2361e273fa5186a96318ba__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1464:9:28",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "1479:4:28",
                    "type": ""
                  }
                ],
                "src": "1313:419:28"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1836:124:28",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "1846:26:28",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1858:9:28"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1869:2:28",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1854:3:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1854:18:28"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "1846:4:28"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1926:6:28"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1939:9:28"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1950:1:28",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1935:3:28"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1935:17:28"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                          "nodeType": "YulIdentifier",
                          "src": "1882:43:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1882:71:28"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1882:71:28"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1808:9:28",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "1820:6:28",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "1831:4:28",
                    "type": ""
                  }
                ],
                "src": "1738:222:28"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2062:73:28",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "2079:3:28"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2084:6:28"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2072:6:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2072:19:28"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2072:19:28"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2100:29:28",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "2119:3:28"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2124:4:28",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2115:3:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2115:14:28"
                      },
                      "variableNames": [
                        {
                          "name": "updated_pos",
                          "nodeType": "YulIdentifier",
                          "src": "2100:11:28"
                        }
                      ]
                    }
                  ]
                },
                "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nodeType": "YulTypedName",
                    "src": "2034:3:28",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nodeType": "YulTypedName",
                    "src": "2039:6:28",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "updated_pos",
                    "nodeType": "YulTypedName",
                    "src": "2050:11:28",
                    "type": ""
                  }
                ],
                "src": "1966:169:28"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2185:261:28",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "2195:25:28",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "2218:1:28"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "2200:17:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2200:20:28"
                      },
                      "variableNames": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "2195:1:28"
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2229:25:28",
                      "value": {
                        "arguments": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "2252:1:28"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "2234:17:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2234:20:28"
                      },
                      "variableNames": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "2229:1:28"
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2392:22:28",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nodeType": "YulIdentifier",
                                "src": "2394:16:28"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2394:18:28"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2394:18:28"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "2313:1:28"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2320:66:28",
                                "type": "",
                                "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                              },
                              {
                                "name": "y",
                                "nodeType": "YulIdentifier",
                                "src": "2388:1:28"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "2316:3:28"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2316:74:28"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "2310:2:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2310:81:28"
                      },
                      "nodeType": "YulIf",
                      "src": "2307:2:28"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2424:16:28",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "2435:1:28"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "2438:1:28"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2431:3:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2431:9:28"
                      },
                      "variableNames": [
                        {
                          "name": "sum",
                          "nodeType": "YulIdentifier",
                          "src": "2424:3:28"
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
                    "src": "2172:1:28",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nodeType": "YulTypedName",
                    "src": "2175:1:28",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "sum",
                    "nodeType": "YulTypedName",
                    "src": "2181:3:28",
                    "type": ""
                  }
                ],
                "src": "2141:305:28"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2497:32:28",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "2507:16:28",
                      "value": {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2518:5:28"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nodeType": "YulIdentifier",
                          "src": "2507:7:28"
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
                    "src": "2479:5:28",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nodeType": "YulTypedName",
                    "src": "2489:7:28",
                    "type": ""
                  }
                ],
                "src": "2452:77:28"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2603:53:28",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "2613:37:28",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2644:5:28"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "2626:17:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2626:24:28"
                      },
                      "variableNames": [
                        {
                          "name": "converted",
                          "nodeType": "YulIdentifier",
                          "src": "2613:9:28"
                        }
                      ]
                    }
                  ]
                },
                "name": "convert_t_rational_1_by_1_to_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "2583:5:28",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "converted",
                    "nodeType": "YulTypedName",
                    "src": "2593:9:28",
                    "type": ""
                  }
                ],
                "src": "2535:121:28"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2705:190:28",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "2715:33:28",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2742:5:28"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "2724:17:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2724:24:28"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2715:5:28"
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2838:22:28",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nodeType": "YulIdentifier",
                                "src": "2840:16:28"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2840:18:28"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2840:18:28"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2763:5:28"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2770:66:28",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "2760:2:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2760:77:28"
                      },
                      "nodeType": "YulIf",
                      "src": "2757:2:28"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2869:20:28",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2880:5:28"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2887:1:28",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2876:3:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2876:13:28"
                      },
                      "variableNames": [
                        {
                          "name": "ret",
                          "nodeType": "YulIdentifier",
                          "src": "2869:3:28"
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
                    "src": "2691:5:28",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "ret",
                    "nodeType": "YulTypedName",
                    "src": "2701:3:28",
                    "type": ""
                  }
                ],
                "src": "2662:233:28"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2929:152:28",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2946:1:28",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2949:77:28",
                            "type": "",
                            "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2939:6:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2939:88:28"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2939:88:28"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3043:1:28",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3046:4:28",
                            "type": "",
                            "value": "0x11"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3036:6:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3036:15:28"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3036:15:28"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3067:1:28",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3070:4:28",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nodeType": "YulIdentifier",
                          "src": "3060:6:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3060:15:28"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3060:15:28"
                    }
                  ]
                },
                "name": "panic_error_0x11",
                "nodeType": "YulFunctionDefinition",
                "src": "2901:180:28"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "3193:116:28",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "memPtr",
                                "nodeType": "YulIdentifier",
                                "src": "3215:6:28"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3223:1:28",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3211:3:28"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3211:14:28"
                          },
                          {
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "3227:34:28",
                            "type": "",
                            "value": "incBy: increment should be posit"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3204:6:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3204:58:28"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3204:58:28"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "memPtr",
                                "nodeType": "YulIdentifier",
                                "src": "3283:6:28"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3291:2:28",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3279:3:28"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3279:15:28"
                          },
                          {
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "3296:5:28",
                            "type": "",
                            "value": "ive"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3272:6:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3272:30:28"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3272:30:28"
                    }
                  ]
                },
                "name": "store_literal_in_memory_fad4697d3fcdb4442d762ccd36772e2a032f18c62f2361e273fa5186a96318ba",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "memPtr",
                    "nodeType": "YulTypedName",
                    "src": "3185:6:28",
                    "type": ""
                  }
                ],
                "src": "3087:222:28"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "3358:79:28",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3415:16:28",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3424:1:28",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3427:1:28",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "3417:6:28"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3417:12:28"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "3417:12:28"
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
                                "src": "3381:5:28"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "3406:5:28"
                                  }
                                ],
                                "functionName": {
                                  "name": "cleanup_t_uint256",
                                  "nodeType": "YulIdentifier",
                                  "src": "3388:17:28"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3388:24:28"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "3378:2:28"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3378:35:28"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "3371:6:28"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3371:43:28"
                      },
                      "nodeType": "YulIf",
                      "src": "3368:2:28"
                    }
                  ]
                },
                "name": "validator_revert_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "3351:5:28",
                    "type": ""
                  }
                ],
                "src": "3315:122:28"
              }
            ]
          },
          "contents": "{\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_rational_1_by_1_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, convert_t_rational_1_by_1_to_t_uint256(value))\n    }\n\n    function abi_encode_t_stringliteral_fad4697d3fcdb4442d762ccd36772e2a032f18c62f2361e273fa5186a96318ba_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 35)\n        store_literal_in_memory_fad4697d3fcdb4442d762ccd36772e2a032f18c62f2361e273fa5186a96318ba(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_rational_1_by_1__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_rational_1_by_1_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_fad4697d3fcdb4442d762ccd36772e2a032f18c62f2361e273fa5186a96318ba__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fad4697d3fcdb4442d762ccd36772e2a032f18c62f2361e273fa5186a96318ba_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function convert_t_rational_1_by_1_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(value)\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function store_literal_in_memory_fad4697d3fcdb4442d762ccd36772e2a032f18c62f2361e273fa5186a96318ba(memPtr) {\n\n        mstore(add(memPtr, 0), \"incBy: increment should be posit\")\n\n        mstore(add(memPtr, 32), \"ive\")\n\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
          "id": 28,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "608060405234801561001057600080fd5b50600436106100415760003560e01c80630c55699c14610046578063371303c01461006457806370119d061461006e575b600080fd5b61004e61008a565b60405161005b9190610230565b60405180910390f35b61006c610090565b005b6100886004803603810190610083919061018b565b6100e1565b005b60005481565b6000808154809291906100a2906102ce565b91905055507f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a8160016040516100d791906101f5565b60405180910390a1565b60008111610124576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011b90610210565b60405180910390fd5b80600080828254610135919061025c565b925050819055507f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a818160405161016b9190610230565b60405180910390a150565b60008135905061018581610395565b92915050565b60006020828403121561019d57600080fd5b60006101ab84828501610176565b91505092915050565b6101bd816102bc565b82525050565b60006101d060238361024b565b91506101db82610346565b604082019050919050565b6101ef816102b2565b82525050565b600060208201905061020a60008301846101b4565b92915050565b60006020820190508181036000830152610229816101c3565b9050919050565b600060208201905061024560008301846101e6565b92915050565b600082825260208201905092915050565b6000610267826102b2565b9150610272836102b2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156102a7576102a6610317565b5b828201905092915050565b6000819050919050565b60006102c7826102b2565b9050919050565b60006102d9826102b2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561030c5761030b610317565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f696e6342793a20696e6372656d656e742073686f756c6420626520706f73697460008201527f6976650000000000000000000000000000000000000000000000000000000000602082015250565b61039e816102b2565b81146103a957600080fd5b5056fea26469706673582212201117f4e51ffcbdaf72ba8ed4c018ee10334f0defaf6414a0ce95cd879431d65064736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x41 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0xC55699C EQ PUSH2 0x46 JUMPI DUP1 PUSH4 0x371303C0 EQ PUSH2 0x64 JUMPI DUP1 PUSH4 0x70119D06 EQ PUSH2 0x6E JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x4E PUSH2 0x8A JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x5B SWAP2 SWAP1 PUSH2 0x230 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x6C PUSH2 0x90 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x88 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x83 SWAP2 SWAP1 PUSH2 0x18B JUMP JUMPDEST PUSH2 0xE1 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 DUP2 SLOAD DUP1 SWAP3 SWAP2 SWAP1 PUSH2 0xA2 SWAP1 PUSH2 0x2CE JUMP JUMPDEST SWAP2 SWAP1 POP SSTORE POP PUSH32 0x51AF157C2EEE40F68107A47A49C32FBBEB0A3C9E5CD37AA56E88E6BE92368A81 PUSH1 0x1 PUSH1 0x40 MLOAD PUSH2 0xD7 SWAP2 SWAP1 PUSH2 0x1F5 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 JUMP JUMPDEST PUSH1 0x0 DUP2 GT PUSH2 0x124 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x11B SWAP1 PUSH2 0x210 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x0 DUP1 DUP3 DUP3 SLOAD PUSH2 0x135 SWAP2 SWAP1 PUSH2 0x25C JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP PUSH32 0x51AF157C2EEE40F68107A47A49C32FBBEB0A3C9E5CD37AA56E88E6BE92368A81 DUP2 PUSH1 0x40 MLOAD PUSH2 0x16B SWAP2 SWAP1 PUSH2 0x230 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x185 DUP2 PUSH2 0x395 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x19D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1AB DUP5 DUP3 DUP6 ADD PUSH2 0x176 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x1BD DUP2 PUSH2 0x2BC JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1D0 PUSH1 0x23 DUP4 PUSH2 0x24B JUMP JUMPDEST SWAP2 POP PUSH2 0x1DB DUP3 PUSH2 0x346 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x1EF DUP2 PUSH2 0x2B2 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x20A PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1B4 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x229 DUP2 PUSH2 0x1C3 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x245 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1E6 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x267 DUP3 PUSH2 0x2B2 JUMP JUMPDEST SWAP2 POP PUSH2 0x272 DUP4 PUSH2 0x2B2 JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP3 GT ISZERO PUSH2 0x2A7 JUMPI PUSH2 0x2A6 PUSH2 0x317 JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2C7 DUP3 PUSH2 0x2B2 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2D9 DUP3 PUSH2 0x2B2 JUMP JUMPDEST SWAP2 POP PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 EQ ISZERO PUSH2 0x30C JUMPI PUSH2 0x30B PUSH2 0x317 JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x696E6342793A20696E6372656D656E742073686F756C6420626520706F736974 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6976650000000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH2 0x39E DUP2 PUSH2 0x2B2 JUMP JUMPDEST DUP2 EQ PUSH2 0x3A9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 GT OR DELEGATECALL 0xE5 0x1F 0xFC 0xBD 0xAF PUSH19 0xBA8ED4C018EE10334F0DEFAF6414A0CE95CD87 SWAP5 BALANCE 0xD6 POP PUSH5 0x736F6C6343 STOP ADDMOD ADD STOP CALLER ",
      "sourceMap": "64:298:12:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;87:13;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;138:69;;;:::i;:::-;;213:147;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;87:13;;;;:::o;138:69::-;170:1;;:3;;;;;;;;;:::i;:::-;;;;;;188:12;198:1;188:12;;;;;;:::i;:::-;;;;;;;;138:69::o;213:147::-;267:1;262:2;:6;254:54;;;;;;;;;;;;:::i;:::-;;;;;;;;;323:2;318:1;;:7;;;;;;;:::i;:::-;;;;;;;;340:13;350:2;340:13;;;;;;:::i;:::-;;;;;;;;213:147;:::o;7:139:28:-;;91:6;78:20;69:29;;107:33;134:5;107:33;:::i;:::-;59:87;;;;:::o;152:262::-;;260:2;248:9;239:7;235:23;231:32;228:2;;;276:1;273;266:12;228:2;319:1;344:53;389:7;380:6;369:9;365:22;344:53;:::i;:::-;334:63;;290:117;218:196;;;;:::o;420:147::-;515:45;554:5;515:45;:::i;:::-;510:3;503:58;493:74;;:::o;573:366::-;;736:67;800:2;795:3;736:67;:::i;:::-;729:74;;812:93;901:3;812:93;:::i;:::-;930:2;925:3;921:12;914:19;;719:220;;;:::o;945:118::-;1032:24;1050:5;1032:24;:::i;:::-;1027:3;1020:37;1010:53;;:::o;1069:238::-;;1208:2;1197:9;1193:18;1185:26;;1221:79;1297:1;1286:9;1282:17;1273:6;1221:79;:::i;:::-;1175:132;;;;:::o;1313:419::-;;1517:2;1506:9;1502:18;1494:26;;1566:9;1560:4;1556:20;1552:1;1541:9;1537:17;1530:47;1594:131;1720:4;1594:131;:::i;:::-;1586:139;;1484:248;;;:::o;1738:222::-;;1869:2;1858:9;1854:18;1846:26;;1882:71;1950:1;1939:9;1935:17;1926:6;1882:71;:::i;:::-;1836:124;;;;:::o;1966:169::-;;2084:6;2079:3;2072:19;2124:4;2119:3;2115:14;2100:29;;2062:73;;;;:::o;2141:305::-;;2200:20;2218:1;2200:20;:::i;:::-;2195:25;;2234:20;2252:1;2234:20;:::i;:::-;2229:25;;2388:1;2320:66;2316:74;2313:1;2310:81;2307:2;;;2394:18;;:::i;:::-;2307:2;2438:1;2435;2431:9;2424:16;;2185:261;;;;:::o;2452:77::-;;2518:5;2507:16;;2497:32;;;:::o;2535:121::-;;2626:24;2644:5;2626:24;:::i;:::-;2613:37;;2603:53;;;:::o;2662:233::-;;2724:24;2742:5;2724:24;:::i;:::-;2715:33;;2770:66;2763:5;2760:77;2757:2;;;2840:18;;:::i;:::-;2757:2;2887:1;2880:5;2876:13;2869:20;;2705:190;;;:::o;2901:180::-;2949:77;2946:1;2939:88;3046:4;3043:1;3036:15;3070:4;3067:1;3060:15;3087:222;3227:34;3223:1;3215:6;3211:14;3204:58;3296:5;3291:2;3283:6;3279:15;3272:30;3193:116;:::o;3315:122::-;3388:24;3406:5;3388:24;:::i;:::-;3381:5;3378:35;3368:2;;3427:1;3424;3417:12;3368:2;3358:79;:::o"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "198800",
        "executionCost": "245",
        "totalCost": "199045"
      },
      "external": {
        "inc()": "infinite",
        "incBy(uint256)": "infinite",
        "x()": "1107"
      }
    },
    "methodIdentifiers": {
      "inc()": "371303c0",
      "incBy(uint256)": "70119d06",
      "x()": "0c55699c"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"by\",\"type\":\"uint256\"}],\"name\":\"Increment\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"inc\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"by\",\"type\":\"uint256\"}],\"name\":\"incBy\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"x\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/Counter.sol\":\"Counter\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@4.9.6/\"]},\"sources\":{\"project/contracts/Counter.sol\":{\"content\":\"// SPDX-License-Identifier: UNLICENSED\\npragma solidity ^0.8.1;\\n\\ncontract Counter {\\n    uint public x;\\n\\n    event Increment(uint by);\\n\\n    function inc() public {\\n        x++;\\n        emit Increment(1);\\n    }\\n\\n    function incBy(uint by) public {\\n        require(by > 0, \\\"incBy: increment should be positive\\\");\\n        x += by;\\n        emit Increment(by);\\n    }\\n}\\n\",\"keccak256\":\"0x3ea748881ccf572366903e6f03faf41dc22600af4e040aeed011f32171c57cbf\",\"license\":\"UNLICENSED\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 1459,
        "contract": "project/contracts/Counter.sol:Counter",
        "label": "x",
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