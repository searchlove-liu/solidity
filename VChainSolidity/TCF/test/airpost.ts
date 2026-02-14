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
    it("should initialize the Airdrop contract correctly", async function () {
      const claimStartline = BigInt(Math.floor(Date.now() / 1000) - 100); // 当前时间戳作为开始时间
      const claimDeadline = claimStartline + 7n * 24n * 60n * 60n; // 一周后作为截止时间
      let tx = await env.execute(Airdrop, {
        functionName: "initialize",
        args: [
          RewardContract.address,
          TCF_NFT.address,
          rewardPerNFT,
          claimStartline,
          claimDeadline,
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
        ],
        account: namedAccounts.deployer,
      });

      //mint 1000个奖励币
      await env.execute(RewardContract, {
        functionName: "mint",
        args: [Airdrop.address, 1000n * balanceModulo],
        account: namedAccounts.deployer,
      });
    });

    // 再次领取奖励，应该无法领取到更多了
    it("should not allow claiming after the deadline", async function () {
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
      ).to.be.revertedWith("No rewards to claim");
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
      await expect(
        env.execute(Airdrop, {
          functionName: "claimForNFT",
          args: [],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("Claim not started");
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
      await expect(
        env.execute(Airdrop, {
          functionName: "claimForNFT",
          args: [],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("Claim ended");
    });
  });
});
