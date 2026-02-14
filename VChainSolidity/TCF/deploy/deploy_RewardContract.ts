import { deployScript, artifacts } from "../rocketh/deploy.js";

export default deployScript(
  async ({ deploy, namedAccounts }) => {
    const { deployer } = namedAccounts;

    await deploy("RewardContract", {
      account: deployer,
      artifact: artifacts.RewardContract,
      args: [],
    });
  },
  // finally you can pass tags and dependencies
  { tags: ["RewardContract"] },
);

// npx hardhat node
// npx hardhat compile
// npx hardhat deploy --tags RewardContract --network localhost
// npx hardhat deploy --tags RewardContract --network sepolia
