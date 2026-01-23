import { deployScript, artifacts } from "../rocketh/deploy.js";

export default deployScript(
    async ({ deploy, namedAccounts }) => {
        const { deployer } = namedAccounts;

        await deploy("testUtils", {
            account: deployer,
            artifact: artifacts.testUtils,
            args: [],
        });
    },
    // finally you can pass tags and dependencies
    { tags: ["testUtils"] }
);

// npx hardhat node
// npx hardhat compile
// npx hardhat deploy --tags testUtils --network localhost
// npx hardhat deploy --tags testUtils --network sepolia