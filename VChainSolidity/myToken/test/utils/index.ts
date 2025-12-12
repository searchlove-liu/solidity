import { Abi_MyToken } from "#generated/abis/MyToken.js";

import { loadAndExecuteDeployments } from '#rocketh';

import { EthereumProvider } from 'hardhat/types/providers';
// prepare variable :contract, accounts
export function setupFixtures(provider: EthereumProvider) {
    return {
        async deployAll() {
            // Executes deployment scripts using rocketh's `loadAndExecuteDeployments` function.
            const env = await loadAndExecuteDeployments({
                provider: provider,
            });

            // Deployment are inherently untyped since they can vary from network or even before different from current artifacts
            // so here we type them manually assuming the artifact is still matching
            const MyToken = env.get<Abi_MyToken>('MyToken');


            return {
                env, MyToken, namedAccounts: env.namedAccounts
            };
        },
    };
}