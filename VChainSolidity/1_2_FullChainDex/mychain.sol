// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./common.sol";
import "./mytoken.sol";

contract MyChain is common{
    address         public	    InitSender;
    address         public      ploatCoin;      
    MyTokenI        public      myCoin;
    
    address         public      setRobotAddr;    
    CoinItem[]   public         coinlist;
    mapping(address => MapPos)  coinMap;		//coin index


    mapping (address => mapping (address => uint256)) public allowed;
    constructor(){
        InitSender  = msg.sender;
        robot       = msg.sender;
        setRobotAddr= msg.sender;
    }

    //set up by mainnet  robot account
    function SetChain(
                    address robotaddr,
                    address selfaddr,
                    uint256 initdecimals,
                    bytes32 tokenName,
                    bytes32 tokenSymbol,
                    address exportaddr,
                    address importaddr)public returns(bool){
        require(setRobotAddr==msg.sender,"SetRobot Access denied");
        robot=robotaddr;

        ploatCoin=selfaddr;
        myCoin=MyTokenI(ploatCoin);
        myCoin.MySetToken(initdecimals,tokenName,tokenSymbol,ploatCoin,exportaddr,importaddr);

        coinlist.push(CoinItem(tokenSymbol,ploatCoin,tokenName,tokenSymbol,0));
        coinMap[ploatCoin].isVaild=true;
        coinMap[ploatCoin].pos=coinlist.length-1;
        return true;
    }
    /*
        Early stage runing, set to off after stable operation
    */
    function SetRobot(address robotaddr,address setaddr)public returns(bool){
        require(setRobotAddr==msg.sender,"SetRobot Access denied");
        setRobotAddr=setaddr;
        robot=robotaddr;
        return true;
    }
    //contract deploy set up
    function SetCoin(   bytes32 remoteconaddr, 
                        address conaddr, 
                        uint256 initdecimals,
                        bytes32 tokenName,
                        bytes32 tokenSymbol,
                        address exportaddr,
                        address importaddr)public returns(bool){
        require(InitSender==msg.sender,"UpCoin Access denied");
        require(!coinMap[conaddr].isVaild,"UpCoin Access denied too");

        myCoin=MyTokenI(conaddr);
        myCoin.MySetToken(initdecimals,tokenName,tokenSymbol,conaddr,exportaddr,importaddr);

        coinlist.push(CoinItem(remoteconaddr,conaddr,tokenName,tokenSymbol,0));
        coinMap[conaddr].isVaild=true;
        coinMap[conaddr].pos=coinlist.length-1;
        return true;
    }
    //contract deploy set up
    function DownCoin(address conaddr)public returns(bool){
        CoinItem storage coin;
        uint256   pos;
        require(InitSender==msg.sender,"DownCoin Access denied");
        require(coinMap[conaddr].isVaild,"DownCoin Access denied too");
        pos=coinMap[conaddr].pos;
        coin=coinlist[pos];
        
        myCoin=MyTokenI(coin.conaddr);
        require(myCoin.totalSupply()==0,"DownCoin Access denied totalSupply is avail");

        delete coinMap[conaddr];
        if(pos==(coinlist.length-1)){
		  coinlist.pop();
		}else{
		  coinlist[pos]=coinlist[coinlist.length-1];
		  coinMap[coinlist[coinlist.length-1].conaddr].pos=pos;
		  coinlist.pop();
		}
        return true;
    }
    // robot account set up Map Assets
    function MapAssets(address income,address conaddr,uint256 amount,bytes32 txid)public returns(bool){
        CoinItem storage coin;
        uint256   pos;
        require(robot==msg.sender,"MapAssets Access denied");   
       
        require(coinMap[conaddr].isVaild,"MapAssets Access denied rec is null");
        pos=coinMap[conaddr].pos;
        coin=coinlist[pos];  
        myCoin=MyTokenI(coin.conaddr);
        return myCoin.MapAssets(conaddr,income,amount,txid);
        
    }
    function MapAssetsAvail(address conaddr,bytes32 txid)public returns(bool){
        myCoin=MyTokenI(conaddr);
        return myCoin.MapAssetsAvail(txid);
    }
    //Payouts
    function Payouts(address conaddr,address sender,uint256 amount,bytes32 txid)public returns(bool){
        CoinItem storage coin;
        uint256   pos;
        require(robot==msg.sender,"MapAssets Access denied");  
        
        require(coinMap[conaddr].isVaild,"MapAssets Access denied rec is null");
        pos=coinMap[conaddr].pos;
        coin=coinlist[pos];  
        myCoin=MyTokenI(coin.conaddr);
        return myCoin.Payouts(robot,conaddr,sender,amount,txid);
    }
    
    //show the coins list of chain
    function QueryCoins(uint256 begin ,uint256 _len)view  public returns(bytes32[]memory,address[]memory,bytes32[]memory,bytes32[]memory){
        
        uint l=coinlist.length;
        uint end=begin+_len;
        require(l>=begin,"access denied");
        if(end>l){
            end=l;
        }
        bytes32[] memory result_remoteconaddr=new bytes32[](end-begin);
        address[] memory result_conaddr=new address[](end-begin);
        bytes32[] memory result_tokenname=new bytes32[](end-begin);  
        bytes32[] memory result_tokenSymbol=new bytes32[](end-begin);  
    

        uint count=0;
        for(uint i=begin;i<end;i++){
            result_remoteconaddr[count]=coinlist[i].remoteconaddr;
            result_conaddr[count]=coinlist[i].conaddr;
            result_tokenname[count]=coinlist[i].tokenname;
            result_tokenSymbol[count]=coinlist[i].tokenSymbol;
            
            count++;
        }
        return (result_remoteconaddr,result_conaddr,result_tokenname,result_tokenSymbol);
    }
    function GetCoins(address owner,address conaddr) public returns(bool,bytes32,address,bytes32,bytes32,uint256,uint256,uint256){
        if (!coinMap[conaddr].isVaild)return (false,coinlist[0].tokenSymbol,coinlist[0].conaddr,coinlist[0].tokenname,
                            coinlist[0].tokenSymbol,coinlist[0].amount,0,0);
        MapPos storage  item=coinMap[conaddr];  
        myCoin=MyTokenI(coinlist[item.pos].conaddr);
        uint256 amount=myCoin.balanceOf(owner);
        uint256 total=myCoin.totalSupply();
        uint256 decimals=myCoin.decimals();
        return (true,coinlist[item.pos].remoteconaddr,coinlist[item.pos].conaddr,coinlist[item.pos].tokenname,
                            coinlist[item.pos].tokenSymbol,amount,total,decimals);
    }
     function PayoutsAvail(address conaddr,address findaddr,bytes32 chainsymbol,bytes32 coinsymbol,uint256 amount)public returns(bool){
        address addr=conaddr;
        if (chainsymbol==coinsymbol){
            addr=ploatCoin;
        }
        myCoin=MyTokenI(addr);
        uint256 _amount=myCoin.balanceOf(findaddr);
        if (_amount<amount){
            return false;
        }
        return true;
     }
}     