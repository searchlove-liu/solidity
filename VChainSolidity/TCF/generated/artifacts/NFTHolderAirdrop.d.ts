export declare const Artifact_NFTHolderAirdrop: {
  "contractName": "NFTHolderAirdrop",
  "sourceName": "contracts/airdrop/airdrop.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_rewardToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_nftContract",
          "type": "address"
        },
        {
          "internalType": "uint256[6]",
          "name": "_rewardPerNFT",
          "type": "uint256[6]"
        },
        {
          "internalType": "uint256",
          "name": "_claimStartline",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_claimDeadline",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "claimant",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "AirdropClaimed",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "claimDeadline",
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
      "inputs": [],
      "name": "claimForNFT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimStartline",
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
      "inputs": [],
      "name": "nftContract",
      "outputs": [
        {
          "internalType": "contract IERC1155",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "rewardPerNFT",
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
      "inputs": [],
      "name": "rewardToken",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokenClaimed",
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
  "bytecode": "0x608060405234801561001057600080fd5b506040516107d83803806107d883398101604081905261002f916100e0565b600080546001600160a01b038088166001600160a01b031992831617835560018054918816919092161790555b60068110156100b15783816006811061008557634e487b7160e01b600052603260045260246000fd5b6020908102919091015160008381526002909252604090912055806100a981610198565b91505061005c565b50600491909155600355506101d5915050565b80516001600160a01b03811681146100db57600080fd5b919050565b600080600080600061014086880312156100f8578081fd5b610101866100c4565b945060206101108188016100c4565b945087605f880112610120578182fd5b60405160c081016001600160401b0381118282101715610142576101426101bf565b806040525080604089016101008a018b81111561015d578586fd5b855b600681101561017c5782518452928501929185019160010161015f565b50516101209a909a0151989b979a509198979695505050505050565b60006000198214156101b857634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b6105f4806101e46000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639a08ee951161005b5780639a08ee95146100bb578063cdcc6dcc146100c5578063d56d229d146100d8578063f7c618c1146100ed5761007d565b806336ee1d8d146100825780633ba86c44146100ab5780634e65e2be146100b3575b600080fd5b61009561009036600461042c565b6100f5565b6040516100a29190610536565b60405180910390f35b610095610107565b61009561010d565b6100c3610113565b005b6100956100d336600461042c565b6103d5565b6100e06103e7565b6040516100a29190610475565b6100e06103f6565b60056020526000908152604090205481565b60035481565b60045481565b60045443101561013e5760405162461bcd60e51b815260040161013590610489565b60405180910390fd5b6003544311156101605760405162461bcd60e51b8152600401610135906104e1565b6000805b600681101561027657600154604051627eeac760e11b81526000916001600160a01b03169062fdd58e9061019e903390869060040161045c565b60206040518083038186803b1580156101b657600080fd5b505afa1580156101ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ee9190610444565b6000838152600560205260408120549192509061020b9083610576565b905080156102615760008381526002602052604090205461022c9082610557565b610236908561053f565b93508060056000858152602001908152602001600020600082825461025b919061053f565b90915550505b5050808061026e9061058d565b915050610164565b50600081116102975760405162461bcd60e51b8152600401610135906104b4565b60005460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb906102c9903390859060040161045c565b602060405180830381600087803b1580156102e357600080fd5b505af1925050508015610313575060408051601f3d908101601f1916820190925261031091810190610405565b60015b61036d573d808015610341576040519150601f19603f3d011682016040523d82523d6000602084013e610346565b606091505b5080516103655760405162461bcd60e51b815260040161013590610506565b805160208201fd5b80156103b957336001600160a01b03167f650e45f04ef8a0c267b2f78d983913f69ae3a353b2b32de5429307522be0ab55836040516103ac9190610536565b60405180910390a26103d1565b60405162461bcd60e51b815260040161013590610506565b5050565b60026020526000908152604090205481565b6001546001600160a01b031681565b6000546001600160a01b031681565b600060208284031215610416578081fd5b81518015158114610425578182fd5b9392505050565b60006020828403121561043d578081fd5b5035919050565b600060208284031215610455578081fd5b5051919050565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0391909116815260200190565b60208082526011908201527010db185a5b481b9bdd081cdd185c9d1959607a1b604082015260600190565b6020808252601390820152724e6f207265776172647320746f20636c61696d60681b604082015260600190565b6020808252600b908201526a10db185a5b48195b99195960aa1b604082015260600190565b60208082526016908201527514995dd85c99081d1c985b9cd9995c8819985a5b195960521b604082015260600190565b90815260200190565b60008219821115610552576105526105a8565b500190565b6000816000190483118215151615610571576105716105a8565b500290565b600082821015610588576105886105a8565b500390565b60006000198214156105a1576105a16105a8565b5060010190565b634e487b7160e01b600052601160045260246000fdfea26469706673582212202602189c52f954150d87d9a489fb1b61c2aa35dd19deb6e48b16227105fdc47e64736f6c63430008010033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061007d5760003560e01c80639a08ee951161005b5780639a08ee95146100bb578063cdcc6dcc146100c5578063d56d229d146100d8578063f7c618c1146100ed5761007d565b806336ee1d8d146100825780633ba86c44146100ab5780634e65e2be146100b3575b600080fd5b61009561009036600461042c565b6100f5565b6040516100a29190610536565b60405180910390f35b610095610107565b61009561010d565b6100c3610113565b005b6100956100d336600461042c565b6103d5565b6100e06103e7565b6040516100a29190610475565b6100e06103f6565b60056020526000908152604090205481565b60035481565b60045481565b60045443101561013e5760405162461bcd60e51b815260040161013590610489565b60405180910390fd5b6003544311156101605760405162461bcd60e51b8152600401610135906104e1565b6000805b600681101561027657600154604051627eeac760e11b81526000916001600160a01b03169062fdd58e9061019e903390869060040161045c565b60206040518083038186803b1580156101b657600080fd5b505afa1580156101ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ee9190610444565b6000838152600560205260408120549192509061020b9083610576565b905080156102615760008381526002602052604090205461022c9082610557565b610236908561053f565b93508060056000858152602001908152602001600020600082825461025b919061053f565b90915550505b5050808061026e9061058d565b915050610164565b50600081116102975760405162461bcd60e51b8152600401610135906104b4565b60005460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb906102c9903390859060040161045c565b602060405180830381600087803b1580156102e357600080fd5b505af1925050508015610313575060408051601f3d908101601f1916820190925261031091810190610405565b60015b61036d573d808015610341576040519150601f19603f3d011682016040523d82523d6000602084013e610346565b606091505b5080516103655760405162461bcd60e51b815260040161013590610506565b805160208201fd5b80156103b957336001600160a01b03167f650e45f04ef8a0c267b2f78d983913f69ae3a353b2b32de5429307522be0ab55836040516103ac9190610536565b60405180910390a26103d1565b60405162461bcd60e51b815260040161013590610506565b5050565b60026020526000908152604090205481565b6001546001600160a01b031681565b6000546001600160a01b031681565b600060208284031215610416578081fd5b81518015158114610425578182fd5b9392505050565b60006020828403121561043d578081fd5b5035919050565b600060208284031215610455578081fd5b5051919050565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0391909116815260200190565b60208082526011908201527010db185a5b481b9bdd081cdd185c9d1959607a1b604082015260600190565b6020808252601390820152724e6f207265776172647320746f20636c61696d60681b604082015260600190565b6020808252600b908201526a10db185a5b48195b99195960aa1b604082015260600190565b60208082526016908201527514995dd85c99081d1c985b9cd9995c8819985a5b195960521b604082015260600190565b90815260200190565b60008219821115610552576105526105a8565b500190565b6000816000190483118215151615610571576105716105a8565b500290565b600082821015610588576105886105a8565b500390565b60006000198214156105a1576105a16105a8565b5060010190565b634e487b7160e01b600052601160045260246000fdfea26469706673582212202602189c52f954150d87d9a489fb1b61c2aa35dd19deb6e48b16227105fdc47e64736f6c63430008010033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/airdrop/airdrop.sol",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "evm": {
    "bytecode": {
      "generatedSources": [
        {
          "ast": {
            "nodeType": "YulBlock",
            "src": "0:1703:13",
            "statements": [
              {
                "nodeType": "YulBlock",
                "src": "6:3:13",
                "statements": []
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "76:117:13",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "86:22:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "101:6:13"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "95:5:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "95:13:13"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "86:5:13"
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "171:16:13",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "180:1:13",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "183:1:13",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "173:6:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "173:12:13"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "173:12:13"
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
                                "src": "130:5:13"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "141:5:13"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "156:3:13",
                                            "type": "",
                                            "value": "160"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "161:1:13",
                                            "type": "",
                                            "value": "1"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nodeType": "YulIdentifier",
                                          "src": "152:3:13"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "152:11:13"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "165:1:13",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sub",
                                      "nodeType": "YulIdentifier",
                                      "src": "148:3:13"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "148:19:13"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "137:3:13"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "137:31:13"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "127:2:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "127:42:13"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "120:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "120:50:13"
                      },
                      "nodeType": "YulIf",
                      "src": "117:2:13"
                    }
                  ]
                },
                "name": "abi_decode_t_address_fromMemory",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nodeType": "YulTypedName",
                    "src": "55:6:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "66:5:13",
                    "type": ""
                  }
                ],
                "src": "14:179:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "370:958:13",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "417:26:13",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value4",
                                  "nodeType": "YulIdentifier",
                                  "src": "426:6:13"
                                },
                                {
                                  "name": "value4",
                                  "nodeType": "YulIdentifier",
                                  "src": "434:6:13"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "419:6:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "419:22:13"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "419:22:13"
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
                                "src": "391:7:13"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "400:9:13"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "387:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "387:23:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "412:3:13",
                            "type": "",
                            "value": "320"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "383:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "383:33:13"
                      },
                      "nodeType": "YulIf",
                      "src": "380:2:13"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "452:52:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "494:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "462:31:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "462:42:13"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "452:6:13"
                        }
                      ]
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "513:12:13",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "523:2:13",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "_1",
                          "nodeType": "YulTypedName",
                          "src": "517:2:13",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "534:61:13",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "580:9:13"
                              },
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "591:2:13"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "576:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "576:18:13"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "544:31:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "544:51:13"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "534:6:13"
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "648:26:13",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value4",
                                  "nodeType": "YulIdentifier",
                                  "src": "657:6:13"
                                },
                                {
                                  "name": "value4",
                                  "nodeType": "YulIdentifier",
                                  "src": "665:6:13"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "650:6:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "650:22:13"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "650:22:13"
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
                                    "name": "headStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "622:9:13"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "633:2:13",
                                    "type": "",
                                    "value": "95"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "618:3:13"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "618:18:13"
                              },
                              {
                                "name": "dataEnd",
                                "nodeType": "YulIdentifier",
                                "src": "638:7:13"
                              }
                            ],
                            "functionName": {
                              "name": "slt",
                              "nodeType": "YulIdentifier",
                              "src": "614:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "614:32:13"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "607:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "607:40:13"
                      },
                      "nodeType": "YulIf",
                      "src": "604:2:13"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "683:23:13",
                      "value": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "703:2:13",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "697:5:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "697:9:13"
                      },
                      "variables": [
                        {
                          "name": "memPtr",
                          "nodeType": "YulTypedName",
                          "src": "687:6:13",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "715:34:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "737:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "745:3:13",
                            "type": "",
                            "value": "192"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "733:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "733:16:13"
                      },
                      "variables": [
                        {
                          "name": "newFreePtr",
                          "nodeType": "YulTypedName",
                          "src": "719:10:13",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "824:22:13",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x41",
                                "nodeType": "YulIdentifier",
                                "src": "826:16:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "826:18:13"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "826:18:13"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nodeType": "YulIdentifier",
                                "src": "767:10:13"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "787:2:13",
                                        "type": "",
                                        "value": "64"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "791:1:13",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "783:3:13"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "783:10:13"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "795:1:13",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "779:3:13"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "779:18:13"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nodeType": "YulIdentifier",
                              "src": "764:2:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "764:34:13"
                          },
                          {
                            "arguments": [
                              {
                                "name": "newFreePtr",
                                "nodeType": "YulIdentifier",
                                "src": "803:10:13"
                              },
                              {
                                "name": "memPtr",
                                "nodeType": "YulIdentifier",
                                "src": "815:6:13"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "800:2:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "800:22:13"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nodeType": "YulIdentifier",
                          "src": "761:2:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "761:62:13"
                      },
                      "nodeType": "YulIf",
                      "src": "758:2:13"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "862:2:13",
                            "type": "",
                            "value": "64"
                          },
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "866:10:13"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "855:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "855:22:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "855:22:13"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "886:17:13",
                      "value": {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "897:6:13"
                      },
                      "variables": [
                        {
                          "name": "dst",
                          "nodeType": "YulTypedName",
                          "src": "890:3:13",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "912:29:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "927:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "938:2:13",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "923:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "923:18:13"
                      },
                      "variables": [
                        {
                          "name": "src",
                          "nodeType": "YulTypedName",
                          "src": "916:3:13",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "950:29:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "964:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "975:3:13",
                            "type": "",
                            "value": "256"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "960:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "960:19:13"
                      },
                      "variables": [
                        {
                          "name": "_2",
                          "nodeType": "YulTypedName",
                          "src": "954:2:13",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1007:26:13",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value4",
                                  "nodeType": "YulIdentifier",
                                  "src": "1016:6:13"
                                },
                                {
                                  "name": "value4",
                                  "nodeType": "YulIdentifier",
                                  "src": "1024:6:13"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "1009:6:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1009:22:13"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1009:22:13"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "_2",
                            "nodeType": "YulIdentifier",
                            "src": "994:2:13"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "998:7:13"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "991:2:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "991:15:13"
                      },
                      "nodeType": "YulIf",
                      "src": "988:2:13"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1042:15:13",
                      "value": {
                        "name": "value4",
                        "nodeType": "YulIdentifier",
                        "src": "1051:6:13"
                      },
                      "variables": [
                        {
                          "name": "i",
                          "nodeType": "YulTypedName",
                          "src": "1046:1:13",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1113:111:13",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "1134:3:13"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
                                      "nodeType": "YulIdentifier",
                                      "src": "1145:3:13"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nodeType": "YulIdentifier",
                                    "src": "1139:5:13"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1139:10:13"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nodeType": "YulIdentifier",
                                "src": "1127:6:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1127:23:13"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1127:23:13"
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "1163:19:13",
                            "value": {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "1174:3:13"
                                },
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1179:2:13"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1170:3:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1170:12:13"
                            },
                            "variableNames": [
                              {
                                "name": "dst",
                                "nodeType": "YulIdentifier",
                                "src": "1163:3:13"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "1195:19:13",
                            "value": {
                              "arguments": [
                                {
                                  "name": "src",
                                  "nodeType": "YulIdentifier",
                                  "src": "1206:3:13"
                                },
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1211:2:13"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1202:3:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1202:12:13"
                            },
                            "variableNames": [
                              {
                                "name": "src",
                                "nodeType": "YulIdentifier",
                                "src": "1195:3:13"
                              }
                            ]
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "1077:1:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1080:4:13",
                            "type": "",
                            "value": "0x06"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "1074:2:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1074:11:13"
                      },
                      "nodeType": "YulForLoop",
                      "post": {
                        "nodeType": "YulBlock",
                        "src": "1086:18:13",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "1088:14:13",
                            "value": {
                              "arguments": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "1097:1:13"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1100:1:13",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1093:3:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1093:9:13"
                            },
                            "variableNames": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "1088:1:13"
                              }
                            ]
                          }
                        ]
                      },
                      "pre": {
                        "nodeType": "YulBlock",
                        "src": "1070:3:13",
                        "statements": []
                      },
                      "src": "1066:158:13"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1233:16:13",
                      "value": {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "1243:6:13"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "1233:6:13"
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1258:19:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "_2",
                            "nodeType": "YulIdentifier",
                            "src": "1274:2:13"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "1268:5:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1268:9:13"
                      },
                      "variableNames": [
                        {
                          "name": "value3",
                          "nodeType": "YulIdentifier",
                          "src": "1258:6:13"
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1286:36:13",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1306:9:13"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1317:3:13",
                                "type": "",
                                "value": "288"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1302:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1302:19:13"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "1296:5:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1296:26:13"
                      },
                      "variableNames": [
                        {
                          "name": "value4",
                          "nodeType": "YulIdentifier",
                          "src": "1286:6:13"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_addresst_addresst_array$_t_uint256_$6_memory_ptrt_uint256t_uint256_fromMemory",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "304:9:13",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "315:7:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "327:6:13",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nodeType": "YulTypedName",
                    "src": "335:6:13",
                    "type": ""
                  },
                  {
                    "name": "value2",
                    "nodeType": "YulTypedName",
                    "src": "343:6:13",
                    "type": ""
                  },
                  {
                    "name": "value3",
                    "nodeType": "YulTypedName",
                    "src": "351:6:13",
                    "type": ""
                  },
                  {
                    "name": "value4",
                    "nodeType": "YulTypedName",
                    "src": "359:6:13",
                    "type": ""
                  }
                ],
                "src": "198:1130:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1380:189:13",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1419:115:13",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "ret",
                                  "nodeType": "YulIdentifier",
                                  "src": "1440:3:13"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1449:3:13",
                                      "type": "",
                                      "value": "224"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1454:10:13",
                                      "type": "",
                                      "value": "0x4e487b71"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "1445:3:13"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1445:20:13"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nodeType": "YulIdentifier",
                                "src": "1433:6:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1433:33:13"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1433:33:13"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1486:1:13",
                                  "type": "",
                                  "value": "4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1489:4:13",
                                  "type": "",
                                  "value": "0x11"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nodeType": "YulIdentifier",
                                "src": "1479:6:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1479:15:13"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1479:15:13"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "ret",
                                  "nodeType": "YulIdentifier",
                                  "src": "1514:3:13"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1519:4:13",
                                  "type": "",
                                  "value": "0x24"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "1507:6:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1507:17:13"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1507:17:13"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1396:5:13"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1407:1:13",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "1403:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1403:6:13"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "1393:2:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1393:17:13"
                      },
                      "nodeType": "YulIf",
                      "src": "1390:2:13"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1543:20:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1554:5:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1561:1:13",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1550:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1550:13:13"
                      },
                      "variableNames": [
                        {
                          "name": "ret",
                          "nodeType": "YulIdentifier",
                          "src": "1543:3:13"
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
                    "src": "1362:5:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "ret",
                    "nodeType": "YulTypedName",
                    "src": "1372:3:13",
                    "type": ""
                  }
                ],
                "src": "1333:236:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1606:95:13",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1623:1:13",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1630:3:13",
                                "type": "",
                                "value": "224"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1635:10:13",
                                "type": "",
                                "value": "0x4e487b71"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nodeType": "YulIdentifier",
                              "src": "1626:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1626:20:13"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1616:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1616:31:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1616:31:13"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1663:1:13",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1666:4:13",
                            "type": "",
                            "value": "0x41"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1656:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1656:15:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1656:15:13"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1687:1:13",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1690:4:13",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nodeType": "YulIdentifier",
                          "src": "1680:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1680:15:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1680:15:13"
                    }
                  ]
                },
                "name": "panic_error_0x41",
                "nodeType": "YulFunctionDefinition",
                "src": "1574:127:13"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_decode_t_address_fromMemory(offset) -> value\n    {\n        value := mload(offset)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_addresst_array$_t_uint256_$6_memory_ptrt_uint256t_uint256_fromMemory(headStart, dataEnd) -> value0, value1, value2, value3, value4\n    {\n        if slt(sub(dataEnd, headStart), 320) { revert(value4, value4) }\n        value0 := abi_decode_t_address_fromMemory(headStart)\n        let _1 := 32\n        value1 := abi_decode_t_address_fromMemory(add(headStart, _1))\n        if iszero(slt(add(headStart, 95), dataEnd)) { revert(value4, value4) }\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, 192)\n        if or(gt(newFreePtr, sub(shl(64, 1), 1)), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        let dst := memPtr\n        let src := add(headStart, 64)\n        let _2 := add(headStart, 256)\n        if gt(_2, dataEnd) { revert(value4, value4) }\n        let i := value4\n        for { } lt(i, 0x06) { i := add(i, 1) }\n        {\n            mstore(dst, mload(src))\n            dst := add(dst, _1)\n            src := add(src, _1)\n        }\n        value2 := memPtr\n        value3 := mload(_2)\n        value4 := mload(add(headStart, 288))\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0))\n        {\n            mstore(ret, shl(224, 0x4e487b71))\n            mstore(4, 0x11)\n            revert(ret, 0x24)\n        }\n        ret := add(value, 1)\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n}",
          "id": 13,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "linkReferences": {},
      "object": "608060405234801561001057600080fd5b506040516107d83803806107d883398101604081905261002f916100e0565b600080546001600160a01b038088166001600160a01b031992831617835560018054918816919092161790555b60068110156100b15783816006811061008557634e487b7160e01b600052603260045260246000fd5b6020908102919091015160008381526002909252604090912055806100a981610198565b91505061005c565b50600491909155600355506101d5915050565b80516001600160a01b03811681146100db57600080fd5b919050565b600080600080600061014086880312156100f8578081fd5b610101866100c4565b945060206101108188016100c4565b945087605f880112610120578182fd5b60405160c081016001600160401b0381118282101715610142576101426101bf565b806040525080604089016101008a018b81111561015d578586fd5b855b600681101561017c5782518452928501929185019160010161015f565b50516101209a909a0151989b979a509198979695505050505050565b60006000198214156101b857634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b6105f4806101e46000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639a08ee951161005b5780639a08ee95146100bb578063cdcc6dcc146100c5578063d56d229d146100d8578063f7c618c1146100ed5761007d565b806336ee1d8d146100825780633ba86c44146100ab5780634e65e2be146100b3575b600080fd5b61009561009036600461042c565b6100f5565b6040516100a29190610536565b60405180910390f35b610095610107565b61009561010d565b6100c3610113565b005b6100956100d336600461042c565b6103d5565b6100e06103e7565b6040516100a29190610475565b6100e06103f6565b60056020526000908152604090205481565b60035481565b60045481565b60045443101561013e5760405162461bcd60e51b815260040161013590610489565b60405180910390fd5b6003544311156101605760405162461bcd60e51b8152600401610135906104e1565b6000805b600681101561027657600154604051627eeac760e11b81526000916001600160a01b03169062fdd58e9061019e903390869060040161045c565b60206040518083038186803b1580156101b657600080fd5b505afa1580156101ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ee9190610444565b6000838152600560205260408120549192509061020b9083610576565b905080156102615760008381526002602052604090205461022c9082610557565b610236908561053f565b93508060056000858152602001908152602001600020600082825461025b919061053f565b90915550505b5050808061026e9061058d565b915050610164565b50600081116102975760405162461bcd60e51b8152600401610135906104b4565b60005460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb906102c9903390859060040161045c565b602060405180830381600087803b1580156102e357600080fd5b505af1925050508015610313575060408051601f3d908101601f1916820190925261031091810190610405565b60015b61036d573d808015610341576040519150601f19603f3d011682016040523d82523d6000602084013e610346565b606091505b5080516103655760405162461bcd60e51b815260040161013590610506565b805160208201fd5b80156103b957336001600160a01b03167f650e45f04ef8a0c267b2f78d983913f69ae3a353b2b32de5429307522be0ab55836040516103ac9190610536565b60405180910390a26103d1565b60405162461bcd60e51b815260040161013590610506565b5050565b60026020526000908152604090205481565b6001546001600160a01b031681565b6000546001600160a01b031681565b600060208284031215610416578081fd5b81518015158114610425578182fd5b9392505050565b60006020828403121561043d578081fd5b5035919050565b600060208284031215610455578081fd5b5051919050565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0391909116815260200190565b60208082526011908201527010db185a5b481b9bdd081cdd185c9d1959607a1b604082015260600190565b6020808252601390820152724e6f207265776172647320746f20636c61696d60681b604082015260600190565b6020808252600b908201526a10db185a5b48195b99195960aa1b604082015260600190565b60208082526016908201527514995dd85c99081d1c985b9cd9995c8819985a5b195960521b604082015260600190565b90815260200190565b60008219821115610552576105526105a8565b500190565b6000816000190483118215151615610571576105716105a8565b500290565b600082821015610588576105886105a8565b500390565b60006000198214156105a1576105a16105a8565b5060010190565b634e487b7160e01b600052601160045260246000fdfea26469706673582212202602189c52f954150d87d9a489fb1b61c2aa35dd19deb6e48b16227105fdc47e64736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0x7D8 CODESIZE SUB DUP1 PUSH2 0x7D8 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 DUP2 SWAP1 MSTORE PUSH2 0x2F SWAP2 PUSH2 0xE0 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP1 DUP9 AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT SWAP3 DUP4 AND OR DUP4 SSTORE PUSH1 0x1 DUP1 SLOAD SWAP2 DUP9 AND SWAP2 SWAP1 SWAP3 AND OR SWAP1 SSTORE JUMPDEST PUSH1 0x6 DUP2 LT ISZERO PUSH2 0xB1 JUMPI DUP4 DUP2 PUSH1 0x6 DUP2 LT PUSH2 0x85 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x20 SWAP1 DUP2 MUL SWAP2 SWAP1 SWAP2 ADD MLOAD PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x2 SWAP1 SWAP3 MSTORE PUSH1 0x40 SWAP1 SWAP2 KECCAK256 SSTORE DUP1 PUSH2 0xA9 DUP2 PUSH2 0x198 JUMP JUMPDEST SWAP2 POP POP PUSH2 0x5C JUMP JUMPDEST POP PUSH1 0x4 SWAP2 SWAP1 SWAP2 SSTORE PUSH1 0x3 SSTORE POP PUSH2 0x1D5 SWAP2 POP POP JUMP JUMPDEST DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0xDB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x0 PUSH2 0x140 DUP7 DUP9 SUB SLT ISZERO PUSH2 0xF8 JUMPI DUP1 DUP2 REVERT JUMPDEST PUSH2 0x101 DUP7 PUSH2 0xC4 JUMP JUMPDEST SWAP5 POP PUSH1 0x20 PUSH2 0x110 DUP2 DUP9 ADD PUSH2 0xC4 JUMP JUMPDEST SWAP5 POP DUP8 PUSH1 0x5F DUP9 ADD SLT PUSH2 0x120 JUMPI DUP2 DUP3 REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH1 0xC0 DUP2 ADD PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP2 GT DUP3 DUP3 LT OR ISZERO PUSH2 0x142 JUMPI PUSH2 0x142 PUSH2 0x1BF JUMP JUMPDEST DUP1 PUSH1 0x40 MSTORE POP DUP1 PUSH1 0x40 DUP10 ADD PUSH2 0x100 DUP11 ADD DUP12 DUP2 GT ISZERO PUSH2 0x15D JUMPI DUP6 DUP7 REVERT JUMPDEST DUP6 JUMPDEST PUSH1 0x6 DUP2 LT ISZERO PUSH2 0x17C JUMPI DUP3 MLOAD DUP5 MSTORE SWAP3 DUP6 ADD SWAP3 SWAP2 DUP6 ADD SWAP2 PUSH1 0x1 ADD PUSH2 0x15F JUMP JUMPDEST POP MLOAD PUSH2 0x120 SWAP11 SWAP1 SWAP11 ADD MLOAD SWAP9 SWAP12 SWAP8 SWAP11 POP SWAP2 SWAP9 SWAP8 SWAP7 SWAP6 POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x0 NOT DUP3 EQ ISZERO PUSH2 0x1B8 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 DUP2 REVERT JUMPDEST POP PUSH1 0x1 ADD SWAP1 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH2 0x5F4 DUP1 PUSH2 0x1E4 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x7D JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x9A08EE95 GT PUSH2 0x5B JUMPI DUP1 PUSH4 0x9A08EE95 EQ PUSH2 0xBB JUMPI DUP1 PUSH4 0xCDCC6DCC EQ PUSH2 0xC5 JUMPI DUP1 PUSH4 0xD56D229D EQ PUSH2 0xD8 JUMPI DUP1 PUSH4 0xF7C618C1 EQ PUSH2 0xED JUMPI PUSH2 0x7D JUMP JUMPDEST DUP1 PUSH4 0x36EE1D8D EQ PUSH2 0x82 JUMPI DUP1 PUSH4 0x3BA86C44 EQ PUSH2 0xAB JUMPI DUP1 PUSH4 0x4E65E2BE EQ PUSH2 0xB3 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x95 PUSH2 0x90 CALLDATASIZE PUSH1 0x4 PUSH2 0x42C JUMP JUMPDEST PUSH2 0xF5 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xA2 SWAP2 SWAP1 PUSH2 0x536 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x95 PUSH2 0x107 JUMP JUMPDEST PUSH2 0x95 PUSH2 0x10D JUMP JUMPDEST PUSH2 0xC3 PUSH2 0x113 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x95 PUSH2 0xD3 CALLDATASIZE PUSH1 0x4 PUSH2 0x42C JUMP JUMPDEST PUSH2 0x3D5 JUMP JUMPDEST PUSH2 0xE0 PUSH2 0x3E7 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xA2 SWAP2 SWAP1 PUSH2 0x475 JUMP JUMPDEST PUSH2 0xE0 PUSH2 0x3F6 JUMP JUMPDEST PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x4 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x4 SLOAD NUMBER LT ISZERO PUSH2 0x13E JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x135 SWAP1 PUSH2 0x489 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x3 SLOAD NUMBER GT ISZERO PUSH2 0x160 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x135 SWAP1 PUSH2 0x4E1 JUMP JUMPDEST PUSH1 0x0 DUP1 JUMPDEST PUSH1 0x6 DUP2 LT ISZERO PUSH2 0x276 JUMPI PUSH1 0x1 SLOAD PUSH1 0x40 MLOAD PUSH3 0x7EEAC7 PUSH1 0xE1 SHL DUP2 MSTORE PUSH1 0x0 SWAP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP1 PUSH3 0xFDD58E SWAP1 PUSH2 0x19E SWAP1 CALLER SWAP1 DUP7 SWAP1 PUSH1 0x4 ADD PUSH2 0x45C JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x1B6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0x1CA JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x1EE SWAP2 SWAP1 PUSH2 0x444 JUMP JUMPDEST PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 SLOAD SWAP2 SWAP3 POP SWAP1 PUSH2 0x20B SWAP1 DUP4 PUSH2 0x576 JUMP JUMPDEST SWAP1 POP DUP1 ISZERO PUSH2 0x261 JUMPI PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH2 0x22C SWAP1 DUP3 PUSH2 0x557 JUMP JUMPDEST PUSH2 0x236 SWAP1 DUP6 PUSH2 0x53F JUMP JUMPDEST SWAP4 POP DUP1 PUSH1 0x5 PUSH1 0x0 DUP6 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x25B SWAP2 SWAP1 PUSH2 0x53F JUMP JUMPDEST SWAP1 SWAP2 SSTORE POP POP JUMPDEST POP POP DUP1 DUP1 PUSH2 0x26E SWAP1 PUSH2 0x58D JUMP JUMPDEST SWAP2 POP POP PUSH2 0x164 JUMP JUMPDEST POP PUSH1 0x0 DUP2 GT PUSH2 0x297 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x135 SWAP1 PUSH2 0x4B4 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x40 MLOAD PUSH4 0xA9059CBB PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND SWAP1 PUSH4 0xA9059CBB SWAP1 PUSH2 0x2C9 SWAP1 CALLER SWAP1 DUP6 SWAP1 PUSH1 0x4 ADD PUSH2 0x45C JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x2E3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x313 JUMPI POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F RETURNDATASIZE SWAP1 DUP2 ADD PUSH1 0x1F NOT AND DUP3 ADD SWAP1 SWAP3 MSTORE PUSH2 0x310 SWAP2 DUP2 ADD SWAP1 PUSH2 0x405 JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x36D JUMPI RETURNDATASIZE DUP1 DUP1 ISZERO PUSH2 0x341 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x346 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP DUP1 MLOAD PUSH2 0x365 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x135 SWAP1 PUSH2 0x506 JUMP JUMPDEST DUP1 MLOAD PUSH1 0x20 DUP3 ADD REVERT JUMPDEST DUP1 ISZERO PUSH2 0x3B9 JUMPI CALLER PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH32 0x650E45F04EF8A0C267B2F78D983913F69AE3A353B2B32DE5429307522BE0AB55 DUP4 PUSH1 0x40 MLOAD PUSH2 0x3AC SWAP2 SWAP1 PUSH2 0x536 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 PUSH2 0x3D1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x135 SWAP1 PUSH2 0x506 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x2 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x416 JUMPI DUP1 DUP2 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0x425 JUMPI DUP2 DUP3 REVERT JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x43D JUMPI DUP1 DUP2 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x455 JUMPI DUP1 DUP2 REVERT JUMPDEST POP MLOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 SWAP1 SWAP3 AND DUP3 MSTORE PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 ADD SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x11 SWAP1 DUP3 ADD MSTORE PUSH17 0x10DB185A5B481B9BDD081CDD185C9D1959 PUSH1 0x7A SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x13 SWAP1 DUP3 ADD MSTORE PUSH19 0x4E6F207265776172647320746F20636C61696D PUSH1 0x68 SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0xB SWAP1 DUP3 ADD MSTORE PUSH11 0x10DB185A5B48195B991959 PUSH1 0xAA SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x16 SWAP1 DUP3 ADD MSTORE PUSH22 0x14995DD85C99081D1C985B9CD9995C8819985A5B1959 PUSH1 0x52 SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST SWAP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 NOT DUP3 GT ISZERO PUSH2 0x552 JUMPI PUSH2 0x552 PUSH2 0x5A8 JUMP JUMPDEST POP ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x0 NOT DIV DUP4 GT DUP3 ISZERO ISZERO AND ISZERO PUSH2 0x571 JUMPI PUSH2 0x571 PUSH2 0x5A8 JUMP JUMPDEST POP MUL SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 LT ISZERO PUSH2 0x588 JUMPI PUSH2 0x588 PUSH2 0x5A8 JUMP JUMPDEST POP SUB SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x0 NOT DUP3 EQ ISZERO PUSH2 0x5A1 JUMPI PUSH2 0x5A1 PUSH2 0x5A8 JUMP JUMPDEST POP PUSH1 0x1 ADD SWAP1 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x26 MUL XOR SWAP13 MSTORE 0xF9 SLOAD ISZERO 0xD DUP8 0xD9 LOG4 DUP10 0xFB SHL PUSH2 0xC2AA CALLDATALOAD 0xDD NOT 0xDE 0xB6 0xE4 DUP12 AND 0x22 PUSH18 0x5FDC47E64736F6C63430008010033000000 ",
      "sourceMap": "316:3364:0:-:0;;;1419:477;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1620:11;:34;;-1:-1:-1;;;;;1620:34:0;;;-1:-1:-1;;;;;;1620:34:0;;;;;;;1665:36;;;;;;;;;;;;1712:93;1736:1;1732;:5;1712:93;;;1777:13;1791:1;1777:16;;;;;-1:-1:-1;;;1777:16:0;;;;;;;;;;;;;;;;;;1759:15;;;;:12;:15;;;;;;;:34;1772:1;1739:3;1772:1;1739:3;:::i;:::-;;;;1712:93;;;-1:-1:-1;1815:14:0;:32;;;;1858:13;:30;-1:-1:-1;316:3364:0;;-1:-1:-1;;316:3364:0;14:179:13;95:13;;-1:-1:-1;;;;;137:31:13;;127:42;;117:2;;183:1;180;173:12;117:2;76:117;;;:::o;198:1130::-;;;;;;412:3;400:9;391:7;387:23;383:33;380:2;;;434:6;426;419:22;380:2;462:42;494:9;462:42;:::i;:::-;452:52;;523:2;544:51;591:2;580:9;576:18;544:51;:::i;:::-;534:61;;638:7;633:2;622:9;618:18;614:32;604:2;;665:6;657;650:22;604:2;703;697:9;745:3;733:16;;-1:-1:-1;;;;;764:34:13;;800:22;;;761:62;758:2;;;826:18;;:::i;:::-;866:10;862:2;855:22;;897:6;938:2;927:9;923:18;975:3;964:9;960:19;998:7;994:2;991:15;988:2;;;1024:6;1016;1009:22;988:2;1051:6;1066:158;1080:4;1077:1;1074:11;1066:158;;;1139:10;;1127:23;;1170:12;;;;1202;;;;1100:1;1093:9;1066:158;;;-1:-1:-1;1268:9:13;1317:3;1302:19;;;;1296:26;370:958;;;;-1:-1:-1;1243:6:13;;1268:9;1296:26;370:958;-1:-1:-1;;;;;;370:958:13:o;1333:236::-;;-1:-1:-1;;1393:17:13;;1390:2;;;-1:-1:-1;;;1433:33:13;;1489:4;1486:1;1479:15;1519:4;1440:3;1507:17;1390:2;-1:-1:-1;1561:1:13;1550:13;;1380:189::o;1574:127::-;1635:10;1630:3;1626:20;1623:1;1616:31;1666:4;1663:1;1656:15;1690:4;1687:1;1680:15;1606:95;316:3364:0;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [
        {
          "ast": {
            "nodeType": "YulBlock",
            "src": "0:3708:13",
            "statements": [
              {
                "nodeType": "YulBlock",
                "src": "6:3:13",
                "statements": []
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "92:219:13",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "138:26:13",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "147:6:13"
                                },
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "155:6:13"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "140:6:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "140:22:13"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "140:22:13"
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
                                "src": "113:7:13"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "122:9:13"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "109:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "109:23:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "134:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "105:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "105:32:13"
                      },
                      "nodeType": "YulIf",
                      "src": "102:2:13"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "173:29:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "192:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "186:5:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "186:16:13"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nodeType": "YulTypedName",
                          "src": "177:5:13",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "255:26:13",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "264:6:13"
                                },
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "272:6:13"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "257:6:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "257:22:13"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "257:22:13"
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
                                "src": "224:5:13"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "245:5:13"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "iszero",
                                      "nodeType": "YulIdentifier",
                                      "src": "238:6:13"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "238:13:13"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nodeType": "YulIdentifier",
                                  "src": "231:6:13"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "231:21:13"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "221:2:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "221:32:13"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "214:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "214:40:13"
                      },
                      "nodeType": "YulIf",
                      "src": "211:2:13"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "290:15:13",
                      "value": {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "300:5:13"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "290:6:13"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_bool_fromMemory",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "58:9:13",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "69:7:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "81:6:13",
                    "type": ""
                  }
                ],
                "src": "14:297:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "386:120:13",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "432:26:13",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "441:6:13"
                                },
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "449:6:13"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "434:6:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "434:22:13"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "434:22:13"
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
                                "src": "407:7:13"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "416:9:13"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "403:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "403:23:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "428:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "399:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "399:32:13"
                      },
                      "nodeType": "YulIf",
                      "src": "396:2:13"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "467:33:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "490:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "477:12:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "477:23:13"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "467:6:13"
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
                    "src": "352:9:13",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "363:7:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "375:6:13",
                    "type": ""
                  }
                ],
                "src": "316:190:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "592:113:13",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "638:26:13",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "647:6:13"
                                },
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "655:6:13"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "640:6:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "640:22:13"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "640:22:13"
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
                                "src": "613:7:13"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "622:9:13"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "609:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "609:23:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "634:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "605:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "605:32:13"
                      },
                      "nodeType": "YulIf",
                      "src": "602:2:13"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "673:26:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "689:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "683:5:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "683:16:13"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "673:6:13"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_uint256_fromMemory",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "558:9:13",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "569:7:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "581:6:13",
                    "type": ""
                  }
                ],
                "src": "511:194:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "839:145:13",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "849:26:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "861:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "872:2:13",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "857:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "857:18:13"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "849:4:13"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "891:9:13"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "906:6:13"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "922:3:13",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "927:1:13",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "918:3:13"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "918:11:13"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "931:1:13",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "914:3:13"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "914:19:13"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "902:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "902:32:13"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "884:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "884:51:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "884:51:13"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "955:9:13"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "966:2:13",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "951:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "951:18:13"
                          },
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "971:6:13"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "944:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "944:34:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "944:34:13"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "800:9:13",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nodeType": "YulTypedName",
                    "src": "811:6:13",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "819:6:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "830:4:13",
                    "type": ""
                  }
                ],
                "src": "710:274:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1106:102:13",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "1116:26:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1128:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1139:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1124:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1124:18:13"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "1116:4:13"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1158:9:13"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "1173:6:13"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1189:3:13",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1194:1:13",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "1185:3:13"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1185:11:13"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1198:1:13",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "1181:3:13"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1181:19:13"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "1169:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1169:32:13"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1151:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1151:51:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1151:51:13"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_contract$_IERC1155_$544__to_t_address__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1075:9:13",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "1086:6:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "1097:4:13",
                    "type": ""
                  }
                ],
                "src": "989:219:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1329:102:13",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "1339:26:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1351:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1362:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1347:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1347:18:13"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "1339:4:13"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1381:9:13"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "1396:6:13"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1412:3:13",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1417:1:13",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "1408:3:13"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1408:11:13"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1421:1:13",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "1404:3:13"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1404:19:13"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "1392:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1392:32:13"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1374:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1374:51:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1374:51:13"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_contract$_IERC20_$1281__to_t_address__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1298:9:13",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "1309:6:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "1320:4:13",
                    "type": ""
                  }
                ],
                "src": "1213:218:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1610:167:13",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1627:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1638:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1620:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1620:21:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1620:21:13"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1661:9:13"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1672:2:13",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1657:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1657:18:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1677:2:13",
                            "type": "",
                            "value": "17"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1650:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1650:30:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1650:30:13"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1700:9:13"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1711:2:13",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1696:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1696:18:13"
                          },
                          {
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "1716:19:13",
                            "type": "",
                            "value": "Claim not started"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1689:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1689:47:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1689:47:13"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1745:26:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1757:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1768:2:13",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1753:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1753:18:13"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "1745:4:13"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_4a04dc59efeb1c659ada9809d1326bdf132b37a7eba0640c223e2070bea7b4c4__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1587:9:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "1601:4:13",
                    "type": ""
                  }
                ],
                "src": "1436:341:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1956:169:13",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1973:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1984:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1966:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1966:21:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1966:21:13"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2007:9:13"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2018:2:13",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2003:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2003:18:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2023:2:13",
                            "type": "",
                            "value": "19"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1996:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1996:30:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1996:30:13"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2046:9:13"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2057:2:13",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2042:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2042:18:13"
                          },
                          {
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "2062:21:13",
                            "type": "",
                            "value": "No rewards to claim"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2035:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2035:49:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2035:49:13"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2093:26:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2105:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2116:2:13",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2101:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2101:18:13"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "2093:4:13"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_584cf1690fd4124c524340f65c2f0897ce34c8cad61c485ada0c89030473339d__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1933:9:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "1947:4:13",
                    "type": ""
                  }
                ],
                "src": "1782:343:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2304:161:13",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2321:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2332:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2314:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2314:21:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2314:21:13"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2355:9:13"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2366:2:13",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2351:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2351:18:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2371:2:13",
                            "type": "",
                            "value": "11"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2344:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2344:30:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2344:30:13"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2394:9:13"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2405:2:13",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2390:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2390:18:13"
                          },
                          {
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "2410:13:13",
                            "type": "",
                            "value": "Claim ended"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2383:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2383:41:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2383:41:13"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2433:26:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2445:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2456:2:13",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2441:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2441:18:13"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "2433:4:13"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_7c799b08e3b714486522cb4e86f71ad6fa955fce07a71460df0efd88ac2fb9d6__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "2281:9:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "2295:4:13",
                    "type": ""
                  }
                ],
                "src": "2130:335:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2644:172:13",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2661:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2672:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2654:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2654:21:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2654:21:13"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2695:9:13"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2706:2:13",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2691:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2691:18:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2711:2:13",
                            "type": "",
                            "value": "22"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2684:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2684:30:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2684:30:13"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2734:9:13"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2745:2:13",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2730:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2730:18:13"
                          },
                          {
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "2750:24:13",
                            "type": "",
                            "value": "Reward transfer failed"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2723:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2723:52:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2723:52:13"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2784:26:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2796:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2807:2:13",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2792:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2792:18:13"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "2784:4:13"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_c745758d72f89e19328d67ece8ee7d1c3fa24ceabda854d2a9216c00473e37ce__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "2621:9:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "2635:4:13",
                    "type": ""
                  }
                ],
                "src": "2470:346:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2922:76:13",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "2932:26:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2944:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2955:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2940:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2940:18:13"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "2932:4:13"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2974:9:13"
                          },
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2985:6:13"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2967:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2967:25:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2967:25:13"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "2891:9:13",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "2902:6:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "2913:4:13",
                    "type": ""
                  }
                ],
                "src": "2821:177:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "3051:80:13",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3078:22:13",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nodeType": "YulIdentifier",
                                "src": "3080:16:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3080:18:13"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "3080:18:13"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "3067:1:13"
                          },
                          {
                            "arguments": [
                              {
                                "name": "y",
                                "nodeType": "YulIdentifier",
                                "src": "3074:1:13"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "3070:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3070:6:13"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "3064:2:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3064:13:13"
                      },
                      "nodeType": "YulIf",
                      "src": "3061:2:13"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3109:16:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "3120:1:13"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "3123:1:13"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3116:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3116:9:13"
                      },
                      "variableNames": [
                        {
                          "name": "sum",
                          "nodeType": "YulIdentifier",
                          "src": "3109:3:13"
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
                    "src": "3034:1:13",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nodeType": "YulTypedName",
                    "src": "3037:1:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "sum",
                    "nodeType": "YulTypedName",
                    "src": "3043:3:13",
                    "type": ""
                  }
                ],
                "src": "3003:128:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "3188:116:13",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3247:22:13",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nodeType": "YulIdentifier",
                                "src": "3249:16:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3249:18:13"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "3249:18:13"
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
                                    "name": "x",
                                    "nodeType": "YulIdentifier",
                                    "src": "3219:1:13"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nodeType": "YulIdentifier",
                                  "src": "3212:6:13"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3212:9:13"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "3205:6:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3205:17:13"
                          },
                          {
                            "arguments": [
                              {
                                "name": "y",
                                "nodeType": "YulIdentifier",
                                "src": "3227:1:13"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3238:1:13",
                                        "type": "",
                                        "value": "0"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "3234:3:13"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3234:6:13"
                                  },
                                  {
                                    "name": "x",
                                    "nodeType": "YulIdentifier",
                                    "src": "3242:1:13"
                                  }
                                ],
                                "functionName": {
                                  "name": "div",
                                  "nodeType": "YulIdentifier",
                                  "src": "3230:3:13"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3230:14:13"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nodeType": "YulIdentifier",
                              "src": "3224:2:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3224:21:13"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "3201:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3201:45:13"
                      },
                      "nodeType": "YulIf",
                      "src": "3198:2:13"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3278:20:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "3293:1:13"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "3296:1:13"
                          }
                        ],
                        "functionName": {
                          "name": "mul",
                          "nodeType": "YulIdentifier",
                          "src": "3289:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3289:9:13"
                      },
                      "variableNames": [
                        {
                          "name": "product",
                          "nodeType": "YulIdentifier",
                          "src": "3278:7:13"
                        }
                      ]
                    }
                  ]
                },
                "name": "checked_mul_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "x",
                    "nodeType": "YulTypedName",
                    "src": "3167:1:13",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nodeType": "YulTypedName",
                    "src": "3170:1:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "product",
                    "nodeType": "YulTypedName",
                    "src": "3176:7:13",
                    "type": ""
                  }
                ],
                "src": "3136:168:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "3358:76:13",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3380:22:13",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nodeType": "YulIdentifier",
                                "src": "3382:16:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3382:18:13"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "3382:18:13"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "3374:1:13"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "3377:1:13"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "3371:2:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3371:8:13"
                      },
                      "nodeType": "YulIf",
                      "src": "3368:2:13"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3411:17:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "3423:1:13"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "3426:1:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3419:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3419:9:13"
                      },
                      "variableNames": [
                        {
                          "name": "diff",
                          "nodeType": "YulIdentifier",
                          "src": "3411:4:13"
                        }
                      ]
                    }
                  ]
                },
                "name": "checked_sub_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "x",
                    "nodeType": "YulTypedName",
                    "src": "3340:1:13",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nodeType": "YulTypedName",
                    "src": "3343:1:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "diff",
                    "nodeType": "YulTypedName",
                    "src": "3349:4:13",
                    "type": ""
                  }
                ],
                "src": "3309:125:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "3486:88:13",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3517:22:13",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nodeType": "YulIdentifier",
                                "src": "3519:16:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3519:18:13"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "3519:18:13"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3502:5:13"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3513:1:13",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "3509:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3509:6:13"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "3499:2:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3499:17:13"
                      },
                      "nodeType": "YulIf",
                      "src": "3496:2:13"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3548:20:13",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3559:5:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3566:1:13",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3555:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3555:13:13"
                      },
                      "variableNames": [
                        {
                          "name": "ret",
                          "nodeType": "YulIdentifier",
                          "src": "3548:3:13"
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
                    "src": "3468:5:13",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "ret",
                    "nodeType": "YulTypedName",
                    "src": "3478:3:13",
                    "type": ""
                  }
                ],
                "src": "3439:135:13"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "3611:95:13",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3628:1:13",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3635:3:13",
                                "type": "",
                                "value": "224"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3640:10:13",
                                "type": "",
                                "value": "0x4e487b71"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nodeType": "YulIdentifier",
                              "src": "3631:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3631:20:13"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3621:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3621:31:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3621:31:13"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3668:1:13",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3671:4:13",
                            "type": "",
                            "value": "0x11"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3661:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3661:15:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3661:15:13"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3692:1:13",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3695:4:13",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nodeType": "YulIdentifier",
                          "src": "3685:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3685:15:13"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3685:15:13"
                    }
                  ]
                },
                "name": "panic_error_0x11",
                "nodeType": "YulFunctionDefinition",
                "src": "3579:127:13"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        let value := mload(headStart)\n        if iszero(eq(value, iszero(iszero(value)))) { revert(value0, value0) }\n        value0 := value\n    }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        value0 := calldataload(headStart)\n    }\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        value0 := mload(headStart)\n    }\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n        mstore(add(headStart, 32), value1)\n    }\n    function abi_encode_tuple_t_contract$_IERC1155_$544__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_encode_tuple_t_contract$_IERC20_$1281__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_encode_tuple_t_stringliteral_4a04dc59efeb1c659ada9809d1326bdf132b37a7eba0640c223e2070bea7b4c4__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 17)\n        mstore(add(headStart, 64), \"Claim not started\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_584cf1690fd4124c524340f65c2f0897ce34c8cad61c485ada0c89030473339d__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 19)\n        mstore(add(headStart, 64), \"No rewards to claim\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_7c799b08e3b714486522cb4e86f71ad6fa955fce07a71460df0efd88ac2fb9d6__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 11)\n        mstore(add(headStart, 64), \"Claim ended\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_c745758d72f89e19328d67ece8ee7d1c3fa24ceabda854d2a9216c00473e37ce__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 22)\n        mstore(add(headStart, 64), \"Reward transfer failed\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        if gt(x, not(y)) { panic_error_0x11() }\n        sum := add(x, y)\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        if and(iszero(iszero(x)), gt(y, div(not(0), x))) { panic_error_0x11() }\n        product := mul(x, y)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        if lt(x, y) { panic_error_0x11() }\n        diff := sub(x, y)\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0)) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n}",
          "id": 13,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "608060405234801561001057600080fd5b506004361061007d5760003560e01c80639a08ee951161005b5780639a08ee95146100bb578063cdcc6dcc146100c5578063d56d229d146100d8578063f7c618c1146100ed5761007d565b806336ee1d8d146100825780633ba86c44146100ab5780634e65e2be146100b3575b600080fd5b61009561009036600461042c565b6100f5565b6040516100a29190610536565b60405180910390f35b610095610107565b61009561010d565b6100c3610113565b005b6100956100d336600461042c565b6103d5565b6100e06103e7565b6040516100a29190610475565b6100e06103f6565b60056020526000908152604090205481565b60035481565b60045481565b60045443101561013e5760405162461bcd60e51b815260040161013590610489565b60405180910390fd5b6003544311156101605760405162461bcd60e51b8152600401610135906104e1565b6000805b600681101561027657600154604051627eeac760e11b81526000916001600160a01b03169062fdd58e9061019e903390869060040161045c565b60206040518083038186803b1580156101b657600080fd5b505afa1580156101ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ee9190610444565b6000838152600560205260408120549192509061020b9083610576565b905080156102615760008381526002602052604090205461022c9082610557565b610236908561053f565b93508060056000858152602001908152602001600020600082825461025b919061053f565b90915550505b5050808061026e9061058d565b915050610164565b50600081116102975760405162461bcd60e51b8152600401610135906104b4565b60005460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb906102c9903390859060040161045c565b602060405180830381600087803b1580156102e357600080fd5b505af1925050508015610313575060408051601f3d908101601f1916820190925261031091810190610405565b60015b61036d573d808015610341576040519150601f19603f3d011682016040523d82523d6000602084013e610346565b606091505b5080516103655760405162461bcd60e51b815260040161013590610506565b805160208201fd5b80156103b957336001600160a01b03167f650e45f04ef8a0c267b2f78d983913f69ae3a353b2b32de5429307522be0ab55836040516103ac9190610536565b60405180910390a26103d1565b60405162461bcd60e51b815260040161013590610506565b5050565b60026020526000908152604090205481565b6001546001600160a01b031681565b6000546001600160a01b031681565b600060208284031215610416578081fd5b81518015158114610425578182fd5b9392505050565b60006020828403121561043d578081fd5b5035919050565b600060208284031215610455578081fd5b5051919050565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0391909116815260200190565b60208082526011908201527010db185a5b481b9bdd081cdd185c9d1959607a1b604082015260600190565b6020808252601390820152724e6f207265776172647320746f20636c61696d60681b604082015260600190565b6020808252600b908201526a10db185a5b48195b99195960aa1b604082015260600190565b60208082526016908201527514995dd85c99081d1c985b9cd9995c8819985a5b195960521b604082015260600190565b90815260200190565b60008219821115610552576105526105a8565b500190565b6000816000190483118215151615610571576105716105a8565b500290565b600082821015610588576105886105a8565b500390565b60006000198214156105a1576105a16105a8565b5060010190565b634e487b7160e01b600052601160045260246000fdfea26469706673582212202602189c52f954150d87d9a489fb1b61c2aa35dd19deb6e48b16227105fdc47e64736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x7D JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x9A08EE95 GT PUSH2 0x5B JUMPI DUP1 PUSH4 0x9A08EE95 EQ PUSH2 0xBB JUMPI DUP1 PUSH4 0xCDCC6DCC EQ PUSH2 0xC5 JUMPI DUP1 PUSH4 0xD56D229D EQ PUSH2 0xD8 JUMPI DUP1 PUSH4 0xF7C618C1 EQ PUSH2 0xED JUMPI PUSH2 0x7D JUMP JUMPDEST DUP1 PUSH4 0x36EE1D8D EQ PUSH2 0x82 JUMPI DUP1 PUSH4 0x3BA86C44 EQ PUSH2 0xAB JUMPI DUP1 PUSH4 0x4E65E2BE EQ PUSH2 0xB3 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x95 PUSH2 0x90 CALLDATASIZE PUSH1 0x4 PUSH2 0x42C JUMP JUMPDEST PUSH2 0xF5 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xA2 SWAP2 SWAP1 PUSH2 0x536 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x95 PUSH2 0x107 JUMP JUMPDEST PUSH2 0x95 PUSH2 0x10D JUMP JUMPDEST PUSH2 0xC3 PUSH2 0x113 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x95 PUSH2 0xD3 CALLDATASIZE PUSH1 0x4 PUSH2 0x42C JUMP JUMPDEST PUSH2 0x3D5 JUMP JUMPDEST PUSH2 0xE0 PUSH2 0x3E7 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xA2 SWAP2 SWAP1 PUSH2 0x475 JUMP JUMPDEST PUSH2 0xE0 PUSH2 0x3F6 JUMP JUMPDEST PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x4 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x4 SLOAD NUMBER LT ISZERO PUSH2 0x13E JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x135 SWAP1 PUSH2 0x489 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x3 SLOAD NUMBER GT ISZERO PUSH2 0x160 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x135 SWAP1 PUSH2 0x4E1 JUMP JUMPDEST PUSH1 0x0 DUP1 JUMPDEST PUSH1 0x6 DUP2 LT ISZERO PUSH2 0x276 JUMPI PUSH1 0x1 SLOAD PUSH1 0x40 MLOAD PUSH3 0x7EEAC7 PUSH1 0xE1 SHL DUP2 MSTORE PUSH1 0x0 SWAP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP1 PUSH3 0xFDD58E SWAP1 PUSH2 0x19E SWAP1 CALLER SWAP1 DUP7 SWAP1 PUSH1 0x4 ADD PUSH2 0x45C JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x1B6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0x1CA JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x1EE SWAP2 SWAP1 PUSH2 0x444 JUMP JUMPDEST PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 SLOAD SWAP2 SWAP3 POP SWAP1 PUSH2 0x20B SWAP1 DUP4 PUSH2 0x576 JUMP JUMPDEST SWAP1 POP DUP1 ISZERO PUSH2 0x261 JUMPI PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH2 0x22C SWAP1 DUP3 PUSH2 0x557 JUMP JUMPDEST PUSH2 0x236 SWAP1 DUP6 PUSH2 0x53F JUMP JUMPDEST SWAP4 POP DUP1 PUSH1 0x5 PUSH1 0x0 DUP6 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x25B SWAP2 SWAP1 PUSH2 0x53F JUMP JUMPDEST SWAP1 SWAP2 SSTORE POP POP JUMPDEST POP POP DUP1 DUP1 PUSH2 0x26E SWAP1 PUSH2 0x58D JUMP JUMPDEST SWAP2 POP POP PUSH2 0x164 JUMP JUMPDEST POP PUSH1 0x0 DUP2 GT PUSH2 0x297 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x135 SWAP1 PUSH2 0x4B4 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x40 MLOAD PUSH4 0xA9059CBB PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND SWAP1 PUSH4 0xA9059CBB SWAP1 PUSH2 0x2C9 SWAP1 CALLER SWAP1 DUP6 SWAP1 PUSH1 0x4 ADD PUSH2 0x45C JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x2E3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x313 JUMPI POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F RETURNDATASIZE SWAP1 DUP2 ADD PUSH1 0x1F NOT AND DUP3 ADD SWAP1 SWAP3 MSTORE PUSH2 0x310 SWAP2 DUP2 ADD SWAP1 PUSH2 0x405 JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x36D JUMPI RETURNDATASIZE DUP1 DUP1 ISZERO PUSH2 0x341 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x346 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP DUP1 MLOAD PUSH2 0x365 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x135 SWAP1 PUSH2 0x506 JUMP JUMPDEST DUP1 MLOAD PUSH1 0x20 DUP3 ADD REVERT JUMPDEST DUP1 ISZERO PUSH2 0x3B9 JUMPI CALLER PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH32 0x650E45F04EF8A0C267B2F78D983913F69AE3A353B2B32DE5429307522BE0AB55 DUP4 PUSH1 0x40 MLOAD PUSH2 0x3AC SWAP2 SWAP1 PUSH2 0x536 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 PUSH2 0x3D1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x135 SWAP1 PUSH2 0x506 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x2 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x416 JUMPI DUP1 DUP2 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0x425 JUMPI DUP2 DUP3 REVERT JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x43D JUMPI DUP1 DUP2 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x455 JUMPI DUP1 DUP2 REVERT JUMPDEST POP MLOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 SWAP1 SWAP3 AND DUP3 MSTORE PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 ADD SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x11 SWAP1 DUP3 ADD MSTORE PUSH17 0x10DB185A5B481B9BDD081CDD185C9D1959 PUSH1 0x7A SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x13 SWAP1 DUP3 ADD MSTORE PUSH19 0x4E6F207265776172647320746F20636C61696D PUSH1 0x68 SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0xB SWAP1 DUP3 ADD MSTORE PUSH11 0x10DB185A5B48195B991959 PUSH1 0xAA SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x16 SWAP1 DUP3 ADD MSTORE PUSH22 0x14995DD85C99081D1C985B9CD9995C8819985A5B1959 PUSH1 0x52 SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST SWAP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 NOT DUP3 GT ISZERO PUSH2 0x552 JUMPI PUSH2 0x552 PUSH2 0x5A8 JUMP JUMPDEST POP ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x0 NOT DIV DUP4 GT DUP3 ISZERO ISZERO AND ISZERO PUSH2 0x571 JUMPI PUSH2 0x571 PUSH2 0x5A8 JUMP JUMPDEST POP MUL SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 LT ISZERO PUSH2 0x588 JUMPI PUSH2 0x588 PUSH2 0x5A8 JUMP JUMPDEST POP SUB SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x0 NOT DUP3 EQ ISZERO PUSH2 0x5A1 JUMPI PUSH2 0x5A1 PUSH2 0x5A8 JUMP JUMPDEST POP PUSH1 0x1 ADD SWAP1 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x26 MUL XOR SWAP13 MSTORE 0xF9 SLOAD ISZERO 0xD DUP8 0xD9 LOG4 DUP10 0xFB SHL PUSH2 0xC2AA CALLDATALOAD 0xDD NOT 0xDE 0xB6 0xE4 DUP12 AND 0x22 PUSH18 0x5FDC47E64736F6C63430008010033000000 ",
      "sourceMap": "316:3364:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1292:47;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1151:28;;;:::i;1186:29::-;;;:::i;1904:1773::-;;;:::i;:::-;;1055:47;;;;;;:::i;:::-;;:::i;968:27::-;;;:::i;:::-;;;;;;;:::i;936:25::-;;;:::i;1292:47::-;;;;;;;;;;;;;:::o;1151:28::-;;;;:::o;1186:29::-;;;;:::o;1904:1773::-;1971:14;;1955:12;:30;;1947:60;;;;-1:-1:-1;;;1947:60:0;;;;;;;:::i;:::-;;;;;;;;;2042:13;;2026:12;:29;;2018:53;;;;-1:-1:-1;;;2018:53:0;;;;;;;:::i;:::-;2629:19;2668:15;2663:372;2699:1;2689:7;:11;2663:372;;;2746:11;;:42;;-1:-1:-1;;;2746:42:0;;2728:15;;-1:-1:-1;;;;;2746:11:0;;:21;;:42;;2768:10;;2780:7;;2746:42;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2803:17;2833:21;;;:12;:21;;;;;;2728:60;;-1:-1:-1;2803:17:0;2823:31;;2728:60;2823:31;:::i;:::-;2803:51;-1:-1:-1;2873:13:0;;2869:155;;2934:21;;;;:12;:21;;;;;;2922:33;;:9;:33;:::i;:::-;2907:48;;;;:::i;:::-;;;2999:9;2974:12;:21;2987:7;2974:21;;;;;;;;;;;;:34;;;;;;;:::i;:::-;;;;-1:-1:-1;;2869:155:0;2663:372;;2702:9;;;;;:::i;:::-;;;;2663:372;;;;3067:1;3053:11;:15;3045:47;;;;-1:-1:-1;;;3045:47:0;;;;;;;:::i;:::-;3109:11;;:45;;-1:-1:-1;;;3109:45:0;;-1:-1:-1;;;;;3109:11:0;;;;:20;;:45;;3130:10;;3142:11;;3109:45;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3109:45:0;;;;;;;;-1:-1:-1;;3109:45:0;;;;;;;;;;;;:::i;:::-;;;3105:565;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3441:13:0;;3437:222;;3480:32;;-1:-1:-1;;;3480:32:0;;;;;;;:::i;3437:222::-;3617:6;3611:13;3604:4;3596:6;3592:17;3585:40;3105:565;3221:7;3217:165;;;3269:10;-1:-1:-1;;;;;3254:39:0;;3281:11;3254:39;;;;;;:::i;:::-;;;;;;;;3217:165;;;3334:32;;-1:-1:-1;;;3334:32:0;;;;;;;:::i;3217:165::-;3155:238;1904:1773;:::o;1055:47::-;;;;;;;;;;;;;:::o;968:27::-;;;-1:-1:-1;;;;;968:27:0;;:::o;936:25::-;;;-1:-1:-1;;;;;936:25:0;;:::o;14:297:13:-;;134:2;122:9;113:7;109:23;105:32;102:2;;;155:6;147;140:22;102:2;192:9;186:16;245:5;238:13;231:21;224:5;221:32;211:2;;272:6;264;257:22;211:2;300:5;92:219;-1:-1:-1;;;92:219:13:o;316:190::-;;428:2;416:9;407:7;403:23;399:32;396:2;;;449:6;441;434:22;396:2;-1:-1:-1;477:23:13;;386:120;-1:-1:-1;386:120:13:o;511:194::-;;634:2;622:9;613:7;609:23;605:32;602:2;;;655:6;647;640:22;602:2;-1:-1:-1;683:16:13;;592:113;-1:-1:-1;592:113:13:o;710:274::-;-1:-1:-1;;;;;902:32:13;;;;884:51;;966:2;951:18;;944:34;872:2;857:18;;839:145::o;989:219::-;-1:-1:-1;;;;;1169:32:13;;;;1151:51;;1139:2;1124:18;;1106:102::o;1436:341::-;1638:2;1620:21;;;1677:2;1657:18;;;1650:30;-1:-1:-1;;;1711:2:13;1696:18;;1689:47;1768:2;1753:18;;1610:167::o;1782:343::-;1984:2;1966:21;;;2023:2;2003:18;;;1996:30;-1:-1:-1;;;2057:2:13;2042:18;;2035:49;2116:2;2101:18;;1956:169::o;2130:335::-;2332:2;2314:21;;;2371:2;2351:18;;;2344:30;-1:-1:-1;;;2405:2:13;2390:18;;2383:41;2456:2;2441:18;;2304:161::o;2470:346::-;2672:2;2654:21;;;2711:2;2691:18;;;2684:30;-1:-1:-1;;;2745:2:13;2730:18;;2723:52;2807:2;2792:18;;2644:172::o;2821:177::-;2967:25;;;2955:2;2940:18;;2922:76::o;3003:128::-;;3074:1;3070:6;3067:1;3064:13;3061:2;;;3080:18;;:::i;:::-;-1:-1:-1;3116:9:13;;3051:80::o;3136:168::-;;3242:1;3238;3234:6;3230:14;3227:1;3224:21;3219:1;3212:9;3205:17;3201:45;3198:2;;;3249:18;;:::i;:::-;-1:-1:-1;3289:9:13;;3188:116::o;3309:125::-;;3377:1;3374;3371:8;3368:2;;;3382:18;;:::i;:::-;-1:-1:-1;3419:9:13;;3358:76::o;3439:135::-;;-1:-1:-1;;3499:17:13;;3496:2;;;3519:18;;:::i;:::-;-1:-1:-1;3566:1:13;3555:13;;3486:88::o;3579:127::-;3640:10;3635:3;3631:20;3628:1;3621:31;3671:4;3668:1;3661:15;3695:4;3692:1;3685:15"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "304800",
        "executionCost": "infinite",
        "totalCost": "infinite"
      },
      "external": {
        "claimDeadline()": "1051",
        "claimForNFT()": "infinite",
        "claimStartline()": "1073",
        "nftContract()": "1114",
        "rewardPerNFT(uint256)": "1193",
        "rewardToken()": "1136",
        "tokenClaimed(uint256)": "1172"
      }
    },
    "methodIdentifiers": {
      "claimDeadline()": "3ba86c44",
      "claimForNFT()": "9a08ee95",
      "claimStartline()": "4e65e2be",
      "nftContract()": "d56d229d",
      "rewardPerNFT(uint256)": "cdcc6dcc",
      "rewardToken()": "f7c618c1",
      "tokenClaimed(uint256)": "36ee1d8d"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_rewardToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_nftContract\",\"type\":\"address\"},{\"internalType\":\"uint256[6]\",\"name\":\"_rewardPerNFT\",\"type\":\"uint256[6]\"},{\"internalType\":\"uint256\",\"name\":\"_claimStartline\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_claimDeadline\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"claimant\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"AirdropClaimed\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"claimDeadline\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimForNFT\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimStartline\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"nftContract\",\"outputs\":[{\"internalType\":\"contract IERC1155\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"rewardPerNFT\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rewardToken\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tokenClaimed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/airdrop/airdrop.sol\":\"NFTHolderAirdrop\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/airdrop/airdrop.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\nimport \\\"../openzeppelin_l/contracts/token/ERC20/IERC20.sol\\\";\\r\\nimport \\\"../openzeppelin_l/contracts/token/ERC1155/IERC1155.sol\\\";\\r\\n\\r\\n// todo\\uff1a\\u63d0\\u4f9b\\u7528\\u6237\\u67e5\\u8be2\\u6bcf\\u4e2atokenId\\u7684NFT\\u5df2\\u7ecf\\u9886\\u53d6\\u4e86\\u591a\\u5c11\\u7a7a\\u6295\\u4e86\\uff0c\\u5269\\u4f59\\u591a\\u5c11\\u7a7a\\u6295\\u53ef\\u4ee5\\u9886\\u53d6\\u4e86\\u7684\\u63a5\\u53e3\\r\\n\\r\\ncontract NFTHolderAirdrop {\\r\\n    // 1\\u3001\\u8bbe\\u7f6e\\u4e0d\\u540cNFT\\uff08tokenId\\u4ece0\\u52305\\uff09\\u53ef\\u4ee5\\u5f97\\u5230\\u7684\\u7a7a\\u6295\\u6570\\u91cf\\uff08\\u662f\\u9488\\u5bf9erc1155\\u7684\\u7a7a\\u6295\\uff09\\r\\n    // 2\\u3001\\u8bbe\\u7f6e\\u5f00\\u59cb\\u5f00\\u59cb\\u7a7a\\u6295\\u7684\\u533a\\u5757\\u9ad8\\u5ea6\\u548c\\u7ed3\\u675f\\u7a7a\\u6295\\u7684\\u533a\\u5757\\u9ad8\\u5ea6\\r\\n    // 3\\u3001\\u8bbe\\u7f6e\\u7a7a\\u6295\\u4ee3\\u5e01\\u5408\\u7ea6\\u5730\\u5740\\u548cNFT\\u5408\\u7ea6\\u5730\\u5740\\r\\n    // 4\\u3001\\u8c03\\u7528Claim\\u83b7\\u53d6\\u7a7a\\u6295\\uff0cclaim\\u51fd\\u6570\\u83b7\\u53d6\\u8c03\\u7528\\u8005\\u5bf9\\u5e94tokenId0\\u52305\\u7684\\u6570\\u91cf\\uff0c\\u5728\\u4e58\\u4ee5\\u6bcf\\u4e2aNFT\\u7684\\u7a7a\\u6295\\u6570\\u91cf\\uff0c\\u5c31\\u662f\\u53ef\\u4ee5\\u9886\\u53d6\\u7684\\u7a7a\\u6295\\u6570\\u91cf\\uff0c\\u7136\\u540e\\u628a\\u8fd9\\u4e2a\\u6570\\u91cf\\u7684\\u7a7a\\u6295\\u8f6c\\u7ed9\\u8c03\\u7528\\u8005\\u3002\\r\\n    // 5\\u3001\\u9700\\u8981\\u8bbe\\u7f6e\\u4e00\\u4e2amapping\\uff0c\\u8bb0\\u5f55\\u6bcf\\u4e2atokenId\\u7684\\u7a7a\\u6295\\u662f\\u5426\\u5df2\\u7ecf\\u88ab\\u9886\\u53d6\\u8fc7\\u4e86\\uff0c\\u9632\\u6b62\\u91cd\\u590d\\u9886\\u53d6\\u3002\\r\\n\\r\\n    IERC20 public rewardToken;\\r\\n    IERC1155 public nftContract;\\r\\n\\r\\n    // \\u6bcf\\u4e2aNFT\\u7684\\u7a7a\\u6295\\u6570\\u91cf\\uff0ctokenId\\u4ece0\\u52305\\r\\n    mapping(uint256 => uint256) public rewardPerNFT;\\r\\n    // \\u7a7a\\u6295\\u5f00\\u59cb\\u65e5\\u671f\\u548c\\u7ed3\\u675f\\u65e5\\u671f\\r\\n    uint256 public claimDeadline;\\r\\n    uint256 public claimStartline;\\r\\n    // \\u8bb0\\u5f55\\u6bcf\\u4e2atokenId\\u4e2d\\u6709\\u591a\\u5c11\\u4e2a\\u5b50NFT\\u5df2\\u7ecf\\u9886\\u53d6\\u4e86\\u7a7a\\u6295\\r\\n    mapping(uint256 => uint256) public tokenClaimed;\\r\\n\\r\\n    event AirdropClaimed(address indexed claimant, uint256 amount);\\r\\n\\r\\n    constructor(\\r\\n        address _rewardToken,\\r\\n        address _nftContract,\\r\\n        uint256[6] memory _rewardPerNFT,\\r\\n        uint256 _claimStartline,\\r\\n        uint256 _claimDeadline\\r\\n    ) {\\r\\n        rewardToken = IERC20(_rewardToken);\\r\\n        nftContract = IERC1155(_nftContract);\\r\\n        for (uint256 i = 0; i < 6; i++) {\\r\\n            rewardPerNFT[i] = _rewardPerNFT[i];\\r\\n        }\\r\\n        claimStartline = _claimStartline;\\r\\n        claimDeadline = _claimDeadline;\\r\\n    }\\r\\n\\r\\n    function claimForNFT() external {\\r\\n        require(block.number >= claimStartline, \\\"Claim not started\\\");\\r\\n        require(block.number <= claimDeadline, \\\"Claim ended\\\");\\r\\n\\r\\n        // \\u68c0\\u67e5\\u5feb\\u7167\\u65f6\\u8c01\\u62e5\\u6709\\u8fd9\\u4e2aNFT\\r\\n        // 1\\u3001\\u4fbf\\u5229tokenId\\u4ece0\\u52305\\uff0c\\u83b7\\u53d6\\u8c03\\u7528\\u8005\\u62e5\\u6709\\u7684\\u6bcf\\u4e2atokenId\\u5bf9\\u5e94\\u5b50NFT\\u7684\\u6570\\u91cf\\r\\n        // 2\\u3001\\u6bd4\\u8f83\\u603b\\u5b50NFT\\u7684\\u6570\\u91cf\\u548c\\u5df2\\u7ecf\\u9886\\u53d6\\u4e86\\u7a7a\\u6295\\u7684\\u5b50NFT\\u7684\\u6570\\u91cf\\r\\n        // 3\\u3001\\u603b\\u5b50NFT\\u7684\\u6570\\u91cf\\u66f4\\u5927\\uff0c\\u90a3\\u4e48\\u603b\\u5b50NFT\\u7684\\u6570\\u91cf\\u51cf\\u53bb\\u5df2\\u7ecf\\u9886\\u53d6\\u4e86\\u7a7a\\u6295\\u7684\\u5b50NFT\\u7684\\u6570\\u91cf\\uff0c\\u5f97\\u5230\\u7684\\u503c\\u4e58\\u4ee5\\u6bcf\\u4e2aNFT\\u7684\\u7a7a\\u6295\\u6570\\u91cf\\uff0c\\u5c31\\u662f\\u53ef\\u4ee5\\u9886\\u53d6\\u7684\\u7a7a\\u6295\\u6570\\u91cf\\u3002\\r\\n        // 4\\u3001\\u5982\\u679c\\u76f8\\u7b49\\uff0c\\u90a3\\u4e48\\u5c31\\u8bf4\\u660e\\u8fd9\\u4e2atokenId\\u7684NFT\\u7684\\u7a7a\\u6295\\u5df2\\u7ecf\\u88ab\\u9886\\u53d6\\u8fc7\\u4e86\\uff0c\\u4e0d\\u80fd\\u518d\\u9886\\u53d6\\u4e86\\u3002\\r\\n        uint256 totalReward = 0;\\r\\n        for (uint256 tokenId = 0; tokenId < 6; tokenId++) {\\r\\n            uint256 balance = nftContract.balanceOf(msg.sender, tokenId);\\r\\n            uint256 claimable = balance - tokenClaimed[tokenId];\\r\\n            if (claimable > 0) {\\r\\n                totalReward += claimable * rewardPerNFT[tokenId];\\r\\n                tokenClaimed[tokenId] += claimable;\\r\\n            }\\r\\n        }\\r\\n        require(totalReward > 0, \\\"No rewards to claim\\\");\\r\\n\\r\\n        try rewardToken.transfer(msg.sender, totalReward) returns (\\r\\n            bool success\\r\\n        ) {\\r\\n            if (success) {\\r\\n                emit AirdropClaimed(msg.sender, totalReward);\\r\\n            } else {\\r\\n                revert(\\\"Reward transfer failed\\\");\\r\\n            }\\r\\n        } catch (bytes memory reason) {\\r\\n            if (reason.length == 0) {\\r\\n                revert(\\\"Reward transfer failed\\\");\\r\\n            } else {\\r\\n                assembly {\\r\\n                    revert(add(reason, 0x20), mload(reason))\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x907c56cd511f0d679cdde985104b52eeb275bf58584dc6383238c41c024cf691\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC1155/IERC1155.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC1155/IERC1155.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../../utils/introspection/IERC165.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Required interface of an ERC1155 compliant contract, as defined in the\\r\\n * https://eips.ethereum.org/EIPS/eip-1155[EIP].\\r\\n *\\r\\n * _Available since v3.1._\\r\\n */\\r\\ninterface IERC1155 is IERC165 {\\r\\n    /**\\r\\n     * @dev Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.\\r\\n     */\\r\\n    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);\\r\\n\\r\\n    /**\\r\\n     * @dev Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all\\r\\n     * transfers.\\r\\n     */\\r\\n    event TransferBatch(\\r\\n        address indexed operator,\\r\\n        address indexed from,\\r\\n        address indexed to,\\r\\n        uint256[] ids,\\r\\n        uint256[] values\\r\\n    );\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to\\r\\n     * `approved`.\\r\\n     */\\r\\n    event ApprovalForAll(address indexed account, address indexed operator, bool approved);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.\\r\\n     *\\r\\n     * If an {URI} event was emitted for `id`, the standard\\r\\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value\\r\\n     * returned by {IERC1155MetadataURI-uri}.\\r\\n     */\\r\\n    event URI(string value, uint256 indexed id);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens of token type `id` owned by `account`.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `account` cannot be the zero address.\\r\\n     */\\r\\n    function balanceOf(address account, uint256 id) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `accounts` and `ids` must have the same length.\\r\\n     */\\r\\n    function balanceOfBatch(\\r\\n        address[] calldata accounts,\\r\\n        uint256[] calldata ids\\r\\n    ) external view returns (uint256[] memory);\\r\\n\\r\\n    /**\\r\\n     * @dev Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`,\\r\\n     *\\r\\n     * Emits an {ApprovalForAll} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `operator` cannot be the caller.\\r\\n     */\\r\\n    function setApprovalForAll(address operator, bool approved) external;\\r\\n\\r\\n    /**\\r\\n     * @dev Returns true if `operator` is approved to transfer ``account``'s tokens.\\r\\n     *\\r\\n     * See {setApprovalForAll}.\\r\\n     */\\r\\n    function isApprovedForAll(address account, address operator) external view returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.\\r\\n     *\\r\\n     * Emits a {TransferSingle} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `to` cannot be the zero address.\\r\\n     * - If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}.\\r\\n     * - `from` must have a balance of tokens of type `id` of at least `amount`.\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\\r\\n     * acceptance magic value.\\r\\n     */\\r\\n    function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;\\r\\n\\r\\n    /**\\r\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.\\r\\n     *\\r\\n     * Emits a {TransferBatch} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `ids` and `amounts` must have the same length.\\r\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\\r\\n     * acceptance magic value.\\r\\n     */\\r\\n    function safeBatchTransferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256[] calldata ids,\\r\\n        uint256[] calldata amounts,\\r\\n        bytes calldata data\\r\\n    ) external;\\r\\n}\\r\\n\",\"keccak256\":\"0x27e077bddceb5d947903026c4354aea73eddf88fd149c365825591ddb226ab5e\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC20/IERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/IERC20.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\r\\n */\\r\\ninterface IERC20 {\\r\\n    /**\\r\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\r\\n     * another (`to`).\\r\\n     *\\r\\n     * Note that `value` may be zero.\\r\\n     */\\r\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\r\\n     * a call to {approve}. `value` is the new allowance.\\r\\n     */\\r\\n    event Approval(\\r\\n        address indexed owner,\\r\\n        address indexed spender,\\r\\n        uint256 value\\r\\n    );\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens in existence.\\r\\n     */\\r\\n    function totalSupply() external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens owned by `account`.\\r\\n     */\\r\\n    function balanceOf(address account) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from the caller's account to `to`.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transfer(address to, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the remaining number of tokens that `spender` will be\\r\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\r\\n     * zero by default.\\r\\n     *\\r\\n     * This value changes when {approve} or {transferFrom} are called.\\r\\n     */\\r\\n    function allowance(\\r\\n        address owner,\\r\\n        address spender\\r\\n    ) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\r\\n     * that someone may use both the old and the new allowance by unfortunate\\r\\n     * transaction ordering. One possible solution to mitigate this race\\r\\n     * condition is to first reduce the spender's allowance to 0 and set the\\r\\n     * desired value afterwards:\\r\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\r\\n     *\\r\\n     * Emits an {Approval} event.\\r\\n     */\\r\\n    function approve(address spender, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from `from` to `to` using the\\r\\n     * allowance mechanism. `amount` is then deducted from the caller's\\r\\n     * allowance.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 amount\\r\\n    ) external returns (bool);\\r\\n}\\r\\n\",\"keccak256\":\"0x0daeecf13274cee034f010e0b6d63166eae133e1b0f6f5ca1e6ade67b16c5808\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC165 standard, as defined in the\\r\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\r\\n *\\r\\n * Implementers can declare support of contract interfaces, which can then be\\r\\n * queried by others ({ERC165Checker}).\\r\\n *\\r\\n * For an implementation, see {ERC165}.\\r\\n */\\r\\ninterface IERC165 {\\r\\n    /**\\r\\n     * @dev Returns true if this contract implements the interface defined by\\r\\n     * `interfaceId`. See the corresponding\\r\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\r\\n     * to learn more about how these ids are created.\\r\\n     *\\r\\n     * This function call must use less than 30 000 gas.\\r\\n     */\\r\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\r\\n}\\r\\n\",\"keccak256\":\"0x540685d7ece3faa56f38253270ff11b18e63949fb8659c408123b1874674492e\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 6,
        "contract": "project/contracts/airdrop/airdrop.sol:NFTHolderAirdrop",
        "label": "rewardToken",
        "offset": 0,
        "slot": "0",
        "type": "t_contract(IERC20)1281"
      },
      {
        "astId": 9,
        "contract": "project/contracts/airdrop/airdrop.sol:NFTHolderAirdrop",
        "label": "nftContract",
        "offset": 0,
        "slot": "1",
        "type": "t_contract(IERC1155)544"
      },
      {
        "astId": 13,
        "contract": "project/contracts/airdrop/airdrop.sol:NFTHolderAirdrop",
        "label": "rewardPerNFT",
        "offset": 0,
        "slot": "2",
        "type": "t_mapping(t_uint256,t_uint256)"
      },
      {
        "astId": 15,
        "contract": "project/contracts/airdrop/airdrop.sol:NFTHolderAirdrop",
        "label": "claimDeadline",
        "offset": 0,
        "slot": "3",
        "type": "t_uint256"
      },
      {
        "astId": 17,
        "contract": "project/contracts/airdrop/airdrop.sol:NFTHolderAirdrop",
        "label": "claimStartline",
        "offset": 0,
        "slot": "4",
        "type": "t_uint256"
      },
      {
        "astId": 21,
        "contract": "project/contracts/airdrop/airdrop.sol:NFTHolderAirdrop",
        "label": "tokenClaimed",
        "offset": 0,
        "slot": "5",
        "type": "t_mapping(t_uint256,t_uint256)"
      }
    ],
    "types": {
      "t_contract(IERC1155)544": {
        "encoding": "inplace",
        "label": "contract IERC1155",
        "numberOfBytes": "20"
      },
      "t_contract(IERC20)1281": {
        "encoding": "inplace",
        "label": "contract IERC20",
        "numberOfBytes": "20"
      },
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