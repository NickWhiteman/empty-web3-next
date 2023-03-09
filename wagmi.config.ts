import { defineConfig } from '@wagmi/cli';
import { etherscan, react } from '@wagmi/cli/plugins';
import { mainnet, goerli } from '@wagmi/chains';

export default defineConfig({
    out: 'src/generated.ts',
    contracts: [],
    plugins: [
        etherscan({
            apiKey: process.env.ETHERSCAN_API_KEY!,
            chainId: mainnet.id,
            contracts: [
                // {
                //     name: 'EnsRegistry',
                //     address: {
                //         [mainnet.id]: '0x000000000000000000000000000000000000000000000',
                //         [goerli.id]: '0x000000000000000000000000000000000000000000000',
                //     },
                // },
            ],
        }),
        react(),
    ],
});
