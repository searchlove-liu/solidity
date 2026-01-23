// test/Greeter.test.ts
// 需要安装这个插件hardhat-ethers-chai-matchers
import { expect } from "chai";
import { beforeEach, describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.ts";
import { hexToNumber } from "./utils/stringToHex.ts";
import { getPrices, zeroAddress, getErrorPrices } from "./price.ts";
const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);
let { env, SimpleTokenReceiver, ERC1363Example, namedAccounts } = await networkHelpers.loadFixture(
    deployAll
);

// 测试 ERC1363 合约，并与 SimpleTokenReceiver 交互
describe("ERC1363 合约测试", function () {
    beforeEach(async function () {
        // 在每个测试用例之前重新加载合约和账户
        ({ env, SimpleTokenReceiver, ERC1363Example, namedAccounts } = await networkHelpers.loadFixture(
            deployAll
        ));
    });

    // 测试 ERC1363 的 transferAndCall 功能
    describe("transferAndCall 功能测试", function () {
        it("transferAndCall 应成功调用 SimpleTokenReceiver 的 onTransferReceived 方法", async function () {
            const transferAmount = 100n;
            // 首先，给 ERC1363 合约铸造一些代币给 deployer
            await env.execute(ERC1363Example, {
                functionName: "_mintExample",
                args: [namedAccounts.deployer, transferAmount],
                account: namedAccounts.deployer
            });
            // 然后，调用 transferAndCall 方法将代币转移到 SimpleTokenReceiver 合约
            await env.execute(ERC1363Example, {
                functionName: "transferAndCall",
                args: [SimpleTokenReceiver.address, 10n, "0x" as `0x${string}`],
                account: namedAccounts.deployer
            });
            // 最后，验证 SimpleTokenReceiver 合约是否正确接收了代币
            expect(await env.read(SimpleTokenReceiver, {
                functionName: "deposited",
                args: [namedAccounts.deployer],
            })).to.equal(10n);
            // 验证 SimpleTokenReceiver 合约记录的 tokenAddress 是否正确
            expect(
                (await env.read(SimpleTokenReceiver, {
                    functionName: "tokenAddress",
                })).toLocaleLowerCase()
            ).to.equal(ERC1363Example.address);
        });
    });
});