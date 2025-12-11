// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./common.sol";

interface ImportI{
    function ImportSetToken(address _parent)external returns(bool);
    function MapAssetsAvail(bytes32 txid)external returns(bool);
    function ImportRec(address sender,
                        bytes32 txid,           
                        address chainAddr,           
                        address conaddr,        //Contract address
                        bytes32 tokenname,        
                        bytes32 tokenSymbol,     
                        uint256 amount,       
                        uint256 timeval)external;
    function QueryMapassets(uint256 begin ,uint256 _len)view external returns(address[]memory,bytes32[]memory,    
                                                        address[]memory,bytes32[]memory,uint256[]memory);
    function QueryMapassetsRecno(uint256 recno)view external returns( bool,address,bytes32,address,address,
                                                                bytes32,bytes32,uint256,uint256);
}

/*
map assets successful to save successful receipts
*/
contract Import is common{
    address         public	    InitSender;
    address         public      parent;

    ImportItem[]    public      importlist;
    mapping (bytes32 => MapPos) importMap;  
    constructor(){
        InitSender  = msg.sender;
        parent      = msg.sender;
    }
    
    function ImportSetToken(address _parent)public returns(bool){
        require(InitSender==parent,"MySetToken Access denied");

        parent=_parent;
        return true;
    }

    function ImportRec(address income,
                        bytes32 txid,           
                        address remoteconaddr,           
                        address conaddr,        //Contract address
                        bytes32 tokenname,        
                        bytes32 tokenSymbol,     
                        uint256 amount,       
                        uint256 timeval)public{
        require(parent==msg.sender,"ImportRec Access denied");
        require(!importMap[txid].isVaild,"ImportRec Access denied exist");                    
        importlist.push(ImportItem(income,txid,remoteconaddr,conaddr,tokenname,tokenSymbol,amount,timeval));

        importMap[txid].isVaild=true;
        importMap[txid].pos=importlist.length-1;
    }
    function MapAssetsAvail(bytes32 txid)public view returns(bool){
        return importMap[txid].isVaild;
    }
    function QueryMapassets(uint256 begin ,uint256 _len)view public returns(address[]memory,bytes32[]memory,    
                                                        address[]memory,bytes32[]memory,uint256[]memory){
                                                       
        uint l=importlist.length;
        uint end=begin+_len;
        require(l>=begin,"access denied");
        if(end>l){
            end=l;
        }
        address[] memory result_sender=new address[](end-begin);
        bytes32[] memory result_txid=new bytes32[](end-begin);
        address[] memory result_conaddr=new address[](end-begin);
        bytes32[] memory result_tokenSymbol=new bytes32[](end-begin);
        uint256[] memory result_timeval=new uint256[](end-begin);

        uint count=0;
        for(uint i=begin;i<end;i++){
            result_sender[count]=importlist[i].income;
            result_txid[count]=importlist[i].txid;
            result_conaddr[count]=importlist[i].conaddr;
            result_tokenSymbol[count]=importlist[i].tokenSymbol;
            result_timeval[count]=importlist[i].timeval;
            
            count++;
        }
		return (result_sender,result_txid,result_conaddr,result_tokenSymbol,result_timeval);                                    
    }
    function QueryMapassetsRecno(uint256 recno)view public returns( bool,address,bytes32,address,address,
                                                                bytes32,bytes32,uint256,uint256){
        uint l=importlist.length;
        if(l<=recno){
            return (false,importlist[0].income,importlist[0].txid,importlist[0].remoteconaddr,
                             importlist[0].conaddr,importlist[0].tokenname,importlist[0].tokenSymbol,importlist[0].amount,
                             importlist[0].timeval);
        }
        l=recno;
        return (true,importlist[l].income,importlist[l].txid,importlist[l].remoteconaddr,
                             importlist[l].conaddr,importlist[l].tokenname,importlist[l].tokenSymbol,importlist[l].amount,
                             importlist[l].timeval);
    }
}