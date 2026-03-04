import { expect } from "chai";
import { beforeEach, describe, it } from "node:test";
import { network } from "hardhat";
import { getPrices } from "./price.ts";
import { zeroAddress } from "viem";

const { viem, networkHelpers } = await network.connect();

function asString(err) {
  try {
    return String(err);
  } catch {
    return "[Unknown error]";
  }
}

async function expectRevert(promise, messagePart) {
  let thrown = false;
  try {
    await promise;
  } catch (err) {
    thrown = true;
    expect(asString(err)).to.include(messagePart);
  }
  expect(thrown, "Expected transaction/read to revert").to.equal(true);
}

async function deployFixture() {
  const walletClients = await viem.getWalletClients();
  const publicClient = await viem.getPublicClient();
  const tree = await viem.deployContract("test_BinaryTree");
  const vault = await viem.deployContract("vault");
  const vaultCopy = await viem.deployContract("vault_copy");
  const TCF = await viem.deployContract("TCF");

  const vaultAddress = vault.address ?? vault.target;
  const vaultCopyAddress = vaultCopy.address ?? vaultCopy.target;
  const addr3 =
    walletClients[1]?.account?.address ?? walletClients[0].account.address;
  const addr7 =
    walletClients[2]?.account?.address ?? walletClients[0].account.address;

  await TCF.write.initialize([vaultAddress, vaultCopyAddress, addr3, addr7], {
    account: walletClients[0].account,
  });

  const accounts = walletClients.map((w) => w.account.address);
  return { tree, TCF, vault, vaultCopy, walletClients, publicClient, accounts };
}

function normAddress(address) {
  return String(address).toLowerCase();
}

