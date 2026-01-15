// SPDX-License-Identifier:MIT

pragma solidity ^0.8.1;

import {
    IERC20Metadata
} from "./openzeppelin_l/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import {IERC20} from "./openzeppelin_l/contracts/token/ERC20/IERC20.sol";
/**
 * @dev 测试删除map数据消耗的gas
 */

contract testGasUsed {
    mapping(uint256 => uint256) public NFTDeadline;
    uint256 number;
    address tokenAddress;
    mapping(address => uint8) public supportTokenAddress;
    address[] public addresses;

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

    function testRevert() public {
        revert("nihao");
        number = 1;
    }

    function getAddress() public {
        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);
        addresses.push(0xdD2FD4581271e230360230F9337D5c0430Bf44C0);
        addresses.push(0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199);

        addresses.pop();

        addresses.push(0xbDA5747bFD65F08deb54cb465eB87D40e51B197E);
    }

    function init(address[] calldata tokenAddresses) public {
        initTokenAddress(tokenAddresses);
    }

    function initTokenAddress(address[] calldata tokenAddresses) internal {
        uint256 len = tokenAddresses.length;
        for (uint256 i = 0; i < len; i++) {
            supportTokenAddress[tokenAddresses[i]] = 1;
        }
    }

    function testInternalCallContractFunction(
        address tokenAddress
    ) public view returns (string memory) {
        IERC20Metadata IERC20TokenAddress = IERC20Metadata(tokenAddress);
        string memory symbol = IERC20TokenAddress.symbol();
        return symbol;
    }

    function getValue() public {
        revert("nihao");
    }
}
