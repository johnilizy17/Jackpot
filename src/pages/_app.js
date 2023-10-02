import '@/styles/App.css'
import '@/styles/style.css'
import '@/styles/dashboard.css'
import { ChakraProvider } from '@chakra-ui/react'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi' 
import { bscTestnet } from 'wagmi/chains'
import Head from 'next/head'
  
const chains = [bscTestnet]
const projectId = 'fef8ac1aafdd98a96a0ed53388f95372'
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://unpkg.com/web3@1.6.0/dist/web3.min.js"></script>
        <script src="https://unpkg.com/@walletconnect/web3-provider@1.6.5/dist/umd/index.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />
      </Head>

      <WagmiConfig config={wagmiConfig}>
        <ChakraProvider><Component {...pageProps} /> </ChakraProvider>
      </WagmiConfig>
    </>
  )
}
