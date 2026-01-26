// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import {TCF_ERC1155MintTime} from "./../ERC1155/TCF_ERC1155MintTime.sol";

/// @title BinaryTree
/// @notice 地址二叉树（带推荐关系约束 + 节点充值余额统计）
/// @dev 说明：
///  - 每个节点用一个地址表示，节点是否存在由 mapping 记录。
///  - 插入节点时必须指定父节点地址 + 推荐人地址。
///  - 若 A 推荐 B，则 B 必须插入在以 A 为根的子树分叉之下（即：B 的父节点必须在 A 的子树内）。
///  - 每个节点（地址）可向合约充值 ETH，并记入该节点余额（合约内账本）。

contract BinaryTree is TCF_ERC1155MintTime {
    struct Node {
        address parent;
        address left;
        address right;
        address recommender;
        bool exists;
    }

    /// @notice 根节点地址（初始化后不可更改）
    address public root;
    bool public rootInitialized;

    mapping(address => Node) private _nodes;

    // ------------------------- Events (Requirement #13) -------------------------
    event RootInitialized(address indexed root);
    event NodeInserted(
        address indexed node,
        address indexed parent,
        address indexed recommender,
        bool isLeft
    );
    // ------------------------- Root Init (Requirement #5) -------------------------
    /// @notice 初始化根节点（只能执行一次，且只能由合约部署者/owner 调用）
    /// @param rootAddress 根节点地址
    function initRoot(address rootAddress) external onlyOwner {
        require(!rootInitialized, "ROOT_ALREADY_INITIALIZED");
        require(rootAddress != address(0), "ZERO_ADDRESS");

        rootInitialized = true;
        root = rootAddress;

        // 根节点也作为一个正常节点存入 mapping
        Node storage n = _nodes[rootAddress];
        n.exists = true;
        n.parent = address(0);
        n.left = address(0);
        n.right = address(0);
        n.recommender = address(0);

        emit RootInitialized(rootAddress);
    }

    // ------------------------- Insert (Requirement #2/#3/#4) -------------------------
    /// @notice 插入节点
    /// @dev 约束：
    ///  - parent 必须已存在。
    ///  - recommender 必须已存在。
    ///  - 若 recommender 推荐该 node，则 parent 必须在 recommender 的子树内（含 recommender 本人）。
    /// @param node 新节点地址
    /// @param parent 父节点地址
    /// @param recommender 推荐人地址（必须是当前树中的某个地址）
    /// @param isLeft true=插入为 parent.left；false=插入为 parent.right。
    ///  如果isLeft未true，优先放在父节点的左子树下，如果左子树下有节点，则放在右子树下；反之亦然。
    ///  我什么存在：因为如果使用推荐节点，推荐函数将返回一个父节点和isLeft参数，这样插入函数就可以直接使用。
    function insert(
        address node,
        address parent,
        address recommender,
        bool isLeft
    ) external {
        require(rootInitialized, "ROOT_NOT_INITIALIZED");
        require(
            node != address(0) &&
                parent != address(0) &&
                recommender != address(0),
            "ZERO_ADDRESS"
        );
        require(!_nodes[node].exists, "NODE_EXISTS");
        require(_nodes[parent].exists, "PARENT_NOT_EXIST");
        require(_nodes[recommender].exists, "RECOMMENDER_NOT_EXIST");

        // Requirement #4: B 必须在以 A(recommender) 为根的子树之下
        // 等价检查：parent 必须是 recommender 的后代（或等于 recommender）
        require(
            _isAncestorOrSelf(recommender, parent),
            "PARENT_NOT_RECOMMENDER_SUBTREE"
        );

        Node storage p = _nodes[parent];

        // 如果父节点已经有了两个子节点，则禁止再插入（直接 revert）
        // 确保父节点下一定可以插入
        require(
            p.left == address(0) || p.right == address(0),
            "PARENT_HAS_TWO_CHILDREN"
        );

        if (isLeft) {
            if (p.left == address(0)) {
                // 左侧已有节点，放到右侧
                p.left = node;
            } else {
                p.right = node;
            }
        } else {
            if (p.right == address(0)) {
                // 右侧已有节点，放到左侧
                p.right = node;
            } else {
                p.left = node;
            }
        }

        Node storage n = _nodes[node];
        n.exists = true;
        n.parent = parent;
        n.left = address(0);
        n.right = address(0);
        n.recommender = recommender;

        emit NodeInserted(node, parent, recommender, isLeft);
    }

    /// @dev 从 child 往上走 parent 指针，判断是否能走到 ancestor（或本身）
    function _isAncestorOrSelf(
        address ancestor,
        address child
    ) internal view returns (bool) {
        address cur = child;
        while (cur != address(0)) {
            if (cur == ancestor) return true;
            cur = _nodes[cur].parent;
        }
        return false;
    }

    // ------------------------- Getters (Requirement #7/#8/#11) -------------------------
    /// @notice 查询某个节点余额
    function getNodeBalance(address node) external view returns (uint256) {
        require(_nodes[node].exists, "NODE_NOT_EXISTS");
        return getTotalNFTWorth(node);
    }

    /// @notice 查询某个节点的推荐人地址
    function getRecommender(address node) external view returns (address) {
        require(_nodes[node].exists, "NODE_NOT_EXISTS");
        return _nodes[node].recommender;
    }

    /// @notice 查询某个节点的子节点地址（left, right）
    function getChildren(
        address node
    ) external view returns (address left, address right) {
        require(_nodes[node].exists, "NODE_NOT_EXISTS");
        Node storage n = _nodes[node];
        return (n.left, n.right);
    }

    /// @notice 查询某个节点的父节点地址
    function getParent(address node) external view returns (address) {
        require(_nodes[node].exists, "NODE_NOT_EXISTS");
        return _nodes[node].parent;
    }

    /// @notice 判断某个地址是否已在树中
    function isExist(address node) public view returns (bool) {
        require(node != address(0), "ZERO_ADDRESS");
        return _nodes[node].exists;
    }

    // ------------------------- Recommendation Helper -------------------------
    /// @notice 获取“推荐的父节点”
    /// @dev 从 recommender 开始：每一步比较左右子树（left/right）余额总和，选择更小的分叉继续向下。
    ///      如果本次选择的分叉为空（子节点地址为 0），则无法继续下探，此时返回当前节点作为最终父节点。
    ///      该返回值可用于后续插入新节点时的 parent 参数。
    /// @param recommender 推荐人地址（必须已在树中）
    /// @return parent 推荐得到的最终父节点地址
    /// @return isLeftBranch 推荐在 parent 下应选择的分支：true=left，false=right
    function getRecommendedParent(
        address recommender
    ) external view returns (address parent, bool isLeftBranch) {
        require(rootInitialized, "ROOT_NOT_INITIALIZED");
        require(_nodes[recommender].exists, "RECOMMENDER_NOT_EXIST");

        address cur = recommender;

        // 沿着“子树余额更小”的分叉一直向下，直到要走的分叉为空。
        while (true) {
            Node storage n = _nodes[cur];

            uint256 leftSum = n.left == address(0) ? 0 : _subtreeSum(n.left);
            uint256 rightSum = n.right == address(0) ? 0 : _subtreeSum(n.right);

            // 余额相等时，固定选择 left 以保证确定性
            bool chooseLeft = leftSum <= rightSum;
            address next = chooseLeft ? n.left : n.right;
            if (next == address(0)) {
                return (cur, chooseLeft);
            }
            cur = next;
        }
    }

    // ------------------------- Traversal Sums (Requirement #10/#12) -------------------------
    /// @notice 遍历整颗二叉树，返回所有节点余额总和
    /// @dev 注意：树很大时可能消耗较多 gas（即使 view 调用也有计算开销）。
    function totalTreeBalance() external view returns (uint256) {
        require(rootInitialized, "ROOT_NOT_INITIALIZED");
        return _subtreeSum(root);
    }

    /// @notice 返回某个节点子树（含该节点）余额总和
    function subtreeBalance(address node) external view returns (uint256) {
        require(rootInitialized, "ROOT_NOT_INITIALIZED");
        require(_nodes[node].exists, "NODE_NOT_EXISTS");
        return _subtreeSum(node);
    }

    /// @notice 计算某个节点下两条子树（left/right）中，余额总和更少的那一条子树的余额总和
    /// @dev 若某侧子节点为空，则该侧子树余额视为 0。
    function minChildSubtreeBalance(
        address node
    ) external view returns (uint256) {
        require(rootInitialized, "ROOT_NOT_INITIALIZED");
        require(_nodes[node].exists, "NODE_NOT_EXISTS");

        Node storage n = _nodes[node];
        uint256 leftSum = n.left == address(0) ? 0 : _subtreeSum(n.left);
        uint256 rightSum = n.right == address(0) ? 0 : _subtreeSum(n.right);
        return leftSum <= rightSum ? leftSum : rightSum;
    }

    /// @dev 递归计算子树余额（含当前节点）
    function _subtreeSum(address node) internal view returns (uint256) {
        if (node == address(0)) return 0;
        Node storage n = _nodes[node];
        if (!n.exists) return 0;
        return
            getTotalNFTWorth(node) + _subtreeSum(n.left) + _subtreeSum(n.right);
    }
}
