// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "../openzeppelin_l/contracts/interfaces/IERC1363Receiver.sol";
import "../openzeppelin_l/contracts/utils/introspection/ERC165.sol";

contract SimpleTokenReceiver is IERC1363Receiver, ERC165 {
    event TokensReceived(address indexed from, uint256 value, bytes data);

    // 记录用户存入的代币数量
    mapping(address => uint256) public deposited;
    address public tokenAddress;

    // 告诉别人我支持 IERC1363Receiver 接口
    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override returns (bool) {
        return
            interfaceId == type(IERC1363Receiver).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    function onTransferReceived(
        address operator,
        address from,
        uint256 value,
        bytes calldata data
    ) external override returns (bytes4) {
        // 可以在这里做一些验证，例如检查 data 是否符合预期格式
        // 简单示例：直接记录存款
        deposited[from] += value;

        tokenAddress = msg.sender;

        emit TokensReceived(from, value, data);

        // 必须返回这个魔术值，否则转账会回滚
        return IERC1363Receiver.onTransferReceived.selector;
    }

    // 提取代币（仅示例，生产环境要加权限控制）
    function withdraw(address token, uint256 amount) external {
        require(deposited[msg.sender] >= amount, "Insufficient deposit");
        deposited[msg.sender] -= amount;

        // 调用 transfer 退回代币
        (bool success, ) = token.call(
            abi.encodeWithSignature(
                "transfer(address,uint256)",
                msg.sender,
                amount
            )
        );
        require(success, "Transfer failed");
    }
}
