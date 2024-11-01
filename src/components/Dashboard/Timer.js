import { Box, Button, Center, IconButton, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { readContract, readContracts } from '@wagmi/core'
import { prepareWriteContract, writeContract, waitForTransaction } from '@wagmi/core'
import { contractAddress } from '@/services/NFT'
import ABI from '@/utils/ABI'
import { formatEther } from 'viem'
import { useAccount } from 'wagmi'

export default function TimeCounter({ setStartTimer, timeRefresh, name, startTimer, date, setName, setDate, setLoading2, setDisable, DownDate, setDownDate }) {

    const [timeSteamp, setTimeSteamp] = useState(0)
    const [timeStamp, setTimeStamp] = useState(0)
    const [refresh, setRefresh] = useState(false)
    const [NumberOfTime, setNumberOfTime] = useState({ hour: "00", min: "00", sec: "00" })
    const [DownDate2, setDownDate2] = useState(false);
    const [reward, setReward] = useState(true)
    const [checker, setChecker] = useState(0)
    const [winnerAddress, setWinnerAddress] = useState({jackpot:"", bomb:"", type:"2"})
    const [starting, setStarting] = useState(false)
    const [endDate, setEndDate] = useState(0)
    const [jackInfo, setJackInfo] = useState({ status: true })
    const { address } = useAccount()
    const toast = useToast();
    
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
            let currentTimestamp = await readContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'getCurretTimestamp',
            });
        
           // Find the distance between now and the count down date
           let now = formatEther(currentTimestamp) * 1000000000000000000

            var distance = startData - now ;
            setChecker(endData)
            const timingData = distance >= 1 ? startData : endData
          setEndDate(endData)
            if (distance >= 1) {
                setDisable(true)
                setStarting(true)
            }else{
                if(now<endData){
                    setDisable(false)
                }
             setStarting(false)
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
                
                let data3 = await readContract({
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'getAllBombWinnerInfo',
                })
     
                const exist = data.filter((a, b) => {
                    if (a.staker === address) {
                        return true
                    }
                })
                const numberExist = data.length - 1
                const sortData = data[numberExist]
                 const notify = localStorage.getItem(`${current}${contractAddress}`)
                 const currentBombNumber = formatEther(data3[data3.length - 1].jackpotId) * 1000000000000000000
                
                 const notify2 = localStorage.getItem(`${currentBombNumber}${contractAddress}${address}`)
                if (notify) {

                } else if (formatEther(data2[datalength].endTime) * 1000000000000000000 === 0 && exist) {
                   localStorage.setItem(`${current}${contractAddress}`, "true")
                    setLoading2(true)
                    setWinnerAddress({jackpot:data2[datalength - 1].winner, bomb: data3 && data3[data3.length - 1].winnerAddress? data3[data3.length - 1].winnerAddress:"", type: 1000000000000000000*formatEther(data[numberExist].jType)})
                    if (data2[datalength - 1].winner === address) {
                        setName("win")
                    } else {
                        setName("loss")
                    }
                    
                    if(notify2){
                        
                    } else if(data3[data3.length - 1].winnerAddress === address){
                      setWinnerAddress({jackpot:data2[datalength - 1].winner, bomb: data3 && data3[data3.length - 1].winnerAddress? data3[data3.length - 1].winnerAddress:"", type:1000000000000000000*formatEther(data[numberExist].jType) })
                       if(type === 1){
                        setName("bombwinner")
                       }
                        localStorage.setItem(`${currentBombNumber}${contractAddress}${address}`, "true")
                    }
                }
                
            }
        } catch (err) {
            console.log(err.message)
        }
        console.log(winnerAddress)
    }

    async function Timing2() {
        // Find the distance between now and the count down date
        let now = startTimer

        var distance = DownDate - now;
        // Time calculations for days, hours, minutes and seconds
        if (distance < 10) {
          setDisable(true)
        }
        if(distance < -1){
         setDisable(false)
        }
       console.log(distance)  
        var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((distance % (60 * 60)) / (60));
        var seconds = Math.floor((distance % (60)));
        const newTime = now + 1
        setStartTimer(newTime);
        setNumberOfTime({ hour: hours, min: minutes, sec: seconds })
        if (distance < 0) {

            setDate(date + 1)
            setNumberOfTime({ hour: "00", min: "00", sec: "00" })

            if (DownDate > 0 && endDate != 0 && jackInfo.status === false && reward && checker === DownDate) {
                setReward(false)
                setLoading2(false)
                setTimeout(() => {
                    setDate(date + 1)
                    setLoading2(true)
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
    }, [date, timeRefresh])

    
let DateObj = new Date();
 
    useEffect(() => {
 
    const d = new Date()
    let seconds = d.getSeconds()
    
   if(seconds != timeStamp && startTimer != 0){
      
    if (DownDate) {
        Timing2()
     }else{
        let now = startTimer
        const newTime = now + 1
        setStartTimer(newTime);
      setDisable(false)  
     }
        }
        setTimeStamp(seconds)
     setRefresh(!refresh)
    }, [refresh])
    
    return (
        <>
            <Center pos="fixed" top="0px"  left="0px" zIndex={winnerAddress.jackpot === ""?"-1":"3000"} opacity={winnerAddress.jackpot === ""? 0:5} w="100vw" h="100vh" bg="#e3cccc24">
                <Box
                    className="view game-over pictured view-gameover active" w="350px" h="300px" pos="relative"
                    style={{ transform: "scale(0px, 0px)", translate: "none", rotate: "none", scale: "none", zIndex: 1, opacity: 5 }}>
                    <h2 className="title">Winner</h2>

                    <Box className="info" w={["100%", "350px"]} pos="relative">
                        <Box w="30px" className="title" pos="aboslute" right="-120px" top="-100px" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                            </svg>
                        </Box>
                        <Box display="flex" w={["100%", "320px"]} mt="-50px" h="70px" alignItems="center" p="20px" pt="10px" >
                            <Box className="texts" mt="20px">
                                <h4> Jackpot Winner Wallet</h4>
                                <p className="blink_me" style={{ color: "rgb(30, 240, 30)", width: 300}} > {winnerAddress.jackpot}</p>
                            </Box>
                        </Box>
                        <Box display={winnerAddress.bomb === address && winnerAddress.bomb != "" && winnerAddress.type == 1? "flex" : "none"} w={["100%", "320px"]} h="70px" alignItems="center" p="20px" pt="10px" >
                            <Box className="texts second" mt="-10px">
                                <h4>Bomb Winner Wallet</h4>
                                <p style={{width:300}}>{winnerAddress.bomb === ""? "Winner in progress": winnerAddress.bomb}</p>
                            </Box>
                        </Box>
                        <Center mb="20px">
                            <Button onClick={()=>{
                        setWinnerAddress({jackpot:"", bomb:""})
                            }} colorScheme="green" h="40px" fontSize="12px" >
                                Play
                            </Button>
                        </Center>
                    </Box>
                </Box>
            </Center>
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
