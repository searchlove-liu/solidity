import { deployScript, artifacts } from "../rocketh/deploy.js";

export default deployScript(
    async ({ deploy, namedAccounts }) => {
        const { deployer } = namedAccounts;

        await deploy("SimpleTokenReceiver", {
            account: deployer,
            artifact: artifacts.SimpleTokenReceiver,
            args: [],
        });
    },
    // finally you can pass tags and dependencies
    { tags: ["SimpleTokenReceiver"] }
);

// npx hardhat node
// npx hardhat compile
// npx hardhat deploy --tags SimpleTokenReceiver --network localhost
// npx hardhat deploy --tags SimpleTokenReceiver --network sepolia