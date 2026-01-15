import hardhatToolboxViemPlugin from "@nomicfoundation/hardhat-toolbox-viem";
import { configVariable, defineConfig } from "hardhat/config";
import HardhatDeploy from 'hardhat-deploy';
import hardhatEthersChaiMatchers from "@nomicfoundation/hardhat-ethers-chai-matchers";
import hardhatBytecodeExporter from '@solidstate/hardhat-bytecode-exporter';
import { localhost } from "viem/chains";


export default defineConfig({
  plugins: [hardhatToolboxViemPlugin, HardhatDeploy, hardhatEthersChaiMatchers, hardhatBytecodeExporter],
  bytecodeExporter: {
    path: './bytecode',
    runOnCompile: true,
    clear: true,
    flat: true,
    only: [/:TCF_NFTPrice$/],
  },
  chainDescriptors: {
    31337: {
      name: "Hardhat Local",
      chainType: "l1",
    },
  },
  solidity: {
    profiles: {
      default: {
        version: "0.8.1",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      production: {
        version: "0.8.1",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
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
    localhost: {
      chainId: 31337,
      type: "edr-simulated",
      chainType: "l1",
      gas: 12000000,
      gasPrice: 8000000000
    },
    sepolia: {
      type: "http",
      chainType: "l1",
      url: configVariable("SEPOLIA_RPC_URL"),
      accounts: [configVariable("SEPOLIA_PRIVATE_KEY"), configVariable("SEPOLIA_PRIVATE_KEY1"), configVariable("SEPOLIA_PRIVATE_KEY2")],
    },
  },
});
