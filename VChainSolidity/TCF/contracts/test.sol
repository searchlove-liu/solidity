// SPDX-License-Identifier:MIT

pragma solidity ^0.8.1;

import {
    IERC20Metadata
} from "./openzeppelin_l/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import {IERC20} from "./openzeppelin_l/contracts/token/ERC20/IERC20.sol";
/***
 * @dev:测试删除map数据消耗的gas
 */

contract testGasUsed {
    mapping(uint256 => uint256) public NFTDeadline;

    // 测试两次，第一次删除，第二次不删除，查看消耗gas
    function pushData(uint256 _key, uint256 _value, bool _deleteData) public {
        NFTDeadline[_key] = _value;
        if (_deleteData) {
            deleteData(_key);
        }
    }

    function deleteData(uint256 _key) internal {
        delete NFTDeadline[_key];
    }

    function getIERC20MetadataInterfaceId() public pure returns (bytes4) {
        return type(IERC20Metadata).interfaceId;
    }

    function useCall(address tokenAddress) public view returns (string memory) {
        bytes memory callData = abi.encodeWithSignature("symbol()");
        // 如果传入EOA地址，会返回success，但长度为0
        (bool success, bytes memory data) = tokenAddress.staticcall(callData);
        if (success && data.length > 0) {
            return abi.decode(data, (string));
        }
        return "false";
    }
}

contract testMapping {
    mapping(address => uint8) public supportTokenAddress;

    function init(address[] calldata tokenAddresses) public {
        initTokenAddress(tokenAddresses);
    }

    function initTokenAddress(address[] calldata tokenAddresses) internal {
        uint256 len = tokenAddresses.length;
        for (uint256 i = 0; i < len; i++) {
            supportTokenAddress[tokenAddresses[i]] = 1;
        }
    }
}

contract testCallContractFunction {
    function testInternalCallContractFunction(
        address tokenAddress
    ) public view returns (string memory) {
        IERC20Metadata IERC20TokenAddress = IERC20Metadata(tokenAddress);
        string memory symbol = IERC20TokenAddress.symbol();
        return symbol;
    }
}

contract testInterfaceID {
    function getIERC20MetadataInterfaceId() public pure returns (bytes4) {
        return type(IERC20Metadata).interfaceId;
    }
}

contract testTwodimensionalArray {}
