// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts 4.9.6

pragma solidity ^0.8.1;

import {BinaryTree} from "./extensions/binaryTree/binaryTree.sol";
import {TCF_ERC1155} from "./extensions/ERC1155/TCF_ERC1155.sol";
import {
    TCF_ERC1155MintTime
} from "./extensions/ERC1155/TCF_ERC1155MintTime.sol";
import {
    TCF_ERC1155URIStorage
} from "./extensions/ERC1155/TCF_ERC1155URIStorage.sol";
import {
    IERC1363Receiver
} from "./openzeppelin_l/contracts/interfaces/IERC1363Receiver.sol";
import {Pausable} from "./openzeppelin_l/contracts/security/Pausable.sol";

// TODO: 设置重入攻击防护
contract TCF_NFT is
    IERC1363Receiver,
    TCF_ERC1155URIStorage,
    BinaryTree,
    Pausable
{
    // 1、用户mint
    // (4):mint时获取上一区块的创建时间作为NFT的创建时间。
    // (1):在erc1155合约中，定义tcf_mint函数，函数通过call和tcf地址调用授权函数，然后再转TCF，最后再调用mint函数。
    // (2):USDT同样的道理。
    // (3):TC的话使用原始mint函数，设为payable。
    // (5):amount和数组长度必须一致
    // 2、用户转送BFT时，连同创建时间一同转给另一个用户

    // 为每一类NFT设置价格和动态比例
    // 设置每一类NFT的价格
    // 保存每一个NFT_ERC20的创建时间
    // 返回用户有效的NFT
    // 返回用户所有的NFT

    address public withdrawAddress;
    uint8 public withdrawAddress_initialized;

    event NFTPurchasedWithTC(
        address indexed buyer,
        uint256 indexed tokenId,
        uint256 amount,
        uint256 pricePerUnit
    );

    event NFTPurchasedWithToken(
        address indexed buyer,
        address indexed paymentToken,
        uint256 indexed tokenId,
        uint256 amount,
        uint256 pricePerUnit
    );

    event WithdrawAddressUpdated(
        address indexed operator,
        address indexed previousAddress,
        address indexed newAddress
    );

    function buyNFTByTC(
        address account,
        uint256 id,
        uint256 buyAmount
    ) public payable whenNotPaused {
        require(
            withdrawAddress_initialized == 1,
            "WITHDRAW_ADDR_NOT_INITIALIZED"
        );
        require(rootInitialized, "ROOT_NOT_INITIALIZED"); // 检查二叉树根节点是否被初始化
        require(NFTPrice_initialized == 1, "PRICES_NOT_INITIALIZED"); // 检查NFT价格是否被初始化
        require(_initializedURIStorage == 1, "BASEURI_NOT_INITIALIZED"); // 检查baseURI是否被初始化
        require(isExist(account), "NODE_NOT_EXISTS"); // 检查节点是否在二叉树中
        // 检查msg.value是否足够支付NFT的价格
        (string memory err_, uint256 nftPrice) = getNFTPrice(id, address(0));
        require(bytes(err_).length == 0, err_);
        require(
            msg.value == nftPrice * buyAmount && buyAmount > 0,
            "INCORRECT_FUNDS"
        );
        _mint(account, id, buyAmount, "");
        emit NFTPurchasedWithTC(account, id, buyAmount, nftPrice);

        (bool success, ) = withdrawAddress.call{value: msg.value}("");
        require(success, "TC_TRANSFER_FAILED");
    }

    // 调用TCF合约中的transferAndCall函数后，会在TCF合约中调用该函数，实现NFT的购买
    function onTransferReceived(
        address,
        address from,
        uint256 amount,
        bytes memory data
    ) external override whenNotPaused returns (bytes4) {
        require(
            withdrawAddress_initialized == 1,
            "WITHDRAW_ADDR_NOT_INITIALIZED"
        );
        require(rootInitialized, "ROOT_NOT_INITIALIZED"); // 检查二叉树根节点是否被初始化
        require(NFTPrice_initialized == 1, "PRICES_NOT_INITIALIZED"); // 检查NFT价格是否被初始化
        require(_initializedURIStorage == 1, "BASEURI_NOT_INITIALIZED"); // 检查baseURI是否被初始化
        require(isExist(from), "NODE_NOT_EXISTS"); // 检查节点是否在二叉树中
        // 获取msg.sender的地址，必须在支持列表之内
        address tokenAddress = msg.sender;
        require(supportTokenType[tokenAddress] == 1, "TOKEN_UNSUPPORTED");
        // 获取需要购买的tokenID和amount，从data中解析出来
        (uint256 tokenId, uint256 buyAmount) = abi.decode(
            data,
            (uint256, uint256)
        );
        require(tokenId < 6, "TOKENID_RANGE");

        // 检查 amount 是否足够支付 NFT 的价格
        (string memory err_, uint256 nftPrice) = getNFTPrice(
            tokenId,
            tokenAddress
        );
        require(bytes(err_).length == 0, err_);
        require(
            amount == nftPrice * buyAmount && buyAmount > 0,
            "INCORRECT_FUNDS"
        );
        _mint(from, tokenId, buyAmount, "");
        emit NFTPurchasedWithToken(
            from,
            tokenAddress,
            tokenId,
            buyAmount,
            nftPrice
        );
        return IERC1363Receiver.onTransferReceived.selector;
    }

    // 设置提款地址
    function setWithdrawAddress(address addr) external onlyOwner {
        require(addr != address(0), "ZERO_ADDRESS");
        require(addr.code.length == 0, "ADDRESS_IS_CONTRACT");
        address previousAddress = withdrawAddress;
        withdrawAddress = addr;
        if (withdrawAddress_initialized == 0) {
            withdrawAddress_initialized = 1;
        }
        emit WithdrawAddressUpdated(msg.sender, previousAddress, addr);
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

    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override returns (bool) {
        return
            interfaceId == type(IERC1363Receiver).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    // 合约暂停
    function pause() public onlyOwner {
        _pause();
    }

    // 合约解除暂停
    function unpause() public onlyOwner {
        _unpause();
    }
}
