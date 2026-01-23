// test/Greeter.test.ts
// 需要安装这个插件hardhat-ethers-chai-matchers
import { expect } from "chai";
import { beforeEach, describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.ts";
import { hexToNumber } from "./utils/stringToHex.ts";
import { getPrices, zeroAddress, getErrorPrices } from "./price.ts";
const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);
let { env, TCF1, TCF2, namedAccounts, test_TCF_ERC1155 } = await networkHelpers.loadFixture(
    deployAll
);

describe("TCF_ERC1155测试", function () {
    beforeEach(async () => {
        ({ env, TCF1, TCF2, namedAccounts, test_TCF_ERC1155 } = await networkHelpers.loadFixture(
            deployAll
        ));
    })
    describe("mint:对 mint函数 进行测试", function () {
        it("mint: id 超出范围，期望 revert", async function () {
            await expect(
                env.execute(test_TCF_ERC1155, {
                    functionName: "testMint",
                    args: [namedAccounts.deployer, 6n, 3n, "0x" as `0x${string}`],
                    account: namedAccounts.deployer
                })
            ).to.be.revertedWith("TOKENID_RANGE")
        })

        it("mint_ownerOf: 测试 mint 后 ownerOf 函数", async function () {
            await env.execute(test_TCF_ERC1155, {
                functionName: "testMint",
                args: [namedAccounts.deployer, 2n, 5n, "0x" as `0x${string}`],
                account: namedAccounts.deployer
            })

            await env.execute(test_TCF_ERC1155, {
                functionName: "testMint",
                args: [namedAccounts.deployer, 2n, 1n, "0x" as `0x${string}`],
                account: namedAccounts.deployer
            })

            expect(
                (await env.read(test_TCF_ERC1155, {
                    functionName: "testOwnerOf",
                    args: [2n, 5n]
                })).toLocaleLowerCase()
            ).to.equal(namedAccounts.deployer)
        })

        // it("mint_testMintTimes, 测试 mint 后的时间戳记录", async function () {
        //     let result = await env.execute(test_TCF_ERC1155, {
        //         functionName: "testMint",
        //         args: [namedAccounts.deployer, 3n, 4n, "0x" as `0x${string}`],
        //         account: namedAccounts.deployer
        //     })

        //     result = await env.execute(test_TCF_ERC1155, {
        //         functionName: "testMint",
        //         args: [namedAccounts.deployer, 3n, 4n, "0x" as `0x${string}`],
        //         account: namedAccounts.deployer
        //     })

        //     // 获取区块时间戳
        //     const blockNumber = result.blockNumber;
        //     const block = await env.viem.publicClient.getBlock({
        //         blockNumber: BigInt(hexToNumber(blockNumber))
        //     });
        //     const timestamp = BigInt(block.timestamp);

        //     expect(
        //         await env.read(test_TCF_ERC1155, {
        //             functionName: "testMintTimes",
        //             args: [3n, namedAccounts.deployer, 7n]
        //         })
        //     ).to.equal(timestamp)
        // })

        // it("mint_testOwnedTokenIds, 测试 mint 后的 ownedTokenIds 记录", async function () {
        //     await env.execute(test_TCF_ERC1155, {
        //         functionName: "testMint",
        //         args: [namedAccounts.deployer, 4n, 2n, "0x" as `0x${string}`],
        //         account: namedAccounts.deployer
        //     })
        //     await env.execute(test_TCF_ERC1155, {
        //         functionName: "testMint",
        //         args: [namedAccounts.deployer, 4n, 3n, "0x" as `0x${string}`],
        //         account: namedAccounts.deployer
        //     })
        //     const ownedTokenIds = await env.read(test_TCF_ERC1155, {
        //         functionName: "testOwnedTokenIds",
        //         args: [namedAccounts.deployer, 4n]
        //     })
        //     expect(ownedTokenIds).to.deep.equal([0n, 1n, 2n, 3n, 4n])
        // })

        it("mint_balanceOf: 测试 mint 后的 balanceOf 记录", async function () {
            await env.execute(test_TCF_ERC1155, {
                functionName: "testMint",
                args: [namedAccounts.deployer, 0n, 7n, "0x" as `0x${string}`],
                account: namedAccounts.deployer
            })

            await env.execute(test_TCF_ERC1155, {
                functionName: "testMint",
                args: [namedAccounts.deployer, 0n, 7n, "0x" as `0x${string}`],
                account: namedAccounts.deployer
            })

            expect(
                await env.read(test_TCF_ERC1155, {
                    functionName: "balanceOf",
                    args: [namedAccounts.deployer, 0n]
                })
            ).to.equal(14n)
        })

        // it("testBalanceOfValid: 获取有效时间戳", async function () {
        //     await env.execute(test_TCF_ERC1155, {
        //         functionName: "testMint",
        //         args: [namedAccounts.deployer, 0n, 2n, "0x" as `0x${string}`],
        //         account: namedAccounts.deployer
        //     })

        //     // 等待3秒
        //     await new Promise(resolve => setTimeout(resolve, 3000));

        //     // 再次 mint，这个mint的两个token，作为有效token返回
        //     const tx = await env.execute(test_TCF_ERC1155, {
        //         functionName: "testMint",
        //         args: [namedAccounts.deployer, 0n, 2n, "0x" as `0x${string}`],
        //         account: namedAccounts.deployer
        //     })

        //     // 获取区块的时间戳
        //     const blockNumber = tx.blockNumber;
        //     const block = await env.viem.publicClient.getBlock({
        //         blockNumber: BigInt(hexToNumber(blockNumber))
        //     });
        //     const timestamp = BigInt(block.timestamp);

        //     expect(
        //         await env.read(test_TCF_ERC1155, {
        //             functionName: "testBalanceOfValid",
        //             // 设置两秒的过期时间
        //             args: [namedAccounts.deployer, 0n, 2]
        //         })
        //     ).to.deep.equal({ amount: 2n, mintTimes: [timestamp, timestamp], indexes: [2, 3] })
        // })

        // it("testBalanceOfInvalid: 获取过期时间戳", async function () {
        //     const tx = await env.execute(test_TCF_ERC1155, {
        //         functionName: "testMint",
        //         args: [namedAccounts.deployer, 0n, 3n, "0x" as `0x${string}`],
        //         account: namedAccounts.deployer
        //     })

        //     // 获取上一个区块的时间戳
        //     const blockNumber = tx.blockNumber;
        //     const block = await env.viem.publicClient.getBlock({
        //         blockNumber: BigInt(hexToNumber(blockNumber))
        //     });
        //     const timestamp = BigInt(block.timestamp);

        //     // 等待11秒
        //     await new Promise(resolve => setTimeout(resolve, 4000));

        //     expect(
        //         await env.read(test_TCF_ERC1155, {
        //             functionName: "testBalanceOfInvalid",
        //             args: [namedAccounts.deployer, 0n, 3]
        //         })
        //     ).to.deep.equal({ amount: 0n, mintTimes: [], indexes: [] })
        // })
    })

    describe("ownerOf:对 ownerOf函数 进行测试", function () {
        it("ownerOf: 测试 ownerOf 函数", async function () {
            await env.execute(test_TCF_ERC1155, {
                functionName: "testMint",
                args: [namedAccounts.deployer, 1n, 2n, "0x" as `0x${string}`],
                account: namedAccounts.deployer
            })
            await env.execute(test_TCF_ERC1155, {
                functionName: "testMint",
                args: [namedAccounts.deployer, 1n, 2n, "0x" as `0x${string}`],
                account: namedAccounts.deployer
            })
            expect((
                await env.read(test_TCF_ERC1155, {
                    functionName: "testOwnerOf",
                    args: [1n, 0n]
                })
            ).toLocaleLowerCase()).to.equal(namedAccounts.deployer)

            expect((
                await env.read(test_TCF_ERC1155, {
                    functionName: "testOwnerOf",
                    args: [1n, 1n]
                })
            ).toLocaleLowerCase()).to.equal(namedAccounts.deployer)

            expect((
                await env.read(test_TCF_ERC1155, {
                    functionName: "testOwnerOf",
                    args: [1n, 2n]
                })
            ).toLocaleLowerCase()).to.equal(namedAccounts.deployer)

            expect((
                await env.read(test_TCF_ERC1155, {
                    functionName: "testOwnerOf",
                    args: [1n, 3n]
                })
            ).toLocaleLowerCase())
                .to.equal(namedAccounts.deployer)
        })
    })

    // 测试safeTransfer函数
    describe("safeTransfer:对 safeTransfer函数 进行测试", function () {
        it("safeTransfer: 接收方为0地址 revert", async function () {
            await env.execute(test_TCF_ERC1155, {
                functionName: "testMint",
                args: [namedAccounts.deployer, 0n, 3n, "0x" as `0x${string}`],
                account: namedAccounts.deployer
            })

            // 接受方（to）为0地址，期望revert
            await expect(
                env.execute(test_TCF_ERC1155, {
                    functionName: "testSafeTransferFrom",
                    args: [namedAccounts.deployer, zeroAddress, 0n, [1n], "0x" as `0x${string}`],
                    account: namedAccounts.deployer,
                })
            ).to.be.revertedWith("ERC1155: transfer to the zero address");
        });

        // 将

        it("safeTransfer: tokenID 超出范围，revert", async function () {
            await env.execute(test_TCF_ERC1155, {
                functionName: "testMint",
                args: [namedAccounts.deployer, 0n, 3n, "0x" as `0x${string}`],
                account: namedAccounts.deployer
            })

            // tokenId 超出范围，期望 revert
            await expect(
                env.execute(test_TCF_ERC1155, {
                    functionName: "testSafeTransferFrom",
                    args: [namedAccounts.deployer, namedAccounts.admin1, 6n, [1n], "0x" as `0x${string}`],
                    account: namedAccounts.deployer,
                })
            ).to.be.revertedWith("TOKENID_RANGE");
        });

        it("safeTransfer: 目标token不属于发送方，revert", async function () {
            await env.execute(test_TCF_ERC1155, {
                functionName: "testMint",
                args: [namedAccounts.deployer, 0n, 3n, "0x" as `0x${string}`],
                account: namedAccounts.deployer
            })

            // indexes中的token不属于发送方，期望 revert
            await expect(
                env.execute(test_TCF_ERC1155, {
                    functionName: "testSafeTransferFrom",
                    args: [namedAccounts.deployer, namedAccounts.admin1, 0n, [5n], "0x" as `0x${string}`],
                    account: namedAccounts.deployer,
                })
            ).to.be.revertedWith("ERC1155: transfer of token that is not own");
        });

        it("safeTransfer: 正常转账，检测owner", async function () {
            await env.execute(test_TCF_ERC1155, {
                functionName: "testMint",
                args: [namedAccounts.deployer, 0n, 5n, "0x" as `0x${string}`],
                account: namedAccounts.deployer
            })
            await env.execute(test_TCF_ERC1155, {
                functionName: "testSafeTransferFrom",
                args: [namedAccounts.deployer, namedAccounts.admin1, 0n, [1n, 2n], "0x" as `0x${string}`],
                account: namedAccounts.deployer,
            })
            await env.execute(test_TCF_ERC1155, {
                functionName: "testSafeTransferFrom",
                args: [namedAccounts.admin1, namedAccounts.deployer, 0n, [2n], "0x" as `0x${string}`],
                account: namedAccounts.admin1,
            })

            expect((
                await env.read(test_TCF_ERC1155, {
                    functionName: "testOwnerOf",
                    args: [0n, 2n]
                })
            ).toLocaleLowerCase()).to.equal(namedAccounts.deployer)
            expect((
                await env.read(test_TCF_ERC1155, {
                    functionName: "testOwnerOf",
                    args: [0n, 1n]
                })
            ).toLocaleLowerCase()).to.equal(namedAccounts.admin1)

        });

        it("safeTransfer: 正常转账，检测balanceOf", async function () {
            await env.execute(test_TCF_ERC1155, {
                functionName: "testMint",
                args: [namedAccounts.deployer, 0n, 5n, "0x" as `0x${string}`],
                account: namedAccounts.deployer
            })
            await env.execute(test_TCF_ERC1155, {
                functionName: "testSafeTransferFrom",
                args: [namedAccounts.deployer, namedAccounts.admin1, 0n, [1n, 4n], "0x" as `0x${string}`],
                account: namedAccounts.deployer,
            })
            await env.execute(test_TCF_ERC1155, {
                functionName: "testSafeTransferFrom",
                args: [namedAccounts.admin1, namedAccounts.deployer, 0n, [1n], "0x" as `0x${string}`],
                account: namedAccounts.admin1,
            })
            expect(
                await env.read(test_TCF_ERC1155, {
                    functionName: "balanceOf",
                    args: [namedAccounts.deployer, 0n]
                })
            ).to.equal(4n);
            expect(
                await env.read(test_TCF_ERC1155, {
                    functionName: "balanceOf",
                    args: [namedAccounts.admin1, 0n]
                })
            ).to.equal(1n);
        });
        // describe("mintBatch:对 mintBatch函数 进行测试", function () {
        //     it("mintBatch:测试添加时间戳", async function () {
        //         await env.execute(test_TCF_ERC1155, {
        //             functionName: "testMintBatch",
        //             args: [namedAccounts.deployer, [0n, 1n, 2n], [10n, 10n, 10n], "0x" as `0x${string}`],
        //             account: namedAccounts.deployer
        //         })

        //         // expect(
        //         //     await env.read(test_TCF_ERC1155, {
        //         //         functionName: "balanceOf",
        //         //         args: [namedAccounts.deployer, 0n]
        //         //     })
        //         // ).to.equal(10n)

        //         // expect(
        //         //     await env.read(test_TCF_ERC1155, {
        //         //         functionName: "balanceOf",
        //         //         args: [namedAccounts.deployer, 1n]
        //         //     })
        //         // ).to.equal(10n)

        //         // expect(
        //         //     await env.read(test_TCF_ERC1155, {
        //         //         functionName: "balanceOf",
        //         //         args: [namedAccounts.deployer, 2n]
        //         //     })
        //         // ).to.equal(10n)

        //         // expect(
        //         //     await env.read(test_TCF_ERC1155, {
        //         //         functionName: "balanceOfBatch",
        //         //         args: [[namedAccounts.deployer, namedAccounts.deployer, namedAccounts.deployer], [0n, 1n, 2n]]
        //         //     })
        //         // ).to.deep.equal([10n, 10n, 10n])

        //     })
        // })

        // describe("_safeTransfer:对 _safeTransfer函数 进行测试", function () {
        //     it("_safeTransfer:进行转账", async function () {
        //         await env.execute(test_TCF_ERC1155, {
        //             functionName: "testMint",
        //             args: [namedAccounts.deployer, 0n, 100n, "0x" as `0x${string}`],
        //             account: namedAccounts.deployer
        //         })

        //         // await env.execute(test_TCF_ERC1155, {
        //         //     functionName: "safeTransferFrom",
        //         //     args: [namedAccounts.deployer, namedAccounts.admin1, 0n, 10n, "0x" as `0x${string}`],
        //         //     account: namedAccounts.deployer,
        //         // })

        //         // expect(
        //         //     await env.read(test_TCF_ERC1155, {
        //         //         functionName: "balanceOf",
        //         //         args: [namedAccounts.deployer, 0n]
        //         //     })
        //         // ).to.equal(90n)

        //         // expect(
        //         //     await env.read(test_TCF_ERC1155, {
        //         //         functionName: "balanceOf",
        //         //         args: [namedAccounts.admin1, 0n]
        //         //     })
        //         // ).to.equal(10n)
        //     })
        // })

        // describe("_safeBatchTransfer:对 _safeBatchTransfer函数 进行测试", function () {
        //     it("_safeBatchTransfer:进行批量转账", async function () {
        //         await env.execute(test_TCF_ERC1155, {
        //             functionName: "testMintBatch",
        //             args: [namedAccounts.deployer, [0n, 1n, 2n], [100n, 100n, 100n], "0x" as `0x${string}`],
        //             account: namedAccounts.deployer
        //         })

        //         await env.execute(test_TCF_ERC1155, {
        //             functionName: "safeBatchTransferFrom",
        //             args: [namedAccounts.deployer, namedAccounts.admin1, [0n, 1n, 2n], [10n, 10n, 10n], "0x" as `0x${string}`],
        //             account: namedAccounts.deployer,
        //         })

        //         // expect(
        //         //     await env.read(test_TCF_ERC1155, {
        //         //         functionName: "balanceOf",
        //         //         args: [namedAccounts.deployer, 0n]
        //         //     })
        //         // ).to.equal(90n)

        //         // expect(
        //         //     await env.read(test_TCF_ERC1155, {
        //         //         functionName: "balanceOf",
        //         //         args: [namedAccounts.admin1, 0n]
        //         //     })
        //         // ).to.equal(10n)

        //         // expect(
        //         //     await env.read(test_TCF_ERC1155, {
        //         //         functionName: "balanceOf",
        //         //         args: [namedAccounts.deployer, 1n]
        //         //     })
        //         // ).to.equal(90n)
        //         // expect(
        //         //     await env.read(test_TCF_ERC1155, {
        //         //         functionName: "balanceOf",
        //         //         args: [namedAccounts.admin1, 1n]
        //         //     })
        //         // ).to.equal(10n)

        //         // expect(
        //         //     await env.read(test_TCF_ERC1155, {
        //         //         functionName: "balanceOf",
        //         //         args: [namedAccounts.deployer, 2n]
        //         //     })
        //         // ).to.equal(90n)
        //         // expect(
        //         //     await env.read(test_TCF_ERC1155, {
        //         //         functionName: "balanceOf",
        //         //         args: [namedAccounts.admin1, 2n]
        //         //     })
        //         // ).to.equal(10n)

        //     })
        // })
    });
});