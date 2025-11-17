pragma solidity ^0.8.4;
// ContextMixin 是一个非常小的抽象合约，用来在支持"meta-transactions"（由中继/代理替用户发送交易）场景下，
// 恢复原始签名者地址 —— 即提供一个 msgSender() 方法，
// 当合约自身作为中继转发调用时能正确返回原始发起者地址。
//
// 核心原理：
// 元交易场景中，用户无法直接发起交易（如在 Layer2、relayer 模型等）。
// 解决方案是：
// 1. 用户离线签名要执行的函数调用数据
// 2. 转发器（relayer）将该数据转发给合约
// 3. 合约需要能从转发的数据中恢复"真实用户"的身份
//
// ContextMixin 支持的转发模式是"自我转发"：
// - 转发器调用 executeMetaTx(userData, signature) [在NativeMetaTransaction.sol中定义]
// - executeMetaTx 验证签名后，通过 address(this).call(originalData + userAddress) 转发
// - 当原始函数执行时，msg.sender == address(this)（因为是通过 call 调用自己）
// - ContextMixin.msgSender() 检测到这个条件，从 calldata 末尾提取真实用户地址
abstract contract ContextMixin {
    function msgSender() internal view returns (address payable sender) {
        // 即当前调用来自合约自身
        // 这意味着合约方法被另一个合约的 delegatecall/forwarding 机制或自身代理调用
        // （常见于 EIP‑2771 或 OpenSea 的 meta‑tx 转发模式）；
        // 查看NativeMetaTransaction.sol中的executeMetaTransaction
        if (msg.sender == address(this)) {
            // ==================== Calldata 结构 ====================
            // msg.data = 函数选择器(Function Selector) + 编码后的参数(ABI-encoded arguments)
            //
            // 例如调用 transfer(address to, uint256 amount) 且末尾追加用户地址 (0xABCD...)：
            // msg.data = [selector(4字节)] [to(32字节)] [amount(32字节)] [userAddr(20字节)]
            //          = 总共 88 字节
            //
            // 在元交易模式中，转发器在调用时会这样编码：
            // bytes memory fullData = abi.encodePacked(originalFunctionCall, originalUser);
            // address(this).call(fullData);
            //
            // 当 transfer() 被 call 执行时，msg.data 就包含了上述完整数据。
            // 我们要做的就是从末尾提取那 20 字节的用户地址。

            // msg.sig 是 msg.data 的前 4 个字节，即函数选择器。
            // 当你使用 address.call{value: msg.value}(msg.data) 时，你实际上是在转发当前收到的调用。
            /*
solidity
contract Forwarder {
    address public target;

    function setTarget(address _target) public {
        target = _target;
    }

    fallback() external payable {
        (bool success, ) = target.call{value: msg.value}(msg.data);
        require(success, "Forward failed");
    }
}
在这个例子中，任何发送到 Forwarder 合约的调用（包括函数和以太币）都会被原封不动地转发给 target 合约。这是代理合约和元交易中继器的基础。
*/
            bytes memory array = msg.data;
            uint256 index = msg.data.length;
            assembly {
                // Load the 32 bytes word from memory with the address on the lower 20 bytes, and mask those.
                sender := and(
                    // | ... | 数组长度 (32 bytes) | 数组数据槽0 (32 bytes) | 数组数据槽1 (32 bytes) | ... |
                    // ^                  ^
                    // |                  |
                    // _array        _array + 0x20
                    // (指向长度)       (指向数据开始)
                    // 所以，直接使用 _array 会读到数组的长度。
                    // 要读到真正的数据，我们需要跳过存储长度的 32 字节
                    // 这里的 index 是一个变量。它计算的是从数组数据开始位置起的字节偏移量。
                    // add(_array, index) 计算出的最终地址是：数组数据起始地址 + 字节偏移量。
                    // mload(address) 是内联汇编中的一个指令，意思是 Memory LOAD。
                    // 它的功能是：从给定的 address 开始，读取接下来的 32 字节，并将其作为一个 bytes32（或 uint256）类型的值返回。
                    mload(add(array, index)),
                    // 掩码：0xffffffffffffffffffffffffffffffffffffffff = 20 字节全 1（地址长度）
                    // 这个掩码会保留低 20 字节（地址部分），把高位清零
                    // 例如：读到的 32 字节是 0x000000...000[20字节地址]
                    //       and 后得到：0x000000...000[20字节地址]（只保留地址部分）
                    0xffffffffffffffffffffffffffffffffffffffff
                )
            }
        } else {
            sender = payable(msg.sender);
        }
        return sender;
    }
}
