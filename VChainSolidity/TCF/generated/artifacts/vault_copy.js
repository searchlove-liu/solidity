export const Artifact_vault_copy = /** @type {const} **/ ({
  "contractName": "vault_copy",
  "sourceName": "contracts/extensions/vault/vault copy.sol",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "TokensReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "TokensWithdrawn",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "contract IERC20",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "getBalance",
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
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5061002161001c61002a565b61002e565b6001805561007e565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6103d18061008d6000396000f3fe6080604052600436106100435760003560e01c8063715018a61461006e5780638da5cb5b14610085578063f2fde38b146100b0578063f8b2cb4f146100d057610069565b366100695760405162461bcd60e51b815260040161006090610307565b60405180910390fd5b600080fd5b34801561007a57600080fd5b506100836100fd565b005b34801561009157600080fd5b5061009a610111565b6040516100a791906102ad565b60405180910390f35b3480156100bc57600080fd5b506100836100cb366004610272565b610120565b3480156100dc57600080fd5b506100f06100eb366004610272565b61015a565b6040516100a7919061037d565b6101056101df565b61010f600061021e565b565b6000546001600160a01b031690565b6101286101df565b6001600160a01b03811661014e5760405162461bcd60e51b8152600401610060906102c1565b6101578161021e565b50565b6040516370a0823160e01b81526000906001600160a01b038316906370a08231906101899030906004016102ad565b60206040518083038186803b1580156101a157600080fd5b505afa1580156101b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d99190610295565b92915050565b6101e761026e565b6001600160a01b03166101f8610111565b6001600160a01b03161461010f5760405162461bcd60e51b815260040161006090610348565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b3390565b600060208284031215610283578081fd5b813561028e81610386565b9392505050565b6000602082840312156102a6578081fd5b5051919050565b6001600160a01b0391909116815260200190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526021908201527f5468697320636f6e747261637420646f6573206e6f74206163636570742045546040820152600960fb1b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b90815260200190565b6001600160a01b038116811461015757600080fdfea26469706673582212202ea34cfaa8e64d11491be6922b5ba650c1513b8464cc74640e3b3d833472f91764736f6c63430008010033",
  "deployedBytecode": "0x6080604052600436106100435760003560e01c8063715018a61461006e5780638da5cb5b14610085578063f2fde38b146100b0578063f8b2cb4f146100d057610069565b366100695760405162461bcd60e51b815260040161006090610307565b60405180910390fd5b600080fd5b34801561007a57600080fd5b506100836100fd565b005b34801561009157600080fd5b5061009a610111565b6040516100a791906102ad565b60405180910390f35b3480156100bc57600080fd5b506100836100cb366004610272565b610120565b3480156100dc57600080fd5b506100f06100eb366004610272565b61015a565b6040516100a7919061037d565b6101056101df565b61010f600061021e565b565b6000546001600160a01b031690565b6101286101df565b6001600160a01b03811661014e5760405162461bcd60e51b8152600401610060906102c1565b6101578161021e565b50565b6040516370a0823160e01b81526000906001600160a01b038316906370a08231906101899030906004016102ad565b60206040518083038186803b1580156101a157600080fd5b505afa1580156101b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d99190610295565b92915050565b6101e761026e565b6001600160a01b03166101f8610111565b6001600160a01b03161461010f5760405162461bcd60e51b815260040161006090610348565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b3390565b600060208284031215610283578081fd5b813561028e81610386565b9392505050565b6000602082840312156102a6578081fd5b5051919050565b6001600160a01b0391909116815260200190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526021908201527f5468697320636f6e747261637420646f6573206e6f74206163636570742045546040820152600960fb1b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b90815260200190565b6001600160a01b038116811461015757600080fdfea26469706673582212202ea34cfaa8e64d11491be6922b5ba650c1513b8464cc74640e3b3d833472f91764736f6c63430008010033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/extensions/vault/vault copy.sol",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "getBalance(address)": {
        "details": "查询合约中某 ERC-20 代币的余额"
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "evm": {
    "bytecode": {
      "generatedSources": [],
      "linkReferences": {},
      "object": "608060405234801561001057600080fd5b5061002161001c61002a565b61002e565b6001805561007e565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6103d18061008d6000396000f3fe6080604052600436106100435760003560e01c8063715018a61461006e5780638da5cb5b14610085578063f2fde38b146100b0578063f8b2cb4f146100d057610069565b366100695760405162461bcd60e51b815260040161006090610307565b60405180910390fd5b600080fd5b34801561007a57600080fd5b506100836100fd565b005b34801561009157600080fd5b5061009a610111565b6040516100a791906102ad565b60405180910390f35b3480156100bc57600080fd5b506100836100cb366004610272565b610120565b3480156100dc57600080fd5b506100f06100eb366004610272565b61015a565b6040516100a7919061037d565b6101056101df565b61010f600061021e565b565b6000546001600160a01b031690565b6101286101df565b6001600160a01b03811661014e5760405162461bcd60e51b8152600401610060906102c1565b6101578161021e565b50565b6040516370a0823160e01b81526000906001600160a01b038316906370a08231906101899030906004016102ad565b60206040518083038186803b1580156101a157600080fd5b505afa1580156101b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d99190610295565b92915050565b6101e761026e565b6001600160a01b03166101f8610111565b6001600160a01b03161461010f5760405162461bcd60e51b815260040161006090610348565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b3390565b600060208284031215610283578081fd5b813561028e81610386565b9392505050565b6000602082840312156102a6578081fd5b5051919050565b6001600160a01b0391909116815260200190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526021908201527f5468697320636f6e747261637420646f6573206e6f74206163636570742045546040820152600960fb1b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b90815260200190565b6001600160a01b038116811461015757600080fdfea26469706673582212202ea34cfaa8e64d11491be6922b5ba650c1513b8464cc74640e3b3d833472f91764736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x21 PUSH2 0x1C PUSH2 0x2A JUMP JUMPDEST PUSH2 0x2E JUMP JUMPDEST PUSH1 0x1 DUP1 SSTORE PUSH2 0x7E JUMP JUMPDEST CALLER SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT DUP4 AND DUP2 OR DUP5 SSTORE PUSH1 0x40 MLOAD SWAP2 SWAP1 SWAP3 AND SWAP3 DUP4 SWAP2 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP2 SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH2 0x3D1 DUP1 PUSH2 0x8D PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x43 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x715018A6 EQ PUSH2 0x6E JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x85 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0xB0 JUMPI DUP1 PUSH4 0xF8B2CB4F EQ PUSH2 0xD0 JUMPI PUSH2 0x69 JUMP JUMPDEST CALLDATASIZE PUSH2 0x69 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x60 SWAP1 PUSH2 0x307 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x7A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x83 PUSH2 0xFD JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x91 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x9A PUSH2 0x111 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xA7 SWAP2 SWAP1 PUSH2 0x2AD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xBC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x83 PUSH2 0xCB CALLDATASIZE PUSH1 0x4 PUSH2 0x272 JUMP JUMPDEST PUSH2 0x120 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xF0 PUSH2 0xEB CALLDATASIZE PUSH1 0x4 PUSH2 0x272 JUMP JUMPDEST PUSH2 0x15A JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xA7 SWAP2 SWAP1 PUSH2 0x37D JUMP JUMPDEST PUSH2 0x105 PUSH2 0x1DF JUMP JUMPDEST PUSH2 0x10F PUSH1 0x0 PUSH2 0x21E JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP1 JUMP JUMPDEST PUSH2 0x128 PUSH2 0x1DF JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH2 0x14E JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x60 SWAP1 PUSH2 0x2C1 JUMP JUMPDEST PUSH2 0x157 DUP2 PUSH2 0x21E JUMP JUMPDEST POP JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x70A08231 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x0 SWAP1 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND SWAP1 PUSH4 0x70A08231 SWAP1 PUSH2 0x189 SWAP1 ADDRESS SWAP1 PUSH1 0x4 ADD PUSH2 0x2AD JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x1A1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0x1B5 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x1D9 SWAP2 SWAP1 PUSH2 0x295 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x1E7 PUSH2 0x26E JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0x1F8 PUSH2 0x111 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EQ PUSH2 0x10F JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x60 SWAP1 PUSH2 0x348 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT DUP4 AND DUP2 OR DUP5 SSTORE PUSH1 0x40 MLOAD SWAP2 SWAP1 SWAP3 AND SWAP3 DUP4 SWAP2 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP2 SWAP1 LOG3 POP POP JUMP JUMPDEST CALLER SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x283 JUMPI DUP1 DUP2 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH2 0x28E DUP2 PUSH2 0x386 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x2A6 JUMPI DUP1 DUP2 REVERT JUMPDEST POP MLOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x26 SWAP1 DUP3 ADD MSTORE PUSH32 0x4F776E61626C653A206E6577206F776E657220697320746865207A65726F2061 PUSH1 0x40 DUP3 ADD MSTORE PUSH6 0x646472657373 PUSH1 0xD0 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x21 SWAP1 DUP3 ADD MSTORE PUSH32 0x5468697320636F6E747261637420646F6573206E6F7420616363657074204554 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x9 PUSH1 0xFB SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 DUP2 ADD MSTORE PUSH32 0x4F776E61626C653A2063616C6C6572206973206E6F7420746865206F776E6572 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST SWAP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0x157 JUMPI PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x2E LOG3 0x4C STATICCALL 0xA8 0xE6 0x4D GT 0x49 SHL 0xE6 SWAP3 0x2B JUMPDEST 0xA6 POP 0xC1 MLOAD EXTCODESIZE DUP5 PUSH5 0xCC74640E3B RETURNDATASIZE DUP4 CALLVALUE PUSH19 0xF91764736F6C63430008010033000000000000 ",
      "sourceMap": "382:2087:0:-:0;;;;;;;;;;;;-1:-1:-1;964:32:1;983:12;:10;:12::i;:::-;964:18;:32::i;:::-;1749:1:2;1860:22;;382:2087:0;;671:98:7;751:10;671:98;:::o;2503:191:1:-;2577:16;2596:6;;-1:-1:-1;;;;;2613:17:1;;;-1:-1:-1;;;;;;2613:17:1;;;;;;2646:40;;2596:6;;;;;;;2646:40;;2577:16;2646:40;2503:191;;:::o;382:2087:0:-;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [
        {
          "ast": {
            "nodeType": "YulBlock",
            "src": "0:2450:8",
            "statements": [
              {
                "nodeType": "YulBlock",
                "src": "6:3:8",
                "statements": []
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "84:189:8",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "130:26:8",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "139:6:8"
                                },
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "147:6:8"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "132:6:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "132:22:8"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "132:22:8"
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
                                "src": "105:7:8"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "114:9:8"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "101:3:8"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "101:23:8"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "126:2:8",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "97:3:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "97:32:8"
                      },
                      "nodeType": "YulIf",
                      "src": "94:2:8"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "165:36:8",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "191:9:8"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "178:12:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "178:23:8"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nodeType": "YulTypedName",
                          "src": "169:5:8",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "237:5:8"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "210:26:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "210:33:8"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "210:33:8"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "252:15:8",
                      "value": {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "262:5:8"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "252:6:8"
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
                    "src": "50:9:8",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "61:7:8",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "73:6:8",
                    "type": ""
                  }
                ],
                "src": "14:259:8"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "362:189:8",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "408:26:8",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "417:6:8"
                                },
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "425:6:8"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "410:6:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "410:22:8"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "410:22:8"
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
                                "src": "383:7:8"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "392:9:8"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "379:3:8"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "379:23:8"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "404:2:8",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "375:3:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "375:32:8"
                      },
                      "nodeType": "YulIf",
                      "src": "372:2:8"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "443:36:8",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "469:9:8"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "456:12:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "456:23:8"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nodeType": "YulTypedName",
                          "src": "447:5:8",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "515:5:8"
                          }
                        ],
                        "functionName": {
                          "name": "validator_revert_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "488:26:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "488:33:8"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "488:33:8"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "530:15:8",
                      "value": {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "540:5:8"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "530:6:8"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_contract$_IERC20_$412",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "328:9:8",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "339:7:8",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "351:6:8",
                    "type": ""
                  }
                ],
                "src": "278:273:8"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "637:113:8",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "683:26:8",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "692:6:8"
                                },
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "700:6:8"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "685:6:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "685:22:8"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "685:22:8"
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
                                "src": "658:7:8"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "667:9:8"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "654:3:8"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "654:23:8"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "679:2:8",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "650:3:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "650:32:8"
                      },
                      "nodeType": "YulIf",
                      "src": "647:2:8"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "718:26:8",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "734:9:8"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "728:5:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "728:16:8"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "718:6:8"
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
                    "src": "603:9:8",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "614:7:8",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "626:6:8",
                    "type": ""
                  }
                ],
                "src": "556:194:8"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "856:102:8",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "866:26:8",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "878:9:8"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "889:2:8",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "874:3:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "874:18:8"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "866:4:8"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "908:9:8"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "923:6:8"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "939:3:8",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "944:1:8",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "935:3:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "935:11:8"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "948:1:8",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "931:3:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "931:19:8"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "919:3:8"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "919:32:8"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "901:6:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "901:51:8"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "901:51:8"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "825:9:8",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "836:6:8",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "847:4:8",
                    "type": ""
                  }
                ],
                "src": "755:203:8"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1137:228:8",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1154:9:8"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1165:2:8",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1147:6:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1147:21:8"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1147:21:8"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1188:9:8"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1199:2:8",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1184:3:8"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1184:18:8"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1204:2:8",
                            "type": "",
                            "value": "38"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1177:6:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1177:30:8"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1177:30:8"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1227:9:8"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1238:2:8",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1223:3:8"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1223:18:8"
                          },
                          {
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "1243:34:8",
                            "type": "",
                            "value": "Ownable: new owner is the zero a"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1216:6:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1216:62:8"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1216:62:8"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1298:9:8"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1309:2:8",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1294:3:8"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1294:18:8"
                          },
                          {
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "1314:8:8",
                            "type": "",
                            "value": "ddress"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1287:6:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1287:36:8"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1287:36:8"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1332:27:8",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1344:9:8"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1355:3:8",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1340:3:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1340:19:8"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "1332:4:8"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1114:9:8",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "1128:4:8",
                    "type": ""
                  }
                ],
                "src": "963:402:8"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1544:223:8",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1561:9:8"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1572:2:8",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1554:6:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1554:21:8"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1554:21:8"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1595:9:8"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1606:2:8",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1591:3:8"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1591:18:8"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1611:2:8",
                            "type": "",
                            "value": "33"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1584:6:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1584:30:8"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1584:30:8"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1634:9:8"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1645:2:8",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1630:3:8"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1630:18:8"
                          },
                          {
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "1650:34:8",
                            "type": "",
                            "value": "This contract does not accept ET"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1623:6:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1623:62:8"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1623:62:8"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1705:9:8"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1716:2:8",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1701:3:8"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1701:18:8"
                          },
                          {
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "1721:3:8",
                            "type": "",
                            "value": "H"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1694:6:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1694:31:8"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1694:31:8"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1734:27:8",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1746:9:8"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1757:3:8",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1742:3:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1742:19:8"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "1734:4:8"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_52b8bd6f6393d77d9b633aa1efaa6a15291e9aec9c5eb3ea06250e1776f40f50__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1521:9:8",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "1535:4:8",
                    "type": ""
                  }
                ],
                "src": "1370:397:8"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1946:182:8",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1963:9:8"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1974:2:8",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1956:6:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1956:21:8"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1956:21:8"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1997:9:8"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2008:2:8",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1993:3:8"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1993:18:8"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2013:2:8",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1986:6:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1986:30:8"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1986:30:8"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2036:9:8"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2047:2:8",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2032:3:8"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2032:18:8"
                          },
                          {
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "2052:34:8",
                            "type": "",
                            "value": "Ownable: caller is not the owner"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2025:6:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2025:62:8"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2025:62:8"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2096:26:8",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2108:9:8"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2119:2:8",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2104:3:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2104:18:8"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "2096:4:8"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1923:9:8",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "1937:4:8",
                    "type": ""
                  }
                ],
                "src": "1772:356:8"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2234:76:8",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "2244:26:8",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2256:9:8"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2267:2:8",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2252:3:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2252:18:8"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "2244:4:8"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2286:9:8"
                          },
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2297:6:8"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2279:6:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2279:25:8"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2279:25:8"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "2203:9:8",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "2214:6:8",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "2225:4:8",
                    "type": ""
                  }
                ],
                "src": "2133:177:8"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2362:86:8",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2426:16:8",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2435:1:8",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2438:1:8",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "2428:6:8"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2428:12:8"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2428:12:8"
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
                                "src": "2385:5:8"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "2396:5:8"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "2411:3:8",
                                            "type": "",
                                            "value": "160"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "2416:1:8",
                                            "type": "",
                                            "value": "1"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nodeType": "YulIdentifier",
                                          "src": "2407:3:8"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2407:11:8"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "2420:1:8",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sub",
                                      "nodeType": "YulIdentifier",
                                      "src": "2403:3:8"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2403:19:8"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "2392:3:8"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2392:31:8"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "2382:2:8"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2382:42:8"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "2375:6:8"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2375:50:8"
                      },
                      "nodeType": "YulIf",
                      "src": "2372:2:8"
                    }
                  ]
                },
                "name": "validator_revert_t_address",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "2351:5:8",
                    "type": ""
                  }
                ],
                "src": "2315:133:8"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        let value := calldataload(headStart)\n        validator_revert_t_address(value)\n        value0 := value\n    }\n    function abi_decode_tuple_t_contract$_IERC20_$412(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        let value := calldataload(headStart)\n        validator_revert_t_address(value)\n        value0 := value\n    }\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        value0 := mload(headStart)\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Ownable: new owner is the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_52b8bd6f6393d77d9b633aa1efaa6a15291e9aec9c5eb3ea06250e1776f40f50__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 33)\n        mstore(add(headStart, 64), \"This contract does not accept ET\")\n        mstore(add(headStart, 96), \"H\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function validator_revert_t_address(value)\n    {\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n}",
          "id": 8,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "6080604052600436106100435760003560e01c8063715018a61461006e5780638da5cb5b14610085578063f2fde38b146100b0578063f8b2cb4f146100d057610069565b366100695760405162461bcd60e51b815260040161006090610307565b60405180910390fd5b600080fd5b34801561007a57600080fd5b506100836100fd565b005b34801561009157600080fd5b5061009a610111565b6040516100a791906102ad565b60405180910390f35b3480156100bc57600080fd5b506100836100cb366004610272565b610120565b3480156100dc57600080fd5b506100f06100eb366004610272565b61015a565b6040516100a7919061037d565b6101056101df565b61010f600061021e565b565b6000546001600160a01b031690565b6101286101df565b6001600160a01b03811661014e5760405162461bcd60e51b8152600401610060906102c1565b6101578161021e565b50565b6040516370a0823160e01b81526000906001600160a01b038316906370a08231906101899030906004016102ad565b60206040518083038186803b1580156101a157600080fd5b505afa1580156101b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d99190610295565b92915050565b6101e761026e565b6001600160a01b03166101f8610111565b6001600160a01b03161461010f5760405162461bcd60e51b815260040161006090610348565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b3390565b600060208284031215610283578081fd5b813561028e81610386565b9392505050565b6000602082840312156102a6578081fd5b5051919050565b6001600160a01b0391909116815260200190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526021908201527f5468697320636f6e747261637420646f6573206e6f74206163636570742045546040820152600960fb1b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b90815260200190565b6001600160a01b038116811461015757600080fdfea26469706673582212202ea34cfaa8e64d11491be6922b5ba650c1513b8464cc74640e3b3d833472f91764736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x43 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x715018A6 EQ PUSH2 0x6E JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x85 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0xB0 JUMPI DUP1 PUSH4 0xF8B2CB4F EQ PUSH2 0xD0 JUMPI PUSH2 0x69 JUMP JUMPDEST CALLDATASIZE PUSH2 0x69 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x60 SWAP1 PUSH2 0x307 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x7A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x83 PUSH2 0xFD JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x91 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x9A PUSH2 0x111 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xA7 SWAP2 SWAP1 PUSH2 0x2AD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xBC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x83 PUSH2 0xCB CALLDATASIZE PUSH1 0x4 PUSH2 0x272 JUMP JUMPDEST PUSH2 0x120 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xF0 PUSH2 0xEB CALLDATASIZE PUSH1 0x4 PUSH2 0x272 JUMP JUMPDEST PUSH2 0x15A JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xA7 SWAP2 SWAP1 PUSH2 0x37D JUMP JUMPDEST PUSH2 0x105 PUSH2 0x1DF JUMP JUMPDEST PUSH2 0x10F PUSH1 0x0 PUSH2 0x21E JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP1 JUMP JUMPDEST PUSH2 0x128 PUSH2 0x1DF JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH2 0x14E JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x60 SWAP1 PUSH2 0x2C1 JUMP JUMPDEST PUSH2 0x157 DUP2 PUSH2 0x21E JUMP JUMPDEST POP JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x70A08231 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x0 SWAP1 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND SWAP1 PUSH4 0x70A08231 SWAP1 PUSH2 0x189 SWAP1 ADDRESS SWAP1 PUSH1 0x4 ADD PUSH2 0x2AD JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x1A1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0x1B5 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x1D9 SWAP2 SWAP1 PUSH2 0x295 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x1E7 PUSH2 0x26E JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0x1F8 PUSH2 0x111 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EQ PUSH2 0x10F JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x60 SWAP1 PUSH2 0x348 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT DUP4 AND DUP2 OR DUP5 SSTORE PUSH1 0x40 MLOAD SWAP2 SWAP1 SWAP3 AND SWAP3 DUP4 SWAP2 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP2 SWAP1 LOG3 POP POP JUMP JUMPDEST CALLER SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x283 JUMPI DUP1 DUP2 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH2 0x28E DUP2 PUSH2 0x386 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x2A6 JUMPI DUP1 DUP2 REVERT JUMPDEST POP MLOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x26 SWAP1 DUP3 ADD MSTORE PUSH32 0x4F776E61626C653A206E6577206F776E657220697320746865207A65726F2061 PUSH1 0x40 DUP3 ADD MSTORE PUSH6 0x646472657373 PUSH1 0xD0 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x21 SWAP1 DUP3 ADD MSTORE PUSH32 0x5468697320636F6E747261637420646F6573206E6F7420616363657074204554 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x9 PUSH1 0xFB SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 DUP2 ADD MSTORE PUSH32 0x4F776E61626C653A2063616C6C6572206973206E6F7420746865206F776E6572 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST SWAP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0x157 JUMPI PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x2E LOG3 0x4C STATICCALL 0xA8 0xE6 0x4D GT 0x49 SHL 0xE6 SWAP3 0x2B JUMPDEST 0xA6 POP 0xC1 MLOAD EXTCODESIZE DUP5 PUSH5 0xCC74640E3B RETURNDATASIZE DUP4 CALLVALUE PUSH19 0xF91764736F6C63430008010033000000000000 ",
      "sourceMap": "382:2087:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2415:43;;-1:-1:-1;;;2415:43:0;;;;;;;:::i;:::-;;;;;;;;382:2087;;;;1884:103:1;;;;;;;;;;;;;:::i;:::-;;1243:87;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2142:201;;;;;;;;;;-1:-1:-1;2142:201:1;;;;;:::i;:::-;;:::i;1499:122:0:-;;;;;;;;;;-1:-1:-1;1499:122:0;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;1884:103:1:-;1129:13;:11;:13::i;:::-;1949:30:::1;1976:1;1949:18;:30::i;:::-;1884:103::o:0;1243:87::-;1289:7;1316:6;-1:-1:-1;;;;;1316:6:1;1243:87;:::o;2142:201::-;1129:13;:11;:13::i;:::-;-1:-1:-1;;;;;2231:22:1;::::1;2223:73;;;;-1:-1:-1::0;;;2223:73:1::1;;;;;;;:::i;:::-;2307:28;2326:8;2307:18;:28::i;:::-;2142:201:::0;:::o;1499:122:0:-;1583:30;;-1:-1:-1;;;1583:30:0;;1556:7;;-1:-1:-1;;;;;1583:15:0;;;;;:30;;1607:4;;1583:30;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1576:37;1499:122;-1:-1:-1;;1499:122:0:o;1408:132:1:-;1483:12;:10;:12::i;:::-;-1:-1:-1;;;;;1472:23:1;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1472:23:1;;1464:68;;;;-1:-1:-1;;;1464:68:1;;;;;;;:::i;2503:191::-;2577:16;2596:6;;-1:-1:-1;;;;;2613:17:1;;;-1:-1:-1;;;;;;2613:17:1;;;;;;2646:40;;2596:6;;;;;;;2646:40;;2577:16;2646:40;2503:191;;:::o;671:98:7:-;751:10;671:98;:::o;14:259:8:-;;126:2;114:9;105:7;101:23;97:32;94:2;;;147:6;139;132:22;94:2;191:9;178:23;210:33;237:5;210:33;:::i;:::-;262:5;84:189;-1:-1:-1;;;84:189:8:o;556:194::-;;679:2;667:9;658:7;654:23;650:32;647:2;;;700:6;692;685:22;647:2;-1:-1:-1;728:16:8;;637:113;-1:-1:-1;637:113:8:o;755:203::-;-1:-1:-1;;;;;919:32:8;;;;901:51;;889:2;874:18;;856:102::o;963:402::-;1165:2;1147:21;;;1204:2;1184:18;;;1177:30;1243:34;1238:2;1223:18;;1216:62;-1:-1:-1;;;1309:2:8;1294:18;;1287:36;1355:3;1340:19;;1137:228::o;1370:397::-;1572:2;1554:21;;;1611:2;1591:18;;;1584:30;1650:34;1645:2;1630:18;;1623:62;-1:-1:-1;;;1716:2:8;1701:18;;1694:31;1757:3;1742:19;;1544:223::o;1772:356::-;1974:2;1956:21;;;1993:18;;;1986:30;2052:34;2047:2;2032:18;;2025:62;2119:2;2104:18;;1946:182::o;2133:177::-;2279:25;;;2267:2;2252:18;;2234:76::o;2315:133::-;-1:-1:-1;;;;;2392:31:8;;2382:42;;2372:2;;2438:1;2435;2428:12"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "195400",
        "executionCost": "42712",
        "totalCost": "238112"
      },
      "external": {
        "getBalance(address)": "infinite",
        "owner()": "1070",
        "renounceOwnership()": "infinite",
        "transferOwnership(address)": "infinite"
      },
      "internal": {
        "deposit(contract IERC20,uint256)": "infinite",
        "withdraw(contract IERC20,address,uint256)": "infinite"
      }
    },
    "methodIdentifiers": {
      "getBalance(address)": "f8b2cb4f",
      "owner()": "8da5cb5b",
      "renounceOwnership()": "715018a6",
      "transferOwnership(address)": "f2fde38b"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"TokensReceived\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"TokensWithdrawn\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"getBalance(address)\":{\"details\":\"\\u67e5\\u8be2\\u5408\\u7ea6\\u4e2d\\u67d0 ERC-20 \\u4ee3\\u5e01\\u7684\\u4f59\\u989d\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/extensions/vault/vault copy.sol\":\"vault_copy\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"project/contracts/extensions/vault/vault copy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// Compatible with OpenZeppelin Contracts 4.9.6\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\nimport \\\"../../openzeppelin_l/contracts/token/ERC20/IERC20.sol\\\";\\r\\nimport \\\"../../openzeppelin_l/contracts/token/ERC20/utils/SafeERC20.sol\\\";\\r\\nimport \\\"../../openzeppelin_l/contracts/access/Ownable.sol\\\";\\r\\nimport \\\"../../openzeppelin_l/contracts/security/ReentrancyGuard.sol\\\";\\r\\n\\r\\ncontract vault_copy is Ownable, ReentrancyGuard {\\r\\n    using SafeERC20 for IERC20; // \\u542f\\u7528 SafeERC20 \\u6269\\u5c55\\u65b9\\u6cd5\\r\\n\\r\\n    // \\u4e8b\\u4ef6\\uff1a\\u8bb0\\u5f55\\u63a5\\u6536\\u548c\\u63d0\\u53d6\\r\\n    event TokensReceived(\\r\\n        address indexed token,\\r\\n        address indexed from,\\r\\n        uint256 amount\\r\\n    );\\r\\n\\r\\n    event TokensWithdrawn(\\r\\n        address indexed token,\\r\\n        address indexed to,\\r\\n        uint256 amount\\r\\n    );\\r\\n\\r\\n    /**\\r\\n     * @dev \\u5b58\\u6b3e ERC-20 \\u4ee3\\u5e01\\uff08pull \\u6a21\\u5f0f\\uff0c\\u7528\\u6237\\u9700\\u63d0\\u524d approve\\uff09\\r\\n     * \\u4f7f\\u7528 SafeERC20.safeTransferFrom \\u786e\\u4fdd\\u517c\\u5bb9\\u975e\\u6807\\u51c6\\u4ee3\\u5e01\\r\\n     * \\u4f7f\\u7528\\u65f6\\uff0c\\u9700\\u8981erc20Token.approve(vaultAddress, amount)\\u5148\\u6388\\u6743\\r\\n     */\\r\\n    function deposit(\\r\\n        IERC20 token,\\r\\n        uint256 amount\\r\\n    ) internal onlyOwner nonReentrant {\\r\\n        require(amount > 0, \\\"Amount must be greater than 0\\\");\\r\\n\\r\\n        // SafeERC20 \\u4f1a\\u68c0\\u67e5\\u8fd4\\u56de\\u503c\\u6216 revert \\u884c\\u4e3a\\uff0c\\u786e\\u4fdd\\u5b89\\u5168\\r\\n        token.safeTransferFrom(msg.sender, address(this), amount);\\r\\n\\r\\n        emit TokensReceived(address(token), msg.sender, amount);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev \\u67e5\\u8be2\\u5408\\u7ea6\\u4e2d\\u67d0 ERC-20 \\u4ee3\\u5e01\\u7684\\u4f59\\u989d\\r\\n     */\\r\\n    function getBalance(IERC20 token) external view returns (uint256) {\\r\\n        return token.balanceOf(address(this));\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Owner \\u63d0\\u53d6\\u4ee3\\u5e01\\r\\n     * \\u4f7f\\u7528 SafeERC20.safeTransfer \\u786e\\u4fdd\\u8f6c\\u79fb\\u6210\\u529f\\r\\n     */\\r\\n    function withdraw(\\r\\n        IERC20 token,\\r\\n        address to,\\r\\n        uint256 amount\\r\\n    ) internal onlyOwner nonReentrant {\\r\\n        require(amount > 0, \\\"Amount must be greater than 0\\\");\\r\\n        uint256 balance = token.balanceOf(address(this));\\r\\n        require(balance >= amount, \\\"Insufficient balance\\\");\\r\\n\\r\\n        // \\u5148 emit \\u4e8b\\u4ef6\\uff08Effects\\uff09\\uff0c\\u518d\\u8f6c\\u79fb\\uff08Interactions\\uff09\\r\\n        emit TokensWithdrawn(address(token), to, amount);\\r\\n\\r\\n        // \\u4f7f\\u7528 SafeERC20 \\u9632\\u6b62\\u975e\\u6807\\u51c6\\u4ee3\\u5e01\\u95ee\\u9898\\r\\n        token.safeTransfer(to, amount);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev \\u7981\\u6b62\\u63a5\\u6536\\u539f\\u751f ETH\\uff08\\u907f\\u514d\\u610f\\u5916\\u9501\\u5b9a\\u8d44\\u91d1\\uff09\\r\\n     */\\r\\n    receive() external payable {\\r\\n        revert(\\\"This contract does not accept ETH\\\");\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x4e98520385c2307cffadfb2367d27dcef00232783f8152a6bd97c51815362e90\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/access/Ownable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (access/Ownable.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../utils/Context.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Contract module which provides a basic access control mechanism, where\\r\\n * there is an account (an owner) that can be granted exclusive access to\\r\\n * specific functions.\\r\\n *\\r\\n * By default, the owner account will be the one that deploys the contract. This\\r\\n * can later be changed with {transferOwnership}.\\r\\n *\\r\\n * This module is used through inheritance. It will make available the modifier\\r\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\r\\n * the owner.\\r\\n */\\r\\nabstract contract Ownable is Context {\\r\\n    address private _owner;\\r\\n\\r\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\r\\n\\r\\n    /**\\r\\n     * @dev Initializes the contract setting the deployer as the initial owner.\\r\\n     */\\r\\n    constructor() {\\r\\n        _transferOwnership(_msgSender());\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Throws if called by any account other than the owner.\\r\\n     */\\r\\n    modifier onlyOwner() {\\r\\n        _checkOwner();\\r\\n        _;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the address of the current owner.\\r\\n     */\\r\\n    function owner() public view virtual returns (address) {\\r\\n        return _owner;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Throws if the sender is not the owner.\\r\\n     */\\r\\n    function _checkOwner() internal view virtual {\\r\\n        require(owner() == _msgSender(), \\\"Ownable: caller is not the owner\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Leaves the contract without owner. It will not be possible to call\\r\\n     * `onlyOwner` functions. Can only be called by the current owner.\\r\\n     *\\r\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\r\\n     * thereby disabling any functionality that is only available to the owner.\\r\\n     */\\r\\n    function renounceOwnership() public virtual onlyOwner {\\r\\n        _transferOwnership(address(0));\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\r\\n     * Can only be called by the current owner.\\r\\n     */\\r\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\r\\n        require(newOwner != address(0), \\\"Ownable: new owner is the zero address\\\");\\r\\n        _transferOwnership(newOwner);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\r\\n     * Internal function without access restriction.\\r\\n     */\\r\\n    function _transferOwnership(address newOwner) internal virtual {\\r\\n        address oldOwner = _owner;\\r\\n        _owner = newOwner;\\r\\n        emit OwnershipTransferred(oldOwner, newOwner);\\r\\n    }\\r\\n}\",\"keccak256\":\"0x64bd2dd78a11d236cdf538dd598cd16a0fa973dc8b5e4aefc21c1eee213ab7e8\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/security/ReentrancyGuard.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (security/ReentrancyGuard.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Contract module that helps prevent reentrant calls to a function.\\r\\n *\\r\\n * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\\r\\n * available, which can be applied to functions to make sure there are no nested\\r\\n * (reentrant) calls to them.\\r\\n *\\r\\n * Note that because there is a single `nonReentrant` guard, functions marked as\\r\\n * `nonReentrant` may not call one another. This can be worked around by making\\r\\n * those functions `private`, and then adding `external` `nonReentrant` entry\\r\\n * points to them.\\r\\n *\\r\\n * TIP: If you would like to learn more about reentrancy and alternative ways\\r\\n * to protect against it, check out our blog post\\r\\n * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].\\r\\n */\\r\\nabstract contract ReentrancyGuard {\\r\\n    // Booleans are more expensive than uint256 or any type that takes up a full\\r\\n    // word because each write operation emits an extra SLOAD to first read the\\r\\n    // slot's contents, replace the bits taken up by the boolean, and then write\\r\\n    // back. This is the compiler's defense against contract upgrades and\\r\\n    // pointer aliasing, and it cannot be disabled.\\r\\n\\r\\n    // The values being non-zero value makes deployment a bit more expensive,\\r\\n    // but in exchange the refund on every call to nonReentrant will be lower in\\r\\n    // amount. Since refunds are capped to a percentage of the total\\r\\n    // transaction's gas, it is best to keep them low in cases like this one, to\\r\\n    // increase the likelihood of the full refund coming into effect.\\r\\n    uint256 private constant _NOT_ENTERED = 1;\\r\\n    uint256 private constant _ENTERED = 2;\\r\\n\\r\\n    uint256 private _status;\\r\\n\\r\\n    constructor() {\\r\\n        _status = _NOT_ENTERED;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Prevents a contract from calling itself, directly or indirectly.\\r\\n     * Calling a `nonReentrant` function from another `nonReentrant`\\r\\n     * function is not supported. It is possible to prevent this from happening\\r\\n     * by making the `nonReentrant` function external, and making it call a\\r\\n     * `private` function that does the actual work.\\r\\n     */\\r\\n    modifier nonReentrant() {\\r\\n        _nonReentrantBefore();\\r\\n        _;\\r\\n        _nonReentrantAfter();\\r\\n    }\\r\\n\\r\\n    function _nonReentrantBefore() private {\\r\\n        // On the first call to nonReentrant, _status will be _NOT_ENTERED\\r\\n        require(_status != _ENTERED, \\\"ReentrancyGuard: reentrant call\\\");\\r\\n\\r\\n        // Any calls to nonReentrant after this point will fail\\r\\n        _status = _ENTERED;\\r\\n    }\\r\\n\\r\\n    function _nonReentrantAfter() private {\\r\\n        // By storing the original value once again, a refund is triggered (see\\r\\n        // https://eips.ethereum.org/EIPS/eip-2200)\\r\\n        _status = _NOT_ENTERED;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns true if the reentrancy guard is currently set to \\\"entered\\\", which indicates there is a\\r\\n     * `nonReentrant` function in the call stack.\\r\\n     */\\r\\n    function _reentrancyGuardEntered() internal view returns (bool) {\\r\\n        return _status == _ENTERED;\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0xbec94e472f5fde800401cdc48fe89c0260ab92b22965ddce17a715f9825b4f12\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC20/IERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/IERC20.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\r\\n */\\r\\ninterface IERC20 {\\r\\n    /**\\r\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\r\\n     * another (`to`).\\r\\n     *\\r\\n     * Note that `value` may be zero.\\r\\n     */\\r\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\r\\n     * a call to {approve}. `value` is the new allowance.\\r\\n     */\\r\\n    event Approval(\\r\\n        address indexed owner,\\r\\n        address indexed spender,\\r\\n        uint256 value\\r\\n    );\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens in existence.\\r\\n     */\\r\\n    function totalSupply() external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens owned by `account`.\\r\\n     */\\r\\n    function balanceOf(address account) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from the caller's account to `to`.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transfer(address to, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the remaining number of tokens that `spender` will be\\r\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\r\\n     * zero by default.\\r\\n     *\\r\\n     * This value changes when {approve} or {transferFrom} are called.\\r\\n     */\\r\\n    function allowance(\\r\\n        address owner,\\r\\n        address spender\\r\\n    ) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\r\\n     * that someone may use both the old and the new allowance by unfortunate\\r\\n     * transaction ordering. One possible solution to mitigate this race\\r\\n     * condition is to first reduce the spender's allowance to 0 and set the\\r\\n     * desired value afterwards:\\r\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\r\\n     *\\r\\n     * Emits an {Approval} event.\\r\\n     */\\r\\n    function approve(address spender, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from `from` to `to` using the\\r\\n     * allowance mechanism. `amount` is then deducted from the caller's\\r\\n     * allowance.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 amount\\r\\n    ) external returns (bool);\\r\\n}\\r\\n\",\"keccak256\":\"0x0daeecf13274cee034f010e0b6d63166eae133e1b0f6f5ca1e6ade67b16c5808\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.4) (token/ERC20/extensions/IERC20Permit.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC20 Permit extension allowing approvals to be made via signatures, as defined in\\r\\n * https://eips.ethereum.org/EIPS/eip-2612[EIP-2612].\\r\\n *\\r\\n * Adds the {permit} method, which can be used to change an account's ERC20 allowance (see {IERC20-allowance}) by\\r\\n * presenting a message signed by the account. By not relying on {IERC20-approve}, the token holder account doesn't\\r\\n * need to send a transaction, and thus is not required to hold Ether at all.\\r\\n *\\r\\n * ==== Security Considerations\\r\\n *\\r\\n * There are two important considerations concerning the use of `permit`. The first is that a valid permit signature\\r\\n * expresses an allowance, and it should not be assumed to convey additional meaning. In particular, it should not be\\r\\n * considered as an intention to spend the allowance in any specific way. The second is that because permits have\\r\\n * built-in replay protection and can be submitted by anyone, they can be frontrun. A protocol that uses permits should\\r\\n * take this into consideration and allow a `permit` call to fail. Combining these two aspects, a pattern that may be\\r\\n * generally recommended is:\\r\\n *\\r\\n * ```solidity\\r\\n * function doThingWithPermit(..., uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public {\\r\\n *     try token.permit(msg.sender, address(this), value, deadline, v, r, s) {} catch {}\\r\\n *     doThing(..., value);\\r\\n * }\\r\\n *\\r\\n * function doThing(..., uint256 value) public {\\r\\n *     token.safeTransferFrom(msg.sender, address(this), value);\\r\\n *     ...\\r\\n * }\\r\\n * ```\\r\\n *\\r\\n * Observe that: 1) `msg.sender` is used as the owner, leaving no ambiguity as to the signer intent, and 2) the use of\\r\\n * `try/catch` allows the permit to fail and makes the code tolerant to frontrunning. (See also\\r\\n * {SafeERC20-safeTransferFrom}).\\r\\n *\\r\\n * Additionally, note that smart contract wallets (such as Argent or Safe) are not able to produce permit signatures, so\\r\\n * contracts should have entry points that don't rely on permit.\\r\\n */\\r\\ninterface IERC20Permit {\\r\\n    /**\\r\\n     * @dev Sets `value` as the allowance of `spender` over ``owner``'s tokens,\\r\\n     * given ``owner``'s signed approval.\\r\\n     *\\r\\n     * IMPORTANT: The same issues {IERC20-approve} has related to transaction\\r\\n     * ordering also apply here.\\r\\n     *\\r\\n     * Emits an {Approval} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `spender` cannot be the zero address.\\r\\n     * - `deadline` must be a timestamp in the future.\\r\\n     * - `v`, `r` and `s` must be a valid `secp256k1` signature from `owner`\\r\\n     * over the EIP712-formatted function arguments.\\r\\n     * - the signature must use ``owner``'s current nonce (see {nonces}).\\r\\n     *\\r\\n     * For more information on the signature format, see the\\r\\n     * https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP\\r\\n     * section].\\r\\n     *\\r\\n     * CAUTION: See Security Considerations above.\\r\\n     */\\r\\n    function permit(\\r\\n        address owner,\\r\\n        address spender,\\r\\n        uint256 value,\\r\\n        uint256 deadline,\\r\\n        uint8 v,\\r\\n        bytes32 r,\\r\\n        bytes32 s\\r\\n    ) external;\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the current nonce for `owner`. This value must be\\r\\n     * included whenever a signature is generated for {permit}.\\r\\n     *\\r\\n     * Every successful call to {permit} increases ``owner``'s nonce by one. This\\r\\n     * prevents a signature from being used multiple times.\\r\\n     */\\r\\n    function nonces(address owner) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the domain separator used in the encoding of the signature for {permit}, as defined by {EIP712}.\\r\\n     */\\r\\n    // solhint-disable-next-line func-name-mixedcase\\r\\n    function DOMAIN_SEPARATOR() external view returns (bytes32);\\r\\n}\\r\\n\",\"keccak256\":\"0x2e01d1586d86fdcba868fa58ad50f017c51a2e96179a7f4fe1fbb9568a5ad2ac\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/token/ERC20/utils/SafeERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.3) (token/ERC20/utils/SafeERC20.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../IERC20.sol\\\";\\r\\nimport \\\"../extensions/IERC20Permit.sol\\\";\\r\\nimport \\\"../../../utils/Address.sol\\\";\\r\\n\\r\\n/**\\r\\n * @title SafeERC20\\r\\n * @dev Wrappers around ERC20 operations that throw on failure (when the token\\r\\n * contract returns false). Tokens that return no value (and instead revert or\\r\\n * throw on failure) are also supported, non-reverting calls are assumed to be\\r\\n * successful.\\r\\n * To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\\r\\n * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\\r\\n */\\r\\nlibrary SafeERC20 {\\r\\n    using Address for address;\\r\\n\\r\\n    /**\\r\\n     * @dev Transfer `value` amount of `token` from the calling contract to `to`. If `token` returns no value,\\r\\n     * non-reverting calls are assumed to be successful.\\r\\n     */\\r\\n    function safeTransfer(IERC20 token, address to, uint256 value) internal {\\r\\n        _callOptionalReturn(\\r\\n            token,\\r\\n            abi.encodeWithSelector(token.transfer.selector, to, value)\\r\\n        );\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Transfer `value` amount of `token` from `from` to `to`, spending the approval given by `from` to the\\r\\n     * calling contract. If `token` returns no value, non-reverting calls are assumed to be successful.\\r\\n     */\\r\\n    function safeTransferFrom(\\r\\n        IERC20 token,\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 value\\r\\n    ) internal {\\r\\n        _callOptionalReturn(\\r\\n            token,\\r\\n            abi.encodeWithSelector(token.transferFrom.selector, from, to, value)\\r\\n        );\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Deprecated. This function has issues similar to the ones found in\\r\\n     * {IERC20-approve}, and its usage is discouraged.\\r\\n     *\\r\\n     * Whenever possible, use {safeIncreaseAllowance} and\\r\\n     * {safeDecreaseAllowance} instead.\\r\\n     */\\r\\n    function safeApprove(\\r\\n        IERC20 token,\\r\\n        address spender,\\r\\n        uint256 value\\r\\n    ) internal {\\r\\n        // safeApprove should only be called when setting an initial allowance,\\r\\n        // or when resetting it to zero. To increase and decrease it, use\\r\\n        // 'safeIncreaseAllowance' and 'safeDecreaseAllowance'\\r\\n        require(\\r\\n            (value == 0) || (token.allowance(address(this), spender) == 0),\\r\\n            \\\"SafeERC20: approve from non-zero to non-zero allowance\\\"\\r\\n        );\\r\\n        _callOptionalReturn(\\r\\n            token,\\r\\n            abi.encodeWithSelector(token.approve.selector, spender, value)\\r\\n        );\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Increase the calling contract's allowance toward `spender` by `value`. If `token` returns no value,\\r\\n     * non-reverting calls are assumed to be successful.\\r\\n     */\\r\\n    function safeIncreaseAllowance(\\r\\n        IERC20 token,\\r\\n        address spender,\\r\\n        uint256 value\\r\\n    ) internal {\\r\\n        uint256 oldAllowance = token.allowance(address(this), spender);\\r\\n        _callOptionalReturn(\\r\\n            token,\\r\\n            abi.encodeWithSelector(\\r\\n                token.approve.selector,\\r\\n                spender,\\r\\n                oldAllowance + value\\r\\n            )\\r\\n        );\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Decrease the calling contract's allowance toward `spender` by `value`. If `token` returns no value,\\r\\n     * non-reverting calls are assumed to be successful.\\r\\n     */\\r\\n    function safeDecreaseAllowance(\\r\\n        IERC20 token,\\r\\n        address spender,\\r\\n        uint256 value\\r\\n    ) internal {\\r\\n        unchecked {\\r\\n            uint256 oldAllowance = token.allowance(address(this), spender);\\r\\n            require(\\r\\n                oldAllowance >= value,\\r\\n                \\\"SafeERC20: decreased allowance below zero\\\"\\r\\n            );\\r\\n            _callOptionalReturn(\\r\\n                token,\\r\\n                abi.encodeWithSelector(\\r\\n                    token.approve.selector,\\r\\n                    spender,\\r\\n                    oldAllowance - value\\r\\n                )\\r\\n            );\\r\\n        }\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Set the calling contract's allowance toward `spender` to `value`. If `token` returns no value,\\r\\n     * non-reverting calls are assumed to be successful. Meant to be used with tokens that require the approval\\r\\n     * to be set to zero before setting it to a non-zero value, such as USDT.\\r\\n     */\\r\\n    function forceApprove(\\r\\n        IERC20 token,\\r\\n        address spender,\\r\\n        uint256 value\\r\\n    ) internal {\\r\\n        bytes memory approvalCall = abi.encodeWithSelector(\\r\\n            token.approve.selector,\\r\\n            spender,\\r\\n            value\\r\\n        );\\r\\n\\r\\n        if (!_callOptionalReturnBool(token, approvalCall)) {\\r\\n            _callOptionalReturn(\\r\\n                token,\\r\\n                abi.encodeWithSelector(token.approve.selector, spender, 0)\\r\\n            );\\r\\n            _callOptionalReturn(token, approvalCall);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Use a ERC-2612 signature to set the `owner` approval toward `spender` on `token`.\\r\\n     * Revert on invalid signature.\\r\\n     */\\r\\n    function safePermit(\\r\\n        IERC20Permit token,\\r\\n        address owner,\\r\\n        address spender,\\r\\n        uint256 value,\\r\\n        uint256 deadline,\\r\\n        uint8 v,\\r\\n        bytes32 r,\\r\\n        bytes32 s\\r\\n    ) internal {\\r\\n        uint256 nonceBefore = token.nonces(owner);\\r\\n        token.permit(owner, spender, value, deadline, v, r, s);\\r\\n        uint256 nonceAfter = token.nonces(owner);\\r\\n        require(\\r\\n            nonceAfter == nonceBefore + 1,\\r\\n            \\\"SafeERC20: permit did not succeed\\\"\\r\\n        );\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\\r\\n     * on the return value: the return value is optional (but if data is returned, it must not be false).\\r\\n     * @param token The token targeted by the call.\\r\\n     * @param data The call data (encoded using abi.encode or one of its variants).\\r\\n     */\\r\\n    function _callOptionalReturn(IERC20 token, bytes memory data) private {\\r\\n        // We need to perform a low level call here, to bypass Solidity's return data size checking mechanism, since\\r\\n        // we're implementing it ourselves. We use {Address-functionCall} to perform this call, which verifies that\\r\\n        // the target address contains contract code and also asserts for success in the low-level call.\\r\\n\\r\\n        bytes memory returndata = address(token).functionCall(\\r\\n            data,\\r\\n            \\\"SafeERC20: low-level call failed\\\"\\r\\n        );\\r\\n        require(\\r\\n            returndata.length == 0 || abi.decode(returndata, (bool)),\\r\\n            \\\"SafeERC20: ERC20 operation did not succeed\\\"\\r\\n        );\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\\r\\n     * on the return value: the return value is optional (but if data is returned, it must not be false).\\r\\n     * @param token The token targeted by the call.\\r\\n     * @param data The call data (encoded using abi.encode or one of its variants).\\r\\n     *\\r\\n     * This is a variant of {_callOptionalReturn} that silents catches all reverts and returns a bool instead.\\r\\n     */\\r\\n    function _callOptionalReturnBool(\\r\\n        IERC20 token,\\r\\n        bytes memory data\\r\\n    ) private returns (bool) {\\r\\n        // We need to perform a low level call here, to bypass Solidity's return data size checking mechanism, since\\r\\n        // we're implementing it ourselves. We cannot use {Address-functionCall} here since this should return false\\r\\n        // and not revert is the subcall reverts.\\r\\n\\r\\n        (bool success, bytes memory returndata) = address(token).call(data);\\r\\n        return\\r\\n            success &&\\r\\n            (returndata.length == 0 || abi.decode(returndata, (bool))) &&\\r\\n            Address.isContract(address(token));\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0xc15cc93ff8c4186aa6dcc7bc5ac98a32ddbeafa71853815bc0c186e24956d75c\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/Address.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.5.0) (utils/Address.sol)\\r\\n\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\n/**\\r\\n * @dev Collection of functions related to the address type\\r\\n */\\r\\nlibrary Address {\\r\\n    /**\\r\\n     * @dev Returns true if `account` is a contract.\\r\\n     *\\r\\n     * [IMPORTANT]\\r\\n     * ====\\r\\n     * It is unsafe to assume that an address for which this function returns\\r\\n     * false is an externally-owned account (EOA) and not a contract.\\r\\n     *\\r\\n     * Among others, `isContract` will return false for the following\\r\\n     * types of addresses:\\r\\n     *\\r\\n     *  - an externally-owned account\\r\\n     *  - a contract in construction\\r\\n     *  - an address where a contract will be created\\r\\n     *  - an address where a contract lived, but was destroyed\\r\\n     * ====\\r\\n     *\\r\\n     * [IMPORTANT]\\r\\n     * ====\\r\\n     * You shouldn't rely on `isContract` to protect against flash loan attacks!\\r\\n     *\\r\\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\\r\\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\\r\\n     * constructor.\\r\\n     * ====\\r\\n     */\\r\\n    function isContract(address account) internal view returns (bool) {\\r\\n        // This method relies on extcodesize/address.code.length, which returns 0\\r\\n        // for contracts in construction, since the code is only stored at the end\\r\\n        // of the constructor execution.\\r\\n\\r\\n        return account.code.length > 0;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\r\\n     * `recipient`, forwarding all available gas and reverting on errors.\\r\\n     *\\r\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\r\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\r\\n     * imposed by `transfer`, making them unable to receive funds via\\r\\n     * `transfer`. {sendValue} removes this limitation.\\r\\n     *\\r\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\r\\n     *\\r\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\r\\n     * taken to not create reentrancy vulnerabilities. Consider using\\r\\n     * {ReentrancyGuard} or the\\r\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\r\\n     */\\r\\n    function sendValue(address payable recipient, uint256 amount) internal {\\r\\n        require(address(this).balance >= amount, \\\"Address: insufficient balance\\\");\\r\\n\\r\\n        (bool success, ) = recipient.call{value: amount}(\\\"\\\");\\r\\n        require(success, \\\"Address: unable to send value, recipient may have reverted\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Performs a Solidity function call using a low level `call`. A\\r\\n     * plain `call` is an unsafe replacement for a function call: use this\\r\\n     * function instead.\\r\\n     *\\r\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\r\\n     * function (like regular Solidity function calls).\\r\\n     *\\r\\n     * Returns the raw returned data. To convert to the expected return value,\\r\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `target` must be a contract.\\r\\n     * - calling `target` with `data` must not revert.\\r\\n     *\\r\\n     * _Available since v3.1._\\r\\n     */\\r\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\r\\n        return functionCall(target, data, \\\"Address: low-level call failed\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\r\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\r\\n     *\\r\\n     * _Available since v3.1._\\r\\n     */\\r\\n    function functionCall(\\r\\n        address target,\\r\\n        bytes memory data,\\r\\n        string memory errorMessage\\r\\n    ) internal returns (bytes memory) {\\r\\n        return functionCallWithValue(target, data, 0, errorMessage);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\r\\n     * but also transferring `value` wei to `target`.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - the calling contract must have an ETH balance of at least `value`.\\r\\n     * - the called Solidity function must be `payable`.\\r\\n     *\\r\\n     * _Available since v3.1._\\r\\n     */\\r\\n    function functionCallWithValue(\\r\\n        address target,\\r\\n        bytes memory data,\\r\\n        uint256 value\\r\\n    ) internal returns (bytes memory) {\\r\\n        return functionCallWithValue(target, data, value, \\\"Address: low-level call with value failed\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\r\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\r\\n     *\\r\\n     * _Available since v3.1._\\r\\n     */\\r\\n    function functionCallWithValue(\\r\\n        address target,\\r\\n        bytes memory data,\\r\\n        uint256 value,\\r\\n        string memory errorMessage\\r\\n    ) internal returns (bytes memory) {\\r\\n        require(address(this).balance >= value, \\\"Address: insufficient balance for call\\\");\\r\\n        require(isContract(target), \\\"Address: call to non-contract\\\");\\r\\n\\r\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\r\\n        return verifyCallResult(success, returndata, errorMessage);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\r\\n     * but performing a static call.\\r\\n     *\\r\\n     * _Available since v3.3._\\r\\n     */\\r\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\r\\n        return functionStaticCall(target, data, \\\"Address: low-level static call failed\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\r\\n     * but performing a static call.\\r\\n     *\\r\\n     * _Available since v3.3._\\r\\n     */\\r\\n    function functionStaticCall(\\r\\n        address target,\\r\\n        bytes memory data,\\r\\n        string memory errorMessage\\r\\n    ) internal view returns (bytes memory) {\\r\\n        require(isContract(target), \\\"Address: static call to non-contract\\\");\\r\\n\\r\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\r\\n        return verifyCallResult(success, returndata, errorMessage);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\r\\n     * but performing a delegate call.\\r\\n     *\\r\\n     * _Available since v3.4._\\r\\n     */\\r\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\r\\n        return functionDelegateCall(target, data, \\\"Address: low-level delegate call failed\\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\r\\n     * but performing a delegate call.\\r\\n     *\\r\\n     * _Available since v3.4._\\r\\n     */\\r\\n    function functionDelegateCall(\\r\\n        address target,\\r\\n        bytes memory data,\\r\\n        string memory errorMessage\\r\\n    ) internal returns (bytes memory) {\\r\\n        require(isContract(target), \\\"Address: delegate call to non-contract\\\");\\r\\n\\r\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\r\\n        return verifyCallResult(success, returndata, errorMessage);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn't, either by bubbling the\\r\\n     * revert reason using the provided one.\\r\\n     *\\r\\n     * _Available since v4.3._\\r\\n     */\\r\\n    function verifyCallResult(\\r\\n        bool success,\\r\\n        bytes memory returndata,\\r\\n        string memory errorMessage\\r\\n    ) internal pure returns (bytes memory) {\\r\\n        if (success) {\\r\\n            return returndata;\\r\\n        } else {\\r\\n            // Look for revert reason and bubble it up if present\\r\\n            if (returndata.length > 0) {\\r\\n                // The easiest way to bubble the revert reason is using memory via assembly\\r\\n\\r\\n                assembly {\\r\\n                    let returndata_size := mload(returndata)\\r\\n                    revert(add(32, returndata), returndata_size)\\r\\n                }\\r\\n            } else {\\r\\n                revert(errorMessage);\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n}\",\"keccak256\":\"0x4f82ac554df2b88092b0dff60e01918ddb7b4d34935150ad5a82c03ce83ed225\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.4) (utils/Context.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Provides information about the current execution context, including the\\r\\n * sender of the transaction and its data. While these are generally available\\r\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\r\\n * manner, since when dealing with meta-transactions the account sending and\\r\\n * paying for execution may not be the actual sender (as far as an application\\r\\n * is concerned).\\r\\n *\\r\\n * This contract is only required for intermediate, library-like contracts.\\r\\n */\\r\\nabstract contract Context {\\r\\n    function _msgSender() internal view virtual returns (address) {\\r\\n        return msg.sender;\\r\\n    }\\r\\n\\r\\n    function _msgData() internal view virtual returns (bytes calldata) {\\r\\n        return msg.data;\\r\\n    }\\r\\n\\r\\n    function _contextSuffixLength() internal view virtual returns (uint256) {\\r\\n        return 0;\\r\\n    }\\r\\n}\",\"keccak256\":\"0xef320168c89f0928606f4baf62131f67a759b0aed0ea445871758821a8c37b99\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 164,
        "contract": "project/contracts/extensions/vault/vault copy.sol:vault_copy",
        "label": "_owner",
        "offset": 0,
        "slot": "0",
        "type": "t_address"
      },
      {
        "astId": 280,
        "contract": "project/contracts/extensions/vault/vault copy.sol:vault_copy",
        "label": "_status",
        "offset": 0,
        "slot": "1",
        "type": "t_uint256"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
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
});