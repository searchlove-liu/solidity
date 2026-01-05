// SPDX-License-Identifier:MIT

pragma solidity ^0.8.1;

contract EventEmitter {
    uint256 private counter;

    // 声明事件
    event ValueChanged(
        address indexed changer,
        uint256 indexed oldValue,
        uint256 newValue
    );

    event PaymentReceived(
        address indexed payer,
        uint256 amount,
        string message
    );

    event MultiEvent(uint256 indexed id, address indexed sender, bytes data);

    // 触发事件
    function setValue(uint256 newValue) public {
        uint256 oldValue = counter;
        counter = newValue;

        // 触发事件
        emit ValueChanged(msg.sender, oldValue, newValue);
    }

    function pay(string memory message) public payable {
        require(msg.value > 0, "Must send ETH");

        // 带 value 的事件
        emit PaymentReceived(msg.sender, msg.value, message);
    }

    function emitMultiple() public {
        // 一次可以触发多个事件
        emit ValueChanged(msg.sender, 0, 1);
        emit PaymentReceived(msg.sender, 1 ether, "test");
        emit MultiEvent(1, msg.sender, "0x1234");
    }
}
