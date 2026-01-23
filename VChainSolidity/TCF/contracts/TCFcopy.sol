// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts 4.9.6
pragma solidity ^0.8.1;

import {ERC1363, ERC20} from "./openzeppelin_l/contracts/token/ERC20/extensions/ERC1363.sol";
import {Ownable} from "./openzeppelin_l/contracts/access/Ownable.sol";
import {Initializable} from "./openzeppelin_l/contracts/proxy/utils/Initializable.sol";

contract TCF_copy is Initializable, ERC1363, Ownable {
    constructor() {}

    // 注意修饰器为initializer，意思是，如果当前合约正在执行这个初始化函数，
    // 那么别人无法再次进去这个函数（）。
    function initialize(
        address addr_3,
        address addr_7
    ) external initializer onlyOwner {
        ERC20.__ERC20_init("DCF", "DCF");
        _mint(Ownable.owner(), 4680000);
        _mint(addr_3, 156000);
        _mint(addr_7, 364000);
    }
}
