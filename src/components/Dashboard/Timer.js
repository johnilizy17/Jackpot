import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { readContract, readContracts } from '@wagmi/core'
import { contractAddress } from '@/services/NFT'
import ABI from '@/utils/ABI'
import { formatEther } from 'viem'

export default function TimeCounter({date, setDate}) {

    const [timeSteamp, setTimeSteamp] = useState(1696822534000)
    const [refresh, setRefresh] = useState(false)
    const [NumberOfTime, setNumberOfTime] = useState({ hour: "00", min: "00", sec: "00" })

    async function Timing() {
        let data = await readContract({
            address: contractAddress,
            abi: ABI,
            functionName: 'getCurretTimestamp',
        })
        data = formatEther(data) * 1000000000000000000 * 1000
        setTimeSteamp(data)
        var today = new Date(data);
        const hour = 24 - today.getHours()
        const min = 60 - today.getMinutes()
        const sec = 60 - today.getSeconds()
        setNumberOfTime({ hour: hour, min: min, sec: sec })
        setRefresh(!refresh)
    }

    async function Timing2() {
        var countDownDate = 1696866988;

        // Update the count down every 1 second
       
            // Find the distance between now and the count down date
            let now = new Date().getTime();

            var countDownDate = new Date(countDownDate + date * 60000);
 
            console.log(date)
            var distance = now - countDownDate;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setNumberOfTime({ hour: hours, min: minutes, sec: seconds })
    }

    useEffect(() => {
        setRefresh(!refresh)
        Timing2()

    }, [refresh])

    return (
        <>
            <Box className="time hour" onClick={()=>Timing2()}>
                <h2>{NumberOfTime.hour < 10 ? `0${NumberOfTime.hour}` : NumberOfTime.hour}</h2>
                <p>Hour</p>
            </Box>
            <Box className="divide"></Box>
            <Box className="time min">
                <h2>{NumberOfTime.min < 10 ? `0${NumberOfTime.min}` : NumberOfTime.min}</h2>
                <p>Min</p>
            </Box>
            <Box className="divide"></Box>
            <Box className="time sec">
                <h2>{NumberOfTime.sec < 10 ? `0${NumberOfTime.sec}` : NumberOfTime.sec}</h2>
                <p>Sec</p>
            </Box>
        </>)
}