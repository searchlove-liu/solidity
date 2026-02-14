import { deployScript, artifacts } from "../rocketh/deploy.js";

export default deployScript(
  async ({ deploy, namedAccounts }) => {
    const { deployer } = namedAccounts;

    await deploy("Airdrop", {
      account: deployer,
      artifact: artifacts.Airdrop,
      args: [],
    });
  },
  // finally you can pass tags and dependencies
  { tags: ["Airdrop"] },
);

// npx hardhat node
// npx hardhat compile
// npx hardhat deploy --tags Airdrop --network localhost
// npx hardhat deploy --tags Airdrop --network sepolia
