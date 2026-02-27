import { expect } from "chai";
import { before, beforeEach, describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.ts";
import { baseURI } from "./baseURI.ts";
import { getPrices } from "./price.ts";
import { hexToNumber } from "./utils/stringToHex.ts";
const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);
let {
  env,
  Airdrop,
  RewardContract,
  namedAccounts,
  TCF_NFT,
  TCF1,
  TCF2,
  vault,
  vault_copy,
} = await networkHelpers.loadFixture(deployAll);

const rewardPerNFT: [bigint, bigint, bigint, bigint, bigint, bigint] = [
  10n,
  20n,
  30n,
  40n,
  50n,
  60n,
];

const decimals = 9;
const balanceModulo = 1000000000n;
const defaultAirdropFunding = 1000n * balanceModulo;

describe("Airdrop", function () {
  beforeEach(async function () {
    ({
      env,
      namedAccounts,
      Airdrop,
      RewardContract,
      TCF_NFT,
      TCF1,
      TCF2,
      vault,
      vault_copy,
    } = await networkHelpers.loadFixture(deployAll));

    await env.execute(TCF1, {
      functionName: "initialize",
      args: [
        vault.address,
        vault_copy.address,
        namedAccounts.deployer,
        namedAccounts.deployer,
      ],
      account: namedAccounts.deployer,
    });

    // 初始化 NFT 的 indate/ratio（否则默认 indate=0，会导致“有效期”相关测试失真）
    const TCF1Address = TCF1.address;
    // 初始化支持的token
    await env.execute(TCF_NFT, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    // 设置 NFT 的 indate/ratio
    await env.execute(TCF_NFT, {
      functionName: "initPrice",
      args: [getPrices(TCF1Address)],
      account: namedAccounts.deployer,
    });

    // 设置baseURI
    await env.execute(TCF_NFT, {
      functionName: "setBaseURI",
      args: [baseURI],
      account: namedAccounts.deployer,
    });

    // 设置提款地址
    await env.execute(TCF_NFT, {
      functionName: "setWithdrawAddress",
      args: [namedAccounts.deployer],
      account: namedAccounts.deployer,
    });

    await env.execute(TCF_NFT, {
      functionName: "initRoot",
      args: [namedAccounts.deployer],
      account: namedAccounts.deployer,
    });
  });

  // 初始化Airdrop合约
  describe("initialize", function () {
    it("should revert if reward token balance is insufficient for _airdropTotalAmount", async function () {
      const claimStartline = BigInt(Math.floor(Date.now() / 1000) - 100);
      const claimDeadline = claimStartline + 7n * 24n * 60n * 60n;

      await expect(
        env.execute(Airdrop, {
          functionName: "initialize",
          args: [
            RewardContract.address,
            TCF_NFT.address,
            rewardPerNFT,
            claimStartline,
            claimDeadline,
            1n,
          ],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("Airdrop: insufficient balance");
    });

    it("should initialize the Airdrop contract correctly", async function () {
      const claimStartline = BigInt(Math.floor(Date.now() / 1000) - 100); // 当前时间戳作为开始时间
      const claimDeadline = claimStartline + 7n * 24n * 60n * 60n; // 一周后作为截止时间

      // 预存足够奖励币，否则 initialize 会因为余额不足而失败
      await env.execute(RewardContract, {
        functionName: "mint",
        args: [Airdrop.address, defaultAirdropFunding],
        account: namedAccounts.deployer,
      });

      await env.execute(Airdrop, {
        functionName: "initialize",
        args: [
          RewardContract.address,
          TCF_NFT.address,
          rewardPerNFT,
          claimStartline,
          claimDeadline,
          defaultAirdropFunding,
        ],
        account: namedAccounts.deployer,
      });

      // 购买nft
      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [0n, 5n], // 购买1个tokenId为0的NFT
        account: namedAccounts.deployer,
        value: getPrices(TCF1.address)[0][0].amount * 5n, // 购买1个NFT所需的TC数量
      });

      // 获取balance
      expect(
        await env.read(TCF_NFT, {
          functionName: "balanceOf",
          args: [namedAccounts.deployer, 0n],
        }),
      ).to.equal(5n);

      // 领取奖励
      const result = await env.execute(Airdrop, {
        functionName: "claimForNFT",
        args: [],
        account: namedAccounts.deployer,
      });

      // 验证领取结果
      expect(
        await env.read(RewardContract, {
          functionName: "balanceOf",
          args: [namedAccounts.deployer],
        }),
      ).to.equal(50n); // 5个NFT，每个NFT奖励10*5=50，5*10=50，除以balanceModulo后是50
    });
  });

  // 测试领取奖励
  describe("claimForNFT", function () {
    // 初始化Airdrop合约，购买NFT，领取奖励，并验证领取结果
    beforeEach(async function () {
      //mint 1000个奖励币
      await env.execute(RewardContract, {
        functionName: "mint",
        args: [Airdrop.address, defaultAirdropFunding],
        account: namedAccounts.deployer,
      });
    });

    it("should revert if totalReward exceeds airdropTotalAmount", async function () {
      const claimStartline = BigInt(Math.floor(Date.now() / 1000) - 100);
      const claimDeadline = claimStartline + 7n * 24n * 60n * 60n;

      // 设置一个非常小的空投总量：5 个 tokenId=0 的 NFT 会需要 5 * 10 = 50
      await env.execute(Airdrop, {
        functionName: "initialize",
        args: [
          RewardContract.address,
          TCF_NFT.address,
          rewardPerNFT,
          claimStartline,
          claimDeadline,
          40n,
        ],
        account: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [0n, 5n],
        account: namedAccounts.deployer,
        value: getPrices(TCF1.address)[0][0].amount * 5n,
      });

      await expect(
        env.execute(Airdrop, {
          functionName: "claimForNFT",
          args: [],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("Airdrop: Exceed total airdrop amount");
    });

    // 再次领取奖励，应该无法领取到更多了
    it("should not allow claiming after the deadline", async function () {
      const claimStartline = BigInt(Math.floor(Date.now() / 1000) - 100); // 当前时间戳作为开始时间
      const claimDeadline = claimStartline + 7n * 24n * 60n * 60n; // 一周后作为截止时间
      await env.execute(Airdrop, {
        functionName: "initialize",
        args: [
          RewardContract.address,
          TCF_NFT.address,
          rewardPerNFT,
          claimStartline,
          claimDeadline,
          defaultAirdropFunding,
        ],
        account: namedAccounts.deployer,
      });

      // 购买nft
      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [0n, 5n], // 购买1个tokenId为0的NFT
        account: namedAccounts.deployer,
        value: getPrices(TCF1.address)[0][0].amount * 5n, // 购买1个NFT所需的TC数量
      });

      // 获取balance
      expect(
        await env.read(TCF_NFT, {
          functionName: "balanceOf",
          args: [namedAccounts.deployer, 0n],
        }),
      ).to.equal(5n);

      // 领取奖励.不需要等待，因为在当前时间戳中已经减去了100秒，所以已经过了截止时间
      await env.execute(Airdrop, {
        functionName: "claimForNFT",
        args: [],
        account: namedAccounts.deployer,
      });

      // 验证领取结果
      expect(
        await env.read(RewardContract, {
          functionName: "balanceOf",
          args: [namedAccounts.deployer],
        }),
      ).to.equal(50n); // 5个NFT，每个NFT奖励10*5=50，5*10=50，除以balanceModulo后是50

      //   再次领取奖励，应该无法领取到更多了
      await expect(
        env.execute(Airdrop, {
          functionName: "claimForNFT",
          args: [],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("Airdrop: No rewards to claim");
      // 验证领取结果仍然是50，说明没有领取到更多奖励
      expect(
        await env.read(RewardContract, {
          functionName: "balanceOf",
          args: [namedAccounts.deployer],
        }),
      ).to.equal(50n);
    });

    // 测试领取奖励之后再次购买NFT后能否领取到新购买的NFT对应的奖励
    it("should allow claiming new rewards after purchasing more NFTs", async function () {
      const claimStartline = BigInt(Math.floor(Date.now() / 1000) - 100); // 当前时间戳作为开始时间
      const claimDeadline = claimStartline + 7n * 24n * 60n * 60n; // 一周后作为截止时间
      await env.execute(Airdrop, {
        functionName: "initialize",
        args: [
          RewardContract.address,
          TCF_NFT.address,
          rewardPerNFT,
          claimStartline,
          claimDeadline,
          defaultAirdropFunding,
        ],
        account: namedAccounts.deployer,
      });
      // 购买nft
      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [0n, 5n], // 购买1个tokenId为0的NFT
        account: namedAccounts.deployer,
        value: getPrices(TCF1.address)[0][0].amount * 5n, // 购买1个NFT所需的TC数量
      });

      // 获取balance
      expect(
        await env.read(TCF_NFT, {
          functionName: "balanceOf",
          args: [namedAccounts.deployer, 0n],
        }),
      ).to.equal(5n);

      //mint 1000个奖励币
      await env.execute(RewardContract, {
        functionName: "mint",
        args: [Airdrop.address, 1000n * balanceModulo],
        account: namedAccounts.deployer,
      });

      // 领取奖励.不需要等待，因为在当前时间戳中已经减去了100秒，所以已经过了截止时间
      await env.execute(Airdrop, {
        functionName: "claimForNFT",
        args: [],
        account: namedAccounts.deployer,
      });

      // 验证领取结果
      expect(
        await env.read(RewardContract, {
          functionName: "balanceOf",
          args: [namedAccounts.deployer],
        }),
      ).to.equal(50n); // 5个NFT，每个NFT奖励10*5=50，5*10=50，除以balanceModulo后是50

      // 购买更多NFT
      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [1n, 3n], // 再购买3个tokenId为1的NFT
        account: namedAccounts.deployer,
        value: getPrices(TCF1.address)[1][0].amount * 3n, // 购买3个NFT所需的TC数量
      });

      // 领取奖励.不需要等待，因为在当前时间戳中已经减去了100秒，所以已经过了截止时间
      await env.execute(Airdrop, {
        functionName: "claimForNFT",
        args: [],
        account: namedAccounts.deployer,
      });

      // 验证领取结果
      expect(
        await env.read(RewardContract, {
          functionName: "balanceOf",
          args: [namedAccounts.deployer],
        }),
      ).to.equal(110n); // 5个第一类NFT，每个NFT奖励10*5=50，3个第二类NFT，每个NFT奖励20*3=60
    });

    // 测试在领取奖励的时间窗口之外进行领取，应该无法领取到奖励
    it("should not allow claiming rewards outside of the claim period", async function () {
      const claimStartline = BigInt(Math.floor(Date.now() / 1000) + 100); // 当前时间戳加100秒作为开始时间
      const claimDeadline = claimStartline + 7n * 24n * 60n * 60n; // 一周后作为截止时间
      await env.execute(Airdrop, {
        functionName: "initialize",
        args: [
          RewardContract.address,
          TCF_NFT.address,
          rewardPerNFT,
          claimStartline,
          claimDeadline,
          defaultAirdropFunding,
        ],
        account: namedAccounts.deployer,
      });

      // 购买nft
      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [0n, 5n], // 购买1个tokenId为0的NFT
        account: namedAccounts.deployer,
        value: getPrices(TCF1.address)[0][0].amount * 5n, // 购买1个NFT所需的TC数量
      });

      // 获取balance
      expect(
        await env.read(TCF_NFT, {
          functionName: "balanceOf",
          args: [namedAccounts.deployer, 0n],
        }),
      ).to.equal(5n);

      // 领取奖励.不需要等待，因为在当前时间戳中已经减去了100秒，所以已经过了截止时间
      await expect(
        env.execute(Airdrop, {
          functionName: "claimForNFT",
          args: [],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("Airdrop: Claim not started");
    });

    // 测试在领取奖励的时间窗口之外进行领取，应该无法领取到奖励
    it("should not allow claiming rewards after the claim deadline", async function () {
      const claimStartline = BigInt(
        Math.floor(Date.now() / 1000) - 7 * 24 * 60 * 60 - 100,
      ); // 当前时间戳减去一周再减去100秒作为开始时间
      const claimDeadline = claimStartline + 7n * 24n * 60n * 60n; // 一周后作为截止时间
      await env.execute(Airdrop, {
        functionName: "initialize",
        args: [
          RewardContract.address,
          TCF_NFT.address,
          rewardPerNFT,
          claimStartline,
          claimDeadline,
          defaultAirdropFunding,
        ],
        account: namedAccounts.deployer,
      });

      // 购买nft
      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [0n, 5n], // 购买1个tokenId为0的NFT
        account: namedAccounts.deployer,
        value: getPrices(TCF1.address)[0][0].amount * 5n, // 购买1个NFT所需的TC数量
      });

      // 获取balance
      expect(
        await env.read(TCF_NFT, {
          functionName: "balanceOf",
          args: [namedAccounts.deployer, 0n],
        }),
      ).to.equal(5n);

      // 领取奖励.不需要等待，因为在当前时间戳中已经减去了100秒，所以已经过了截止时间
      await expect(
        env.execute(Airdrop, {
          functionName: "claimForNFT",
          args: [],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("Airdrop: Claim ended");
    });
  });

  describe("withdrawRemainingToken", function () {
    let initialMintTx: any;
    beforeEach(async function () {
      const claimStartline = BigInt(Math.floor(Date.now() / 1000) - 100);
      const claimDeadline = claimStartline + 7n * 24n * 60n * 60n;

      // 预存奖励币，满足 initialize 的余额检查
      initialMintTx = await env.execute(RewardContract, {
        functionName: "mint",
        args: [Airdrop.address, 100n],
        account: namedAccounts.deployer,
      });

      await env.execute(Airdrop, {
        functionName: "initialize",
        args: [
          RewardContract.address,
          TCF_NFT.address,
          rewardPerNFT,
          claimStartline,
          claimDeadline,
          100n,
        ],
        account: namedAccounts.deployer,
      });
    });

    it("非 owner 调用 withdrawRewardToken 失败", async function () {
      await expect(
        env.execute(Airdrop, {
          functionName: "withdrawRemainingToken",
          account: namedAccounts.admin1,
        }),
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });

    it("owner 可以把奖励币从 Airdrop 提到外部地址", async function () {
      const beforeAirdropBalance = await env.read(RewardContract, {
        functionName: "balanceOf",
        args: [Airdrop.address],
      });
      const beforeToBalance = await env.read(RewardContract, {
        functionName: "balanceOf",
        args: [namedAccounts.deployer],
      });

      // 创建下一个区块，以确保当前时间已经超过了 claimDeadline（因为 withdrawRemainingToken 只能在 claimDeadline 之后调用）
      // 获取第一次mint的区块时间戳
      let blockNumber = initialMintTx.blockNumber;
      let block = await env.viem.publicClient.getBlock({
        blockNumber: BigInt(hexToNumber(blockNumber)),
      });
      let timestamp = BigInt(block.timestamp);
      timestamp += 7n * 24n * 60n * 60n + 1n; // 将时间戳增加一周加1秒，确保超过 claimDeadline
      await networkHelpers.time.setNextBlockTimestamp(Number(timestamp));

      await env.execute(Airdrop, {
        functionName: "withdrawRemainingToken",
        account: namedAccounts.deployer,
      });

      const afterAirdropBalance = await env.read(RewardContract, {
        functionName: "balanceOf",
        args: [Airdrop.address],
      });
      const afterToBalance = await env.read(RewardContract, {
        functionName: "balanceOf",
        args: [namedAccounts.deployer],
      });

      expect(afterAirdropBalance).to.equal(0n);
      expect(afterToBalance).to.equal(beforeToBalance + beforeAirdropBalance);
    });
  });

  describe("getTotalRewardAmount", function () {
    beforeEach(async function () {
      const claimStartline = BigInt(Math.floor(Date.now() / 1000) - 100);
      const claimDeadline = claimStartline + 7n * 24n * 60n * 60n;

      // 预存足够的奖励币，满足 initialize 的余额检查（claimForNFT 也会真实转账）
      await env.execute(RewardContract, {
        functionName: "mint",
        args: [Airdrop.address, defaultAirdropFunding],
        account: namedAccounts.deployer,
      });

      await env.execute(Airdrop, {
        functionName: "initialize",
        args: [
          RewardContract.address,
          TCF_NFT.address,
          rewardPerNFT,
          claimStartline,
          claimDeadline,
          defaultAirdropFunding,
        ],
        account: namedAccounts.deployer,
      });
    });

    it("未领取前：总需求 = Σ(totalSupply(tokenId) * rewardPerNFT[tokenId])", async function () {
      // tokenId=0 mint 3 个；tokenId=1 mint 2 个
      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [0n, 3n],
        account: namedAccounts.deployer,
        value: getPrices(TCF1.address)[0][0].amount * 3n,
      });
      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [1n, 2n],
        account: namedAccounts.deployer,
        value: getPrices(TCF1.address)[1][0].amount * 2n,
      });

      const total = await env.read(Airdrop, {
        functionName: "getReferenceRewardAmount",
        args: [],
      });

      // 3 * 10 + 2 * 20
      expect(total).to.equal(70n);
    });

    it("领取后：已领取的 editionId 会从总需求中扣除", async function () {
      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [0n, 3n],
        account: namedAccounts.deployer,
        value: getPrices(TCF1.address)[0][0].amount * 3n,
      });
      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [1n, 2n],
        account: namedAccounts.deployer,
        value: getPrices(TCF1.address)[1][0].amount * 2n,
      });

      // 领取全部已 mint 的 NFT 的空投
      await env.execute(Airdrop, {
        functionName: "claimForNFT",
        args: [],
        account: namedAccounts.deployer,
      });

      const totalAfterClaim = await env.read(Airdrop, {
        functionName: "getReferenceRewardAmount",
        args: [],
      });
      expect(totalAfterClaim).to.equal(0n);

      // 再 mint 新 NFT（未领取） => 总需求应重新变为正数
      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [0n, 1n],
        account: namedAccounts.deployer,
        value: getPrices(TCF1.address)[0][0].amount * 1n,
      });

      const totalAfterNewMint = await env.read(Airdrop, {
        functionName: "getReferenceRewardAmount",
        args: [],
      });
      expect(totalAfterNewMint).to.equal(10n);
    });
  });
});
