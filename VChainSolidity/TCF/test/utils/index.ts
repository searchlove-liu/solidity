// test/utils/index.ts
import { EthereumProvider } from "hardhat/types/providers";
import { loadAndExecuteDeploymentsFromFiles } from "./../../rocketh/environment.ts"
import { artifacts } from "../../rocketh/deploy.js";

export function setupFixtures(provider: EthereumProvider) {
    return {
        async deployAll() {
            const env = await loadAndExecuteDeploymentsFromFiles({
                provider: provider,
            });

            // Type the deployments for better IDE support
            const TCF = env.get<typeof artifacts.TCF.abi>("TCF");
            const testGasUsed = env.get<typeof artifacts.testGasUsed.abi>("testGasUsed");
            // const TCF_NFTPrice = env.get<typeof artifacts.TCF_NFTPrice.abi>("TCF_NFTPrice");

            return {
                env,
                TCF,
                namedAccounts: env.namedAccounts,
                unnamedAccounts: env.unnamedAccounts,
                testGasUsed,
                // TCF_NFTPrice
            };
        },
    };
}