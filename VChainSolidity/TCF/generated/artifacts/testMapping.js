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
  "bytecode": "0x608060405234801561001057600080fd5b5061038b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a92317b21461003b578063c6044c461461006b575b600080fd5b610055600480360381019061005091906101e5565b610087565b6040516100629190610262565b60405180910390f35b6100856004803603810190610080919061020e565b6100a7565b005b60006020528060005260406000206000915054906101000a900460ff1681565b6100b182826100b5565b5050565b600082829050905060005b81811015610180576001600080868685818110610106577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b905060200201602081019061011b91906101e5565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360ff1602179055508080610178906102c6565b9150506100c0565b50505050565b6000813590506101958161033e565b92915050565b60008083601f8401126101ad57600080fd5b8235905067ffffffffffffffff8111156101c657600080fd5b6020830191508360208202830111156101de57600080fd5b9250929050565b6000602082840312156101f757600080fd5b600061020584828501610186565b91505092915050565b6000806020838503121561022157600080fd5b600083013567ffffffffffffffff81111561023b57600080fd5b6102478582860161019b565b92509250509250929050565b61025c816102b9565b82525050565b60006020820190506102776000830184610253565b92915050565b60006102888261028f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006102d1826102af565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156103045761030361030f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6103478161027d565b811461035257600080fd5b5056fea2646970667358221220836cb689edea9fc0b856bd3189296fddf527a5104a6e56ebe3b1bbd9182c583564736f6c63430008010033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c8063a92317b21461003b578063c6044c461461006b575b600080fd5b610055600480360381019061005091906101e5565b610087565b6040516100629190610262565b60405180910390f35b6100856004803603810190610080919061020e565b6100a7565b005b60006020528060005260406000206000915054906101000a900460ff1681565b6100b182826100b5565b5050565b600082829050905060005b81811015610180576001600080868685818110610106577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b905060200201602081019061011b91906101e5565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360ff1602179055508080610178906102c6565b9150506100c0565b50505050565b6000813590506101958161033e565b92915050565b60008083601f8401126101ad57600080fd5b8235905067ffffffffffffffff8111156101c657600080fd5b6020830191508360208202830111156101de57600080fd5b9250929050565b6000602082840312156101f757600080fd5b600061020584828501610186565b91505092915050565b6000806020838503121561022157600080fd5b600083013567ffffffffffffffff81111561023b57600080fd5b6102478582860161019b565b92509250509250929050565b61025c816102b9565b82525050565b60006020820190506102776000830184610253565b92915050565b60006102888261028f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006102d1826102af565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156103045761030361030f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6103478161027d565b811461035257600080fd5b5056fea2646970667358221220836cb689edea9fc0b856bd3189296fddf527a5104a6e56ebe3b1bbd9182c583564736f6c63430008010033",
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
      "object": "608060405234801561001057600080fd5b5061038b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a92317b21461003b578063c6044c461461006b575b600080fd5b610055600480360381019061005091906101e5565b610087565b6040516100629190610262565b60405180910390f35b6100856004803603810190610080919061020e565b6100a7565b005b60006020528060005260406000206000915054906101000a900460ff1681565b6100b182826100b5565b5050565b600082829050905060005b81811015610180576001600080868685818110610106577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b905060200201602081019061011b91906101e5565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360ff1602179055508080610178906102c6565b9150506100c0565b50505050565b6000813590506101958161033e565b92915050565b60008083601f8401126101ad57600080fd5b8235905067ffffffffffffffff8111156101c657600080fd5b6020830191508360208202830111156101de57600080fd5b9250929050565b6000602082840312156101f757600080fd5b600061020584828501610186565b91505092915050565b6000806020838503121561022157600080fd5b600083013567ffffffffffffffff81111561023b57600080fd5b6102478582860161019b565b92509250509250929050565b61025c816102b9565b82525050565b60006020820190506102776000830184610253565b92915050565b60006102888261028f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006102d1826102af565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156103045761030361030f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6103478161027d565b811461035257600080fd5b5056fea2646970667358221220836cb689edea9fc0b856bd3189296fddf527a5104a6e56ebe3b1bbd9182c583564736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x38B DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x36 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0xA92317B2 EQ PUSH2 0x3B JUMPI DUP1 PUSH4 0xC6044C46 EQ PUSH2 0x6B JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x55 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x50 SWAP2 SWAP1 PUSH2 0x1E5 JUMP JUMPDEST PUSH2 0x87 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x62 SWAP2 SWAP1 PUSH2 0x262 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x85 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x80 SWAP2 SWAP1 PUSH2 0x20E JUMP JUMPDEST PUSH2 0xA7 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH2 0xB1 DUP3 DUP3 PUSH2 0xB5 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 SWAP1 POP SWAP1 POP PUSH1 0x0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x180 JUMPI PUSH1 0x1 PUSH1 0x0 DUP1 DUP7 DUP7 DUP6 DUP2 DUP2 LT PUSH2 0x106 JUMPI PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST SWAP1 POP PUSH1 0x20 MUL ADD PUSH1 0x20 DUP2 ADD SWAP1 PUSH2 0x11B SWAP2 SWAP1 PUSH2 0x1E5 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 PUSH1 0xFF AND MUL OR SWAP1 SSTORE POP DUP1 DUP1 PUSH2 0x178 SWAP1 PUSH2 0x2C6 JUMP JUMPDEST SWAP2 POP POP PUSH2 0xC0 JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x195 DUP2 PUSH2 0x33E JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 DUP4 PUSH1 0x1F DUP5 ADD SLT PUSH2 0x1AD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 CALLDATALOAD SWAP1 POP PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x1C6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x20 DUP4 ADD SWAP2 POP DUP4 PUSH1 0x20 DUP3 MUL DUP4 ADD GT ISZERO PUSH2 0x1DE JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1F7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x205 DUP5 DUP3 DUP6 ADD PUSH2 0x186 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x20 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x221 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP4 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x23B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x247 DUP6 DUP3 DUP7 ADD PUSH2 0x19B JUMP JUMPDEST SWAP3 POP SWAP3 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH2 0x25C DUP2 PUSH2 0x2B9 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x277 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x253 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x288 DUP3 PUSH2 0x28F JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2D1 DUP3 PUSH2 0x2AF JUMP JUMPDEST SWAP2 POP PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 EQ ISZERO PUSH2 0x304 JUMPI PUSH2 0x303 PUSH2 0x30F JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH2 0x347 DUP2 PUSH2 0x27D JUMP JUMPDEST DUP2 EQ PUSH2 0x352 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 DUP4 PUSH13 0xB689EDEA9FC0B856BD3189296F 0xDD CREATE2 0x27 0xA5 LT 0x4A PUSH15 0x56EBE3B1BBD9182C583564736F6C63 NUMBER STOP ADDMOD ADD STOP CALLER ",
      "sourceMap": "1324:444:22:-:0;;;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [
        {
          "ast": {
            "nodeType": "YulBlock",
            "src": "0:2538:23",
            "statements": [
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "59:87:23",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "69:29:23",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "91:6:23"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "78:12:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "78:20:23"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "69:5:23"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "134:5:23"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "107:26:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "107:33:23"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "107:33:23"
                    }
                  ]
                },
                "name": "abi_decode_t_address",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nodeType": "YulTypedName",
                    "src": "37:6:23",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nodeType": "YulTypedName",
                    "src": "45:3:23",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "53:5:23",
                    "type": ""
                  }
                ],
                "src": "7:139:23"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "259:277:23",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "308:16:23",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "317:1:23",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "320:1:23",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "310:6:23"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "310:12:23"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "310:12:23"
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
                                    "name": "offset",
                                    "nodeType": "YulIdentifier",
                                    "src": "287:6:23"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "295:4:23",
                                    "type": "",
                                    "value": "0x1f"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "283:3:23"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "283:17:23"
                              },
                              {
                                "name": "end",
                                "nodeType": "YulIdentifier",
                                "src": "302:3:23"
                              }
                            ],
                            "functionName": {
                              "name": "slt",
                              "nodeType": "YulIdentifier",
                              "src": "279:3:23"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "279:27:23"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "272:6:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "272:35:23"
                      },
                      "nodeType": "YulIf",
                      "src": "269:2:23"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "333:30:23",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "356:6:23"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "343:12:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "343:20:23"
                      },
                      "variableNames": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "333:6:23"
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "406:16:23",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "415:1:23",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "418:1:23",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "408:6:23"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "408:12:23"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "408:12:23"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "378:6:23"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "386:18:23",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "375:2:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "375:30:23"
                      },
                      "nodeType": "YulIf",
                      "src": "372:2:23"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "431:29:23",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "447:6:23"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "455:4:23",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "443:3:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "443:17:23"
                      },
                      "variableNames": [
                        {
                          "name": "arrayPos",
                          "nodeType": "YulIdentifier",
                          "src": "431:8:23"
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "514:16:23",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "523:1:23",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "526:1:23",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "516:6:23"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "516:12:23"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "516:12:23"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "arrayPos",
                                "nodeType": "YulIdentifier",
                                "src": "479:8:23"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "493:6:23"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "501:4:23",
                                    "type": "",
                                    "value": "0x20"
                                  }
                                ],
                                "functionName": {
                                  "name": "mul",
                                  "nodeType": "YulIdentifier",
                                  "src": "489:3:23"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "489:17:23"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "475:3:23"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "475:32:23"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "509:3:23"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "472:2:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "472:41:23"
                      },
                      "nodeType": "YulIf",
                      "src": "469:2:23"
                    }
                  ]
                },
                "name": "abi_decode_t_array$_t_address_$dyn_calldata_ptr",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nodeType": "YulTypedName",
                    "src": "226:6:23",
                    "type": ""
                  },
                  {
                    "name": "end",
                    "nodeType": "YulTypedName",
                    "src": "234:3:23",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "arrayPos",
                    "nodeType": "YulTypedName",
                    "src": "242:8:23",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nodeType": "YulTypedName",
                    "src": "252:6:23",
                    "type": ""
                  }
                ],
                "src": "169:367:23"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "608:196:23",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "654:16:23",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "663:1:23",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "666:1:23",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "656:6:23"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "656:12:23"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "656:12:23"
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
                                "src": "629:7:23"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "638:9:23"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "625:3:23"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "625:23:23"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "650:2:23",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "621:3:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "621:32:23"
                      },
                      "nodeType": "YulIf",
                      "src": "618:2:23"
                    },
                    {
                      "nodeType": "YulBlock",
                      "src": "680:117:23",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "695:15:23",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "709:1:23",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nodeType": "YulTypedName",
                              "src": "699:6:23",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "724:63:23",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "759:9:23"
                                  },
                                  {
                                    "name": "offset",
                                    "nodeType": "YulIdentifier",
                                    "src": "770:6:23"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "755:3:23"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "755:22:23"
                              },
                              {
                                "name": "dataEnd",
                                "nodeType": "YulIdentifier",
                                "src": "779:7:23"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "734:20:23"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "734:53:23"
                          },
                          "variableNames": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "724:6:23"
                            }
                          ]
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
                    "src": "578:9:23",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "589:7:23",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "601:6:23",
                    "type": ""
                  }
                ],
                "src": "542:262:23"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "911:324:23",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "957:16:23",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "966:1:23",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "969:1:23",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "959:6:23"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "959:12:23"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "959:12:23"
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
                                "src": "932:7:23"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "941:9:23"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "928:3:23"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "928:23:23"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "953:2:23",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "924:3:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "924:32:23"
                      },
                      "nodeType": "YulIf",
                      "src": "921:2:23"
                    },
                    {
                      "nodeType": "YulBlock",
                      "src": "983:245:23",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "998:45:23",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "1029:9:23"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1040:1:23",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1025:3:23"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1025:17:23"
                              }
                            ],
                            "functionName": {
                              "name": "calldataload",
                              "nodeType": "YulIdentifier",
                              "src": "1012:12:23"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1012:31:23"
                          },
                          "variables": [
                            {
                              "name": "offset",
                              "nodeType": "YulTypedName",
                              "src": "1002:6:23",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1090:16:23",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1099:1:23",
                                      "type": "",
                                      "value": "0"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1102:1:23",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "revert",
                                    "nodeType": "YulIdentifier",
                                    "src": "1092:6:23"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1092:12:23"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "1092:12:23"
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1062:6:23"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1070:18:23",
                                "type": "",
                                "value": "0xffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nodeType": "YulIdentifier",
                              "src": "1059:2:23"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1059:30:23"
                          },
                          "nodeType": "YulIf",
                          "src": "1056:2:23"
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "1120:98:23",
                          "value": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "headStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "1190:9:23"
                                  },
                                  {
                                    "name": "offset",
                                    "nodeType": "YulIdentifier",
                                    "src": "1201:6:23"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1186:3:23"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1186:22:23"
                              },
                              {
                                "name": "dataEnd",
                                "nodeType": "YulIdentifier",
                                "src": "1210:7:23"
                              }
                            ],
                            "functionName": {
                              "name": "abi_decode_t_array$_t_address_$dyn_calldata_ptr",
                              "nodeType": "YulIdentifier",
                              "src": "1138:47:23"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1138:80:23"
                          },
                          "variableNames": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1120:6:23"
                            },
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "1128:6:23"
                            }
                          ]
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
                    "src": "873:9:23",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "884:7:23",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "896:6:23",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nodeType": "YulTypedName",
                    "src": "904:6:23",
                    "type": ""
                  }
                ],
                "src": "810:425:23"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1302:51:23",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "1319:3:23"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1340:5:23"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint8",
                              "nodeType": "YulIdentifier",
                              "src": "1324:15:23"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1324:22:23"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1312:6:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1312:35:23"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1312:35:23"
                    }
                  ]
                },
                "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "1290:5:23",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nodeType": "YulTypedName",
                    "src": "1297:3:23",
                    "type": ""
                  }
                ],
                "src": "1241:112:23"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1453:120:23",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "1463:26:23",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1475:9:23"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1486:2:23",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1471:3:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1471:18:23"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "1463:4:23"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1539:6:23"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1552:9:23"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1563:1:23",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1548:3:23"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1548:17:23"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                          "nodeType": "YulIdentifier",
                          "src": "1499:39:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1499:67:23"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1499:67:23"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1425:9:23",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "1437:6:23",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "1448:4:23",
                    "type": ""
                  }
                ],
                "src": "1359:214:23"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1624:51:23",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "1634:35:23",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1663:5:23"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint160",
                          "nodeType": "YulIdentifier",
                          "src": "1645:17:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1645:24:23"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nodeType": "YulIdentifier",
                          "src": "1634:7:23"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_address",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "1606:5:23",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nodeType": "YulTypedName",
                    "src": "1616:7:23",
                    "type": ""
                  }
                ],
                "src": "1579:96:23"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1726:81:23",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "1736:65:23",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1751:5:23"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1758:42:23",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1747:3:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1747:54:23"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nodeType": "YulIdentifier",
                          "src": "1736:7:23"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_uint160",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "1708:5:23",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nodeType": "YulTypedName",
                    "src": "1718:7:23",
                    "type": ""
                  }
                ],
                "src": "1681:126:23"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1858:32:23",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "1868:16:23",
                      "value": {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1879:5:23"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nodeType": "YulIdentifier",
                          "src": "1868:7:23"
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
                    "src": "1840:5:23",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nodeType": "YulTypedName",
                    "src": "1850:7:23",
                    "type": ""
                  }
                ],
                "src": "1813:77:23"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1939:43:23",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "1949:27:23",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1964:5:23"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1971:4:23",
                            "type": "",
                            "value": "0xff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1960:3:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1960:16:23"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nodeType": "YulIdentifier",
                          "src": "1949:7:23"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_uint8",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "1921:5:23",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nodeType": "YulTypedName",
                    "src": "1931:7:23",
                    "type": ""
                  }
                ],
                "src": "1896:86:23"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2031:190:23",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "2041:33:23",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2068:5:23"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "2050:17:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2050:24:23"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2041:5:23"
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2164:22:23",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nodeType": "YulIdentifier",
                                "src": "2166:16:23"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2166:18:23"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2166:18:23"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2089:5:23"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2096:66:23",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "2086:2:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2086:77:23"
                      },
                      "nodeType": "YulIf",
                      "src": "2083:2:23"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2195:20:23",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2206:5:23"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2213:1:23",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2202:3:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2202:13:23"
                      },
                      "variableNames": [
                        {
                          "name": "ret",
                          "nodeType": "YulIdentifier",
                          "src": "2195:3:23"
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
                    "src": "2017:5:23",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "ret",
                    "nodeType": "YulTypedName",
                    "src": "2027:3:23",
                    "type": ""
                  }
                ],
                "src": "1988:233:23"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2255:152:23",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2272:1:23",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2275:77:23",
                            "type": "",
                            "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2265:6:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2265:88:23"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2265:88:23"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2369:1:23",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2372:4:23",
                            "type": "",
                            "value": "0x11"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2362:6:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2362:15:23"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2362:15:23"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2393:1:23",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2396:4:23",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nodeType": "YulIdentifier",
                          "src": "2386:6:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2386:15:23"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2386:15:23"
                    }
                  ]
                },
                "name": "panic_error_0x11",
                "nodeType": "YulFunctionDefinition",
                "src": "2227:180:23"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2456:79:23",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2513:16:23",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2522:1:23",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2525:1:23",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "2515:6:23"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2515:12:23"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2515:12:23"
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
                                "src": "2479:5:23"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "2504:5:23"
                                  }
                                ],
                                "functionName": {
                                  "name": "cleanup_t_address",
                                  "nodeType": "YulIdentifier",
                                  "src": "2486:17:23"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2486:24:23"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "2476:2:23"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2476:35:23"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "2469:6:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2469:43:23"
                      },
                      "nodeType": "YulIf",
                      "src": "2466:2:23"
                    }
                  ]
                },
                "name": "validator_revert_t_address",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "2449:5:23",
                    "type": ""
                  }
                ],
                "src": "2413:122:23"
              }
            ]
          },
          "contents": "{\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    // address[]\n    function abi_decode_t_array$_t_address_$dyn_calldata_ptr(offset, end) -> arrayPos, length {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        length := calldataload(offset)\n        if gt(length, 0xffffffffffffffff) { revert(0, 0) }\n        arrayPos := add(offset, 0x20)\n        if gt(add(arrayPos, mul(length, 0x20)), end) { revert(0, 0) }\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_array$_t_address_$dyn_calldata_ptr(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value0, value1 := abi_decode_t_array$_t_address_$dyn_calldata_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n}\n",
          "id": 23,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "608060405234801561001057600080fd5b50600436106100365760003560e01c8063a92317b21461003b578063c6044c461461006b575b600080fd5b610055600480360381019061005091906101e5565b610087565b6040516100629190610262565b60405180910390f35b6100856004803603810190610080919061020e565b6100a7565b005b60006020528060005260406000206000915054906101000a900460ff1681565b6100b182826100b5565b5050565b600082829050905060005b81811015610180576001600080868685818110610106577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b905060200201602081019061011b91906101e5565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360ff1602179055508080610178906102c6565b9150506100c0565b50505050565b6000813590506101958161033e565b92915050565b60008083601f8401126101ad57600080fd5b8235905067ffffffffffffffff8111156101c657600080fd5b6020830191508360208202830111156101de57600080fd5b9250929050565b6000602082840312156101f757600080fd5b600061020584828501610186565b91505092915050565b6000806020838503121561022157600080fd5b600083013567ffffffffffffffff81111561023b57600080fd5b6102478582860161019b565b92509250509250929050565b61025c816102b9565b82525050565b60006020820190506102776000830184610253565b92915050565b60006102888261028f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006102d1826102af565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156103045761030361030f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6103478161027d565b811461035257600080fd5b5056fea2646970667358221220836cb689edea9fc0b856bd3189296fddf527a5104a6e56ebe3b1bbd9182c583564736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x36 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0xA92317B2 EQ PUSH2 0x3B JUMPI DUP1 PUSH4 0xC6044C46 EQ PUSH2 0x6B JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x55 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x50 SWAP2 SWAP1 PUSH2 0x1E5 JUMP JUMPDEST PUSH2 0x87 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x62 SWAP2 SWAP1 PUSH2 0x262 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x85 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x80 SWAP2 SWAP1 PUSH2 0x20E JUMP JUMPDEST PUSH2 0xA7 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH2 0xB1 DUP3 DUP3 PUSH2 0xB5 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 SWAP1 POP SWAP1 POP PUSH1 0x0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x180 JUMPI PUSH1 0x1 PUSH1 0x0 DUP1 DUP7 DUP7 DUP6 DUP2 DUP2 LT PUSH2 0x106 JUMPI PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST SWAP1 POP PUSH1 0x20 MUL ADD PUSH1 0x20 DUP2 ADD SWAP1 PUSH2 0x11B SWAP2 SWAP1 PUSH2 0x1E5 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 PUSH1 0xFF AND MUL OR SWAP1 SSTORE POP DUP1 DUP1 PUSH2 0x178 SWAP1 PUSH2 0x2C6 JUMP JUMPDEST SWAP2 POP POP PUSH2 0xC0 JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x195 DUP2 PUSH2 0x33E JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 DUP4 PUSH1 0x1F DUP5 ADD SLT PUSH2 0x1AD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 CALLDATALOAD SWAP1 POP PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x1C6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x20 DUP4 ADD SWAP2 POP DUP4 PUSH1 0x20 DUP3 MUL DUP4 ADD GT ISZERO PUSH2 0x1DE JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1F7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x205 DUP5 DUP3 DUP6 ADD PUSH2 0x186 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x20 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x221 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP4 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x23B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x247 DUP6 DUP3 DUP7 ADD PUSH2 0x19B JUMP JUMPDEST SWAP3 POP SWAP3 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH2 0x25C DUP2 PUSH2 0x2B9 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x277 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x253 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x288 DUP3 PUSH2 0x28F JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2D1 DUP3 PUSH2 0x2AF JUMP JUMPDEST SWAP2 POP PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 EQ ISZERO PUSH2 0x304 JUMPI PUSH2 0x303 PUSH2 0x30F JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH2 0x347 DUP2 PUSH2 0x27D JUMP JUMPDEST DUP2 EQ PUSH2 0x352 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 DUP4 PUSH13 0xB689EDEA9FC0B856BD3189296F 0xDD CREATE2 0x27 0xA5 LT 0x4A PUSH15 0x56EBE3B1BBD9182C583564736F6C63 NUMBER STOP ADDMOD ADD STOP CALLER ",
      "sourceMap": "1324:444:22:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1352:52;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1413:107;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1352:52;;;;;;;;;;;;;;;;;;;;;;:::o;1413:107::-;1480:32;1497:14;;1480:16;:32::i;:::-;1413:107;;:::o;1528:237::-;1609:11;1623:14;;:21;;1609:35;;1660:9;1655:103;1679:3;1675:1;:7;1655:103;;;1745:1;1704:19;:38;1724:14;;1739:1;1724:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1704:38;;;;;;;;;;;;;;;;:42;;;;;;;;;;;;;;;;;;1684:3;;;;;:::i;:::-;;;;1655:103;;;;1528:237;;;:::o;7:139:23:-;;91:6;78:20;69:29;;107:33;134:5;107:33;:::i;:::-;59:87;;;;:::o;169:367::-;;;302:3;295:4;287:6;283:17;279:27;269:2;;320:1;317;310:12;269:2;356:6;343:20;333:30;;386:18;378:6;375:30;372:2;;;418:1;415;408:12;372:2;455:4;447:6;443:17;431:29;;509:3;501:4;493:6;489:17;479:8;475:32;472:41;469:2;;;526:1;523;516:12;469:2;259:277;;;;;:::o;542:262::-;;650:2;638:9;629:7;625:23;621:32;618:2;;;666:1;663;656:12;618:2;709:1;734:53;779:7;770:6;759:9;755:22;734:53;:::i;:::-;724:63;;680:117;608:196;;;;:::o;810:425::-;;;953:2;941:9;932:7;928:23;924:32;921:2;;;969:1;966;959:12;921:2;1040:1;1029:9;1025:17;1012:31;1070:18;1062:6;1059:30;1056:2;;;1102:1;1099;1092:12;1056:2;1138:80;1210:7;1201:6;1190:9;1186:22;1138:80;:::i;:::-;1120:98;;;;983:245;911:324;;;;;:::o;1241:112::-;1324:22;1340:5;1324:22;:::i;:::-;1319:3;1312:35;1302:51;;:::o;1359:214::-;;1486:2;1475:9;1471:18;1463:26;;1499:67;1563:1;1552:9;1548:17;1539:6;1499:67;:::i;:::-;1453:120;;;;:::o;1579:96::-;;1645:24;1663:5;1645:24;:::i;:::-;1634:35;;1624:51;;;:::o;1681:126::-;;1758:42;1751:5;1747:54;1736:65;;1726:81;;;:::o;1813:77::-;;1879:5;1868:16;;1858:32;;;:::o;1896:86::-;;1971:4;1964:5;1960:16;1949:27;;1939:43;;;:::o;1988:233::-;;2050:24;2068:5;2050:24;:::i;:::-;2041:33;;2096:66;2089:5;2086:77;2083:2;;;2166:18;;:::i;:::-;2083:2;2213:1;2206:5;2202:13;2195:20;;2031:190;;;:::o;2227:180::-;2275:77;2272:1;2265:88;2372:4;2369:1;2362:15;2396:4;2393:1;2386:15;2413:122;2486:24;2504:5;2486:24;:::i;:::-;2479:5;2476:35;2466:2;;2525:1;2522;2515:12;2466:2;2456:79;:::o"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "181400",
        "executionCost": "226",
        "totalCost": "181626"
      },
      "external": {
        "init(address[])": "infinite",
        "supportTokenAddress(address)": "1523"
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
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"}],\"name\":\"init\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"supportTokenAddress\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/test.sol\":\"testMapping\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/token/ERC20/IERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/IERC20.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\r\\n */\\r\\ninterface IERC20 {\\r\\n    /**\\r\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\r\\n     * another (`to`).\\r\\n     *\\r\\n     * Note that `value` may be zero.\\r\\n     */\\r\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\r\\n     * a call to {approve}. `value` is the new allowance.\\r\\n     */\\r\\n    event Approval(\\r\\n        address indexed owner,\\r\\n        address indexed spender,\\r\\n        uint256 value\\r\\n    );\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens in existence.\\r\\n     */\\r\\n    function totalSupply() external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens owned by `account`.\\r\\n     */\\r\\n    function balanceOf(address account) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from the caller's account to `to`.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transfer(address to, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the remaining number of tokens that `spender` will be\\r\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\r\\n     * zero by default.\\r\\n     *\\r\\n     * This value changes when {approve} or {transferFrom} are called.\\r\\n     */\\r\\n    function allowance(\\r\\n        address owner,\\r\\n        address spender\\r\\n    ) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\r\\n     * that someone may use both the old and the new allowance by unfortunate\\r\\n     * transaction ordering. One possible solution to mitigate this race\\r\\n     * condition is to first reduce the spender's allowance to 0 and set the\\r\\n     * desired value afterwards:\\r\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\r\\n     *\\r\\n     * Emits an {Approval} event.\\r\\n     */\\r\\n    function approve(address spender, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from `from` to `to` using the\\r\\n     * allowance mechanism. `amount` is then deducted from the caller's\\r\\n     * allowance.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 amount\\r\\n    ) external returns (bool);\\r\\n}\\r\\n\",\"keccak256\":\"0x0daeecf13274cee034f010e0b6d63166eae133e1b0f6f5ca1e6ade67b16c5808\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/IERC20Metadata.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../IERC20.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Interface for the optional metadata functions from the ERC20 standard.\\r\\n *\\r\\n * _Available since v4.1._\\r\\n */\\r\\ninterface IERC20Metadata is IERC20 {\\r\\n    /**\\r\\n     * @dev Returns the name of the token.\\r\\n     */\\r\\n    function name() external view returns (string memory);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the symbol of the token.\\r\\n     */\\r\\n    function symbol() external view returns (string memory);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the decimals places of the token.\\r\\n     */\\r\\n    function decimals() external view returns (uint8);\\r\\n}\\r\\n\",\"keccak256\":\"0x0270cb4e50d6bcdd780df229606076d39df796860d266b5426f374c36f34fe89\",\"license\":\"MIT\"},\"project/contracts/test.sol\":{\"content\":\"// SPDX-License-Identifier:MIT\\r\\n\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\nimport {\\r\\n    IERC20Metadata\\r\\n} from \\\"./openzeppelin_l/contracts/token/ERC20/extensions/IERC20Metadata.sol\\\";\\r\\nimport {IERC20} from \\\"./openzeppelin_l/contracts/token/ERC20/IERC20.sol\\\";\\r\\n/***\\r\\n * @dev:\\u6d4b\\u8bd5\\u5220\\u9664map\\u6570\\u636e\\u6d88\\u8017\\u7684gas\\r\\n */\\r\\n\\r\\ncontract testGasUsed {\\r\\n    mapping(uint256 => uint256) public NFTDeadline;\\r\\n\\r\\n    // \\u6d4b\\u8bd5\\u4e24\\u6b21\\uff0c\\u7b2c\\u4e00\\u6b21\\u5220\\u9664\\uff0c\\u7b2c\\u4e8c\\u6b21\\u4e0d\\u5220\\u9664\\uff0c\\u67e5\\u770b\\u6d88\\u8017gas\\r\\n    function pushData(uint256 _key, uint256 _value, bool _deleteData) public {\\r\\n        NFTDeadline[_key] = _value;\\r\\n        if (_deleteData) {\\r\\n            deleteData(_key);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function deleteData(uint256 _key) internal {\\r\\n        delete NFTDeadline[_key];\\r\\n    }\\r\\n\\r\\n    function getIERC20MetadataInterfaceId() public pure returns (bytes4) {\\r\\n        return type(IERC20Metadata).interfaceId;\\r\\n    }\\r\\n\\r\\n    function useCall(address tokenAddress) public view returns (string memory) {\\r\\n        bytes memory callData = abi.encodeWithSignature(\\\"symbol()\\\");\\r\\n        // \\u5982\\u679c\\u4f20\\u5165EOA\\u5730\\u5740\\uff0c\\u4f1a\\u8fd4\\u56desuccess\\uff0c\\u4f46\\u957f\\u5ea6\\u4e3a0\\r\\n        (bool success, bytes memory data) = tokenAddress.staticcall(callData);\\r\\n        if (success && data.length > 0) {\\r\\n            return abi.decode(data, (string));\\r\\n        }\\r\\n        return \\\"false\\\";\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testMapping {\\r\\n    mapping(address => uint8) public supportTokenAddress;\\r\\n\\r\\n    function init(address[] calldata tokenAddresses) public {\\r\\n        initTokenAddress(tokenAddresses);\\r\\n    }\\r\\n\\r\\n    function initTokenAddress(address[] calldata tokenAddresses) internal {\\r\\n        uint256 len = tokenAddresses.length;\\r\\n        for (uint256 i = 0; i < len; i++) {\\r\\n            supportTokenAddress[tokenAddresses[i]] = 1;\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testCallContractFunction {\\r\\n    function testInternalCallContractFunction(\\r\\n        address tokenAddress\\r\\n    ) public view returns (string memory) {\\r\\n        IERC20Metadata IERC20TokenAddress = IERC20Metadata(tokenAddress);\\r\\n        string memory symbol = IERC20TokenAddress.symbol();\\r\\n        return symbol;\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testInterfaceID {\\r\\n    function getIERC20MetadataInterfaceId() public pure returns (bytes4) {\\r\\n        return type(IERC20Metadata).interfaceId;\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testTwodimensionalArray {}\\r\\n\",\"keccak256\":\"0x1dea22091da6892648e01043b12d09c3f220a9ac05e5975a172647871d93f91e\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 4837,
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