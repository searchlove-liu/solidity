import { deployScript, artifacts } from "../rocketh/deploy.js";

export default deployScript(
  async ({ deploy, namedAccounts }) => {
    const { deployer } = namedAccounts;

    await deploy("vault_copy", {
      account: deployer,
      artifact: artifacts.vault_copy,
      args: [],
    });
  },
  // finally you can pass tags and dependencies
  { tags: ["vault_copy"] },
);

// npx hardhat node
// npx hardhat compile
// npx hardhat deploy --tags vault_copy --network localhost
// npx hardhat deploy --tags vault_copy --network sepolia
