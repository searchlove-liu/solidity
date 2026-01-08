// SPDX-License-Identifier:MIT

pragma solidity ^0.8.1;

/***
 * @dev:测试删除map数据消耗的gas
 */

contract testGasUsed {
    mapping(uint256 => uint256) public NFTDeadline;

    // 测试两次，第一次删除，第二次不删除，查看消耗gas
    function pushData(uint256 _key, uint256 _value, bool _deleteData) public {
        NFTDeadline[_key] = _value;
        if (_deleteData) {
            deleteData(_key);
        }
    }

    function deleteData(uint256 _key) internal {
        delete NFTDeadline[_key];
    }
}
