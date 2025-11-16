pragma solidity ^0.8.4;
// 阻止冲入攻击
import {
    ReentrancyGuard
} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {AssetContract} from "./AssetContract.sol";

/*
 * @title AssetContractShared
 * OpenSea shared asset contract - A contract for easily creating custom assets on OpenSea
 */
contract AssetContractShared is AssetContract, ReentrancyGuard {
    // Migration contract address
    AssetContractShared public migrationTarget;

    // 共享代理地址白名单。任何在此 mapping 中为 true 的地址都会被 _isProxyForUser 视为代理（不论 owner 是谁），
    // 用于让 OpenSea、Rarible 等多个 marketplace 都能代理操作。
    mapping(address => bool) public sharedProxyAddresses;

    struct Ownership {
        uint256 id;
        address owner;
    }
    // 导入库以解析 token id 的 creator、index、maxSupply。
    using TokenIdentifiers for uint256;

    event CreatorChanged(uint256 indexed _id, address indexed _creator);

    // 允许覆写 token id 中内嵌的 creator。
    // 某个 creator 可以通过 setCreator() 改变该 token 的"法定创作者"地址（例如转移所有权）。
    mapping(uint256 => address) internal _creatorOverride;

    /**
     * @dev Require msg.sender to be the creator of the token id
     */
    modifier creatorOnly(uint256 _id) {
        require(
            _isCreatorOrProxy(_id, _msgSender()),
            "AssetContractShared#creatorOnly: ONLY_CREATOR_ALLOWED"
        );
        _;
    }

    /**
     * @dev Require the caller to own the full supply of the token
     */
    //  要求调用者持有该 token 全部 的最大供应量。
    // 用途：只有完全拥有该 token 的人（通常是原 creator）才能把 URI 改为永久。
    modifier onlyFullTokenOwner(uint256 _id) {
        require(
            _ownsTokenAmount(_msgSender(), _id, _id.tokenMaxSupply()),
            "AssetContractShared#onlyFullTokenOwner: ONLY_FULL_TOKEN_OWNER_ALLOWED"
        );
        _;
    }

    constructor(
        string memory _name,
        string memory _symbol,
        address _proxyRegistryAddress,
        string memory _templateURI,
        address _migrationAddress
    ) AssetContract(_name, _symbol, _proxyRegistryAddress, _templateURI) {
        migrationTarget = AssetContractShared(_migrationAddress);
    }

    /**
     * @dev Allows owner to change the proxy registry
     */
    function setProxyRegistryAddress(address _address) public onlyOwnerOrProxy {
        proxyRegistryAddress = _address;
    }

    /**
     * @dev Allows owner to add a shared proxy address
     */
    function addSharedProxyAddress(address _address) public onlyOwnerOrProxy {
        sharedProxyAddresses[_address] = true;
    }

    /**
     * @dev Allows owner to remove a shared proxy address
     */
    function removeSharedProxyAddress(
        address _address
    ) public onlyOwnerOrProxy {
        delete sharedProxyAddresses[_address];
    }

    /**
     * @dev Allows owner to disable the ability to migrate
     */
    function disableMigrate() public onlyOwnerOrProxy {
        migrationTarget = AssetContractShared(address(0));
    }

    /**
     * @dev Migrate state from previous contract
     */
    //  从旧合约（migrationTarget）批量迁移数据到新合约。
    function migrate(Ownership[] memory _ownerships) public onlyOwnerOrProxy {
        AssetContractShared _migrationTarget = migrationTarget;
        require(
            _migrationTarget != AssetContractShared(address(0)),
            "AssetContractShared#migrate: MIGRATE_DISABLED"
        );

        string memory _migrationTargetTemplateURI = _migrationTarget
            .templateURI();

        for (uint256 i = 0; i < _ownerships.length; ++i) {
            uint256 id = _ownerships[i].id;
            address owner = _ownerships[i].owner;

            require(
                owner != address(0),
                "AssetContractShared#migrate: ZERO_ADDRESS_NOT_ALLOWED"
            );

            uint256 previousAmount = _migrationTarget.balanceOf(owner, id);

            if (previousAmount == 0) {
                continue;
            }

            _mint(owner, id, previousAmount, "");

            if (
                keccak256(bytes(_migrationTarget.uri(id))) !=
                keccak256(bytes(_migrationTargetTemplateURI))
            ) {
                _setPermanentURI(id, _migrationTarget.uri(id));
            }
        }
    }

    function mint(
        address _to,
        uint256 _id,
        uint256 _quantity,
        bytes memory _data
    ) public override nonReentrant creatorOnly(_id) {
        _mint(_to, _id, _quantity, _data);
    }

    function batchMint(
        address _to,
        uint256[] memory _ids,
        uint256[] memory _quantities,
        bytes memory _data
    ) public override nonReentrant {
        for (uint256 i = 0; i < _ids.length; i++) {
            require(
                _isCreatorOrProxy(_ids[i], _msgSender()),
                "AssetContractShared#_batchMint: ONLY_CREATOR_ALLOWED"
            );
        }
        _batchMint(_to, _ids, _quantities, _data);
    }

    /////////////////////////////////
    // CONVENIENCE CREATOR METHODS //
    /////////////////////////////////

    /**
     * @dev Will update the URI for the token
     * @param _id The token ID to update. msg.sender must be its creator, the uri must be impermanent,
     *            and the creator must own all of the token supply
     * @param _uri New URI for the token.
     */
    //  URI 必须还未标记为永久（onlyImpermanentURI）；
    function setURI(
        uint256 _id,
        string memory _uri
    )
        public
        override
        creatorOnly(_id)
        onlyImpermanentURI(_id)
        onlyFullTokenOwner(_id)
    {
        _setURI(_id, _uri);
    }

    /**
     * @dev setURI, but permanent
     */
    function setPermanentURI(
        uint256 _id,
        string memory _uri
    )
        public
        override
        creatorOnly(_id)
        onlyImpermanentURI(_id)
        onlyFullTokenOwner(_id)
    {
        _setPermanentURI(_id, _uri);
    }

    /**
     * @dev Change the creator address for given token
     * @param _to   Address of the new creator
     * @param _id  Token IDs to change creator of
     */
    function setCreator(uint256 _id, address _to) public creatorOnly(_id) {
        require(
            _to != address(0),
            "AssetContractShared#setCreator: INVALID_ADDRESS."
        );
        _creatorOverride[_id] = _to;
        emit CreatorChanged(_id, _to);
    }

    /**
     * @dev Get the creator for a token
     * @param _id   The token id to look up
     */
    function creator(uint256 _id) public view returns (address) {
        if (_creatorOverride[_id] != address(0)) {
            return _creatorOverride[_id];
        } else {
            return _id.tokenCreator();
        }
    }

    /**
     * @dev Get the maximum supply for a token
     * @param _id   The token id to look up
     */
    function maxSupply(uint256 _id) public pure returns (uint256) {
        return _id.tokenMaxSupply();
    }

    // Override ERC1155Tradable for birth events
    function _origin(uint256 _id) internal pure override returns (address) {
        return _id.tokenCreator();
    }

    function _requireMintable(address _address, uint256 _id) internal view {
        require(
            _isCreatorOrProxy(_id, _address),
            "AssetContractShared#_requireMintable: ONLY_CREATOR_ALLOWED"
        );
    }

    function _remainingSupply(
        uint256 _id
    ) internal view override returns (uint256) {
        return maxSupply(_id) - totalSupply(_id);
    }

    function _isCreatorOrProxy(
        uint256 _id,
        address _address
    ) internal view override returns (bool) {
        address creator_ = creator(_id);
        return creator_ == _address || _isProxyForUser(creator_, _address);
    }

    // Overrides ERC1155Tradable to allow a shared proxy address
    function _isProxyForUser(
        address _user,
        address _address
    ) internal view override returns (bool) {
        if (sharedProxyAddresses[_address]) {
            return true;
        }
        return super._isProxyForUser(_user, _address);
    }
}

