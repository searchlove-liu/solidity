// SPDX-License-Identifier: MIT
// 严格使用编译器版本：0.8.1
// 下面代码如果编译器版本不是0.8.1，会报错
pragma solidity 0.8.1; 

contract sampleContract {
    bytes32 name = bytes32("nihao");
    address public  managerAddress;

    function getValue() public view returns(bytes32){
        return name;
    }

    function setValue(bytes32 _value)public {
        managerAddress = msg.sender;
        name = _value;
    }
}

// 查看他们代码，看bytes设置。