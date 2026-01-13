import { network } from "hardhat";
const { viem } = await network.connect({
    network: "hardhatMainnet",
    chainType: "l1",
});
import { encodeFunctionData } from 'viem'
import { TCF_NFTPriceAbi } from './abi/TCF_NFTPrice.ts'
import { TCF_abi } from "./abi/TCF.ts"

function encodeInitializeData(): string {
    const data = encodeFunctionData({
        abi: TCF_abi,
        functionName: "symbol",
        args: []
    })
    // console.log('encodeFunctionData initialize data:', data);
    return data
}

console.log(encodeInitializeData())