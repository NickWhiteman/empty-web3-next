import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { configureChains, mainnet, WagmiConfig, createClient } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { provider, webSocketProvider } = configureChains([mainnet], [publicProvider()]);

const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
});

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <WagmiConfig client={client}>
            <Component {...pageProps} />
        </WagmiConfig>
    );
};

export default App;
