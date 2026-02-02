import { deployScript, artifacts } from "../rocketh/deploy.js";

export default deployScript(
  async ({ deploy, namedAccounts }) => {
    const { deployer } = namedAccounts;

    await deploy("vault", {
      account: deployer,
      artifact: artifacts.vault,
      args: [],
    });
  },
  // finally you can pass tags and dependencies
  { tags: ["vault"] },
);

// npx hardhat node
// npx hardhat compile
// npx hardhat deploy --tags vault --network localhost
// npx hardhat deploy --tags vault --network sepolia
