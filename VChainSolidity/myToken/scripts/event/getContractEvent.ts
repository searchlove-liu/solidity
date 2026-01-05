import { network } from "hardhat"
import { EventEmitterAbi } from "../abi/EventEmitter.ts"
import { parseAbiItem } from 'viem'

const { viem } = await network.connect()
const publicClient = await viem.getPublicClient()
const walletClients = await viem.getWalletClients()

const logs = await publicClient.getContractEvents({
    address: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    abi: EventEmitterAbi,
    eventName: 'ValueChanged',
    args: {
        changer: walletClients[0].account.address
    },
    fromBlock: 0n,
    toBlock: 10n
})

// 如果没有fromBlock和toBlock，它只会返回最新的event
console.log(logs)

// npx hardhat run scripts/event/xxx.ts --network localhost