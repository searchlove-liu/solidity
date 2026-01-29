export declare const Artifact_SimpleTokenReceiver: {
  "contractName": "SimpleTokenReceiver",
  "sourceName": "contracts/test/SimpleTokenReceiver.sol",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "TokensReceived",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "deposited",
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
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "onTransferReceived",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenAddress",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506105c0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806301ffc9a71461005c57806388a7ca5c146100855780639d76ea58146100a5578063cb13cddb146100ba578063f3fef3a3146100da575b600080fd5b61006f61006a366004610401565b6100ef565b60405161007c919061048f565b60405180910390f35b610098610093366004610342565b61011c565b60405161007c919061049a565b6100ad6101b6565b60405161007c9190610462565b6100cd6100c8366004610321565b6101c5565b60405161007c9190610506565b6100ed6100e83660046103d8565b6101d7565b005b60006001600160e01b03198216632229f29760e21b14806101145750610114826102f1565b90505b919050565b6001600160a01b038416600090815260208190526040812080548591908390610146908490610545565b9091555050600180546001600160a01b031916331790556040516001600160a01b038616907f0f611859dc94a66d9bec0e66c7485098c0d5e4662896ff2f523c47f962a7abef9061019c9087908790879061050f565b60405180910390a250632229f29760e21b95945050505050565b6001546001600160a01b031681565b60006020819052908152604090205481565b3360009081526020819052604090205481111561020f5760405162461bcd60e51b8152600401610206906104d8565b60405180910390fd5b336000908152602081905260408120805483929061022e90849061055d565b925050819055506000826001600160a01b03163383604051602401610254929190610476565b60408051601f198184030181529181526020820180516001600160e01b031663a9059cbb60e01b179052516102899190610429565b6000604051808303816000865af19150503d80600081146102c6576040519150601f19603f3d011682016040523d82523d6000602084013e6102cb565b606091505b50509050806102ec5760405162461bcd60e51b8152600401610206906104af565b505050565b6001600160e01b031981166301ffc9a760e01b14919050565b80356001600160a01b038116811461011757600080fd5b600060208284031215610332578081fd5b61033b8261030a565b9392505050565b600080600080600060808688031215610359578081fd5b6103628661030a565b94506103706020870161030a565b935060408601359250606086013567ffffffffffffffff80821115610393578283fd5b818801915088601f8301126103a6578283fd5b8135818111156103b4578384fd5b8960208285010111156103c5578384fd5b9699959850939650602001949392505050565b600080604083850312156103ea578182fd5b6103f38361030a565b946020939093013593505050565b600060208284031215610412578081fd5b81356001600160e01b03198116811461033b578182fd5b60008251815b81811015610449576020818601810151858301520161042f565b818111156104575782828501525b509190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b6001600160e01b031991909116815260200190565b6020808252600f908201526e151c985b9cd9995c8819985a5b1959608a1b604082015260600190565b602080825260149082015273125b9cdd59999a58da595b9d0819195c1bdcda5d60621b604082015260600190565b90815260200190565b60008482526040602083015282604083015282846060840137818301606090810191909152601f909201601f1916010192915050565b6000821982111561055857610558610574565b500190565b60008282101561056f5761056f610574565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220d58e655a024996952ae8187532c9bc5e64939eec29a7eb373b80f31b7eda730264736f6c63430008010033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c806301ffc9a71461005c57806388a7ca5c146100855780639d76ea58146100a5578063cb13cddb146100ba578063f3fef3a3146100da575b600080fd5b61006f61006a366004610401565b6100ef565b60405161007c919061048f565b60405180910390f35b610098610093366004610342565b61011c565b60405161007c919061049a565b6100ad6101b6565b60405161007c9190610462565b6100cd6100c8366004610321565b6101c5565b60405161007c9190610506565b6100ed6100e83660046103d8565b6101d7565b005b60006001600160e01b03198216632229f29760e21b14806101145750610114826102f1565b90505b919050565b6001600160a01b038416600090815260208190526040812080548591908390610146908490610545565b9091555050600180546001600160a01b031916331790556040516001600160a01b038616907f0f611859dc94a66d9bec0e66c7485098c0d5e4662896ff2f523c47f962a7abef9061019c9087908790879061050f565b60405180910390a250632229f29760e21b95945050505050565b6001546001600160a01b031681565b60006020819052908152604090205481565b3360009081526020819052604090205481111561020f5760405162461bcd60e51b8152600401610206906104d8565b60405180910390fd5b336000908152602081905260408120805483929061022e90849061055d565b925050819055506000826001600160a01b03163383604051602401610254929190610476565b60408051601f198184030181529181526020820180516001600160e01b031663a9059cbb60e01b179052516102899190610429565b6000604051808303816000865af19150503d80600081146102c6576040519150601f19603f3d011682016040523d82523d6000602084013e6102cb565b606091505b50509050806102ec5760405162461bcd60e51b8152600401610206906104af565b505050565b6001600160e01b031981166301ffc9a760e01b14919050565b80356001600160a01b038116811461011757600080fd5b600060208284031215610332578081fd5b61033b8261030a565b9392505050565b600080600080600060808688031215610359578081fd5b6103628661030a565b94506103706020870161030a565b935060408601359250606086013567ffffffffffffffff80821115610393578283fd5b818801915088601f8301126103a6578283fd5b8135818111156103b4578384fd5b8960208285010111156103c5578384fd5b9699959850939650602001949392505050565b600080604083850312156103ea578182fd5b6103f38361030a565b946020939093013593505050565b600060208284031215610412578081fd5b81356001600160e01b03198116811461033b578182fd5b60008251815b81811015610449576020818601810151858301520161042f565b818111156104575782828501525b509190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b6001600160e01b031991909116815260200190565b6020808252600f908201526e151c985b9cd9995c8819985a5b1959608a1b604082015260600190565b602080825260149082015273125b9cdd59999a58da595b9d0819195c1bdcda5d60621b604082015260600190565b90815260200190565b60008482526040602083015282604083015282846060840137818301606090810191909152601f909201601f1916010192915050565b6000821982111561055857610558610574565b500190565b60008282101561056f5761056f610574565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220d58e655a024996952ae8187532c9bc5e64939eec29a7eb373b80f31b7eda730264736f6c63430008010033",
  "linkReferences": {},
  "deployedLinkReferences": {},
  "immutableReferences": {},
  "inputSourceName": "project/contracts/test/SimpleTokenReceiver.sol",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}."
      }
    },
    "version": 1
  },
  "evm": {
    "bytecode": {
      "generatedSources": [],
      "linkReferences": {},
      "object": "608060405234801561001057600080fd5b506105c0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806301ffc9a71461005c57806388a7ca5c146100855780639d76ea58146100a5578063cb13cddb146100ba578063f3fef3a3146100da575b600080fd5b61006f61006a366004610401565b6100ef565b60405161007c919061048f565b60405180910390f35b610098610093366004610342565b61011c565b60405161007c919061049a565b6100ad6101b6565b60405161007c9190610462565b6100cd6100c8366004610321565b6101c5565b60405161007c9190610506565b6100ed6100e83660046103d8565b6101d7565b005b60006001600160e01b03198216632229f29760e21b14806101145750610114826102f1565b90505b919050565b6001600160a01b038416600090815260208190526040812080548591908390610146908490610545565b9091555050600180546001600160a01b031916331790556040516001600160a01b038616907f0f611859dc94a66d9bec0e66c7485098c0d5e4662896ff2f523c47f962a7abef9061019c9087908790879061050f565b60405180910390a250632229f29760e21b95945050505050565b6001546001600160a01b031681565b60006020819052908152604090205481565b3360009081526020819052604090205481111561020f5760405162461bcd60e51b8152600401610206906104d8565b60405180910390fd5b336000908152602081905260408120805483929061022e90849061055d565b925050819055506000826001600160a01b03163383604051602401610254929190610476565b60408051601f198184030181529181526020820180516001600160e01b031663a9059cbb60e01b179052516102899190610429565b6000604051808303816000865af19150503d80600081146102c6576040519150601f19603f3d011682016040523d82523d6000602084013e6102cb565b606091505b50509050806102ec5760405162461bcd60e51b8152600401610206906104af565b505050565b6001600160e01b031981166301ffc9a760e01b14919050565b80356001600160a01b038116811461011757600080fd5b600060208284031215610332578081fd5b61033b8261030a565b9392505050565b600080600080600060808688031215610359578081fd5b6103628661030a565b94506103706020870161030a565b935060408601359250606086013567ffffffffffffffff80821115610393578283fd5b818801915088601f8301126103a6578283fd5b8135818111156103b4578384fd5b8960208285010111156103c5578384fd5b9699959850939650602001949392505050565b600080604083850312156103ea578182fd5b6103f38361030a565b946020939093013593505050565b600060208284031215610412578081fd5b81356001600160e01b03198116811461033b578182fd5b60008251815b81811015610449576020818601810151858301520161042f565b818111156104575782828501525b509190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b6001600160e01b031991909116815260200190565b6020808252600f908201526e151c985b9cd9995c8819985a5b1959608a1b604082015260600190565b602080825260149082015273125b9cdd59999a58da595b9d0819195c1bdcda5d60621b604082015260600190565b90815260200190565b60008482526040602083015282604083015282846060840137818301606090810191909152601f909201601f1916010192915050565b6000821982111561055857610558610574565b500190565b60008282101561056f5761056f610574565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220d58e655a024996952ae8187532c9bc5e64939eec29a7eb373b80f31b7eda730264736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x5C0 DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x57 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0x5C JUMPI DUP1 PUSH4 0x88A7CA5C EQ PUSH2 0x85 JUMPI DUP1 PUSH4 0x9D76EA58 EQ PUSH2 0xA5 JUMPI DUP1 PUSH4 0xCB13CDDB EQ PUSH2 0xBA JUMPI DUP1 PUSH4 0xF3FEF3A3 EQ PUSH2 0xDA JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x6F PUSH2 0x6A CALLDATASIZE PUSH1 0x4 PUSH2 0x401 JUMP JUMPDEST PUSH2 0xEF JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x7C SWAP2 SWAP1 PUSH2 0x48F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x98 PUSH2 0x93 CALLDATASIZE PUSH1 0x4 PUSH2 0x342 JUMP JUMPDEST PUSH2 0x11C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x7C SWAP2 SWAP1 PUSH2 0x49A JUMP JUMPDEST PUSH2 0xAD PUSH2 0x1B6 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x7C SWAP2 SWAP1 PUSH2 0x462 JUMP JUMPDEST PUSH2 0xCD PUSH2 0xC8 CALLDATASIZE PUSH1 0x4 PUSH2 0x321 JUMP JUMPDEST PUSH2 0x1C5 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x7C SWAP2 SWAP1 PUSH2 0x506 JUMP JUMPDEST PUSH2 0xED PUSH2 0xE8 CALLDATASIZE PUSH1 0x4 PUSH2 0x3D8 JUMP JUMPDEST PUSH2 0x1D7 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT DUP3 AND PUSH4 0x2229F297 PUSH1 0xE2 SHL EQ DUP1 PUSH2 0x114 JUMPI POP PUSH2 0x114 DUP3 PUSH2 0x2F1 JUMP JUMPDEST SWAP1 POP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP5 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x20 DUP2 SWAP1 MSTORE PUSH1 0x40 DUP2 KECCAK256 DUP1 SLOAD DUP6 SWAP2 SWAP1 DUP4 SWAP1 PUSH2 0x146 SWAP1 DUP5 SWAP1 PUSH2 0x545 JUMP JUMPDEST SWAP1 SWAP2 SSTORE POP POP PUSH1 0x1 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT AND CALLER OR SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP7 AND SWAP1 PUSH32 0xF611859DC94A66D9BEC0E66C7485098C0D5E4662896FF2F523C47F962A7ABEF SWAP1 PUSH2 0x19C SWAP1 DUP8 SWAP1 DUP8 SWAP1 DUP8 SWAP1 PUSH2 0x50F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 POP PUSH4 0x2229F297 PUSH1 0xE2 SHL SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP2 SWAP1 MSTORE SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x20 DUP2 SWAP1 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 GT ISZERO PUSH2 0x20F JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x206 SWAP1 PUSH2 0x4D8 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x20 DUP2 SWAP1 MSTORE PUSH1 0x40 DUP2 KECCAK256 DUP1 SLOAD DUP4 SWAP3 SWAP1 PUSH2 0x22E SWAP1 DUP5 SWAP1 PUSH2 0x55D JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP PUSH1 0x0 DUP3 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER DUP4 PUSH1 0x40 MLOAD PUSH1 0x24 ADD PUSH2 0x254 SWAP3 SWAP2 SWAP1 PUSH2 0x476 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F NOT DUP2 DUP5 SUB ADD DUP2 MSTORE SWAP2 DUP2 MSTORE PUSH1 0x20 DUP3 ADD DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB AND PUSH4 0xA9059CBB PUSH1 0xE0 SHL OR SWAP1 MSTORE MLOAD PUSH2 0x289 SWAP2 SWAP1 PUSH2 0x429 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP7 GAS CALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH2 0x2C6 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x2CB JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH2 0x2EC JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x206 SWAP1 PUSH2 0x4AF JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT DUP2 AND PUSH4 0x1FFC9A7 PUSH1 0xE0 SHL EQ SWAP2 SWAP1 POP JUMP JUMPDEST DUP1 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0x117 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x332 JUMPI DUP1 DUP2 REVERT JUMPDEST PUSH2 0x33B DUP3 PUSH2 0x30A JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x80 DUP7 DUP9 SUB SLT ISZERO PUSH2 0x359 JUMPI DUP1 DUP2 REVERT JUMPDEST PUSH2 0x362 DUP7 PUSH2 0x30A JUMP JUMPDEST SWAP5 POP PUSH2 0x370 PUSH1 0x20 DUP8 ADD PUSH2 0x30A JUMP JUMPDEST SWAP4 POP PUSH1 0x40 DUP7 ADD CALLDATALOAD SWAP3 POP PUSH1 0x60 DUP7 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x393 JUMPI DUP3 DUP4 REVERT JUMPDEST DUP2 DUP9 ADD SWAP2 POP DUP9 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x3A6 JUMPI DUP3 DUP4 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x3B4 JUMPI DUP4 DUP5 REVERT JUMPDEST DUP10 PUSH1 0x20 DUP3 DUP6 ADD ADD GT ISZERO PUSH2 0x3C5 JUMPI DUP4 DUP5 REVERT JUMPDEST SWAP7 SWAP10 SWAP6 SWAP9 POP SWAP4 SWAP7 POP PUSH1 0x20 ADD SWAP5 SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x3EA JUMPI DUP2 DUP3 REVERT JUMPDEST PUSH2 0x3F3 DUP4 PUSH2 0x30A JUMP JUMPDEST SWAP5 PUSH1 0x20 SWAP4 SWAP1 SWAP4 ADD CALLDATALOAD SWAP4 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x412 JUMPI DUP1 DUP2 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT DUP2 AND DUP2 EQ PUSH2 0x33B JUMPI DUP2 DUP3 REVERT JUMPDEST PUSH1 0x0 DUP3 MLOAD DUP2 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x449 JUMPI PUSH1 0x20 DUP2 DUP7 ADD DUP2 ADD MLOAD DUP6 DUP4 ADD MSTORE ADD PUSH2 0x42F JUMP JUMPDEST DUP2 DUP2 GT ISZERO PUSH2 0x457 JUMPI DUP3 DUP3 DUP6 ADD MSTORE JUMPDEST POP SWAP2 SWAP1 SWAP2 ADD SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 SWAP1 SWAP3 AND DUP3 MSTORE PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 ADD SWAP1 JUMP JUMPDEST SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT SWAP2 SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0xF SWAP1 DUP3 ADD MSTORE PUSH15 0x151C985B9CD9995C8819985A5B1959 PUSH1 0x8A SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x14 SWAP1 DUP3 ADD MSTORE PUSH20 0x125B9CDD59999A58DA595B9D0819195C1BDCDA5D PUSH1 0x62 SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST SWAP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP5 DUP3 MSTORE PUSH1 0x40 PUSH1 0x20 DUP4 ADD MSTORE DUP3 PUSH1 0x40 DUP4 ADD MSTORE DUP3 DUP5 PUSH1 0x60 DUP5 ADD CALLDATACOPY DUP2 DUP4 ADD PUSH1 0x60 SWAP1 DUP2 ADD SWAP2 SWAP1 SWAP2 MSTORE PUSH1 0x1F SWAP1 SWAP3 ADD PUSH1 0x1F NOT AND ADD ADD SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 NOT DUP3 GT ISZERO PUSH2 0x558 JUMPI PUSH2 0x558 PUSH2 0x574 JUMP JUMPDEST POP ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 LT ISZERO PUSH2 0x56F JUMPI PUSH2 0x56F PUSH2 0x574 JUMP JUMPDEST POP SUB SWAP1 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xD5 DUP15 PUSH6 0x5A024996952A 0xE8 XOR PUSH22 0x32C9BC5E64939EEC29A7EB373B80F31B7EDA73026473 PUSH16 0x6C634300080100330000000000000000 ",
      "sourceMap": "203:1705:60:-:0;;;;;;;;;;;;;;;;;;;"
    },
    "deployedBytecode": {
      "generatedSources": [
        {
          "ast": {
            "nodeType": "YulBlock",
            "src": "0:4901:68",
            "statements": [
              {
                "nodeType": "YulBlock",
                "src": "6:3:68",
                "statements": []
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "65:124:68",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "75:29:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "97:6:68"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "84:12:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "84:20:68"
                      },
                      "variableNames": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "75:5:68"
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "167:16:68",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "176:1:68",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "179:1:68",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "169:6:68"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "169:12:68"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "169:12:68"
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
                                "src": "126:5:68"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "137:5:68"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "152:3:68",
                                            "type": "",
                                            "value": "160"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "157:1:68",
                                            "type": "",
                                            "value": "1"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nodeType": "YulIdentifier",
                                          "src": "148:3:68"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "148:11:68"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "161:1:68",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sub",
                                      "nodeType": "YulIdentifier",
                                      "src": "144:3:68"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "144:19:68"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "133:3:68"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "133:31:68"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "123:2:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "123:42:68"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "116:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "116:50:68"
                      },
                      "nodeType": "YulIf",
                      "src": "113:2:68"
                    }
                  ]
                },
                "name": "abi_decode_t_address",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "offset",
                    "nodeType": "YulTypedName",
                    "src": "44:6:68",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "55:5:68",
                    "type": ""
                  }
                ],
                "src": "14:175:68"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "264:128:68",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "310:26:68",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "319:6:68"
                                },
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "327:6:68"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "312:6:68"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "312:22:68"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "312:22:68"
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
                                "src": "285:7:68"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "294:9:68"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "281:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "281:23:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "306:2:68",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "277:3:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "277:32:68"
                      },
                      "nodeType": "YulIf",
                      "src": "274:2:68"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "345:41:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "376:9:68"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "355:20:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "355:31:68"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "345:6:68"
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
                    "src": "230:9:68",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "241:7:68",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "253:6:68",
                    "type": ""
                  }
                ],
                "src": "194:198:68"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "537:722:68",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "584:26:68",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value4",
                                  "nodeType": "YulIdentifier",
                                  "src": "593:6:68"
                                },
                                {
                                  "name": "value4",
                                  "nodeType": "YulIdentifier",
                                  "src": "601:6:68"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "586:6:68"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "586:22:68"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "586:22:68"
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
                                "src": "558:7:68"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "567:9:68"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "554:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "554:23:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "579:3:68",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "550:3:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "550:33:68"
                      },
                      "nodeType": "YulIf",
                      "src": "547:2:68"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "619:41:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "650:9:68"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "629:20:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "629:31:68"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "619:6:68"
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "669:50:68",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "704:9:68"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "715:2:68",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "700:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "700:18:68"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "679:20:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "679:40:68"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "669:6:68"
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "728:42:68",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "755:9:68"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "766:2:68",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "751:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "751:18:68"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "738:12:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "738:32:68"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "728:6:68"
                        }
                      ]
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "779:46:68",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "810:9:68"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "821:2:68",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "806:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "806:18:68"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "793:12:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "793:32:68"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "783:6:68",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "834:28:68",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "844:18:68",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      },
                      "variables": [
                        {
                          "name": "_1",
                          "nodeType": "YulTypedName",
                          "src": "838:2:68",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "889:26:68",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value4",
                                  "nodeType": "YulIdentifier",
                                  "src": "898:6:68"
                                },
                                {
                                  "name": "value4",
                                  "nodeType": "YulIdentifier",
                                  "src": "906:6:68"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "891:6:68"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "891:22:68"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "891:22:68"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "877:6:68"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "885:2:68"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "874:2:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "874:14:68"
                      },
                      "nodeType": "YulIf",
                      "src": "871:2:68"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "924:32:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "938:9:68"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "949:6:68"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "934:3:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "934:22:68"
                      },
                      "variables": [
                        {
                          "name": "_2",
                          "nodeType": "YulTypedName",
                          "src": "928:2:68",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1004:26:68",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value4",
                                  "nodeType": "YulIdentifier",
                                  "src": "1013:6:68"
                                },
                                {
                                  "name": "value4",
                                  "nodeType": "YulIdentifier",
                                  "src": "1021:6:68"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "1006:6:68"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1006:22:68"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1006:22:68"
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
                                    "src": "983:2:68"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "987:4:68",
                                    "type": "",
                                    "value": "0x1f"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "979:3:68"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "979:13:68"
                              },
                              {
                                "name": "dataEnd",
                                "nodeType": "YulIdentifier",
                                "src": "994:7:68"
                              }
                            ],
                            "functionName": {
                              "name": "slt",
                              "nodeType": "YulIdentifier",
                              "src": "975:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "975:27:68"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "968:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "968:35:68"
                      },
                      "nodeType": "YulIf",
                      "src": "965:2:68"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1039:30:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "_2",
                            "nodeType": "YulIdentifier",
                            "src": "1066:2:68"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "1053:12:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1053:16:68"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nodeType": "YulTypedName",
                          "src": "1043:6:68",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1096:26:68",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value4",
                                  "nodeType": "YulIdentifier",
                                  "src": "1105:6:68"
                                },
                                {
                                  "name": "value4",
                                  "nodeType": "YulIdentifier",
                                  "src": "1113:6:68"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "1098:6:68"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1098:22:68"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1098:22:68"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "1084:6:68"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "1092:2:68"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "1081:2:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1081:14:68"
                      },
                      "nodeType": "YulIf",
                      "src": "1078:2:68"
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1172:26:68",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value4",
                                  "nodeType": "YulIdentifier",
                                  "src": "1181:6:68"
                                },
                                {
                                  "name": "value4",
                                  "nodeType": "YulIdentifier",
                                  "src": "1189:6:68"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "1174:6:68"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1174:22:68"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1174:22:68"
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
                                    "src": "1145:2:68"
                                  },
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "1149:6:68"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1141:3:68"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1141:15:68"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1158:2:68",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1137:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1137:24:68"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1163:7:68"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "1134:2:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1134:37:68"
                      },
                      "nodeType": "YulIf",
                      "src": "1131:2:68"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1207:21:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "_2",
                            "nodeType": "YulIdentifier",
                            "src": "1221:2:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1225:2:68",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1217:3:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1217:11:68"
                      },
                      "variableNames": [
                        {
                          "name": "value3",
                          "nodeType": "YulIdentifier",
                          "src": "1207:6:68"
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1237:16:68",
                      "value": {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1247:6:68"
                      },
                      "variableNames": [
                        {
                          "name": "value4",
                          "nodeType": "YulIdentifier",
                          "src": "1237:6:68"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_calldata_ptr",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "471:9:68",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "482:7:68",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "494:6:68",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nodeType": "YulTypedName",
                    "src": "502:6:68",
                    "type": ""
                  },
                  {
                    "name": "value2",
                    "nodeType": "YulTypedName",
                    "src": "510:6:68",
                    "type": ""
                  },
                  {
                    "name": "value3",
                    "nodeType": "YulTypedName",
                    "src": "518:6:68",
                    "type": ""
                  },
                  {
                    "name": "value4",
                    "nodeType": "YulTypedName",
                    "src": "526:6:68",
                    "type": ""
                  }
                ],
                "src": "397:862:68"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1351:179:68",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1397:26:68",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "1406:6:68"
                                },
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "1414:6:68"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "1399:6:68"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1399:22:68"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1399:22:68"
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
                                "src": "1372:7:68"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1381:9:68"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "1368:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1368:23:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1393:2:68",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "1364:3:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1364:32:68"
                      },
                      "nodeType": "YulIf",
                      "src": "1361:2:68"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1432:41:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1463:9:68"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "1442:20:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1442:31:68"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1432:6:68"
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1482:42:68",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1509:9:68"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1520:2:68",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1505:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1505:18:68"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "1492:12:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1492:32:68"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "1482:6:68"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_addresst_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1309:9:68",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "1320:7:68",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "1332:6:68",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nodeType": "YulTypedName",
                    "src": "1340:6:68",
                    "type": ""
                  }
                ],
                "src": "1264:266:68"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1604:237:68",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1650:26:68",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "1659:6:68"
                                },
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "1667:6:68"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "1652:6:68"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1652:22:68"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1652:22:68"
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
                                "src": "1625:7:68"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1634:9:68"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "1621:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1621:23:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1646:2:68",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "1617:3:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1617:32:68"
                      },
                      "nodeType": "YulIf",
                      "src": "1614:2:68"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1685:36:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1711:9:68"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "1698:12:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1698:23:68"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nodeType": "YulTypedName",
                          "src": "1689:5:68",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1785:26:68",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "1794:6:68"
                                },
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "1802:6:68"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "1787:6:68"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1787:22:68"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1787:22:68"
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
                                "src": "1743:5:68"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "1754:5:68"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1765:3:68",
                                        "type": "",
                                        "value": "224"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1770:10:68",
                                        "type": "",
                                        "value": "0xffffffff"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "1761:3:68"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1761:20:68"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "1750:3:68"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1750:32:68"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "1740:2:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1740:43:68"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "1733:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1733:51:68"
                      },
                      "nodeType": "YulIf",
                      "src": "1730:2:68"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1820:15:68",
                      "value": {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1830:5:68"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1820:6:68"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_bytes4",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1570:9:68",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "1581:7:68",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "1593:6:68",
                    "type": ""
                  }
                ],
                "src": "1535:306:68"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1983:293:68",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1993:27:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2013:6:68"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "2007:5:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2007:13:68"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nodeType": "YulTypedName",
                          "src": "1997:6:68",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2029:12:68",
                      "value": {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2038:3:68"
                      },
                      "variables": [
                        {
                          "name": "i",
                          "nodeType": "YulTypedName",
                          "src": "2033:1:68",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2102:77:68",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "2127:3:68"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "2132:1:68"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2123:3:68"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2123:11:68"
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
                                              "src": "2150:6:68"
                                            },
                                            {
                                              "name": "i",
                                              "nodeType": "YulIdentifier",
                                              "src": "2158:1:68"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "2146:3:68"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "2146:14:68"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "2162:4:68",
                                          "type": "",
                                          "value": "0x20"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "2142:3:68"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2142:25:68"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nodeType": "YulIdentifier",
                                    "src": "2136:5:68"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2136:32:68"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nodeType": "YulIdentifier",
                                "src": "2116:6:68"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2116:53:68"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2116:53:68"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "2061:1:68"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2064:6:68"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "2058:2:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2058:13:68"
                      },
                      "nodeType": "YulForLoop",
                      "post": {
                        "nodeType": "YulBlock",
                        "src": "2072:21:68",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "2074:17:68",
                            "value": {
                              "arguments": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "2083:1:68"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2086:4:68",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2079:3:68"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2079:12:68"
                            },
                            "variableNames": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "2074:1:68"
                              }
                            ]
                          }
                        ]
                      },
                      "pre": {
                        "nodeType": "YulBlock",
                        "src": "2054:3:68",
                        "statements": []
                      },
                      "src": "2050:129:68"
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2205:33:68",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "pos",
                                      "nodeType": "YulIdentifier",
                                      "src": "2218:3:68"
                                    },
                                    {
                                      "name": "length",
                                      "nodeType": "YulIdentifier",
                                      "src": "2223:6:68"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2214:3:68"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2214:16:68"
                                },
                                {
                                  "name": "end",
                                  "nodeType": "YulIdentifier",
                                  "src": "2232:3:68"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nodeType": "YulIdentifier",
                                "src": "2207:6:68"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2207:29:68"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2207:29:68"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "2194:1:68"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2197:6:68"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "2191:2:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2191:13:68"
                      },
                      "nodeType": "YulIf",
                      "src": "2188:2:68"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2247:23:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "2258:3:68"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2263:6:68"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2254:3:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2254:16:68"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "2247:3:68"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nodeType": "YulTypedName",
                    "src": "1959:3:68",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "1964:6:68",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nodeType": "YulTypedName",
                    "src": "1975:3:68",
                    "type": ""
                  }
                ],
                "src": "1846:430:68"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2382:102:68",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "2392:26:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2404:9:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2415:2:68",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2400:3:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2400:18:68"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "2392:4:68"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2434:9:68"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "2449:6:68"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "2465:3:68",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "2470:1:68",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "2461:3:68"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2461:11:68"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2474:1:68",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "2457:3:68"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2457:19:68"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "2445:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2445:32:68"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2427:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2427:51:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2427:51:68"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "2351:9:68",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "2362:6:68",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "2373:4:68",
                    "type": ""
                  }
                ],
                "src": "2281:203:68"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2618:145:68",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "2628:26:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2640:9:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2651:2:68",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2636:3:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2636:18:68"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "2628:4:68"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2670:9:68"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "2685:6:68"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "2701:3:68",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "2706:1:68",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "2697:3:68"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2697:11:68"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2710:1:68",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "2693:3:68"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2693:19:68"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "2681:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2681:32:68"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2663:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2663:51:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2663:51:68"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2734:9:68"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2745:2:68",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2730:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2730:18:68"
                          },
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "2750:6:68"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2723:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2723:34:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2723:34:68"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "2579:9:68",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nodeType": "YulTypedName",
                    "src": "2590:6:68",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "2598:6:68",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "2609:4:68",
                    "type": ""
                  }
                ],
                "src": "2489:274:68"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2863:92:68",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "2873:26:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2885:9:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2896:2:68",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2881:3:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2881:18:68"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "2873:4:68"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2915:9:68"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "value0",
                                    "nodeType": "YulIdentifier",
                                    "src": "2940:6:68"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nodeType": "YulIdentifier",
                                  "src": "2933:6:68"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2933:14:68"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "2926:6:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2926:22:68"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2908:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2908:41:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2908:41:68"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "2832:9:68",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "2843:6:68",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "2854:4:68",
                    "type": ""
                  }
                ],
                "src": "2768:187:68"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "3059:103:68",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "3069:26:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3081:9:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3092:2:68",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3077:3:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3077:18:68"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "3069:4:68"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3111:9:68"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "3126:6:68"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3138:3:68",
                                    "type": "",
                                    "value": "224"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3143:10:68",
                                    "type": "",
                                    "value": "0xffffffff"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "3134:3:68"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3134:20:68"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "3122:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3122:33:68"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3104:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3104:52:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3104:52:68"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "3028:9:68",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "3039:6:68",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "3050:4:68",
                    "type": ""
                  }
                ],
                "src": "2960:202:68"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "3341:165:68",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3358:9:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3369:2:68",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3351:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3351:21:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3351:21:68"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3392:9:68"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3403:2:68",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3388:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3388:18:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3408:2:68",
                            "type": "",
                            "value": "15"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3381:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3381:30:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3381:30:68"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3431:9:68"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3442:2:68",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3427:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3427:18:68"
                          },
                          {
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "3447:17:68",
                            "type": "",
                            "value": "Transfer failed"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3420:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3420:45:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3420:45:68"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3474:26:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3486:9:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3497:2:68",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3482:3:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3482:18:68"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "3474:4:68"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_25adaa6d082ce15f901e0d8a3d393e7462ef9edf2e6bc8321fa14d1615b6fc51__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "3318:9:68",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "3332:4:68",
                    "type": ""
                  }
                ],
                "src": "3167:339:68"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "3685:170:68",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3702:9:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3713:2:68",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3695:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3695:21:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3695:21:68"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3736:9:68"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3747:2:68",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3732:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3732:18:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3752:2:68",
                            "type": "",
                            "value": "20"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3725:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3725:30:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3725:30:68"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3775:9:68"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3786:2:68",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3771:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3771:18:68"
                          },
                          {
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "3791:22:68",
                            "type": "",
                            "value": "Insufficient deposit"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3764:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3764:50:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3764:50:68"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3823:26:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3835:9:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3846:2:68",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3831:3:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3831:18:68"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "3823:4:68"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_f8fcaef683f0d1614f3145343efc9a3d2cb7c83cead426db44ecb090c666d824__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "3662:9:68",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "3676:4:68",
                    "type": ""
                  }
                ],
                "src": "3511:344:68"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "3961:76:68",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "3971:26:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3983:9:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3994:2:68",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3979:3:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3979:18:68"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "3971:4:68"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4013:9:68"
                          },
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "4024:6:68"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "4006:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4006:25:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "4006:25:68"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "3930:9:68",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "3941:6:68",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "3952:4:68",
                    "type": ""
                  }
                ],
                "src": "3860:177:68"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "4199:305:68",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4216:9:68"
                          },
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "4227:6:68"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "4209:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4209:25:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "4209:25:68"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4254:9:68"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4265:2:68",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4250:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4250:18:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4270:2:68",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "4243:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4243:30:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "4243:30:68"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4293:9:68"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4304:2:68",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4289:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4289:18:68"
                          },
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "4309:6:68"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "4282:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4282:34:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "4282:34:68"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4342:9:68"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4353:2:68",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4338:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4338:18:68"
                          },
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "4358:6:68"
                          },
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "4366:6:68"
                          }
                        ],
                        "functionName": {
                          "name": "calldatacopy",
                          "nodeType": "YulIdentifier",
                          "src": "4325:12:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4325:48:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "4325:48:68"
                    },
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
                                    "src": "4397:9:68"
                                  },
                                  {
                                    "name": "value2",
                                    "nodeType": "YulIdentifier",
                                    "src": "4408:6:68"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "4393:3:68"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4393:22:68"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4417:2:68",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4389:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4389:31:68"
                          },
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "4422:4:68"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "4382:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4382:45:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "4382:45:68"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4436:62:68",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4452:9:68"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "value2",
                                        "nodeType": "YulIdentifier",
                                        "src": "4471:6:68"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "4479:2:68",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "4467:3:68"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4467:15:68"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "4488:2:68",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "4484:3:68"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4484:7:68"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "4463:3:68"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4463:29:68"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4448:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4448:45:68"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4495:2:68",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4444:3:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4444:54:68"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "4436:4:68"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint256_t_bytes_calldata_ptr__to_t_uint256_t_bytes_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "4152:9:68",
                    "type": ""
                  },
                  {
                    "name": "value2",
                    "nodeType": "YulTypedName",
                    "src": "4163:6:68",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nodeType": "YulTypedName",
                    "src": "4171:6:68",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "4179:6:68",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "4190:4:68",
                    "type": ""
                  }
                ],
                "src": "4042:462:68"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "4557:80:68",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "4584:22:68",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nodeType": "YulIdentifier",
                                "src": "4586:16:68"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4586:18:68"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "4586:18:68"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "4573:1:68"
                          },
                          {
                            "arguments": [
                              {
                                "name": "y",
                                "nodeType": "YulIdentifier",
                                "src": "4580:1:68"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "4576:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4576:6:68"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "4570:2:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4570:13:68"
                      },
                      "nodeType": "YulIf",
                      "src": "4567:2:68"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4615:16:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "4626:1:68"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "4629:1:68"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4622:3:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4622:9:68"
                      },
                      "variableNames": [
                        {
                          "name": "sum",
                          "nodeType": "YulIdentifier",
                          "src": "4615:3:68"
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
                    "src": "4540:1:68",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nodeType": "YulTypedName",
                    "src": "4543:1:68",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "sum",
                    "nodeType": "YulTypedName",
                    "src": "4549:3:68",
                    "type": ""
                  }
                ],
                "src": "4509:128:68"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "4691:76:68",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "4713:22:68",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nodeType": "YulIdentifier",
                                "src": "4715:16:68"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4715:18:68"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "4715:18:68"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "4707:1:68"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "4710:1:68"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "4704:2:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4704:8:68"
                      },
                      "nodeType": "YulIf",
                      "src": "4701:2:68"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4744:17:68",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "4756:1:68"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "4759:1:68"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4752:3:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4752:9:68"
                      },
                      "variableNames": [
                        {
                          "name": "diff",
                          "nodeType": "YulIdentifier",
                          "src": "4744:4:68"
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
                    "src": "4673:1:68",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nodeType": "YulTypedName",
                    "src": "4676:1:68",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "diff",
                    "nodeType": "YulTypedName",
                    "src": "4682:4:68",
                    "type": ""
                  }
                ],
                "src": "4642:125:68"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "4804:95:68",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4821:1:68",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4828:3:68",
                                "type": "",
                                "value": "224"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4833:10:68",
                                "type": "",
                                "value": "0x4e487b71"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nodeType": "YulIdentifier",
                              "src": "4824:3:68"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4824:20:68"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "4814:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4814:31:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "4814:31:68"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4861:1:68",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4864:4:68",
                            "type": "",
                            "value": "0x11"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "4854:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4854:15:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "4854:15:68"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4885:1:68",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4888:4:68",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nodeType": "YulIdentifier",
                          "src": "4878:6:68"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4878:15:68"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "4878:15:68"
                    }
                  ]
                },
                "name": "panic_error_0x11",
                "nodeType": "YulFunctionDefinition",
                "src": "4772:127:68"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_decode_t_address(offset) -> value\n    {\n        value := calldataload(offset)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        value0 := abi_decode_t_address(headStart)\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_calldata_ptr(headStart, dataEnd) -> value0, value1, value2, value3, value4\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(value4, value4) }\n        value0 := abi_decode_t_address(headStart)\n        value1 := abi_decode_t_address(add(headStart, 32))\n        value2 := calldataload(add(headStart, 64))\n        let offset := calldataload(add(headStart, 96))\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(value4, value4) }\n        let _2 := add(headStart, offset)\n        if iszero(slt(add(_2, 0x1f), dataEnd)) { revert(value4, value4) }\n        let length := calldataload(_2)\n        if gt(length, _1) { revert(value4, value4) }\n        if gt(add(add(_2, length), 32), dataEnd) { revert(value4, value4) }\n        value3 := add(_2, 32)\n        value4 := length\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(value0, value0) }\n        value0 := abi_decode_t_address(headStart)\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        let value := calldataload(headStart)\n        if iszero(eq(value, and(value, shl(224, 0xffffffff)))) { revert(value0, value0) }\n        value0 := value\n    }\n    function abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed(pos, value0) -> end\n    {\n        let length := mload(value0)\n        let i := end\n        for { } lt(i, length) { i := add(i, 0x20) }\n        {\n            mstore(add(pos, i), mload(add(add(value0, i), 0x20)))\n        }\n        if gt(i, length) { mstore(add(pos, length), end) }\n        end := add(pos, length)\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n        mstore(add(headStart, 32), value1)\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, shl(224, 0xffffffff)))\n    }\n    function abi_encode_tuple_t_stringliteral_25adaa6d082ce15f901e0d8a3d393e7462ef9edf2e6bc8321fa14d1615b6fc51__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 15)\n        mstore(add(headStart, 64), \"Transfer failed\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_f8fcaef683f0d1614f3145343efc9a3d2cb7c83cead426db44ecb090c666d824__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 20)\n        mstore(add(headStart, 64), \"Insufficient deposit\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_encode_tuple_t_uint256_t_bytes_calldata_ptr__to_t_uint256_t_bytes_memory_ptr__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        mstore(headStart, value0)\n        mstore(add(headStart, 32), 64)\n        mstore(add(headStart, 64), value2)\n        calldatacopy(add(headStart, 96), value1, value2)\n        mstore(add(add(headStart, value2), 96), tail)\n        tail := add(add(headStart, and(add(value2, 31), not(31))), 96)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        if gt(x, not(y)) { panic_error_0x11() }\n        sum := add(x, y)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        if lt(x, y) { panic_error_0x11() }\n        diff := sub(x, y)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n}",
          "id": 68,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "608060405234801561001057600080fd5b50600436106100575760003560e01c806301ffc9a71461005c57806388a7ca5c146100855780639d76ea58146100a5578063cb13cddb146100ba578063f3fef3a3146100da575b600080fd5b61006f61006a366004610401565b6100ef565b60405161007c919061048f565b60405180910390f35b610098610093366004610342565b61011c565b60405161007c919061049a565b6100ad6101b6565b60405161007c9190610462565b6100cd6100c8366004610321565b6101c5565b60405161007c9190610506565b6100ed6100e83660046103d8565b6101d7565b005b60006001600160e01b03198216632229f29760e21b14806101145750610114826102f1565b90505b919050565b6001600160a01b038416600090815260208190526040812080548591908390610146908490610545565b9091555050600180546001600160a01b031916331790556040516001600160a01b038616907f0f611859dc94a66d9bec0e66c7485098c0d5e4662896ff2f523c47f962a7abef9061019c9087908790879061050f565b60405180910390a250632229f29760e21b95945050505050565b6001546001600160a01b031681565b60006020819052908152604090205481565b3360009081526020819052604090205481111561020f5760405162461bcd60e51b8152600401610206906104d8565b60405180910390fd5b336000908152602081905260408120805483929061022e90849061055d565b925050819055506000826001600160a01b03163383604051602401610254929190610476565b60408051601f198184030181529181526020820180516001600160e01b031663a9059cbb60e01b179052516102899190610429565b6000604051808303816000865af19150503d80600081146102c6576040519150601f19603f3d011682016040523d82523d6000602084013e6102cb565b606091505b50509050806102ec5760405162461bcd60e51b8152600401610206906104af565b505050565b6001600160e01b031981166301ffc9a760e01b14919050565b80356001600160a01b038116811461011757600080fd5b600060208284031215610332578081fd5b61033b8261030a565b9392505050565b600080600080600060808688031215610359578081fd5b6103628661030a565b94506103706020870161030a565b935060408601359250606086013567ffffffffffffffff80821115610393578283fd5b818801915088601f8301126103a6578283fd5b8135818111156103b4578384fd5b8960208285010111156103c5578384fd5b9699959850939650602001949392505050565b600080604083850312156103ea578182fd5b6103f38361030a565b946020939093013593505050565b600060208284031215610412578081fd5b81356001600160e01b03198116811461033b578182fd5b60008251815b81811015610449576020818601810151858301520161042f565b818111156104575782828501525b509190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b6001600160e01b031991909116815260200190565b6020808252600f908201526e151c985b9cd9995c8819985a5b1959608a1b604082015260600190565b602080825260149082015273125b9cdd59999a58da595b9d0819195c1bdcda5d60621b604082015260600190565b90815260200190565b60008482526040602083015282604083015282846060840137818301606090810191909152601f909201601f1916010192915050565b6000821982111561055857610558610574565b500190565b60008282101561056f5761056f610574565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220d58e655a024996952ae8187532c9bc5e64939eec29a7eb373b80f31b7eda730264736f6c63430008010033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x57 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0x5C JUMPI DUP1 PUSH4 0x88A7CA5C EQ PUSH2 0x85 JUMPI DUP1 PUSH4 0x9D76EA58 EQ PUSH2 0xA5 JUMPI DUP1 PUSH4 0xCB13CDDB EQ PUSH2 0xBA JUMPI DUP1 PUSH4 0xF3FEF3A3 EQ PUSH2 0xDA JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x6F PUSH2 0x6A CALLDATASIZE PUSH1 0x4 PUSH2 0x401 JUMP JUMPDEST PUSH2 0xEF JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x7C SWAP2 SWAP1 PUSH2 0x48F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x98 PUSH2 0x93 CALLDATASIZE PUSH1 0x4 PUSH2 0x342 JUMP JUMPDEST PUSH2 0x11C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x7C SWAP2 SWAP1 PUSH2 0x49A JUMP JUMPDEST PUSH2 0xAD PUSH2 0x1B6 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x7C SWAP2 SWAP1 PUSH2 0x462 JUMP JUMPDEST PUSH2 0xCD PUSH2 0xC8 CALLDATASIZE PUSH1 0x4 PUSH2 0x321 JUMP JUMPDEST PUSH2 0x1C5 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x7C SWAP2 SWAP1 PUSH2 0x506 JUMP JUMPDEST PUSH2 0xED PUSH2 0xE8 CALLDATASIZE PUSH1 0x4 PUSH2 0x3D8 JUMP JUMPDEST PUSH2 0x1D7 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT DUP3 AND PUSH4 0x2229F297 PUSH1 0xE2 SHL EQ DUP1 PUSH2 0x114 JUMPI POP PUSH2 0x114 DUP3 PUSH2 0x2F1 JUMP JUMPDEST SWAP1 POP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP5 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x20 DUP2 SWAP1 MSTORE PUSH1 0x40 DUP2 KECCAK256 DUP1 SLOAD DUP6 SWAP2 SWAP1 DUP4 SWAP1 PUSH2 0x146 SWAP1 DUP5 SWAP1 PUSH2 0x545 JUMP JUMPDEST SWAP1 SWAP2 SSTORE POP POP PUSH1 0x1 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT AND CALLER OR SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP7 AND SWAP1 PUSH32 0xF611859DC94A66D9BEC0E66C7485098C0D5E4662896FF2F523C47F962A7ABEF SWAP1 PUSH2 0x19C SWAP1 DUP8 SWAP1 DUP8 SWAP1 DUP8 SWAP1 PUSH2 0x50F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 POP PUSH4 0x2229F297 PUSH1 0xE2 SHL SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP2 SWAP1 MSTORE SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x20 DUP2 SWAP1 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 GT ISZERO PUSH2 0x20F JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x206 SWAP1 PUSH2 0x4D8 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x20 DUP2 SWAP1 MSTORE PUSH1 0x40 DUP2 KECCAK256 DUP1 SLOAD DUP4 SWAP3 SWAP1 PUSH2 0x22E SWAP1 DUP5 SWAP1 PUSH2 0x55D JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP PUSH1 0x0 DUP3 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER DUP4 PUSH1 0x40 MLOAD PUSH1 0x24 ADD PUSH2 0x254 SWAP3 SWAP2 SWAP1 PUSH2 0x476 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F NOT DUP2 DUP5 SUB ADD DUP2 MSTORE SWAP2 DUP2 MSTORE PUSH1 0x20 DUP3 ADD DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB AND PUSH4 0xA9059CBB PUSH1 0xE0 SHL OR SWAP1 MSTORE MLOAD PUSH2 0x289 SWAP2 SWAP1 PUSH2 0x429 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP7 GAS CALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH2 0x2C6 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x2CB JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH2 0x2EC JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x206 SWAP1 PUSH2 0x4AF JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT DUP2 AND PUSH4 0x1FFC9A7 PUSH1 0xE0 SHL EQ SWAP2 SWAP1 POP JUMP JUMPDEST DUP1 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0x117 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x332 JUMPI DUP1 DUP2 REVERT JUMPDEST PUSH2 0x33B DUP3 PUSH2 0x30A JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x80 DUP7 DUP9 SUB SLT ISZERO PUSH2 0x359 JUMPI DUP1 DUP2 REVERT JUMPDEST PUSH2 0x362 DUP7 PUSH2 0x30A JUMP JUMPDEST SWAP5 POP PUSH2 0x370 PUSH1 0x20 DUP8 ADD PUSH2 0x30A JUMP JUMPDEST SWAP4 POP PUSH1 0x40 DUP7 ADD CALLDATALOAD SWAP3 POP PUSH1 0x60 DUP7 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x393 JUMPI DUP3 DUP4 REVERT JUMPDEST DUP2 DUP9 ADD SWAP2 POP DUP9 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x3A6 JUMPI DUP3 DUP4 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x3B4 JUMPI DUP4 DUP5 REVERT JUMPDEST DUP10 PUSH1 0x20 DUP3 DUP6 ADD ADD GT ISZERO PUSH2 0x3C5 JUMPI DUP4 DUP5 REVERT JUMPDEST SWAP7 SWAP10 SWAP6 SWAP9 POP SWAP4 SWAP7 POP PUSH1 0x20 ADD SWAP5 SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x3EA JUMPI DUP2 DUP3 REVERT JUMPDEST PUSH2 0x3F3 DUP4 PUSH2 0x30A JUMP JUMPDEST SWAP5 PUSH1 0x20 SWAP4 SWAP1 SWAP4 ADD CALLDATALOAD SWAP4 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x412 JUMPI DUP1 DUP2 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT DUP2 AND DUP2 EQ PUSH2 0x33B JUMPI DUP2 DUP3 REVERT JUMPDEST PUSH1 0x0 DUP3 MLOAD DUP2 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x449 JUMPI PUSH1 0x20 DUP2 DUP7 ADD DUP2 ADD MLOAD DUP6 DUP4 ADD MSTORE ADD PUSH2 0x42F JUMP JUMPDEST DUP2 DUP2 GT ISZERO PUSH2 0x457 JUMPI DUP3 DUP3 DUP6 ADD MSTORE JUMPDEST POP SWAP2 SWAP1 SWAP2 ADD SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 SWAP1 SWAP3 AND DUP3 MSTORE PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 ADD SWAP1 JUMP JUMPDEST SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xE0 SHL SUB NOT SWAP2 SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0xF SWAP1 DUP3 ADD MSTORE PUSH15 0x151C985B9CD9995C8819985A5B1959 PUSH1 0x8A SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x14 SWAP1 DUP3 ADD MSTORE PUSH20 0x125B9CDD59999A58DA595B9D0819195C1BDCDA5D PUSH1 0x62 SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST SWAP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP5 DUP3 MSTORE PUSH1 0x40 PUSH1 0x20 DUP4 ADD MSTORE DUP3 PUSH1 0x40 DUP4 ADD MSTORE DUP3 DUP5 PUSH1 0x60 DUP5 ADD CALLDATACOPY DUP2 DUP4 ADD PUSH1 0x60 SWAP1 DUP2 ADD SWAP2 SWAP1 SWAP2 MSTORE PUSH1 0x1F SWAP1 SWAP3 ADD PUSH1 0x1F NOT AND ADD ADD SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 NOT DUP3 GT ISZERO PUSH2 0x558 JUMPI PUSH2 0x558 PUSH2 0x574 JUMP JUMPDEST POP ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 LT ISZERO PUSH2 0x56F JUMPI PUSH2 0x56F PUSH2 0x574 JUMP JUMPDEST POP SUB SWAP1 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xD5 DUP15 PUSH6 0x5A024996952A 0xE8 XOR PUSH22 0x32C9BC5E64939EEC29A7EB373B80F31B7EDA73026473 PUSH16 0x6C634300080100330000000000000000 ",
      "sourceMap": "203:1705:60:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;528:248;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;784:568;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;438:27::-;;;:::i;:::-;;;;;;;:::i;387:44::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;1429:476::-;;;;;;:::i;:::-;;:::i;:::-;;528:248;629:4;-1:-1:-1;;;;;;666:49:60;;-1:-1:-1;;;666:49:60;;:102;;;732:36;756:11;732:23;:36::i;:::-;646:122;;528:248;;;;:::o;784:568::-;-1:-1:-1;;;;;1103:15:60;;950:6;1103:15;;;;;;;;;;:24;;1122:5;;1103:15;950:6;;1103:24;;1122:5;;1103:24;:::i;:::-;;;;-1:-1:-1;;1140:12:60;:25;;-1:-1:-1;;;;;;1140:25:60;1155:10;1140:25;;;1183:33;;-1:-1:-1;;;;;1183:33:60;;;;;;;1204:5;;1211:4;;;;1183:33;:::i;:::-;;;;;;;;-1:-1:-1;;;;784:568:60;;;;;;;:::o;438:27::-;;;-1:-1:-1;;;;;438:27:60;;:::o;387:44::-;;;;;;;;;;;;;;:::o;1429:476::-;1516:10;1506:9;:21;;;;;;;;;;;:31;-1:-1:-1;1506:31:60;1498:64;;;;-1:-1:-1;;;1498:64:60;;;;;;;:::i;:::-;;;;;;;;;1583:10;1573:9;:21;;;;;;;;;;:31;;1598:6;;1573:9;:31;;1598:6;;1573:31;:::i;:::-;;;;;;;;1659:12;1677:5;-1:-1:-1;;;;;1677:10:60;1790;1819:6;1702:138;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;1702:138:60;;;;;;;;;;;;;;-1:-1:-1;;;;;1702:138:60;-1:-1:-1;;;1702:138:60;;;1677:174;;;1702:138;1677:174;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1658:193;;;1870:7;1862:35;;;;-1:-1:-1;;;1862:35:60;;;;;;;:::i;:::-;1429:476;;;:::o;854:157:54:-;-1:-1:-1;;;;;;963:40:54;;-1:-1:-1;;;963:40:54;854:157;;;:::o;14:175:68:-;84:20;;-1:-1:-1;;;;;133:31:68;;123:42;;113:2;;179:1;176;169:12;194:198;;306:2;294:9;285:7;281:23;277:32;274:2;;;327:6;319;312:22;274:2;355:31;376:9;355:31;:::i;:::-;345:41;264:128;-1:-1:-1;;;264:128:68:o;397:862::-;;;;;;579:3;567:9;558:7;554:23;550:33;547:2;;;601:6;593;586:22;547:2;629:31;650:9;629:31;:::i;:::-;619:41;;679:40;715:2;704:9;700:18;679:40;:::i;:::-;669:50;;766:2;755:9;751:18;738:32;728:42;;821:2;810:9;806:18;793:32;844:18;885:2;877:6;874:14;871:2;;;906:6;898;891:22;871:2;949:6;938:9;934:22;924:32;;994:7;987:4;983:2;979:13;975:27;965:2;;1021:6;1013;1006:22;965:2;1066;1053:16;1092:2;1084:6;1081:14;1078:2;;;1113:6;1105;1098:22;1078:2;1163:7;1158:2;1149:6;1145:2;1141:15;1137:24;1134:37;1131:2;;;1189:6;1181;1174:22;1131:2;537:722;;;;-1:-1:-1;537:722:68;;-1:-1:-1;1225:2:68;1217:11;;1247:6;537:722;-1:-1:-1;;;537:722:68:o;1264:266::-;;;1393:2;1381:9;1372:7;1368:23;1364:32;1361:2;;;1414:6;1406;1399:22;1361:2;1442:31;1463:9;1442:31;:::i;:::-;1432:41;1520:2;1505:18;;;;1492:32;;-1:-1:-1;;;1351:179:68:o;1535:306::-;;1646:2;1634:9;1625:7;1621:23;1617:32;1614:2;;;1667:6;1659;1652:22;1614:2;1698:23;;-1:-1:-1;;;;;;1750:32:68;;1740:43;;1730:2;;1802:6;1794;1787:22;1846:430;;2013:6;2007:13;2038:3;2050:129;2064:6;2061:1;2058:13;2050:129;;;2162:4;2146:14;;;2142:25;;2136:32;2123:11;;;2116:53;2079:12;2050:129;;;2197:6;2194:1;2191:13;2188:2;;;2232:3;2223:6;2218:3;2214:16;2207:29;2188:2;-1:-1:-1;2254:16:68;;;;;1983:293;-1:-1:-1;;1983:293:68:o;2281:203::-;-1:-1:-1;;;;;2445:32:68;;;;2427:51;;2415:2;2400:18;;2382:102::o;2489:274::-;-1:-1:-1;;;;;2681:32:68;;;;2663:51;;2745:2;2730:18;;2723:34;2651:2;2636:18;;2618:145::o;2768:187::-;2933:14;;2926:22;2908:41;;2896:2;2881:18;;2863:92::o;2960:202::-;-1:-1:-1;;;;;;3122:33:68;;;;3104:52;;3092:2;3077:18;;3059:103::o;3167:339::-;3369:2;3351:21;;;3408:2;3388:18;;;3381:30;-1:-1:-1;;;3442:2:68;3427:18;;3420:45;3497:2;3482:18;;3341:165::o;3511:344::-;3713:2;3695:21;;;3752:2;3732:18;;;3725:30;-1:-1:-1;;;3786:2:68;3771:18;;3764:50;3846:2;3831:18;;3685:170::o;3860:177::-;4006:25;;;3994:2;3979:18;;3961:76::o;4042:462::-;;4227:6;4216:9;4209:25;4270:2;4265;4254:9;4250:18;4243:30;4309:6;4304:2;4293:9;4289:18;4282:34;4366:6;4358;4353:2;4342:9;4338:18;4325:48;4393:22;;;4417:2;4389:31;;;4382:45;;;;4488:2;4467:15;;;-1:-1:-1;;4463:29:68;4448:45;4444:54;;4199:305;-1:-1:-1;;4199:305:68:o;4509:128::-;;4580:1;4576:6;4573:1;4570:13;4567:2;;;4586:18;;:::i;:::-;-1:-1:-1;4622:9:68;;4557:80::o;4642:125::-;;4710:1;4707;4704:8;4701:2;;;4715:18;;:::i;:::-;-1:-1:-1;4752:9:68;;4691:76::o;4772:127::-;4833:10;4828:3;4824:20;4821:1;4814:31;4864:4;4861:1;4854:15;4888:4;4885:1;4878:15"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "294400",
        "executionCost": "331",
        "totalCost": "294731"
      },
      "external": {
        "deposited(address)": "1299",
        "onTransferReceived(address,address,uint256,bytes)": "infinite",
        "supportsInterface(bytes4)": "474",
        "tokenAddress()": "1092",
        "withdraw(address,uint256)": "infinite"
      }
    },
    "methodIdentifiers": {
      "deposited(address)": "cb13cddb",
      "onTransferReceived(address,address,uint256,bytes)": "88a7ca5c",
      "supportsInterface(bytes4)": "01ffc9a7",
      "tokenAddress()": "9d76ea58",
      "withdraw(address,uint256)": "f3fef3a3"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.1+commit.df193b15\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"TokensReceived\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"deposited\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onTransferReceived\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokenAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/contracts/test/SimpleTokenReceiver.sol\":\"SimpleTokenReceiver\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\"project/:@openzeppelin/contracts/=npm/@openzeppelin/contracts@4.9.6/\"]},\"sources\":{\"project/contracts/openzeppelin_l/contracts/interfaces/IERC1363Receiver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts (last updated v4.9.0) (interfaces/IERC1363Receiver.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface for any contract that wants to support {IERC1363-transferAndCall}\\r\\n * or {IERC1363-transferFromAndCall} from {ERC1363} token contracts.\\r\\n */\\r\\ninterface IERC1363Receiver {\\r\\n    /*\\r\\n     * Note: the ERC-165 identifier for this interface is 0x88a7ca5c.\\r\\n     * 0x88a7ca5c === bytes4(keccak256(\\\"onTransferReceived(address,address,uint256,bytes)\\\"))\\r\\n     */\\r\\n\\r\\n    /**\\r\\n     * @notice Handle the receipt of ERC1363 tokens\\r\\n     * @dev Any ERC1363 smart contract calls this function on the recipient\\r\\n     * after a `transfer` or a `transferFrom`. This function MAY throw to revert and reject the\\r\\n     * transfer. Return of other than the magic value MUST result in the\\r\\n     * transaction being reverted.\\r\\n     * Note: the token contract address is always the message sender.\\r\\n     * @param operator address The address which called `transferAndCall` or `transferFromAndCall` function\\r\\n     * @param from address The address which are token transferred from\\r\\n     * @param amount uint256 The amount of tokens transferred\\r\\n     * @param data bytes Additional data with no specified format\\r\\n     * @return `bytes4(keccak256(\\\"onTransferReceived(address,address,uint256,bytes)\\\"))` unless throwing\\r\\n     */\\r\\n    function onTransferReceived(\\r\\n        address operator,\\r\\n        address from,\\r\\n        uint256 amount,\\r\\n        bytes memory data\\r\\n    ) external returns (bytes4);\\r\\n}\\r\\n\",\"keccak256\":\"0xc149a479b8c794103eeb3c93fa50226aa0eee57d42e38c16a898d9a9d3beff9e\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/introspection/ERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"./IERC165.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Implementation of the {IERC165} interface.\\r\\n *\\r\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\r\\n * for the additional interface id that will be supported. For example:\\r\\n *\\r\\n * ```solidity\\r\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\r\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\r\\n * }\\r\\n * ```\\r\\n *\\r\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\r\\n */\\r\\nabstract contract ERC165 is IERC165 {\\r\\n    /**\\r\\n     * @dev See {IERC165-supportsInterface}.\\r\\n     */\\r\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\r\\n        return interfaceId == type(IERC165).interfaceId;\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x3d3fe7b1901114d50828f5c77ba7f09a2a6a65223620c837364d31b60e5982ac\",\"license\":\"MIT\"},\"project/contracts/openzeppelin_l/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC165 standard, as defined in the\\r\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\r\\n *\\r\\n * Implementers can declare support of contract interfaces, which can then be\\r\\n * queried by others ({ERC165Checker}).\\r\\n *\\r\\n * For an implementation, see {ERC165}.\\r\\n */\\r\\ninterface IERC165 {\\r\\n    /**\\r\\n     * @dev Returns true if this contract implements the interface defined by\\r\\n     * `interfaceId`. See the corresponding\\r\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\r\\n     * to learn more about how these ids are created.\\r\\n     *\\r\\n     * This function call must use less than 30 000 gas.\\r\\n     */\\r\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\r\\n}\\r\\n\",\"keccak256\":\"0x540685d7ece3faa56f38253270ff11b18e63949fb8659c408123b1874674492e\",\"license\":\"MIT\"},\"project/contracts/test/SimpleTokenReceiver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\npragma solidity ^0.8.1;\\r\\n\\r\\nimport \\\"../openzeppelin_l/contracts/interfaces/IERC1363Receiver.sol\\\";\\r\\nimport \\\"../openzeppelin_l/contracts/utils/introspection/ERC165.sol\\\";\\r\\n\\r\\ncontract SimpleTokenReceiver is IERC1363Receiver, ERC165 {\\r\\n    event TokensReceived(address indexed from, uint256 value, bytes data);\\r\\n\\r\\n    // \\u8bb0\\u5f55\\u7528\\u6237\\u5b58\\u5165\\u7684\\u4ee3\\u5e01\\u6570\\u91cf\\r\\n    mapping(address => uint256) public deposited;\\r\\n    address public tokenAddress;\\r\\n\\r\\n    // \\u544a\\u8bc9\\u522b\\u4eba\\u6211\\u652f\\u6301 IERC1363Receiver \\u63a5\\u53e3\\r\\n    function supportsInterface(\\r\\n        bytes4 interfaceId\\r\\n    ) public view virtual override returns (bool) {\\r\\n        return\\r\\n            interfaceId == type(IERC1363Receiver).interfaceId ||\\r\\n            super.supportsInterface(interfaceId);\\r\\n    }\\r\\n\\r\\n    function onTransferReceived(\\r\\n        address operator,\\r\\n        address from,\\r\\n        uint256 value,\\r\\n        bytes calldata data\\r\\n    ) external override returns (bytes4) {\\r\\n        // \\u53ef\\u4ee5\\u5728\\u8fd9\\u91cc\\u505a\\u4e00\\u4e9b\\u9a8c\\u8bc1\\uff0c\\u4f8b\\u5982\\u68c0\\u67e5 data \\u662f\\u5426\\u7b26\\u5408\\u9884\\u671f\\u683c\\u5f0f\\r\\n        // \\u7b80\\u5355\\u793a\\u4f8b\\uff1a\\u76f4\\u63a5\\u8bb0\\u5f55\\u5b58\\u6b3e\\r\\n        deposited[from] += value;\\r\\n\\r\\n        tokenAddress = msg.sender;\\r\\n\\r\\n        emit TokensReceived(from, value, data);\\r\\n\\r\\n        // \\u5fc5\\u987b\\u8fd4\\u56de\\u8fd9\\u4e2a\\u9b54\\u672f\\u503c\\uff0c\\u5426\\u5219\\u8f6c\\u8d26\\u4f1a\\u56de\\u6eda\\r\\n        return IERC1363Receiver.onTransferReceived.selector;\\r\\n    }\\r\\n\\r\\n    // \\u63d0\\u53d6\\u4ee3\\u5e01\\uff08\\u4ec5\\u793a\\u4f8b\\uff0c\\u751f\\u4ea7\\u73af\\u5883\\u8981\\u52a0\\u6743\\u9650\\u63a7\\u5236\\uff09\\r\\n    function withdraw(address token, uint256 amount) external {\\r\\n        require(deposited[msg.sender] >= amount, \\\"Insufficient deposit\\\");\\r\\n        deposited[msg.sender] -= amount;\\r\\n\\r\\n        // \\u8c03\\u7528 transfer \\u9000\\u56de\\u4ee3\\u5e01\\r\\n        (bool success, ) = token.call(\\r\\n            abi.encodeWithSignature(\\r\\n                \\\"transfer(address,uint256)\\\",\\r\\n                msg.sender,\\r\\n                amount\\r\\n            )\\r\\n        );\\r\\n        require(success, \\\"Transfer failed\\\");\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x4ba99c2684c06ed6a1d15a920aa220fe65c2f02c50d9dd1780f2964289e94a34\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 12839,
        "contract": "project/contracts/test/SimpleTokenReceiver.sol:SimpleTokenReceiver",
        "label": "deposited",
        "offset": 0,
        "slot": "0",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 12841,
        "contract": "project/contracts/test/SimpleTokenReceiver.sol:SimpleTokenReceiver",
        "label": "tokenAddress",
        "offset": 0,
        "slot": "1",
        "type": "t_address"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_mapping(t_address,t_uint256)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => uint256)",
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