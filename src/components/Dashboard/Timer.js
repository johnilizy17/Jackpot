import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { readContract, readContracts } from '@wagmi/core'
import { contractAddress } from '@/services/NFT'
import ABI from '@/utils/ABI'
import { formatEther } from 'viem'

export default function TimeCounter() {
    
    const [date, setDate] = useState()
    const [refresh, setRefresh] = useState(false)
    const [NumberOfTime, setNumberOfTime] = useState({hour:"00", min:"00", sec:"00"})
  async function Timing() {
        let data = await readContract({
            address: contractAddress,
            abi: ABI,
            functionName: 'getCurretTimestamp',
        })
        data = formatEther(data)*1000000000000000000 * 1000
        var today = new Date(data);
       const hour= 24 - today.getHours() 
       const min = 60 - today.getMinutes() 
       const sec = 60 - today.getSeconds()
        setNumberOfTime({hour:hour, min:min, sec:sec})
        setRefresh(!refresh)
    }
    useEffect(() => {
        Timing()
    },[refresh])
    return (
        <>
            <Box className="time hour">
                 <h2>{NumberOfTime.hour <10?`0${NumberOfTime.hour}`:NumberOfTime.hour}</h2>
                <p>Hour</p>
            </Box>
            <Box className="divide"></Box>
            <Box className="time min">
                <h2>{NumberOfTime.min <10?`0${NumberOfTime.min}`:NumberOfTime.min}</h2>
                <p>Min</p>
            </Box>
            <Box className="divide"></Box>
            <Box className="time sec">
                <h2>{NumberOfTime.sec <10?`0${NumberOfTime.sec}`:NumberOfTime.sec}</h2>
                <p>Sec</p>
            </Box>
        </>)
}