// src/config/wagmi.js
import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

const somniaTestnet = {
  id: 50312,
  name: 'Somnia Testnet',
  network: 'somnia-testnet',
  nativeCurrency: { name: 'Somnia Test Token', symbol: 'STT', decimals: 18 },
  rpcUrls: { default: { http: ['https://dream-rpc.somnia.network'] } },
  blockExplorers: {
    default: { name: 'Somnia Explorer', url: 'https://somnia-testnet.socialscan.io' },
  },
  testnet: true,
}

const chains = [mainnet, sepolia, somniaTestnet]

const { connectors } = getDefaultWallets({
  appName: 'Somnia DApp',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
  chains,
})

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  chains,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [somniaTestnet.id]: http('https://dream-rpc.somnia.network'),
  },
})

export { chains }
