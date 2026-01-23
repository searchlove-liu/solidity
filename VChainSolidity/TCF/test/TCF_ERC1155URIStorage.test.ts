// test/Greeter.test.ts
// 需要安装这个插件hardhat-ethers-chai-matchers
import { expect } from "chai";
import { beforeEach, describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.ts";
import { baseURI } from "./baseURI.ts";
const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);
let { env, namedAccounts, test_TCF_ERC1155URIStorage } = await networkHelpers.loadFixture(
    deployAll
);

describe("TCF_ERC1155URIStorage", function () {
    beforeEach(async function () {
        ({ env, namedAccounts, test_TCF_ERC1155URIStorage } = await networkHelpers.loadFixture(deployAll));
    })

    describe("_setBaseURI: 设置baseURI", function () {

        it("设置baseURI成功", async function () {
            await env.execute(test_TCF_ERC1155URIStorage, {
                functionName: "test_SetBaseURI",
                args: [baseURI],
                account: namedAccounts.deployer
            });
        })

        it("获取某个id的uri", async function () {
            await env.execute(test_TCF_ERC1155URIStorage, {
                functionName: "test_SetBaseURI",
                args: [baseURI],
                account: namedAccounts.deployer
            });

            // 获取tokenURI进行验证
            expect(
                await env.read(test_TCF_ERC1155URIStorage, {
                    functionName: "_uri",
                    args: [2n, 1n],
                })
            ).to.equal("https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmT72uJzk6RMeoXJ1YQyCC7A9bcPDc5o1KgBEkcX6cQq7J/1.json");
        })

        it("重复设置baseURI，期望失败", async function () {
            await env.execute(test_TCF_ERC1155URIStorage, {
                functionName: "test_SetBaseURI",
                args: [baseURI],
                account: namedAccounts.deployer
            });

            await expect(
                env.execute(test_TCF_ERC1155URIStorage, {
                    functionName: "test_SetBaseURI",
                    args: [baseURI],
                    account: namedAccounts.deployer
                })
            ).to.be.revertedWith("Base URI already initialized");
        })
    })
});