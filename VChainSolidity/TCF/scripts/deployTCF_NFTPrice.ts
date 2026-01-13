import { network } from "hardhat";
const { viem } = await network.connect();
const publicClient = await viem.getPublicClient();
const [senderClient] = await viem.getWalletClients();
