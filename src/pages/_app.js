import '@/styles/App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { bsc } from 'wagmi/chains'
import Head from 'next/head'

const chains = [bsc]
const projectId = 'fef8ac1aafdd98a96a0ed53388f95372'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  provider
});
const ethereumClient = new EthereumClient(wagmiClient, chains)

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://unpkg.com/web3@1.6.0/dist/web3.min.js"></script>
        <script src="https://unpkg.com/@walletconnect/web3-provider@1.6.5/dist/umd/index.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />
      </Head>

      <WagmiConfig client={wagmiClient}>
        <ChakraProvider><Component {...pageProps} /> </ChakraProvider>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}
