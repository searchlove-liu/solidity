import { encodeFunctionData } from 'viem'
import { myTokenAbi } from '../abi/myToken.ts'

const data = encodeFunctionData({
    abi: myTokenAbi,
    functionName: 'getBatchURI',
    args: [0n, 3n, '0x7741ba614e1a8cd096e0339fbe8d3c21f3bdc26a']
})

console.log('encodeFunctionData getBatchURI data:', data);
