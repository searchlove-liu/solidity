// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts 4.9.6

pragma solidity ^0.8.1;

import {ERC1155} from "./openzeppelin_l/contracts/token/ERC1155/ERC1155.sol";
import {ERC1155Pausable} from "./openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
import {ERC1155Supply} from "./openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import {Ownable} from "./openzeppelin_l/contracts/access/Ownable.sol";
import {ERC1155URIStorage} from "./openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";

contract TCF_NFT is
    ERC1155,
    Ownable,
    ERC1155URIStorage,
    ERC1155Pausable,
    ERC1155Supply
{
    constructor() {}

    // 创建6个NFT
    // 为每一类NFT设置URI
    function setTokenURI(
        uint256[] calldata tokenIds,
        bytes[] calldata URIs
    ) external onlyOwner {
        require(
            tokenIds.length != URIs.length,
            "tokenIds and URIs should have same length"
        );

        uint256 len = tokenIds.length;
        for (uint256 i = 0; i < len; ++i) {
            ERC1155URIStorage._setURI(tokenIds[i], string(URIs[i]));
        }
    }

    // 重置NFT价格

    // 为每一类NFT设置价格和动态比例
    // 设置每一类NFT的价格
    // 保存每一个NFT_ERC20的创建时间
    // 返回用户有效的NFT
    // 返回用户所有的NFT

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public {
        _mint(account, id, amount, data);
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal virtual override(ERC1155, ERC1155Pausable, ERC1155Supply) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    function uri(
        uint256 tokenId
    )
        public
        view
        virtual
        override(ERC1155, ERC1155URIStorage)
        returns (string memory)
    {
        return super.uri(tokenId);
    }
}
