interface PriceType {
  tokenAddress: `0x${string}`;
  amount: bigint;
}

export const zeroAddress =
  `0x${"0000000000000000000000000000000000000000"}` as `0x${string}`;
export const ONEAddress =
  `0x${"0000000000000000000000000000000000000001"}` as `0x${string}`;

interface PriceType {
  tokenAddress: `0x${string}`;
  amount: bigint;
}
export type SixNFTPrices = readonly [
  [PriceType, PriceType],
  [PriceType, PriceType],
  [PriceType, PriceType],
  [PriceType, PriceType],
  [PriceType, PriceType],
  [PriceType, PriceType],
];

export function getPrices(supportedToken: `0x${string}`) {
  const NFT1prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 1n },
    { tokenAddress: supportedToken, amount: 1n },
  ];
  const NFT2prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 2n },
    { tokenAddress: supportedToken, amount: 2n },
  ];
  const NFT3prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 3n },
    { tokenAddress: supportedToken, amount: 3n },
  ];
  const NFT4prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 4n },
    { tokenAddress: supportedToken, amount: 4n },
  ];
  const NFT5prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 5n },
    { tokenAddress: supportedToken, amount: 5n },
  ];
  const NFT6prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 6n },
    { tokenAddress: supportedToken, amount: 6n },
  ];

  // const NFT1prices: [PriceType, PriceType] = [
  //   { tokenAddress: zeroAddress, amount: 1000000000n },
  //   { tokenAddress: supportedToken, amount: 1000000000n },
  // ];
  // const NFT2prices: [PriceType, PriceType] = [
  //   { tokenAddress: zeroAddress, amount: 2000000000n },
  //   { tokenAddress: supportedToken, amount: 2000000000n },
  // ];
  // const NFT3prices: [PriceType, PriceType] = [
  //   { tokenAddress: zeroAddress, amount: 3000000000n },
  //   { tokenAddress: supportedToken, amount: 3000000000n },
  // ];
  // const NFT4prices: [PriceType, PriceType] = [
  //   { tokenAddress: zeroAddress, amount: 4000000000n },
  //   { tokenAddress: supportedToken, amount: 4000000000n },
  // ];
  // const NFT5prices: [PriceType, PriceType] = [
  //   { tokenAddress: zeroAddress, amount: 5000000000n },
  //   { tokenAddress: supportedToken, amount: 5000000000n },
  // ];
  // const NFT6prices: [PriceType, PriceType] = [
  //   { tokenAddress: zeroAddress, amount: 6000000000n },
  //   { tokenAddress: supportedToken, amount: 6000000000n },
  // ];

  const sixNFTPrices: SixNFTPrices = [
    NFT1prices,
    NFT2prices,
    NFT3prices,
    NFT4prices,
    NFT5prices,
    NFT6prices,
  ];
  return sixNFTPrices;
}

export function getVoidChainTestnetPrices(supportedToken: `0x${string}`) {
  const NFT1prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 1000000000n },
    { tokenAddress: supportedToken, amount: 1000000000n },
  ];
  const NFT2prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 2000000000n },
    { tokenAddress: supportedToken, amount: 2000000000n },
  ];
  const NFT3prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 3000000000n },
    { tokenAddress: supportedToken, amount: 3000000000n },
  ];
  const NFT4prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 4000000000n },
    { tokenAddress: supportedToken, amount: 4000000000n },
  ];
  const NFT5prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 5000000000n },
    { tokenAddress: supportedToken, amount: 5000000000n },
  ];
  const NFT6prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 6000000000n },
    { tokenAddress: supportedToken, amount: 6000000000n },
  ];

  const sixNFTPrices: SixNFTPrices = [
    NFT1prices,
    NFT2prices,
    NFT3prices,
    NFT4prices,
    NFT5prices,
    NFT6prices,
  ];
  return sixNFTPrices;
}

export function getVoidChainRealnetPrices(supportedToken: `0x${string}`) {
  const NFT1prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 500000000000n },
    { tokenAddress: supportedToken, amount: 20000000000n },
  ];
  const NFT2prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 2500000000000n },
    { tokenAddress: supportedToken, amount: 100000000000n },
  ];
  const NFT3prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 5000000000000n },
    { tokenAddress: supportedToken, amount: 200000000000n },
  ];
  const NFT4prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 15000000000000n },
    { tokenAddress: supportedToken, amount: 600000000000n },
  ];
  const NFT5prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 25000000000000n },
    { tokenAddress: supportedToken, amount: 1000000000000n },
  ];
  const NFT6prices: [PriceType, PriceType] = [
    { tokenAddress: zeroAddress, amount: 50000000000000n },
    { tokenAddress: supportedToken, amount: 2000000000000n },
  ];

  const sixNFTPrices: SixNFTPrices = [
    NFT1prices,
    NFT2prices,
    NFT3prices,
    NFT4prices,
    NFT5prices,
    NFT6prices,
  ];
  return sixNFTPrices;
}

export function getTCPrices() {
  const NFT1prices: PriceType[] = [{ tokenAddress: zeroAddress, amount: 1n }];
  const NFT2prices: PriceType[] = [{ tokenAddress: zeroAddress, amount: 2n }];
  const NFT3prices: PriceType[] = [{ tokenAddress: zeroAddress, amount: 3n }];
  const NFT4prices: PriceType[] = [{ tokenAddress: zeroAddress, amount: 4n }];
  const NFT5prices: PriceType[] = [{ tokenAddress: zeroAddress, amount: 5n }];
  const NFT6prices: PriceType[] = [{ tokenAddress: zeroAddress, amount: 6n }];

  return [
    NFT1prices,
    NFT2prices,
    NFT3prices,
    NFT4prices,
    NFT5prices,
    NFT6prices,
  ];
}
