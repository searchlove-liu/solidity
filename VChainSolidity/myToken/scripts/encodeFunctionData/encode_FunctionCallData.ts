import { encodeFunctionData } from 'viem'
import { myTokenAbi } from '../abi/myToken.ts'
import { stringToHexString } from "../utils/stringToHex.ts"


function encodeInitializeData() {
    let tokenName = stringToHexString('myToken')
    let tokenSymbol = stringToHexString('MTK')
    let tokenUri = stringToHexString('https://ipfs.io/ipfs/QmciqT3pUud6sa2U8E41ac2q7Mxd34DyNyyJ2YewGPAYkt/')

    const data = encodeFunctionData({
        abi: myTokenAbi,
        functionName: 'initialize',
        args: [`0x${tokenName}`, `0x${tokenSymbol}`, `0x${tokenUri}`]
    })
    console.log('encodeFunctionData initialize data:', data);
}

function encodeGetBatchURIData() {
    const data = encodeFunctionData({
        abi: myTokenAbi,
        functionName: 'getBatchURI',
        args: [2n, 3n, "0x7741ba614e1a8cd096e0339fbe8d3c21f3bdc26a"]
    })
    console.log('encodeFunctionData initialize data:', data);
}

function encodeGetOneNFTURIInputData() {
    const data = encodeFunctionData({
        abi: myTokenAbi,
        functionName: 'getOneTokenURI',
        args: [1n]
    })
    console.log('encodeFunctionData initialize data:', data);
}

encodeGetOneNFTURIInputData()
