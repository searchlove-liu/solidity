// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import {Ownable} from "../openzeppelin_l/contracts/access/Ownable.sol";
import {
    ReentrancyGuard
} from "../openzeppelin_l/contracts/security/ReentrancyGuard.sol";
import {AirdropUtils} from "./airdropUtils.sol";

// todo：提供用户查询每个tokenId的NFT已经领取了多少空投了，剩余多少空投可以领取了的接口
// todo: 针对子NFT的id来进行空投，因为存在同一个tokenId的NFT被不同用户持有的情况，所以需要针对每个子NFT进行空投，记录每个子NFT是否已经领取过了空投了，防止重复领取。
// todo: 初始化函数可以重复调用，因为空投可能会针对不同erc20来进行空投

contract Airdrop is Ownable, ReentrancyGuard {
    // 1、设置不同NFT（tokenId从0到5）可以得到的空投数量（是针对erc1155的空投）
    // 2、设置开始开始空投的区块高度和结束空投的区块高度
    // 3、设置空投代币合约地址和NFT合约地址
    // 4、调用Claim获取空投，claim函数获取调用者对应tokenId0到5的数量，在乘以每个NFT的空投数量，就是可以领取的空投数量，然后把这个数量的空投转给调用者。
    // 5、需要设置一个mapping，记录每个tokenId的空投是否已经被领取过了，防止重复领取。

    address public rewardToken;
    address public nftContract;

    // 每个NFT的空投数量，tokenId从0到5
    mapping(uint256 => uint256) private rewardPerNFT;
    // 空投开始日期和结束日期
    uint256 public claimDeadline;
    uint256 public claimStartline;
    // 记录每个tokenId中每个子NFT是否已经领取过了空投了，防止重复领取。
    // mapping(tokenId => mapping(editionId => bool))
    mapping(uint256 => mapping(uint256 => bool)) public tokenClaimed;

    function initialize(
        address _rewardToken,
        address _nftContract,
        uint256[6] memory _rewardPerNFT,
        uint256 _claimStartline,
        uint256 _claimDeadline
    ) external onlyOwner {
        rewardToken = _rewardToken;
        nftContract = _nftContract;
        for (uint256 i = 0; i < 6; i++) {
            rewardPerNFT[i] = _rewardPerNFT[i];
        }
        claimStartline = _claimStartline;
        claimDeadline = _claimDeadline;
    }

    function claimForNFT() external nonReentrant {
        require(block.timestamp >= claimStartline, "Claim not started");
        require(block.timestamp <= claimDeadline, "Claim ended");

        // 检查快照时谁拥有这个NFT
        // 1、便利tokenId从0到5，获取调用者拥有的每个tokenId对应子NFT的id号
        // 2、比较总子NFT的数量和已经领取了空投的子NFT的数量
        // 3、总子NFT的数量更大，那么总子NFT的数量减去已经领取了空投的子NFT的数量，得到的值乘以每个NFT的空投数量，就是可以领取的空投数量。
        // 4、如果相等，那么就说明这个tokenId的NFT的空投已经被领取过了，不能再领取了。
        uint256 totalReward = 0;
        for (uint256 tokenId = 0; tokenId < 6; tokenId++) {
            uint256[] memory editionIds = AirdropUtils.checkgetUserTokenIds(
                msg.sender,
                nftContract,
                tokenId
            );
            // 检查每个子NFT是否已经领取过了空投了，防止重复领取。
            // 如果没有领取过，那么claimable就加1，并设置这个子NFT已经领取过了。
            // 下一次tokenId的循环中，将claimable设为0，继续检查下一个tokenId的NFT的空投领取情况。
            uint256 claimable = 0;
            for (uint256 i = 0; i < editionIds.length; i++) {
                uint256 editionId = editionIds[i];
                if (tokenClaimed[tokenId][editionId]) {
                    continue;
                }
                claimable += 1;
                tokenClaimed[tokenId][editionId] = true;
            }

            // 设置空投数量
            if (claimable > 0) {
                totalReward += claimable * rewardPerNFT[tokenId];
            }
        }
        require(totalReward > 0, "No rewards to claim");

        AirdropUtils.checkTransfer(msg.sender, rewardToken, totalReward);
    }
}
