// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts 4.9.6
pragma solidity ^0.8.1;

import {ERC20} from "./openzeppelin_l/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "./openzeppelin_l/contracts/access/Ownable.sol";
import {Initializable} from "./openzeppelin_l/contracts/proxy/utils/Initializable.sol";

contract TCF is Initializable, ERC20, Ownable {
    constructor() {}

    // 注意修饰器为initializer，意思是，如果当前合约正在执行这个初始化函数，
    // 那么别人无法再次进去这个函数（）。
    // baseURI案例：https://ipfs.io/ipfs/QmciqT3pUud6sa2U8E41ac2q7Mxd34DyNyyJ2YewGPAYkt/
    function initialize(
        bytes calldata _tokenName,
        bytes calldata _tokenSymbol,
        address addr_3,
        address addr_7
    ) external initializer onlyOwner {
        ERC20.__ERC20_init(string(_tokenName), string(_tokenSymbol));
        mint(Ownable.owner(), 4680000);
        mint(addr_3, 156000);
        mint(addr_7, 364000);
    }

    function mint(address to, uint256 amount) internal onlyOwner {
        _mint(to, amount);
    }
}
