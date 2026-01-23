import { deployScript, artifacts } from "../rocketh/deploy.js";

export default deployScript(
    async ({ deploy, namedAccounts }) => {
        const { deployer } = namedAccounts;

        await deploy("ERC1363Example", {
            account: deployer,
            artifact: artifacts.ERC1363Example,
            args: [],
        });
    },
    // finally you can pass tags and dependencies
    { tags: ["ERC1363Example"] }
);

// npx hardhat node
// npx hardhat compile
// npx hardhat deploy --tags ERC1363Example --network localhost
// npx hardhat deploy --tags ERC1363Example --network sepolia