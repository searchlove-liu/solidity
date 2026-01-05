import { network } from "hardhat"
import { EventEmitterAbi } from "../abi/EventEmitter.ts"

const { viem } = await network.connect()

const publicClient = await viem.getPublicClient()
const walletClients = await viem.getWalletClients()


const filter = await publicClient.createContractEventFilter({
    abi: EventEmitterAbi,
    address: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    eventName: 'ValueChanged',
    fromBlock: 0n,
    toBlock: 10n,
    args: {
        changer: walletClients[0].account.address
    }
})

// 如果没有fromBlock和toBlock，它只会返回最新的event
const logs = await publicClient.getFilterLogs({ filter })

console.log(logs)

// npx hardhat run scripts/event/getEvent.ts --network localhost