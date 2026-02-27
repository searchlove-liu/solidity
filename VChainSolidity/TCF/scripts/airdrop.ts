import { network, artifacts } from "hardhat";
const { viem } = await network.connect({
  network: "hardhatMainnet",
  chainType: "l1",
});
import { encodeFunctionData, decodeFunctionResult } from "viem";
const airdrop_abi = (await artifacts.readArtifact("Airdrop")).abi;
const rewardContract_abi = (await artifacts.readArtifact("RewardContract")).abi;
import { numberTo32ByteHex } from "../test/utils/stringToHex.ts";

const rewardToken =
  "0xed7a6224246b0671d2ed73f810b2de5b2215b8e9" as `0x${string}`;
const nftContract =
  "0xf410615a1a71983094bcf480a113898fb87a8b7f" as `0x${string}`;
const owner = "0x7741ba614e1a8cd096e0339fbe8d3c21f3bdc26a" as `0x${string}`;
const balanceModulo = 1000000000n;
const defaultAirdropFunding = 1000n * balanceModulo;

const rewardPerNFT: [bigint, bigint, bigint, bigint, bigint, bigint] = [
  1000000000n,
  2000000000n,
  3000000000n,
  4000000000n,
  5000000000n,
  6000000000n,
];

// Data.now()返回的毫秒，voidCHain使用的是纳秒，所以需要再乘1000000
const claimStartline = BigInt(Math.floor(Date.now() * 1000000));
const claimDeadline = BigInt(
  Math.floor(Date.now() * 1000000) + 60 * 60 * 1000000000,
); // 当前时间戳加1小时作为截止时间

function encodeInitializeData_Airdrop() {
  const data = encodeFunctionData({
    abi: airdrop_abi,
    functionName: "initialize",
    args: [
      rewardToken,
      nftContract,
      rewardPerNFT,
      claimStartline,
      claimDeadline,
      defaultAirdropFunding,
    ],
  });
  console.log(claimStartline);
  console.log(claimDeadline);
  console.log(data);
}

function encodeMintData(to: `0x${string}`, amount: bigint) {
  const data = encodeFunctionData({
    abi: rewardContract_abi,
    functionName: "mint",
    args: [to, amount],
  });
  console.log(data);
}

function encodeClaimForNFTResult() {
  const decoded = encodeFunctionData({
    abi: airdrop_abi,
    functionName: "claimForNFT",
  });
  console.log(decoded);
}

// 编码withdrawRemainingToken 函数数据
function encodeWithdrawRemainingToken(to: `0x${string}`, amount: bigint) {
  const data = encodeFunctionData({
    abi: airdrop_abi,
    functionName: "withdrawRemainingToken",
  });
  console.log(data);
}

// 编码getTotalRewardAmount 函数数据
function encodeGetTotalRewardAmount() {
  const data = encodeFunctionData({
    abi: airdrop_abi,
    functionName: "getReferenceRewardAmount",
  });
  console.log(data);
}

// 编码 getRewardPerNFT 函数数据
function encodeGetRewardPerNFT(tokenId: bigint) {
  const data = encodeFunctionData({
    abi: airdrop_abi,
    functionName: "getRewardPerNFT",
    args: [tokenId],
  });
  console.log(data);
}

// 编码 getClaimableReward 函数数据
function encodeGetClaimableReward(owner: `0x${string}`) {
  const data = encodeFunctionData({
    abi: airdrop_abi,
    functionName: "getClaimableReward",
    args: [owner],
  });
  console.log(data);
}

// encodeInitializeData_Airdrop();
// encodeMintData(owner, 100n * balanceModulo);
// encodeClaimForNFTResult();
// encodeWithdrawRemainingToken(owner, 1n * balanceModulo);
// encodeGetTotalRewardAmount();
// encodeGetRewardPerNFT(0n);
encodeGetClaimableReward(owner);
