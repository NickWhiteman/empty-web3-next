import { Inter } from 'next/font/google';
import { useConnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const { connect } = useConnect({
        connector: new MetaMaskConnector(),
    });
    return <></>;
}
