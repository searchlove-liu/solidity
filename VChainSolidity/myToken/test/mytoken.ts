import { describe, it, before, beforeEach } from 'node:test'; // using node:test as hardhat v3 do not support vitest
import { network } from 'hardhat';
import { setupFixtures } from './utils/index.ts';
import { expect } from 'chai';
import { ethers } from "ethers"
import { stringToHexString } from './utils/stringToHex.ts'
import { deploy } from '@rocketh/deploy';
import { myTokenAbi } from '../scripts/abi/myToken.ts';
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

    it("test burnedNFT map.", async function () {
        // 创建10个NFT
        for (let i = 0; i < 10; i++) {
            await env.execute(MyToken, {
                functionName: "safeMint",
                args: [namedAccounts.deployer, `0x${""}`],
                account: namedAccounts.deployer
            })
        }

        // 烧掉指定NFT
        const burnIndexOfNFT = [2n, 5n, 7n];
        const len = burnIndexOfNFT.length;

        //检查烧掉之前的状态
        for (let i = 0; i < len; i++) {
            expect(await env.read(MyToken, {
                functionName: "_burnedtToken",
                args: [burnIndexOfNFT[i]],
                account: namedAccounts.deployer
            })).to.equal(0)
        }

        // 燃烧NFT
        for (let i = 0; i < len; i++) {
            await env.execute(MyToken, {
                functionName: "burn",
                args: [burnIndexOfNFT[i]],
                account: namedAccounts.deployer
            })
        }

        // 获取烧掉的NFT
        for (let i = 0; i < len; i++) {
            expect(await env.read(MyToken, {
                functionName: "_burnedtToken",
                args: [burnIndexOfNFT[i]],
                account: namedAccounts.deployer
            })).to.equal(1)
        }

        // 获取没有烧掉的NFT
        const unburnIndexOfNFT = [1n, 3n,];
        const len1 = unburnIndexOfNFT.length;
        for (let i = 0; i < len1; i++) {
            expect(await env.read(MyToken, {
                functionName: "_burnedtToken",
                args: [unburnIndexOfNFT[i]],
                account: namedAccounts.deployer
            })).to.equal(0)
        }
    })


    it("test getOneTokenURI,get one token URI", async function () {
        const { env, MyToken, namedAccounts } = await networkHelpers.loadFixture(deployAll);
        const tokenName = stringToHexString("myToken");
        const tokenSymbol = stringToHexString("MTK");
        const tokenUri = stringToHexString("https://ipfs.io/ipfs/QmciqT3pUud6sa2U8E41ac2q7Mxd34DyNyyJ2YewGPAYkt/");
        await env.execute(MyToken, {
            functionName: "initialize",
            args: [`0x${tokenName}`, `0x${tokenSymbol}`, `0x${tokenUri}`],
            account: namedAccounts.deployer
        })

        // 创建10个NFT
        for (let i = 0; i < 10; i++) {
            await env.execute(MyToken, {
                functionName: "safeMint",
                args: [namedAccounts.deployer, `0x${""}`],
                account: namedAccounts.deployer
            })
        }

        // get nft
        const result = await env.read(MyToken, {
            functionName: "getOneTokenURI",
            args: [2n],
            account: namedAccounts.deployer
        })

        expect(result.message).to.equal("success")
        expect(result.code).to.equal(0)
        expect(result.nft.id).to.equal(2n)
        expect(result.nft.tokenStandard).to.equal("ERC721")
        console.log(result)
    })

    it("test getOneTokenURI,get burned token", async function () {
        const { env, MyToken, namedAccounts } = await networkHelpers.loadFixture(deployAll);
        const tokenName = stringToHexString("myToken");
        const tokenSymbol = stringToHexString("MTK");
        const tokenUri = stringToHexString("https://ipfs.io/ipfs/QmciqT3pUud6sa2U8E41ac2q7Mxd34DyNyyJ2YewGPAYkt/");
        await env.execute(MyToken, {
            functionName: "initialize",
            args: [`0x${tokenName}`, `0x${tokenSymbol}`, `0x${tokenUri}`],
            account: namedAccounts.deployer
        })

        // 创建10个NFT
        for (let i = 0; i < 10; i++) {
            await env.execute(MyToken, {
                functionName: "safeMint",
                args: [namedAccounts.deployer, `0x${""}`],
                account: namedAccounts.deployer
            })
        }

        // 烧掉指定NFT
        const burnIndexOfNFT = [2n];
        const len = burnIndexOfNFT.length;
        // 燃烧NFT
        for (let i = 0; i < len; i++) {
            await env.execute(MyToken, {
                functionName: "burn",
                args: [burnIndexOfNFT[i]],
                account: namedAccounts.deployer
            })
        }

        // 获取燃烧的NFT
        const result = await env.read(MyToken, {
            functionName: "getOneTokenURI",
            args: [2n],
            account: namedAccounts.deployer
        })

        expect(result.message).to.equal("batchURIAndId:NFT is burned")
        expect(result.code).to.equal(1)
        expect(result.nft.id).to.equal(2n)
        expect(result.nft.tokenStandard).to.equal("ERC721")
    })

    it("test getOneTokenURI,get NFT that tokenID is totalSupply+1", async function () {
        const { env, MyToken, namedAccounts } = await networkHelpers.loadFixture(deployAll);
        const tokenName = stringToHexString("myToken");
        const tokenSymbol = stringToHexString("MTK");
        const tokenUri = stringToHexString("https://ipfs.io/ipfs/QmciqT3pUud6sa2U8E41ac2q7Mxd34DyNyyJ2YewGPAYkt/");
        await env.execute(MyToken, {
            functionName: "initialize",
            args: [`0x${tokenName}`, `0x${tokenSymbol}`, `0x${tokenUri}`],
            account: namedAccounts.deployer
        })

        // 创建10个NFT
        for (let i = 0; i < 10; i++) {
            await env.execute(MyToken, {
                functionName: "safeMint",
                args: [namedAccounts.deployer, `0x${""}`],
                account: namedAccounts.deployer
            })
        }

        // 获取tokenid = 11 的NFT
        const result = await env.read(MyToken, {
            functionName: "getOneTokenURI",
            args: [11n],
            account: namedAccounts.deployer
        })

        expect(result.message).to.equal("batchURIAndId:NFT index out of range")
        expect(result.code).to.equal(1)
        expect(result.nft.id).to.equal(11n)
        expect(result.nft.tokenStandard).to.equal("ERC721")

    })

})


// TODO测试详情：pnpm test