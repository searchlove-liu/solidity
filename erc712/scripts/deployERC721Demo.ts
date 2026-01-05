import { network } from "hardhat"
const { viem, networkName } = await network.connect();
// const publicClient = await viem.getPublicClient();

async function deployContract() {
    const EIP712Demo = await viem.deployContract("EIP712Demo")
    console.log("address:", EIP712Demo.address)
}

await deployContract()