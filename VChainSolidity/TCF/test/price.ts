interface PriceType {
    tokenAddress: `0x${string}`;
    amount: bigint;
}

export const zeroAddress = `0x${"0000000000000000000000000000000000000000"}` as `0x${string}`

type SixNFTPrices = readonly [
    PriceType[],
    PriceType[],
    PriceType[],
    PriceType[],
    PriceType[],
    PriceType[]
];


export function getPrices(supportedToken: `0x${string}`) {
    const NFT1prices: PriceType[] = [
        { tokenAddress: zeroAddress, amount: 1n },
        { tokenAddress: supportedToken, amount: 1n }
    ]
    const NFT2prices: PriceType[] = [
        { tokenAddress: zeroAddress, amount: 1n },
        { tokenAddress: supportedToken, amount: 1n }
    ]
    const NFT3prices: PriceType[] = [
        { tokenAddress: zeroAddress, amount: 1n },
        { tokenAddress: supportedToken, amount: 1n }
    ]
    const NFT4prices: PriceType[] = [
        { tokenAddress: zeroAddress, amount: 1n },
        { tokenAddress: supportedToken, amount: 1n }
    ]
    const NFT5prices: PriceType[] = [
        { tokenAddress: zeroAddress, amount: 1n },
        { tokenAddress: supportedToken, amount: 1n }
    ]
    const NFT6prices: PriceType[] = [
        { tokenAddress: zeroAddress, amount: 1n },
        { tokenAddress: supportedToken, amount: 1n }
    ]

    const sixNFTPrices: SixNFTPrices = [
        NFT1prices,
        NFT2prices,
        NFT3prices,
        NFT4prices,
        NFT5prices,
        NFT6prices
    ]
    return sixNFTPrices
}

export function getErrorPrices(supportedToken: `0x${string}`) {
    const NFT1prices: PriceType[] = [
        { tokenAddress: zeroAddress, amount: 1n },
        { tokenAddress: supportedToken, amount: 1n }
    ]
    const NFT2prices: PriceType[] = [
        { tokenAddress: zeroAddress, amount: 1n },
        { tokenAddress: supportedToken, amount: 1n }
    ]
    const NFT3prices: PriceType[] = [
        { tokenAddress: zeroAddress, amount: 1n },
        { tokenAddress: supportedToken, amount: 1n }
    ]
    const NFT4prices: PriceType[] = [
        { tokenAddress: zeroAddress, amount: 1n },
        { tokenAddress: supportedToken, amount: 1n }
    ]
    const NFT5prices: PriceType[] = [
        { tokenAddress: zeroAddress, amount: 1n },
        { tokenAddress: supportedToken, amount: 1n }
    ]
    const NFT6prices: PriceType[] = [
        { tokenAddress: zeroAddress, amount: 1n },
    ]

    const sixNFTPrices: SixNFTPrices = [
        NFT1prices,
        NFT2prices,
        NFT3prices,
        NFT4prices,
        NFT5prices,
        NFT6prices
    ]
    return sixNFTPrices
}
