// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./TCF_NFTPrice.sol";

// tokenID可以改为uint8，
// mintTime可以改为uint48，节省存储空间
contract TCF_ERC1155MintTime is TCF_NFTPrice {
    // Mapping from token ID to account to mint time array
    // 用户拥有的id,mapping(owner => mapping(tokenId => editionIds))
    mapping(address => mapping(uint256 => uint256[])) private _ownedTokenIds;
    // 用户nft的创建时间，mapping(tokenId => mapping(editionId => mintTime)))
    // mintTime == 0 表示该NFT已经被转移
    mapping(uint256 => mapping(uint256 => uint64)) private _mintTimes;

    event TokenEditionMinted(
        address indexed to,
        uint256 indexed tokenId,
        uint256 editionId,
        uint64 mintedAt
    );
    // test _mintTimes
    function getNftMintTime(
        uint256 tokenId,
        uint256 editionId
    ) public view returns (uint64) {
        require(tokenId < 6, "TOKENID_RANGE");
        return _mintTimes[tokenId][editionId];
    }

    // test _ownedTokenIds
    function getUserTokenIds(
        address account,
        uint256 tokenId
    ) public view returns (uint256[] memory) {
        require(tokenId < 6, "TOKENID_RANGE");
        return _ownedTokenIds[account][tokenId];
    }

    // 覆写_safeTransferFrom函数，添加对mintTimes的处理
    function _safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        uint256[] calldata indexes,
        bytes memory data
    ) internal virtual override(TCF_ERC1155) {
        // 防止后面代码发生错误，被revert不可预期的错误
        require(to != address(0), "ZERO_ADDRESS");
        require(tokenId < 6, "TOKENID_RANGE");

        // 处理mintTimes and _ownedTokenIds
        for (uint256 i = 0; i < indexes.length; i++) {
            // 检查是否过期，过期之后才可以转
            uint256 index = indexes[i];
            uint64 mintTime = _mintTimes[tokenId][index];
            (, uint32 indate) = getNFTEquityDetails(tokenId);
            require(
                TCF_ERC1155.ownerOf(tokenId, index) == from,
                "TOKEN_NOT_OWNED"
            );
            // 判断是否在_ownedTokenIds中
            bool found = false;
            // // 从_ownedTokenIds中移除index，可以改为在外层for循环中处理
            uint256[] storage fromOwnedTokenIds = _ownedTokenIds[from][tokenId];
            uint256[] storage toOwnedTokenIds = _ownedTokenIds[to][tokenId];
            for (uint256 j = 0; j < fromOwnedTokenIds.length; j++) {
                if (fromOwnedTokenIds[j] == index) {
                    found = true;
                    break;
                }
            }
            require(found, "INDEX_NOT_OWNED");
            // 检查是否过期

            require(block.timestamp > mintTime + indate, "SEND_VALID_NFT");

            // // 注意这里是to，不是from。不需要赋值，因为不赋值就为0
            // _mintTimes[tokenId][to][index] = 0;
            // 查找index在fromOwnedTokenIds中的位置并移除
            for (uint256 j = 0; j < fromOwnedTokenIds.length; j++) {
                if (fromOwnedTokenIds[j] == index) {
                    // 移除元素
                    fromOwnedTokenIds[j] = fromOwnedTokenIds[
                        fromOwnedTokenIds.length - 1
                    ];
                    fromOwnedTokenIds.pop();
                    break;
                }
            }
            // 添加到to的_ownedTokenIds中
            toOwnedTokenIds.push(index);
            // 清除from的mintTime。不需要赋值为0，删除之后，_ownedTokenIds就没有这个数据了
            // _mintTimes[tokenId][from][index] = 0;
        }
        super._safeTransferFrom(from, to, tokenId, indexes, data);
    }

    // 覆写_mint函数，添加对mintTimes的处理
    function _mint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) internal virtual override(TCF_ERC1155) {
        uint64 currentTime = uint64(block.timestamp);
        for (uint256 i = 0; i < amount; i++) {
            uint256 editionId = _nextTokenId[id] + i;
            // 记录mintTime
            _mintTimes[id][editionId] = currentTime;
            // 记录ownedTokenIds
            _ownedTokenIds[account][id].push(editionId);

            emit TokenEditionMinted(account, id, editionId, currentTime);
        }
        super._mint(account, id, amount, data);
    }

    // 获取某个地址拥有所有NFT价值的总和
    // 如果NFT过期，不在计算之列
    function getTotalNFTWorth(address owner) public view returns (uint256) {
        // 对owner进行检查
        require(owner != address(0), "ZERO_ADDRESS");
        uint256 totalValue = 0;
        for (uint256 tokenId = 0; tokenId < 6; tokenId++) {
            // 获取该地址拥有的该tokenId的indexes
            uint256[] memory indexes = _ownedTokenIds[owner][tokenId];
            for (uint256 i = 0; i < indexes.length; i++) {
                uint256 index = indexes[i];
                uint64 mintTime = _mintTimes[tokenId][index];
                (, uint32 indate) = getNFTEquityDetails(tokenId);
                // 检查是否过期,大于，说明已经过期，过期就不放在计算之列
                if (block.timestamp > mintTime + indate) {
                    continue;
                }
                // 计算价值，以TC的价格为基准
                (string memory err_, uint256 nftPrice) = getNFTPrice(
                    tokenId,
                    address(0x0)
                );
                require(bytes(err_).length == 0, err_);
                totalValue += nftPrice;
            }
        }
        return totalValue;
    }
}
