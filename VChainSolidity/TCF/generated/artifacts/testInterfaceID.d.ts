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
  "bytecode": "0x6080604052348015600f57600080fd5b50609d8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063123fa2a814602d575b600080fd5b60336047565b604051603e91906052565b60405180910390f35b63a219a02560e01b90565b6001600160e01b03199190911681526020019056fea2646970667358221220e9d380a35692591287c634dacfa7f524a14cd561a350782557a36e46a610178764736f6c63430008010033",
  "deployedBytecode": "0x6080604052348015600f57600080fd5b506004361060285760003560e01c8063123fa2a814602d575b600080fd5b60336047565b604051603e91906052565b60405180910390f35b63a219a02560e01b90565b6001600160e01b03199190911681526020019056fea2646970667358221220e9d380a35692591287c634dacfa7f524a14cd561a350782557a36e46a610178764736f6c63430008010033",
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
      "object": "6080604052348015600f57600080fd5b50609d8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063123fa2a814602d575b600080fd5b60336047565b604051603e91906052565b60405180910390f35b63a219a02560e01b90565b6001600160e01b03199190911681526020019056fea2646970667358221220e9d380a35692591287c634dacfa7f524a14cd561a350782557a36e46a610178764736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x9D DUP1 PUSH2 0x1E PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH1 0x28 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x123FA2A8 EQ PUSH1 0x2D JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x33 PUSH1 0x47 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x3E SWAP2 SWAP1 PUSH1 0x52 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH4 0xA219A025 PUSH1 0xE0 SHL SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT SWAP2 SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xE9 0xD3 DUP1 LOG3 JUMP SWAP3 MSIZE SLT DUP8 0xC6 CALLVALUE 0xDA 0xCF 0xA7 CREATE2 0x24 LOG1 0x4C 0xD5 PUSH2 0xA350 PUSH25 0x2557A36E46A610178764736F6C634300080100330000000000 ",
      "sourceMap": "2344:162:47:-:0;;;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [
        {
          "ast": {
            "nodeType": "YulBlock",
            "src": "0:218:48",
            "statements": [
              {
                "nodeType": "YulBlock",
                "src": "6:3:48",
                "statements": []
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "113:103:48",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "123:26:48",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "135:9:48"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "146:2:48",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "131:3:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "131:18:48"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "123:4:48"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "165:9:48"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "180:6:48"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "192:3:48",
                                    "type": "",
                                    "value": "224"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "197:10:48",
                                    "type": "",
                                    "value": "0xffffffff"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "188:3:48"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "188:20:48"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "176:3:48"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "176:33:48"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "158:6:48"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "158:52:48"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "158:52:48"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "82:9:48",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "93:6:48",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "104:4:48",
                    "type": ""
                  }
                ],
                "src": "14:202:48"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, shl(224, 0xffffffff)))\n    }\n}",
          "id": 48,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "6080604052348015600f57600080fd5b506004361060285760003560e01c8063123fa2a814602d575b600080fd5b60336047565b604051603e91906052565b60405180910390f35b63a219a02560e01b90565b6001600160e01b03199190911681526020019056fea2646970667358221220e9d380a35692591287c634dacfa7f524a14cd561a350782557a36e46a610178764736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH1 0x28 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x123FA2A8 EQ PUSH1 0x2D JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x33 PUSH1 0x47 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x3E SWAP2 SWAP1 PUSH1 0x52 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH4 0xA219A025 PUSH1 0xE0 SHL SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT SWAP2 SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xE9 0xD3 DUP1 LOG3 JUMP SWAP3 MSIZE SLT DUP8 0xC6 CALLVALUE 0xDA 0xCF 0xA7 CREATE2 0x24 LOG1 0x4C 0xD5 PUSH2 0xA350 PUSH25 0x2557A36E46A610178764736F6C634300080100330000000000 ",
      "sourceMap": "2344:162:47:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2376:127;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;;-1:-1:-1;;;2376:127:47;:::o;14:202:48:-;-1:-1:-1;;;;;;176:33:48;;;;158:52;;146:2;131:18;;113:103::o"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "31400",
        "executionCost": "81",
        "totalCost": "31481"
      },
      "external": {
        "getIERC20MetadataInterfaceId()": "239"
      }
    },
    "methodIdentifiers": {
      "getIERC20MetadataInterfaceId()": "123fa2a8"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"getIERC20MetadataInterfaceId\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/test.sol\":\"testInterfaceID\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@4.9.6/\"]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/token/ERC20/IERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/IERC20.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\r\\n */\\r\\ninterface IERC20 {\\r\\n    /**\\r\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\r\\n     * another (`to`).\\r\\n     *\\r\\n     * Note that `value` may be zero.\\r\\n     */\\r\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\r\\n     * a call to {approve}. `value` is the new allowance.\\r\\n     */\\r\\n    event Approval(\\r\\n        address indexed owner,\\r\\n        address indexed spender,\\r\\n        uint256 value\\r\\n    );\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens in existence.\\r\\n     */\\r\\n    function totalSupply() external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens owned by `account`.\\r\\n     */\\r\\n    function balanceOf(address account) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from the caller's account to `to`.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transfer(address to, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the remaining number of tokens that `spender` will be\\r\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\r\\n     * zero by default.\\r\\n     *\\r\\n     * This value changes when {approve} or {transferFrom} are called.\\r\\n     */\\r\\n    function allowance(\\r\\n        address owner,\\r\\n        address spender\\r\\n    ) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\r\\n     * that someone may use both the old and the new allowance by unfortunate\\r\\n     * transaction ordering. One possible solution to mitigate this race\\r\\n     * condition is to first reduce the spender's allowance to 0 and set the\\r\\n     * desired value afterwards:\\r\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\r\\n     *\\r\\n     * Emits an {Approval} event.\\r\\n     */\\r\\n    function approve(address spender, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from `from` to `to` using the\\r\\n     * allowance mechanism. `amount` is then deducted from the caller's\\r\\n     * allowance.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 amount\\r\\n    ) external returns (bool);\\r\\n}\\r\\n\",\"keccak256\":\"0x0daeecf13274cee034f010e0b6d63166eae133e1b0f6f5ca1e6ade67b16c5808\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/IERC20Metadata.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../IERC20.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Interface for the optional metadata functions from the ERC20 standard.\\r\\n *\\r\\n * _Available since v4.1._\\r\\n */\\r\\ninterface IERC20Metadata is IERC20 {\\r\\n    /**\\r\\n     * @dev Returns the name of the token.\\r\\n     */\\r\\n    function name() external view returns (string memory);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the symbol of the token.\\r\\n     */\\r\\n    function symbol() external view returns (string memory);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the decimals places of the token.\\r\\n     */\\r\\n    function decimals() external view returns (uint8);\\r\\n}\\r\\n\",\"keccak256\":\"0x0270cb4e50d6bcdd780df229606076d39df796860d266b5426f374c36f34fe89\",\"license\":\"MIT\"},\"project/contracts/test.sol\":{\"content\":\"// SPDX-License-Identifier:MIT\\r\\n\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\nimport {\\r\\n    IERC20Metadata\\r\\n} from \\\"./openzeppelin_l/contracts/token/ERC20/extensions/IERC20Metadata.sol\\\";\\r\\nimport {IERC20} from \\\"./openzeppelin_l/contracts/token/ERC20/IERC20.sol\\\";\\r\\n/***\\r\\n * @dev:\\u6d4b\\u8bd5\\u5220\\u9664map\\u6570\\u636e\\u6d88\\u8017\\u7684gas\\r\\n */\\r\\n\\r\\ncontract testGasUsed {\\r\\n    mapping(uint256 => uint256) public NFTDeadline;\\r\\n    uint256 number;\\r\\n    address tokenAddress;\\r\\n\\r\\n    // \\u6d4b\\u8bd5\\u4e24\\u6b21\\uff0c\\u7b2c\\u4e00\\u6b21\\u5220\\u9664\\uff0c\\u7b2c\\u4e8c\\u6b21\\u4e0d\\u5220\\u9664\\uff0c\\u67e5\\u770b\\u6d88\\u8017gas\\r\\n    function pushData(uint256 _key, uint256 _value, bool _deleteData) public {\\r\\n        NFTDeadline[_key] = _value;\\r\\n        if (_deleteData) {\\r\\n            deleteData(_key);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function deleteData(uint256 _key) internal {\\r\\n        delete NFTDeadline[_key];\\r\\n    }\\r\\n\\r\\n    function getIERC20MetadataInterfaceId() public pure returns (bytes4) {\\r\\n        return type(IERC20Metadata).interfaceId;\\r\\n    }\\r\\n\\r\\n    function useCall(address tokenAddress) public view returns (string memory) {\\r\\n        bytes memory callData = abi.encodeWithSignature(\\\"symbol()\\\");\\r\\n        // \\u5982\\u679c\\u4f20\\u5165EOA\\u5730\\u5740\\uff0c\\u4f1a\\u8fd4\\u56desuccess\\uff0c\\u4f46\\u957f\\u5ea6\\u4e3a0\\r\\n        (bool success, bytes memory data) = tokenAddress.staticcall(callData);\\r\\n        if (success && data.length > 0) {\\r\\n            return abi.decode(data, (string));\\r\\n        }\\r\\n        return \\\"false\\\";\\r\\n    }\\r\\n\\r\\n    function testRevert() public {\\r\\n        revert(\\\"nihao\\\");\\r\\n        number = 1;\\r\\n    }\\r\\n\\r\\n    function getAddress() external pure returns (address) {\\r\\n        return address(0x1);\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testMapping {\\r\\n    mapping(address => uint8) public supportTokenAddress;\\r\\n\\r\\n    function init(address[] calldata tokenAddresses) public {\\r\\n        initTokenAddress(tokenAddresses);\\r\\n    }\\r\\n\\r\\n    function initTokenAddress(address[] calldata tokenAddresses) internal {\\r\\n        uint256 len = tokenAddresses.length;\\r\\n        for (uint256 i = 0; i < len; i++) {\\r\\n            supportTokenAddress[tokenAddresses[i]] = 1;\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testCallContractFunction {\\r\\n    function testInternalCallContractFunction(\\r\\n        address tokenAddress\\r\\n    ) public view returns (string memory) {\\r\\n        IERC20Metadata IERC20TokenAddress = IERC20Metadata(tokenAddress);\\r\\n        string memory symbol = IERC20TokenAddress.symbol();\\r\\n        return symbol;\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testInterfaceID {\\r\\n    function getIERC20MetadataInterfaceId() public pure returns (bytes4) {\\r\\n        return type(IERC20Metadata).interfaceId;\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testRevert {\\r\\n    uint256 public number;\\r\\n    function getValue() public {\\r\\n        revert(\\\"nihao\\\");\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x0f4439c927b41a31369fc89f6ac4f8e1d358f3a478f3e347589cd8942efc6019\",\"license\":\"MIT\"}},\"version\":1}",
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