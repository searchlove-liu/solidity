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
  "0x694284e0a136ee635cbcd590f73c020c4df3aa17" as `0x${string}`;
const nftContract =
  "0xe1470bd2a285530ce62d08d8c0c8242d0a330a60" as `0x${string}`;
const owner = "0x7741ba614e1a8cd096e0339fbe8d3c21f3bdc26a" as `0x${string}`;

const rewardPerNFT: [bigint, bigint, bigint, bigint, bigint, bigint] = [
  10n,
  20n,
  30n,
  40n,
  50n,
  60n,
];

const balanceModulo = 1000000000n;
// Data.now()返回的毫秒，voidCHain使用的是纳秒，所以需要再乘1000000
const claimStartline = BigInt(Math.floor(Date.now() * 1000000)); // 当前时间戳加10分钟作为开始时间
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
    ],
  });
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

// encodeInitializeData_Airdrop();
encodeMintData(owner, 100n * balanceModulo);
// encodeClaimForNFTResult();
