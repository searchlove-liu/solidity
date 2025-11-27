// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract A {
    string public str;
    bytes public msgData;

    function getValue(string memory _str) public {
        str = _str;
        msgData = msg.data;
    }
}


