import { deployScript, artifacts } from "../rocketh/deploy.js";

export default deployScript(
    async ({ deploy, namedAccounts }) => {
        const { deployer } = namedAccounts;

        await deploy("TCF_ERC1155", {
            account: deployer,
            artifact: artifacts.TCF_ERC1155,
            args: [],
        });
    },
    // finally you can pass tags and dependencies
    { tags: ["tcfErc1155"] }
);

// npx hardhat node
// npx hardhat compile
// npx hardhat deploy --tags tcfErc1155 --network localhost
// npx hardhat deploy --tags tcfErc1155 --network sepolia