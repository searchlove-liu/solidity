// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./BaseToken.sol";
import "./import.sol";
import "./export.sol";

interface MyTokenI {
    function    balanceOf(address _owner) external returns (uint256);
    function    transfer(address _to, uint256 _value)external returns (bool);
    function    transferFrom(address _from, address _to, uint256 _value)external returns (bool);
    function    approve(address _spender, uint256 _value)external returns (bool);
    function    allowance(address _owner, address _spender) external returns (uint256);
    event       Transfer(address indexed _from, address indexed _to, uint256 _value);
    event       Approval(address indexed _owner, address indexed _spender, uint256 _value);

    function    MySetToken (
                        uint256 initdecimals,
                        bytes32 tokenName,
                        bytes32 tokenSymbol,
                        address _selfAddr,
                        address exportaddr,
                        address importaddr) external;
   
    function    MapAssets(address remoteaddr,address income,uint256 amount,bytes32 txid)external returns(bool);
    function    MapAssetsAvail(bytes32 txid)external returns(bool);
    function    Payouts(address _robot,address remoteaddr,address sender,uint256 amount,bytes32 txid)external returns(bool);
    function    totalSupply() external view returns (uint256);
    function    decimals() external view returns (uint256);

    function    MySetTokenDebug(address importaddr,uint256 no)external returns(address);
    
}
 
//the coins for full chain
contract MyToken is BaseToken{
    address public	                robot;
    address public	                _InitSender;
    address public                  chainAddr;
    address public                  selfAddr;
    address public                  exportAddr;
    address public                  importAddr;
    ImportI                         importImpl;
    ExportI                         exportImpl;

    constructor(){
        _InitSender  = msg.sender;
        robot       = msg.sender;
    }

    //coin init
    function MySetToken (
        uint256 initdecimals,
        bytes32 tokenName,
        bytes32 tokenSymbol,
        address _selfAddr,
        address exportaddr,
        address importaddr)public
    {
        // require(_InitSender==robot,"MySetToken Access denied");

        exportAddr=exportaddr;
        importAddr=importaddr;
        chainAddr=msg.sender;
        selfAddr=_selfAddr;
        SetToken(0,initdecimals,tokenName,tokenSymbol);

        importImpl=ImportI(importAddr);
        importImpl.ImportSetToken(selfAddr);
        exportImpl=ExportI(exportAddr);
        exportImpl.ExportSetToken(selfAddr);
    }
    function QueryAnyAddress()public view returns(address,address,address){
        return (selfAddr,exportAddr,importAddr);
    }
    // chain contract set up Map Assets
    function MapAssets(address remoteaddr,address income,uint256 amount,bytes32 txid)public returns(bool){
        require(chainAddr==msg.sender,"MapAssets Access denied");   
    
        importImpl=ImportI(importAddr);
        importImpl.ImportRec(income,txid,remoteaddr,selfAddr,name,symbol,amount,block.timestamp);

        balances[income]+=amount;
        _totalSupply+=amount;
        return true;
    }
    function MapAssetsAvail(bytes32 txid)public returns(bool){
        importImpl=ImportI(importAddr);
        return importImpl.MapAssetsAvail(txid);
    }
    // chain contract set up Payouts
    function Payouts(address _robot,address remoteconaddr,address sender,uint256 amount,bytes32 txid)public returns(bool){
        require(chainAddr==msg.sender,"Payouts Access denied");
        require( balances[sender]>=amount,"Payouts Access denied amount low");
      
        robot=_robot;
        exportImpl=ExportI(exportAddr);
        exportImpl.ExportRec(sender,txid,txid,remoteconaddr,selfAddr,name,symbol,amount,block.timestamp,0);

        balances[sender]-=amount;
        _totalSupply-=amount;
        return true;
    }
    //robot account set up
    function SetRecStatus(bytes32 txid,bytes32 processid,uint8 status)public{
        require(robot==msg.sender,"SetRecStatus Access denied"); 
        exportImpl=ExportI(exportAddr);
        exportImpl.SetRecStatus(txid,processid,status);
    }

    //Displays a list of payouts
    function QueryPayouts(uint256 begin ,uint256 _len)public returns(address[]memory,address[]memory,
                                                                bytes32[]memory,uint8[]memory){
                                                                
        exportImpl=ExportI(exportAddr);
        return exportImpl.QueryPayouts(begin,_len);
    } 
    function QueryPayoutRecno(uint256 recno)public returns( bool,address,bytes32,bytes32,address,address,
                                                                bytes32,bytes32,uint256,uint256,uint8){
        exportImpl=ExportI(exportAddr);
        return exportImpl.QueryPayoutRecno(recno);                                                            

    }

    //Displays a list of map assets
    function QueryMapassets(uint256 begin ,uint256 _len) public returns(address[]memory,bytes32[]memory,    
                                                        address[]memory,bytes32[]memory,uint256[]memory){
                                                            
        importImpl=ImportI(importAddr);
        return importImpl.QueryMapassets(begin,_len);                                                        
    }
    function QueryMapassetsRecno(uint256 recno)public returns( bool,address,bytes32,address,address,
                                                                bytes32,bytes32,uint256,uint256){
        importImpl=ImportI(importAddr);
        return importImpl.QueryMapassetsRecno(recno);                                                            

    }
}    