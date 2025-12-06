// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1; 

contract addressType {
    function isContract (address _addr)external view returns(bool){
        return _addr.code.length > 0;
    }
}