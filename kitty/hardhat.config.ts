import hardhatToolboxViemPlugin from "@nomicfoundation/hardhat-toolbox-viem";
import { configVariable, defineConfig } from "hardhat/config";

export default defineConfig({
  plugins: [hardhatToolboxViemPlugin],
  solidity: {
    profiles: {
      default: {
        compilers: [
          { version: "0.8.28" },
          // CryptoKitties sources use `pragma solidity ^0.4.11;`.
          // Any 0.4.x compiler >= 0.4.11 works; we use 0.4.26 for maximum compatibility.
          { version: "0.4.26" },
        ],
      },
      production: {
        compilers: [
          {
            version: "0.8.28",
            settings: {
              optimizer: {
                enabled: true,
                runs: 200,
              },
            },
          },
          {
            version: "0.4.26",
            settings: {
              optimizer: {
                enabled: true,
                runs: 200,
              },
            },
          },
        ],
      },
    },
  },
  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },
    sepolia: {
      type: "http",
      chainType: "l1",
      url: configVariable("SEPOLIA_RPC_URL"),
      accounts: [configVariable("SEPOLIA_PRIVATE_KEY")],
    },
  },
});
