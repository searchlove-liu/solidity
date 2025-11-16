pragma solidity ^0.8.4;
// 处理 meta‑transactions 的 msgSender）
import {ContextMixin} from "./common/meta-transactions/ContentMixin.sol";
import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
//  Ownable（拥有者管理）
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
// （EIP‑712 简化的签名调用支持）
import {
    NativeMetaTransaction
} from "./common/meta-transactions/NativeMetaTransaction.sol";
import {Pausable} from "@openzeppelin/contracts/utils/Pausable.sol";
import {Address} from "@openzeppelin/contracts/utils/Address.sol";
import {
    IERC1155Receiver
} from "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";

contract OwnableDelegateProxy {}

// OpenSea 的 ProxyRegistry 合约地址，用于白名单代理逻辑
contract ProxyRegistry {
    mapping(address => OwnableDelegateProxy) public proxies;
}

/**
 * @title ERC1155Tradable
 * ERC1155Tradable - ERC1155 contract that whitelists an operator address, has create and mint functionality, and supports useful standards from OpenZeppelin,
  like exists(), name(), symbol(), and totalSupply()
 */
contract ERC1155Tradable is
    ContextMixin /* 获取真实的发送地址 */,
    ERC1155,
    NativeMetaTransaction /* 链外签名，支持 EIP-712 */,
    Ownable,
    Pausable /* 可暂停合约操作 */
{
    using Address for address;

    // Proxy registry address
    // OpenSea 的 ProxyRegistry 合约地址，用于白名单代理逻辑。
    address public proxyRegistryAddress;
    // Contract name
    string public name;
    // Contract symbol
    string public symbol;

    // Mapping from token ID to account balances
    mapping(uint256 => mapping(address => uint256)) private balances;
    // 每个 tokenId 的已铸造总量（totalSupply）。
    // 注意：合约并未使用 OZ ERC1155 的 _balances 命名，
    // 而是用自定义 balances 并覆盖了绝大多数 ERC1155 的外部/内部操作，
    // 从而替代 OZ 的存储访问逻辑（这是一个设计选择，需注意兼容性）。`
    mapping(uint256 => uint256) private _supply;

    constructor(
        address initialOwner,
        string memory _name,
        string memory _symbol,
        address _proxyRegistryAddress
        // TODO:这里ERC1155的构造函数的参数为什么没有name和symbol
    ) ERC1155("") Ownable(initialOwner) {
        name = _name;
        symbol = _symbol;
        proxyRegistryAddress = _proxyRegistryAddress;
        // 设置分隔符
        _initializeEIP712(name);
    }

    /**
     * @dev Throws if called by any account other than the owner or their proxy
     */
    modifier onlyOwnerOrProxy() {
        require(
            // _msgSender()获取真实签名者的地址
            _isOwnerOrProxy(_msgSender()),
            "ERC1155Tradable#onlyOwner: CALLER_IS_NOT_OWNER"
        );
        _;
    }

    /**
     * @dev Throws if called by any account other than _from or their proxy
     */
    modifier onlyApproved(address _from) {
        require(
            _from == _msgSender() || isApprovedForAll(_from, _msgSender()),
            "ERC1155Tradable#onlyApproved: CALLER_NOT_ALLOWED"
        );
        _;
    }

    function _isOwnerOrProxy(address _address) internal view returns (bool) {
        // constructor中初始化了owner，代码Ownable(initialOwner)，owner()返回initialOwner地址。
        return owner() == _address || _isProxyForUser(owner(), _address);
    }

    function pause() external onlyOwnerOrProxy {
        _pause();
    }

    function unpause() external onlyOwnerOrProxy {
        _unpause();
    }

    /**
     * @dev See {IERC1155-balanceOf}.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function balanceOf(
        address account,
        uint256 id
        // virtual 表示这个函数可以被子合约重写
        // override 表示这个函数是重写父合约的函数
    ) public view virtual override returns (uint256) {
        require(
            account != address(0),
            "ERC1155: balance query for the zero address"
        );
        return balances[id][account];
    }

    /**
     * @dev See {IERC1155-balanceOfBatch}.
     *
     * Requirements:
     *
     * - `accounts` and `ids` must have the same length.
     */
    function balanceOfBatch(
        address[] memory accounts,
        uint256[] memory ids
    ) public view virtual override returns (uint256[] memory) {
        require(
            accounts.length == ids.length,
            "ERC1155: accounts and ids length mismatch"
        );

        uint256[] memory batchBalances = new uint256[](accounts.length);

        for (uint256 i = 0; i < accounts.length; ++i) {
            batchBalances[i] = balanceOf(accounts[i], ids[i]);
        }

        return batchBalances;
    }

    /**
     * @dev Returns the total quantity for a token ID
     * @param _id uint256 ID of the token to query
     * @return amount of token in existence
     */
    function totalSupply(uint256 _id) public view returns (uint256) {
        return _supply[_id];
    }

    /**
     * Override isApprovedForAll to whitelist user's OpenSea proxy accounts to enable gas-free listings.
     */
    // 重写以允许将 OpenSea proxy 视为已批准（用 _isProxyForUser 判定），以便实现“免 gas 上架”等体验。
    function isApprovedForAll(
        address _owner,
        address _operator
    ) public view override returns (bool isOperator) {
        // Whitelist OpenSea proxy contracts for easy trading.
        if (_isProxyForUser(_owner, _operator)) {
            return true;
        }

        return super.isApprovedForAll(_owner, _operator);
    }

    /**
     * @dev See {IERC1155-safeTransferFrom}.
     *
     * 向另一个地址转移单个 ERC1155 token。
     *
     * 执行流程：
     * 1. 权限检查 (onlyApproved 修饰器)
     *    - 要求发起者是 from 或被 from 批准
     * 2. 基础检查
     *    - to 不能是零地址
     *    - from 必须有足够的 balance
     * 3. 更新存储
     *    - balances[id][from] 减少
     *    - balances[id][to] 增加
     * 4. 发出事件
     *    - TransferSingle 事件记录转账
     * 5. 接收检查 (doSafeTransferAcceptanceCheck)
     *    - 如果 to 是合约，调用其 onERC1155Received 回调
     *    - 如果 to 是 EOA，直接完成转账
     *
     * 注意：这个函数被称为 "safe" 因为它会检查接收者是否实现了正确的接口。
     *      这防止了 token 被转账给不支持的合约导致永久丢失。
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public virtual override whenNotPaused onlyApproved(from) {
        require(to != address(0), "ERC1155: transfer to the zero address");

        address operator = _msgSender();

        uint256 fromBalance = balances[id][from];
        require(
            fromBalance >= amount,
            "ERC1155: insufficient balance for transfer"
        );
        balances[id][from] = fromBalance - amount;
        balances[id][to] += amount;

        emit TransferSingle(operator, from, to, id, amount);

        // ← 关键：这里会检查 to 是否是合约
        // ← 如果是合约，会调用其 onERC1155Received 回调
        // ← 如果是 EOA，这个函数会直接返回
        doSafeTransferAcceptanceCheck(operator, from, to, id, amount, data);
    }

    /**
     * @dev See {IERC1155-safeBatchTransferFrom}.
     *
     * 批量转移多个 ERC1155 token（可以是不同的 token id）。
     *
     * 执行流程：
     * 1. 检查 ids 和 amounts 数组长度是否匹配
     * 2. to 不能是零地址
     * 3. 对每个 id：
     *    - 验证 from 有足够的 balance
     *    - balances[id][from] 减少
     *    - balances[id][to] 增加
     * 4. 发出单个 TransferBatch 事件（包含所有 id 和 amounts）
     * 5. 调用接收检查（与单个转账相同）
     *
     * 优势：比多次 safeTransferFrom 更 gas 高效（只发出一个事件）
     */
    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public virtual override whenNotPaused onlyApproved(from) {
        require(
            ids.length == amounts.length,
            "ERC1155: IDS_AMOUNTS_LENGTH_MISMATCH"
        );
        require(to != address(0), "ERC1155: transfer to the zero address");

        address operator = _msgSender();

        for (uint256 i = 0; i < ids.length; ++i) {
            uint256 id = ids[i];
            uint256 amount = amounts[i];

            uint256 fromBalance = balances[id][from];
            require(
                fromBalance >= amount,
                "ERC1155: insufficient balance for transfer"
            );
            balances[id][from] = fromBalance - amount;
            balances[id][to] += amount;
        }

        emit TransferBatch(operator, from, to, ids, amounts);

        doSafeBatchTransferAcceptanceCheck(
            operator,
            from,
            to,
            ids,
            amounts,
            data
        );
    }

    /**
     * @dev Hook to be called right before minting
     * @param _id          Token ID to mint
     * @param _quantity    Amount of tokens to mint
     */
    function _beforeMint(uint256 _id, uint256 _quantity) internal virtual {}

    /**
     * @dev Mints some amount of tokens to an address
     * @param _to          Address of the future owner of the token
     * @param _id          Token ID to mint
     * @param _quantity    Amount of tokens to mint
     * @param _data        Data to pass if receiver is contract
     */
    function mint(
        address _to,
        uint256 _id,
        uint256 _quantity,
        bytes memory _data
    ) public virtual onlyOwnerOrProxy {
        _mint(_to, _id, _quantity, _data);
    }

    /**
     * @dev Mint tokens for each id in _ids
     * @param _to          The address to mint tokens to
     * @param _ids         Array of ids to mint
     * @param _quantities  Array of amounts of tokens to mint per id
     * @param _data        Data to pass if receiver is contract
     */
    function batchMint(
        address _to,
        uint256[] memory _ids,
        uint256[] memory _quantities,
        bytes memory _data
    ) public virtual onlyOwnerOrProxy {
        _batchMint(_to, _ids, _quantities, _data);
    }

    /**
     * @dev Burns amount of a given token id
     * @param _from          The address to burn tokens from
     * @param _id          Token ID to burn
     * @param _quantity    Amount to burn
     */
    function burn(
        address _from,
        uint256 _id,
        uint256 _quantity
    ) public virtual onlyApproved(_from) {
        _burn(_from, _id, _quantity);
    }

    /**
     * @dev Burns tokens for each id in _ids
     * @param _from          The address to burn tokens from
     * @param _ids         Array of token ids to burn
     * @param _quantities  Array of the amount to be burned
     */
    function batchBurn(
        address _from,
        uint256[] memory _ids,
        uint256[] memory _quantities
    ) public virtual onlyApproved(_from) {
        _burnBatch(_from, _ids, _quantities);
    }

    /**
     * @dev Returns whether the specified token is minted
     * @param _id uint256 ID of the token to query the existence of
     * @return bool whether the token exists
     */
    function exists(uint256 _id) public view returns (bool) {
        return _supply[_id] > 0;
    }

    // Overrides ERC1155 _mint to allow changing birth events to creator transfers,
    // and to set _supply
    function _mint(
        address _to,
        uint256 _id,
        uint256 _amount,
        bytes memory _data
    ) internal virtual override whenNotPaused {
        address operator = _msgSender();

        _beforeMint(_id, _amount);

        // Add _amount
        balances[_id][_to] += _amount;
        _supply[_id] += _amount;

        // Origin of token will be the _from parameter
        address origin = _origin(_id);

        // Emit event
        emit TransferSingle(operator, origin, _to, _id, _amount);

        // Calling onReceive method if recipient is contract
        doSafeTransferAcceptanceCheck(
            operator,
            origin,
            _to,
            _id,
            _amount,
            _data
        );
    }

    // Overrides ERC1155MintBurn to change the batch birth events to creator transfers, and to set _supply
    function _batchMint(
        address _to,
        uint256[] memory _ids,
        uint256[] memory _amounts,
        bytes memory _data
    ) internal virtual whenNotPaused {
        require(
            _ids.length == _amounts.length,
            "ERC1155Tradable#batchMint: INVALID_ARRAYS_LENGTH"
        );

        // Number of mints to execute
        uint256 nMint = _ids.length;

        // Origin of tokens will be the _from parameter
        address origin = _origin(_ids[0]);

        address operator = _msgSender();

        // Executing all minting
        for (uint256 i = 0; i < nMint; i++) {
            // Update storage balance
            uint256 id = _ids[i];
            uint256 amount = _amounts[i];
            _beforeMint(id, amount);
            require(
                _origin(id) == origin,
                "ERC1155Tradable#batchMint: MULTIPLE_ORIGINS_NOT_ALLOWED"
            );
            balances[id][_to] += amount;
            _supply[id] += amount;
        }

        // Emit batch mint event
        emit TransferBatch(operator, origin, _to, _ids, _amounts);

        // Calling onReceive method if recipient is contract
        doSafeBatchTransferAcceptanceCheck(
            operator,
            origin,
            _to,
            _ids,
            _amounts,
            _data
        );
    }

    /**
     * @dev Destroys `amount` tokens of token type `id` from `account`
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens of token type `id`.
     */
    function _burn(
        address account,
        uint256 id,
        uint256 amount
    ) internal override whenNotPaused {
        require(account != address(0), "ERC1155#_burn: BURN_FROM_ZERO_ADDRESS");
        require(amount > 0, "ERC1155#_burn: AMOUNT_LESS_THAN_ONE");

        address operator = _msgSender();

        uint256 accountBalance = balances[id][account];
        require(
            accountBalance >= amount,
            "ERC1155#_burn: AMOUNT_EXCEEDS_BALANCE"
        );
        balances[id][account] = accountBalance - amount;
        _supply[id] -= amount;

        emit TransferSingle(operator, account, address(0), id, amount);
    }

    /**
     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_burn}.
     *
     * Requirements:
     *
     * - `ids` and `amounts` must have the same length.
     */
    function _burnBatch(
        address account,
        uint256[] memory ids,
        uint256[] memory amounts
    ) internal override whenNotPaused {
        require(account != address(0), "ERC1155: BURN_FROM_ZERO_ADDRESS");
        require(
            ids.length == amounts.length,
            "ERC1155: IDS_AMOUNTS_LENGTH_MISMATCH"
        );

        address operator = _msgSender();

        for (uint256 i = 0; i < ids.length; i++) {
            uint256 id = ids[i];
            uint256 amount = amounts[i];

            uint256 accountBalance = balances[id][account];
            require(
                accountBalance >= amount,
                "ERC1155#_burnBatch: AMOUNT_EXCEEDS_BALANCE"
            );
            balances[id][account] = accountBalance - amount;
            _supply[id] -= amount;
        }

        emit TransferBatch(operator, account, address(0), ids, amounts);
    }

    // Override this to change birth events' _from address
    // 默认返回 address(0)（可以被子合约覆盖以改变“出生”事件的 from 地址，
    // 例如让创作者地址作为 origin，这样 mint 出来的代币事件看起来像是从创作者转出）。
    function _origin(
        uint256 /* _id */
    ) internal view virtual returns (address) {
        return address(0);
    }

    // PROXY HELPER METHODS
    function _isProxyForUser(
        address _user,
        address _address
    ) internal view virtual returns (bool) {
        // 不是合约地址 → 不是代理
        // address.isContract() 方法被移除
        if (proxyRegistryAddress.code.length == 0) {
            return false;
        }
        // 将proxyRegistryAddress强制类型转为ProxyRegistry合约类型
        ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);
        // 检查用户是否拥有该代理
        return address(proxyRegistry.proxies(_user)) == _address;
    }

    // Copied from OpenZeppelin
    // https://github.com/OpenZeppelin/openzeppelin-contracts/blob/c3ae4790c71b7f53cc8fff743536dcb7031fed74/contracts/token/ERC1155/ERC1155.sol#L394

    /**
     * @dev 检查转账接收者是否实现了 IERC1155Receiver 接口并验证其返回值
     *
     * 这是 ERC1155 "safe" 的核心：防止 token 被转账给不支持的合约而导致丢失。
     *
     * 执行逻辑：
     * 1. 首先检查 to 是否是合约（to.isContract()）
     *    - 如果 to 是 EOA（常规钱包地址）
     *      → 直接返回，无需进行任何回调（gas 高效）
     *    - 如果 to 是合约地址
     *      → 继续下一步
     *
     * 2. 尝试调用 IERC1155Receiver(to).onERC1155Received(...)
     *    这个函数在接收者合约中定义，用来处理接收到的 token
     *
     *    参数：
     *    - operator: 谁发起了这次转账（通常是交易发起者）
     *    - from: token 的前一个所有者
     *    - id: 被转账的 token id
     *    - amount: 被转账的数量
     *    - data: 任意附加数据，由转账者传递
     *
     * 3. 验证返回值
     *    - 正确的返回值应该是 IERC1155Receiver.onERC1155Received.selector
     *      这个值是 0xf23a6e61（函数选择器）
     *    - 如果返回值不匹配 → REVERT "ERC1155Receiver rejected tokens"
     *    - 这允许接收合约通过返回错误的 selector 来"拒绝"转账
     *
     * 4. 错误处理
     *    - 如果 onERC1155Received 函数不存在 → 合约不支持接口
     *    - 如果 onERC1155Received 内部 REVERT → 传播错误
     *    - 其他异常 → 通用错误消息
     *
     * 示例：
     *
     * // 正确的接收者合约
     * contract GoodReceiver is IERC1155Receiver {
     *     function onERC1155Received(
     *         address operator,
     *         address from,
     *         uint256 id,
     *         uint256 amount,
     *         bytes calldata data
     *     ) external override returns (bytes4) {
     *         // 可以在这里执行任何逻辑（交换、存储、转发等）
     *         return IERC1155Receiver.onERC1155Received.selector;  // ← 必须返回这个！
     *     }
     * }
     *
     * // 拒绝转账的接收者合约
     * contract RejectingReceiver is IERC1155Receiver {
     *     function onERC1155Received(
     *         address operator,
     *         address from,
     *         uint256 id,
     *         uint256 amount,
     *         bytes calldata data
     *     ) external override returns (bytes4) {
     *         require(amount < 1000, "Too much!");  // 拒绝大额转账
     *         return IERC1155Receiver.onERC1155Received.selector;
     *     }
     * }
     */
    function doSafeTransferAcceptanceCheck(
        address operator,
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) private {
        // 第一步：检查 to 是否是合约地址
        // inContract() 方法被弃用，改为直接检查代码长度
        // if (to.isContract()) {
        if (to.code.length > 0) {
            try
                // 调用接收者的 onERC1155Received 函数
                IERC1155Receiver(to).onERC1155Received(
                    operator,
                    from,
                    id,
                    amount,
                    data
                )
            returns (bytes4 response) {
                // 第二步：验证返回的 selector 是否正确
                if (
                    response != IERC1155Receiver(to).onERC1155Received.selector
                ) {
                    revert("ERC1155: ERC1155Receiver rejected tokens");
                }
            } catch Error(string memory reason) {
                // 如果 onERC1155Received 内部 REVERT 并带有原因，重新抛出
                revert(reason);
            } catch {
                // 如果没有明确的原因（函数不存在、异常等），给出通用错误
                revert("ERC1155: transfer to non ERC1155Receiver implementer");
            }
        }
        // 如果 to 不是合约（是 EOA），函数直接返回，无需任何操作
        // → 这就是为什么向钱包地址转账比向合约转账 gas 便宜
    }

    // Copied from OpenZeppelin
    // https://github.com/OpenZeppelin/openzeppelin-contracts/blob/c3ae4790c71b7f53cc8fff743536dcb7031fed74/contracts/token/ERC1155/ERC1155.sol#L417

    /**
     * @dev 批量版本的接收检查。逻辑与 doSafeTransferAcceptanceCheck 相同，但调用的是 onERC1155BatchReceived
     *
     * 对于批量转账，接收合约应该实现：
     *
     * function onERC1155BatchReceived(
     *     address operator,
     *     address from,
     *     uint256[] calldata ids,
     *     uint256[] calldata amounts,
     *     bytes calldata data
     * ) external returns (bytes4) {
     *     // 处理多个 token 的接收
     *     return IERC1155Receiver.onERC1155BatchReceived.selector;
     * }
     *
     * 正确的 selector 值：0xbc197c81
     */
    function doSafeBatchTransferAcceptanceCheck(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal {
        // 第一步：检查 to 是否是合约地址
        // inContract() 方法被弃用，改为直接检查代码长度
        // if (to.isContract()) {
        if (to.code.length > 0) {
            try
                IERC1155Receiver(to).onERC1155BatchReceived(
                    operator,
                    from,
                    ids,
                    amounts,
                    data
                )
            returns (bytes4 response) {
                if (
                    response !=
                    IERC1155Receiver(to).onERC1155BatchReceived.selector
                ) {
                    revert("ERC1155: ERC1155Receiver rejected tokens");
                }
            } catch Error(string memory reason) {
                revert(reason);
            } catch {
                revert("ERC1155: transfer to non ERC1155Receiver implementer");
            }
        }
    }

    // Copied from OpenZeppelin
    // https://github.com/OpenZeppelin/openzeppelin-contracts/blob/c3ae4790c71b7f53cc8fff743536dcb7031fed74/contracts/token/ERC1155/ERC1155.sol#L440
    function asSingletonArray(
        uint256 element
    ) private pure returns (uint256[] memory) {
        uint256[] memory array = new uint256[](1);
        array[0] = element;

        return array;
    }

    /**
     * This is used instead of msg.sender as transactions won't be sent by the original token owner, but by OpenSea.
     */
    function _msgSender() internal view override returns (address sender) {
        return ContextMixin.msgSender();
    }

    function isContract(address _addr) internal view returns (bool) {
        // 检查该地址的代码长度是否大于0
        return _addr.code.length > 0;
    }
}
