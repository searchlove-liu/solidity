// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts 4.9.6

pragma solidity ^0.8.1;

import {BinaryTree} from "./extensions/binaryTree/binaryTree.sol";
// import {TCF_NFTPrice} from "./extensions/ERC1155/TCF_NFTPrice.sol";
import {TCF_ERC1155} from "./extensions/ERC1155/TCF_ERC1155.sol";
import {
    TCF_ERC1155MintTime
} from "./extensions/ERC1155/TCF_ERC1155MintTime.sol";
import {
    TCF_ERC1155URIStorage
} from "./extensions/ERC1155/TCF_ERC1155URIStorage.sol";
import {TCF_ErrorCode as E} from "./extensions/TCF_ErrorCode.sol";
import {
    IERC1363Receiver
} from "./openzeppelin_l/contracts/interfaces/IERC1363Receiver.sol";

// TODO: 需要一个提款函数
// TODO: 需要一个转账函数

contract TCF_NFT is IERC1363Receiver, BinaryTree, TCF_ERC1155URIStorage {
    // 1、用户mint
    // (4):mint时获取上一区块的创建时间作为NFT的创建时间。
    // (1):在erc1155合约中，定义tcf_mint函数，函数通过call和tcf地址调用授权函数，然后再转TCF，最后再调用mint函数。
    // (2):USDT同样的道理。
    // (3):TC的话使用原始mint函数，设为payable。
    // (5):amount和数组长度必须一致
    // 2、用户转送BFT时，连同创建时间一同转给另一个用户

    string private constant ERR_TOKENURI_INITIALIZED = "TOKENURI_INITIALIZED";
    // tokenIds and URIs should have same length
    string private constant ERR_LENGTH_NOT_EQUAL = "LENGTH_NOT_EQUAL";

    // 重置NFT价格

    // 为每一类NFT设置价格和动态比例
    // 设置每一类NFT的价格
    // 保存每一个NFT_ERC20的创建时间
    // 返回用户有效的NFT
    // 返回用户所有的NFT

    function buyNFTByTC(
        address account,
        uint256 id,
        uint256 buyAmount
    ) public payable {
        require(rootInitialized, E.ERR_ROOT_NOT_INITIALIZED); // 检查二叉树根节点是否被初始化
        require(isExist(account), E.ERR_NODE_NOT_EXISTS); // 检查节点是否在二叉树中
        require(NFTPrice_initialized == 1, E.ERR_PRICES_NOT_INITIALIZED); // 检查NFT价格是否被初始化
        // 检查msg.value是否足够支付NFT的价格
        (string memory err_, uint256 nftPrice) = getNFTPrice(id, address(0));
        require(bytes(err_).length == 0, err_);
        require(
            msg.value == nftPrice * buyAmount && buyAmount > 0,
            E.ERR_INCORRECT_FUNDS
        );
        _mint(account, id, buyAmount, "");
    }

    // 调用TCF合约中的transferAndCall函数后，会在TCF合约中调用该函数，实现NFT的购买
    function onTransferReceived(
        address,
        address from,
        uint256 amount,
        bytes memory data
    ) external override returns (bytes4) {
        require(rootInitialized, E.ERR_ROOT_NOT_INITIALIZED); // 检查二叉树根节点是否被初始化
        require(isExist(from), E.ERR_NODE_NOT_EXISTS); // 检查节点是否在二叉树中
        require(NFTPrice_initialized == 1, E.ERR_PRICES_NOT_INITIALIZED); // 检查NFT价格是否被初始化
        // 获取msg.sender的地址，必须在支持列表之内
        address tokenAddress = msg.sender;
        require(supportTokenType[tokenAddress] == 1, E.ERR_TOKEN_UNSUPPORTED);
        // 获取需要购买的tokenID和amount，从data中解析出来
        (uint256 tokenId, uint256 buyAmount) = abi.decode(
            data,
            (uint256, uint256)
        );
        require(tokenId < 6, E.ERR_TOKENID_RANGE);

        // 检查 amount 是否足够支付 NFT 的价格
        (string memory err_, uint256 nftPrice) = getNFTPrice(
            tokenId,
            tokenAddress
        );
        require(bytes(err_).length == 0, err_);
        require(
            amount == nftPrice * buyAmount && buyAmount > 0,
            E.ERR_INCORRECT_FUNDS
        );
        _mint(from, tokenId, buyAmount, "");
        return IERC1363Receiver.onTransferReceived.selector;
    }

    function _mint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) internal override(TCF_ERC1155MintTime, TCF_ERC1155) {
        super._mint(account, id, amount, data);
    }

    function _safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        uint256[] calldata indexes,
        bytes memory
    ) internal virtual override(TCF_ERC1155MintTime, TCF_ERC1155) {
        super._safeTransferFrom(from, to, tokenId, indexes, "");
    }

    function balanceOf(
        address account,
        uint256 id
    ) public view virtual override(TCF_ERC1155) returns (uint256) {
        return super.balanceOf(account, id);
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal virtual override(TCF_ERC1155) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    function uri(
        uint256 tokenId
    ) public view virtual override(TCF_ERC1155) returns (string memory) {
        return super.uri(tokenId);
    }

    // 提取代币（仅示例，生产环境要加权限控制）
    function withdraw(address token, uint256 amount) external {
        // require(deposited[msg.sender] >= amount, "Insufficient deposit");
        // deposited[msg.sender] -= amount;
        // // 调用 transfer 退回代币
        // (bool success, ) = token.call(
        //     abi.encodeWithSignature(
        //         "transfer(address,uint256)",
        //         msg.sender,
        //         amount
        //     )
        // );
        // require(success, "Transfer failed");
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override returns (bool) {
        return
            interfaceId == type(IERC1363Receiver).interfaceId ||
            super.supportsInterface(interfaceId);
    }
}
