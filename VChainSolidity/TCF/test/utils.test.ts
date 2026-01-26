// test/Greeter.test.ts
// 需要安装这个插件hardhat-ethers-chai-matchers
import { expect } from "chai";
import { beforeEach, describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.ts";
const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);
let { env, testUtils } = await networkHelpers.loadFixture(deployAll);

describe("utils", function () {
  beforeEach(async function () {
    ({ env, testUtils } = await networkHelpers.loadFixture(deployAll));
  });

  describe("testencodePacked: 测试abi.encodePacked函数", function () {
    it("应该返回正确的编码结果", async function () {
      const result = await env.read(testUtils, {
        functionName: "testUintToString",
        args: [2000000000000000000000000000000000000n],
      });
      expect(result).to.equal("2000000000000000000000000000000000000");
    });
  });
});
