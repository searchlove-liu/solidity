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
import {vault} from "./extensions/vault/vault.sol";

// TODO: 在voidChain中部署合约，并测试功能
// TODO: 增加暂停功能

contract TCF is Initializable, ERC1363, Ownable {
    constructor() {
        staticVault = new vault();
        dynamicVault = new vault();
        // 4680000000000000中每天发40给静态,每天发60给动态.也就是静态最多接受4680000000000000*40/100=1872000000000000
        // 动态最多接受4680000000000000*60/100=2808000000000000
        // staticVault/dynamicVault授权自己未来可能收到的所有代币数量给owner,owner可以提取
        _approve(address(staticVault), owner(), 1872000000000000);
        _approve(address(dynamicVault), owner(), 2808000000000000);
    }

    // 事件：记录接收和提取
    event TokensReceived(
        address indexed token,
        address indexed from,
        address indexed to,
        uint256 amount
    );

    event TokensWithdrawn(
        address indexed token,
        address indexed from,
        address indexed to,
        uint256 amount
    );

    // 静态合约和动态合约
    vault public staticVault;
    vault public dynamicVault;

    // 注意修饰器为initializer，意思是，如果当前合约正在执行这个初始化函数，
    // 那么别人无法再次进去这个函数（）。
    function initialize(
        address addr_3,
        address addr_7
    ) external initializer onlyOwner {
        require(addr_3 != address(0), "TCF: addr_3 is the zero address");
        require(addr_7 != address(0), "TCF: addr_7 is the zero address");
        ERC20.__ERC20_init("DCF", "DCF");
        // 总量5,000,000
        // 90%=4680000 代币,decimals=9,后面乘以10^9
        _mint(address(this), 4680000000000000);
        // _mint(addr_3, 156000 * 10 ** 9);
        _mint(addr_3, 156000000000000);
        _mint(addr_7, 364000000000000);
    }

    // 每天定时调用该函数，释放静态和动态代币到静态和动态合约中
    // 这个函数可以和链上预言机服务结合使用，实现自动化调用
    // 如果固定时间执行一次，可以设置上一次调用的时间戳，用于检测是否在一定时间范围之内
    // 例如，如果24小时执行一次，上一个时间戳和当前时间戳之间的差值可以设置为23小时到25小时之间
    function releaseDailyTokens() external onlyOwner {
        // 每天释放40个给静态合约，60个给动态合约
        _transfer(address(this), address(staticVault), 40000000000);
        emit TokensReceived(
            address(this),
            address(this),
            address(staticVault),
            40000000000
        );
        _transfer(address(this), address(dynamicVault), 60000000000);
        emit TokensReceived(
            address(this),
            address(this),
            address(dynamicVault),
            60000000000
        );
    }

    // 提取静态合约和动态合约中的代币
    function withdrawFromStaticVault(
        address to,
        uint256 staticAmount
    ) external onlyOwner {
        require(staticAmount > 0, "TCF: Amount must be greater than 0");
        transferFrom(address(staticVault), to, staticAmount);
        emit TokensWithdrawn(
            address(this),
            address(staticVault),
            to,
            staticAmount
        );
    }

    // 提取动态合约中的代币
    function withdrawFromDynamicVault(
        address to,
        uint256 dynamicAmount
    ) external onlyOwner {
        require(dynamicAmount > 0, "TCF: Amount must be greater than 0");
        transferFrom(address(dynamicVault), to, dynamicAmount);
        emit TokensWithdrawn(
            address(this),
            address(dynamicVault),
            to,
            dynamicAmount
        );
    }
}
