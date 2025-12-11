// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract common{
    address   public robot;
    
    struct MapPos{
		uint pos;
		bool isVaild;
    }

    struct ChainItem {
        address conaddr;         //Contract address 
		bytes32 tokenname;         
        bytes32 tokenSymbol;   
    }
   
    struct CoinItem {
        bytes32 remoteconaddr;    
        address conaddr;        //Contract address
		bytes32 tokenname;         
        bytes32 tokenSymbol;
        uint256 amount;             
    }
    /*
   the records of exporting and importing is over one day to removed soon
    */
    struct ImportItem {
        address income;         //trans account address
        bytes32 txid;           //Transaction Unique ID
        address remoteconaddr;      
        address conaddr;        //Contract address
		bytes32 tokenname;         
        bytes32 tokenSymbol;     
        uint256 amount;         
        uint256 timeval;        
    }
    struct ExportItem {
        address sender;         //trans account address
        bytes32 txid;           //Transaction Unique ID
        bytes32 processid;      //Declare that the node is being processed to avoid repeating conflicting operations
        address remoteconaddr;      
        address conaddr;        //Contract address
		bytes32 tokenname;         
        bytes32 tokenSymbol;     
        uint256 amount;         
        uint256 timeval;        
        uint8   status;         //0 new 1 fail 2 successful
    }
    constructor(){
	}
    

}