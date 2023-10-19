import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { readContract, readContracts } from '@wagmi/core'
import { prepareWriteContract, writeContract, waitForTransaction } from '@wagmi/core'
import { contractAddress } from '@/services/NFT'
import ABI from '@/utils/ABI'
import { formatEther } from 'viem'
import { useAccount } from 'wagmi'

export default function TimeCounter({ date, setName, setDate, setLoading2, setDisable, DownDate, setDownDate }) {

    const [timeSteamp, setTimeSteamp] = useState(1696822534000)
    const [refresh, setRefresh] = useState(false)
    const [NumberOfTime, setNumberOfTime] = useState({ hour: "00", min: "00", sec: "00" })
    
    const [DownDate2, setDownDate2] = useState();
    const [reward, setReward] = useState(true)
    const [checker, setChecker] = useState(0)
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
            const endData = formatEther(data2[datalength].endTime) * 1000000000000000000
            let data = await readContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'startJackpotTime',
            })

            const startData = formatEther(data) * 1000000000000000000
            setJackInfo(data2[datalength])
            let now = new Date().getTime()
            var distance = startData - Math.floor(now / 1000);
            setChecker(endData)
            const timingData = distance >= 1 ? startData : endData
            if (distance >= 1) {
                setDisable(true)
            } else {
                setDisable(false)
            }
            setDownDate(timingData)
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
                    setLoading2(true)
                    if (data2[datalength - 1].winner === address) {
                        setName("win")
                    } else {
                        setName("loss")
                    }
                }
            }

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
        if (distance < 15) {
            setDisable(true)
        }
        var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((distance % (60 * 60)) / (60));
        var seconds = Math.floor((distance % (60)));

        setNumberOfTime({ hour: hours, min: minutes, sec: seconds })
        if (distance < 0) {

            setDate(date + 1)
            setNumberOfTime({ hour: "00", min: "00", sec: "00" })

            if (DownDate > 0 && jackInfo.status === false && reward && checker === DownDate) {
                setReward(false)
                setLoading2(false)
                setTimeout(() => {
                    setDate(date + 1)
                }, 13000)
                try {
                    const hash = await getUserApprove(ABI, contractAddress)
                } catch (err) {
                    setDate(date + 1)
                    setLoading2(true)
                }
            } else if (DownDate > 0 && jackInfo.status === false && reward) {
                setDisable(false)
            }
        }
    }

    useEffect(() => {
        Timing()
    }, [date])

    useEffect(() => {
        if (DownDate) {
            Timing2()
        }
    }, [refresh])


    setInterval(() => {
        setRefresh(!refresh)
    }, 1000)

    return (
        <>
            <Box className="time hour" cursor="pointer">
                <h2>{NumberOfTime.hour === "00" ? NumberOfTime.hour : NumberOfTime.hour < 10 ? `0${NumberOfTime.hour}` : NumberOfTime.hour}</h2>
                <p>Hour</p>
            </Box>
            <Box className="divide"></Box>
            <Box className="time min" cursor="pointer">
                <h2>{NumberOfTime.hour === "00" ? NumberOfTime.hour : NumberOfTime.min < 10 ? `0${NumberOfTime.min}` : NumberOfTime.min}</h2>
                <p>Min</p>
            </Box>
            <Box className="divide"></Box>
            <Box className="time sec" cursor="pointer">
                <h2>{NumberOfTime.hour === "00" ? NumberOfTime.hour : NumberOfTime.sec < 10 ? `0${NumberOfTime.sec}` : NumberOfTime.sec}</h2>
                <p>Sec</p>
            </Box>
        </>)
}
