// test/Greeter.test.ts
// 需要安装这个插件hardhat-ethers-chai-matchers
import { expect } from "chai";
import { beforeEach, describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.js";
import { stringToHexString } from "./utils/stringToHex.ts"
import { getPrices, zeroAddress, getErrorPrices } from "./price.ts"
const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);
let { env, TCF1, TCF2, namedAccounts, TCF_NFTPrice } = await networkHelpers.loadFixture(
    deployAll
);

const revertMessage = "VM Exception while processing transaction: reverted with reason string "

describe("TCF_NFTPrice", function () {

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

    it("checkTokenAddressesParams_external:对 初始化合约地址的参数检查函数 进行测试 ", async function () {
        const TCF1Address = TCF1.address;
        const TCF2Address = TCF2.address;
        const tokenAddresses1 = [TCF1Address, zeroAddress];
        let result = await env.read(TCF_NFTPrice, {
            functionName: "checkTokenAddressesCode",
            args: [tokenAddresses1]
        })

        expect(result).to.equal("NOT_TCF_USDT " + zeroAddress);

        // 检查传入参数的数量
        let tokenAddresses = [TCF1Address, TCF2Address, TCF1Address];
        result = await env.read(TCF_NFTPrice, {
            functionName: "checkTokenAddressesCode",
            args: [tokenAddresses]
        })
        expect(result).to.equal("ADDR_LEN");

        // 检查传入两个的TCF地址
        tokenAddresses = [TCF1Address, TCF2Address];
        result = await env.read(TCF_NFTPrice, {
            functionName: "checkTokenAddressesCode",
            args: [tokenAddresses]
        })
        expect(result).to.equal("DUP_TCF");

        // 检查是否为合约地址
        const EOAAddress = "0xdd2fd4581271e230360230f9337d5c0430bf44c0" as `0x${string}`
        tokenAddresses = [TCF1Address, EOAAddress];
        result = await env.read(TCF_NFTPrice, {
            functionName: "checkTokenAddressesCode",
            args: [tokenAddresses]
        })
        expect(result).to.equal("NOT_TCF_USDT " + EOAAddress)

        // 检查其是否为TCF或USDT
        result = await env.read(TCF_NFTPrice, {
            functionName: "checkTokenAddressesCode",
            args: [[TCF_NFTPrice.address]]
        })
        expect(result).to.equal("NOT_TCF_USDT " + TCF_NFTPrice.address)

        // 测试成功
        result = await env.read(TCF_NFTPrice, {
            functionName: "checkTokenAddressesCode",
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

        // 删除空地址
        await expect(
            env.execute(TCF_NFTPrice, {
                functionName: "deleteSupportedToken",
                args: [zeroAddress],
                account: namedAccounts.deployer
            })
        ).to.be.revertedWith("NATURE_TOKEN_DEL")

        // TCF2Address不在初始化列表中
        try {
            await env.execute(TCF_NFTPrice, {
                functionName: "deleteSupportedToken",
                args: [TCF2Address],
                account: namedAccounts.deployer
            })
        } catch (err: any) {
            expect(err.message ?? err.shortMessage).to.
                equal(revertMessage + "'" + "TOKEN_UNSUPPORTED " + TCF2Address +
                    "'"
                )
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
        await expect(
            env.execute(TCF_NFTPrice, {
                functionName: "addSupportedToken",
                args: [[TCF_NFTPrice.address], true],
                account: namedAccounts.deployer
            })
        ).to.to.revertedWith("NOT_TCF_USDT" + " " + TCF_NFTPrice.address)

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

    it("checkInitPricesParams:对 检查价格参数函数 进行测试", async function () {
        const TCF1Address = TCF1.address;
        const TCF2Address = TCF2.address;
        let tokenAddresses = [TCF1Address];
        // 初始化
        tokenAddresses = [TCF1Address];
        expect(
            await env.read(TCF_NFTPrice, {
                functionName: "checkInitPricesParams",
                args: [getPrices(TCF1.address)],
                account: namedAccounts.deployer
            })
        ).to.equal("PRICES_LEN")

        // 初始化支持的token
        await env.execute(TCF_NFTPrice, {
            functionName: "addSupportedToken",
            args: [tokenAddresses, true],
            account: namedAccounts.deployer
        })

        // 初始化token时的地址为TCF1Address，初始化价格的地址为TCF2Address
        expect(
            await env.read(TCF_NFTPrice, {
                functionName: "checkInitPricesParams",
                args: [getPrices(TCF2Address)],
                account: namedAccounts.deployer
            })
        ).to.equal("TOKEN_UNSUPPORTED " + TCF2Address)

        expect(
            await env.read(TCF_NFTPrice, {
                functionName: "checkInitPricesParams",
                args: [getErrorPrices(TCF1Address)],
                account: namedAccounts.deployer
            })
        ).to.equal("PRICES_LEN")

        // 正确测试
        expect(
            await env.read(TCF_NFTPrice, {
                functionName: "checkInitPricesParams",
                args: [getPrices(TCF1Address)],
                account: namedAccounts.deployer
            })
        ).to.equal("")
    })

    it("NFTPrice_init:对 初始化NFT价格函数 进行测试", async function () {
        const TCF1Address = TCF1.address;
        const TCF2Address = TCF2.address;
        let tokenAddresses = [TCF1Address];

        // 初始化支持的token
        await env.execute(TCF_NFTPrice, {
            functionName: "addSupportedToken",
            args: [tokenAddresses, true],
            account: namedAccounts.deployer
        })

        // 初始化token时的地址为TCF1Address，初始化价格的地址为TCF2Address
        await expect(
            env.execute(TCF_NFTPrice, {
                functionName: "initPrice",
                args: [getPrices(TCF2Address), true],
                account: namedAccounts.deployer
            })
        ).to.be.revertedWith("TOKEN_UNSUPPORTED " + TCF2Address)

        // 正确测试
        await env.execute(TCF_NFTPrice, {
            functionName: "initPrice",
            args: [getPrices(TCF1Address), true],
            account: namedAccounts.deployer
        })

        // 再次执行
        await expect(
            env.execute(TCF_NFTPrice, {
                functionName: "initPrice",
                args: [getPrices(TCF1Address), true],
                account: namedAccounts.deployer
            })
        ).to.be.revertedWith("PRICES_INITIALIZED")
    })

    it("changeNFTPrice:对 修改NFT价格函数 进行测试", async function () {
        const TCF1Address = TCF1.address;
        const TCF2Address = TCF2.address;
        let tokenAddresses = [TCF1Address];

        // 初始化支持的token
        await env.execute(TCF_NFTPrice, {
            functionName: "addSupportedToken",
            args: [tokenAddresses, true],
            account: namedAccounts.deployer
        })

        // 正确测试
        await env.execute(TCF_NFTPrice, {
            functionName: "initPrice",
            args: [getPrices(TCF1Address), false],
            account: namedAccounts.deployer
        })

        // 错误修改NFT价格
        await expect(env.execute(TCF_NFTPrice, {
            functionName: "changeNFTPrice",
            args: [0n, TCF2Address, 100n],
            account: namedAccounts.deployer,
        })
        ).to.be.revertedWith("TOKEN_UNSUPPORTED " + TCF2Address)

        // 错误修改NFT价格
        await expect(env.execute(TCF_NFTPrice, {
            functionName: "changeNFTPrice",
            args: [7n, TCF1Address, 100n],
            account: namedAccounts.deployer,
        })
        ).to.be.revertedWith("TOKENID_RANGE")

        //正确测试
        await env.execute(TCF_NFTPrice, {
            functionName: "changeNFTPrice",
            args: [0n, zeroAddress, 100n],
            account: namedAccounts.deployer,
        })
    })

    it("getNFTPrice:对 获取NFT价格函数 进行测试", async function () {
        const TCF1Address = TCF1.address;
        const TCF2Address = TCF2.address;
        let tokenAddresses = [TCF1Address];

        // 初始化支持的token
        await env.execute(TCF_NFTPrice, {
            functionName: "addSupportedToken",
            args: [tokenAddresses, true],
            account: namedAccounts.deployer
        })

        // 初始化价格
        await env.execute(TCF_NFTPrice, {
            functionName: "initPrice",
            args: [getPrices(TCF1Address), false],
            account: namedAccounts.deployer
        })

        //修改TC价格
        await env.execute(TCF_NFTPrice, {
            functionName: "changeNFTPrice",
            args: [0n, zeroAddress, 100n],
            account: namedAccounts.deployer,
        })

        // 获取tc价格
        let result = await env.read(TCF_NFTPrice, {
            functionName: "getNFTPrice",
            args: [0n, zeroAddress]
        })

        expect(result[0]).to.equal("")
        expect(result[1]).to.equal(100n)

    })

    it("获取比例和权限时长", async function () {
        const TCF1Address = TCF1.address;
        const TCF2Address = TCF2.address;
        let tokenAddresses = [TCF1Address];
        // 初始化支持的token
        await env.execute(TCF_NFTPrice, {
            functionName: "addSupportedToken",
            args: [tokenAddresses, true],
            account: namedAccounts.deployer
        })

        // 初始化价格
        await env.execute(TCF_NFTPrice, {
            functionName: "initPrice",
            args: [getPrices(TCF1Address), false],
            account: namedAccounts.deployer
        })

        // 获取比例和权限时长
        let result = await env.read(TCF_NFTPrice, {
            functionName: "NFTS",
            args: [0n]
        })
        expect(result[0]).to.equal(40)
        expect(result[1]).to.equal(15552000)
    })
})