// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./common.sol";

interface ExportI{
    function ExportSetToken(address _parent)external;
    function ExportRec(address sender,
                        bytes32 txid,           
                        bytes32 processid,      
                        address chainAddr,           
                        address conaddr,        //Contract address
                        bytes32 tokenname,        
                        bytes32 tokenSymbol,     
                        uint256 amount,       
                        uint256 timeval,
                        uint8   status)external;
    function SetRecStatus(bytes32 txid,bytes32 processid,uint8 status)external;
    function QueryPayouts(uint256 begin ,uint256 _len)view external returns(address[]memory,address[]memory,
                                                                            bytes32[]memory,uint8[]memory);
    function QueryPayoutRecno(uint256 recno)view external returns( bool,address,bytes32,bytes32,address,address,
                                                                bytes32,bytes32,uint256,uint256,uint8);
}
/*
pay out process stuats
*/
contract Export is common{

    address         public	    InitSender;
    address         public      parent;

    ExportItem[]  public        exportlist;
    mapping(bytes32 => MapPos)  extportMap;		                   

   
    constructor(){
        InitSender  = msg.sender;
        parent      = msg.sender;
    }
    
    function ExportSetToken (address _parent)public{
        require(InitSender==parent,"MySetToken Access denied"); 

        parent=_parent;
    }
    function ExportRec(address sender,
                        bytes32 txid,   
                        bytes32 processid,           
                        address remoteconaddr,           
                        address conaddr,        //Contract address
                        bytes32 tokenname,        
                        bytes32 tokenSymbol,     
                        uint256 amount,       
                        uint256 timeval,
                        uint8   status)public{
        require(parent==msg.sender,"ImportRec Access denied");
        require(!extportMap[txid].isVaild,"ImportRec Access denied exist");                    
        exportlist.push(ExportItem(sender,txid,processid,remoteconaddr,conaddr,tokenname,tokenSymbol,amount,timeval,status));
        extportMap[txid].isVaild=true;
        extportMap[txid].pos=exportlist.length-1;
    }
    function SetRecStatus(bytes32 txid,bytes32 processid,uint8   status)public{
        require(parent==msg.sender,"SetRecStatus Access denied");
        require(extportMap[txid].isVaild,"SetRecStatus Access denied too");
        ExportItem storage item=exportlist[extportMap[txid].pos];
        item.processid=processid;
        item.status=status;
    }

    function QueryPayouts(uint256 begin ,uint256 _len)view public returns(address[]memory,address[]memory,address[]memory,
                                                                            bytes32[]memory,uint8[]memory){
        uint l=exportlist.length;
        uint end=begin+_len;
        require(l>=begin,"QueryPayouts denied");
        if(end>l){
            end=l;
        }
        address[] memory result_remoteAddr=new address[](end-begin);
        address[] memory result_sender=new address[](end-begin);
        address[] memory result_conaddr=new address[](end-begin);
        bytes32[] memory result_processid=new bytes32[](end-begin);
        uint8[] memory result_status=new uint8[](end-begin);
        
        uint count=0;
        for(uint i=begin;i<end;i++){
            result_remoteAddr[count]=exportlist[i].remoteconaddr;
            result_sender[count]=exportlist[i].sender;
            result_conaddr[count]=exportlist[i].conaddr;
            result_processid[count]=exportlist[i].processid;
            result_status[count]=exportlist[i].status;
            
            count++;
        }
	    return (result_remoteAddr,result_sender,result_conaddr,result_processid,result_status);        
    }

    function QueryPayoutRecno(uint256 recno)view public returns( bool,address,bytes32,bytes32,address,address,
                                                                bytes32,bytes32,uint256,uint256,uint8){
        uint l=exportlist.length;
        if(l<=recno){
            return (false,exportlist[0].sender,exportlist[0].txid,exportlist[0].processid,exportlist[0].remoteconaddr,
                             exportlist[0].conaddr,exportlist[0].tokenname,exportlist[0].tokenSymbol,exportlist[0].amount,
                             exportlist[0].timeval,exportlist[0].status);
        }
        l=recno;
        return (true,exportlist[l].sender,exportlist[l].txid,exportlist[l].processid,exportlist[l].remoteconaddr,
                             exportlist[l].conaddr,exportlist[l].tokenname,exportlist[l].tokenSymbol,exportlist[l].amount,
                             exportlist[l].timeval,exportlist[l].status);                                                        
    }
        
}