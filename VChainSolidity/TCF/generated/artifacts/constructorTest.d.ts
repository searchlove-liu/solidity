export declare const Artifact_constructorTest: {
  "contractName": "constructorTest",
  "sourceName": "contracts/test.sol",
  "abi": [
    {
      "inputs": [],
      "name": "value",
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
  "bytecode": "0x60806040526064600055348015601457600080fd5b50608c806100236000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80633fa4f24514602d575b600080fd5b60336047565b604051603e9190604d565b60405180910390f35b60005481565b9081526020019056fea26469706673582212208dd61311d4a802b4a40b5f54417ccabfa2f102d41831b2ba310e85dcbe63761964736f6c63430008010033",
  "deployedBytecode": "0x6080604052348015600f57600080fd5b506004361060285760003560e01c80633fa4f24514602d575b600080fd5b60336047565b604051603e9190604d565b60405180910390f35b60005481565b9081526020019056fea26469706673582212208dd61311d4a802b4a40b5f54417ccabfa2f102d41831b2ba310e85dcbe63761964736f6c63430008010033",
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
      "object": "60806040526064600055348015601457600080fd5b50608c806100236000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80633fa4f24514602d575b600080fd5b60336047565b604051603e9190604d565b60405180910390f35b60005481565b9081526020019056fea26469706673582212208dd61311d4a802b4a40b5f54417ccabfa2f102d41831b2ba310e85dcbe63761964736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x64 PUSH1 0x0 SSTORE CALLVALUE DUP1 ISZERO PUSH1 0x14 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x8C DUP1 PUSH2 0x23 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH1 0x28 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x3FA4F245 EQ PUSH1 0x2D JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x33 PUSH1 0x47 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x3E SWAP2 SWAP1 PUSH1 0x4D JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST SWAP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 DUP14 0xD6 SGT GT 0xD4 0xA8 MUL 0xB4 LOG4 SIGNEXTEND 0x5F SLOAD COINBASE PUSH29 0xCABFA2F102D41831B2BA310E85DCBE63761964736F6C63430008010033 ",
      "sourceMap": "6788:62:68:-:0;;;6843:3;6820:26;;6788:62;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [
        {
          "ast": {
            "nodeType": "YulBlock",
            "src": "0:193:78",
            "statements": [
              {
                "nodeType": "YulBlock",
                "src": "6:3:78",
                "statements": []
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "115:76:78",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "125:26:78",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "137:9:78"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "148:2:78",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "133:3:78"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "133:18:78"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "125:4:78"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "167:9:78"
                          },
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "178:6:78"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "160:6:78"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "160:25:78"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "160:25:78"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "84:9:78",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "95:6:78",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "106:4:78",
                    "type": ""
                  }
                ],
                "src": "14:177:78"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n}",
          "id": 78,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "6080604052348015600f57600080fd5b506004361060285760003560e01c80633fa4f24514602d575b600080fd5b60336047565b604051603e9190604d565b60405180910390f35b60005481565b9081526020019056fea26469706673582212208dd61311d4a802b4a40b5f54417ccabfa2f102d41831b2ba310e85dcbe63761964736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH1 0x28 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x3FA4F245 EQ PUSH1 0x2D JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x33 PUSH1 0x47 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x3E SWAP2 SWAP1 PUSH1 0x4D JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST SWAP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 DUP14 0xD6 SGT GT 0xD4 0xA8 MUL 0xB4 LOG4 SIGNEXTEND 0x5F SLOAD COINBASE PUSH29 0xCABFA2F102D41831B2BA310E85DCBE63761964736F6C63430008010033 ",
      "sourceMap": "6788:62:68:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6820:26;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;;;;;:::o;14:177:78:-;160:25;;;148:2;133:18;;115:76::o"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "28000",
        "executionCost": "20087",
        "totalCost": "48087"
      },
      "external": {
        "value()": "1006"
      }
    },
    "methodIdentifiers": {
      "value()": "3fa4f245"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"value\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/test.sol\":\"constructorTest\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@4.9.6/\"]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/token/ERC20/IERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/IERC20.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\r\\n */\\r\\ninterface IERC20 {\\r\\n    /**\\r\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\r\\n     * another (`to`).\\r\\n     *\\r\\n     * Note that `value` may be zero.\\r\\n     */\\r\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\r\\n     * a call to {approve}. `value` is the new allowance.\\r\\n     */\\r\\n    event Approval(\\r\\n        address indexed owner,\\r\\n        address indexed spender,\\r\\n        uint256 value\\r\\n    );\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens in existence.\\r\\n     */\\r\\n    function totalSupply() external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens owned by `account`.\\r\\n     */\\r\\n    function balanceOf(address account) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from the caller's account to `to`.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transfer(address to, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the remaining number of tokens that `spender` will be\\r\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\r\\n     * zero by default.\\r\\n     *\\r\\n     * This value changes when {approve} or {transferFrom} are called.\\r\\n     */\\r\\n    function allowance(\\r\\n        address owner,\\r\\n        address spender\\r\\n    ) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\r\\n     * that someone may use both the old and the new allowance by unfortunate\\r\\n     * transaction ordering. One possible solution to mitigate this race\\r\\n     * condition is to first reduce the spender's allowance to 0 and set the\\r\\n     * desired value afterwards:\\r\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\r\\n     *\\r\\n     * Emits an {Approval} event.\\r\\n     */\\r\\n    function approve(address spender, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from `from` to `to` using the\\r\\n     * allowance mechanism. `amount` is then deducted from the caller's\\r\\n     * allowance.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 amount\\r\\n    ) external returns (bool);\\r\\n}\\r\\n\",\"keccak256\":\"0x0daeecf13274cee034f010e0b6d63166eae133e1b0f6f5ca1e6ade67b16c5808\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/IERC20Metadata.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../IERC20.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Interface for the optional metadata functions from the ERC20 standard.\\r\\n *\\r\\n * _Available since v4.1._\\r\\n */\\r\\ninterface IERC20Metadata is IERC20 {\\r\\n    /**\\r\\n     * @dev Returns the name of the token.\\r\\n     */\\r\\n    function name() external view returns (string memory);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the symbol of the token.\\r\\n     */\\r\\n    function symbol() external view returns (string memory);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the decimals places of the token.\\r\\n     */\\r\\n    function decimals() external view returns (uint8);\\r\\n}\\r\\n\",\"keccak256\":\"0x0270cb4e50d6bcdd780df229606076d39df796860d266b5426f374c36f34fe89\",\"license\":\"MIT\"},\"project/contracts/test.sol\":{\"content\":\"// SPDX-License-Identifier:MIT\\r\\n\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\nimport {\\r\\n    IERC20Metadata\\r\\n} from \\\"./openzeppelin_l/contracts/token/ERC20/extensions/IERC20Metadata.sol\\\";\\r\\nimport {IERC20} from \\\"./openzeppelin_l/contracts/token/ERC20/IERC20.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev \\u6d4b\\u8bd5\\u5220\\u9664map\\u6570\\u636e\\u6d88\\u8017\\u7684gas\\r\\n */\\r\\n\\r\\ncontract testGasUsed {\\r\\n    mapping(uint256 => uint256) public NFTDeadline;\\r\\n    uint256 number;\\r\\n    // address tokenAddress;\\r\\n    mapping(address => uint8) public supportTokenAddress;\\r\\n    address[] public addresses;\\r\\n\\r\\n    // \\u6d4b\\u8bd5\\u4e24\\u6b21\\uff0c\\u7b2c\\u4e00\\u6b21\\u5220\\u9664\\uff0c\\u7b2c\\u4e8c\\u6b21\\u4e0d\\u5220\\u9664\\uff0c\\u67e5\\u770b\\u6d88\\u8017gas\\r\\n    function pushData(uint256 _key, uint256 _value, bool _deleteData) public {\\r\\n        NFTDeadline[_key] = _value;\\r\\n        if (_deleteData) {\\r\\n            deleteData(_key);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function deleteData(uint256 _key) internal {\\r\\n        delete NFTDeadline[_key];\\r\\n    }\\r\\n\\r\\n    function getIERC20MetadataInterfaceId() public pure returns (bytes4) {\\r\\n        // Avoid `type(IERC20Metadata).interfaceId` for compatibility with older parsers/linters.\\r\\n        // ERC165 interface id is XOR of all function selectors in the interface.\\r\\n        return\\r\\n            bytes4(keccak256(\\\"totalSupply()\\\")) ^\\r\\n            bytes4(keccak256(\\\"balanceOf(address)\\\")) ^\\r\\n            bytes4(keccak256(\\\"transfer(address,uint256)\\\")) ^\\r\\n            bytes4(keccak256(\\\"allowance(address,address)\\\")) ^\\r\\n            bytes4(keccak256(\\\"approve(address,uint256)\\\")) ^\\r\\n            bytes4(keccak256(\\\"transferFrom(address,address,uint256)\\\")) ^\\r\\n            bytes4(keccak256(\\\"name()\\\")) ^\\r\\n            bytes4(keccak256(\\\"symbol()\\\")) ^\\r\\n            bytes4(keccak256(\\\"decimals()\\\"));\\r\\n    }\\r\\n\\r\\n    function useCall(address tokenAddress) public view returns (string memory) {\\r\\n        bytes memory callData = abi.encodeWithSignature(\\\"symbol()\\\");\\r\\n        // \\u5982\\u679c\\u4f20\\u5165EOA\\u5730\\u5740\\uff0c\\u4f1a\\u8fd4\\u56desuccess\\uff0c\\u4f46\\u957f\\u5ea6\\u4e3a0\\r\\n        (bool success, bytes memory data) = tokenAddress.staticcall(callData);\\r\\n        if (success && data.length > 0) {\\r\\n            return abi.decode(data, (string));\\r\\n        }\\r\\n        return \\\"false\\\";\\r\\n    }\\r\\n\\r\\n    function testRevert() public pure {\\r\\n        revert(\\\"nihao\\\");\\r\\n    }\\r\\n\\r\\n    function setAddress1(uint256 addAmount) public {\\r\\n        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);\\r\\n        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);\\r\\n        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);\\r\\n        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);\\r\\n        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);\\r\\n        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);\\r\\n        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);\\r\\n\\r\\n        address[] memory addresses_temp = addresses;\\r\\n        address[] memory addresses_ = new address[](\\r\\n            addresses_temp.length + addAmount\\r\\n        );\\r\\n        uint256 len = addresses_temp.length;\\r\\n        for (uint256 i = 0; i < len; i++) {\\r\\n            addresses_[i] = addresses_temp[i];\\r\\n        }\\r\\n\\r\\n        for (uint256 i = 0; i < addAmount; i++) {\\r\\n            addresses_[len + i] = 0xdD2FD4581271e230360230F9337D5c0430Bf44C0;\\r\\n        }\\r\\n\\r\\n        addresses = addresses_;\\r\\n    }\\r\\n\\r\\n    function setAddress2(uint256 addAmount) public {\\r\\n        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);\\r\\n        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);\\r\\n        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);\\r\\n        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);\\r\\n        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);\\r\\n        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);\\r\\n        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);\\r\\n\\r\\n        // address[] memory addresses_temp = addresses;\\r\\n        // address[] memory addresses_ = new address[](addresses_temp.length+3);\\r\\n        // uint256 len = addresses_temp.length;\\r\\n        // for (uint256 i=0;i<len;i++){\\r\\n        //     addresses_[i] =addresses_temp[i];\\r\\n        // }\\r\\n\\r\\n        // for (uint256 i=0;i<3;i++){\\r\\n        //     addresses_[len+i]= 0xdD2FD4581271e230360230F9337D5c0430Bf44C0;\\r\\n        // }\\r\\n\\r\\n        for (uint256 i = 0; i < addAmount; i++) {\\r\\n            addresses.push(0xdD2FD4581271e230360230F9337D5c0430Bf44C0);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function init(address[] calldata tokenAddresses) public {\\r\\n        initTokenAddress(tokenAddresses);\\r\\n    }\\r\\n\\r\\n    function initTokenAddress(address[] calldata tokenAddresses) internal {\\r\\n        uint256 len = tokenAddresses.length;\\r\\n        for (uint256 i = 0; i < len; i++) {\\r\\n            supportTokenAddress[tokenAddresses[i]] = 1;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function testInternalCallContractFunction(\\r\\n        address _tokenAddress\\r\\n    ) public view returns (string memory) {\\r\\n        IERC20Metadata IERC20TokenAddress = IERC20Metadata(_tokenAddress);\\r\\n        string memory symbol = IERC20TokenAddress.symbol();\\r\\n        return symbol;\\r\\n    }\\r\\n\\r\\n    function getValue() public pure {\\r\\n        revert(\\\"nihao\\\");\\r\\n    }\\r\\n\\r\\n    function getTimestamp() public view returns (uint256) {\\r\\n        return block.timestamp;\\r\\n    }\\r\\n\\r\\n    function testencodePacked() public pure returns (uint256, uint256) {\\r\\n        string memory result = string(\\r\\n            abi.encodePacked(uint256(3), uint256(100))\\r\\n        );\\r\\n        (uint256 tokenId, uint256 amount) = abi.decode(\\r\\n            bytes(result),\\r\\n            (uint256, uint256)\\r\\n        );\\r\\n        return (tokenId, amount);\\r\\n    }\\r\\n\\r\\n    function testDecodeData(\\r\\n        bytes calldata decodeData\\r\\n    ) public pure returns (uint256, uint256) {\\r\\n        require(decodeData.length == 64, \\\"Invalid data length\\\");\\r\\n        (uint256 tokenId, uint256 amount) = abi.decode(\\r\\n            decodeData,\\r\\n            (uint256, uint256)\\r\\n        );\\r\\n        return (tokenId, amount);\\r\\n    }\\r\\n\\r\\n    receive() external payable {}\\r\\n\\r\\n    function transferNatureToken(address to, uint256 amount) public {\\r\\n        (bool success, ) = to.call{value: amount}(\\\"\\\");\\r\\n        require(success, \\\"call failed\\\");\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract testAddress {\\r\\n    function getAddress() public view returns (string memory) {\\r\\n        return _toHexString(address(this));\\r\\n    }\\r\\n\\r\\n    function _toHexString(\\r\\n        address account\\r\\n    ) private pure returns (string memory) {\\r\\n        bytes20 data = bytes20(account);\\r\\n        bytes16 hexSymbols = 0x30313233343536373839616263646566;\\r\\n        bytes memory str = new bytes(42);\\r\\n        str[0] = \\\"0\\\";\\r\\n        str[1] = \\\"x\\\";\\r\\n        for (uint256 i = 0; i < 20; i++) {\\r\\n            uint8 b = uint8(data[i]);\\r\\n            str[2 + i * 2] = bytes1(hexSymbols[b >> 4]);\\r\\n            str[3 + i * 2] = bytes1(hexSymbols[b & 0x0f]);\\r\\n        }\\r\\n        return string(str);\\r\\n    }\\r\\n}\\r\\n\\r\\ncontract constructorTest {\\r\\n    uint256 public value = 100;\\r\\n}\\r\\n\",\"keccak256\":\"0x8c9fef96c76dc58b6f9eee20f75eda8850f2d40a5dee75ac9468eea95b915463\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 15750,
        "contract": "project/contracts/test.sol:constructorTest",
        "label": "value",
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