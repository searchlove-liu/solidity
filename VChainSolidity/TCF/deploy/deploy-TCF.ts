import { deployScript, artifacts } from "../rocketh/deploy.js";

export default deployScript(
    async ({ deploy, namedAccounts }) => {
        const { deployer } = namedAccounts;

        await deploy("TCF", {
            account: deployer,
            artifact: artifacts.TCF,
            args: [],
        });
    },
    // finally you can pass tags and dependencies
    { tags: ["tcf"] }
);

// npx hardhat node
// npx hardhat compile
// npx hardhat deploy --tags tcf --network localhost
// npx hardhat deploy --tags tcf --network sepolia