pragma solidity ^0.8.4;

import {ERC1155Tradable} from "./ERC1155Tradable.sol";

/**
 * @title AssetContract
 * AssetContract - A contract for easily creating non-fungible assets on OpenSea.
 */

contract AssetContract is ERC1155Tradable {
    event PermanentURI(string _value, uint256 indexed _id);

    // 每个 token id 的最大供应量为 1，表示每个 token id 只能铸造一个唯一的实例。
    // 如果为2，表示一个token id 可以铸造两个实例，类似同款的两件商品。
    uint256 constant TOKEN_SUPPLY_CAP = 1;

    // 公共的模板 URI，当某个 token 没有单独设置 URI 时返回该 URI。
    string public templateURI;

    // 公共的模板 URI，当某个 token 没有单独设置 URI 时返回该 URI。
    // Optional mapping for token URIs
    mapping(uint256 => string) private _tokenURI;

    // Mapping for whether a token URI is set permanently
    mapping(uint256 => bool) private _isPermanentURI;

    //要求 _from 持有至少 _quantity 数量的指定 token（用于 burn 检查），才可以进行操作
    modifier onlyTokenAmountOwned(
        address _from,
        uint256 _id,
        uint256 _quantity
    ) {
        require(
            _ownsTokenAmount(_from, _id, _quantity),
            "AssetContract#onlyTokenAmountOwned: ONLY_TOKEN_AMOUNT_OWNED_ALLOWED"
        );
        _;
    }

    /**
     * @dev Require the URI to be impermanent
     */
    //  要求当前 token 的 URI 不是永久的（用于在设置 URI 前检查是否可变）
    modifier onlyImpermanentURI(uint256 id) {
        require(
            !isPermanentURI(id),
            "AssetContract#onlyImpermanentURI: URI_CANNOT_BE_CHANGED"
        );
        _;
    }

    constructor(
        string memory _name,
        string memory _symbol,
        address _proxyRegistryAddress,
        string memory _templateURI
    ) ERC1155Tradable(_name, _symbol, _proxyRegistryAddress) {
        if (bytes(_templateURI).length > 0) {
            setTemplateURI(_templateURI);
        }
    }

    function openSeaVersion() public pure returns (string memory) {
        return "2.1.0";
    }

    /**
     * @dev Require _from to own a specified quantity of the token
     */
    function _ownsTokenAmount(
        address _from,
        uint256 _id,
        uint256 _quantity
    ) internal view returns (bool) {
        return balanceOf(_from, _id) >= _quantity;
    }

    /**
     * Compat for factory interfaces on OpenSea
     * Indicates that this contract can return balances for
     * tokens that haven't been minted yet
     */
    //  返回 true，用于兼容 OpenSea 的工厂接口（表示合约能返回尚未铸造 token 的余额）。
    function supportsFactoryInterface() public pure returns (bool) {
        return true;
    }

    function setTemplateURI(string memory _uri) public onlyOwnerOrProxy {
        templateURI = _uri;
    }

    // 在"@openzeppelin/contracts@5.5.0/token/ERC721/extensions/ERC721URIStorage.sol";中实现
    function setURI(
        uint256 _id,
        string memory _uri
    ) public virtual onlyOwnerOrProxy onlyImpermanentURI(_id) {
        _setURI(_id, _uri);
    }

    // 设置永久 URI，一旦设置后不可更改
    function setPermanentURI(
        uint256 _id,
        string memory _uri
    ) public virtual onlyOwnerOrProxy onlyImpermanentURI(_id) {
        _setPermanentURI(_id, _uri);
    }

    function isPermanentURI(uint256 _id) public view returns (bool) {
        return _isPermanentURI[_id];
    }

    // 在"@openzeppelin/contracts@5.5.0/token/ERC721/extensions/ERC721URIStorage.sol";中实现
    function uri(uint256 _id) public view override returns (string memory) {
        string memory tokenUri = _tokenURI[_id];
        if (bytes(tokenUri).length != 0) {
            return tokenUri;
        }
        return templateURI;
    }

    function balanceOf(
        address _owner,
        uint256 _id
    ) public view virtual override returns (uint256) {
        // 下面代码中super是什么意思，来自哪里？
        uint256 balance = super.balanceOf(_owner, _id);
        return
            // _remainingSupply是什么意思
            _isCreatorOrProxy(_id, _owner)
                ? balance + _remainingSupply(_id)
                : balance;
    }

    function safeTransferFrom(
        address _from,
        address _to,
        uint256 _id,
        uint256 _amount,
        bytes memory _data
    ) public override {
        // 返回已经铸造的代币余额
        uint256 mintedBalance = super.balanceOf(_from, _id);
        // 如果铸造的余额小于要转移的数量，则先铸造差额部分
        if (mintedBalance < _amount) {
            // Only mint what _from doesn't already have
            // 给目标用户铸造差额部分
            mint(_to, _id, _amount - mintedBalance, _data);
            if (mintedBalance > 0) {
                // 转移已铸造部分
                super.safeTransferFrom(_from, _to, _id, mintedBalance, _data);
            }
        } else {
            super.safeTransferFrom(_from, _to, _id, _amount, _data);
        }
    }

    // 批量转移多个 token id 和数量
    function safeBatchTransferFrom(
        address _from,
        address _to,
        uint256[] memory _ids,
        uint256[] memory _amounts,
        bytes memory _data
    ) public override {
        require(
            _ids.length == _amounts.length,
            "AssetContract#safeBatchTransferFrom: INVALID_ARRAYS_LENGTH"
        );
        for (uint256 i = 0; i < _ids.length; i++) {
            safeTransferFrom(_from, _to, _ids[i], _amounts[i], _data);
        }
    }

    function _beforeMint(
        uint256 _id,
        uint256 _quantity
    ) internal view override {
        require(
            _quantity <= _remainingSupply(_id),
            "AssetContract#_beforeMint: QUANTITY_EXCEEDS_TOKEN_SUPPLY_CAP"
        );
    }

    // Overrides ERC1155Tradable burn to check for quantity owned
    function burn(
        address _from,
        uint256 _id,
        uint256 _quantity
    ) public override onlyTokenAmountOwned(_from, _id, _quantity) {
        super.burn(_from, _id, _quantity);
    }

    // Overrides ERC1155Tradable batchBurn to check for quantity owned
    function batchBurn(
        address _from,
        uint256[] memory _ids,
        uint256[] memory _quantities
    ) public override {
        for (uint256 i = 0; i < _ids.length; i++) {
            require(
                // 检查 _from 是否持有足够数量的每个 token id
                _ownsTokenAmount(_from, _ids[i], _quantities[i]),
                "AssetContract#batchBurn: ONLY_TOKEN_AMOUNT_OWNED_ALLOWED"
            );
        }
        super.batchBurn(_from, _ids, _quantities);
    }

    function _mint(
        address _to,
        uint256 _id,
        uint256 _quantity,
        bytes memory _data
    ) internal override {
        // data是url
        super._mint(_to, _id, _quantity, _data);
        if (_data.length > 1) {
            _setURI(_id, string(_data));
        }
    }

    // 查看某个地址是否是某个 token id 的创建者或其代理
    // TODO: 为什么不需要用到 token id？
    function _isCreatorOrProxy(
        uint256,
        address _address
    ) internal view virtual returns (bool) {
        return _isOwnerOrProxy(_address);
    }

    // 某个token id 剩余可铸造的数量
    function _remainingSupply(
        uint256 _id
    ) internal view virtual returns (uint256) {
        return TOKEN_SUPPLY_CAP - totalSupply(_id);
    }

    // Override ERC1155Tradable for birth events
    // 返回合约拥有者地址
    function _origin(
        uint256 /* _id */
    ) internal view virtual override returns (address) {
        return owner();
    }

    function _batchMint(
        address _to,
        uint256[] memory _ids,
        uint256[] memory _quantities,
        bytes memory _data
    ) internal virtual override {
        super._batchMint(_to, _ids, _quantities, _data);
        if (_data.length > 1) {
            for (uint256 i = 0; i < _ids.length; i++) {
                // 为每一个token设置相同的uri
                _setURI(_ids[i], string(_data));
            }
        }
    }

    function _setURI(uint256 _id, string memory _uri) internal {
        _tokenURI[_id] = _uri;
        emit URI(_uri, _id);
    }

    function _setPermanentURI(
        uint256 _id,
        string memory _uri
    ) internal virtual {
        require(
            bytes(_uri).length > 0,
            "AssetContract#setPermanentURI: ONLY_VALID_URI"
        );
        _isPermanentURI[_id] = true;
        _setURI(_id, _uri);
        emit PermanentURI(_uri, _id);
    }
}
