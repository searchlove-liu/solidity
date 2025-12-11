// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./common.sol";
import "./mychain.sol";

contract FullChain  is common{
    address public	                InitSender;
    address public                  Propose;

 
    ChainItem[]  public         chainlist;
    mapping(bytes32 => MapPos)  chainMap;		                    //chain index
   

    constructor(){
        InitSender  = msg.sender;
        Propose     = msg.sender;
    }
    function  SetTrc100Addr(address propose)public returns(address){
        require(InitSender==Propose,"SetTrc100Addr Access denied");
        Propose=propose;
        return Propose;
    }
    //this up chain by Dao control
    function UpChain(address chainaddr,bytes32 name,bytes32 symbol)public returns(uint256){
        require(msg.sender==Propose,"AddChain Access denied");
        MapPos storage  item=chainMap[symbol];    
        require(!item.isVaild,"AddChain conaddr exist and denied");
        chainlist.push(ChainItem(chainaddr,name,symbol));
        chainMap[symbol].isVaild=true;
        chainMap[symbol].pos=chainlist.length-1;
        return 0;
    }

    //this down chain by Dao control
    function DownChain(bytes32 symbol)public returns(bool){
        require(msg.sender==Propose,"DelChain Access denied");
        MapPos storage  item=chainMap[symbol];    
        require(item.isVaild,"AddChain conaddr exist and denied");
        uint256   pos;
        pos=chainMap[symbol].pos;
        delete chainMap[symbol];
        if(pos==(chainlist.length-1)){
		  chainlist.pop();
		}else{
		  chainlist[pos]=chainlist[chainlist.length-1];
		  chainMap[chainlist[chainlist.length-1].tokenSymbol].pos=pos;
		  chainlist.pop();
		}
        return true;
    }

    //Displays a list of valid chains
    function QueryChain(uint256 begin ,uint256 _len)view public returns(address[]memory,bytes32[]memory,bytes32[]memory){
        uint l=chainlist.length;
        uint end=begin+_len;
        require(l>=begin,"access denied");
        if(end>l){
            end=l;
        }
        address[] memory result_addr=new address[](end-begin);
        bytes32[] memory result_name=new bytes32[](end-begin);
        bytes32[] memory result_symbol=new bytes32[](end-begin);
        uint count=0;
        for(uint i=begin;i<end;i++){
            result_addr[count]=chainlist[i].conaddr;
            result_name[count]=chainlist[i].tokenname;
            result_symbol[count]=chainlist[i].tokenSymbol;
            count++;
        }
		return (result_addr,result_name,result_symbol);
    }
}