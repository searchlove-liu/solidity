// test/Greeter.test.ts
// 需要安装这个插件hardhat-ethers-chai-matchers
import { expect } from "chai";
import { describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.js";
import { stringToHexString } from "./utils/stringToHex.ts"

const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);

describe("TCF", function () {
    it("Init the TCF,get token name and token symbol", async function () {
        const { env, TCF, namedAccounts, unnamedAccounts } = await networkHelpers.loadFixture(
            deployAll
        );
        const tokenName = stringToHexString("TCF");
        const tokenSymbol = stringToHexString("TCF");
        await env.execute(TCF, {
            functionName: "initialize",
            args: [`0x${tokenName}`, `0x${tokenSymbol}`],
            account: namedAccounts.deployer
        });

        expect(
            await env.read(TCF, {
                functionName: "name"
            })
        ).to.equal("TCF")

        expect(
            await env.read(TCF, {
                functionName: "symbol"
            })
        ).to.equal("TCF")
    });

    it("Initial two times of TCF,expect reverted with 'Initializable: contract is already initialized'", async function () {
        const { env, TCF, namedAccounts, unnamedAccounts } = await networkHelpers.loadFixture(
            deployAll
        );
        let tokenName = stringToHexString("TCF");
        let tokenSymbol = stringToHexString("TCF");
        await env.execute(TCF, {
            functionName: "initialize",
            args: [`0x${tokenName}`, `0x${tokenSymbol}`],
            account: namedAccounts.deployer
        });

        tokenName = stringToHexString("TCF2");
        tokenSymbol = stringToHexString("TCF2");
        await expect(
            env.execute(TCF, {
                functionName: "initialize",
                args: [`0x${tokenName}`, `0x${tokenSymbol}`],
                account: namedAccounts.deployer
            })
        ).to.be.revertedWith("Initializable: contract is already initialized");
    })

    it("Init the TCF,get owner amount,expect amount is equal with 5200000", async function () {
        const { env, TCF, namedAccounts, unnamedAccounts } = await networkHelpers.loadFixture(
            deployAll
        );
        const tokenName = stringToHexString("TCF");
        const tokenSymbol = stringToHexString("TCF");
        await env.execute(TCF, {
            functionName: "initialize",
            args: [`0x${tokenName}`, `0x${tokenSymbol}`],
            account: namedAccounts.deployer
        });

        const deployer = namedAccounts.deployer;
        expect(
            await env.read(TCF, {
                functionName: "balanceOf",
                args: [deployer]
            })
        ).to.equal("5200000")
    })


})