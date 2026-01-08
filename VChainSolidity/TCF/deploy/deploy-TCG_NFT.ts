import { deployScript, artifacts } from "../rocketh/deploy.ts";

export default deployScript(
    async ({ deploy, namedAccounts }) => {
        const { deployer } = namedAccounts;

        await deploy("TCF_NFT", {
            account: deployer,
            artifact: artifacts.TCF_NFT,
            args: [],
        });
    },
    // finally you can pass tags and dependencies
    { tags: ["nft"] }
);

// npx hardhat node
// npx hardhat compile
// npx hardhat deploy --tags nft --network localhost
// npx hardhat deploy --tags tcf --network sepolia