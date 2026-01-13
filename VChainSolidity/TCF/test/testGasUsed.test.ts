// test/Greeter.test.ts
// 需要安装这个插件hardhat-ethers-chai-matchers
import { expect } from "chai";
import test, { describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.js";
import { stringToHexString, hexToNumber } from "./utils/stringToHex.ts"

const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);

describe("测试用例", function () {
    const emptyAddress = `0x${"0000000000000000000000000000000000000000"}` as `0x${string}`
    it("testGasUsed", async function () {
        const { env, TCF1, TCF_NFTPrice, namedAccounts, testGasUsed } = await networkHelpers.loadFixture(
            deployAll
        );

        // 只添加数据
        // const result1 = await env.execute(testGasUsed, {
        //     functionName: "pushData",
        //     args: [1n, 1n, false],
        //     account: namedAccounts.deployer
        // })

        // 添加数据删除数据
        // const result2 = await env.execute(testGasUsed, {
        //     functionName: "pushData",
        //     args: [2n, 2n, true],
        //     account: namedAccounts.deployer
        // })

        // 测试ERC20Metadata接口id
        // const interfaceID = await env.read(testGasUsed, {
        //     functionName: "getIERC20MetadataInterfaceId",
        //     args: [],
        //     account: namedAccounts.deployer
        // })
        // console.log(interfaceID)

        // 测试使用call调用erc20合约的symbol函数
        const tokenName = stringToHexString("TCF");
        const tokenSymbol = stringToHexString("TCF");
        await env.execute(TCF1, {
            functionName: "initialize",
            args: [`0x${tokenName}`, `0x${tokenSymbol}`, namedAccounts.admin1, namedAccounts.admin2],
            account: namedAccounts.deployer
        });

        expect(
            await env.read(testGasUsed, {
                functionName: "useCall",
                args: [emptyAddress],
                account: namedAccounts.deployer
            })
        ).to.equal("TCF")


        // console.log(await env.read(testGasUsed, {
        //     functionName: "useCall",
        //     args: [TCF.address],
        //     account: namedAccounts.deployer
        // }))

        // console.log(hexToNumber(result1.gasUsed))   /* 44417 */
        // console.log(hexToNumber(result2.gasUsed))   /* 35716 */
        // 说明添加数据，并删除数据消耗更少的gas，因为删除数据之后，系统给用户返回一定的gas
    });
})