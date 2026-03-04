// test/Greeter.test.ts
// 081103113213130181118146hardhat-ethers-chai-matchers
import { expect } from "chai";
import { beforeEach, describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.ts";
import { numberTo32ByteHex, stringToHexString } from "./utils/stringToHex.ts";
import { TCF } from "../generated/artifacts/index.js";
import { parse } from "path";
import { parseAbiItem } from "viem";
import { getPrices, zeroAddress, ONEAddress, getTCPrices } from "./price.ts";

import { baseURI } from "./baseURI.ts";

const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);

let { env, TCF1, vault, vault_copy, namedAccounts, TCF_NFT } =
  await networkHelpers.loadFixture(deployAll);

describe("TCF", function () {
  beforeEach(async () => {
    ({ env, TCF1, vault, vault_copy, namedAccounts } =
      await networkHelpers.loadFixture(deployAll));
  });

  it("Init the TCF,get token name and token symbol", async function () {
    const tokenName = stringToHexString("TCF");
    const tokenSymbol = stringToHexString("TCF");
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

    expect(
      await env.read(TCF1, {
        functionName: "name",
      }),
    ).to.equal("DCF");

    expect(
      await env.read(TCF1, {
        functionName: "symbol",
      }),
    ).to.equal("DCF");
  });

  it("Initial two times of TCF,expect reverted with 'Initializable: contract is already initialized'", async function () {
    let tokenName = stringToHexString("TCF");
    let tokenSymbol = stringToHexString("TCF");
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

    tokenName = stringToHexString("TCF2");
    tokenSymbol = stringToHexString("TCF2");
    await expect(
      env.execute(TCF1, {
        functionName: "initialize",
        args: [
          vault.address,
          vault_copy.address,
          namedAccounts.deployer,
          namedAccounts.deployer,
        ],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("Initializable: contract is already initialized");
  });
});

describe("test token amount", function () {
  const address_3 = namedAccounts.admin1;
  const address_7 = namedAccounts.admin2;
  const totalSupplyUnits = 5_200_000n * 1_000_000_000n;
  const percentOfSupply = (percent: bigint) =>
    (totalSupplyUnits * percent) / 100n; // use BigInt math to avoid float rounding

  beforeEach(async () => {
    ({ env, TCF1, vault, vault_copy, namedAccounts } =
      await networkHelpers.loadFixture(deployAll));

    await env.execute(TCF1, {
      functionName: "initialize",
      args: [vault.address, vault_copy.address, address_3, address_7],
      account: namedAccounts.deployer,
    });
  });

  // 检查静态授权额度是否等于5_200_000n * 1_000_000_000n *90 /100 * 40 /100
  it("Init the TCF,get static vault amount,expect amount is equal to 1872000000000", async function () {
    // const staticVault = await env.read(TCF1, {
    //   functionName: "allowance",
    //   args: [vault.address, namedAccounts.deployer],
    // });

    const expectedStaticVaultAmount =
      (((totalSupplyUnits * 90n) / 100n) * 40n) / 100n;

    expect(
      await env.read(TCF1, {
        functionName: "allowance",
        args: [vault.address, namedAccounts.deployer],
      }),
    ).to.equal(expectedStaticVaultAmount.toString());
  });

  // 检查动态授权额度是否等于5_200_000n * 1_000_000_000n *90 /100 * 60 /100
  it("Init the TCF,get dynamic vault amount,expect amount is equal to 2808000000000", async function () {
    const expectedDynamicVaultAmount =
      (((totalSupplyUnits * 90n) / 100n) * 60n) / 100n;

    expect(
      await env.read(TCF1, {
        functionName: "allowance",
        args: [vault_copy.address, namedAccounts.deployer],
      }),
    ).to.equal(expectedDynamicVaultAmount.toString());
  });

  it("Init the TCF,get owner amount,expect amount1 of address_7 is equal to 3840000,address_3 is equal to 364000", async function () {
    const number_3 = percentOfSupply(3n);
    expect(
      await env.read(TCF1, {
        functionName: "balanceOf",
        args: [address_3],
      }),
    ).to.equal(number_3.toString());

    const number_7 = percentOfSupply(7n);
    expect(
      await env.read(TCF1, {
        functionName: "balanceOf",
        args: [address_7],
      }),
    ).to.equal(number_7.toString());

    const number_90 = percentOfSupply(90n);
    expect(
      await env.read(TCF1, {
        functionName: "balanceOf",
        args: [TCF1.address],
      }),
    ).to.equal(number_90.toString());
  });

  it("tcf: test supportsInterface", async function () {
    const ercMetadataInterfaceID = "0xa219a025" as `0x${string}`;
    expect(
      await env.read(TCF1, {
        functionName: "supportsInterface",
        args: [ercMetadataInterfaceID],
        account: namedAccounts.deployer,
      }),
    ).to.equal(true);
  });

  describe("Vault release and withdrawal", function () {
    const dailyStatic = 400_000_000_000n;
    const dailyDynamic = 600_000_000_000n;

    async function initializeWithVaults() {
      await env.execute(TCF1, {
        functionName: "initialize",
        args: [vault.address, vault_copy.address, address_3, address_7],
        account: namedAccounts.deployer,
      });
    }

    beforeEach(async () => {
      ({ env, TCF1, vault, vault_copy, namedAccounts } =
        await networkHelpers.loadFixture(deployAll));
      await initializeWithVaults();
    });

    it("releaseDailyTokens: transfers tokens into static and dynamic vaults", async function () {
      const staticBalanceBefore = await env.read(TCF1, {
        functionName: "balanceOf",
        args: [vault.address],
      });
      const dynamicBalanceBefore = await env.read(TCF1, {
        functionName: "balanceOf",
        args: [vault_copy.address],
      });

      await env.execute(TCF1, {
        functionName: "releaseDailyTokens",
        account: namedAccounts.deployer,
      });

      const staticBalanceAfter = await env.read(TCF1, {
        functionName: "balanceOf",
        args: [vault.address],
      });
      const dynamicBalanceAfter = await env.read(TCF1, {
        functionName: "balanceOf",
        args: [vault_copy.address],
      });

      expect(BigInt(staticBalanceAfter) - BigInt(staticBalanceBefore)).to.equal(
        dailyStatic,
      );
      expect(
        BigInt(dynamicBalanceAfter) - BigInt(dynamicBalanceBefore),
      ).to.equal(dailyDynamic);
    });

    it("releaseDailyTokens: decreases contract balance accordingly", async function () {
      const contractBalanceBefore = await env.read(TCF1, {
        functionName: "balanceOf",
        args: [TCF1.address],
      });

      await env.execute(TCF1, {
        functionName: "releaseDailyTokens",
        account: namedAccounts.deployer,
      });

      const contractBalanceAfter = await env.read(TCF1, {
        functionName: "balanceOf",
        args: [TCF1.address],
      });

      expect(
        BigInt(contractBalanceBefore) - BigInt(contractBalanceAfter),
      ).to.equal(dailyStatic + dailyDynamic);
    });

    it("withdrawFromStaticVault: owner can withdraw released tokens", async function () {
      const staticVault = await env.read(TCF1, {
        functionName: "getStaticContractAddress",
      });

      await env.execute(TCF1, {
        functionName: "releaseDailyTokens",
        account: namedAccounts.deployer,
      });

      const receiver = namedAccounts.admin1;
      const receiverBalanceBefore = await env.read(TCF1, {
        functionName: "balanceOf",
        args: [receiver],
      });

      await env.execute(TCF1, {
        functionName: "transferFrom",
        args: [staticVault, receiver, dailyStatic],
        account: namedAccounts.deployer,
      });

      const receiverBalanceAfter = await env.read(TCF1, {
        functionName: "balanceOf",
        args: [receiver],
      });

      expect(
        BigInt(receiverBalanceAfter) - BigInt(receiverBalanceBefore),
      ).to.equal(dailyStatic);

      const staticVaultBalance = await env.read(TCF1, {
        functionName: "balanceOf",
        args: [staticVault],
      });
      expect(BigInt(staticVaultBalance)).to.equal(0n);
    });

    it("withdrawFromDynamicVault: owner can withdraw released tokens", async function () {
      const dynamicVault = await env.read(TCF1, {
        functionName: "getDynamicContractAddress",
      });

      await env.execute(TCF1, {
        functionName: "releaseDailyTokens",
        account: namedAccounts.deployer,
      });

      const receiver = namedAccounts.admin2;
      const receiverBalanceBefore = await env.read(TCF1, {
        functionName: "balanceOf",
        args: [receiver],
      });

      await env.execute(TCF1, {
        functionName: "transferFrom",
        args: [dynamicVault, receiver, dailyDynamic],
        account: namedAccounts.deployer,
      });

      const receiverBalanceAfter = await env.read(TCF1, {
        functionName: "balanceOf",
        args: [receiver],
      });
      expect(
        BigInt(receiverBalanceAfter) - BigInt(receiverBalanceBefore),
      ).to.equal(dailyDynamic);

      const dynamicVaultBalance = await env.read(TCF1, {
        functionName: "balanceOf",
        args: [dynamicVault],
      });
      expect(BigInt(dynamicVaultBalance)).to.equal(0n);
    });

    //

    it("withdrawFromStaticVault: amount must be greater than zero", async function () {
      await env.execute(TCF1, {
        functionName: "releaseDailyTokens",
        account: namedAccounts.deployer,
      });

      await expect(
        env.execute(TCF1, {
          functionName: "transferFrom",
          args: [vault.address, namedAccounts.admin1, 0n],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("ERC20: Amount must be greater than 0");
    });

    it("withdrawFromDynamicVault: amount must be greater than zero", async function () {
      await env.execute(TCF1, {
        functionName: "releaseDailyTokens",
        account: namedAccounts.deployer,
      });

      await expect(
        env.execute(TCF1, {
          functionName: "transferFrom",
          args: [vault_copy.address, namedAccounts.admin1, 0n],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("ERC20: Amount must be greater than 0");
    });

    it("releaseDailyTokens: only owner can call", async function () {
      await expect(
        env.execute(TCF1, {
          functionName: "releaseDailyTokens",
          account: namedAccounts.admin1,
        }),
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });

    it("withdrawFromStaticVault: only owner can call", async function () {
      await env.execute(TCF1, {
        functionName: "releaseDailyTokens",
        account: namedAccounts.deployer,
      });

      await expect(
        env.execute(TCF1, {
          functionName: "transferFrom",
          args: [vault.address, namedAccounts.admin1, dailyStatic],
          account: namedAccounts.admin1,
        }),
      ).to.be.revertedWith("ERC20: insufficient allowance");
    });

    it("withdrawFromDynamicVault: only owner can call", async function () {
      await env.execute(TCF1, {
        functionName: "releaseDailyTokens",
        account: namedAccounts.deployer,
      });

      await expect(
        env.execute(TCF1, {
          functionName: "transferFrom",
          args: [vault_copy.address, namedAccounts.admin1, dailyDynamic],
          account: namedAccounts.admin1,
        }),
      ).to.be.revertedWith("ERC20: insufficient allowance");
    });
  });
});

// 测试合约暂停和解除暂停功能
describe("Pause and Unpause", function () {
  const address_3 = namedAccounts.admin1;
  const address_7 = namedAccounts.admin2;
  const totalSupplyUnits = 5_200_000n * 1_000_000_000n;
  const percentOfSupply = (percent: bigint) =>
    (totalSupplyUnits * percent) / 100n; // use BigInt math to avoid float rounding

  beforeEach(async () => {
    ({ env, TCF1, namedAccounts } =
      await networkHelpers.loadFixture(deployAll));

    await env.execute(TCF1, {
      functionName: "initialize",
      args: [vault.address, vault_copy.address, address_3, address_7],
      account: namedAccounts.deployer,
    });
  });

  it("pause: only owner can call", async function () {
    await expect(
      env.execute(TCF1, {
        functionName: "pause",
        account: namedAccounts.admin1,
      }),
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("unpause: only owner can call", async function () {
    // First pause the contract
    await env.execute(TCF1, {
      functionName: "pause",
      account: namedAccounts.deployer,
    });

    await expect(
      env.execute(TCF1, {
        functionName: "unpause",
        account: namedAccounts.admin1,
      }),
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("pause and unpause: owner can pause and unpause the contract", async function () {
    // Pause the contract
    await env.execute(TCF1, {
      functionName: "pause",
      account: namedAccounts.deployer,
    });

    // Check if the contract is paused by trying to transfer tokens
    await expect(
      env.execute(TCF1, {
        functionName: "releaseDailyTokens",
        args: [],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("Pausable: paused");

    // Unpause the contract
    await env.execute(TCF1, {
      functionName: "unpause",
      account: namedAccounts.deployer,
    });
    // Now the transfer should succeed
    await env.execute(TCF1, {
      functionName: "releaseDailyTokens",
      args: [],
      account: namedAccounts.deployer,
    });
  });

  // 测试暂停状态下不可以提款
  it("withdrawFromStaticVault when paused: should revert", async function () {
    await env.execute(TCF1, {
      functionName: "releaseDailyTokens",
      args: [],
      account: namedAccounts.deployer,
    });

    await env.execute(TCF1, {
      functionName: "pause",
      account: namedAccounts.deployer,
    });

    expect(
      await env.read(TCF1, {
        functionName: "paused",
      }),
    ).to.equal(true);

    await expect(
      env.execute(TCF1, {
        functionName: "transferFrom",
        args: [vault.address, namedAccounts.admin1, 1000n],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("Pausable: paused");

    await expect(
      env.execute(TCF1, {
        functionName: "transferFrom",
        args: [vault_copy.address, namedAccounts.admin1, 1000n],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("Pausable: paused");

    // unpause for other tests
    await env.execute(TCF1, {
      functionName: "unpause",
      account: namedAccounts.deployer,
    });

    // 提款
    await env.execute(TCF1, {
      functionName: "transferFrom",
      args: [vault.address, namedAccounts.admin1, 1000n],
      account: namedAccounts.deployer,
    });

    await env.execute(TCF1, {
      functionName: "transferFrom",
      args: [vault_copy.address, namedAccounts.admin1, 1000n],
      account: namedAccounts.deployer,
    });
  });

  // 测试暂停状态下无法购买NFT
  it("purchaseNFT when paused: should revert", async function () {
    await env.execute(TCF1, {
      functionName: "releaseDailyTokens",
      args: [],
      account: namedAccounts.deployer,
    });

    // 给admin1提取一定的代币
    await env.execute(TCF1, {
      functionName: "transferFrom",
      args: [vault.address, namedAccounts.admin1, 50000000n],
      account: namedAccounts.deployer,
    });

    await env.execute(TCF1, {
      functionName: "pause",
      account: namedAccounts.deployer,
    });

    // 代表购买第4类NFT，数量为4
    let data = numberTo32ByteHex(3);
    data += numberTo32ByteHex(4).slice(2);

    await expect(
      env.execute(TCF1, {
        functionName: "transferAndCall",
        args: [TCF_NFT.address, 1n, data as `0x${string}`],
        account: namedAccounts.admin1,
      }),
    ).to.be.revertedWith("Pausable: paused");
  });
});

// 测试 buyNFTByDCF（ERC1363 transferAndCall 的封装）
describe("buyNFTByDCF", function () {
  let SimpleTokenReceiver: any;

  const address_3 = namedAccounts.admin1;
  const address_7 = namedAccounts.admin2;

  beforeEach(async () => {
    ({ env, TCF1, vault, vault_copy, namedAccounts, SimpleTokenReceiver } =
      await networkHelpers.loadFixture(deployAll));

    await env.execute(TCF1, {
      functionName: "initialize",
      args: [vault.address, vault_copy.address, address_3, address_7],
      account: namedAccounts.deployer,
    });
    // release tokens to vaults
    await env.execute(TCF1, {
      functionName: "releaseDailyTokens",
      account: namedAccounts.deployer,
    });

    // withdraw some tokens to buyer (admin1)
    await env.execute(TCF1, {
      functionName: "transferFrom",
      args: [vault.address, namedAccounts.admin1, 10_000_000_000n],
      account: namedAccounts.deployer,
    });

    // withdraw some tokens to buyer (deployer)
    await env.execute(TCF1, {
      functionName: "transferFrom",
      args: [vault.address, namedAccounts.deployer, 10_000_000_000n],
      account: namedAccounts.deployer,
    });

    // 初始化DCF_NFT合约
    await env.execute(TCF_NFT, {
      functionName: "addSupportedToken",
      args: [TCF1.address],
      account: namedAccounts.deployer,
    });

    // 设置 NFT 的 indate/ratio
    await env.execute(TCF_NFT, {
      functionName: "initPrice",
      args: [getPrices(TCF1.address)],
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

  it("success: transfers tokens, calls receiver, and forwards encoded (tokenId,buyAmount)", async function () {
    const tokenId = 3n;
    const buyAmount = 4n;
    const value = 16n;
    const buyer = namedAccounts.admin1;

    await env.execute(TCF1, {
      functionName: "buyNFTByDCF",
      args: [TCF_NFT.address, tokenId, buyAmount, value],
      account: namedAccounts.deployer,
    });

    await env.execute(TCF_NFT, {
      functionName: "insert",
      args: [namedAccounts.deployer, namedAccounts.deployer, true, false],
      account: namedAccounts.admin1,
    });

    const txReceipt = await env.execute(TCF1, {
      functionName: "buyNFTByDCF",
      args: [TCF_NFT.address, tokenId, buyAmount, value],
      account: buyer,
    });

    expect(
      await env.read(TCF_NFT, {
        functionName: "balanceOf",
        args: [buyer, tokenId],
      }),
    ).to.equal(buyAmount);
  });

  it("revert: when paused", async function () {
    await env.execute(TCF1, {
      functionName: "pause",
      account: namedAccounts.deployer,
    });

    await expect(
      env.execute(TCF1, {
        functionName: "buyNFTByDCF",
        args: [TCF_NFT.address, 1n, 1n, 1n],
        account: namedAccounts.admin1,
      }),
    ).to.be.revertedWith("Pausable: paused");
  });

  it("revert: nftContract is not a contract address", async function () {
    await expect(
      env.execute(TCF1, {
        functionName: "buyNFTByDCF",
        args: [namedAccounts.admin2, 1n, 1n, 1n],
        account: namedAccounts.admin1,
      }),
    ).to.be.revertedWith("ERC1363: transfer to non-contract");
  });

  it("revert: nftContract does not implement IERC1363Receiver", async function () {
    // vault is a contract but not an ERC1363 receiver
    await expect(
      env.execute(TCF1, {
        functionName: "buyNFTByDCF",
        args: [vault.address, 1n, 1n, 1n],
        account: namedAccounts.admin1,
      }),
    ).to.be.revertedWith("ERC1363: to is a incorrect address");
  });

  it("revert: buyer has insufficient balance", async function () {
    // 将deployer账户的余额转移到admin1，确保deployer账户没有足够的余额购买NFT
    await env.execute(TCF1, {
      functionName: "transfer",
      args: [namedAccounts.admin1, 10_000_000_000n],
      account: namedAccounts.deployer,
    });

    // deployer has 0 balance after initialize (tokens are minted to contract/admin accounts)
    await expect(
      env.execute(TCF1, {
        functionName: "buyNFTByDCF",
        args: [TCF_NFT.address, 1n, 1n, 2n],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
  });

  // 测试totalSupply是否等于5_200_000n * 1_000_000_000n
  it("tcf: test contract balance", async function () {
    const totalSupply = await env.read(TCF1, {
      functionName: "totalSupply",
    });
    expect(totalSupply).to.equal(5_200_000n * 1_000_000_000n);
  });

  // 测试通过DCF购买NFT之后，totalSupply是否仍然等于5_200_000n * 1_000_000_000n
  it("tcf: test contract balance after purchase", async function () {
    // deployer has 0 balance after initialize (tokens are minted to contract/admin accounts)
    await env.execute(TCF1, {
      functionName: "buyNFTByDCF",
      args: [TCF_NFT.address, 1n, 1n, 2n],
      account: namedAccounts.deployer,
    });

    const totalSupply = await env.read(TCF1, {
      functionName: "totalSupply",
    });
    expect(totalSupply).to.equal(5_200_000n * 1_000_000_000n);
  });

  // 测试通过DCF购买NFT之后，死地址余额是否等于购买NFT花费的余额
  it("tcf: test burn address balance after purchase", async function () {
    // deployer has 0 balance after initialize (tokens are minted to contract/admin accounts)
    await env.execute(TCF1, {
      functionName: "buyNFTByDCF",
      args: [TCF_NFT.address, 1n, 1n, 2n],
      account: namedAccounts.deployer,
    });

    // 获取DeadAddress地址
    const burnAddress = await env.read(TCF1, {
      functionName: "getDeadAddress",
    });

    expect(burnAddress).to.equal("0x000000000000000000000000000000000000dEaD");

    const burnAddressBalance = await env.read(TCF1, {
      functionName: "balanceOf",
      args: ["0x000000000000000000000000000000000000dEaD" as `0x${string}`],
    });
    expect(burnAddressBalance).to.equal(2n);
  });
});

// 测试 withdrawAward函数
describe("withdrawAward", function () {
  let SimpleTokenReceiver: any;

  const address_3 = namedAccounts.admin1;
  const address_7 = namedAccounts.admin2;

  beforeEach(async () => {
    ({ env, TCF1, vault, vault_copy, namedAccounts, SimpleTokenReceiver } =
      await networkHelpers.loadFixture(deployAll));

    await env.execute(TCF1, {
      functionName: "initialize",
      args: [vault.address, vault_copy.address, address_3, address_7],
      account: namedAccounts.deployer,
    });
    // release tokens to vaults
    await env.execute(TCF1, {
      functionName: "releaseDailyTokens",
      account: namedAccounts.deployer,
    });

    // withdraw some tokens to buyer (admin1)
    await env.execute(TCF1, {
      functionName: "transferFrom",
      args: [vault.address, namedAccounts.admin1, 10_000_000_000n],
      account: namedAccounts.deployer,
    });

    // 初始化DCF_NFT合约
    await env.execute(TCF_NFT, {
      functionName: "addSupportedToken",
      args: [TCF1.address],
      account: namedAccounts.deployer,
    });

    // 设置 NFT 的 indate/ratio
    await env.execute(TCF_NFT, {
      functionName: "initPrice",
      args: [getPrices(TCF1.address)],
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

    // releaseDailyTokens函数调用
    await env.execute(TCF1, {
      functionName: "releaseDailyTokens",
      account: namedAccounts.deployer,
    });
  });

  it("only owner can call", async function () {
    // 获取静态合约地址
    const staticVault = await env.read(TCF1, {
      functionName: "getStaticContractAddress",
    });

    await expect(
      env.execute(TCF1, {
        functionName: "withdrawAward",
        args: [staticVault, namedAccounts.admin1, 2n, namedAccounts.admin2, 1n],
        account: namedAccounts.admin1,
      }),
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("awardAmount must be greater than zero", async function () {
    // 获取静态合约地址
    const staticVault = await env.read(TCF1, {
      functionName: "getStaticContractAddress",
    });
    await expect(
      env.execute(TCF1, {
        functionName: "withdrawAward",
        args: [staticVault, namedAccounts.admin1, 0n, namedAccounts.admin2, 0n],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("TCF: Award amount must be greater than 0");
  });

  it("service charge address cannot be zero address", async function () {
    // 获取静态合约地址
    const staticVault = await env.read(TCF1, {
      functionName: "getStaticContractAddress",
    });

    await expect(
      env.execute(TCF1, {
        functionName: "withdrawAward",
        args: [staticVault, namedAccounts.admin1, 2n, zeroAddress, 1n],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith(
      "TCF: Service charge receiver cannot be the zero address",
    );
  });

  it("withdrawAward: should transfer award to receiver and service charge to service charge address", async function () {
    // 获取静态合约地址
    const staticVault = await env.read(TCF1, {
      functionName: "getStaticContractAddress",
    });

    const receiver = namedAccounts.admin1;
    const serviceChargeAddress = namedAccounts.admin2;
    const awardAmount = 100n;
    const serviceChargeAmount = 10n;

    const receiverBalanceBefore = await env.read(TCF1, {
      functionName: "balanceOf",
      args: [receiver],
    });
    const serviceChargeBalanceBefore = await env.read(TCF1, {
      functionName: "balanceOf",
      args: [serviceChargeAddress],
    });

    await env.execute(TCF1, {
      functionName: "withdrawAward",
      args: [
        staticVault,
        receiver,
        awardAmount - serviceChargeAmount,
        serviceChargeAddress,
        serviceChargeAmount,
      ],
      account: namedAccounts.deployer,
    });

    const receiverBalanceAfter = await env.read(TCF1, {
      functionName: "balanceOf",
      args: [receiver],
    });
    const serviceChargeBalanceAfter = await env.read(TCF1, {
      functionName: "balanceOf",
      args: [serviceChargeAddress],
    });

    expect(
      BigInt(receiverBalanceAfter) - BigInt(receiverBalanceBefore),
    ).to.equal(awardAmount - serviceChargeAmount);

    expect(
      BigInt(serviceChargeBalanceAfter) - BigInt(serviceChargeBalanceBefore),
    ).to.equal(serviceChargeAmount);
  });
});

// 测试事件
describe("event", function () {
  const address_3 = namedAccounts.admin1;
  const address_7 = namedAccounts.admin2;
  const totalSupplyUnits = 5_200_000n * 1_000_000_000n;

  beforeEach(async () => {
    ({ env, TCF1, vault, vault_copy, namedAccounts } =
      await networkHelpers.loadFixture(deployAll));

    await env.execute(TCF1, {
      functionName: "initialize",
      args: [vault.address, vault_copy.address, address_3, address_7],
      account: namedAccounts.deployer,
    });
  });

  it("releaseDailyTokens: emits DailyTokensReleased event", async function () {
    const txReceipt = await env.execute(TCF1, {
      functionName: "releaseDailyTokens",
      account: namedAccounts.deployer,
    });

    const filter = await env.viem.publicClient.createEventFilter({
      address: TCF1.address,
      event: parseAbiItem(
        `event DailyTokensReleased(address indexed operator,uint256 timeStamp)`,
      ),
      args: { operator: namedAccounts.deployer },
      strict: true,
    });

    const logs = await env.viem.publicClient.getFilterLogs({ filter });

    expect(logs[0].args.operator.toLowerCase()).to.equal(
      namedAccounts.deployer,
    );
  });
});

// 测是erc-20原始接口函数
describe("ERC20 original interface functions", function () {
  const address_3 = namedAccounts.admin1;
  const address_7 = namedAccounts.admin2;
  const totalSupplyUnits = 5_200_000n * 1_000_000_000n;

  beforeEach(async () => {
    ({ env, TCF1, vault, vault_copy, namedAccounts } =
      await networkHelpers.loadFixture(deployAll));

    await env.execute(TCF1, {
      functionName: "initialize",
      args: [vault.address, vault_copy.address, address_3, address_7],
      account: namedAccounts.deployer,
    });
  });

  // 测试approve和allowance函数
  it("approve and allowance: should set and get allowance correctly", async function () {
    const spender = namedAccounts.admin1;
    const amount = 10000000000n;

    // Approve the spender
    await env.execute(TCF1, {
      functionName: "approve",
      args: [spender, amount],
      account: namedAccounts.deployer,
    });

    // Check the allowance
    const allowance = await env.read(TCF1, {
      functionName: "allowance",
      args: [namedAccounts.deployer, spender],
    });

    expect(BigInt(allowance)).to.equal(amount);
  });

  // 测试transfer函数
  it("transfer: should transfer tokens correctly", async function () {
    // 将接受者设置deployer，发送者设为admin1
    const recipient = namedAccounts.deployer;
    const amount = 5000000000n;

    const senderBalanceBefore = await env.read(TCF1, {
      functionName: "balanceOf",
      args: [namedAccounts.admin1],
    });
    const recipientBalanceBefore = await env.read(TCF1, {
      functionName: "balanceOf",
      args: [recipient],
    });

    // Transfer tokens
    await env.execute(TCF1, {
      functionName: "transfer",
      args: [recipient, amount],
      account: namedAccounts.admin1,
    });

    const senderBalanceAfter = await env.read(TCF1, {
      functionName: "balanceOf",
      args: [namedAccounts.admin1],
    });
    const recipientBalanceAfter = await env.read(TCF1, {
      functionName: "balanceOf",
      args: [recipient],
    });

    expect(BigInt(senderBalanceBefore) - BigInt(senderBalanceAfter)).to.equal(
      amount,
    );
    expect(
      BigInt(recipientBalanceAfter) - BigInt(recipientBalanceBefore),
    ).to.equal(amount);
  });

  it("transferFrom: spender moves tokens on behalf of owner", async function () {
    const ownerAccount = namedAccounts.admin1;
    const spenderAccount = namedAccounts.deployer;
    const recipientAccount = namedAccounts.admin2;
    const amount = 8000000000n;

    await env.execute(TCF1, {
      functionName: "approve",
      args: [spenderAccount, amount],
      account: ownerAccount,
    });

    const ownerBalanceBefore = BigInt(
      await env.read(TCF1, {
        functionName: "balanceOf",
        args: [ownerAccount],
      }),
    );
    const recipientBalanceBefore = BigInt(
      await env.read(TCF1, {
        functionName: "balanceOf",
        args: [recipientAccount],
      }),
    );

    await env.execute(TCF1, {
      functionName: "transferFrom",
      args: [ownerAccount, recipientAccount, amount],
      account: spenderAccount,
    });

    const ownerBalanceAfter = BigInt(
      await env.read(TCF1, {
        functionName: "balanceOf",
        args: [ownerAccount],
      }),
    );
    const recipientBalanceAfter = BigInt(
      await env.read(TCF1, {
        functionName: "balanceOf",
        args: [recipientAccount],
      }),
    );

    expect(ownerBalanceBefore - ownerBalanceAfter).to.equal(amount);
    expect(recipientBalanceAfter - recipientBalanceBefore).to.equal(amount);

    const remainingAllowance = await env.read(TCF1, {
      functionName: "allowance",
      args: [ownerAccount, spenderAccount],
    });
    expect(BigInt(remainingAllowance)).to.equal(0n);
  });

  it("increaseAllowance and decreaseAllowance: adjust allowance correctly", async function () {
    const ownerAccount = namedAccounts.admin1;
    const spenderAccount = namedAccounts.deployer;
    const baseAllowance = 2000000000n;
    const increment = 3000000000n;
    const decrement = 1000000000n;

    await env.execute(TCF1, {
      functionName: "approve",
      args: [spenderAccount, baseAllowance],
      account: ownerAccount,
    });

    await env.execute(TCF1, {
      functionName: "increaseAllowance",
      args: [spenderAccount, increment],
      account: ownerAccount,
    });

    let allowance = await env.read(TCF1, {
      functionName: "allowance",
      args: [ownerAccount, spenderAccount],
    });
    expect(BigInt(allowance)).to.equal(baseAllowance + increment);

    await env.execute(TCF1, {
      functionName: "decreaseAllowance",
      args: [spenderAccount, decrement],
      account: ownerAccount,
    });

    allowance = await env.read(TCF1, {
      functionName: "allowance",
      args: [ownerAccount, spenderAccount],
    });
    expect(BigInt(allowance)).to.equal(baseAllowance + increment - decrement);
  });

  it("totalSupply and decimals: expose ERC20 metadata", async function () {
    const totalSupply = await env.read(TCF1, {
      functionName: "totalSupply",
    });
    expect(totalSupply).to.equal(totalSupplyUnits.toString());

    const decimals = await env.read(TCF1, {
      functionName: "decimals",
    });
    expect(Number(decimals)).to.equal(9);
  });
});
