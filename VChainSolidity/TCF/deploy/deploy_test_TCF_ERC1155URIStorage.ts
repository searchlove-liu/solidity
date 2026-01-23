import { deployScript, artifacts } from "../rocketh/deploy.js";

export default deployScript(
    async ({ deploy, namedAccounts }) => {
        const { deployer } = namedAccounts;

        await deploy("test_TCF_ERC1155URIStorage", {
            account: deployer,
            artifact: artifacts.test_TCF_ERC1155URIStorage,
            args: [],
        });
    },
    // finally you can pass tags and dependencies
    { tags: ["testTCFERC1155URIStorage"] }
);

// npx hardhat node
// npx hardhat compile
// npx hardhat deploy --tags testTCFERC1155URIStorage --network localhost
// npx hardhat deploy --tags testTCFERC1155URIStorage --network sepolia