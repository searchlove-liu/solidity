import { network } from "hardhat"
const { viem } = await network.connect();
import { createWalletClient, custom, http } from "viem";
import { sepolia } from 'viem/chains'

const domain = {
    chainId: 11155111, // sepolia
    name: 'MailDApp',
    verifyingContract: '0x53a8d01b19420dbe3ddd4182601304ba50fdfe3f' as `0x${string}`, // 合约地址
    version: '1.0.0'

};

const types = {
    Person: [
        { name: 'name', type: 'string' },
        { name: 'wallet', type: 'address' }
    ],
    Mail: [
        { name: 'from', type: 'Person' },
        { name: 'to', type: 'Person' },
        { name: 'contents', type: 'string' }
    ]
};

// const value = {
//     from: {
//         name: 'Alice',
//         wallet: '0xA5C245A738E59a166b00A528ABE7cbEF12009AB3'
//     },
//     to: {
//         name: 'Bob',
//         wallet: '0xe22378Fc44999C3C45a5343a469AD92E594cE1C5'
//     },
//     contents: 'Hello Bob!'
// };

async function signMail() {

    const walletClients = await viem.getWalletClients({
        chain: sepolia,
        // transport: custom(window.ethereum!)   // 如果在前端需要使用
    })

    const account = walletClients[0].account

    // const walletClient = createWalletClient({
    //     account: account,
    //     chain: sepolia,
    //     transport: http()
    //     // transport: custom(window.ethereum!)
    // })



    const signature = await walletClients[0].signTypedData({
        account,
        domain,
        types,
        primaryType: 'Mail',
        message: {
            from: {
                name: 'Cow',
                wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
            },
            to: {
                name: 'Bob',
                wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
            },
            contents: 'Hello, Bob!',
        },
    })

    console.log("aignature:", signature)
}

await signMail()