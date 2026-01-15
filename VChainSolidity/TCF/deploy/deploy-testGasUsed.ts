import { deployScript, artifacts } from "../rocketh/deploy.js";

export default deployScript(
    async ({ deploy, namedAccounts }) => {
        const { deployer } = namedAccounts;

        const testGasUsed = await deploy("testGasUsed", {
            account: deployer,
            artifact: artifacts.testGasUsed,
            args: [],
        });

    },
    // finally you can pass tags and dependencies
    { tags: ["testGasUsed"] }
);

// npx hardhat node
// npx hardhat compile
// npx hardhat deploy --tags testGasUsed --network localhost
// npx hardhat deploy --tags testGasUsed --network sepolia