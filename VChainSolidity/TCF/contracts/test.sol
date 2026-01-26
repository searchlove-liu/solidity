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
    // address tokenAddress;
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
        // Avoid `type(IERC20Metadata).interfaceId` for compatibility with older parsers/linters.
        // ERC165 interface id is XOR of all function selectors in the interface.
        return
            bytes4(keccak256("totalSupply()")) ^
            bytes4(keccak256("balanceOf(address)")) ^
            bytes4(keccak256("transfer(address,uint256)")) ^
            bytes4(keccak256("allowance(address,address)")) ^
            bytes4(keccak256("approve(address,uint256)")) ^
            bytes4(keccak256("transferFrom(address,address,uint256)")) ^
            bytes4(keccak256("name()")) ^
            bytes4(keccak256("symbol()")) ^
            bytes4(keccak256("decimals()"));
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

    function testRevert() public pure {
        revert("nihao");
    }

    function setAddress1(uint256 addAmount) public {
        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);
        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);
        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);
        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);
        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);
        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);
        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);

        address[] memory addresses_temp = addresses;
        address[] memory addresses_ = new address[](
            addresses_temp.length + addAmount
        );
        uint256 len = addresses_temp.length;
        for (uint256 i = 0; i < len; i++) {
            addresses_[i] = addresses_temp[i];
        }

        for (uint256 i = 0; i < addAmount; i++) {
            addresses_[len + i] = 0xdD2FD4581271e230360230F9337D5c0430Bf44C0;
        }

        addresses = addresses_;
    }

    function setAddress2(uint256 addAmount) public {
        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);
        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);
        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);
        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);
        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);
        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);
        addresses.push(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);

        // address[] memory addresses_temp = addresses;
        // address[] memory addresses_ = new address[](addresses_temp.length+3);
        // uint256 len = addresses_temp.length;
        // for (uint256 i=0;i<len;i++){
        //     addresses_[i] =addresses_temp[i];
        // }

        // for (uint256 i=0;i<3;i++){
        //     addresses_[len+i]= 0xdD2FD4581271e230360230F9337D5c0430Bf44C0;
        // }

        for (uint256 i = 0; i < addAmount; i++) {
            addresses.push(0xdD2FD4581271e230360230F9337D5c0430Bf44C0);
        }
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
        address _tokenAddress
    ) public view returns (string memory) {
        IERC20Metadata IERC20TokenAddress = IERC20Metadata(_tokenAddress);
        string memory symbol = IERC20TokenAddress.symbol();
        return symbol;
    }

    function getValue() public pure {
        revert("nihao");
    }

    function getTimestamp() public view returns (uint256) {
        return block.timestamp;
    }

    function testencodePacked() public pure returns (uint256, uint256) {
        string memory result = string(
            abi.encodePacked(uint256(3), uint256(100))
        );
        (uint256 tokenId, uint256 amount) = abi.decode(
            bytes(result),
            (uint256, uint256)
        );
        return (tokenId, amount);
    }

    function testDecodeData(
        bytes calldata decodeData
    ) public pure returns (uint256, uint256) {
        require(decodeData.length == 64, "Invalid data length");
        (uint256 tokenId, uint256 amount) = abi.decode(
            decodeData,
            (uint256, uint256)
        );
        return (tokenId, amount);
    }

    receive() external payable {}

    function transferNatureToken(address to, uint256 amount) public {
        (bool success, ) = to.call{value: amount}("");
        require(success, "call failed");
    }
}
