// SPDX-License-Identifier: MIT
// 严格使用编译器版本：0.8.1
// 下面代码如果编译器版本不是0.8.1，会报错
pragma solidity ^0.8.1; 

contract sampleContract {
    function point() public pure  returns(bytes32){
        return keccak256(abi.encode(uint256(keccak256("openzeppelin.storage.ProxyOwnable")) - 1)) & ~bytes32(uint256(0xff));
    }
}

contract A {
    function a1() public pure virtual returns(string memory){
        return "a";
    }

    function a2() public pure virtual returns(string memory) {
        return a1();
    }
}

contract B is A{
    function a1() public override pure returns(string memory){
        return "b";
    }
}