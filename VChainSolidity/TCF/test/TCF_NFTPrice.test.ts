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
import { hexToNumber } from "./utils/stringToHex.ts";
import { parseAbiItem } from "viem";
const { provider, networkHelpers } = await network.connect();
const { deployAll } = setupFixtures(provider);
let { env, TCF1, TCF2, namedAccounts, TCF_NFTPrice, test_TCF_ERC1155MintTime } =
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
    ({
      env,
      TCF1,
      TCF2,
      namedAccounts,
      TCF_NFTPrice,
      test_TCF_ERC1155MintTime,
    } = await networkHelpers.loadFixture(deployAll));
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
  });

  // it("checkTokenAddressesParams_external:对 初始化合约地址的参数检查函数 进行测试 ", async function () {
  //   const TCF1Address = TCF1.address;
  //   const TCF2Address = TCF2.address;
  //   const tokenAddresses1 = [TCF1Address, zeroAddress];
  //   let result = await env.read(TCF_NFTPrice, {
  //     functionName: "checkTokenAddressesCode",
  //     args: [tokenAddresses1],
  //   });

  //   expect(result).to.equal("NOT_DCF_USDT " + zeroAddress);

  //   // 检查传入两个的DCF地址
  //   let tokenAddresses = [TCF1Address, TCF2Address];
  //   result = await env.read(TCF_NFTPrice, {
  //     functionName: "checkTokenAddressesCode",
  //     args: [tokenAddresses],
  //   });
  //   expect(result).to.equal("DUP_DCF");

  //   // 检查是否为合约地址
  //   const EOAAddress =
  //     "0xdd2fd4581271e230360230f9337d5c0430bf44c0" as `0x${string}`;
  //   tokenAddresses = [TCF1Address, EOAAddress];
  //   result = await env.read(TCF_NFTPrice, {
  //     functionName: "checkTokenAddressesCode",
  //     args: [tokenAddresses],
  //   });
  //   expect(result).to.equal("NOT_DCF_USDT " + EOAAddress);

  //   // 检查其是否为TCF或USDT
  //   result = await env.read(TCF_NFTPrice, {
  //     functionName: "checkTokenAddressesCode",
  //     args: [[TCF_NFTPrice.address]],
  //   });
  //   expect(result).to.equal("NOT_DCF_USDT " + TCF_NFTPrice.address);

  //   // 测试成功
  //   result = await env.read(TCF_NFTPrice, {
  //     functionName: "checkTokenAddressesCode",
  //     args: [[TCF1Address]],
  //   });
  //   expect(result).to.equal("");
  // });

  // it("delSupportedToken:对 删除支持的token 进行测试", async function () {
  //   const TCF1Address = TCF1.address;
  //   const TCF2Address = TCF2.address;
  //   let tokenAddresses = [TCF1Address];

  //   // 初始化
  //   tokenAddresses = [TCF1Address];
  //   await env.execute(TCF_NFTPrice, {
  //     functionName: "addSupportedToken",
  //     args: [tokenAddresses],
  //     account: namedAccounts.deployer,
  //   });

  //   expect(
  //     await env.read(TCF_NFTPrice, {
  //       functionName: "isSupported",
  //       args: [TCF1Address],
  //     }),
  //   ).to.equal(1);

  //   expect(
  //     await env.read(TCF_NFTPrice, {
  //       functionName: "supportedTokenAmount",
  //       args: [],
  //     }),
  //   ).to.equal(2);

  //   expect(
  //     (
  //       await env.read(TCF_NFTPrice, {
  //         functionName: "tokenAddress_array",
  //         args: [1n],
  //       })
  //     ).toLowerCase(),
  //   ).to.equal(TCF1Address);

  //   // 删除空地址
  //   await expect(
  //     env.execute(TCF_NFTPrice, {
  //       functionName: "deleteSupportedToken",
  //       args: [zeroAddress],
  //       account: namedAccounts.deployer,
  //     }),
  //   ).to.be.revertedWith("NATURE_TOKEN_DEL");

  //   // TCF2Address不在初始化列表中
  //   try {
  //     await env.execute(TCF_NFTPrice, {
  //       functionName: "deleteSupportedToken",
  //       args: [TCF2Address],
  //       account: namedAccounts.deployer,
  //     });
  //   } catch (err: any) {
  //     expect(err.message ?? err.shortMessage).to.equal(
  //       revertMessage + "'" + "TOKEN_UNSUPPORTED " + TCF2Address + "'",
  //     );
  //   }

  //   // 正确测试

  //   await env.execute(TCF_NFTPrice, {
  //     functionName: "deleteSupportedToken",
  //     args: [TCF1Address],
  //     account: namedAccounts.deployer,
  //   });

  //   expect(
  //     await env.read(TCF_NFTPrice, {
  //       functionName: "isSupported",
  //       args: [TCF1Address],
  //     }),
  //   ).to.equal(0n);
  // });

  it("addSupportedToken:对 增加支持的token 进行测试", async function () {
    const TCF1Address = TCF1.address;
    const TCF2Address = TCF2.address;

    // 初始化
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
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
  });

  it("addSupportedToken: 非 owner 调用失败", async function () {
    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "addSupportedToken",
        args: [TCF1.address],
        account: namedAccounts.admin1,
      }),
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("addSupportedToken: 拒绝非 DCF 地址", async function () {
    const eoa = namedAccounts.admin1;
    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "addSupportedToken",
        args: [eoa],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("NOT_DCF " + eoa.toLowerCase());
  });

  it("addSupportedToken: 不允许重复添加同一地址", async function () {
    const TCF1Address = TCF1.address;
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "addSupportedToken",
        args: [TCF1Address],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("TOKEN_INITIALIZED");
  });

  it("addSupportedToken: 初始化后禁止再次添加新地址", async function () {
    const TCF1Address = TCF1.address;
    const TCF2Address = TCF2.address;

    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "addSupportedToken",
        args: [TCF2Address],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("TOKEN_INITIALIZED");
  });

  // it("addSupportedToken: 不允许一次性传入两个DCF地址", async function () {
  //   const TCF1Address = TCF1.address;
  //   const TCF2Address = TCF2.address;

  //   await expect(
  //     env.execute(TCF_NFTPrice, {
  //       functionName: "addSupportedToken",
  //       args: [TCF1Address],
  //       account: namedAccounts.deployer,
  //     }),
  //   ).to.be.revertedWith("DUP_DCF");
  // });

  it("checkInitPricesParams:对 检查价格参数函数 进行测试", async function () {
    const TCF1Address = TCF1.address;
    const TCF2Address = TCF2.address;
    // 初始化
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
      args: [TCF1Address],
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

  it("checkInitPricesParams: 缺少原生代币价格", async function () {
    const TCF1Address = TCF1.address;

    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    const pricesNoTC = Array.from({ length: 6 }, (_, i) => [
      { tokenAddress: TCF1Address, amount: BigInt(i + 1) },
      { tokenAddress: TCF1Address, amount: BigInt(i + 1) },
    ]);

    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "checkInitPricesParams",
        args: [pricesNoTC],
        account: namedAccounts.deployer,
      }),
    ).to.equal("TC_PRICE_MUST_EXIST");
  });

  it("checkInitPricesParams: 缺少 DCF 价格", async function () {
    const TCF1Address = TCF1.address;

    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    const pricesNoDCF = Array.from({ length: 6 }, (_, i) => [
      { tokenAddress: zeroAddress, amount: BigInt(i + 1) },
      { tokenAddress: zeroAddress, amount: BigInt(i + 1) },
    ]);

    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "checkInitPricesParams",
        args: [pricesNoDCF],
        account: namedAccounts.deployer,
      }),
    ).to.equal("DCF_PRICE_MUST_EXIST");
  });

  it("checkInitPricesParams: 地址顺序不影响校验", async function () {
    const TCF1Address = TCF1.address;

    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    const pricesReordered = Array.from({ length: 6 }, (_, i) => [
      { tokenAddress: TCF1Address, amount: BigInt(i + 1) },
      { tokenAddress: zeroAddress, amount: BigInt(i + 1) },
    ]);

    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "checkInitPricesParams",
        args: [pricesReordered],
        account: namedAccounts.deployer,
      }),
    ).to.equal("");
  });

  it("NFTPrice_init:对 初始化NFT价格函数 进行测试", async function () {
    const TCF1Address = TCF1.address;
    const TCF2Address = TCF2.address;

    // 初始化支持的token
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
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

  it("NFTPrice_init: 缺少原生代币价格时失败", async function () {
    const TCF1Address = TCF1.address;

    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    const pricesNoTC = Array.from({ length: 6 }, (_, i) => [
      { tokenAddress: TCF1Address, amount: BigInt(i + 1) },
      { tokenAddress: TCF1Address, amount: BigInt(i + 1) },
    ]);

    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "initPrice",
        args: [pricesNoTC],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("TC_PRICE_MUST_EXIST");
  });

  it("NFTPrice_init: 缺少 DCF 价格时失败", async function () {
    const TCF1Address = TCF1.address;

    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    const pricesNoDCF = Array.from({ length: 6 }, (_, i) => [
      { tokenAddress: zeroAddress, amount: BigInt(i + 1) },
      { tokenAddress: zeroAddress, amount: BigInt(i + 1) },
    ]);

    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "initPrice",
        args: [pricesNoDCF],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("DCF_PRICE_MUST_EXIST");
  });

  it("initPrice: 非 owner 调用失败", async function () {
    const TCF1Address = TCF1.address;
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "initPrice",
        args: [getPrices(TCF1Address)],
        account: namedAccounts.admin1,
      }),
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("changeNFTPrice:对 修改NFT价格函数 进行测试", async function () {
    const TCF1Address = TCF1.address;
    const TCF2Address = TCF2.address;

    // 初始化支持的token
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
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

  it("changeNFTPrice: 非 owner 调用失败", async function () {
    const TCF1Address = TCF1.address;
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    await env.execute(TCF_NFTPrice, {
      functionName: "initPrice",
      args: [getPrices(TCF1Address)],
      account: namedAccounts.deployer,
    });

    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "changeNFTPrice",
        args: [0n, zeroAddress, 1n],
        account: namedAccounts.admin1,
      }),
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("getNFTPrice:对 获取NFT价格函数 进行测试", async function () {
    const TCF1Address = TCF1.address;
    const TCF2Address = TCF2.address;

    // 初始化支持的token
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
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

  it("getNFTPrice: 获取 DCF 价格", async function () {
    const TCF1Address = TCF1.address;

    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    await env.execute(TCF_NFTPrice, {
      functionName: "initPrice",
      args: [getPrices(TCF1Address)],
      account: namedAccounts.deployer,
    });

    const result = await env.read(TCF_NFTPrice, {
      functionName: "getNFTPrice",
      args: [1n, TCF1Address],
    });

    expect(result[0]).to.equal("");
    expect(result[1]).to.equal(2n);
  });

  it("getNFTPrice: 传入 address(0x1) 与 address(0) 结果一致", async function () {
    const TCF1Address = TCF1.address;

    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    await env.execute(TCF_NFTPrice, {
      functionName: "initPrice",
      args: [getPrices(TCF1Address)],
      account: namedAccounts.deployer,
    });

    const byZero = await env.read(TCF_NFTPrice, {
      functionName: "getNFTPrice",
      args: [0n, zeroAddress],
    });

    const byOne = await env.read(TCF_NFTPrice, {
      functionName: "getNFTPrice",
      args: [0n, ONEAddress],
    });

    expect(byOne).to.deep.equal(byZero);
  });

  it("getNFTPrice: tokenID 超出范围", async function () {
    const TCF1Address = TCF1.address;

    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    await env.execute(TCF_NFTPrice, {
      functionName: "initPrice",
      args: [getPrices(TCF1Address)],
      account: namedAccounts.deployer,
    });

    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "getNFTPrice",
        args: [10n, zeroAddress],
      }),
    ).to.deep.equal(["TOKENID_RANGE", 0n]);
  });

  it("getNFTPrice: 查询不支持的token地址", async function () {
    const TCF1Address = TCF1.address;
    const TCF2Address = TCF2.address;

    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    await env.execute(TCF_NFTPrice, {
      functionName: "initPrice",
      args: [getPrices(TCF1Address)],
      account: namedAccounts.deployer,
    });

    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "getNFTPrice",
        args: [0n, TCF2Address],
      }),
    ).to.deep.equal(["TOKEN_UNSUPPORTED " + TCF2Address.toLowerCase(), 0n]);
  });

  it("getNFTPrice: 价格被清零后返回 PRICE_NOT_SET", async function () {
    const TCF1Address = TCF1.address;

    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    await env.execute(TCF_NFTPrice, {
      functionName: "initPrice",
      args: [getPrices(TCF1Address)],
      account: namedAccounts.deployer,
    });

    await env.execute(TCF_NFTPrice, {
      functionName: "changeNFTPrice",
      args: [0n, zeroAddress, 0n],
      account: namedAccounts.deployer,
    });

    expect(
      await env.read(TCF_NFTPrice, {
        functionName: "getNFTPrice",
        args: [0n, zeroAddress],
      }),
    ).to.deep.equal(["PRICE_NOT_SET", 0n]);
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
    // 初始化支持的token
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
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
    ).to.be.revertedWith("TOKEN_NOT_INITIALIZED");
  });

  // 在没有初始化地址之前，只初始化TC价格，期望成功
  // it("在没有初始化token地址时，只初始化TC价格，期望成功", async function () {
  //   await env.execute(TCF_NFTPrice, {
  //     functionName: "initPrice",
  //     args: [getTCPrices()],
  //     account: namedAccounts.deployer,
  //   });

  //   expect(
  //     await env.read(TCF_NFTPrice, {
  //       functionName: "getNFTPrice",
  //       args: [0n, zeroAddress],
  //     }),
  //   ).to.deep.equal(["", 1n]);

  //   // 获取比例和权限时长
  //   let result = await env.read(TCF_NFTPrice, {
  //     functionName: "NFTS",
  //     args: [0n],
  //   });
  //   expect(result[0]).to.equal(40);
  //   expect(result[1]).to.equal(15552000);

  //   // 获取支持的token数量和地址
  //   let supportedTokenAmount = await env.read(TCF_NFTPrice, {
  //     functionName: "supportedTokenAmount",
  //   });
  //   expect(supportedTokenAmount).to.equal(1);
  //   let tokenAddress = await env.read(TCF_NFTPrice, {
  //     functionName: "tokenAddress_array",
  //     args: [0n],
  //   });
  //   expect(tokenAddress).to.equal(ONEAddress);
  // });

  // 检查changeDynamicRatio 函数
  it("检查动态比例设置函数，tokenID 不对", async function () {
    const TCF1Address = TCF1.address;

    // 初始化支持的token
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    await env.execute(TCF_NFTPrice, {
      functionName: "initPrice",
      args: [getPrices(TCF1Address)],
      account: namedAccounts.deployer,
    });

    // 查看当前动态比例
    let dynamicRatio = await env.read(TCF_NFTPrice, {
      functionName: "NFTS",
      args: [0n],
    });
    expect(dynamicRatio[0]).to.equal(40);

    // 设置动态比例
    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "changeDynamicRatio",
        args: [6n, 50],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("TOKENID_RANGE");
  });

  // 检查changeDynamicRatio 函数，没有初始化
  it("检查动态比例设置函数，未初始化时调用", async function () {
    ({ env, TCF1, TCF2, namedAccounts, TCF_NFTPrice } =
      await networkHelpers.loadFixture(deployAll));
    // 设置动态比例
    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "changeDynamicRatio",
        args: [0n, 50],
        account: namedAccounts.deployer,
      }),
    ).to.be.revertedWith("PRICES_NOT_INITIALIZED");
  });

  // z检查changeDynamicRatio 函数，正确修改
  it("检查动态比例设置函数，正确修改", async function () {
    const TCF1Address = TCF1.address;
    const TCF2Address = TCF2.address;

    // 初始化支持的token
    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    await env.execute(TCF_NFTPrice, {
      functionName: "initPrice",
      args: [getPrices(TCF1Address)],
      account: namedAccounts.deployer,
    });

    // 查看当前动态比例
    let dynamicRatio = await env.read(TCF_NFTPrice, {
      functionName: "NFTS",
      args: [0n],
    });
    expect(dynamicRatio[0]).to.equal(40);

    // 设置动态比例
    await env.execute(TCF_NFTPrice, {
      functionName: "changeDynamicRatio",
      args: [0n, 50],
      account: namedAccounts.deployer,
    });

    let result = await env.read(TCF_NFTPrice, {
      functionName: "NFTS",
      args: [0n],
    });
    expect(result[0]).to.equal(50);
  });

  it("changeDynamicRatio: 非 owner 调用失败", async function () {
    const TCF1Address = TCF1.address;

    await env.execute(TCF_NFTPrice, {
      functionName: "addSupportedToken",
      args: [TCF1Address],
      account: namedAccounts.deployer,
    });

    await env.execute(TCF_NFTPrice, {
      functionName: "initPrice",
      args: [getPrices(TCF1Address)],
      account: namedAccounts.deployer,
    });

    await expect(
      env.execute(TCF_NFTPrice, {
        functionName: "changeDynamicRatio",
        args: [0n, 99],
        account: namedAccounts.admin1,
      }),
    ).to.be.revertedWith("Ownable: caller is not the owner");
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
    });
  });

  // 测试事件
  describe("测试事件", function () {
    it("TokenEditionMinted: 通过测试合约铸造时会正确触发事件", async function () {
      const filter = await env.viem.publicClient.createEventFilter({
        address: test_TCF_ERC1155MintTime.address,
        event: parseAbiItem(
          `event TokenEditionMinted(address indexed to,uint256 indexed tokenId,uint256 editionId,uint256 mintedAt)`,
        ),
        strict: true,
      });

      const tcf1Address = TCF1.address;

      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "addSupportedToken",
        args: [tcf1Address],
        account: namedAccounts.deployer,
      });

      await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "initPrice",
        args: [getPrices(tcf1Address)],
        account: namedAccounts.deployer,
      });

      const mintResult = await env.execute(test_TCF_ERC1155MintTime, {
        functionName: "testMint",
        args: [namedAccounts.deployer, 0n, 3n, "0x" as `0x${string}`],
        account: namedAccounts.deployer,
      });

      const block = await env.viem.publicClient.getBlock({
        blockNumber: BigInt(hexToNumber(mintResult.blockNumber)),
      });
      const mintedAt = BigInt(block.timestamp);

      const logs = await env.viem.publicClient.getFilterLogs({ filter });
      expect(logs.length).to.equal(3);

      logs.forEach((log, index) => {
        expect(log.args.tokenId).to.equal(0n);
        expect(log.args.editionId).to.equal(BigInt(index));
        expect(log.args.to.toLowerCase()).to.equal(namedAccounts.deployer);
        expect(log.args.mintedAt).to.equal(mintedAt);
      });
    });
  });
});
