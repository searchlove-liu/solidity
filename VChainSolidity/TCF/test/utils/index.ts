// test/utils/index.ts
import { EthereumProvider } from "hardhat/types/providers";
import { loadAndExecuteDeploymentsFromFiles } from "./../../rocketh/environment.ts"
import { artifacts } from "../../rocketh/deploy.js";

export function setupFixtures(provider: EthereumProvider) {
    return {
        async deployAll() {
            const env = await loadAndExecuteDeploymentsFromFiles({
                provider,
                environment: 'localhost',
            });

            // Type the deployments for better IDE support
            const TCF1 = env.get<typeof artifacts.TCF.abi>("TCF");
            const TCF2 = env.get<typeof artifacts.TCF_copy.abi>("TCF_copy");
            const testGasUsed = env.get<typeof artifacts.testGasUsed.abi>("testGasUsed");
            const TCF_NFTPrice = env.get<typeof artifacts.TCF_NFTPrice.abi>("TCF_NFTPrice");
            const test_TCF_ERC1155 = env.get<typeof artifacts.test_TCF_ERC1155.abi>("test_TCF_ERC1155");
            const test_TCF_ERC1155MintTime = env.get<typeof artifacts.test_TCF_ERC1155MintTime.abi>("test_TCF_ERC1155MintTime");
            const test_TCF_ERC1155URIStorage = env.get<typeof artifacts.test_TCF_ERC1155URIStorage.abi>("test_TCF_ERC1155URIStorage");
            const testUtils = env.get<typeof artifacts.testUtils.abi>("testUtils");
            const TCF_NFT = env.get<typeof artifacts.TCF_NFT.abi>("TCF_NFT");
            const SimpleTokenReceiver = env.get<typeof artifacts.SimpleTokenReceiver.abi>("SimpleTokenReceiver");
            const ERC1363Example = env.get<typeof artifacts.ERC1363Example.abi>("ERC1363Example");

            return {
                env,
                TCF1,
                TCF2,
                namedAccounts: env.namedAccounts,
                unnamedAccounts: env.unnamedAccounts,
                testGasUsed,
                TCF_NFTPrice,
                test_TCF_ERC1155,
                test_TCF_ERC1155MintTime,
                test_TCF_ERC1155URIStorage,
                testUtils,
                TCF_NFT,
                SimpleTokenReceiver,
                ERC1363Example,
            };
        },
    };
}