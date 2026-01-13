// test/Greeter.test.ts
// 需要安装这个插件hardhat-ethers-chai-matchers
import { expect } from "chai";
import test, { beforeEach, describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.js";
import { stringToHexString, hexToNumber } from "./utils/stringToHex.ts"
import { testTCF_NFTPriceGasUsed } from "./../scripts/gasEstimate.ts"
import { BaseError, ContractFunctionRevertedError } from 'viem';
import { TCF } from "../generated/artifacts/index.js";
const { provider, networkHelpers, viem } = await network.connect({
    network: "hardhatMainnet",
    chainType: "l1",
});

const [walletClient] = await viem.getWalletClients()
const { deployAll } = setupFixtures(provider);
let { env, TCF1, TCF2, namedAccounts, TCF_NFTPrice } = await networkHelpers.loadFixture(
    deployAll
);

const revertMessage = "VM Exception while processing transaction: reverted with reason string "

describe("TCF_NFTPrice", function () {
    interface PriceType {
        tokenAddress: `0x${string}`;
        amount: bigint;
    }

    const emptyAddress = `0x${"0000000000000000000000000000000000000000"}` as `0x${string}`

    type SixNFTPrices = readonly [
        PriceType[],
        PriceType[],
        PriceType[],
        PriceType[],
        PriceType[],
        PriceType[]
    ];

    const ensureTCFInitialized = async (tokenContract: typeof TCF1) => {
        const symbol = await env.read(tokenContract, { functionName: "symbol" });
        if (symbol === "TCF") return;

        const tokenName = stringToHexString("TCF");
        const tokenSymbol = stringToHexString("TCF");
        await env.execute(tokenContract, {
            functionName: "initialize",
            args: [`0x${tokenName}`, `0x${tokenSymbol}`, namedAccounts.deployer, namedAccounts.deployer],
            account: namedAccounts.deployer
        });
    };

    beforeEach(async () => {
        ({ env, TCF1, TCF2, namedAccounts, TCF_NFTPrice } = await networkHelpers.loadFixture(
            deployAll
        ))
        await ensureTCFInitialized(TCF1);
        await ensureTCFInitialized(TCF2);
    })

    const tokenAddresses = [TCF1.address];

    const NFT1prices: PriceType[] = [
        { tokenAddress: emptyAddress, amount: 1n },
        { tokenAddress: TCF1.address, amount: 1n }
    ]
    const NFT2prices: PriceType[] = [
        { tokenAddress: emptyAddress, amount: 1n },
        { tokenAddress: TCF1.address, amount: 1n }
    ]
    const NFT3prices: PriceType[] = [
        { tokenAddress: emptyAddress, amount: 1n },
        { tokenAddress: TCF1.address, amount: 1n }
    ]
    const NFT4prices: PriceType[] = [
        { tokenAddress: emptyAddress, amount: 1n },
        { tokenAddress: TCF1.address, amount: 1n }
    ]
    const NFT5prices: PriceType[] = [
        { tokenAddress: emptyAddress, amount: 1n },
        { tokenAddress: TCF1.address, amount: 1n }
    ]
    const NFT6prices: PriceType[] = [
        { tokenAddress: emptyAddress, amount: 1n },
        { tokenAddress: TCF1.address, amount: 1n }
    ]

    const sixNFTPrices: SixNFTPrices = [
        NFT1prices,
        NFT2prices,
        NFT3prices,
        NFT4prices,
        NFT5prices,
        NFT6prices
    ]

    it("checkTokenAddressesParams_external:对 初始化合约地址的参数检查函数 进行测试 ", async function () {
        const TCF1Address = TCF1.address;
        const TCF2Address = TCF2.address;
        const tokenAddresses1 = [TCF1Address, emptyAddress];
        let result = await env.read(TCF_NFTPrice, {
            functionName: "checkTokenAddressesParams_external",
            args: [tokenAddresses1]
        })

        expect(result).to.equal(emptyAddress + " isn't TCF or USDT");

        // 检查传入参数的数量
        let tokenAddresses = [TCF1Address, TCF2Address, TCF1Address];
        result = await env.read(TCF_NFTPrice, {
            functionName: "checkTokenAddressesParams_external",
            args: [tokenAddresses]
        })
        expect(result).to.equal("Address length must < 3,TCF or USDT");

        // 检查传入两个的TCF地址
        tokenAddresses = [TCF1Address, TCF2Address];
        result = await env.read(TCF_NFTPrice, {
            functionName: "checkTokenAddressesParams_external",
            args: [tokenAddresses]
        })
        expect(result).to.equal("Both address are TCF");

        // 检查是否为合约地址
        const EOAAddress = "0xdd2fd4581271e230360230f9337d5c0430bf44c0" as `0x${string}`
        tokenAddresses = [TCF1Address, EOAAddress];
        result = await env.read(TCF_NFTPrice, {
            functionName: "checkTokenAddressesParams_external",
            args: [tokenAddresses]
        })
        let responseMessage = EOAAddress + " isn't TCF or USDT"
        expect(result).to.equal(responseMessage)

        // 检查其是否为TCF或USDT
        result = await env.read(TCF_NFTPrice, {
            functionName: "checkTokenAddressesParams_external",
            args: [[TCF_NFTPrice.address]]
        })
        responseMessage = TCF_NFTPrice.address + " isn't TCF or USDT"
        expect(result).to.equal(responseMessage)

        // 测试成功
        result = await env.read(TCF_NFTPrice, {
            functionName: "checkTokenAddressesParams_external",
            args: [[TCF1Address]]
        })
        expect(result).to.equal("");

    })

    it("delSupportedToken:对 删除支持的token 进行测试", async function () {
        const TCF1Address = TCF1.address;
        const TCF2Address = TCF2.address;
        let tokenAddresses = [TCF1Address];

        // 初始化
        tokenAddresses = [TCF1Address];
        await env.execute(TCF_NFTPrice, {
            functionName: "addSupportedToken",
            args: [tokenAddresses, true],
            account: namedAccounts.deployer
        })

        expect(await env.read(TCF_NFTPrice, {
            functionName: "supportTokenType",
            args: [TCF1Address]
        })).to.equal(1)

        expect(await env.read(TCF_NFTPrice, {
            functionName: "supportedTokenAmount",
            args: []
        })).to.equal(2)

        expect(
            (await env.read(TCF_NFTPrice, {
                functionName: "tokenAddress_array",
                args: [0n]
            })).toLowerCase()
        ).to.equal(TCF1Address)

        // TCF2Address不在初始化列表中
        try {
            await env.execute(TCF_NFTPrice, {
                functionName: "deleteSupportedToken",
                args: [TCF2Address],
                account: namedAccounts.deployer
            })
        } catch (err: any) {
            expect(err.message ?? err.shortMessage).to.
                equal(revertMessage + "'ChangeSupportedToken: old token address is not exist'")
        }

        // 正确测试

        await env.execute(TCF_NFTPrice, {
            functionName: "deleteSupportedToken",
            args: [TCF1Address],
            account: namedAccounts.deployer
        })

        expect(await env.read(TCF_NFTPrice, {
            functionName: "supportTokenType",
            args: [TCF1Address]
        })).to.equal(0n)

        expect(await env.read(TCF_NFTPrice, {
            functionName: "supportedTokenAmount",
            args: []
        })).to.equal(1n)

        expect(await env.read(TCF_NFTPrice, {
            functionName: "tokenAddress_array",
            args: [0n]
        })).to.equal(emptyAddress)

    })

    it("addSupportedToken:对 增加支持的token 进行测试", async function () {
        const TCF1Address = TCF1.address;
        const TCF2Address = TCF2.address;
        let tokenAddresses = [TCF1Address];

        // 初始化
        tokenAddresses = [TCF1Address];
        await env.execute(TCF_NFTPrice, {
            functionName: "addSupportedToken",
            args: [tokenAddresses, true],
            account: namedAccounts.deployer
        })

        expect(await env.read(TCF_NFTPrice, {
            functionName: "supportTokenType",
            args: [TCF1Address]
        })).to.equal(1)

        // TC TCF
        expect(await env.read(TCF_NFTPrice, {
            functionName: "supportedTokenAmount",
            args: []
        })).to.equal(2)

        expect(
            (await env.read(TCF_NFTPrice, {
                functionName: "tokenAddress_array",
                args: [0n]
            })).toLowerCase()
        ).to.equal(TCF1Address)

        // TCF2Address不在初始化列表中
        try {
            await env.execute(TCF_NFTPrice, {
                functionName: "addSupportedToken",
                args: [[TCF_NFTPrice.address], true],
                account: namedAccounts.deployer
            })
        } catch (err: any) {
            expect(err.message ?? err.shortMessage).to.
                equal(revertMessage + "'" + TCF_NFTPrice.address + " isn't TCF or USDT'")
        }

        // 正确测试

        await env.execute(TCF_NFTPrice, {
            functionName: "addSupportedToken",
            args: [[TCF2Address], true],
            account: namedAccounts.deployer
        })

        expect(await env.read(TCF_NFTPrice, {
            functionName: "supportTokenType",
            args: [TCF2Address]
        })).to.equal(1)

        expect(await env.read(TCF_NFTPrice, {
            functionName: "supportedTokenAmount",
            args: []
        })).to.equal(3n)

        expect(
            (await env.read(TCF_NFTPrice, {
                functionName: "tokenAddress_array",
                args: [1n]
            })).toLowerCase()
        ).to.equal(TCF2Address)

    })

    it("checkPricesParams:对 检查价格参数函数 进行测试", async function () {
        const TCF1Address = TCF1.address;
        const TCF2Address = TCF2.address;
        let tokenAddresses = [TCF1Address];
        // 初始化
        tokenAddresses = [TCF1Address];
        await env.read(TCF_NFTPrice, {
            functionName: "checkPricesParams",
            args: [sixNFTPrices],
            account: namedAccounts.deployer
        })

        // 必须先初始化支持的tokenAddress
        // try {
        //     await env.read(TCF_NFTPrice, {
        //         functionName: "checkPricesParams",
        //         args: [sixNFTPrices],
        //         account: namedAccounts.deployer
        //     })
        // } catch (err: any) {
        //     expect(err.shortMessage ?? err.message).to.equal("Supported token don't be initialized")
        // }

        // 初始化支持的tokenAddress
        // tokenAddresses = [TCF1Address];
        // await env.execute(TCF_NFTPrice, {
        //     functionName: "initSupportToken",
        //     args: [tokenAddresses, true],
        //     account: namedAccounts.deployer
        // })


    })



})