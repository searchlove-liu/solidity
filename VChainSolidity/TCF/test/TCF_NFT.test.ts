import { expect } from "chai";
import { beforeEach, describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.ts";
import { hexToNumber } from "./utils/stringToHex.ts";
import { getPrices, zeroAddress, getErrorPrices } from "./price.ts";
import { stringToHexString, numberTo32ByteHex } from "./utils/stringToHex.ts";
import { baseURI } from "./baseURI.ts";
import { parseAbiItem } from "viem";
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
    // 初始化支持的token
    await env.execute(TCF_NFT, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    // 设置 NFT 的 indate/ratio
    await env.execute(TCF_NFT, {
      functionName: "initPrice",
      args: [getPrices(TCF1Address)],
      account: namedAccounts.deployer,
    });

    // 设置baseURI
    await env.execute(TCF_NFT, {
      functionName: "setBaseURI",
      args: [baseURI],
      account: namedAccounts.deployer,
    });

    // 设置提款地址
    await env.execute(TCF_NFT, {
      functionName: "setWithdrawAddress",
      args: [namedAccounts.deployer],
      account: namedAccounts.deployer,
    });
  });

  describe("setWithdrawAddress", function () {
    it("非 owner 调用失败", async function () {
      await expect(
        env.execute(TCF_NFT, {
          functionName: "setWithdrawAddress",
          args: [namedAccounts.admin1],
          account: namedAccounts.admin1,
        }),
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });

    it("拒绝零地址", async function () {
      await expect(
        env.execute(TCF_NFT, {
          functionName: "setWithdrawAddress",
          args: [zeroAddress],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("ZERO_ADDRESS");
    });

    it("拒绝合约地址", async function () {
      await expect(
        env.execute(TCF_NFT, {
          functionName: "setWithdrawAddress",
          args: [TCF1.address],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("ADDRESS_IS_CONTRACT");
    });

    it("允许更新提款地址", async function () {
      await env.execute(TCF_NFT, {
        functionName: "setWithdrawAddress",
        args: [namedAccounts.admin1],
        account: namedAccounts.deployer,
      });

      expect(
        (
          await env.read(TCF_NFT, {
            functionName: "withdrawAddress",
          })
        ).toLowerCase(),
      ).to.equal(namedAccounts.admin1);

      expect(
        await env.read(TCF_NFT, {
          functionName: "withdrawAddress_initialized",
        }),
      ).to.equal(1n);
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

    it("未初始化提款地址，购买失败", async function () {
      ({ env, namedAccounts, TCF1, TCF2, TCF_NFT } =
        await networkHelpers.loadFixture(deployAll));

      await expect(
        env.execute(TCF_NFT, {
          functionName: "buyNFTByTC",
          args: [namedAccounts.admin1, 1n, 1n],
          account: namedAccounts.admin1,
          value: 1n,
        }),
      ).to.be.revertedWith("WITHDRAW_ADDR_NOT_INITIALIZED");
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
        functionName: "setWithdrawAddress",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

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

    // 使用TC购买NFT，检查owner的ETH
    it("使用 TC 购买 NFT，检查 owner 的ETH余额", async function () {
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

      // 检查购买前 owner 余额
      let ownerBalanceBefore = await env.viem.publicClient.getBalance({
        address: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [namedAccounts.admin1, 1n, 3n],
        account: namedAccounts.admin1,
        value: 6n,
      });

      // 检查购买后 owner 余额
      let ownerBalanceAfter = await env.viem.publicClient.getBalance({
        address: namedAccounts.deployer,
      });

      expect(ownerBalanceAfter - ownerBalanceBefore).to.equal(6n);
    });

    it("未初始化 baseURI，购买 NFT 失败", async function () {
      ({ env, namedAccounts, TCF1, TCF_NFT } =
        await networkHelpers.loadFixture(deployAll));

      await env.execute(TCF1, {
        functionName: "initialize",
        args: [namedAccounts.deployer, namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      const TCF1Address = TCF1.address;
      await env.execute(TCF_NFT, {
        functionName: "addSupportedToken",
        args: [TCF1Address],
        account: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "initPrice",
        args: [getPrices(TCF1Address)],
        account: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "setWithdrawAddress",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

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
          args: [namedAccounts.admin1, 1n, 1n],
          account: namedAccounts.admin1,
          value: 2n,
        }),
      ).to.be.revertedWith("BASEURI_NOT_INITIALIZED");
    });

    it("购买数量为0，购买 NFT 失败", async function () {
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
          args: [namedAccounts.admin1, 0n, 0n],
          account: namedAccounts.admin1,
          value: 0n,
        }),
      ).to.be.revertedWith("INCORRECT_FUNDS");
    });

    it("支付金额与价格不匹配，购买失败", async function () {
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
          args: [namedAccounts.admin1, 1n, 3n],
          account: namedAccounts.admin1,
          value: 7n,
        }),
      ).to.be.revertedWith("INCORRECT_FUNDS");
    });

    it("插入节点左侧占用时会自动放入右侧", async function () {
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
        functionName: "insert",
        args: [
          namedAccounts.admin2,
          namedAccounts.deployer,
          namedAccounts.deployer,
          true,
        ],
        account: namedAccounts.deployer,
      });

      const [leftChild, rightChild] = await env.read(TCF_NFT, {
        functionName: "getChildren",
        args: [namedAccounts.deployer],
      });

      expect(leftChild.toLocaleLowerCase()).to.equal(
        namedAccounts.admin1.toLocaleLowerCase(),
      );

      expect(rightChild.toLocaleLowerCase()).to.equal(
        namedAccounts.admin2.toLocaleLowerCase(),
      );
    });

    // 测试暂停后无法使用tc购买
    it("测试暂停后无法使用tc购买", async function () {
      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "pause",
        args: [],
        account: namedAccounts.deployer,
      });

      await expect(
        env.execute(TCF_NFT, {
          functionName: "buyNFTByTC",
          args: [namedAccounts.admin1, 1n, 1n],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("Pausable: paused");
    });

    // 测试getUserTokenIds
    it("测试 getUserTokenIds 方法", async function () {
      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [namedAccounts.deployer, 2n, 3n],
        account: namedAccounts.deployer,
        value: 9n,
      });

      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [namedAccounts.deployer, 2n, 3n],
        account: namedAccounts.deployer,
        value: 9n,
      });

      expect(
        await env.read(TCF_NFT, {
          functionName: "getUserTokenIds",
          args: [namedAccounts.deployer, 2n],
        }),
      ).to.deep.equal([0n, 1n, 2n, 3n, 4n, 5n]);
    });
  });

  // 测试使用DCT购买NFT
  describe("buyNFTByDCT, 使用 DCT 购买 NFT", function () {
    it("未初始化提款地址，购买失败", async function () {
      ({ env, namedAccounts, TCF1, TCF2, TCF_NFT } =
        await networkHelpers.loadFixture(deployAll));

      await env.execute(TCF1, {
        functionName: "initialize",
        args: [namedAccounts.deployer, namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      const dataId = numberTo32ByteHex(0);
      const dataAmount = numberTo32ByteHex(1).slice(2);
      const data = (dataId + dataAmount) as `0x${string}`;

      await expect(
        env.execute(TCF1, {
          functionName: "transferAndCall",
          args: [TCF_NFT.address, 1n, data],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("WITHDRAW_ADDR_NOT_INITIALIZED");
    });
    it("未初始化二叉树根节点，购买失败", async function () {
      const dataId = numberTo32ByteHex(0);
      const dataAmount = numberTo32ByteHex(1).slice(2);
      const data = (dataId + dataAmount) as `0x${string}`;

      await expect(
        env.execute(TCF1, {
          functionName: "transferAndCall",
          args: [TCF_NFT.address, 1n, data],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("ROOT_NOT_INITIALIZED");
    });

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

    it("购买用户不在二叉树中，购买失败", async function () {
      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      // 将部分代币转给 admin1 以便其支付
      await env.execute(TCF1, {
        functionName: "transfer",
        args: [namedAccounts.admin1, 10n],
        account: namedAccounts.deployer,
      });

      let data = numberTo32ByteHex(0);
      data += numberTo32ByteHex(1).slice(2);

      await expect(
        env.execute(TCF1, {
          functionName: "transferAndCall",
          args: [TCF_NFT.address, 1n, data as `0x${string}`],
          account: namedAccounts.admin1,
        }),
      ).to.be.revertedWith("NODE_NOT_EXISTS");
    });

    it("未初始化 baseURI，使用 DCT 购买失败", async function () {
      ({ env, namedAccounts, TCF1, TCF_NFT } =
        await networkHelpers.loadFixture(deployAll));

      await env.execute(TCF1, {
        functionName: "initialize",
        args: [namedAccounts.deployer, namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      const TCF1Address = TCF1.address;

      await env.execute(TCF_NFT, {
        functionName: "addSupportedToken",
        args: [TCF1Address],
        account: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "initPrice",
        args: [getPrices(TCF1Address)],
        account: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "setWithdrawAddress",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      let data = numberTo32ByteHex(0);
      data += numberTo32ByteHex(1).slice(2);

      await expect(
        env.execute(TCF1, {
          functionName: "transferAndCall",
          args: [TCF_NFT.address, 1n, data as `0x${string}`],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("BASEURI_NOT_INITIALIZED");
    });

    it("未初始化价格，使用 DCT 购买失败", async function () {
      ({ env, namedAccounts, TCF1, TCF_NFT } =
        await networkHelpers.loadFixture(deployAll));

      await env.execute(TCF1, {
        functionName: "initialize",
        args: [namedAccounts.deployer, namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      const TCF1Address = TCF1.address;

      await env.execute(TCF_NFT, {
        functionName: "addSupportedToken",
        args: [TCF1Address],
        account: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "setBaseURI",
        args: [baseURI],
        account: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "setWithdrawAddress",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      let data = numberTo32ByteHex(0);
      data += numberTo32ByteHex(1).slice(2);

      await expect(
        env.execute(TCF1, {
          functionName: "transferAndCall",
          args: [TCF_NFT.address, 1n, data as `0x${string}`],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("PRICES_NOT_INITIALIZED");
    });

    // TCF_NFT暂停
    it("正确测试，检测余额", async function () {
      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      await env.execute(TCF_NFT, {
        functionName: "pause",
        args: [],
        account: namedAccounts.deployer,
      });

      // 代表购买第4类NFT，数量为4
      let data = numberTo32ByteHex(3);
      data += numberTo32ByteHex(4).slice(2);

      await expect(
        env.execute(TCF1, {
          functionName: "transferAndCall",
          args: [TCF_NFT.address, 16n, data as `0x${string}`],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("Pausable: paused");

      await env.execute(TCF_NFT, {
        functionName: "unpause",
        args: [],
        account: namedAccounts.deployer,
      });

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

  describe("supportsInterface", function () {
    it("支持 IERC1363Receiver 接口", async function () {
      const interfaceId = "0x88a7ca5c" as `0x${string}`;
      expect(
        await env.read(TCF_NFT, {
          functionName: "supportsInterface",
          args: [interfaceId],
        }),
      ).to.equal(true);
    });

    it("不支持未知接口", async function () {
      const randomId = "0xffffffff" as `0x${string}`;
      expect(
        await env.read(TCF_NFT, {
          functionName: "supportsInterface",
          args: [randomId],
        }),
      ).to.equal(false);
    });
  });

  // 事件测试
  describe("事件测试", function () {
    it("setWithdrawAddress 触发 WithdrawAddressUpdated 事件", async function () {
      const filter = await env.viem.publicClient.createEventFilter({
        address: TCF_NFT.address,
        event: parseAbiItem(
          `event WithdrawAddressUpdated(address indexed operator,address indexed previousAddress,address indexed newAddress)`,
        ),
        strict: true,
      });

      await env.execute(TCF_NFT, {
        functionName: "setWithdrawAddress",
        args: [namedAccounts.admin1],
        account: namedAccounts.deployer,
      });

      // 这里它获取了两个日志，第一次是beforeEach里面的调用产生的，第二次是本次调用产生的
      // 这里它获取了两个日志，第一次是beforeEach里面的调用产生的，第二次是本次调用产生的
      const logs = await env.viem.publicClient.getFilterLogs({ filter });
      expect(logs[0].args.newAddress.toLowerCase()).to.equal(
        namedAccounts.deployer.toLowerCase(),
      );
      expect(logs[0].args.previousAddress.toLowerCase()).to.equal(
        zeroAddress.toLowerCase(),
      );
      expect(logs[0].args.operator.toLowerCase()).to.equal(
        namedAccounts.deployer.toLowerCase(),
      );
      expect(logs[1].args.newAddress.toLowerCase()).to.equal(
        namedAccounts.admin1.toLowerCase(),
      );
      expect(logs[1].args.previousAddress.toLowerCase()).to.equal(
        namedAccounts.deployer.toLowerCase(),
      );
      expect(logs[1].args.operator.toLowerCase()).to.equal(
        namedAccounts.deployer.toLowerCase(),
      );
    });

    it("buyNFTByTC 触发 NFTPurchasedWithTC 事件", async function () {
      const filter = await env.viem.publicClient.createEventFilter({
        address: TCF_NFT.address,
        event: parseAbiItem(
          `event NFTPurchasedWithTC(address indexed buyer,uint256 indexed tokenId,uint256 amount,uint256 pricePerUnit)`,
        ),
        strict: true,
      });

      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      // deployer购买3个1类NFT
      await env.execute(TCF_NFT, {
        functionName: "buyNFTByTC",
        args: [namedAccounts.deployer, 1n, 3n],
        account: namedAccounts.deployer,
        value: 6n,
      });

      const logs = await env.viem.publicClient.getFilterLogs({ filter });
      expect(logs[0].args.buyer.toLowerCase()).to.equal(
        namedAccounts.deployer.toLowerCase(),
      );
      expect(logs[0].args.tokenId).to.equal(1n);
      expect(logs[0].args.amount).to.equal(3n);
      expect(logs[0].args.pricePerUnit).to.equal(2n);
    });

    it("buyNFTByDCT 触发 NFTPurchasedWithDCT 事件", async function () {
      const filter = await env.viem.publicClient.createEventFilter({
        address: TCF_NFT.address,
        event: parseAbiItem(
          `event NFTPurchasedWithToken(address indexed buyer,address indexed paymentToken,uint256 indexed tokenId,uint256 amount,uint256 pricePerUnit)`,
        ),
        strict: true,
      });

      await env.execute(TCF_NFT, {
        functionName: "initRoot",
        args: [namedAccounts.deployer],
        account: namedAccounts.deployer,
      });

      // 代表购买第2类NFT，数量为2
      let data = numberTo32ByteHex(1);
      data += numberTo32ByteHex(2).slice(2);
      await env.execute(TCF1, {
        functionName: "transferAndCall",
        args: [TCF_NFT.address, 4n, data as `0x${string}`],
        account: namedAccounts.deployer,
      });

      const logs = await env.viem.publicClient.getFilterLogs({ filter });

      expect(logs[0].args.buyer.toLowerCase()).to.equal(
        namedAccounts.deployer.toLowerCase(),
      );
      expect(logs[0].args.paymentToken.toLowerCase()).to.equal(
        TCF1.address.toLowerCase(),
      );
      expect(logs[0].args.tokenId).to.equal(1n);
      expect(logs[0].args.amount).to.equal(2n);
      expect(logs[0].args.pricePerUnit).to.equal(2n);
    });
  });
});
