// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.5.0
pragma solidity 0.8.1;

// import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable@4.9.6/access/OwnableUpgradeable.sol";
import {OwnableUpgradeable} from "./openzeppelin_L/contracts-upgradeable/access/OwnableUpgradeable.sol";
// import {UUPSUpgradeable} from "@openzeppelin/contracts@4.9.6/proxy/utils/UUPSUpgradeable.sol";
import {UUPSUpgradeable} from "./openzeppelin_L/contracts/proxy/utils/UUPSUpgradeable.sol";

contract MyToken is OwnableUpgradeable, UUPSUpgradeable {
    /// @custom:storage-location erc7201:myProject.MyToken
    struct MyTokenStorage {
        string  _tokenName;
        uint256 _nextTokenId;
    }

    // keccak256(abi.encode(uint256(keccak256("myProject.MyToken")) - 1)) & ~bytes32(uint256(0xff))
    bytes32 private constant MYTOKEN_STORAGE_LOCATION = 0xfbb7c9e4123fcf4b1aad53c70358f7b1c1d7cf28092f5178b53e55db565e9200;

    // @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        // 禁止其它人直接调用这个逻辑合约进行初始化。
        _disableInitializers();
    }

    // TODO:后期改为可设置owner，在proxy部署时，传入这个合约的地址和执行这个初始化函数
    // function initialize(address initialOwner) public initializer {
    function initialize() public initializer {
        __Ownable_init();
    }

    function setValue() public {
        MyTokenStorage storage $ = _getMyTokenStorage();
        $._nextTokenId ++ ;
    }

    function getTokenId() public pure returns(uint256){
        MyTokenStorage memory $ = _getMyTokenStorage();
        return $._nextTokenId;
    }

    function getTokenName() public pure returns(string memory){
        MyTokenStorage memory $ = _getMyTokenStorage();
        return $._tokenName;
    }

    function _getMyTokenStorage() private pure returns (MyTokenStorage storage $) {
        assembly { $.slot := MYTOKEN_STORAGE_LOCATION }
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyOwner
    {}
}