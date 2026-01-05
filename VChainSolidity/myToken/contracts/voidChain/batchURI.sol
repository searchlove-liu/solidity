// SPDX-License-Identifier:MIT

pragma solidity 0.8.1;

import {MyToken} from "./../myToken.sol";
import {Strings} from "../openzeppelin_l/contracts/utils/String.sol";

contract batchURIAndId is MyToken {
    using Strings for uint256; // 导入字符串操作库

    // 实际的逻辑
    struct NFT {
        uint256 id;
        string uri;
        address contractAddress;
        string tokenStandard;
    }

    struct PageConfig {
        uint256 last_page;
        uint256 current_page;
        uint256 pre_page;
        uint256 next_page;
    }

    struct response {
        //状态码 0表示成功，1表示失败
        uint8 code;
        string message;
        NFT[] NFTs;
        PageConfig page_config;
    }

    struct responseForGetOneNFTURI {
        uint8 code;
        string message;
        NFT nft;
    }

    /***
     * @dev 获取批次URI
     * @param pageIndex 需要第几页的数据
     * @param batchSize 页的大小
     * @param owner 拥有者
     * @return response 包含code,message,NFTs,page_config
     */
    function getBatchURI(
        uint256 pageIndex,
        uint256 batchSize,
        address owner
    ) external view returns (response memory) {
        //参数检查
        // owner地址不为0地址
        if (owner == address(0)) {
            return
                revertMessage_Address_0(
                    pageIndex,
                    batchSize,
                    owner,
                    "batchURIAndId:address zero is not a valid owner"
                );
        }

        // pageIndex大于0
        if (pageIndex < 1) {
            string memory message = string(
                abi.encodePacked(
                    "batchURIAndId:pageIndex(",
                    pageIndex.toString(),
                    ") must be greater than 0"
                )
            );
            return
                revertMessage_IndexOutOfRange(
                    pageIndex,
                    batchSize,
                    owner,
                    message
                );
        }

        // startIndex不能大于等于owner的balanceOf
        uint256 balanceOfOwner = balanceOf(owner);
        uint256 startIndex = (pageIndex - 1) * batchSize;
        if (startIndex >= balanceOfOwner) {
            string memory message = string(
                abi.encodePacked(
                    "batchURIAndId:the pageIndex(",
                    pageIndex.toString(),
                    ") out of range"
                )
            );
            return
                revertMessage_IndexOutOfRange(
                    pageIndex,
                    batchSize,
                    owner,
                    message
                );
        }

        // 获取batchSize和balanceOfOwner的最小值min
        // 总共有10个，最后的index为9，开始位置为6，那么总共可取的有6,7,8,9  四个，也就是10-6
        uint256 maxAmount = balanceOfOwner - startIndex;

        uint256 reallyAmount;

        if (maxAmount < batchSize) {
            reallyAmount = maxAmount;
        } else {
            reallyAmount = batchSize;
        }
        // 创建reallyAmount大小的NFTS数组
        NFT[] memory NFTs = new NFT[](reallyAmount);
        // 获取用户所有已排序NFT
        NFT[] memory sortedNFTs = shellSort(owner);

        // 使用for语句向这个数组中填充
        uint256 endIndex = startIndex + reallyAmount;
        uint256 j = 0;
        for (uint256 i = startIndex; i < endIndex; ++i) {
            // uint256 tokenId = tokenOfOwnerByIndex(owner,i);
            // string memory tokenUri = tokenURI(tokenId);
            // NFTs[j] = NFT({
            //     uri: tokenUri,
            //     id: tokenId,
            //     contractAddress: address(this),
            //     tokenStandard: "erc721"
            // });
            NFTs[j] = sortedNFTs[i];
            ++j;
        }

        PageConfig memory pc = computerPageConfig(pageIndex, batchSize, owner);

        response memory resp;
        resp.code = 0;
        resp.message = "success";
        resp.NFTs = NFTs;
        resp.page_config = pc;

        return resp;
    }

    /***
     * @dev 获取单个NFT的uri
     * @param tokenID 请求的tokenID
     * @return response 包含code,message,NFTs,page_config
     */
    function getOneTokenURI(
        uint256 tokenID
    ) external view returns (responseForGetOneNFTURI memory resp) {
        // 检查tokenID对应的NFT是否存在（不需要检查，因为前端从getBatchURI中获取之后，然后从其中获取的tokenID,所以不会不存在）
        // 检查tokenID是否大于等于总供给量
        uint256 maxIndex = totalSupply() - 1;
        if (tokenID > maxIndex) {
            return resp = revertTokenIndexOutOfRange(tokenID);
        }

        // 检查tokenID是否被烧掉
        uint8 burned = _burnedtToken[tokenID];
        if (burned == 1) {
            return resp = revert_TokenBurned(tokenID);
        }

        // 获取tokenID URI
        string memory tokenURI = tokenURI(tokenID);
        resp.code = 0;
        resp.nft.contractAddress = address(this);
        resp.message = "success";
        resp.nft.id = tokenID;
        resp.nft.tokenStandard = "ERC721";
        resp.nft.uri = tokenURI;
        return resp;
    }

    // tokenIndex is out of range
    function revert_TokenBurned(
        uint256 tokenID
    ) internal view returns (responseForGetOneNFTURI memory) {
        responseForGetOneNFTURI memory resp;
        resp.code = 1;
        // tokenID 对应的NFT被销毁
        resp.message = "batchURIAndId:NFT is burned";
        resp.nft.id = tokenID;
        resp.nft.contractAddress = address(this);
        resp.nft.tokenStandard = "ERC721";
        return resp;
    }

    // tokenIndex is out of range
    function revertTokenIndexOutOfRange(
        uint256 tokenID
    ) internal view returns (responseForGetOneNFTURI memory) {
        responseForGetOneNFTURI memory resp;
        resp.code = 1;
        // tokenID不正确，超过le最大tokenID
        resp.message = "batchURIAndId:NFT index out of range";
        resp.nft.id = tokenID;
        resp.nft.contractAddress = address(this);
        resp.nft.tokenStandard = "ERC721";
        return resp;
    }

    // address==0 回滚
    function revertMessage_Address_0(
        uint256 pageIndex,
        uint256 batchSize,
        address owner,
        string memory message
    ) internal pure returns (response memory) {
        // 这里没有通过computerPageConfig计算pageConfig，因为owner是0地址，无法计算
        PageConfig memory pc;
        pc.current_page = pageIndex;
        pc.pre_page = pageIndex - 1;
        response memory resp;
        resp.code = 1;
        resp.message = message;
        resp.NFTs = new NFT[](0);
        resp.page_config = pc;

        return resp;
    }

    function revertMessage_IndexOutOfRange(
        uint256 pageIndex,
        uint256 batchSize,
        address owner,
        string memory message
    ) internal view returns (response memory) {
        //获取pageConfig
        PageConfig memory pc = computerPageConfig(pageIndex, batchSize, owner);
        response memory resp;
        resp.code = 1;
        resp.message = message;
        resp.NFTs = new NFT[](0);
        resp.page_config = pc;

        return resp;
    }

    // 计算分页配置
    function computerPageConfig(
        uint256 pageIndex,
        uint256 batchSize,
        address owner
    ) internal view returns (PageConfig memory) {
        uint256 balanceOfOwner = balanceOf(owner);
        uint256 lastPage = (balanceOfOwner / batchSize);
        if (balanceOfOwner % batchSize != 0) {
            lastPage += 1;
        }

        uint256 nextPage;
        if (pageIndex + 1 > lastPage) {
            nextPage = lastPage;
        } else {
            nextPage = pageIndex + 1;
        }

        // uint256 prePage;
        // 假设有10条数据，每个页面显示2条数据，那么总共有5页
        // 如果请求第7页，那么上一页还是5页
        // 如果请求第1页或第0页，那么上一页是1页
        uint256 prePage;
        if (pageIndex == 0 || pageIndex == 1) {
            prePage = 1;
        } else if (pageIndex - 1 > lastPage) {
            prePage = lastPage;
        } else {
            prePage = pageIndex - 1;
        }

        PageConfig memory pc;
        pc.last_page = lastPage;
        pc.current_page = pageIndex;
        pc.pre_page = prePage;
        pc.next_page = nextPage;

        return pc;
    }

    function shellSort(address owner) internal view returns (NFT[] memory) {
        // 获取NFT列表
        uint256 balanceOfOwner = balanceOf(owner);
        NFT[] memory NFTs = new NFT[](balanceOfOwner);
        for (uint256 i = 0; i < balanceOfOwner; ++i) {
            uint256 tokenId = tokenOfOwnerByIndex(owner, i);
            string memory tokenUri = tokenURI(tokenId);
            NFTs[i] = NFT({
                uri: tokenUri,
                id: tokenId,
                contractAddress: address(this),
                tokenStandard: "erc721"
            });
        }
        // 对NFT列表进行排序
        uint256 n = NFTs.length;

        // 边界情况处理
        if (n <= 1) {
            return NFTs;
        }

        // 使用Knuth增量序列：1, 4, 13, 40, 121, ...
        uint256 gap = 1;
        while (gap < n / 3) {
            gap = gap * 3 + 1;
        }

        // 逐步缩小间隔进行排序
        while (gap > 0) {
            // 对每个间隔进行插入排序
            for (uint256 i = gap; i < n; i++) {
                NFT memory temp = NFTs[i];
                int256 j = int256(i) - int256(gap);

                // 在分组内进行插入排序
                while (j >= 0 && NFTs[uint256(j)].id > temp.id) {
                    NFTs[uint256(j + int256(gap))] = NFTs[uint256(j)];
                    j -= int256(gap);
                }

                NFTs[uint256(j + int256(gap))] = temp;
            }

            gap /= 3; // 缩小间隔
        }

        return NFTs;
    }
}
