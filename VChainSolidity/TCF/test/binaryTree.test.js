import { expect } from "chai";
import { beforeEach, describe, it } from "node:test";
import { network } from "hardhat";
import { getTCPrices } from "./price.ts";

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

  const accounts = walletClients.map((w) => w.account.address);
  return { tree, walletClients, publicClient, accounts };
}

function normAddress(address) {
  return String(address).toLowerCase();
}

describe("BinaryTree", function () {
  let tree;
  let walletClients;
  let accounts;

  beforeEach(async () => {
    ({ tree, walletClients, accounts } =
      await networkHelpers.loadFixture(deployFixture));
    // 初始化价格
    await tree.write.initPrice([getTCPrices()], {
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
      "BinaryTree: root already initialized",
    );
  });

  it("initRoot: zero address revert", async function () {
    const [deployer] = walletClients;
    await expectRevert(
      tree.write.initRoot(["0x0000000000000000000000000000000000000000"], {
        account: deployer.account,
      }),
      "BinaryTree: zero address",
    );
  });

  it("insert: reverts when root not initialized", async function () {
    const [deployer, n1] = walletClients;
    await expectRevert(
      tree.write.insert(
        [
          n1.account.address,
          deployer.account.address,
          deployer.account.address,
          true,
        ],
        { account: deployer.account },
      ),
      "BinaryTree: root not initialized",
    );
  });

  it("insert: happy path left/right + getters + parent pointers", async function () {
    const [deployer, n1, n2] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // insert left child
    await tree.write.insert(
      [
        n1.account.address,
        deployer.account.address,
        deployer.account.address,
        true,
      ],
      { account: deployer.account },
    );

    // insert right child
    await tree.write.insert(
      [
        n2.account.address,
        deployer.account.address,
        deployer.account.address,
        false,
      ],
      { account: deployer.account },
    );

    expect(await tree.read.exists([n1.account.address])).to.equal(true);
    expect(await tree.read.exists([n2.account.address])).to.equal(true);

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

    // zero address
    await expectRevert(
      tree.write.insert(
        [
          "0x0000000000000000000000000000000000000000",
          deployer.account.address,
          deployer.account.address,
          true,
        ],
        { account: deployer.account },
      ),
      "BinaryTree: zero address",
    );

    // parent does not exist
    await expectRevert(
      tree.write.insert(
        [
          n1.account.address,
          n2.account.address,
          deployer.account.address,
          true,
        ],
        {
          account: deployer.account,
        },
      ),
      "BinaryTree: parent does not exist",
    );

    // recommender does not exist
    await expectRevert(
      tree.write.insert(
        [
          n1.account.address,
          deployer.account.address,
          n2.account.address,
          true,
        ],
        {
          account: deployer.account,
        },
      ),
      "BinaryTree: recommender does not exist",
    );

    // first insert ok
    await tree.write.insert(
      [
        n1.account.address,
        deployer.account.address,
        deployer.account.address,
        true,
      ],
      { account: deployer.account },
    );

    // duplicate
    await expectRevert(
      tree.write.insert(
        [
          n1.account.address,
          deployer.account.address,
          deployer.account.address,
          false,
        ],
        { account: deployer.account },
      ),
      "BinaryTree: node already exists",
    );
  });

  it("insert: recommender constraint violated (parent not in recommender subtree)", async function () {
    const [deployer, a, x, b] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // a under root-left, x under root-right
    await tree.write.insert(
      [
        a.account.address,
        deployer.account.address,
        deployer.account.address,
        true,
      ],
      {
        account: deployer.account,
      },
    );
    await tree.write.insert(
      [
        x.account.address,
        deployer.account.address,
        deployer.account.address,
        false,
      ],
      {
        account: deployer.account,
      },
    );

    // b claims recommender=a but tries to be inserted under x (not in a-subtree)
    await expectRevert(
      tree.write.insert(
        [b.account.address, x.account.address, a.account.address, true],
        {
          account: deployer.account,
        },
      ),
      "BinaryTree: parent not in recommender subtree",
    );
  });

  it("insert: if parent already has two children => revert", async function () {
    const [deployer, c1, c2, c3] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // fill both children of root
    await tree.write.insert(
      [
        c1.account.address,
        deployer.account.address,
        deployer.account.address,
        true,
      ],
      {
        account: deployer.account,
      },
    );
    await tree.write.insert(
      [
        c2.account.address,
        deployer.account.address,
        deployer.account.address,
        false,
      ],
      {
        account: deployer.account,
      },
    );

    // now any further insert under root should revert (even before side-check)
    await expectRevert(
      tree.write.insert(
        [
          c3.account.address,
          deployer.account.address,
          deployer.account.address,
          true,
        ],
        {
          account: deployer.account,
        },
      ),
      "BinaryTree: parent already has two children",
    );
  });

  it("deposit / depositTo: balance accounting + reverts", async function () {
    const [deployer, n1] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
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
      [
        n1.account.address,
        deployer.account.address,
        deployer.account.address,
        true,
      ],
      {
        account: deployer.account,
      },
    );

    await tree.write.testMint([n1.account.address, 0, 3, "0x"], {
      account: n1.account,
    });
    await tree.write.testMint([n1.account.address, 1, 2, "0x"], {
      account: n1.account,
    });
    // 1*3+2*2=7
    expect(await tree.read.getNodeBalance([n1.account.address])).to.equal(7n);
  });

  it("getters: reverts for non-existent nodes where required", async function () {
    const [deployer, n1] = walletClients;

    await expectRevert(
      tree.read.getNodeBalance([n1.account.address]),
      "BinaryTree: node does not exist",
    );
    await expectRevert(
      tree.read.getRecommender([n1.account.address]),
      "BinaryTree: node does not exist",
    );
    await expectRevert(
      tree.read.getChildren([n1.account.address]),
      "BinaryTree: node does not exist",
    );
    await expectRevert(
      tree.read.getParent([n1.account.address]),
      "BinaryTree: node does not exist",
    );

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });
    expect(await tree.read.exists([n1.account.address])).to.equal(false);
  });

  it("tree sums: totalTreeBalance / subtreeBalance / minChildSubtreeBalance", async function () {
    const [deployer, l, r, ll] = walletClients;

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    await tree.write.insert(
      [
        l.account.address,
        deployer.account.address,
        deployer.account.address,
        true,
      ],
      {
        account: deployer.account,
      },
    );

    await tree.write.insert(
      [
        r.account.address,
        deployer.account.address,
        deployer.account.address,
        false,
      ],
      {
        account: deployer.account,
      },
    );

    // add one more level
    await tree.write.insert(
      [ll.account.address, l.account.address, l.account.address, true],
      {
        account: deployer.account,
      },
    );

    // deployer 资产为1
    await tree.write.testMint([deployer.account.address, 0, 1, "0x"], {
      account: deployer.account,
    });
    // l node 资产为10,资产价格以TC价格为准，价格初始化在beforeeach中设置
    // tokenid 0，价格为1，tokenid 1，价格为2，tokenid 2，价格为3，tokenid 3，价格为4，tokenid 4，价格为5
    await tree.write.testMint([l.account.address, 0, 1, "0x"], {
      account: l.account,
    });
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
    expect(await tree.read.totalTreeBalance()).to.equal(16n);

    // subtree l = 10 + 3
    expect(await tree.read.subtreeBalance([l.account.address])).to.equal(13n);

    // min child subtree under root: min(left=13, right=2) => 2
    expect(
      await tree.read.minChildSubtreeBalance([deployer.account.address]),
    ).to.equal(2n);

    // node with missing right child: min(child sums) where one side is 0
    expect(
      await tree.read.minChildSubtreeBalance([l.account.address]),
    ).to.equal(0n);

    // reverts
    await expectRevert(
      tree.read.subtreeBalance([accounts[9] ?? accounts[0]]),
      "BinaryTree: node does not exist",
    );
  });

  it("getRecommendedParent: returns parent + branch, covers left/right and descent", async function () {
    const [deployer, leftChild, rightChild] = walletClients;

    // root not initialized
    await expectRevert(
      tree.read.getRecommendedParent([deployer.account.address]),
      "BinaryTree: root not initialized",
    );

    await tree.write.initRoot([deployer.account.address], {
      account: deployer.account,
    });

    // with no children: tie => choose left; left is empty => (root, true)
    let [p, isLeft] = await tree.read.getRecommendedParent([
      deployer.account.address,
    ]);
    expect(normAddress(p)).to.equal(normAddress(deployer.account.address));
    expect(isLeft).to.equal(true);

    // add left child only: tie => choose left and descent to leftChild; then stop and recommend leftChild.left
    await tree.write.insert(
      [
        leftChild.account.address,
        deployer.account.address,
        deployer.account.address,
        true,
      ],
      {
        account: deployer.account,
      },
    );

    [p, isLeft] = await tree.read.getRecommendedParent([
      deployer.account.address,
    ]);
    expect(normAddress(p)).to.equal(normAddress(leftChild.account.address));
    expect(isLeft).to.equal(true);

    // add right child as well (root now full), then make leftSum > rightSum so it chooses right at root
    await tree.write.insert(
      [
        rightChild.account.address,
        deployer.account.address,
        deployer.account.address,
        false,
      ],
      {
        account: deployer.account,
      },
    );

    // make left subtree heavier
    // await tree.write.deposit([], { account: leftChild.account, value: 5n });

    // chooseRight at root, descend to rightChild, then stop there (tie => left)
    // [p, isLeft] = await tree.read.getRecommendedParent([deployer.account.address]);
    // expect(normAddress(p)).to.equal(normAddress(rightChild.account.address));
    // expect(isLeft).to.equal(true);
  });
});
