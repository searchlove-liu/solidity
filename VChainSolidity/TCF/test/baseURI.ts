import { stringToHexString } from "./utils/stringToHex.ts";

const base1Value = stringToHexString(
  "https://yellow-secure-silverfish-933.mypinata.cloud/ipfs/bafybeigsbb4cuqks2qdzotsyeobdbi4yfkqalcg2gzukhlneiqdbm5ovaa/1.json",
) as `0x${string}`;

const base2Value = stringToHexString(
  "https://yellow-secure-silverfish-933.mypinata.cloud/ipfs/bafybeigsbb4cuqks2qdzotsyeobdbi4yfkqalcg2gzukhlneiqdbm5ovaa/2.json",
) as `0x${string}`;

const base3Value = stringToHexString(
  "https://yellow-secure-silverfish-933.mypinata.cloud/ipfs/bafybeigsbb4cuqks2qdzotsyeobdbi4yfkqalcg2gzukhlneiqdbm5ovaa/3.json",
) as `0x${string}`;

const base4Value = stringToHexString(
  "https://yellow-secure-silverfish-933.mypinata.cloud/ipfs/bafybeigsbb4cuqks2qdzotsyeobdbi4yfkqalcg2gzukhlneiqdbm5ovaa/4.json",
) as `0x${string}`;

const base5Value = stringToHexString(
  "https://yellow-secure-silverfish-933.mypinata.cloud/ipfs/bafybeigsbb4cuqks2qdzotsyeobdbi4yfkqalcg2gzukhlneiqdbm5ovaa/5.json",
) as `0x${string}`;

const base6Value = stringToHexString(
  "https://yellow-secure-silverfish-933.mypinata.cloud/ipfs/bafybeigsbb4cuqks2qdzotsyeobdbi4yfkqalcg2gzukhlneiqdbm5ovaa/6.json",
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
