// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.2.0) (proxy/ERC1967/ERC1967Proxy.sol)
// 0.8.2版本修复了0.8.1中存在的三个具体Bug，这些Bug都可能导致合约在特定情况下行为异常：
//  **Yul优化器错误**：优化器在对涉及`keccak256`哈希计算和常量的代码进行某些重组时，可能会生成**错误的字节码**。
//  （在进行合约升级时，需要用到keccak256，计算数据存储位置，所以erc1967代码中都使用0.8.2版本及以上）

pragma solidity ^0.8.22;

import {Proxy} from "@openzeppelin/contracts@5.5.0/proxy/Proxy.sol";
//注意这个版本下的ERC1967Utils是库，不是合约，所以下面不需要继承
import {
    ERC1967Utils
} from "@openzeppelin/contracts@5.5.0/proxy/ERC1967/ERC1967Utils.sol";

/**
 * @dev This contract implements an upgradeable proxy. It is upgradeable because calls are delegated to an
 * implementation address that can be changed. This address is stored in storage in the location specified by
 * https://eips.ethereum.org/EIPS/eip-1967[ERC-1967], so that it doesn't conflict with the storage layout of the
 * implementation behind the proxy.
 */
contract ERC1967Proxy is Proxy {
    /**
     * @dev Initializes the upgradeable proxy with an initial implementation specified by `implementation`.
     *
     * If `_data` is nonempty, it's used as data in a delegate call to `implementation`. This will typically be an
     * encoded function call, and allows initializing the storage of the proxy like a Solidity constructor.
     *
     * Requirements:
     *
     * - If `data` is empty, `msg.value` must be zero.
     */
    // 这个应是代理合约的构造函数，传入逻辑合约地址和调用函数的数据，_data应该为调用初始化函数，给合约设置owner
    constructor(address implementation, bytes memory _data) payable {
        ERC1967Utils.upgradeToAndCall(implementation, _data);
    }

    /**
     * @dev Returns the current implementation address.
     *
     * TIP: To get this value clients can read directly from the storage slot shown below (specified by ERC-1967) using
     * the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.
     * `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`
     */
    function _implementation()
        internal
        view
        virtual
        override
        returns (address)
    {
        return ERC1967Utils.getImplementation();
    }
}
