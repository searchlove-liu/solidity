import { expect } from "chai";
import { beforeEach, describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.ts";
import { hexToNumber } from "./utils/stringToHex.ts";
import { getPrices, zeroAddress, getErrorPrices } from "./price.ts";
import { stringToHexString, numberTo32ByteHex } from "./utils/stringToHex.ts";
const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);
let { env, namedAccounts, TCF1, TCF2, TCF_NFT } =
  await networkHelpers.loadFixture(deployAll);

// 测试 TCF_ 合约
describe("TCF_NFT 合约测试", function () {
  beforeEach(async function () {
    // 在每个测试用例之前重新加载合约和账户
    ({ env, namedAccounts, TCF1, TCF_NFT } =
      await networkHelpers.loadFixture(deployAll));

    await env.execute(TCF1, {
      functionName: "initialize",
      args: [namedAccounts.deployer, namedAccounts.deployer],
      account: namedAccounts.deployer,
    });

    await env.execute(TCF2, {
      functionName: "initialize",
      args: [namedAccounts.deployer, namedAccounts.deployer],
      account: namedAccounts.deployer,
    });

    // 初始化 NFT 的 indate/ratio（否则默认 indate=0，会导致“有效期”相关测试失真）
    const TCF1Address = TCF1.address;
    let tokenAddresses = [TCF1Address];

    // 初始化支持的token
    await env.execute(TCF_NFT, {
      functionName: "addSupportedToken",
      args: [tokenAddresses],
      account: namedAccounts.deployer,
    });

    // 设置 NFT 的 indate/ratio
    await env.execute(TCF_NFT, {
      functionName: "initPrice",
      args: [getPrices(TCF1Address)],
      account: namedAccounts.deployer,
    });
  });

  // 测试buyNFTByTC，
  describe("buyNFTByTC, 使用 TC 购买 NFT", function () {
    // 测试 余额不足 的情况
    it("余额不足，购买 NFT 失败", async function () {
      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      // 将admin1插入二叉树列表
      await env.execute(TCF_NFT, {
        functionName: "insert",
        args: [
          namedAccounts.admin1,
          namedAccounts.deployer,
          namedAccounts.deployer,
          true,
        ],
        account: namedAccounts.deployer,
      });

      await expect(
        env.execute(TCF_NFT, {
          functionName: "buyNFTByTC",
          args: [namedAccounts.admin1, 1n, 3n],
          account: namedAccounts.admin1,
          value: 1n, // 发送1个，但价格时1，创建3个，余额不足
        }),
      ).to.be.revertedWith("INCORRECT_FUNDS");
    });

    // 正确测试，测试获取的NFT ID 是否正确
    it("余额充足，购买 NFT 成功，获取正确的 NFT ID", async function () {
      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "insert",
        args: [
          namedAccounts.admin1,
          namedAccounts.deployer,
          namedAccounts.deployer,
          true,
        ],
        account: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [namedAccounts.admin1, 1n, 3n],
        account: namedAccounts.admin1,
        value: 6n,
      });

      expect(
        (
          await env.read(TCF_NFT, {
            functionName: "ownerOf",
            args: [1n, 2n],
            account: namedAccounts.admin1,
          })
        ).toLocaleLowerCase(),
      ).to.equal(namedAccounts.admin1);

      expect(
        (
          await env.read(TCF_NFT, {
            functionName: "ownerOf",
            args: [1n, 0n],
            account: namedAccounts.admin1,
          })
        ).toLocaleLowerCase(),
      ).to.equal(namedAccounts.admin1);
    });

    // 正确测试，判断用户拥有的NFT数量是否正确
    it("余额充足，购买 NFT 成功，用户拥有的 NFT 数量正确", async function () {
      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "insert",
        args: [
          namedAccounts.admin1,
          namedAccounts.deployer,
          namedAccounts.deployer,
          true,
        ],
        account: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [namedAccounts.admin1, 1n, 5n],
        account: namedAccounts.admin1,
        value: 10n,
      });

      expect(
        await env.read(TCF_NFT, {
          functionName: "balanceOf",
          args: [namedAccounts.admin1, 1n],
          account: namedAccounts.admin1,
        }),
      ).to.equal(5n);
    });

    // 不初始化二叉树根节点，购买NFT失败
    it("不初始化二叉树根节点，购买 NFT 失败", async function () {
      await expect(
        env.execute(TCF_NFT, {
          functionName: "buyNFTByTC",
          args: [namedAccounts.admin1, 1n, 3n],
          account: namedAccounts.admin1,
          value: 3n, // 发送3个，但价格时1，创建3个，余额不足
        }),
      ).to.be.revertedWith("ROOT_NOT_INITIALIZED");
    });

    // 初始化二叉树根节点，但购买用户不在二叉树中，购买NFT失败
    it("初始化二叉树根节点，但购买用户不在二叉树中，购买 NFT 失败", async function () {
      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });
      await expect(
        env.execute(TCF_NFT, {
          functionName: "buyNFTByTC",
          args: [namedAccounts.admin1, 0n, 3n],
          account: namedAccounts.admin1,
          value: 3n,
        }),
      ).to.be.revertedWith("NODE_NOT_EXISTS");
    });

    // 初始化二叉树根节点，购买用户在二叉树中，但没有初始化价格，购买NFT失败
    it("初始化二叉树根节点，购买用户在二叉树中，但没有初始化价格，购买 NFT 失败", async function () {
      ({ env, namedAccounts, TCF1, TCF_NFT } =
        await networkHelpers.loadFixture(deployAll));

      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "insert",
        args: [
          namedAccounts.admin1,
          namedAccounts.deployer,
          namedAccounts.deployer,
          true,
        ],
        account: namedAccounts.deployer,
      });

      await expect(
        env.execute(TCF_NFT, {
          functionName: "buyNFTByTC",
          args: [namedAccounts.admin1, 0n, 3n],
          account: namedAccounts.admin1,
          value: 3n,
        }),
      ).to.be.revertedWith("PRICES_NOT_INITIALIZED");
    });
  });

  // 测试使用DCT购买NFT
  describe("buyNFTByDCT, 使用 DCT 购买 NFT", function () {
    // 正确测试，检测余额
    it("正确测试，检测余额", async function () {
      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      // 代表购买第4类NFT，数量为4
      let data = numberTo32ByteHex(3);
      data += numberTo32ByteHex(4).slice(2);

      await env.execute(TCF1, {
        functionName: "transferAndCall",
        args: [TCF_NFT.address, 16n, data as `0x${string}`],
        account: namedAccounts.deployer,
      });

      // 检查余额
      expect(
        await env.read(TCF_NFT, {
          functionName: "balanceOf",
          args: [namedAccounts.deployer, 3n],
          account: namedAccounts.deployer,
        }),
      ).to.equal(4n);
    });

    // 错误测试，余额不足
    it("错误测试，余额不足", async function () {
      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      // 将admin1插入二叉树列表
      await env.execute(TCF_NFT, {
        functionName: "insert",
        args: [
          namedAccounts.admin1,
          namedAccounts.deployer,
          namedAccounts.deployer,
          true,
        ],
        account: namedAccounts.deployer,
      });

      // 代表购买第2类NFT，数量为10
      let data = numberTo32ByteHex(1);
      data += numberTo32ByteHex(10).slice(2);

      await expect(
        env.execute(TCF1, {
          functionName: "transferAndCall",
          args: [TCF_NFT.address, 10n, data as `0x${string}`],
          account: namedAccounts.admin1,
        }),
      ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
    });

    // 错误测试,接收地址不正确
    it("错误测试，接收地址不正确", async function () {
      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      // 代表购买第5类NFT，数量为2
      let data = numberTo32ByteHex(4);
      data += numberTo32ByteHex(2).slice(2);
      await expect(
        env.execute(TCF1, {
          functionName: "transferAndCall",
          // 注意这里是TCF2地址，不是TCF_NFT.address,所以报错
          args: [TCF2.address, 2n, data as `0x${string}`],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("ERC1363: to is a incorrect address");
    });

    // 错误测试，使用TCF_NFT不支持的代币购买NFT
    it("错误测试，使用 TCF_NFT 不支持的代币购买 NFT", async function () {
      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      // 代表购买第3类NFT，数量为1
      let data = numberTo32ByteHex(2);
      data += numberTo32ByteHex(1).slice(2);
      await expect(
        env.execute(TCF2, {
          functionName: "transferAndCall",
          args: [TCF_NFT.address, 1n, data as `0x${string}`],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("TOKEN_UNSUPPORTED");
    });

    // 错误测试，购买不支持的NFT类型
    it("错误测试，购买不支持的 NFT 类型", async function () {
      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      // 代表购买第10类NFT，数量为1
      let data = numberTo32ByteHex(9);
      data += numberTo32ByteHex(1).slice(2);
      await expect(
        env.execute(TCF1, {
          functionName: "transferAndCall",
          args: [TCF_NFT.address, 1n, data as `0x${string}`],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("TOKENID_RANGE");
    });

    // 错误测试，购买数量为0
    it("错误测试，购买数量为 0", async function () {
      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      // 代表购买第1类NFT，数量为0
      let data = numberTo32ByteHex(0);
      data += numberTo32ByteHex(0).slice(2);
      await expect(
        env.execute(TCF1, {
          functionName: "transferAndCall",
          args: [TCF_NFT.address, 1n, data as `0x${string}`],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("INCORRECT_FUNDS");
    });

    // 错误测试, 数据格式错误，发送小于64字节的data
    it("错误测试,发送小于64字节的data，格式错误", async function () {
      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      // 代表购买第1类NFT，数量为2，但数据格式错误，只传了32字节
      let data = numberTo32ByteHex(0);
      await expect(
        env.execute(TCF1, {
          functionName: "transferAndCall",
          args: [TCF_NFT.address, 1n, data as `0x${string}`],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("ERC1363: invalid data format");
    });

    // 错误测试, 发送大于64字节的data，格式错误
    it("错误测试,发送大于64字节的data，格式错误", async function () {
      // 代表购买第1类NFT，数量为2，但数据格式错误，传了96字节
      let data = numberTo32ByteHex(0);
      data += numberTo32ByteHex(2).slice(2);
      data += numberTo32ByteHex(3).slice(2);
      await expect(
        env.execute(TCF1, {
          functionName: "transferAndCall",
          args: [TCF_NFT.address, 1n, data as `0x${string}`],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("ERC1363: invalid data format");
    });

    // 检查有哪些可写的函数
    it("检查未初始化函数，获取价格", async function () {
      // const writableFunctions = await env.execute(TCF_NFT, {
      //     functionName: ,
      //     args: [],
      //     account: namedAccounts.deployer
      // });
      //   expect(
      //     await env.read(TCF_NFT, {
      //       functionName: "getNFTPrice",
      //       args: [0n, zeroAddress],
      //       account: namedAccounts.deployer,
      //     }),
      //   ).to.deep.equal(["PRICES_NOT_INITIALIZED", 0n]);
    });
  });
});
