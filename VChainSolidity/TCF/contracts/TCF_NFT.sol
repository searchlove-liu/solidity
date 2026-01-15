// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts 4.9.6

pragma solidity ^0.8.1;

import {ERC1155} from "./openzeppelin_l/contracts/token/ERC1155/ERC1155.sol";
import {Ownable} from "./openzeppelin_l/contracts/access/Ownable.sol";
// 如果存在合约太大，则修改URIStorage
import {
    ERC1155URIStorage
} from "./openzeppelin_l/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";

contract TCF_NFT is ERC1155, Ownable, ERC1155URIStorage {
    string private constant ERR_TOKENURI_INITIALIZED = "TOKENURI_INITIALIZED";
    // tokenIds and URIs should have same length
    string private constant ERR_LENGTH_NOT_EQUAL = "LENGTH_NOT_EQUAL";

    uint8 initializedTokenUri;
    // 创建6个NFT
    // 为每一类NFT设置URI
    function setTokenURI(
        uint256[6] calldata tokenIds,
        bytes[6] calldata URIs
    ) external onlyOwner {
        require(initializedTokenUri == 0, ERR_TOKENURI_INITIALIZED);
        require(tokenIds.length != URIs.length, ERR_LENGTH_NOT_EQUAL);

        uint256 len = tokenIds.length;
        for (uint256 i = 0; i < len; ++i) {
            ERC1155URIStorage._setURI(tokenIds[i], string(URIs[i]));
        }
        initializedTokenUri = 1;
    }

    // 重置NFT价格

    // 为每一类NFT设置价格和动态比例
    // 设置每一类NFT的价格
    // 保存每一个NFT_ERC20的创建时间
    // 返回用户有效的NFT
    // 返回用户所有的NFT

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
    ) internal virtual override(ERC1155) {
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
