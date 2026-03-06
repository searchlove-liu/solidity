import { stringToHexString } from "./utils/stringToHex.ts";

const base1Value = stringToHexString(
  "https://black-major-opossum-243.mypinata.cloud/ipfs/bafybeif536vba2lmtaeaso66nplepey6zlg4p77nofftnjmpoe566zbejm/nft0.jpg",
) as `0x${string}`;

const base2Value = stringToHexString(
  "https://black-major-opossum-243.mypinata.cloud/ipfs/bafybeif536vba2lmtaeaso66nplepey6zlg4p77nofftnjmpoe566zbejm/nft1.jpg",
) as `0x${string}`;

const base3Value = stringToHexString(
  "https://black-major-opossum-243.mypinata.cloud/ipfs/bafybeif536vba2lmtaeaso66nplepey6zlg4p77nofftnjmpoe566zbejm/nft2.jpg",
) as `0x${string}`;

const base4Value = stringToHexString(
  "https://black-major-opossum-243.mypinata.cloud/ipfs/bafybeif536vba2lmtaeaso66nplepey6zlg4p77nofftnjmpoe566zbejm/nft3.jpg",
) as `0x${string}`;

const base5Value = stringToHexString(
  "https://black-major-opossum-243.mypinata.cloud/ipfs/bafybeif536vba2lmtaeaso66nplepey6zlg4p77nofftnjmpoe566zbejm/nft4.jpg",
) as `0x${string}`;

const base6Value = stringToHexString(
  "https://black-major-opossum-243.mypinata.cloud/ipfs/bafybeif536vba2lmtaeaso66nplepey6zlg4p77nofftnjmpoe566zbejm/nft5.jpg",
) as `0x${string}`;

// const base1Value = stringToHexString(
//   "https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmS8JCsa7BrZDGv9Ns2vsXyaV9tLKvmLUMoTQYKtNNhMhD/2.jpg",
// ) as `0x${string}`;

// const base2Value = stringToHexString(
//   "https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmS8JCsa7BrZDGv9Ns2vsXyaV9tLKvmLUMoTQYKtNNhMhD/3.jpg",
// ) as `0x${string}`;

// const base3Value = stringToHexString(
//   "https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmS8JCsa7BrZDGv9Ns2vsXyaV9tLKvmLUMoTQYKtNNhMhD/4.jpg",
// ) as `0x${string}`;

// const base4Value = stringToHexString(
//   "https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmS8JCsa7BrZDGv9Ns2vsXyaV9tLKvmLUMoTQYKtNNhMhD/5.jpg",
// ) as `0x${string}`;

// const base5Value = stringToHexString(
//   "https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmS8JCsa7BrZDGv9Ns2vsXyaV9tLKvmLUMoTQYKtNNhMhD/6.jpg",
// ) as `0x${string}`;

// const base6Value = stringToHexString(
//   "https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmS8JCsa7BrZDGv9Ns2vsXyaV9tLKvmLUMoTQYKtNNhMhD/7.jpg",
// ) as `0x${string}`;

export const baseURI = [
  base1Value,
  base2Value,
  base3Value,
  base4Value,
  base5Value,
  base6Value,
] as const;