describe("BinaryTree", function () {
  let tree;
  let TCF;
  let walletClients;
  let publicClient;
  let accounts;

  beforeEach(async () => {
    ({ tree, TCF, walletClients, publicClient, accounts } =
      await networkHelpers.loadFixture(deployFixture));

    const tcfAddress = TCF.address ?? TCF.target;
    await tree.write.addSupportedToken([tcfAddress], {
      account: walletClients[0].account,
    });
    // 初始化价格
    await tree.write.initPrice([getPrices(tcfAddress)], {
      account: walletClients[0].account,
    });
  });

  it("initRoot: only owner + only once + event", async function () {
    const [deployer, a] = walletClients;

    await expectRevert(
      tree.write.initRoot([a.account.address], { account: a.account }),
      "Ownable: caller is not the owner",
    );

    // owner can init
    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    expect(await tree.read.rootInitialized()).to.equal(true);
    expect(normAddress(await tree.read.root())).to.equal(
      normAddress(deployer.account.address),
    );

    // second init should revert
    await expectRevert(
      tree.write.initRoot([deployer.account.address], {
        account: deployer.account,
      }),
      "ROOT_ALREADY_INITIALIZED",
    );
  });

  it("initRoot: zero address revert", async function () {
    const [deployer] = walletClients;
    await expectRevert(
      tree.write.initRoot(["0x0000000000000000000000000000000000000000"], {
        account: deployer.account,
      }),
      "ZERO_ADDRESS",
    );
  });

  it("insert: reverts when root not initialized", async function () {
    const [deployer, n1] = walletClients;
    await expectRevert(
      tree.write.insert(
        [deployer.account.address, deployer.account.address, true, false],
        { account: n1.account },
      ),
      "ROOT_NOT_INITIALIZED",
    );
  });

  it("insert: happy path left/right + getters + parent pointers", async function () {
    const [deployer, n1, n2] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // 根节点购买一个NFT
    await tree.write.testMint([deployer.account.address, 0, 1, "0x"], {
      account: deployer.account,
    });

    // insert left child
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      { account: n1.account },
    );

    // insert right child
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, false, false],
      { account: n2.account },
    );

    expect(await tree.read.isExist([n1.account.address])).to.equal(true);
    expect(await tree.read.isExist([n2.account.address])).to.equal(true);

    // children
    const [left, right] = await tree.read.getChildren([
      deployer.account.address,
    ]);
    expect(normAddress(left)).to.equal(normAddress(n1.account.address));
    expect(normAddress(right)).to.equal(normAddress(n2.account.address));

    // parent pointers
    expect(
      normAddress(await tree.read.getParent([n1.account.address])),
    ).to.equal(normAddress(deployer.account.address));
    expect(
      normAddress(await tree.read.getParent([n2.account.address])),
    ).to.equal(normAddress(deployer.account.address));

    // recommender stored
    expect(
      normAddress(await tree.read.getRecommender([n1.account.address])),
    ).to.equal(normAddress(deployer.account.address));
  });

  it("insert: reject zero addresses / missing parent / missing recommender / duplicate node", async function () {
    const [deployer, n1, n2] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // 根节点购买一个NFT
    await tree.write.testMint([deployer.account.address, 0, 1, "0x"], {
      account: deployer.account,
    });

    // zero address
    await expectRevert(
      tree.write.insert(
        [
          "0x0000000000000000000000000000000000000000",
          deployer.account.address,
          true,
          false,
        ],
        { account: deployer.account },
      ),
      "ZERO_ADDRESS",
    );

    // parent does not exist
    await expectRevert(
      tree.write.insert(
        [n2.account.address, deployer.account.address, true, false],
        {
          account: n1.account,
        },
      ),
      "PARENT_NOT_EXIST",
    );

    // recommender does not exist
    await expectRevert(
      tree.write.insert(
        [deployer.account.address, n2.account.address, true, false],
        {
          account: n1.account,
        },
      ),
      "RECOMMENDER_NOT_EXIST",
    );

    // first insert ok
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      { account: n1.account },
    );

    // duplicate
    await expectRevert(
      tree.write.insert(
        [deployer.account.address, deployer.account.address, false, false],
        { account: n1.account },
      ),
      "NODE_EXISTS",
    );
  });

  it("insert: recommender constraint violated (parent not in recommender subtree)", async function () {
    const [deployer, a, x, b] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // 根节点购买一个NFT
    await tree.write.testMint([deployer.account.address, 0, 1, "0x"], {
      account: deployer.account,
    });

    // a under root-left, x under root-right
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      {
        account: a.account,
      },
    );
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, false, false],
      {
        account: x.account,
      },
    );

    // x购买一个NFT
    await tree.write.testMint([x.account.address, 0, 1, "0x"], {
      account: x.account,
    });

    // b claims recommender=a but tries to be inserted under x (not in a-subtree)
    await expectRevert(
      tree.write.insert([x.account.address, a.account.address, true, false], {
        account: b.account,
      }),
      "PARENT_NOT_RECOMMENDER_SUBTREE",
    );
  });

  it("insert: parent with two children cannot accept more nodes", async function () {
    const [deployer, c1, c2, c3] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // 根节点购买一个NFT
    await tree.write.testMint([deployer.account.address, 0, 1, "0x"], {
      account: deployer.account,
    });

    // fill both children of root
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      {
        account: c1.account,
      },
    );
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, false, false],
      {
        account: c2.account,
      },
    );

    // now any further insert under root should revert regardless of side preference
    await expectRevert(
      tree.write.insert(
        [deployer.account.address, deployer.account.address, true, false],
        {
          account: c3.account,
        },
      ),
      "PARENT_HAS_TWO_CHILDREN",
    );

    await expectRevert(
      tree.write.insert(
        [deployer.account.address, deployer.account.address, false, false],
        {
          account: c3.account,
        },
      ),
      "PARENT_HAS_TWO_CHILDREN",
    );
  });

  it("insert: prefers requested branch but falls back to free slot", async function () {
    const [deployer, leftFirst, rightViaFallback, childRight, childFallback] =
      walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // 根节点购买一个NFT
    await tree.write.testMint([deployer.account.address, 0, 1, "0x"], {
      account: deployer.account,
    });

    // left is empty, prefer left
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      {
        account: leftFirst.account,
      },
    );

    // prefer left again but left already taken, should fall back to right
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      {
        account: rightViaFallback.account,
      },
    );

    let [left, right] = await tree.read.getChildren([deployer.account.address]);
    expect(normAddress(left)).to.equal(normAddress(leftFirst.account.address));
    expect(normAddress(right)).to.equal(
      normAddress(rightViaFallback.account.address),
    );

    // leftFirst购买一个NFT
    await tree.write.testMint([leftFirst.account.address, 0, 1, "0x"], {
      account: leftFirst.account,
    });

    // Under leftFirst: first prefer right (empty so occupied)
    await tree.write.insert(
      [leftFirst.account.address, leftFirst.account.address, false, false],
      {
        account: childRight.account,
      },
    );

    // Prefer right again but right already taken, expect fallback to left
    await tree.write.insert(
      [leftFirst.account.address, leftFirst.account.address, false, false],
      {
        account: childFallback.account,
      },
    );

    [left, right] = await tree.read.getChildren([leftFirst.account.address]);
    expect(normAddress(right)).to.equal(
      normAddress(childRight.account.address),
    );
    expect(normAddress(left)).to.equal(
      normAddress(childFallback.account.address),
    );
  });

  // 如果用户的NFT过期了，也不会影响用户作为最优父节点的资格
  it("insert: optimal recommendation does not affect eligibility for future optimal recommendations", async function () {
    const [deployer, leftChild, rightChild, optimalRec] = walletClients;
    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // 根节点购买一个NFT
    const mintResult = await tree.write.testMint(
      [deployer.account.address, 0, 1, "0x"],
      {
        account: deployer.account,
      },
    );

    const mintReceipt = await publicClient.waitForTransactionReceipt({
      hash: mintResult,
    });
    const mintBlock = await publicClient.getBlock({
      blockNumber: mintReceipt.blockNumber,
    });
    const mintTimestamp = mintBlock.timestamp;

    //让rChaild的NFT过期
    const equities = await tree.read.getNFTEquityDetails([0n], {
      account: deployer.account,
    });
    const indate = equities[1];

    const expiredTime = mintTimestamp + BigInt(indate) + 5n;
    await networkHelpers.time.setNextBlockTimestamp(Number(expiredTime));

    // mint一个区块，触发过期逻辑
    await networkHelpers.mine();

    // 查看deployer是否已经过期了
    const equitiesAfter = await tree.read.getNodeWorth([
      deployer.account.address,
    ]);

    expect(equitiesAfter).to.equal(0n);

    // 获取最优父节点
    const [p, isLeft] = await tree.read.getOptimalParent([
      deployer.account.address,
      zeroAddress,
    ]);

    expect(normAddress(p)).to.equal(normAddress(deployer.account.address));
  });

  it("deposit / depositTo: balance accounting + reverts", async function () {
    const [deployer, n1] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // 根节点购买一个NFT
    await tree.write.testMint([deployer.account.address, 0, 1, "0x"], {
      account: deployer.account,
    });

    // non-node cannot deposit
    // await expectRevert(
    //   tree.write.testMint([n1.account.address, 1, 1, "0x"], {
    //     account: n1.account,
    //     value: 1n,
    //   }),
    //   "BinaryTree: node does not exist",
    // );

    // insert n1 then deposit
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      {
        account: n1.account,
      },
    );

    await tree.write.testMint([n1.account.address, 0, 3, "0x"], {
      account: n1.account,
    });
    await tree.write.testMint([n1.account.address, 1, 2, "0x"], {
      account: n1.account,
    });
    // 1*3+2*2=7
    expect(await tree.read.getNodeWorth([n1.account.address])).to.equal(7n);
  });

  it("getters: reverts for non-existent nodes where required", async function () {
    const [deployer, n1] = walletClients;

    await expectRevert(
      tree.read.getNodeWorth([n1.account.address]),
      "NODE_NOT_EXISTS",
    );
    await expectRevert(
      tree.read.getRecommender([n1.account.address]),
      "NODE_NOT_EXISTS",
    );
    await expectRevert(
      tree.read.getChildren([n1.account.address]),
      "NODE_NOT_EXISTS",
    );
    await expectRevert(
      tree.read.getParent([n1.account.address]),
      "NODE_NOT_EXISTS",
    );

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    expect(await tree.read.isExist([n1.account.address])).to.equal(false);
  });

  it("tree sums: totalTreeBalance / subtreeBalance / minChildSubtreeBalance", async function () {
    const [deployer, l, r, ll] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // 根节点购买一个NFT
    await tree.write.testMint([deployer.account.address, 0, 1, "0x"], {
      account: deployer.account,
    });

    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      {
        account: l.account,
      },
    );

    await tree.write.insert(
      [deployer.account.address, deployer.account.address, false, false],
      {
        account: r.account,
      },
    );

    // l购买一个NFT
    await tree.write.testMint([l.account.address, 0, 1, "0x"], {
      account: l.account,
    });

    // add one more level
    await tree.write.insert(
      [l.account.address, l.account.address, true, false],
      {
        account: ll.account,
      },
    );

    // deployer 资产为1
    await tree.write.testMint([deployer.account.address, 0, 1, "0x"], {
      account: deployer.account,
    });
    // l node 资产为10,资产价格以TC价格为准，价格初始化在beforeeach中设置
    // tokenid 0，价格为1，tokenid 1，价格为2，tokenid 2，价格为3，tokenid 3，价格为4，tokenid 4，价格为5
    await tree.write.testMint([l.account.address, 1, 1, "0x"], {
      account: l.account,
    });
    await tree.write.testMint([l.account.address, 2, 1, "0x"], {
      account: l.account,
    });
    await tree.write.testMint([l.account.address, 3, 1, "0x"], {
      account: l.account,
    });
    // r node 资产为2
    await tree.write.testMint([r.account.address, 1, 1, "0x"], {
      account: r.account,
    });
    // ll node 资产为3
    await tree.write.testMint([ll.account.address, 0, 1, "0x"], {
      account: ll.account,
    });
    await tree.write.testMint([ll.account.address, 1, 1, "0x"], {
      account: ll.account,
    });

    // total = 1 + (10+3) + 2 = 16
    expect(await tree.read.totalTreeWorth()).to.equal(17n);

    // subtree l = 10 + 3
    expect(await tree.read.subtreeWorth([l.account.address])).to.equal(13n);

    // // node with missing right child: min(child sums) where one side is 0
    // expect(
    //   await tree.read.minChildSubtreeBalance([l.account.address]),
    // ).to.equal(0n);

    // reverts
    await expectRevert(
      tree.read.subtreeWorth([accounts[9] ?? accounts[0]]),
      "NODE_NOT_EXISTS",
    );
  });

  it("getOptimalParent: reverts when root not initialized", async function () {
    const [deployer] = walletClients;
    await expectRevert(
      tree.read.getOptimalParent([deployer.account.address, zeroAddress]),
      "ROOT_NOT_INITIALIZED",
    );
  });

  it("getOptimalParent: reverts when no eligible parent exists in subtree", async function () {
    const [deployer] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // root exists but has no NFT => not eligible; no other nodes => revert
    await expectRevert(
      tree.read.getOptimalParent([deployer.account.address, zeroAddress]),
      "NO_AVAILABLE_PARENT",
    );
  });

  it("getOptimalParent: prefers smaller-side subtree (tie -> left)", async function () {
    const [deployer, leftChild, rightChild] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // Make root eligible so we can insert children
    await tree.write.testMint([deployer.account.address, 0, 100, "0x"], {
      account: deployer.account,
    });

    // Insert two children under root
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      { account: leftChild.account },
    );
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, false, false],
      { account: rightChild.account },
    );

    // Make both children eligible, but left subtree smaller => should go left
    await tree.write.testMint([leftChild.account.address, 0, 1, "0x"], {
      account: leftChild.account,
    });
    await tree.write.testMint([rightChild.account.address, 0, 5, "0x"], {
      account: rightChild.account,
    });

    const [p, isLeft] = await tree.read.getOptimalParent([
      deployer.account.address,
      zeroAddress,
    ]);
    // root has no empty slot -> descend into smaller subtree (leftChild)
    expect(normAddress(p)).to.equal(normAddress(leftChild.account.address));
    expect(isLeft).to.equal(true);
  });

  it("getOptimalParent: prefers smaller-side subtree (tie -> left)", async function () {
    const [deployer, leftChild, llChild, lrchild] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // Make root eligible so we can insert children
    await tree.write.testMint([deployer.account.address, 0, 100, "0x"], {
      account: deployer.account,
    });

    // Insert two children under root
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      { account: leftChild.account },
    );

    // Make both children eligible, but left subtree smaller => should go left
    await tree.write.testMint([leftChild.account.address, 0, 1, "0x"], {
      account: leftChild.account,
    });

    await tree.write.insert(
      [leftChild.account.address, leftChild.account.address, true, false],
      { account: llChild.account },
    );

    await tree.write.testMint([llChild.account.address, 0, 1, "0x"], {
      account: llChild.account,
    });

    const [p, isLeft] = await tree.read.getOptimalParent(
      [leftChild.account.address, zeroAddress],
      { account: lrchild.account },
    );

    // root has no empty slot -> descend into smaller subtree (leftChild)
    expect(normAddress(p)).to.equal(normAddress(leftChild.account.address));
    expect(isLeft).to.equal(false);
  });

  it("getOptimalParent: 只跳过excludeNode，仍然会查找他的孩子节点 ", async function () {
    const [deployer, leftChild, llChild, rchild] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // Make root eligible so we can insert children
    await tree.write.testMint([deployer.account.address, 0, 100, "0x"], {
      account: deployer.account,
    });

    // Insert left children under root
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      { account: leftChild.account },
    );

    // Insert right child under root
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, false, false],
      { account: rchild.account },
    );

    // Make both children eligible, but left subtree smaller => should go left
    await tree.write.testMint([leftChild.account.address, 0, 10, "0x"], {
      account: leftChild.account,
    });

    await tree.write.testMint([rchild.account.address, 0, 100, "0x"], {
      account: rchild.account,
    });

    await tree.write.insert(
      [leftChild.account.address, leftChild.account.address, true, false],
      { account: llChild.account },
    );

    await tree.write.testMint([llChild.account.address, 0, 1, "0x"], {
      account: llChild.account,
    });

    const [p, isLeft] = await tree.read.getOptimalParent(
      [leftChild.account.address, leftChild.account.address],
      { account: rchild.account },
    );

    // root has no empty slot -> descend into smaller subtree (leftChild)
    expect(normAddress(p)).to.equal(normAddress(llChild.account.address));
    expect(isLeft).to.equal(true);
  });

  it("getOptimalParent: 如果一个父节点接受一次最优推荐，将不能作为最优推荐的节点返回", async function () {
    const [deployer, leftChild, llChild, rchild] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // Make root eligible so we can insert children
    await tree.write.testMint([deployer.account.address, 0, 100, "0x"], {
      account: deployer.account,
    });

    // Insert left children under root
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      { account: leftChild.account },
    );

    // Insert right child under root
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, false, false],
      { account: rchild.account },
    );

    // Make both children eligible, but left subtree smaller => should go left
    await tree.write.testMint([leftChild.account.address, 0, 10, "0x"], {
      account: leftChild.account,
    });

    await tree.write.testMint([rchild.account.address, 0, 100, "0x"], {
      account: rchild.account,
    });

    await tree.write.insert(
      [leftChild.account.address, leftChild.account.address, true, true],
      { account: llChild.account },
    );

    await tree.write.testMint([llChild.account.address, 0, 2, "0x"], {
      account: llChild.account,
    });

    const [p, isLeft] = await tree.read.getOptimalParent(
      [leftChild.account.address, zeroAddress],
      { account: rchild.account },
    );

    // root has no empty slot -> descend into smaller subtree (leftChild)
    expect(normAddress(p)).to.equal(normAddress(llChild.account.address));
    expect(isLeft).to.equal(true);
  });

  it("getOptimalParent: 如果一个父节点接受一次最优推荐，那么这个父节点不能再次接受一次最优推荐", async function () {
    const [deployer, leftChild, llChild, lrChild, rchild] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // Make root eligible so we can insert children
    await tree.write.testMint([deployer.account.address, 0, 100, "0x"], {
      account: deployer.account,
    });

    // Insert left children under root
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      { account: leftChild.account },
    );

    // Insert right child under root
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, false, false],
      { account: rchild.account },
    );

    // Make both children eligible, but left subtree smaller => should go left
    await tree.write.testMint([leftChild.account.address, 0, 10, "0x"], {
      account: leftChild.account,
    });

    await tree.write.testMint([rchild.account.address, 0, 100, "0x"], {
      account: rchild.account,
    });

    await tree.write.insert(
      [leftChild.account.address, leftChild.account.address, true, true],
      { account: llChild.account },
    );

    // await expect(
    //   tree.write.insert(
    //     [leftChild.account.address, leftChild.account.address, false, true],
    //     { account: lrChild.account },
    //   ),
    // ).to.be.revertedWith("PARENT_ALREADY_OPTIMAL_RECOMMENDED");
    await expectRevert(
      tree.write.insert(
        [leftChild.account.address, leftChild.account.address, false, true],
        {
          account: lrChild.account,
        },
      ),
      "PARENT_ALREADY_OPTIMAL_RECOMMENDED",
    );
  });

  // 根节点r下有r和l节点，l下有ll，l使用最优推荐，ll没买，r买了。获取最优父节点是r
  it("根节点r下有r和l节点，l下有ll，l使用最优推荐，ll没买，r买了。获取最优父节点是r", async function () {
    const [deployer, leftChild, llChild, rightChild] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // Make root eligible so we can insert children
    await tree.write.testMint([deployer.account.address, 0, 100, "0x"], {
      account: deployer.account,
    });

    // Insert left children under root
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      { account: leftChild.account },
    );

    // Insert right child under root
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, false, false],
      { account: rightChild.account },
    );

    // Make both children eligible, but left subtree smaller => should go left
    await tree.write.testMint([leftChild.account.address, 0, 10, "0x"], {
      account: leftChild.account,
    });

    await tree.write.testMint([rightChild.account.address, 0, 100, "0x"], {
      account: rightChild.account,
    });

    await tree.write.insert(
      [leftChild.account.address, leftChild.account.address, true, true],
      { account: llChild.account },
    );

    // 获取最优推荐是rChild
    const [p, isLeft] = await tree.read.getOptimalParent(
      [deployer.account.address, zeroAddress],
      { account: rightChild.account },
    );

    expect(normAddress(p)).to.equal(normAddress(rightChild.account.address));
    expect(isLeft).to.equal(true);
  });

  // 测试某个节点的NFT 过期之后
  it("getOptimalParent: parent node becomes ineligible after accepting optimal recommendation", async function () {
    const [deployer, leftChild, llChild, lrChild, rchild] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // Make root eligible so we can insert children
    await tree.write.testMint([deployer.account.address, 0, 100, "0x"], {
      account: deployer.account,
    });

    // Insert left children under root
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      { account: leftChild.account },
    );

    // Insert right child under root
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, false, false],
      { account: rchild.account },
    );

    // Make both children eligible, but left subtree smaller => should go left
    await tree.write.testMint([leftChild.account.address, 2, 10, "0x"], {
      account: leftChild.account,
    });

    const mintResult = await tree.write.testMint(
      [rchild.account.address, 0, 100, "0x"],
      {
        account: rchild.account,
      },
    );

    const mintReceipt = await publicClient.waitForTransactionReceipt({
      hash: mintResult,
    });
    const mintBlock = await publicClient.getBlock({
      blockNumber: mintReceipt.blockNumber,
    });
    const mintTimestamp = mintBlock.timestamp;

    const [p, isLeft] = await tree.read.getOptimalParent(
      [leftChild.account.address, zeroAddress],
      { account: rchild.account },
    );

    expect(normAddress(p)).to.equal(normAddress(leftChild.account.address));
    expect(isLeft).to.equal(true);

    //让rChaild的NFT过期
    const equities = await tree.read.getNFTEquityDetails([0n], {
      account: deployer.account,
    });
    const indate = equities[1];

    const expiredTime = mintTimestamp + BigInt(indate) + 5n;
    await networkHelpers.time.setNextBlockTimestamp(Number(expiredTime));

    // mint一个区块，触发过期逻辑
    await tree.write.testMint([deployer.account.address, 0, 1, "0x"], {
      account: deployer.account,
    });

    // 查看rchild的NFT已经过期了
    const equitiesAfter = await tree.read.getNodeWorth([
      rchild.account.address,
    ]);
    expect(equitiesAfter).to.equal(0n);

    // 查看lchild的NFT仍然有效
    const equitiesLeftChild = await tree.read.getNodeWorth([
      leftChild.account.address,
    ]);
    expect(equitiesLeftChild).to.equal(30n);

    const [p2, isLeft2] = await tree.read.getOptimalParent(
      [deployer.account.address, zeroAddress],
      { account: rchild.account },
    );
    // 当前的节点应该是rchild了，因为rChild的NFT过期了，余额变为0
    expect(normAddress(p2)).to.equal(normAddress(rchild.account.address));
    expect(isLeft2).to.equal(true);
  });

  it("getOptimalParent: does not return a full node; continues searching", async function () {
    const [deployer, leftChild, rightChild, l1, l2] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    await tree.write.testMint([deployer.account.address, 0, 1, "0x"], {
      account: deployer.account,
    });

    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      { account: leftChild.account },
    );
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, false, false],
      { account: rightChild.account },
    );

    // leftChild subtree is smaller, but we will fill both of its child slots => cannot be returned
    await tree.write.testMint([leftChild.account.address, 0, 1, "0x"], {
      account: leftChild.account,
    });
    await tree.write.testMint([rightChild.account.address, 0, 2, "0x"], {
      account: rightChild.account,
    });

    // leftChild must have NFT to be a parent for inserts
    await tree.write.insert(
      [leftChild.account.address, leftChild.account.address, true, false],
      { account: l1.account },
    );
    await tree.write.insert(
      [leftChild.account.address, leftChild.account.address, false, false],
      { account: l2.account },
    );

    // Make l1 eligible so the search can continue below leftChild
    await tree.write.testMint([l1.account.address, 0, 1, "0x"], {
      account: l1.account,
    });

    const [p, isLeft] = await tree.read.getOptimalParent([
      deployer.account.address,
      zeroAddress,
    ]);
    // leftChild is full, so should continue below it (tie -> left => l1)
    expect(normAddress(p)).to.equal(normAddress(l1.account.address));
    expect(isLeft).to.equal(true);
  });

  it("getOptimalParent: branch selection returns right when left is occupied", async function () {
    const [deployer, leftChild, rightChild, leftGrandChild] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // Make root eligible so we can insert children
    await tree.write.testMint([deployer.account.address, 0, 1, "0x"], {
      account: deployer.account,
    });

    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      { account: leftChild.account },
    );

    // Fill root so it must descend into left/right
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, false, false],
      { account: rightChild.account },
    );

    // Make left subtree smaller so it descends into leftChild
    await tree.write.testMint([leftChild.account.address, 0, 1, "0x"], {
      account: leftChild.account,
    });
    await tree.write.testMint([rightChild.account.address, 0, 10, "0x"], {
      account: rightChild.account,
    });

    // Occupy leftChild.left but keep right empty
    await tree.write.insert(
      [leftChild.account.address, leftChild.account.address, true, false],
      { account: leftGrandChild.account },
    );

    const [p, isLeft] = await tree.read.getOptimalParent([
      deployer.account.address,
      zeroAddress,
    ]);
    expect(normAddress(p)).to.equal(normAddress(leftChild.account.address));
    // left slot is taken, should recommend right branch
    expect(isLeft).to.equal(false);
  });

  it("getOptimalParent(address,address): reverts when root not initialized", async function () {
    const [deployer] = walletClients;
    await expectRevert(
      tree.read.getOptimalParent([
        deployer.account.address,
        "0x0000000000000000000000000000000000000000",
      ]),
      "ROOT_NOT_INITIALIZED",
    );
  });

  it("getOptimalParent(address,address): reverts when recommender not exist", async function () {
    const [deployer, other] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    await expectRevert(
      tree.read.getOptimalParent([
        other.account.address,
        "0x0000000000000000000000000000000000000000",
      ]),
      "RECOMMENDER_NOT_EXIST",
    );
  });

  it("getOptimalParent(address,address): excludeNode not in subtree does not affect selection", async function () {
    const [deployer, leftChild, rightChild] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    await tree.write.testMint([deployer.account.address, 0, 100, "0x"], {
      account: deployer.account,
    });

    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      { account: leftChild.account },
    );
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, false, false],
      { account: rightChild.account },
    );

    // left has smaller worth => should be selected
    await tree.write.testMint([leftChild.account.address, 0, 1, "0x"], {
      account: leftChild.account,
    });
    await tree.write.testMint([rightChild.account.address, 0, 5, "0x"], {
      account: rightChild.account,
    });

    const [p, isLeft] = await tree.read.getOptimalParent([
      deployer.account.address,
      accounts[9] ?? "0x0000000000000000000000000000000000000001",
    ]);
    expect(normAddress(p)).to.equal(normAddress(leftChild.account.address));
    expect(isLeft).to.equal(true);
  });

  it("getOptimalParent(address,address): excluding the preferred-path node reroutes to the other side", async function () {
    const [deployer, leftChild, rightChild] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    await tree.write.testMint([deployer.account.address, 0, 100, "0x"], {
      account: deployer.account,
    });

    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      { account: leftChild.account },
    );
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, false, false],
      { account: rightChild.account },
    );

    // left subtree smaller, so normally it would pick leftChild
    await tree.write.testMint([leftChild.account.address, 0, 1, "0x"], {
      account: leftChild.account,
    });
    await tree.write.testMint([rightChild.account.address, 0, 2, "0x"], {
      account: rightChild.account,
    });

    const [p, isLeft] = await tree.read.getOptimalParent([
      deployer.account.address,
      leftChild.account.address,
    ]);
    // leftChild subtree excluded => should try right subtree
    expect(normAddress(p)).to.equal(normAddress(rightChild.account.address));
    expect(isLeft).to.equal(true);
  });

  it("getOptimalParent: backtracks when preferred-path leaf has no NFT", async function () {
    const [deployer, leftChild, rightChild] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // root must have NFT to be eligible as parent, and to allow inserts
    await tree.write.testMint([deployer.account.address, 0, 1, "0x"], {
      account: deployer.account,
    });

    // Fill root so algorithm must descend
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      { account: leftChild.account },
    );
    await tree.write.insert(
      [deployer.account.address, deployer.account.address, false, false],
      { account: rightChild.account },
    );

    // Make rightChild eligible; leftChild has NO NFT (worth 0)
    await tree.write.testMint([rightChild.account.address, 0, 1, "0x"], {
      account: rightChild.account,
    });

    // left subtree (0) < right subtree (1) => prefer left path, but leftChild has no NFT so it can't be parent
    // should backtrack and then choose rightChild
    const [p, isLeft] = await tree.read.getOptimalParent([
      deployer.account.address,
      zeroAddress,
    ]);
    expect(normAddress(p)).to.equal(normAddress(rightChild.account.address));
    expect(isLeft).to.equal(true);
  });

  it("getOptimalParent(address,address): reverts when excludeNode removes the only eligible parent", async function () {
    const [deployer] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // Only root is eligible
    await tree.write.testMint([deployer.account.address, 0, 1, "0x"], {
      account: deployer.account,
    });

    await expectRevert(
      tree.read.getOptimalParent([
        deployer.account.address,
        deployer.account.address,
      ]),
      "NO_AVAILABLE_PARENT",
    );
  });

  it("getOptimalParent(address,address): branch selection returns right when left is occupied", async function () {
    const [deployer, leftChild, filler] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    await tree.write.testMint([deployer.account.address, 0, 1, "0x"], {
      account: deployer.account,
    });

    await tree.write.insert(
      [deployer.account.address, deployer.account.address, true, false],
      { account: leftChild.account },
    );

    await tree.write.testMint([leftChild.account.address, 0, 1, "0x"], {
      account: leftChild.account,
    });

    const [p, isLeft] = await tree.read.getOptimalParent([
      deployer.account.address,
      "0x0000000000000000000000000000000000000000",
    ]);
    expect(normAddress(p)).to.equal(normAddress(deployer.account.address));
    expect(isLeft).to.equal(false);
  });
});
