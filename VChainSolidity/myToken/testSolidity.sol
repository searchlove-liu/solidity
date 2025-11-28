// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;


contract A {
    string public str;

    function setValue () public virtual {
        str = "A";
    }
}

contract B is A {
    function setValue() public virtual override{
        str = "B";
    }
}

contract C is A ,B {
    function setValue() public override(A,B) {
        super.setValue();
    }
}


