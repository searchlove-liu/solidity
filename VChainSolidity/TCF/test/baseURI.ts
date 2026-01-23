import { stringToHexString } from "./utils/stringToHex.ts"

const baseValue = stringToHexString("https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmT72uJzk6RMeoXJ1YQyCC7A9bcPDc5o1KgBEkcX6cQq7J/") as `0x${string}`;

export const baseURI = [baseValue, baseValue, baseValue, baseValue, baseValue, baseValue] as const;
