// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts 4.9.6
pragma solidity ^0.8.1;

import "../../openzeppelin_l/contracts/token/ERC20/IERC20.sol";
import "../../openzeppelin_l/contracts/token/ERC20/utils/SafeERC20.sol";
import "../../openzeppelin_l/contracts/access/Ownable.sol";
import "../../openzeppelin_l/contracts/security/ReentrancyGuard.sol";

contract vault is Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20; // 启用 SafeERC20 扩展方法

    // 事件：记录接收和提取
    event TokensReceived(
        address indexed token,
        address indexed from,
        uint256 amount
    );

    event TokensWithdrawn(
        address indexed token,
        address indexed to,
        uint256 amount
    );

    /**
     * @dev 存款 ERC-20 代币（pull 模式，用户需提前 approve）
     * 使用 SafeERC20.safeTransferFrom 确保兼容非标准代币
     * 使用时，需要erc20Token.approve(vaultAddress, amount)先授权
     */
    function deposit(
        IERC20 token,
        uint256 amount
    ) internal onlyOwner nonReentrant {
        require(amount > 0, "Amount must be greater than 0");

        // SafeERC20 会检查返回值或 revert 行为，确保安全
        token.safeTransferFrom(msg.sender, address(this), amount);

        emit TokensReceived(address(token), msg.sender, amount);
    }

    /**
     * @dev 查询合约中某 ERC-20 代币的余额
     */
    function getBalance(IERC20 token) external view returns (uint256) {
        return token.balanceOf(address(this));
    }

    /**
     * @dev Owner 提取代币
     * 使用 SafeERC20.safeTransfer 确保转移成功
     */
    function withdraw(
        IERC20 token,
        address to,
        uint256 amount
    ) internal onlyOwner nonReentrant {
        require(amount > 0, "Amount must be greater than 0");
        uint256 balance = token.balanceOf(address(this));
        require(balance >= amount, "Insufficient balance");

        // 先 emit 事件（Effects），再转移（Interactions）
        emit TokensWithdrawn(address(token), to, amount);

        // 使用 SafeERC20 防止非标准代币问题
        token.safeTransfer(to, amount);
    }

    /**
     * @dev 禁止接收原生 ETH（避免意外锁定资金）
     */
    receive() external payable {
        revert("This contract does not accept ETH");
    }
}
