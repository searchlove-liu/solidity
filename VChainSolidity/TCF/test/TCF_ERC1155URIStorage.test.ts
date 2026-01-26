// test/Greeter.test.ts
// 需要安装这个插件hardhat-ethers-chai-matchers
import { expect } from "chai";
import { beforeEach, describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.ts";
import { baseURI } from "./baseURI.ts";
const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);
let { env, namedAccounts, test_TCF_ERC1155URIStorage } =
  await networkHelpers.loadFixture(deployAll);

describe("TCF_ERC1155URIStorage", function () {
  beforeEach(async function () {
    ({ env, namedAccounts, test_TCF_ERC1155URIStorage } =
      await networkHelpers.loadFixture(deployAll));
  });

  describe("_setBaseURI: 设置baseURI", function () {
    it("设置baseURI成功", async function () {
      await env.execute(test_TCF_ERC1155URIStorage, {
        functionName: "setBaseURI",
        args: [baseURI],
        account: namedAccounts.deployer,
      });
    });

    // 在没有设置baseURI的情况下，获取某个id的uri应当revert
    it("在没有设置baseURI的情况下，调用Euri函数应当revert", async function () {
      await expect(
        env.read(test_TCF_ERC1155URIStorage, {
          functionName: "Euri",
          args: [2n],
        }),
      ).to.be.revertedWith("BASEURI_NOT_INITIALIZED");
    });

    it("获取某个id的uri", async function () {
      await env.execute(test_TCF_ERC1155URIStorage, {
        functionName: "setBaseURI",
        args: [baseURI],
        account: namedAccounts.deployer,
      });

      // 获取tokenURI进行验证
      expect(
        await env.read(test_TCF_ERC1155URIStorage, {
          functionName: "Euri",
          args: [2n],
        }),
      ).to.equal(
        "https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmT72uJzk6RMeoXJ1YQyCC7A9bcPDc5o1KgBEkcX6cQq7J/3.json",
      );
    });
  });
});
