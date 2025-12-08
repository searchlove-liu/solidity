// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.2.0) (proxy/ERC1967/ERC1967Proxy.sol)

// 当前使用版本是4,9.6
pragma solidity 0.8.1;

import {Proxy} from "@openzeppelin/contracts@4.9.6/proxy/Proxy.sol";
// import {ERC1967Utils} from "@openzeppelin/contracts@4.9.6/proxy/ERC1967/ERC1967Upgrade.sol";
// TODO: 当前4.9.6版本，ERC1967Upgrade为合约，但到后面版本升级为库。可以参考升级
import {ERC1967Upgrade} from "./openzeppelin_L/contracts/proxy/ERC1967/ERC1967Upgrade.sol";

/**
 * @dev This contract implements an upgradeable proxy. It is upgradeable because calls are delegated to an
 * implementation address that can be changed. This address is stored in storage in the location specified by
 * https://eips.ethereum.org/EIPS/eip-1967[ERC-1967], so that it doesn't conflict with the storage layout of the
 * implementation behind the proxy.
 */
contract ERC1967Proxy is Proxy , ERC1967Upgrade {
    /*
     * @dev Initializes the upgradeable proxy with an initial implementation specified by `implementation`.
     *
     * If `_data` is nonempty, it's used as data in a delegate call to `implementation`. This will typically be an
     * encoded function call, and allows initializing the storage of the proxy like a Solidity constructor.
     *
     * Requirements:
     *
     * - If `data` is empty, `msg.value` must be zero.
     */
    //  这个应是代理合约的构造函数，传入逻辑合约地址和调用函数的数据，_data应该是调用初始化函数
    // constructor(address implementation, bytes memory _data) payable {
    //     ERC1967Upgrade._upgradeToAndCall(implementation, _data,false);
    // }
    constructor() payable {
        // 初始化owner
        // 这里为什么需要加owner，因为一般proxy，在部署时就已经确定了逻辑合约，并执行了逻辑合约的初始化（定义了一个owner）。
        // 之后其他人（非owner）就无法通过代理来执行逻辑合约。
        // 但如果在不使用构造函数的情况下，就无法把逻辑合约地址传入代理合约中，也就无法在部署代理合约过程中，调用逻辑合约的初始化函数（定义一个owner），
        // 就会产生一个漏洞，在部署代理合约之后，攻击者立马获取代理合约，并初始化逻辑合约（定义一个owner），那么发布者就会失去对代理合约的所有权（数据存在代理合约中）。
        // 所以必须在构造函数中给代理合约初始化一个owner。
        // 如果使用OwnableUpgradeable进行初始化，逻辑合约内部同样使用了OwnableUpgradeable。逻辑合约地址数据存储在代理合约中，且OwnableUpgradeable内部使用了erc7201，
        // 那么最终两个使用同一个位置的数据（owner），虽然两者的owner确实是同一人。

        _setProyOwnableStorage();
    }

    struct ProxyOwnableStorage {
        address _owner;
        uint8 _initialized;
    }

    //keccak256(abi.encode(uint256(keccak256("openzeppelin.storage.ProxyOwnable")) - 1)) & ~bytes32(uint256(0xff)); 
    // 0x92cef8c4ccaa2a6db286f574c78bc46415e24fe9a533e0453d051ad93ca0dd00
    bytes32 private constant ProxyOwnableStorageLocation = 0x92cef8c4ccaa2a6db286f574c78bc46415e24fe9a533e0453d051ad93ca0dd00;

    function _getProxyOwnableStorageLocation() private pure returns(ProxyOwnableStorage storage $){
        assembly { $.slot := ProxyOwnableStorageLocation }
    }

    function _setProyOwnableStorage() private  {
        ProxyOwnableStorage storage $ = _getProxyOwnableStorageLocation();
        $._owner = msg.sender;
    }

    function _setInitialized() private{
        ProxyOwnableStorage storage $ = _getProxyOwnableStorageLocation();
        $._initialized = 1;
    }

    // 初始化一个逻辑合约，执行逻辑合约的初始化函数
    function InitProxy (address implementation, bytes memory _data) external onlyOwner initializer {
        _setInitialized();
        ERC1967Upgrade._upgradeToAndCall(implementation, _data,false);
    }

    modifier onlyOwner(){
        ProxyOwnableStorage storage $ = _getProxyOwnableStorageLocation();
        address owner = $._owner;
        require(owner == msg.sender,"Ownable: caller is not the owner");
        _;
    }

    modifier initializer(){
        ProxyOwnableStorage storage $ = _getProxyOwnableStorageLocation();
        require($._initialized < 1,"Initializable: contract is already initialized");
        _;
    }

    /*
     * @dev Returns the current implementation address.
     *
     * TIP: To get this value clients can read directly from the storage slot shown below (specified by ERC-1967) using
     * the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.
     * `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`
     */
    function _implementation() internal view virtual override returns (address) {
        return ERC1967Upgrade._getImplementation();
    }
}