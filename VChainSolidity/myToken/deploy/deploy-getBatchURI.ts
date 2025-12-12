import { deployScript, artifacts } from "#rocketh"
import { deploy } from "@rocketh/deploy";

export default deployScript(
    async ({ deploy, namedAccounts, }) => {
        const deployer = namedAccounts.deployer
        const bratchURI = await deploy("batchURIAndId", {
            account: deployer,
            artifact: artifacts.batchURIAndId,
            args: [],
        })
    },
    { tags: ["getbratchURI"] }
);

// npx hardhat node
// npx hardhat compile
// npx hardhat deploy --tags getbratchURI --network localhost
// npx hardhat deploy --tags getbratchURI --network sepolia