// 典型使用场景
/*
场景 1：多 Creator 平台
部署： 部署 AssetContractShared，设 owner、templateURI、proxy registry。
Creator A 铸造 token：
构造 token id（嵌入 A 的地址 + 序号 + 最大供应）；
调用 mint(_to, id, qty, uri_data)（满足 creatorOnly(id) 需求）；
合约铸造 qty 个到 _to，并从 uri_data 提取 URI。
Creator A 改 URI：
若 URI 还未永久，调用 setURI(id, new_uri)；
若要锁定，调用 setPermanentURI(id, final_uri) → 之后永不可改。
Creator A 转移权利：
调用 setCreator(id, B_addr) → 现在只有 B 能继续 mint 或改该 token 的属性。
场景 2：版本升级与数据迁移
旧合约已有大量 token 和持有者数据。
部署新版合约，设 migrationTarget 指向旧合约。
调用 migrate([{id1, owner1}, {id2, owner2}, ...])：
合约逐个查询旧合约的余额；
在新合约中为每个 owner 补充相同数量；
复制 URI（如果非模板）并标记为永久。
完成后调用 disableMigrate() 禁用迁移 → 新合约成为唯一来源。
场景 3：OpenSea 免 Gas 上架
OpenSea 在 sharedProxyAddresses 中注册了其 proxy 合约地址。
用户无需额外 approve，OpenSea proxy 即可代理转移。
在 balanceOf 中的查询会自动将 proxy 视为被批准的操作者。

Creator 权限是 token id 内嵌的

如果 token id 构造错误（creator 位错位），权限检查会失效。
生成 token id 的外部系统需确保格式正确。
URI 永久性一旦设置不可撤销

setPermanentURI 会把 _isPermanentURI[_id] 设为 true；
此后任何 setURI/setPermanentURI 都会被 onlyImpermanentURI 拒绝；
这是有意的设计，用于确保 NFT 的元数据不被篡改。
迁移时的重入保护

migrate 和 batchMint 都用了 nonReentrant，防止迁移中的恶意重入。
共享代理白名单的风险

sharedProxyAddresses 中的任何地址都自动被视为所有用户的代理（不受 OpenSea registry 限制）。
所有者应谨慎添加，避免不可信地址获得无限转移权。
Proxy Registry 依赖

如果 proxyRegistryAddress 指向错误地址或被攻击，用户级代理授权会失效或被滥用。
MaxSupply 编码在 ID 中

一旦 token id 生成，maxSupply 就固定了。
如果需要改变某 token 的最大供应，无法在此合约中实现（会需要新 id）。
*/
