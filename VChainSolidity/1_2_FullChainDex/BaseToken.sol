// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

/*  compatible ERC 20 token */
interface Token {
    function    balanceOf(address _owner) external returns (uint256);
    function    transfer(address _to, uint256 _value)external returns (bool);
    function    transferFrom(address _from, address _to, uint256 _value)external returns (bool);
    function    approve(address _spender, uint256 _value)external returns (bool);
    function    allowance(address _owner, address _spender) external returns (uint256);
    event       Transfer(address indexed _from, address indexed _to, uint256 _value);
    event       Approval(address indexed _owner, address indexed _spender, uint256 _value);
}
 
 
contract BaseToken{
    
    address public	                InitSender;
    mapping (address => uint256)    public balances;
    mapping (address => mapping (address => uint256)) public allowed;

    bytes32 public                  name;
    bytes32 public                  symbol;
    uint256 public                  _decimals;
    uint256 public                  _totalSupply;

    constructor(){
        InitSender = msg.sender;
        _totalSupply=0;
        _decimals=0;
       
	}
    function SetToken (
        uint256 initialSupply,
        uint256 initdecimals,
        bytes32 tokenName,
        bytes32 tokenSymbol
        ) 
        public 
    {
        require(_totalSupply==0,"SetToken Access denied");

        _decimals=initdecimals;
        _totalSupply = initialSupply * 10 * _decimals; 
        balances[InitSender] = _totalSupply;
        
        name = tokenName;
        symbol = tokenSymbol;

    }
    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }
    function decimals() public view returns (uint256) {
        return _decimals;
    }                      
    
    function transfer(address _to, uint256 _value)public returns (bool) {
        if (balances[msg.sender] >= _value && _value > 0) {
            balances[msg.sender] -= _value;
            balances[_to] += _value;
            emit Transfer(msg.sender, _to, _value);
            return true;
        } else {
             require(_totalSupply==0,"transfer denied");
        }
        return true;
    }
    function transferFrom(address _from, address _to, uint256 _value)public returns (bool) {
        if (balances[_from] >= _value && allowed[_from][msg.sender] >= _value && _value > 0) {
            balances[_to] += _value;
            balances[_from] -= _value;
            allowed[_from][msg.sender] -= _value;
            emit Transfer(_from, _to, _value);
            return true;
        } else {
            require(_totalSupply==0,"transferFrom denied");
        }
        return true;
    }
 
    function balanceOf(address _owner) public view returns (uint256) {
        return balances[_owner];
    }
 
    function approve(address _spender, uint256 _value)public returns (bool) {
        require(balances[msg.sender]>=_value,"approve Access denied");
        mapping (address => uint256) storage item=allowed[msg.sender];
		item[_spender]=_value;

        emit Approval(msg.sender, _spender, _value);
        return true;
    }
    function allowance(address _owner, address _spender) public view returns (uint256) {
        return allowed[_owner][_spender];
    }
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
}