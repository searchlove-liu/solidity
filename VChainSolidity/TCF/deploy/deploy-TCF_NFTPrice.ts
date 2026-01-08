import { deployScript, artifacts } from "../rocketh/deploy.ts";

export default deployScript(
    async ({ deploy, namedAccounts }) => {
        const { deployer } = namedAccounts;

        await deploy("TCF_NFTPrice", {
            account: deployer,
            artifact: artifacts.TCF_NFTPrice,
            args: [],
        });
    },
    // finally you can pass tags and dependencies
    { tags: ["nftprice"] }
);

// npx hardhat node
// npx hardhat compile
// npx hardhat deploy --tags nftprice --network localhost
// npx hardhat deploy --tags tcf --network sepolia