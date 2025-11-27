// SPDX-License-Identifier: MIT
// 严格使用编译器版本：0.8.1
// 下面代码如果编译器版本不是0.8.1，会报错
pragma solidity 0.8.1; 

contract sampleContract {
    uint256 number = 100;

    function getValue() public view returns(uint256){
        return number;
    }

    function setValue(uint256 _value)public {
        number-=number;
        number= _value;
    }
}