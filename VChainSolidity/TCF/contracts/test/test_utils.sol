// SPDX-License-Identifier:MIT

pragma solidity ^0.8.1;

import {utils} from "../utils.sol";

contract testUtils is utils {
    function testUintToString(
        uint256 value
    ) public pure returns (string memory) {
        return uintToString(value);
    }
}
