// test/Greeter.test.ts
// 需要安装这个插件hardhat-ethers-chai-matchers
import { expect } from "chai";
import test, { describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.js";
import { stringToHexString, hexToNumber } from "./utils/stringToHex.ts"

const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);

// describe("TCF", function () {
//     it("Init the TCF,get token name and token symbol", async function () {
//         const { env, TCF, namedAccounts, unnamedAccounts } = await networkHelpers.loadFixture(
//             deployAll
//         );
//         const tokenName = stringToHexString("TCF");
//         const tokenSymbol = stringToHexString("TCF");
//         await env.execute(TCF, {
//             functionName: "initialize",
//             args: [`0x${tokenName}`, `0x${tokenSymbol}`, namedAccounts.deployer, namedAccounts.deployer],
//             account: namedAccounts.deployer
//         });

//         expect(
//             await env.read(TCF, {
//                 functionName: "name"
//             })
//         ).to.equal("TCF")

//         expect(
//             await env.read(TCF, {
//                 functionName: "symbol"
//             })
//         ).to.equal("TCF")
//     });
// })