import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { readContract, readContracts } from '@wagmi/core'
import { prepareWriteContract, writeContract, waitForTransaction } from '@wagmi/core'
import { contractAddress } from '@/services/NFT'
import ABI from '@/utils/ABI'
import { formatEther } from 'viem'
import { useAccount } from 'wagmi'

export default function TimeCounter({ date, setName, setDate }) {

    const [timeSteamp, setTimeSteamp] = useState(1696822534000)
    const [refresh, setRefresh] = useState(false)
    const [NumberOfTime, setNumberOfTime] = useState({ hour: "00", min: "00", sec: "00" })
    const [DownDate, setDownDate] = useState();
    const [DownDate2, setDownDate2] = useState();
    const [reward, setReward] = useState(true)
    const [jackInfo, setJackInfo] = useState({ status: true })
    const { address } = useAccount()

    async function Timing() {
        try {

            let data2 = await readContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'getAllJackpot',
            })
            const datalength = data2.length - 1
            const timingData = formatEther(data2[datalength].endTime) * 1000000000000000000
            setJackInfo(data2[datalength])

            const current = datalength - 1
            if (current >= 0) {
                let data = await readContract({
                    address: contractAddress,
                    abi: ABI,
                    args: [current],
                    functionName: 'getCurrentJackpotInfo',
                })
                const exist = data.filter((a, b) => {
                    if (a.staker === address) {
                        return true
                    }
                })
                const notify = localStorage.getItem(`${current}${contractAddress}`)
                if (notify) {

                } else if (formatEther(data2[datalength].endTime) * 1000000000000000000 === 0 && exist) {
                    localStorage.setItem(`${current}${contractAddress}`, "true")
                        
                    if (data2[datalength - 1].winner === address) {
                        setName("win")
                    } else {
                        setName("loss")
                    }
                }
            }
            setDownDate(timingData)

        } catch (err) {
            console.log(err.message)
        }
    }

    async function Timing2() {
        // Update the count down every 1 second

        // Find the distance between now and the count down date
        let now = new Date().getTime()

        var distance = DownDate - Math.floor(now / 1000);
        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((distance % (60 * 60)) / (60));
        var seconds = Math.floor((distance % (60)));

        setNumberOfTime({ hour: hours, min: minutes, sec: seconds })
        if (distance < 0) {
            setNumberOfTime({ hour: "00", min: "00", sec: "00" })

            if (DownDate > 0 && jackInfo.status === false && reward) {
                setReward(false)
              const hash = await getUserApprove(ABI, contractAddress)
              const data = await waitForTransaction({
                hash: hash,
            })
alert('done')
               setTimeout(()=>{
              alert('set')
                   setDate('date')
               }, 6000)
                
            }
        }
    }

    useEffect(() => {
        Timing()
    }, [date])

    useEffect(() => {
        setRefresh(!refresh)
        if (DownDate) {
            Timing2()
        }
    }, [refresh])

    return (
        <>
            <Box className="time hour">
                <h2>{NumberOfTime.hour === "00" ? NumberOfTime.hour : NumberOfTime.hour < 10 ? `0${NumberOfTime.hour}` : NumberOfTime.hour}</h2>
                <p>Hour</p>
            </Box>
            <Box className="divide"></Box>
            <Box className="time min">
                <h2>{NumberOfTime.hour === "00" ? NumberOfTime.hour : NumberOfTime.min < 10 ? `0${NumberOfTime.min}` : NumberOfTime.min}</h2>
                <p>Min</p>
            </Box>
            <Box className="divide"></Box>
            <Box className="time sec">
                <h2>{NumberOfTime.hour === "00" ? NumberOfTime.hour : NumberOfTime.sec < 10 ? `0${NumberOfTime.sec}` : NumberOfTime.sec}</h2>
                <p>Sec</p>
            </Box>
        </>)
}
