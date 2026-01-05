import { deployScript, artifacts } from "#rocketh"

export default deployScript(
    async ({ deploy, namedAccounts }) => {
        const deployer = namedAccounts.deployer
        await deploy("EventEmitter", {
            account: deployer,
            artifact: artifacts.EventEmitter,
            args: [],
        })
    },
    { tags: ["EventEmitter"] }
)

// npx hardhat node
// npx hardhat compile
// npx hardhat deploy --tags EventEmitter --network localhost
// npx hardhat deploy --tags EventEmitter --network sepolia