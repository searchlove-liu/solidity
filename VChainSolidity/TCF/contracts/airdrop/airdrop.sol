// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import {Ownable} from "../openzeppelin_l/contracts/access/Ownable.sol";
import {
    ReentrancyGuard
} from "../openzeppelin_l/contracts/security/ReentrancyGuard.sol";
import {AirdropUtils} from "./airdropUtils.sol";

// todo：增加日志

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
    uint64 public claimDeadline = uint64(type(uint64).max); // 默认值是一个很大的数，表示还没有设置结束日期
    uint64 public claimStartline = uint64(type(uint64).max); // 默认值是一个很大的数，表示还没有设置开始日期
    uint8 private claimTime_initialized;
    uint256 public airdropTotalAmount;
    // 记录每个tokenId中每个子NFT是否已经领取过了空投了，防止重复领取。
    // mapping(tokenId => mapping(editionId => bool))
    mapping(uint256 => mapping(uint256 => bool)) private tokenClaimed;

    // 领取空投事件
    event AirdropClaimed(address indexed claimant, uint256 amount);

    // 提取剩余代币事件
    event RemainingTokenWithdrawn(address indexed operator, uint256 amount);

    // 初始化函数不可以重复调用，每次空投都需要部署一个新的空投合约，部署完成之后调用初始化函数设置参数。
    // 因为如果一个空投合约重复使用，需要清理上一次空投的数据，但这个数据是在map中保存，很难清理
    function initialize(
        address _rewardToken,
        address _nftContract,
        uint256[6] memory _rewardPerNFT,
        uint64 _claimStartline,
        uint64 _claimDeadline,
        uint256 _airdropTotalAmount
    ) external onlyOwner {
        require(claimTime_initialized == 0, "Airdrop: has been initialized");
        require(
            _rewardToken.code.length != 0,
            "Airdrop: reward token must be a contract"
        );
        require(
            _nftContract.code.length != 0,
            "Airdrop: nft contract must be a contract"
        );
        require(
            _airdropTotalAmount > 0,
            "Airdrop: _airdropTotalAmount must be greater than 0"
        );
        // 结束时间必须大于当前区块时间，并且结束时间必须大于开始时间
        require(
            _claimDeadline > block.timestamp,
            "Airdrop: claim deadline must be in the future"
        );
        require(
            _claimStartline < _claimDeadline,
            "Airdrop: claim startline must be before claim deadline"
        );
        // 获取空投合约的余额
        uint256 airdropBalance = AirdropUtils.checkAirdropBalance(
            address(this),
            _rewardToken
        );
        require(
            airdropBalance >= _airdropTotalAmount,
            "Airdrop: insufficient balance"
        );
        airdropTotalAmount = _airdropTotalAmount;
        claimTime_initialized = 1;
        rewardToken = _rewardToken;
        nftContract = _nftContract;
        for (uint256 i = 0; i < 6; i++) {
            rewardPerNFT[i] = _rewardPerNFT[i];
        }
        claimStartline = _claimStartline;
        claimDeadline = _claimDeadline;
    }

    // 领取空投
    function claimForNFT() external nonReentrant {
        require(claimTime_initialized == 1, "Airdrop: not initialized");
        require(
            block.timestamp >= claimStartline,
            "Airdrop: Claim not started"
        );
        require(block.timestamp <= claimDeadline, "Airdrop: Claim ended");

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
        require(totalReward > 0, "Airdrop: No rewards to claim");
        require(
            totalReward <= airdropTotalAmount,
            "Airdrop: Exceed total airdrop amount"
        );
        airdropTotalAmount -= totalReward;

        AirdropUtils.checkTransfer(msg.sender, rewardToken, totalReward);

        emit AirdropClaimed(msg.sender, totalReward);
    }

    // 查询某个用户可以领取的空投数量
    function getClaimableReward(
        address _account
    ) external view returns (uint256) {
        // 检查是否初始化
        require(claimTime_initialized == 1, "Airdrop: not initialized");
        uint256 totalReward = 0;
        for (uint256 tokenId = 0; tokenId < 6; tokenId++) {
            uint256[] memory editionIds = AirdropUtils.checkgetUserTokenIds(
                _account,
                nftContract,
                tokenId
            );
            uint256 claimable = 0;
            for (uint256 i = 0; i < editionIds.length; i++) {
                uint256 editionId = editionIds[i];
                if (tokenClaimed[tokenId][editionId]) {
                    continue;
                }
                claimable += 1;
            }
            if (claimable > 0) {
                totalReward += claimable * rewardPerNFT[tokenId];
            }
        }
        return totalReward;
    }

    // 提供将Airdrop和约的代币转出到外部地址的方法（提取空投合约中剩余的token）
    function withdrawRemainingToken() external onlyOwner {
        // 检查是否初始化
        require(claimTime_initialized == 1, "Airdrop: not initialized");
        // 只有当空投结束了，才可以提取剩余的token了
        require(block.timestamp > claimDeadline, "Airdrop: Claim not ended");
        uint256 balance = AirdropUtils.checkAirdropBalance(
            address(this),
            rewardToken
        );
        AirdropUtils.checkTransfer(msg.sender, rewardToken, balance);

        emit RemainingTokenWithdrawn(msg.sender, balance);
    }

    // 查看当前这个nftContract合约地址，需要空投多少个rewardToken了
    // 在给空投合约转erc20代币时，可以参考这个值
    function getReferenceRewardAmount()
        external
        view
        returns (uint256 totalReward)
    {
        // 检查是否初始化
        require(claimTime_initialized == 1, "Airdrop: not initialized");
        totalReward = 0;
        for (uint256 tokenId = 0; tokenId < 6; tokenId++) {
            uint256 totalSupply = AirdropUtils.checkTotalSupply(
                nftContract,
                tokenId
            );
            uint256 claimedCount = 0;
            for (uint256 editionId = 0; editionId < totalSupply; editionId++) {
                if (tokenClaimed[tokenId][editionId]) {
                    claimedCount += 1;
                }
            }
            uint256 unclaimedCount = totalSupply - claimedCount;
            totalReward += unclaimedCount * rewardPerNFT[tokenId];
        }
        return totalReward;
    }

    // 是否已经初始化
    function isInitialized() external view returns (bool) {
        return claimTime_initialized == 1;
    }

    // 查看每一类NFT的空投数量
    function getRewardPerNFT(uint256 _tokenId) external view returns (uint256) {
        require(_tokenId < 6, "Airdrop: tokenId out of range");
        require(claimTime_initialized == 1, "Airdrop: not initialized");
        return rewardPerNFT[_tokenId];
    }
}
