// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract example{  
    address public	InitSender;
    address public  managerAddress;
    bytes32  public name;
    uint256  public number;
    bytes32[] public namearray;
    mapping(uint256 => bytes32) public usmap;

    constructor(){
        InitSender  = msg.sender;
    }
    function setAddress(address addr) public {
        managerAddress=addr;
    }
    function setName(bytes32 _value) public {
        managerAddress=msg.sender; //增加一行任意指令后，name 赋值可以正常完成
        name=_value;
    }
    function setNumber(uint256 _number) public {
        managerAddress=msg.sender; //增加一行任意指令后，number 赋值可以正常完成
        number=_number;
    }
    function setArray(bytes32 _value) public  returns(uint256){
        namearray.push(_value);
        return namearray.length;
    }
    function setMap(uint256 k,bytes32 s) public  returns(bytes32){
        managerAddress=msg.sender; //增加一行任意指令后，usmap 赋值可以正常完成
        usmap[k]=s;
        return usmap[k];
    }
}