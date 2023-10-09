import React, {useEffect} from 'react';
import { readContract, readContracts } from '@wagmi/core'
import { BUSD, contractAddress } from '@/services/NFT'
import ABI from '@/utils/ABI'
import { formatEther, parseEther } from 'viem'
import { prepareWriteContract, writeContract } from '@wagmi/core'
import ABI_BUSD from '@/utils/ABI_BUSD'
import { useAccount } from 'wagmi'

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


  useEffect(()=>{
    
  },[])

    return (
        <div onClick={()=>jackpotInfo()}>
            AwardF
        </div>
    )
}