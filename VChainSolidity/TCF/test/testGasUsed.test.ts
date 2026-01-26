// test/Greeter.test.ts
// 需要安装这个插件hardhat-ethers-chai-matchers
import { expect } from "chai";
import test, { describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.js";
// 导入ether，将ether转换为wei单位
const { ethers } = await network.connect();

import {
  stringToHexString,
  hexToNumber,
  numberTo32ByteHex,
} from "./utils/stringToHex.ts";

const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);

describe("测试用例", function () {
  const emptyAddress =
    `0x${"0000000000000000000000000000000000000000"}` as `0x${string}`;
  it("testGasUsed", async function () {
    const { env, TCF1, TCF_NFTPrice, namedAccounts, testGasUsed } =
      await networkHelpers.loadFixture(deployAll);

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
    // const tokenName = stringToHexString("TCF");
    // const tokenSymbol = stringToHexString("TCF");
    // await env.execute(TCF1, {
    //     functionName: "initialize",
    //     args: [`0x${tokenName}`, `0x${tokenSymbol}`, namedAccounts.admin1, namedAccounts.admin2],
    //     account: namedAccounts.deployer
    // });

    // expect(
    //   await env.read(testGasUsed, {
    //     functionName: "useCall",
    //     args: [emptyAddress],
    //     account: namedAccounts.deployer,
    //   }),
    // ).to.equal("false");

    // console.log(await env.read(testGasUsed, {
    //     functionName: "useCall",
    //     args: [TCF.address],
    //     account: namedAccounts.deployer
    // }))

    // await expect(
    //     env.execute(testGasUsed, {
    //         functionName: "testRevert",
    //         args: [],
    //         account: namedAccounts.deployer
    //     })
    // ).to.be.revertedWith("nihao")

    // test address
    // expect(
    //     await env.read(testGasUsed, {
    //         functionName: "getAddress",
    //         args: [],
    //         account: namedAccounts.deployer
    //     })
    // ).to.equal("0x0000000000000000000000000000000000000001")

    // await env.execute(testGasUsed, {
    //     functionName: "setAddress",
    //     args: [],
    //     account: namedAccounts.deployer
    // })

    // expect(
    //     await env.read(testGasUsed, {
    //         functionName: "addresses",
    //         args: [2n]
    //     })
    // ).to.equal("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E")

    // let data = numberTo32ByteHex(3);
    // await expect(
    //      env.read(testGasUsed, {
    //         functionName: "testDecodeData",
    //         args: [data as `0x${string}`],
    //     })
    // ).to.be.revertedWith("Invalid data length");

    // data = numberTo32ByteHex(3);
    // data += numberTo32ByteHex(100).slice(2);
    // data += numberTo32ByteHex(200).slice(2);
    // await expect(
    //      env.read(testGasUsed, {
    //         functionName: "testDecodeData",
    //         args: [data as `0x${string}`],
    //     })
    // ).to.be.revertedWith("Invalid data length");

    // 正确数据
    // data = numberTo32ByteHex(3);
    // data += numberTo32ByteHex(100).slice(2);
    // expect(
    //      await env.read(testGasUsed, {
    //         functionName: "testDecodeData",
    //         args: [data as `0x${string}`],
    //     })
    // ).to.deep.equal([3n, 100n]);

    // 测试revert
    // await expect(
    //     env.execute(testGasUsed, {
    //         functionName: "testRevert",
    //         args: [],
    //         account: namedAccounts.deployer
    //     })
    // ).to.be.revertedWith("nihao");

    // console.log(hexToNumber(result1.gasUsed))   /* 44417 */
    // console.log(hexToNumber(result2.gasUsed))   /* 35716 */
    // 说明添加数据，并删除数据消耗更少的gas，因为删除数据之后，系统给用户返回一定的gas

    // 给合约地址直接转原生币（触发 receive()/fallback()），不要用 env.execute（它是调用合约函数用的）
    await env.tx({
      to: testGasUsed.address,
      account: namedAccounts.deployer,
      value: ethers.parseEther("1"),
    });

    expect(
      await env.viem.publicClient.getBalance({
        address: testGasUsed.address,
      }),
    ).to.equal(ethers.parseEther("1"));

    let beforeBalance = await env.viem.publicClient.getBalance({
      address: namedAccounts.admin1,
    });

    console.log("转账前余额:", beforeBalance.toString());

    await env.execute(testGasUsed, {
      functionName: "transferNatureToken",
      args: [namedAccounts.admin1, ethers.parseEther("1")],
      account: namedAccounts.deployer,
    });

    let balanceAfter = await env.viem.publicClient.getBalance({
      address: namedAccounts.admin1,
    });

    console.log("转账后余额:", balanceAfter.toString());

    expect(balanceAfter).to.equal(beforeBalance + ethers.parseEther("1"));
  });
});
