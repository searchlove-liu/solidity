// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts 4.9.6
pragma solidity ^0.8.1;

import {ERC20} from "../openzeppelin_l/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "../openzeppelin_l/contracts/access/Ownable.sol";

contract RewardContract is ERC20, Ownable {
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}