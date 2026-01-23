// SPDX-License-Identifier:MIT

pragma solidity ^0.8.1;

import {
    ERC1363
} from "../openzeppelin_l/contracts/token/ERC20/extensions/ERC1363.sol";

contract ERC1363Example is ERC1363 {
    function _mintExample(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
