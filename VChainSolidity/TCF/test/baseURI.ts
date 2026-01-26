import { stringToHexString } from "./utils/stringToHex.ts";

const base1Value = stringToHexString(
  "https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmT72uJzk6RMeoXJ1YQyCC7A9bcPDc5o1KgBEkcX6cQq7J/1.json",
) as `0x${string}`;

const base2Value = stringToHexString(
  "https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmT72uJzk6RMeoXJ1YQyCC7A9bcPDc5o1KgBEkcX6cQq7J/2.json",
) as `0x${string}`;

const base3Value = stringToHexString(
  "https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmT72uJzk6RMeoXJ1YQyCC7A9bcPDc5o1KgBEkcX6cQq7J/3.json",
) as `0x${string}`;

const base4Value = stringToHexString(
  "https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmT72uJzk6RMeoXJ1YQyCC7A9bcPDc5o1KgBEkcX6cQq7J/4.json",
) as `0x${string}`;

const base5Value = stringToHexString(
  "https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmT72uJzk6RMeoXJ1YQyCC7A9bcPDc5o1KgBEkcX6cQq7J/5.json",
) as `0x${string}`;

const base6Value = stringToHexString(
  "https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmT72uJzk6RMeoXJ1YQyCC7A9bcPDc5o1KgBEkcX6cQq7J/6.json",
) as `0x${string}`;

export const baseURI = [
  base1Value,
  base2Value,
  base3Value,
  base4Value,
  base5Value,
  base6Value,
] as const;
