// test/Greeter.test.ts
// 需要安装这个插件hardhat-ethers-chai-matchers
import { expect } from "chai";
import { before, beforeEach, describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.ts";
import { stringToHexString } from "./utils/stringToHex.ts"

const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);

let { env, TCF1, namedAccounts } = await networkHelpers.loadFixture(
    deployAll
);

describe("TCF", function () {
    beforeEach(async () => {
        ({ env, TCF1, namedAccounts } = await networkHelpers.loadFixture(
            deployAll
        ));
    })

    it("Init the TCF,get token name and token symbol", async function () {
        const tokenName = stringToHexString("TCF");
        const tokenSymbol = stringToHexString("TCF");
        await env.execute(TCF1, {
            functionName: "initialize",
            args: [`0x${tokenName}`, `0x${tokenSymbol}`, namedAccounts.deployer, namedAccounts.deployer],
            account: namedAccounts.deployer
        });

        expect(
            await env.read(TCF1, {
                functionName: "name"
            })
        ).to.equal("TCF")

        expect(
            await env.read(TCF1, {
                functionName: "symbol"
            })
        ).to.equal("TCF")
    });

    it("Initial two times of TCF,expect reverted with 'Initializable: contract is already initialized'", async function () {

        let tokenName = stringToHexString("TCF");
        let tokenSymbol = stringToHexString("TCF");
        await env.execute(TCF1, {
            functionName: "initialize",
            args: [`0x${tokenName}`, `0x${tokenSymbol}`, namedAccounts.deployer, namedAccounts.deployer],
            account: namedAccounts.deployer
        });

        tokenName = stringToHexString("TCF2");
        tokenSymbol = stringToHexString("TCF2");
        await expect(
            env.execute(TCF1, {
                functionName: "initialize",
                args: [`0x${tokenName}`, `0x${tokenSymbol}`, namedAccounts.deployer, namedAccounts.deployer],
                account: namedAccounts.deployer
            })
        ).to.be.revertedWith("Initializable: contract is already initialized");
    })

})

describe("test token amount", function () {
    // 暂且将下面地址作为保存总量的3%和7%的地址
    // 代币发行总量为5200000，
    // address_3（156000）表示初始化持有3%的代币地址
    // address_7 (364000) 表示初始化持有7%的代币地址
    const address_3 = namedAccounts.admin1;
    const address_7 = namedAccounts.admin2;

    beforeEach(async () => {
        ({ env, TCF1, namedAccounts } = await networkHelpers.loadFixture(
            deployAll
        ));

        const tokenName = stringToHexString("TCF");
        const tokenSymbol = stringToHexString("TCF");
        await env.execute(TCF1, {
            functionName: "initialize",
            args: [`0x${tokenName}`, `0x${tokenSymbol}`, address_3, address_7],
            account: namedAccounts.deployer
        });
    })


    it("Init the TCF,get owner amount,expect amount1 of address_7 is equal to 3840000,address_3 is equal to 364000", async function () {
        // 获取占比3%地址的代币量
        expect(
            await env.read(TCF1, {
                functionName: "balanceOf",
                args: [address_3]
            })
        ).to.equal("156000")

        // 获取占比7%地址的代币量
        expect(
            await env.read(TCF1, {
                functionName: "balanceOf",
                args: [address_7]
            })
        ).to.equal("364000")

        // deployer是owner，他获取剩余的NFT,3680000
        expect(
            await env.read(TCF1, {
                functionName: "balanceOf",
                args: [namedAccounts.deployer]
            })
        ).to.equal(4680000)
    })

    it("tcf: test supportsInterface", async function () {
        const ercMetadataInterfaceID = "0xa219a025" as `0x${string}`
        expect(await env.read(TCF1, {
            functionName: "supportsInterface",
            args: [ercMetadataInterfaceID],
            account: namedAccounts.deployer
        })).to.equal(true)
    })

})

