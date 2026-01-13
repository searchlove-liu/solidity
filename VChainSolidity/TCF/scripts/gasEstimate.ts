import { network } from "hardhat";
const { viem } = await network.connect({
    network: "hardhatMainnet",
    chainType: "l1",
});
const publicClient = await viem.getPublicClient();
const [senderClient] = await viem.getWalletClients();
const deployer = senderClient.account

interface PriceType {
    tokenAddress: `0x${string}`;
    amount: bigint;
}

const emptyAddress = `0x${"0000000000000000000000000000000000000000"}`

interface NFTPrice {
    priceData: PriceType[]
}

type SixNFTPrices = readonly [
    { priceData: readonly PriceType[] },
    { priceData: readonly PriceType[] },
    { priceData: readonly PriceType[] },
    { priceData: readonly PriceType[] },
    { priceData: readonly PriceType[] },
    { priceData: readonly PriceType[] }
];

const testAddress = "0xF6422E786cBfAdB286dD482939Ff48F28ea0cB34" as `0x${string}`

const tokenAddresses = [testAddress];

const NFT1prices: PriceType[] = [
    { tokenAddress: emptyAddress, amount: 1n },
    { tokenAddress: testAddress, amount: 1n }
]
const NFT2prices: PriceType[] = [
    { tokenAddress: emptyAddress, amount: 1n },
    { tokenAddress: testAddress, amount: 1n }
]
const NFT3prices: PriceType[] = [
    { tokenAddress: emptyAddress, amount: 1n },
    { tokenAddress: testAddress, amount: 1n }
]
const NFT4prices: PriceType[] = [
    { tokenAddress: emptyAddress, amount: 1n },
    { tokenAddress: testAddress, amount: 1n }
]
const NFT5prices: PriceType[] = [
    { tokenAddress: emptyAddress, amount: 1n },
    { tokenAddress: testAddress, amount: 1n }
]
const NFT6prices: PriceType[] = [
    { tokenAddress: emptyAddress, amount: 1n },
    { tokenAddress: testAddress, amount: 1n }
]

const sixNFTPrices: SixNFTPrices = [
    { priceData: NFT1prices },
    { priceData: NFT2prices },
    { priceData: NFT3prices },
    { priceData: NFT4prices },
    { priceData: NFT5prices },
    { priceData: NFT6prices },
]

import { encodeFunctionData } from 'viem'
import { TCF_NFTPriceAbi } from './abi/TCF_NFTPrice.ts'

function encodeInitializeData(): string {
    const data = encodeFunctionData({
        abi: TCF_NFTPriceAbi,
        functionName: "TCF_NFTPrice_init",
        args: [sixNFTPrices, tokenAddresses]
    })
    // console.log('encodeFunctionData initialize data:', data);
    return data
}

const inputData = encodeInitializeData();

export async function testTCF_NFTPriceGasUsed(): Promise<bigint> {
    const gas = publicClient.estimateGas({
        data: inputData as `0x${string}`,
        account: deployer,
    })
    console.log(await gas);
    return gas;
}