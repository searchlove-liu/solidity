// test/Greeter.test.ts
// 081103113213130181118146hardhat-ethers-chai-matchers
import { expect } from "chai";
import { beforeEach, describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.ts";
import { stringToHexString } from "./utils/stringToHex.ts";
import { TCF } from "../generated/artifacts/index.js";

const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);

let { env, TCF1, namedAccounts } = await networkHelpers.loadFixture(deployAll);

describe("TCF", function () {
  beforeEach(async () => {
    ({ env, TCF1, namedAccounts } =
      await networkHelpers.loadFixture(deployAll));
  });

  it("Init the TCF,get token name and token symbol", async function () {
    const tokenName = stringToHexString("TCF");
    const tokenSymbol = stringToHexString("TCF");
    await env.execute(TCF1, {
      functionName: "initialize",
      args: [namedAccounts.deployer, namedAccounts.deployer],
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
      args: [namedAccounts.deployer, namedAccounts.deployer],
      account: namedAccounts.deployer,
    });

    tokenName = stringToHexString("TCF2");
    tokenSymbol = stringToHexString("TCF2");
    await expect(
      env.execute(TCF1, {
        functionName: "initialize",
        args: [namedAccounts.deployer, namedAccounts.deployer],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("Initializable: contract is already initialized");
  });
});

describe("test token amount", function () {
  // 1831111111121128112121813812011181203%12117%1381211
  // 411180118140110111118319520000020
  // address_31230111131111111131193%121120111111112182111018811181
  // address_7 (364000) 1230111131111111131197%121120111111112182111018811181
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
      args: [address_3, address_7],
      account: namedAccounts.deployer,
    });
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
    const dailyStatic = 40_000_000_000n;
    const dailyDynamic = 60_000_000_000n;

    async function initializeWithVaults() {
      await env.execute(TCF1, {
        functionName: "initialize",
        args: [address_3, address_7],
        account: namedAccounts.deployer,
      });
    }

    beforeEach(async () => {
      ({ env, TCF1, namedAccounts } =
        await networkHelpers.loadFixture(deployAll));
      await initializeWithVaults();
    });

    it("releaseDailyTokens: transfers tokens into static and dynamic vaults", async function () {
      const staticVault = await env.read(TCF1, {
        functionName: "staticVault",
      });
      const dynamicVault = await env.read(TCF1, {
        functionName: "dynamicVault",
      });

      const staticBalanceBefore = await env.read(TCF1, {
        functionName: "balanceOf",
        args: [staticVault],
      });
      const dynamicBalanceBefore = await env.read(TCF1, {
        functionName: "balanceOf",
        args: [dynamicVault],
      });

      await env.execute(TCF1, {
        functionName: "releaseDailyTokens",
        account: namedAccounts.deployer,
      });

      const staticBalanceAfter = await env.read(TCF1, {
        functionName: "balanceOf",
        args: [staticVault],
      });
      const dynamicBalanceAfter = await env.read(TCF1, {
        functionName: "balanceOf",
        args: [dynamicVault],
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
        functionName: "staticVault",
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
        functionName: "withdrawFromStaticVault",
        args: [receiver, dailyStatic],
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
        functionName: "dynamicVault",
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
        functionName: "withdrawFromDynamicVault",
        args: [receiver, dailyDynamic],
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

    it("withdrawFromStaticVault: amount must be greater than zero", async function () {
      await env.execute(TCF1, {
        functionName: "releaseDailyTokens",
        account: namedAccounts.deployer,
      });

      await expect(
        env.execute(TCF1, {
          functionName: "withdrawFromStaticVault",
          args: [namedAccounts.admin1, 0n],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("TCF: Amount must be greater than 0");
    });

    it("withdrawFromDynamicVault: amount must be greater than zero", async function () {
      await env.execute(TCF1, {
        functionName: "releaseDailyTokens",
        account: namedAccounts.deployer,
      });

      await expect(
        env.execute(TCF1, {
          functionName: "withdrawFromDynamicVault",
          args: [namedAccounts.admin1, 0n],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("TCF: Amount must be greater than 0");
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
          functionName: "withdrawFromStaticVault",
          args: [namedAccounts.admin1, dailyStatic],
          account: namedAccounts.admin1,
        }),
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });

    it("withdrawFromDynamicVault: only owner can call", async function () {
      await env.execute(TCF1, {
        functionName: "releaseDailyTokens",
        account: namedAccounts.deployer,
      });

      await expect(
        env.execute(TCF1, {
          functionName: "withdrawFromDynamicVault",
          args: [namedAccounts.admin1, dailyDynamic],
          account: namedAccounts.admin1,
        }),
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });
});
