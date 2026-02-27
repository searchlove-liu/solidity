// test/Greeter.test.ts
// 需要安装这个插件hardhat-ethers-chai-matchers
import { expect } from "chai";
import { beforeEach, describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.ts";
import { hexToNumber } from "./utils/stringToHex.ts";
import { getPrices, zeroAddress, getErrorPrices } from "./price.ts";
import { stringToHexString } from "./utils/stringToHex.ts";
import { Address } from "../generated/artifacts/index.js";
import { parseAbiItem } from "viem";
import strict from "assert/strict";
const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);
let { env, namedAccounts, TCF1, test_TCF_ERC1155MintTime, vault, vault_copy } =
  await networkHelpers.loadFixture(deployAll);

// 测试 TCF_ERC1155MintTime 合约
describe("TCF_ERC1155MintTime 合约测试", function () {
  beforeEach(async function () {
    // 在每个测试用例之前重新加载合约和账户
    ({ env, namedAccounts, TCF1, test_TCF_ERC1155MintTime, vault, vault_copy } =
      await networkHelpers.loadFixture(deployAll));

    // const tokenName = stringToHexString("DCF") as `0x${string}`;
    // const tokenSymbol = stringToHexString("DCF") as `0x${string}`;
    await env.execute(TCF1, {
      functionName: "initialize",
      args: [
        vault.address,
        vault_copy.address,
        namedAccounts.deployer,
        namedAccounts.deployer,
      ],
      account: namedAccounts.deployer,
    });

    // 初始化 NFT 的 indate/ratio（否则默认 indate=0，会导致“有效期”相关测试失真）
    const TCF1Address = TCF1.address;

    // 初始化支持的token
    await env.execute(test_TCF_ERC1155MintTime, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    // 设置 NFT 的 indate/ratio
    await env.execute(test_TCF_ERC1155MintTime, {
      functionName: "initPrice",
      args: [getPrices(TCF1Address)],
      account: namedAccounts.deployer,
    });
  });

  describe("_mint: 对 _mint函数进行测试", function () {
    it("应该正确记录铸造时间", async function () {
      let result = await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 7n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      // 获取第一次mint的区块时间戳
      let blockNumber = result.blockNumber;
      let block = await env.viem.publicClient.getBlock({
        blockNumber: BigInt(hexToNumber(blockNumber)),
      });
      let timestamp = BigInt(block.timestamp);

      expect(
        await env.read(test_TCF_ERC1155MintTime, {
          functionName: "getNftMintTime",
          args: [0n, 6n],
        }),
      ).to.equal(timestamp);

      expect(
        await env.read(test_TCF_ERC1155MintTime, {
          functionName: "getNftMintTime",
          args: [0n, 0n],
        }),
      ).to.equal(timestamp);

      //等待一秒
      await new Promise((resolve) => setTimeout(resolve, 1000));

      result = await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 7n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      // 获取第二次mint的区块时间戳
      blockNumber = result.blockNumber;
      block = await env.viem.publicClient.getBlock({
        blockNumber: BigInt(hexToNumber(blockNumber)),
      });
      timestamp = BigInt(block.timestamp);

      expect(
        await env.read(test_TCF_ERC1155MintTime, {
          functionName: "getNftMintTime",
          args: [0n, 13n],
        }),
      ).to.equal(timestamp);

      expect(
        await env.read(test_TCF_ERC1155MintTime, {
          functionName: "getNftMintTime",
          args: [0n, 7n],
        }),
      ).to.equal(timestamp);
    });

    // 测试 ownedTokenIds 函数
    it("应该正确返回拥有的Token IDs", async function () {
      // 先铸造一些代币
      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 7n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });
      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 5n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      const ownedTokenIds0 = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "getUserTokenIds",
        args: [namedAccounts.deployer, 0n],
      });

      expect(ownedTokenIds0).to.deep.equal([
        0n,
        1n,
        2n,
        3n,
        4n,
        5n,
        6n,
        7n,
        8n,
        9n,
        10n,
        11n,
      ]);
    });

    it("getNftMintTime: tokenId 超出范围 revert", async function () {
      await expect(
        env.read(test_TCF_ERC1155MintTime, {
          functionName: "getNftMintTime",
          args: [10n, 0n],
        }),
      ).to.be.rejectedWith("TOKENID_RANGE");
    });

    it("getUserTokenIds: tokenId 超出范围 revert", async function () {
      await expect(
        env.read(test_TCF_ERC1155MintTime, {
          functionName: "getUserTokenIds",
          args: [namedAccounts.deployer, 10n],
        }),
      ).to.be.rejectedWith("TOKENID_RANGE");
    });

    // 测试TokenEditionMinted
    it("应该触发 TokenEditionMinted 事件", async function () {
      // 创建过滤器
      const filter = await env.viem.publicClient.createEventFilter({
        address: test_TCF_ERC1155MintTime.address,
        event: parseAbiItem(
          `event TokenEditionMinted(address indexed to,uint256 indexed tokenId,uint256 editionId,uint64 mintedAt)`,
        ),
        strict: true,
      });

      // 先铸造一些代币
      let result = await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 7n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      // 获取第一次mint的区块时间戳
      let blockNumber = result.blockNumber;
      let block = await env.viem.publicClient.getBlock({
        blockNumber: BigInt(hexToNumber(blockNumber)),
      });
      let timestamp = BigInt(block.timestamp);

      const logs = await env.viem.publicClient.getFilterLogs({ filter });
      expect(logs.length).to.equal(7);
      expect(logs[0].args.editionId).to.equal(0);
      expect(logs[0].args.tokenId).to.equal(0);
      expect(logs[0].args.mintedAt).to.equal(timestamp);
      expect(logs[0].args.to.toLowerCase()).to.equal(namedAccounts.deployer);
      expect(logs[6].args.editionId).to.equal(6);
      expect(logs[6].args.tokenId).to.equal(0);
      expect(logs[6].args.mintedAt).to.equal(timestamp);
      expect(logs[6].args.to.toLowerCase()).to.equal(namedAccounts.deployer);
    });
  });

  describe("testSafeTransferFrom: 对 testSafeTransferFrom函数进行测试", function () {
    it("tokenid 超过范围 revert", async function () {
      // 先铸造一些代币
      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 3n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      // tokenid 超过范围 revert
      await expect(
        env.execute(test_TCF_ERC1155MintTime, {
          functionName: "ESafeTransferFrom",
          args: [
            namedAccounts.deployer,
            namedAccounts.admin1,
            6n,
            [0n, 1n],
            "0x" as `0x${string}`,
          ],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("TOKENID_RANGE");
    });

    // 接收方是0地址 revert
    it("接收方是0地址 revert", async function () {
      // 先铸造一些代币
      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 3n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });
      // 接收方是0地址 revert
      await expect(
        env.execute(test_TCF_ERC1155MintTime, {
          functionName: "ESafeTransferFrom",
          args: [
            namedAccounts.deployer,
            zeroAddress,
            0n,
            [0n, 1n],
            "0x" as `0x${string}`,
          ],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("ZERO_ADDRESS");
    });

    it("ESafeTransferFrom: 未授权调用者 revert", async function () {
      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 1n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      await expect(
        env.execute(test_TCF_ERC1155MintTime, {
          functionName: "ESafeTransferFrom",
          args: [
            namedAccounts.deployer,
            namedAccounts.admin1,
            0n,
            [0n],
            "0x" as `0x${string}`,
          ],
          account: namedAccounts.admin1,
        }),
      ).to.be.revertedWith("CALLER_NOT_OWNER_APPROVED");
    });

    // 转移已转移的token revert
    it("转移已转移的token revert", async function () {
      // 先铸造一些代币
      let result = await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 3n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      // 获取tokenID为0的indate
      const equities = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "getNFTEquityDetails",
        args: [0n],
      });

      const indate = equities[1];
      // 获取当前区块时间
      let blockNumber = result.blockNumber;
      let block = await env.viem.publicClient.getBlock({
        blockNumber: BigInt(hexToNumber(blockNumber)),
      });
      let timestamp = BigInt(block.timestamp);
      let nextBlockTime = timestamp + BigInt(indate) + 20n; // 加20秒，确保超过有效期
      // 只“设置下一块的时间戳”并不等于把后续交易塞进已经挖出的那个块。
      // 这里我们明确：把下一笔交易(下面的 transfer)所在区块的 timestamp 设置到 nextBlockTime。
      await networkHelpers.time.setNextBlockTimestamp(Number(nextBlockTime));

      // 转移一次token
      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "ESafeTransferFrom",
        args: [
          namedAccounts.deployer,
          namedAccounts.admin1,
          0n,
          [0n, 1n],
          "0x" as `0x${string}`,
        ],
        account: namedAccounts.deployer,
      });

      // 再次转移已转移的token revert
      await expect(
        env.execute(test_TCF_ERC1155MintTime, {
          functionName: "ESafeTransferFrom",
          args: [
            namedAccounts.deployer,
            namedAccounts.admin1,
            0n,
            [0n, 1n],
            "0x" as `0x${string}`,
          ],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("TOKEN_NOT_OWNED");
    });

    // 转移不存在的token revert
    it("转移不存在的token revert", async function () {
      // 先铸造一些代币
      let result = await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 2n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      // 获取tokenID为0的indate
      const equities = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "getNFTEquityDetails",
        args: [0n],
      });

      const indate = equities[1];
      // 获取当前区块时间
      let blockNumber = result.blockNumber;
      let block = await env.viem.publicClient.getBlock({
        blockNumber: BigInt(hexToNumber(blockNumber)),
      });
      let timestamp = BigInt(block.timestamp);
      let nextBlockTime = timestamp + BigInt(indate) + 20n; // 加20秒，确保超过有效期
      // 只“设置下一块的时间戳”并不等于把后续交易塞进已经挖出的那个块。
      // 这里我们明确：把下一笔交易(下面的 transfer)所在区块的 timestamp 设置到 nextBlockTime。
      await networkHelpers.time.setNextBlockTimestamp(Number(nextBlockTime));

      // 转移不存在的token revert
      await expect(
        env.execute(test_TCF_ERC1155MintTime, {
          functionName: "ESafeTransferFrom",
          args: [
            namedAccounts.deployer,
            namedAccounts.admin1,
            0n,
            [0n, 2n],
            "0x" as `0x${string}`,
          ],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("TOKEN_NOT_OWNED");
    });

    it("ESafeTransferFrom: 获得授权的操作员可以转移过期NFT", async function () {
      let result = await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 2n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      const equities = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "getNFTEquityDetails",
        args: [0n],
      });
      const indate = equities[1];

      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "setApprovalForAll",
        args: [namedAccounts.admin1, true],
        account: namedAccounts.deployer,
      });

      let blockNumber = result.blockNumber;
      let block = await env.viem.publicClient.getBlock({
        blockNumber: BigInt(hexToNumber(blockNumber)),
      });
      let timestamp = BigInt(block.timestamp);
      let nextBlockTime = timestamp + BigInt(indate) + 20n;
      await networkHelpers.time.setNextBlockTimestamp(Number(nextBlockTime));

      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "ESafeTransferFrom",
        args: [
          namedAccounts.deployer,
          namedAccounts.admin2,
          0n,
          [0n],
          "0x" as `0x${string}`,
        ],
        account: namedAccounts.admin1,
      });

      expect(
        (
          await env.read(test_TCF_ERC1155MintTime, {
            functionName: "ownerOf",
            args: [0n, 0n],
          })
        ).toLowerCase(),
      ).to.equal(namedAccounts.admin2);

      expect(
        await env.read(test_TCF_ERC1155MintTime, {
          functionName: "getUserTokenIds",
          args: [namedAccounts.deployer, 0n],
        }),
      ).to.deep.equal([1n]);

      expect(
        await env.read(test_TCF_ERC1155MintTime, {
          functionName: "getUserTokenIds",
          args: [namedAccounts.admin2, 0n],
        }),
      ).to.deep.equal([0n]);
    });

    // 接受一个NFT,然后发送这个nft
    it("接受一个NFT,然后发送这个nft", async function () {
      // 先铸造一些代币给admin1
      let result = await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.admin1, 0n, 5n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });
      // 设置下一个区块的时间戳
      const equities = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "getNFTEquityDetails",
        args: [0n],
      });

      // 获取tokenID为0的indate
      const indate = equities[1];
      // 获取当前区块时间
      let blockNumber = result.blockNumber;
      let block = await env.viem.publicClient.getBlock({
        blockNumber: BigInt(hexToNumber(blockNumber)),
      });
      let timestamp = BigInt(block.timestamp);
      let nextBlockTime = timestamp + BigInt(indate) + 20n; // 加20秒，确保超过有效期
      // 只“设置下一块的时间戳”并不等于把后续交易塞进已经挖出的那个块。
      // 这里我们明确：把下一笔交易(下面的 transfer)所在区块的 timestamp 设置到 nextBlockTime。
      await networkHelpers.time.setNextBlockTimestamp(Number(nextBlockTime));

      // 转移NFT
      result = await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "ESafeTransferFrom",
        args: [
          namedAccounts.admin1,
          namedAccounts.admin2,
          0n,
          [0n],
          "0x" as `0x${string}`,
        ],
        account: namedAccounts.admin1,
      });

      // admin2再次转移这个NFT
      // 设置下一个区块的时间戳
      block = await env.viem.publicClient.getBlock({
        blockNumber: BigInt(hexToNumber(result.blockNumber)),
      });
      timestamp = BigInt(block.timestamp);
      nextBlockTime = timestamp + BigInt(indate) + 20n; // 加20秒，确保超过有效期

      await networkHelpers.time.setNextBlockTimestamp(Number(nextBlockTime));

      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "ESafeTransferFrom",
        args: [
          namedAccounts.admin2,
          namedAccounts.deployer,
          0n,
          [0n],
          "0x" as `0x${string}`,
        ],
        account: namedAccounts.admin2,
      });

      // 检查最终拥有者是deployer
      expect(
        // 将返回值设为小写以防大小写不一致导致测试失败
        (
          await env.read(test_TCF_ERC1155MintTime, {
            functionName: "ownerOf",
            args: [0n, 0n],
          })
        ).toLowerCase(),
      ).to.equal(namedAccounts.deployer);

      // 检查admin2的indexs
      expect(
        await env.read(test_TCF_ERC1155MintTime, {
          functionName: "getUserTokenIds",
          args: [namedAccounts.admin2, 0n],
        }),
      ).to.deep.equal([]);
    });

    it("ESafeTransferFrom: 更新ownedTokenIds", async function () {
      let result = await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 3n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      const equities = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "getNFTEquityDetails",
        args: [0n],
      });
      const indate = equities[1];

      let blockNumber = result.blockNumber;
      let block = await env.viem.publicClient.getBlock({
        blockNumber: BigInt(hexToNumber(blockNumber)),
      });
      let timestamp = BigInt(block.timestamp);
      let nextBlockTime = timestamp + BigInt(indate) + 20n;
      await networkHelpers.time.setNextBlockTimestamp(Number(nextBlockTime));

      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "ESafeTransferFrom",
        args: [
          namedAccounts.deployer,
          namedAccounts.admin1,
          0n,
          [1n],
          "0x" as `0x${string}`,
        ],
        account: namedAccounts.deployer,
      });

      expect(
        await env.read(test_TCF_ERC1155MintTime, {
          functionName: "getUserTokenIds",
          args: [namedAccounts.deployer, 0n],
        }),
      ).to.deep.equal([0n, 2n]);

      expect(
        await env.read(test_TCF_ERC1155MintTime, {
          functionName: "getUserTokenIds",
          args: [namedAccounts.admin1, 0n],
        }),
      ).to.deep.equal([1n]);
    });

    // 转移还在有效期的token revert
    it("转移还在有效期的token revert", async function () {
      // 先铸造一些代币
      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 3n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      // 转移还在有效期的token revert
      await expect(
        env.execute(test_TCF_ERC1155MintTime, {
          functionName: "ESafeTransferFrom",
          args: [
            namedAccounts.deployer,
            namedAccounts.admin1,
            0n,
            [0n, 1n],
            "0x" as `0x${string}`,
          ],
          account: namedAccounts.deployer,
        }),
      ).to.be.revertedWith("SEND_VALID_NFT");
    });

    // 正常转移token，测试from地址的mintTimes是否正确更新
    it("正常转移token，测试from 的mintTimes是否正确更新", async function () {
      // 先铸造一些代币
      let result = await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 3n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      // 获取tokenID为0的indate
      const equities = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "getNFTEquityDetails",
        args: [0n],
      });

      const indate = equities[1];
      // 获取当前区块时间
      let blockNumber = result.blockNumber;
      let block = await env.viem.publicClient.getBlock({
        blockNumber: BigInt(hexToNumber(blockNumber)),
      });
      let timestamp = BigInt(block.timestamp);
      let nextBlockTime = timestamp + BigInt(indate) + 20n; // 加20秒，确保超过有效期
      // 只“设置下一块的时间戳”并不等于把后续交易塞进已经挖出的那个块。
      // 这里我们明确：把下一笔交易(下面的 transfer)所在区块的 timestamp 设置到 nextBlockTime。
      await networkHelpers.time.setNextBlockTimestamp(Number(nextBlockTime));

      // 转移代币
      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "ESafeTransferFrom",
        args: [
          namedAccounts.deployer,
          namedAccounts.admin1,
          0n,
          [0n, 1n],
          "0x" as `0x${string}`,
        ],
        account: namedAccounts.deployer,
      });

      // 检查mintTimes是否正确更新
      expect(
        await env.read(test_TCF_ERC1155MintTime, {
          functionName: "getNftMintTime",
          args: [0n, 0n],
        }),
      ).to.equal(timestamp);
      expect(
        await env.read(test_TCF_ERC1155MintTime, {
          functionName: "getNftMintTime",
          args: [0n, 1n],
        }),
      ).to.equal(timestamp);
    });

    // 正常转移token，测试to地址的mintTimes是否正确更新
    it("正常转移token，测试to 的mintTimes是否正确更新", async function () {
      // 先铸造一些代币
      let result = await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 3n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      // 获取tokenID为0的indate
      const equities = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "getNFTEquityDetails",
        args: [0n],
      });

      const indate = equities[1];
      // 获取当前区块时间
      let blockNumber = result.blockNumber;
      let block = await env.viem.publicClient.getBlock({
        blockNumber: BigInt(hexToNumber(blockNumber)),
      });
      let timestamp = BigInt(block.timestamp);
      let nextBlockTime = timestamp + BigInt(indate) + 20n; // 加20秒，确保超过有效期
      // 只“设置下一块的时间戳”并不等于把后续交易塞进已经挖出的那个块。
      // 这里我们明确：把下一笔交易(下面的 transfer)所在区块的 timestamp 设置到 nextBlockTime。
      await networkHelpers.time.setNextBlockTimestamp(Number(nextBlockTime));

      // 转移代币
      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "ESafeTransferFrom",
        args: [
          namedAccounts.deployer,
          namedAccounts.admin1,
          0n,
          [0n, 1n],
          "0x" as `0x${string}`,
        ],
        account: namedAccounts.deployer,
      });

      // 检查mintTimes是否正确更新
      expect(
        await env.read(test_TCF_ERC1155MintTime, {
          functionName: "getNftMintTime",
          args: [0n, 0n],
        }),
      ).to.equal(timestamp);

      expect(
        await env.read(test_TCF_ERC1155MintTime, {
          functionName: "getNftMintTime",
          args: [0n, 1n],
        }),
      ).to.equal(timestamp);
    });

    it("新 owner 可以立即转移刚接收的NFT", async function () {
      const mintResult = await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 1n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      const equities = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "getNFTEquityDetails",
        args: [0n],
      });
      const indate = equities[1];

      const block = await env.viem.publicClient.getBlock({
        blockNumber: BigInt(hexToNumber(mintResult.blockNumber)),
      });
      const transferTime = BigInt(block.timestamp) + BigInt(indate) + 10n;
      await networkHelpers.time.setNextBlockTimestamp(Number(transferTime));

      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "ESafeTransferFrom",
        args: [
          namedAccounts.deployer,
          namedAccounts.admin1,
          0n,
          [0n],
          "0x" as `0x${string}`,
        ],
        account: namedAccounts.deployer,
      });

      expect(
        await env.read(test_TCF_ERC1155MintTime, {
          functionName: "getNftMintTime",
          args: [0n, 0n],
        }),
      ).to.equal(block.timestamp);

      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "ESafeTransferFrom",
        args: [
          namedAccounts.admin1,
          namedAccounts.admin2,
          0n,
          [0n],
          "0x" as `0x${string}`,
        ],
        account: namedAccounts.admin1,
      });

      expect(
        (
          await env.read(test_TCF_ERC1155MintTime, {
            functionName: "ownerOf",
            args: [0n, 0n],
          })
        ).toLowerCase(),
      ).to.equal(namedAccounts.admin2);
    });
  });

  describe("testGetExpiredTokenIndexes: 对 _getExpiredTokenIndexes 进行测试", function () {
    it("account 为 0 地址时 revert", async function () {
      await expect(
        env.read(test_TCF_ERC1155MintTime, {
          functionName: "testGetExpiredTokenIndexes",
          args: [zeroAddress, 0n, 1n],
        }),
      ).to.be.rejectedWith("ZERO_ADDRESS");
    });

    it("tokenId 超出范围时 revert", async function () {
      await expect(
        env.read(test_TCF_ERC1155MintTime, {
          functionName: "testGetExpiredTokenIndexes",
          args: [namedAccounts.deployer, 6n, 1n],
        }),
      ).to.be.rejectedWith("TOKENID_RANGE");
    });

    it("amount=0 时返回空数组", async function () {
      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 2n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      const indexes = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "testGetExpiredTokenIndexes",
        args: [namedAccounts.deployer, 0n, 0n],
      });
      expect(indexes).to.deep.equal([]);
    });

    it("ownedTokenIds 为空时返回空数组", async function () {
      const indexes = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "testGetExpiredTokenIndexes",
        args: [namedAccounts.deployer, 0n, 1n],
      });
      expect(indexes).to.deep.equal([]);
    });

    it("在过期边界：timestamp == mintTime + indate 时不算过期；+1 后才算过期", async function () {
      const mintResult = await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 1n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      const equities = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "getNFTEquityDetails",
        args: [0n],
      });
      const indate = equities[1];

      const mintBlock = await env.viem.publicClient.getBlock({
        blockNumber: BigInt(hexToNumber(mintResult.blockNumber)),
      });
      const mintTimestamp = BigInt(mintBlock.timestamp);

      const boundary = mintTimestamp + BigInt(indate);
      await networkHelpers.time.setNextBlockTimestamp(Number(boundary));
      // 通过一笔无关 tx 确保新区块 timestamp 生效
      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "setApprovalForAll",
        args: [namedAccounts.admin1, true],
        account: namedAccounts.deployer,
      });

      const atBoundary = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "testGetExpiredTokenIndexes",
        args: [namedAccounts.deployer, 0n, 1n],
      });
      expect(atBoundary).to.deep.equal([]);

      await networkHelpers.time.setNextBlockTimestamp(Number(boundary + 1n));
      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "setApprovalForAll",
        args: [namedAccounts.admin1, false],
        account: namedAccounts.deployer,
      });

      const afterBoundary = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "testGetExpiredTokenIndexes",
        args: [namedAccounts.deployer, 0n, 1n],
      });
      expect(afterBoundary).to.deep.equal([0n]);
    });

    it("过期 NFT 数量足够时返回对应 indexes（按 ownedTokenIds 顺序）", async function () {
      const mintResult = await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 3n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      const equities = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "getNFTEquityDetails",
        args: [0n],
      });
      const indate = equities[1];
      const mintBlock = await env.viem.publicClient.getBlock({
        blockNumber: BigInt(hexToNumber(mintResult.blockNumber)),
      });
      const mintTimestamp = BigInt(mintBlock.timestamp);

      const expiredTime = mintTimestamp + BigInt(indate) + 5n;
      await networkHelpers.time.setNextBlockTimestamp(Number(expiredTime));
      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "setApprovalForAll",
        args: [namedAccounts.admin1, true],
        account: namedAccounts.deployer,
      });

      const indexes2 = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "testGetExpiredTokenIndexes",
        args: [namedAccounts.deployer, 0n, 2n],
      });
      expect(indexes2).to.deep.equal([0n, 1n]);

      const indexes3 = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "testGetExpiredTokenIndexes",
        args: [namedAccounts.deployer, 0n, 3n],
      });
      expect(indexes3).to.deep.equal([0n, 1n, 2n]);
    });

    it("过期 NFT 数量不足 amount 时返回空数组（即使有部分过期）", async function () {
      const firstMint = await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 2n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      const equities = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "getNFTEquityDetails",
        args: [0n],
      });
      const indate = equities[1];

      const firstBlock = await env.viem.publicClient.getBlock({
        blockNumber: BigInt(hexToNumber(firstMint.blockNumber)),
      });
      const t0 = BigInt(firstBlock.timestamp);

      // 第二次 mint 在更晚时间，确保“混合”过期/未过期
      const t1 = t0 + BigInt(indate) / 2n;
      await networkHelpers.time.setNextBlockTimestamp(Number(t1));
      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 2n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      // 设置到：第一批过期、第二批未过期
      const t2 = t0 + BigInt(indate) + 1n;
      await networkHelpers.time.setNextBlockTimestamp(Number(t2));
      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "setApprovalForAll",
        args: [namedAccounts.admin1, true],
        account: namedAccounts.deployer,
      });

      // amount=2：足够（应返回 [0,1]）
      const ok = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "testGetExpiredTokenIndexes",
        args: [namedAccounts.deployer, 0n, 2n],
      });
      expect(ok).to.deep.equal([0n, 1n]);

      // amount=3：不足（只过期了2个），必须返回空数组
      const notEnough = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "testGetExpiredTokenIndexes",
        args: [namedAccounts.deployer, 0n, 3n],
      });
      expect(notEnough).to.deep.equal([]);

      // amount 大于持有数量，也必须返回空数组
      const tooLarge = await env.read(test_TCF_ERC1155MintTime, {
        functionName: "testGetExpiredTokenIndexes",
        args: [namedAccounts.deployer, 0n, 100n],
      });
      expect(tooLarge).to.deep.equal([]);
    });
  });
});
