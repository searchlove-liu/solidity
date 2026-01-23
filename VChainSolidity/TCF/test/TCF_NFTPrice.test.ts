// test/Greeter.test.ts
// 需要安装这个插件hardhat-ethers-chai-matchers
import { expect } from "chai";
import { beforeEach, describe, it } from "node:test"; // using node:test as hardhat v3 do not support vitest
import { network } from "hardhat";
import { setupFixtures } from "./utils/index.js";
import {
  getPrices,
  zeroAddress,
  getErrorPrices,
  ONEAddress,
  getTCPrices,
} from "./price.ts";
const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);
let { env, TCF1, TCF2, namedAccounts, TCF_NFTPrice } =
  await networkHelpers.loadFixture(deployAll);

const revertMessage =
  "VM Exception while processing transaction: reverted with reason string ";

describe("TCF_NFTPrice", function () {
  const ensureTCFInitialized = async (tokenContract: typeof TCF1) => {
    const symbol = await env.read(tokenContract, { functionName: "symbol" });
    if (symbol === "DCF") return;

    // const tokenName = stringToHexString("DCF") as `0x${string}`;
    // const tokenSymbol = stringToHexString("DCF") as `0x${string}`;
    await env.execute(tokenContract, {
      functionName: "initialize",
      args: [namedAccounts.deployer, namedAccounts.deployer],
      account: namedAccounts.deployer,
    });
  };

  beforeEach(async () => {
    ({ env, TCF1, TCF2, namedAccounts, TCF_NFTPrice } =
      await networkHelpers.loadFixture(deployAll));
    await ensureTCFInitialized(TCF1);
    await ensureTCFInitialized(TCF2);
  });

  it("checkTokenAddressesParams_external:对 初始化合约地址的参数检查函数 进行测试 ", async function () {
    const TCF1Address = TCF1.address;
    const TCF2Address = TCF2.address;
    const tokenAddresses1 = [TCF1Address, zeroAddress];
    let result = await env.read(TCF_NFTPrice, {
      functionName: "checkTokenAddressesCode",
      args: [tokenAddresses1],
    });

    expect(result).to.equal("NOT_DCF_USDT " + zeroAddress);

    // 检查传入两个的DCF地址
    let tokenAddresses = [TCF1Address, TCF2Address];
    result = await env.read(TCF_NFTPrice, {
      functionName: "checkTokenAddressesCode",
      args: [tokenAddresses],
    });
    expect(result).to.equal("DUP_DCF");

    // 检查是否为合约地址
    const EOAAddress =
      "0xdd2fd4581271e230360230f9337d5c0430bf44c0" as `0x${string}`;
    tokenAddresses = [TCF1Address, EOAAddress];
    result = await env.read(TCF_NFTPrice, {
      functionName: "checkTokenAddressesCode",
      args: [tokenAddresses],
    });
    expect(result).to.equal("NOT_DCF_USDT " + EOAAddress);

    // 检查其是否为TCF或USDT
    result = await env.read(TCF_NFTPrice, {
      functionName: "checkTokenAddressesCode",
      args: [[TCF_NFTPrice.address]],
    });
    expect(result).to.equal("NOT_DCF_USDT " + TCF_NFTPrice.address);

    // 测试成功
    result = await env.read(TCF_NFTPrice, {
      functionName: "checkTokenAddressesCode",
      args: [[TCF1Address]],
    });
    expect(result).to.equal("");
  });

  it("delSupportedToken:对 删除支持的token 进行测试", async function () {
    const TCF1Address = TCF1.address;
    const TCF2Address = TCF2.address;
    let tokenAddresses = [TCF1Address];

    // 初始化
    tokenAddresses = [TCF1Address];
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [tokenAddresses],
      account: namedAccounts.deployer,
    });

    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "isSupported",
        args: [TCF1Address],
      }),
    ).to.equal(1);

    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "supportedTokenAmount",
        args: [],
      }),
    ).to.equal(2);

    expect(
      (
        await env.read(TCF_NFTPrice, {
          functionName: "tokenAddress_array",
          args: [1n],
        })
      ).toLowerCase(),
    ).to.equal(TCF1Address);

    // 删除空地址
    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "deleteSupportedToken",
        args: [zeroAddress],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("NATURE_TOKEN_DEL");

    // TCF2Address不在初始化列表中
    try {
      await env.execute(TCF_NFTPrice, {
        functionName: "deleteSupportedToken",
        args: [TCF2Address],
        account: namedAccounts.deployer,
      });
    } catch (err: any) {
      expect(err.message ?? err.shortMessage).to.equal(
        revertMessage + "'" + "TOKEN_UNSUPPORTED " + TCF2Address + "'",
      );
    }

    // 正确测试

    await env.execute(TCF_NFTPrice, {
      functionName: "deleteSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "isSupported",
        args: [TCF1Address],
      }),
    ).to.equal(0n);
  });

  it("addSupportedToken:对 增加支持的token 进行测试", async function () {
    const TCF1Address = TCF1.address;
    const TCF2Address = TCF2.address;
    let tokenAddresses = [TCF1Address];

    // 初始化
    tokenAddresses = [TCF1Address];
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [tokenAddresses],
      account: namedAccounts.deployer,
    });

    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "isSupported",
        args: [TCF1Address],
      }),
    ).to.equal(1);

    // TC TCF
    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "supportedTokenAmount",
        args: [],
      }),
    ).to.equal(2);

    expect(
      (
        await env.read(TCF_NFTPrice, {
          functionName: "tokenAddress_array",
          args: [0n],
        })
      ).toLowerCase(),
    ).to.equal(ONEAddress);

    // TCF2Address不在初始化列表中
    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "addSupportedToken",
        args: [[TCF_NFTPrice.address]],
        account: namedAccounts.deployer,
      }),
    ).to.to.revertedWith("NOT_DCF_USDT" + " " + TCF_NFTPrice.address);

    // 正确测试
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [[TCF2Address]],
      account: namedAccounts.deployer,
    });

    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "isSupported",
        args: [TCF2Address],
      }),
    ).to.equal(1);

    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "supportedTokenAmount",
        args: [],
      }),
    ).to.equal(3n);

    expect(
      (
        await env.read(TCF_NFTPrice, {
          functionName: "tokenAddress_array",
          args: [2n],
        })
      ).toLowerCase(),
    ).to.equal(TCF2Address);
  });

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
        account: namedAccounts.deployer,
      }),
    ).to.equal("PRICES_LEN");

    // 初始化支持的token
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [tokenAddresses],
      account: namedAccounts.deployer,
    });

    // 初始化token时的地址为TCF1Address，初始化价格的地址为TCF2Address
    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "checkInitPricesParams",
        args: [getPrices(TCF2Address)],
        account: namedAccounts.deployer,
      }),
    ).to.equal("TOKEN_UNSUPPORTED " + TCF2Address);

    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "checkInitPricesParams",
        args: [getErrorPrices(TCF1Address)],
        account: namedAccounts.deployer,
      }),
    ).to.equal("PRICES_LEN");

    // 正确测试
    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "checkInitPricesParams",
        args: [getPrices(TCF1Address)],
        account: namedAccounts.deployer,
      }),
    ).to.equal("");
  });

  it("NFTPrice_init:对 初始化NFT价格函数 进行测试", async function () {
    const TCF1Address = TCF1.address;
    const TCF2Address = TCF2.address;
    let tokenAddresses = [TCF1Address];

    // 初始化支持的token
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [tokenAddresses],
      account: namedAccounts.deployer,
    });

    // 初始化token时的地址为TCF1Address，初始化价格的地址为TCF2Address
    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "initPrice",
        args: [getPrices(TCF2Address)],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("TOKEN_UNSUPPORTED " + TCF2Address);

    // 正确测试
    await env.execute(TCF_NFTPrice, {
      functionName: "initPrice",
      args: [getPrices(TCF1Address)],
      account: namedAccounts.deployer,
    });

    // 再次执行
    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "initPrice",
        args: [getPrices(TCF1Address)],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("PRICES_INITIALIZED");
  });

  it("changeNFTPrice:对 修改NFT价格函数 进行测试", async function () {
    const TCF1Address = TCF1.address;
    const TCF2Address = TCF2.address;
    let tokenAddresses = [TCF1Address];

    // 初始化支持的token
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [tokenAddresses],
      account: namedAccounts.deployer,
    });

    // 正确测试
    await env.execute(TCF_NFTPrice, {
      functionName: "initPrice",
      args: [getPrices(TCF1Address)],
      account: namedAccounts.deployer,
    });

    // 错误修改NFT价格
    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "changeNFTPrice",
        args: [0n, TCF2Address, 100n],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("TOKEN_UNSUPPORTED " + TCF2Address);

    // 错误修改NFT价格
    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "changeNFTPrice",
        args: [7n, TCF1Address, 100n],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("TOKENID_RANGE");

    //正确测试
    await env.execute(TCF_NFTPrice, {
      functionName: "changeNFTPrice",
      args: [0n, zeroAddress, 100n],
      account: namedAccounts.deployer,
    });
  });

  it("getNFTPrice:对 获取NFT价格函数 进行测试", async function () {
    const TCF1Address = TCF1.address;
    const TCF2Address = TCF2.address;
    let tokenAddresses = [TCF1Address];

    // 初始化支持的token
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [tokenAddresses],
      account: namedAccounts.deployer,
    });

    // 初始化价格
    await env.execute(TCF_NFTPrice, {
      functionName: "initPrice",
      args: [getPrices(TCF1Address)],
      account: namedAccounts.deployer,
    });

    //修改TC价格
    await env.execute(TCF_NFTPrice, {
      functionName: "changeNFTPrice",
      args: [0n, zeroAddress, 100n],
      account: namedAccounts.deployer,
    });

    // 获取tc价格
    let result = await env.read(TCF_NFTPrice, {
      functionName: "getNFTPrice",
      args: [0n, zeroAddress],
    });

    expect(result[0]).to.equal("");
    expect(result[1]).to.equal(100n);
  });

  it("getNFTPrice:对 未初始化价格，获取NFT价格", async function () {
    const TCF1Address = TCF1.address;
    const TCF2Address = TCF2.address;
    let tokenAddresses = [TCF1Address];

    // 获取tc价格
    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "getNFTPrice",
        args: [0n, zeroAddress],
      }),
    ).to.deep.equal(["PRICES_NOT_INITIALIZED", 0n]);
  });

  it("获取比例和权限时长", async function () {
    const TCF1Address = TCF1.address;
    const TCF2Address = TCF2.address;
    let tokenAddresses = [TCF1Address];
    // 初始化支持的token
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [tokenAddresses],
      account: namedAccounts.deployer,
    });

    // 初始化价格
    await env.execute(TCF_NFTPrice, {
      functionName: "initPrice",
      args: [getPrices(TCF1Address)],
      account: namedAccounts.deployer,
    });

    // 获取比例和权限时长
    let result = await env.read(TCF_NFTPrice, {
      functionName: "NFTS",
      args: [0n],
    });
    expect(result[0]).to.equal(40);
    expect(result[1]).to.equal(15552000);
  });

  it("在没有初始化token地址时，获取支持的token数量和地址", async function () {
    let supportedTokenAmount = await env.read(TCF_NFTPrice, {
      functionName: "supportedTokenAmount",
    });
    expect(supportedTokenAmount).to.equal(1);

    let tokenAddress = await env.read(TCF_NFTPrice, {
      functionName: "tokenAddress_array",
      args: [0n],
    });
    expect(tokenAddress).to.equal(ONEAddress);
  });

  // 没有初始化地址之前，对初始化价格进行测试
  it("在没有初始化token地址时，初始化与支持token数目不同的价格列表，期望失败", async function () {
    const TCF1Address = TCF1.address;
    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "initPrice",
        args: [getPrices(TCF1Address)],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("PRICES_LEN");
  });

  // 在没有初始化地址之前，只初始化TC价格，期望成功
  it("在没有初始化token地址时，只初始化TC价格，期望成功", async function () {
    await env.execute(TCF_NFTPrice, {
      functionName: "initPrice",
      args: [getTCPrices()],
      account: namedAccounts.deployer,
    });

    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "getNFTPrice",
        args: [0n, zeroAddress],
      }),
    ).to.deep.equal(["", 1n]);

    // 获取比例和权限时长
    let result = await env.read(TCF_NFTPrice, {
      functionName: "NFTS",
      args: [0n],
    });
    expect(result[0]).to.equal(40);
    expect(result[1]).to.equal(15552000);

    // 获取支持的token数量和地址
    let supportedTokenAmount = await env.read(TCF_NFTPrice, {
      functionName: "supportedTokenAmount",
    });
    expect(supportedTokenAmount).to.equal(1);
    let tokenAddress = await env.read(TCF_NFTPrice, {
      functionName: "tokenAddress_array",
      args: [0n],
    });
    expect(tokenAddress).to.equal(ONEAddress);
  });

  // 检查在没有初始化地址和价格之前调用 所有函数的情况
  describe("在没有初始化地址和价格之前，调用所有函数进行测试", function () {
    // 检查read函数
    describe("检查read函数", function () {
      it("supportedTokenAmount", async function () {
        let supportedTokenAmount = await env.read(TCF_NFTPrice, {
          functionName: "supportedTokenAmount",
        });
        expect(supportedTokenAmount).to.equal(1);
      });

      it("tokenAddress_array", async function () {
        let tokenAddress = await env.read(TCF_NFTPrice, {
          functionName: "tokenAddress_array",
          args: [0n],
        });
        expect(tokenAddress).to.equal(ONEAddress);
      });

      it("getNFTPrice", async function () {
        expect(
          await env.read(TCF_NFTPrice, {
            functionName: "getNFTPrice",
            args: [0n, zeroAddress],
          }),
        ).to.deep.equal(["PRICES_NOT_INITIALIZED", 0n]);
      });

      it("NFTS", async function () {
        let result = await env.read(TCF_NFTPrice, {
          functionName: "NFTS",
          args: [0n],
        });
        expect(result[0]).to.equal(0);
        expect(result[1]).to.equal(0);
      });

      // supportTokenType
      it("supportTokenType", async function () {
        let supportTokenType = await env.read(TCF_NFTPrice, {
          functionName: "isSupported",
          args: [zeroAddress],
        });
        expect(supportTokenType).to.equal(1n);
      });
    });

    // 检查write函数
    describe("检查write函数", function () {
      // changeNFTPrice
      it("changeNFTPrice", async function () {
        await expect(
          env.execute(TCF_NFTPrice, {
            functionName: "changeNFTPrice",
            args: [0n, zeroAddress, 100n],
            account: namedAccounts.deployer,
          }),
        ).to.be.revertedWith("PRICES_NOT_INITIALIZED");
      });

      // deleteSupportedToken
      it("deleteSupportedToken", async function () {
        const TCF1Address = TCF1.address;
        const TCF2Address = TCF2.address;
        await expect(
          env.execute(TCF_NFTPrice, {
            functionName: "deleteSupportedToken",
            args: [zeroAddress],
            account: namedAccounts.deployer,
          }),
        ).to.be.revertedWith("NATURE_TOKEN_DEL");

        await expect(
          env.execute(TCF_NFTPrice, {
            functionName: "deleteSupportedToken",
            args: [TCF1Address],
            account: namedAccounts.deployer,
          }),
        ).to.be.revertedWith("TOKEN_UNSUPPORTED" + " " + TCF1Address);
      });
    });
  });
});
