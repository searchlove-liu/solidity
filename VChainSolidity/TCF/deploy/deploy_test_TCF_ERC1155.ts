import { deployScript, artifacts } from "../rocketh/deploy.js";

export default deployScript(
    async ({ deploy, namedAccounts }) => {
        const { deployer } = namedAccounts;

        await deploy("test_TCF_ERC1155", {
            account: deployer,
            artifact: artifacts.test_TCF_ERC1155,
            args: [],
        });
    },
    // finally you can pass tags and dependencies
    { tags: ["testTcfErc1155"] }
);

// npx hardhat node
// npx hardhat compile
// npx hardhat deploy --tags testTcfErc1155 --network localhost
// npx hardhat deploy --tags tcfErc1155 --network sepolia