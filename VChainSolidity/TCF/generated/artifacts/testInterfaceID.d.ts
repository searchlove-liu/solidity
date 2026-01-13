export declare const Artifact_testInterfaceID: {
  "contractName": "testInterfaceID",
  "sourceName": "contracts/test.sol",
  "abi": [
    {
      "inputs": [],
      "name": "getIERC20MetadataInterfaceId",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060f78061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063123fa2a814602d575b600080fd5b60336047565b604051603e9190607c565b60405180910390f35b60007fa219a02500000000000000000000000000000000000000000000000000000000905090565b6076816095565b82525050565b6000602082019050608f6000830184606f565b92915050565b60007fffffffff000000000000000000000000000000000000000000000000000000008216905091905056fea2646970667358221220760b61c083e78cd71b7b4757a4bda936ee293c6032290a7283df168f0fcdfc9e64736f6c63430008010033",
  "deployedBytecode": "0x6080604052348015600f57600080fd5b506004361060285760003560e01c8063123fa2a814602d575b600080fd5b60336047565b604051603e9190607c565b60405180910390f35b60007fa219a02500000000000000000000000000000000000000000000000000000000905090565b6076816095565b82525050565b6000602082019050608f6000830184606f565b92915050565b60007fffffffff000000000000000000000000000000000000000000000000000000008216905091905056fea2646970667358221220760b61c083e78cd71b7b4757a4bda936ee293c6032290a7283df168f0fcdfc9e64736f6c63430008010033",
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
      "object": "608060405234801561001057600080fd5b5060f78061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063123fa2a814602d575b600080fd5b60336047565b604051603e9190607c565b60405180910390f35b60007fa219a02500000000000000000000000000000000000000000000000000000000905090565b6076816095565b82525050565b6000602082019050608f6000830184606f565b92915050565b60007fffffffff000000000000000000000000000000000000000000000000000000008216905091905056fea2646970667358221220760b61c083e78cd71b7b4757a4bda936ee293c6032290a7283df168f0fcdfc9e64736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0xF7 DUP1 PUSH2 0x1F PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH1 0x28 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x123FA2A8 EQ PUSH1 0x2D JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x33 PUSH1 0x47 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x3E SWAP2 SWAP1 PUSH1 0x7C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 PUSH32 0xA219A02500000000000000000000000000000000000000000000000000000000 SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x76 DUP2 PUSH1 0x95 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH1 0x8F PUSH1 0x0 DUP4 ADD DUP5 PUSH1 0x6F JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH23 0xB61C083E78CD71B7B4757A4BDA936EE293C6032290A72 DUP4 0xDF AND DUP16 0xF 0xCD 0xFC SWAP15 PUSH5 0x736F6C6343 STOP ADDMOD ADD STOP CALLER ",
      "sourceMap": "2104:162:22:-:0;;;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [
        {
          "ast": {
            "nodeType": "YulBlock",
            "src": "0:504:23",
            "statements": [
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "70:52:23",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "87:3:23"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "109:5:23"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_bytes4",
                              "nodeType": "YulIdentifier",
                              "src": "92:16:23"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "92:23:23"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "80:6:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "80:36:23"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "80:36:23"
                    }
                  ]
                },
                "name": "abi_encode_t_bytes4_to_t_bytes4_fromStack",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "58:5:23",
                    "type": ""
                  },
                  {
                    "name": "pos",
                    "nodeType": "YulTypedName",
                    "src": "65:3:23",
                    "type": ""
                  }
                ],
                "src": "7:115:23"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "224:122:23",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "234:26:23",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "246:9:23"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "257:2:23",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "242:3:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "242:18:23"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "234:4:23"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "312:6:23"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "325:9:23"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "336:1:23",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "321:3:23"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "321:17:23"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_bytes4_to_t_bytes4_fromStack",
                          "nodeType": "YulIdentifier",
                          "src": "270:41:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "270:69:23"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "270:69:23"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "196:9:23",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "208:6:23",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "219:4:23",
                    "type": ""
                  }
                ],
                "src": "128:218:23"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "396:105:23",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "406:89:23",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "421:5:23"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "428:66:23",
                            "type": "",
                            "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "417:3:23"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "417:78:23"
                      },
                      "variableNames": [
                        {
                          "name": "cleaned",
                          "nodeType": "YulIdentifier",
                          "src": "406:7:23"
                        }
                      ]
                    }
                  ]
                },
                "name": "cleanup_t_bytes4",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "378:5:23",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "cleaned",
                    "nodeType": "YulTypedName",
                    "src": "388:7:23",
                    "type": ""
                  }
                ],
                "src": "352:149:23"
              }
            ]
          },
          "contents": "{\n\n    function abi_encode_t_bytes4_to_t_bytes4_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bytes4(value))\n    }\n\n    function abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bytes4_to_t_bytes4_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_bytes4(value) -> cleaned {\n        cleaned := and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000)\n    }\n\n}\n",
          "id": 23,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "6080604052348015600f57600080fd5b506004361060285760003560e01c8063123fa2a814602d575b600080fd5b60336047565b604051603e9190607c565b60405180910390f35b60007fa219a02500000000000000000000000000000000000000000000000000000000905090565b6076816095565b82525050565b6000602082019050608f6000830184606f565b92915050565b60007fffffffff000000000000000000000000000000000000000000000000000000008216905091905056fea2646970667358221220760b61c083e78cd71b7b4757a4bda936ee293c6032290a7283df168f0fcdfc9e64736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH1 0x28 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x123FA2A8 EQ PUSH1 0x2D JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x33 PUSH1 0x47 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x3E SWAP2 SWAP1 PUSH1 0x7C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 PUSH32 0xA219A02500000000000000000000000000000000000000000000000000000000 SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x76 DUP2 PUSH1 0x95 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH1 0x8F PUSH1 0x0 DUP4 ADD DUP5 PUSH1 0x6F JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH23 0xB61C083E78CD71B7B4757A4BDA936EE293C6032290A72 DUP4 0xDF AND DUP16 0xF 0xCD 0xFC SWAP15 PUSH5 0x736F6C6343 STOP ADDMOD ADD STOP CALLER ",
      "sourceMap": "2104:162:22:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2136:127;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;;2197:6;2223:32;2216:39;;2136:127;:::o;7:115:23:-;92:23;109:5;92:23;:::i;:::-;87:3;80:36;70:52;;:::o;128:218::-;;257:2;246:9;242:18;234:26;;270:69;336:1;325:9;321:17;312:6;270:69;:::i;:::-;224:122;;;;:::o;352:149::-;;428:66;421:5;417:78;406:89;;396:105;;;:::o"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "49400",
        "executionCost": "99",
        "totalCost": "49499"
      },
      "external": {
        "getIERC20MetadataInterfaceId()": "321"
      }
    },
    "methodIdentifiers": {
      "getIERC20MetadataInterfaceId()": "123fa2a8"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"getIERC20MetadataInterfaceId\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/test.sol\":\"testInterfaceID\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/token/ERC20/IERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/IERC20.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\r\\n */\\r\\ninterface IERC20 {\\r\\n    /**\\r\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\r\\n     * another (`to`).\\r\\n     *\\r\\n     * Note that `value` may be zero.\\r\\n     */\\r\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\r\\n     * a call to {approve}. `value` is the new allowance.\\r\\n     */\\r\\n    event Approval(\\r\\n        address indexed owner,\\r\\n        address indexed spender,\\r\\n        uint256 value\\r\\n    );\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens in existence.\\r\\n     */\\r\\n    function totalSupply() external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens owned by `account`.\\r\\n     */\\r\\n    function balanceOf(address account) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from the caller's account to `to`.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transfer(address to, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the remaining number of tokens that `spender` will be\\r\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\r\\n     * zero by default.\\r\\n     *\\r\\n     * This value changes when {approve} or {transferFrom} are called.\\r\\n     */\\r\\n    function allowance(\\r\\n        address owner,\\r\\n        address spender\\r\\n    ) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\r\\n     * that someone may use both the old and the new allowance by unfortunate\\r\\n     * transaction ordering. One possible solution to mitigate this race\\r\\n     * condition is to first reduce the spender's allowance to 0 and set the\\r\\n     * desired value afterwards:\\r\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\r\\n     *\\r\\n     * Emits an {Approval} event.\\r\\n     */\\r\\n    function approve(address spender, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from `from` to `to` using the\\r\\n     * allowance mechanism. `amount` is then deducted from the caller's\\r\\n     * allowance.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 amount\\r\\n    ) external returns (bool);\\r\\n}\\r\\n\",\"keccak256\":\"0x0daeecf13274cee034f010e0b6d63166eae133e1b0f6f5ca1e6ade67b16c5808\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/IERC20Metadata.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../IERC20.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Interface for the optional metadata functions from the ERC20 standard.\\r\\n *\\r\\n * _Available since v4.1._\\r\\n */\\r\\ninterface IERC20Metadata is IERC20 {\\r\\n    /**\\r\\n     * @dev Returns the name of the token.\\r\\n     */\\r\\n    function name() external view returns (string memory);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the symbol of the token.\\r\\n     */\\r\\n    function symbol() external view returns (string memory);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the decimals places of the token.\\r\\n     */\\r\\n    function decimals() external view returns (uint8);\\r\\n}\\r\\n\",\"keccak256\":\"0x0270cb4e50d6bcdd780df229606076d39df796860d266b5426f374c36f34fe89\",\"license\":\"MIT\"},\"project/contracts/test.sol\":{\"content\":\"// SPDX-License-Identifier:MIT\\r\\n\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\nimport {\\r\\n    IERC20Metadata\\r\\n} from \\\"./openzeppelin_l/contracts/token/ERC20/extensions/IERC20Metadata.sol\\\";\\r\\nimport {IERC20} from \\\"./openzeppelin_l/contracts/token/ERC20/IERC20.sol\\\";\\r\\n/***\\r\\n * @dev:\\u6d4b\\u8bd5\\u5220\\u9664map\\u6570\\u636e\\u6d88\\u8017\\u7684gas\\r\\n */\\r\\n\\r\\ncontract testGasUsed {\\r\\n    mapping(uint256 => uint256) public NFTDeadline;\\r\\n\\r\\n    // \\u6d4b\\u8bd5\\u4e24\\u6b21\\uff0c\\u7b2c\\u4e00\\u6b21\\u5220\\u9664\\uff0c\\u7b2c\\u4e8c\\u6b21\\u4e0d\\u5220\\u9664\\uff0c\\u67e5\\u770b\\u6d88\\u8017gas\\r\\n    function pushData(uint256 _key, uint256 _value, bool _deleteData) public {\\r\\n        NFTDeadline[_key] = _value;\\r\\n        if (_deleteData) {\\r\\n            deleteData(_key);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function deleteData(uint256 _key) internal {\\r\\n        delete NFTDeadline[_key];\\r\\n    }\\r\\n\\r\\n    function getIERC20MetadataInterfaceId() public pure returns (bytes4) {\\r\\n        return type(IERC20Metadata).interfaceId;\\r\\n    }\\r\\n\\r\\n    function useCall(address tokenAddress) public view returns (string memory) {\\r\\n        bytes memory callData = abi.encodeWithSignature(\\\"symbol()\\\");\\r\\n        // \\u5982\\u679c\\u4f20\\u5165EOA\\u5730\\u5740\\uff0c\\u4f1a\\u8fd4\\u56desuccess\\uff0c\\u4f46\\u957f\\u5ea6\\u4e3a0\\r\\n        (bool success, bytes memory data) = tokenAddress.staticcall(callData);\\r\\n        if (success && data.length > 0) {\\r\\n            return abi.decode(data, (string));\\r\\n        }\\r\\n        return \\\"false\\\";\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testMapping {\\r\\n    mapping(address => uint8) public supportTokenAddress;\\r\\n\\r\\n    function init(address[] calldata tokenAddresses) public {\\r\\n        initTokenAddress(tokenAddresses);\\r\\n    }\\r\\n\\r\\n    function initTokenAddress(address[] calldata tokenAddresses) internal {\\r\\n        uint256 len = tokenAddresses.length;\\r\\n        for (uint256 i = 0; i < len; i++) {\\r\\n            supportTokenAddress[tokenAddresses[i]] = 1;\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testCallContractFunction {\\r\\n    function testInternalCallContractFunction(\\r\\n        address tokenAddress\\r\\n    ) public view returns (string memory) {\\r\\n        IERC20Metadata IERC20TokenAddress = IERC20Metadata(tokenAddress);\\r\\n        string memory symbol = IERC20TokenAddress.symbol();\\r\\n        return symbol;\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testInterfaceID {\\r\\n    function getIERC20MetadataInterfaceId() public pure returns (bytes4) {\\r\\n        return type(IERC20Metadata).interfaceId;\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testTwodimensionalArray {}\\r\\n\",\"keccak256\":\"0x1dea22091da6892648e01043b12d09c3f220a9ac05e5975a172647871d93f91e\",\"license\":\"MIT\"}},\"version\":1}",
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