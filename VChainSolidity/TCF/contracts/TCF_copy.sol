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
import {Pausable} from "./openzeppelin_l/contracts/security/Pausable.sol";

// TODO: 在voidChain中部署合约，并测试功能
// TODO: 增加暂停功能

contract TCF_copy is Initializable, ERC1363, Ownable, Pausable {
    // 事件：记录接收和提取

    event TokensWithdrawn(
        address indexed token,
        address indexed from,
        address indexed to,
        uint256 amount
    );

    event DailyTokensReleased(address indexed operator, uint256 timeStamp);

    // 静态合约和动态合约
    address private staticVault;
    address private dynamicVault;

    function getStaticContractAddress() external view returns (string memory) {
        return _toHexString(staticVault);
    }

    function getDynamicContractAddress() external view returns (string memory) {
        return _toHexString(dynamicVault);
    }

    // 注意修饰器为initializer，意思是，如果当前合约正在执行这个初始化函数，
    // 那么别人无法再次进去这个函数（）。
    function initialize(
        address _staticVaultAddress,
        address _dynamicVaultAddress,
        address _addr_3,
        address _addr_7
    ) external initializer onlyOwner {
        require(_addr_3 != address(0), "TCF: addr_3 is the zero address");
        require(_addr_7 != address(0), "TCF: addr_7 is the zero address");
        require(
            _staticVaultAddress != address(0),
            "TCF: staticVaultAddress is the zero address"
        );
        require(
            _dynamicVaultAddress != address(0),
            "TCF: dynamicVaultAddress is the zero address"
        );
        require(
            _staticVaultAddress.code.length > 0,
            "TCF: staticVaultAddress is not a contract"
        );
        require(
            _dynamicVaultAddress.code.length > 0,
            "TCF: dynamicVaultAddress is not a contract"
        );
        ERC20.__ERC20_init("DCF", "DCF");
        // 总量5,000,000
        // 90%=4680000 代币,decimals=9,后面乘以10^9
        _mint(address(this), 4680000000000000);
        // _mint(addr_3, 156000 * 10 ** 9);
        _mint(_addr_3, 156000000000000);
        _mint(_addr_7, 364000000000000);
        // 4680000000000000中每天发40给静态,每天发60给动态.也就是静态最多接受4680000000000000*40/100=1872000000000000
        // 动态最多接受4680000000000000*60/100=2808000000000000
        // staticVault/dynamicVault授权自己未来可能收到的所有代币数量给owner,owner可以提取
        staticVault = _staticVaultAddress;
        dynamicVault = _dynamicVaultAddress;
        _approve(staticVault, owner(), 1872000000000000);
        _approve(dynamicVault, owner(), 2808000000000000);
    }

    // 每天定时调用该函数，释放静态和动态代币到静态和动态合约中
    // 这个函数可以和链上预言机服务结合使用，实现自动化调用
    // 如果固定时间执行一次，可以设置上一次调用的时间戳，用于检测是否在一定时间范围之内
    // 例如，如果24小时执行一次，上一个时间戳和当前时间戳之间的差值可以设置为23小时到25小时之间
    function releaseDailyTokens() external onlyOwner whenNotPaused {
        // 每天释放40个给静态合约，60个给动态合约
        _transfer(address(this), address(staticVault), 40000000000);
        _transfer(address(this), address(dynamicVault), 60000000000);
        emit DailyTokensReleased(msg.sender, block.timestamp);
    }

    // 提取静态合约和动态合约中的代币
    function withdrawFromStaticVault(
        address to,
        uint256 staticAmount
    ) external onlyOwner whenNotPaused {
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
    ) external onlyOwner whenNotPaused {
        require(dynamicAmount > 0, "TCF: Amount must be greater than 0");
        transferFrom(address(dynamicVault), to, dynamicAmount);
        emit TokensWithdrawn(
            address(this),
            address(dynamicVault),
            to,
            dynamicAmount
        );
    }

    function transferAndCall(
        address to,
        uint256 value,
        bytes memory data
    ) public virtual override(ERC1363) whenNotPaused returns (bool) {
        // 检查数据格式是否正确
        super.transferAndCall(to, value, data);
        return true;
    }

    // 合约暂停
    function pause() public onlyOwner {
        _pause();
        emit Paused(msg.sender);
    }

    // 合约解除暂停
    function unpause() public onlyOwner {
        _unpause();
        emit Unpaused(msg.sender);
    }

    function _toHexString(
        address account
    ) private pure returns (string memory) {
        bytes20 data = bytes20(account);
        bytes16 hexSymbols = 0x30313233343536373839616263646566;
        bytes memory str = new bytes(42);
        str[0] = "0";
        str[1] = "x";
        for (uint256 i = 0; i < 20; i++) {
            uint8 b = uint8(data[i]);
            str[2 + i * 2] = bytes1(hexSymbols[b >> 4]);
            str[3 + i * 2] = bytes1(hexSymbols[b & 0x0f]);
        }
        return string(str);
    }
}
