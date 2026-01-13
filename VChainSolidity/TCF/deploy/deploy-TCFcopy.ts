import { deployScript, artifacts } from "../rocketh/deploy.js";

export default deployScript(
    async ({ deploy, namedAccounts }) => {
        const { deployer } = namedAccounts;

        await deploy("TCF_copy", {
            account: deployer,
            artifact: artifacts.TCF_copy,
            args: [],
        });
    },
    // finally you can pass tags and dependencies
    { tags: ["tcf-copy"] }
);

// npx hardhat node
// npx hardhat compile
// npx hardhat deploy --tags tcf --network localhost
// npx hardhat deploy --tags tcf --network sepolia