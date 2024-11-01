import { Box, useToast, Flex, Center, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Spinner } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Footer from '../Layout/Footer'
import Presale from './Presale'
import { readContract, readContracts } from '@wagmi/core'
import { BUSD, contractAddress } from '@/services/NFT'
import ABI from '@/utils/ABI'
import { formatEther, parseEther } from 'viem'
import TimeCounter from './Timer'
import { prepareWriteContract, writeContract, waitForTransaction } from '@wagmi/core'
import ABI_BUSD from '@/utils/ABI_BUSD'
import { useAccount } from 'wagmi'
import Display from './Display'

export default function DashboardDesktop() {

    const [display, setDisplay] = useState({ sec: "00", min: "00", hour: "00" })
    const [time, setTime] = useState(3600)
    const [BigPercentage, setBigPercentage] = useState(0)
    const [jackpotData, setJackpotData] = useState([])
    const [value, setValue] = useState([0, 0])
    const [mintApproval, setMintApproval] = useState(false)
    const [allowed, setAllowed] = useState(0)
    const [percentage, setPercentage] = useState(0)
    const [date, setDate] = useState(0);
    const [refresh, setRefresh] = useState(false)
    const { address } = useAccount()
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("start");
    const [getCurrentJackpotInfo, setGetCurrentJackpotInfo] = useState([]);
    const [amount, setAmount] = useState(false);
    const [loading2, setLoading2] = useState(true);
    const [bigBang, setBigBang] = useState(0)
    const [bigBangPrice, setBigBangPrice] = useState(0)
    const [disable, setDisable] = useState(false);
    const [type, setType] = useState(1)
    const [stake, setStake] = useState("Jackpot has not start")
    const [DownDate, setDownDate] = useState();
    const [timeRefresh, setTimeRefresh] = useState(false)
    const [minuterSetter, setminuterSetter] = useState(0)
    const [startTimer, setStartTimer] = useState(0)
    const [timeStamp, setTimeStamp] = useState(false)
    const [disableRefresher, setDisableRefresher] = useState(true)
    const [tracker, setTracker] = useState(56)
    const [disabledTime, setDisabledTime] = useState(true)
   const [alertDisabled, setAlertDisabled] = useState(true)
    const toast = useToast();

    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        if (disable && alertDisabled) {
            toast({ position: "top-right", title: "Stake button disactivate Error", description: "All button is deactivated for the now", status: "error", isClosable: true });
        }
    }, [disable])

    async function jackpotInfo() {
        try {

            const data = await readContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'fetchJackpotInfo'
            })

            const jackpotType = await readContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'jackpotType'

            })

            setType(formatEther(jackpotType) * 1000000000000000000)

            const bigBangBalance = await readContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'bigBangBalance'
            })
            const bombBalance = await readContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'bombBalance'
            })

            const normalBalance = await readContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'normalBalance'
            })

            const dataParse = data.map((a) => {
                return formatEther(a)
            })
            const numberSetting = dataParse[2] * 1000000000000000000
            const id = numberSetting.toFixed(0)
            const number = await readContract({
                address: contractAddress,
                abi: ABI,
                args: [id],
                functionName: 'fetchJackpotBal'
            })
            
            const data2 = await readContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'fetchJackpotInfo'
            })
            if (bigBangBalance && type === 1) {
                const bigCurrentPercentage = JSON.parse(formatEther(bombBalance)) 
                setBigBang(bigCurrentPercentage)
                const bombCurrentPercentage = JSON.parse(formatEther(bigBangBalance))
                setBigBangPrice(bombCurrentPercentage)
                const percentageStake = bombCurrentPercentage * 100 / formatEther(number[6]) * 1
                setPercentage(percentageStake)
            } else if (type != 1) {
                setBigBang(0)
                const bombCurrentPercentage = JSON.parse(formatEther(normalBalance))
                setBigBangPrice(bombCurrentPercentage)
                const percentageStake = bombCurrentPercentage * 100 / formatEther(number[6]) * 1
                setPercentage(percentageStake)
            }
            setJackpotData(dataParse)

            const getjackpot = await readContract({
                address: contractAddress,
                abi: ABI,
                args: [id],
                functionName: 'getCurrentJackpotInfo'
            })

            setGetCurrentJackpotInfo(getjackpot)



        } catch (err) {

            //   toast({ position: "top-right", title: "Approved Error", description: err.message, status: "error", isClosable: true });

            console.log(err)
        }
    }

    async function currentTimer() {

        let currentTimestamp = await readContract({
            address: contractAddress,
            abi: ABI,
            functionName: 'getCurretTimestamp',
        });

        // Find the distance between now and the count down date
        let now = formatEther(currentTimestamp) * 1000000000000000000

        setStartTimer(now)

    }

    useEffect(() => {
        currentTimer()
    }, [])
    useEffect(() => {
        jackpotInfo()
    }, [date, address, timeRefresh])

    async function CheckAllowance() {

        const allow = await readContract({
            address: BUSD,
            abi: ABI_BUSD,
            args: [address, contractAddress],
            functionName: 'allowance',
        })
        setAllowed(formatEther(allow))
    }

    useEffect(() => {
        if (address) {
            CheckAllowance()
        }
    }, [address])


    async function SelectedButton(e, a) {
        await CheckAllowance()
        if (!disable) {
            var element2 = document.getElementById("5");
            element2.style.background = ("#1f1c4a");

            var element3 = document.getElementById("10");
            element3.style.background = ("#1f1c4a");

            var element4 = document.getElementById("20");
            element4.style.background = ("#1f1c4a");

            var element = document.getElementById(e);
            element.style.background = ("#4D46B9");
            setAmount(a)
            if (formatEther(allowed) >= formatEther(a)) {
                setMintApproval(true)
            } else {
                setMintApproval(false)
            }
            onOpen()
        } else {
            toast({ position: "top-right", title: "Disable", description: "Jackpot has been disabled untill the timer rans out", status: "error", isClosable: true });
        }
    }

    async function ApprovalButton() {
        try {
            
            setName("start")
            setLoading(true)
            setAlertDisabled(false)
            const config = await prepareWriteContract({
                address: BUSD,
                abi: ABI_BUSD,
                args: [contractAddress, parseEther(amount)],
                functionName: 'approve',
                overrides: {
                    value: 0,
                    gas: 3090000
                }
            })

            const { hash } = await writeContract(config)

            setAllowed(amount)
            const timing = amount == 5 ? 567 : amount == 10 ? 267 : 147
            setminuterSetter(timing)
            setDate(timing)
          setTimeout(()=>{
            toast({ position: "top-right", title: "Approved", description: "Approved successful", status: "success", isClosable: true });
            setMintApproval(true)
            setLoading(false)
           setDisabledTime(false)
          },2000)
        } catch (err) {
            toast({ position: "top-right", title: "Approved Error", description: "Approval error try again", status: "error", isClosable: true });
            setLoading(false)
        }
    }

    async function stakeButton() {
        try {
         setAlertDisabled(false)
            setLoading(true)
            const config = await prepareWriteContract({
                address: contractAddress,
                abi: ABI,
                args: [parseEther(amount)],
                functionName: 'buyJackpot',
                overrides: {
                    value: 0,
                    gas: 3090000
                }
            })
         
            const { hash } = await writeContract(config)
            setAllowed(amount)
            // Find the distance between now and the count down date
            if (hash) {
                let now = startTimer

                setStartTimer(now)

                setDownDate(now + minuterSetter);
            }
            setDisableRefresher(false)
            setTimeout(() => {
                jackpotInfo()
                notification()
            }, 900)
            setDisabledTime(false)
            setTimeout(()=>{
                setAlertDisabled(true)
                setDisabledTime(true);
            },12000)
            
            currentTimer()
            onClose()
            toast({ position: "top-right", title: "Stake", description: `Successfully stake ${amount} in price`, status: "success", isClosable: true });
            setMintApproval(false)
            setLoading(false)

        } catch (err) {
            toast({ position: "top-right", title: "Stake Error", description: "approval is processing give it some seconds", status: "error", isClosable: true });
            onClose()
            setLoading(false)
        }
    }


    async function notification() {
        try {
            if(disabledTime){
            currentTimer()
            setTimeRefresh(!timeRefresh)
            }
                await jackpotInfo();
            const data = await readContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'fetchJackpotInfo'
            })

            const dataParse = data.map((a) => {
                return formatEther(a)
            })
            const numberSetting = dataParse[2] * 1000000000000000000
            const id = numberSetting.toFixed(0)

            const number = await readContract({
                address: contractAddress,
                abi: ABI,
                args: [id],
                functionName: 'fetchJackpotBal'
            })

            const pec = formatEther(number[5]) * 1000000000000000000
            const divider = formatEther(number[4]) * 1000000000000000000
            if (type === 1) {
                setBigPercentage(pec * 100 / divider)
            } else {
                setBigPercentage(0)
            }
            if (type == 1 && formatEther(number[4]) * 1000000000000000000 <= formatEther(number[5]) * 1000000000000000000) {
                setName("bomb")
            }
            setJackpotData(dataParse)
            const getjackpot = await readContract({
                address: contractAddress,
                abi: ABI,
                args: [id],
                functionName: 'getCurrentJackpotInfo'
            })

            const jackputNumber = getjackpot.length - 1
            getjackpot.map((a, b) => {
                if (b === jackputNumber) {
                    const notify = localStorage.getItem(`${dataParse[2]}${b}`)
                    if (!notify) {
                        localStorage.setItem(`${dataParse[2]}${b}`, a.staker)
                        if (a.staker !== address) {
                            toast({ position: "top-right", title: "Staked", description: `${a.staker} successfully staked $${formatEther(a.amountStaked)}`, status: "success", isClosable: true });
                        }
                    }
                }
            })
            setGetCurrentJackpotInfo(getjackpot)
            setValue([formatEther(number[1]), formatEther(number[6])])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const d = new Date()
        let seconds = d.getSeconds()
        let tenTimer = seconds / 10
        const digimal = tenTimer.toFixed(0)
        if (digimal != tracker) {
            CheckAllowance()
            notification()
        }
        setTracker(digimal)
        setTimeStamp(!timeStamp)

    }, [timeStamp])

    useEffect(() => {
        notification()
    }, [])

    return (
        <>
            <Center pos="fixed" zIndex="3000" display={loading2 ? "none" : "fixed"} bg="#2b202036" left="0px" top="0px" h="100vh" w="100vw" >
                < Spinner size="xl" color="#fff" />
            </Center>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Stake your Jackpot</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody textAlign="center" mb="20px">
                        Buy a stake with ease
                    </ModalBody>

                    <ModalFooter display="flex" justifyContent="space-between">
                        <Button colorScheme='blue' isDisabled={mintApproval} isLoading={loading && !mintApproval} mr={3} onClick={() => ApprovalButton()}>
                            Approval
                        </Button>
                        <Button colorScheme='green' isDisabled={!mintApproval} isLoading={loading && mintApproval} onClick={() => stakeButton()}>Stake</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Box>
                <section className="page">
                    <Box className="body">
                        <Box className="timer">
                            <TimeCounter setStartTimer={setStartTimer} name={type} startTimer={startTimer} timeRefresh={timeRefresh} date={date} DownDate={DownDate} setDownDate={setDownDate} setLoading2={setLoading2} setDisable={setDisable} setName={setName} setDate={setDate} type={type} />
                        </Box>

                        <Display data={jackpotData} bigBang={bigBang} name={name} getCurrentJackpotInfo={getCurrentJackpotInfo} setName={setName} type={type} staker={stake} />

                        <Box className="bomb-bar" h="550px"><img src="../image/alpha_bomb.png" alt="" className="bang" />
                            <Box className="progress-bar vertical">
                                <Box className="bar" style={{ height: `${BigPercentage > 99 ? 100 : BigPercentage}%` }}></Box>
                            </Box>
                            <Box color="#fff" fontSize="10px">

                            </Box>
                        </Box>
                        <Box className="minor-bar">
                            <Box className="labels">
                                <p>{type === 1 ? "Big Bang" : "Minor"}</p>
                                <p>${type === 1 ? `${bigBangPrice.toFixed(2)}/$${value[1]}` : bigBangPrice.toFixed(2)}</p>
                            </Box>
                            <Box className="progress-bar " style={{ overflow: "hidden" }}>
                                <Box className="bar" style={percentage > 100 ? { width: `100%` } : type != 1 ? { width: `100%` } : { width: `${percentage}%` }}></Box>
                            </Box>
                        </Box>
                        <Box className="bets">
                            <Box className="bet" style={disable ? { background: "rgb(229 123 123)" } : {}} id='5' onClick={() => SelectedButton("5", jackpotData[3])}>
                                <h2>${jackpotData && jackpotData[3] && jackpotData[3]}</h2>
                                <Box className="subinfo"><i className="material-icons-outlined" style={{ fontSize: 9 }}>timer</i>
                                    <p>10 mins</p>
                                </Box>
                            </Box>
                            <Box className="bet" style={disable ? { background: "rgb(229 123 123)" } : {}} id='10' onClick={() => SelectedButton("10", jackpotData[9])}>
                                <h2>${jackpotData && jackpotData[9] && jackpotData[9]}</h2>
                                <Box className="subinfo"><i className="material-icons-outlined" style={{ fontSize: 9 }}>timer</i>
                                    <p>5 mins</p>
                                </Box>
                            </Box>
                            <Box className="bet" style={disable ? { background: "rgb(229 123 123)" } : {}} id='20' onClick={() => SelectedButton("20", jackpotData[10])}>
                                <h2>${jackpotData && jackpotData[10] && jackpotData[10]}</h2>
                                <Box className="subinfo"><i className="material-icons-outlined" style={{ fontSize: 9 }}>timer</i>
                                    <p>2.5 mins</p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </section>
            </Box>
        </>
    )
}
