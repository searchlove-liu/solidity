// SPDX-License-Identifier:MIT

pragma solidity ^0.8.1;

contract utils {
    function uintToString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }

        uint256 temp = value;
        uint256 digits;

        // 计算需要多少位
        while (temp != 0) {
            digits++;
            temp /= 10;
        }

        bytes memory buffer = new bytes(digits);
        uint256 writeIndex = digits;

        // 从低位填入字符
        temp = value;
        while (temp != 0) {
            writeIndex--;
            buffer[writeIndex] = bytes1(uint8(48 + (temp % 10))); // '0' 的 ascii 是 48
            temp /= 10;
        }
        return string(buffer);
    }
}
