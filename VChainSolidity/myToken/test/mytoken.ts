import { describe, it, before, beforeEach } from 'node:test'; // using node:test as hardhat v3 do not support vitest
import { network } from 'hardhat';
import { setupFixtures } from './utils/index.ts';
import { expect } from 'chai';
import { ethers } from "ethers"
import { stringToHexString } from './utils/stringToHex.ts'
// import hre  from "hardhat";

const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);

const { env, MyToken, namedAccounts } = await networkHelpers.loadFixture(deployAll);

describe("mytoken", async () => {

    // 不可以是beforeEach，因为合约智能初始化一次
    before(async () => {
        // 初始化合约,只能初始化一次
        const tokenName = stringToHexString("myToken");
        const tokenSymbol = stringToHexString("MTK");
        const tokenUri = stringToHexString("https://ipfs.io/ipfs/QmciqT3pUud6sa2U8E41ac2q7Mxd34DyNyyJ2YewGPAYkt/");
        await env.execute(MyToken, {
            functionName: "initialize",
            args: [`0x${tokenName}`, `0x${tokenSymbol}`, `0x${tokenUri}`],
            account: namedAccounts.deployer
        })
    })

    it("test initialize: whether tokenURI is BaseURI + tokenId + .json", async () => {
        // mint两个NFT
        await env.execute(MyToken, {
            functionName: "safeMint",
            args: [namedAccounts.deployer, `0x`],
            account: namedAccounts.deployer
        })
        await env.execute(MyToken, {
            functionName: "safeMint",
            args: [namedAccounts.deployer, `0x`],
            account: namedAccounts.deployer
        })
        // 查看第1个NFT的URI
        let uri = await env.read(MyToken, {
            functionName: "tokenURI",
            args: [0n],
            account: namedAccounts.deployer
        })
        expect(uri).to.equal("https://ipfs.io/ipfs/QmciqT3pUud6sa2U8E41ac2q7Mxd34DyNyyJ2YewGPAYkt/0.json")
        uri = await env.read(MyToken, {
            functionName: "tokenURI",
            args: [1n],
            account: namedAccounts.deployer
        })
        expect(uri).to.equal("https://ipfs.io/ipfs/QmciqT3pUud6sa2U8E41ac2q7Mxd34DyNyyJ2YewGPAYkt/1.json")
    })

    it("test initialize: tokenName and tokenSymbol is correct", async () => {
        // 查看tokenName
        const tokenNameString = await env.read(MyToken, {
            functionName: "name",
            args: [],
            account: namedAccounts.deployer
        })
        expect(tokenNameString).to.equal("myToken")
        // 查看tokenSymbol
        const tokenSymbolString = await env.read(MyToken, {
            functionName: "symbol",
            args: [],
            account: namedAccounts.deployer
        })
        expect(tokenSymbolString).to.equal("MTK")
    })

})


// TODO测试详情：pnpm test