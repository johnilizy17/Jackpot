import React, {useEffect} from 'react';
import { readContract, readContracts } from '@wagmi/core'
import { BUSD, contractAddress } from '@/services/NFT'
import ABI from '@/utils/ABI'
import { formatEther, parseEther } from 'viem'
import { prepareWriteContract, writeContract } from '@wagmi/core'
import ABI_BUSD from '@/utils/ABI_BUSD'
import { useAccount } from 'wagmi'
import { Web3 } from 'web3';

export default function Award() {

    async function jackpotInfo() {
        try {
            const config = await prepareWriteContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'awardJackpot',
                overrides: {
                    value: 0,
                    gasLimit: 3010000
                }
            })

            // const { hash } = await writeContract(config)
      
        } catch (err) {
            console.log(err)
        }
    }

   async function Connect() {
       alert("alert 2")
        if (window.ethereum) {
alert("allert")
          let  nftWeb3 = new Web3(window.ethereum)

            try {
                await window.ethereum.request({ method: "eth_requestAccounts" });

                let accounts = await window.ethereum.request({ method: 'eth_accounts' });
               let currentAddr = accounts[0];

                window.ethereum.on('chainChanged', (chainId) => {
                    window.location.reload();
                });
                window.ethereum.on('accountsChanged', function (accounts) {
                    window.location.reload();
                })
              let  networkID = await nftWeb3.eth.net.getId()
            } catch (error) {
                alert(error.message)
            }
        }

    }
    
  useEffect(()=>{
    Connect()
  },[window.ethereum])

    return (
        <button onClick={()=>getUserApprove(Web3)}>
            AwardF
        </button>
    )
}
