// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts 4.9.6
pragma solidity ^0.8.1;

import {
    ERC1363,
    ERC20
} from "./openzeppelin_l/contracts/token/ERC20/extensions/ERC1363.sol";
import {Ownable} from "./openzeppelin_l/contracts/access/Ownable.sol";
import {
    Initializable
} from "./openzeppelin_l/contracts/proxy/utils/Initializable.sol";

// TODO: 用户点击提款。系统发起提款函数
// TODO: 将ERC1363移动到extensions/文件夹下，并使用自定义错误
// TODO: 整合所有错误代码到TCF_ErrorCode.sol文件中
// TODO: 将90%的代币分配给这个合约，而不是合约的拥有者：这个暂时可以不做，因为目前算力的计算是在外部实现，
//       外部存储每个用户存储多少余额，用户提款时，owner调用提款函数，将相应的代币转给用户。
//       也就是说，owner拥有操作合约金额的权限。所以不管代币在谁手里，owner都可以操作这些代币。

contract TCF is Initializable, ERC1363, Ownable {
    constructor() {}

    // 注意修饰器为initializer，意思是，如果当前合约正在执行这个初始化函数，
    // 那么别人无法再次进去这个函数（）。
    function initialize(
        address addr_3,
        address addr_7
    ) external initializer onlyOwner {
        ERC20.__ERC20_init("DCF", "DCF");
        _mint(owner(), 4680000);
        _mint(addr_3, 156000);
        _mint(addr_7, 364000);
    }

    // 提款函数
    function withdraw(uint256 amount) external onlyOwner {
        require(amount <= balanceOf(address(this)), "Insufficient balance");
        _transfer(address(this), owner(), amount);
    }
}
