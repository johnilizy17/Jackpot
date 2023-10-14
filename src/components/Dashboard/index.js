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
    const [jackpotData, setJackpotData] = useState([])
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
    const toast = useToast();

    const { isOpen, onOpen, onClose } = useDisclosure()

    async function jackpotInfo() {
        try {

            const data = await readContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'fetchJackpotInfo'

            })

            const bigBangBalance = await readContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'bigBangBalance'
            })
            const dataParse = data.map((a) => {
                return formatEther(a)
            })
            if (bigBangBalance) {
                setBigBang(dataParse[2] * 100000000000000000000 / 200)
                setBigBangPrice(formatEther(bigBangBalance))
            }
            setJackpotData(dataParse)

            const getjackpot = await readContract({
                address: contractAddress,
                abi: ABI,
                args: [dataParse[2] * 1000000000000000000],
                functionName: 'getCurrentJackpotInfo'
            })

            setGetCurrentJackpotInfo(getjackpot)

            const percentageStake = JSON.parse(dataParse[0]) * 10 / 1000

            setPercentage(`${percentageStake}%`)

        } catch (err) {

            toast({ position: "top-right", title: "Approved Error", description: err.message, status: "error", isClosable: true });

            console.log(err)
        }
    }

    useEffect(() => {
        setRefresh(!refresh)
        jackpotInfo()
    }, [date])

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
    }, [address, refresh])


    async function SelectedButton(e, a) {
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
            await CheckAllowance()
        } else {
            toast({ position: "top-right", title: "Disable", description: "Jackpot has been disabled untill the timer rans out", status: "error", isClosable: true });
        }
    }

    async function ApprovalButton() {
        try {
            setName("start")
            setLoading(true)
            const config = await prepareWriteContract({
                address: BUSD,
                abi: ABI_BUSD,
                args: [contractAddress, parseEther(amount)],
                functionName: 'approve',
                overrides: {
                    value: 0,
                    gas: 3010000
                }
            })

            const { hash } = await writeContract(config)

            setAllowed(amount)
            const timing = amount === 5 ? 10 : amount === 10 ? 5 : 2.5
            setDate(timing)
            toast({ position: "top-right", title: "Approved", description: "Approved successful", status: "success", isClosable: true });
            setMintApproval(true)
            setLoading(false)
        } catch (err) {
            toast({ position: "top-right", title: "Approved Error", description: err.message, status: "error", isClosable: true });

            setLoading(false)
        }
    }

    async function stakeButton() {
        try {

            setLoading(true)
            const config = await prepareWriteContract({
                address: contractAddress,
                abi: ABI,
                args: [parseEther(amount)],
                functionName: 'buyJackpot',
                overrides: {
                    value: 0,
                    gas:3010000
                }
            })

            const { hash } = await writeContract(config)
            setAllowed(amount)
            setDate(amount + 2)
            onClose()
            toast({ position: "top-right", title: "Stake", description: `Successfully stake ${amount} in price`, status: "success", isClosable: true });
            setMintApproval(false)
            setLoading(false)

        } catch (err) {
            toast({ position: "top-right", title: "Stake Error", description: err.message, status: "error", isClosable: true });

            setLoading(false)
        }
    }


    async function notification() {
        try {
            const data = await readContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'fetchJackpotInfo'
            })

            const dataParse = data.map((a) => {
                return formatEther(a)
            })
            const number = await readContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'bombMaxNum'
            })
            if (formatEther(number) * 1000000000000000000 === dataParse[2] * 1000000000000000000) {
                setName("bomb")
            }
            setJackpotData(dataParse)
            const getjackpot = await readContract({
                address: contractAddress,
                abi: ABI,
                args: [dataParse[2] * 1000000000000000000],
                functionName: 'getCurrentJackpotInfo'
            })
            const jackputNumber = getjackpot.length - 1
            getjackpot.map((a, b) => {
                if (a.staker !== address && b === jackputNumber) {
                    const notify = localStorage.getItem(`${dataParse[2]}${b}`)
                    if (!notify) {
                        localStorage.setItem(`${dataParse[2]}${b}`, a.staker)
                        setDate(date + 2)
                        toast({ position: "top-right", title: "Staked", description: `${a.staker} successfully staked $${formatEther(a.amountStaked)}`, status: "success", isClosable: true });
                    }
                }
            })
            setGetCurrentJackpotInfo(getjackpot)

            const percentageStake = JSON.parse(dataParse[0]) * 10 / 1000

            setPercentage(`${percentageStake}%`)
        } catch (error) {
            console.log(error)
        }
    }

    setInterval(() => {
        if (address) {
            notification()
        }
    }, 10000)


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
                            <TimeCounter date={date} setLoading2={setLoading2} setDisable={setDisable} setName={setName} setDate={setDate} />
                        </Box>
                        <Display data={jackpotData} bigBang={bigBangPrice} name={name} getCurrentJackpotInfo={getCurrentJackpotInfo} setName={setName} />
                        <Box className="bomb-bar" opacity={getCurrentJackpotInfo.length>0.1?1:0} h="450px"><img src="../image/alpha_bomb.png" alt="" className="bang" />
                            <Box className="progress-bar vertical">
                                <Box className="bar" style={{ height: `${bigBang}%` }}></Box>
                            </Box>
                            <Box color="#fff" fontSize="10px">
                            
                            </Box>
                        </Box>
                        <Box className="minor-bar">
                            <Box className="labels">
                                <p>Normal</p>
                                <p>${jackpotData[0] ? JSON.parse(jackpotData[0]).toFixed(2) : 0}/$10k</p>
                            </Box>
                            <Box className="progress-bar ">
                                <Box className="bar" style={{ width: percentage }}></Box>
                            </Box>
                        </Box>
                        <Box className="bets">
                            <Box className="bet" style={disable ? { background: "rgb(229 123 123)" } : {}} id='5' onClick={() => SelectedButton("5", jackpotData[3])}>
                                <h2>${jackpotData && jackpotData[3] && jackpotData[3]}</h2>
                                <Box className="subinfo"><i className="material-icons-outlined" style={{ fontSize:9}}>timer</i>
                                    <p>10 mins</p>
                                </Box>
                            </Box>
                            <Box className="bet" style={disable ? { background: "rgb(229 123 123)" } : {}} id='10' onClick={() => SelectedButton("10", jackpotData[9])}>
                                <h2>${jackpotData && jackpotData[9] && jackpotData[9]}</h2>
                                <Box className="subinfo"><i className="material-icons-outlined" style={{ fontSize:9}}>timer</i>
                                    <p>5 mins</p>
                                </Box>
                            </Box>
                            <Box className="bet" style={disable ? { background: "rgb(229 123 123)" } : {}} id='20' onClick={() => SelectedButton("20", jackpotData[10])}>
                                <h2>${jackpotData && jackpotData[10] && jackpotData[10]}</h2>
                                <Box className="subinfo"><i className="material-icons-outlined" style={{ fontSize:9}}>timer</i>
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
