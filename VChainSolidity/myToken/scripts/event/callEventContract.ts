import { network } from "hardhat"
import { EventEmitterAbi } from "../abi/EventEmitter.ts"
const { viem, networkConfig } = await network.connect()

const walletClients = await viem.getWalletClients()
const publicClient = await viem.getPublicClient()

async function setValue() {
    const { request } = await publicClient.simulateContract({
        account: walletClients[0].account.address,
        address: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
        abi: EventEmitterAbi,
        functionName: 'setValue',
        args: [101n],
    })

    const receipt = await walletClients[0].writeContractSync(request)
}

setValue()

// npx hardhat run scripts/event/callEventContract.ts --network localhost



