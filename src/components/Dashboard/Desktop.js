import { Box, useToast, Flex, Center, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Footer from '../Layout/Footer'
import Presale from './Presale'
import { readContract, readContracts } from '@wagmi/core'
import { BUSD, contractAddress } from '@/services/NFT'
import ABI from '@/utils/ABI'
import { formatEther, parseEther } from 'viem'
import TimeCounter from './Timer'
import { prepareWriteContract, writeContract } from '@wagmi/core'
import ABI_BUSD from '@/utils/ABI_BUSD'
import { useAccount } from 'wagmi'

export default function DashboardDesktop() {

    const [display, setDisplay] = useState({ sec: "00", min: "00", hour: "00" })
    const [time, setTime] = useState(3600)
    const [jackpotData, setJackpotData] = useState([])
    const [mintApproval, setMintApproval] = useState(false)
    const [allowed, setAllowed] = useState(0)
    const { address } = useAccount()
    const [loading, setLoading] = useState(false)
    const [amount, setAmount] = useState(false)
    const toast = useToast()

    const { isOpen, onOpen, onClose } = useDisclosure()

    async function jackpotInfo() {
        try {
            const data = await readContracts({
                contracts: [{
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'fetchJackpotInfo',
                },
                {
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'startingJackpot',
                },
                {
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'minStake',
                },
                {
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'jackpotMaxBalance',
                },
                {
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'jackpotMarketingPercent',
                },
                {
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'minStake',
                },
                {
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'minStake1',
                },
                {
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'minStake2',
                },
                {
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'jackpotType',
                },
                {
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'minStake2',
                }
                ]
            })
            setJackpotData(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        jackpotInfo()
    }, [])

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
        CheckAllowance()
    }, [])


    function SelectedButton(e, a) {

        var element2 = document.getElementById("6");
        element2.style.background = ("#1f1c4a");

        var element3 = document.getElementById("11");
        element3.style.background = ("#1f1c4a");

        var element4 = document.getElementById("21");
        element4.style.background = ("#1f1c4a");

        var element = document.getElementById(e);
        element.style.background = ("#4D46B9");
        setAmount(a)
         if (formatEther(allowed) >= formatEther(a)) {
            setMintApproval(true)
            console.log("allowed")
        }else{
            setMintApproval(false)
            console.log("allowed 2")
        }
        onOpen()
       
        // if (e === "6") {
        //     toast({
        //         position: "top-right",
        //         description: `Time add 10 min added to the the time`,
        //         status: "success",
        //         isClosable: true,
        //     });
        // } else if (e === "11") {
        //     toast({
        //         position: "top-right",
        //         description: `Time add 5 min added to the the time`,
        //         status: "success",
        //         isClosable: true,
        //     });
        // } else {

        //     toast({
        //         position: "top-right",
        //         description: `Time add 2.5 min added to the the time`,
        //         status: "success",
        //         isClosable: true,
        //     });
        // }
    }

    async function ApprovalButton() {
        try {

            setLoading(true)
            const config = await prepareWriteContract({
                address: BUSD,
                abi: ABI_BUSD,
                args: [contractAddress, parseEther(amount)],
                functionName: 'approve',
                overrides: {
                    value: 0,
                    gasLimit: 3010000
                }
            })

            const { hash } = await writeContract(config)
            toast({ position: "top-right", title: "Approved", description: "Approved successful", status: "success", isClosable: true });
            setMintApproval(true)
            setLoading(false)
        } catch (err) {
            toast({ position: "top-right", title: "Approved Error", description: err.message, status: "error", isClosable: true });

            setLoading(false)
        }
    }




    return (
        <Box pt="90px" pos='relative'>

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
                        <Button colorScheme='green' isDisabled={!mintApproval} isLoading={loading && mintApproval}>Stake</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <section>
                <Flex p="20px" justifyContent="space-between" alignItems="center">
                    <Box className="minor-bar" w="350px" h="60px">
                        <Box className="labels">
                            <p>Normal</p>
                            <p>$1000</p>
                        </Box>
                        <Box className="progress-bar ">
                            <Box className="bar" style={{ width: "13.5803%" }}></Box>
                        </Box>
                    </Box>
                    <Box className="timer" w="400px" h="7.2rem">
                        <TimeCounter />
                    </Box>
                    <Box className="minor-bar" w="350px" h="60px" >
                        <Box className="labels">
                            <p>Big</p>
                            <p>$10,000</p>
                        </Box>
                        <Box className="progress-bar ">
                            <Box className="bar" style={{ width: "13.5803%" }}></Box>
                        </Box>
                    </Box>
                </Flex>
                <Box className="body">
                    <Box p="20px">
                        <Box className="view view-minor"
                            style={{ transform: "scale(0.7, 0.7)", translate: "none", rotate: "none", scale: "none", zIndex: 0, opacity: 0 }}>
                            <h2 className="title">Minor</h2>
                            <Box className="info">
                                <Box className="card"><img src="../image/money_bag.png" alt="" />
                                    <Box className="texts">
                                        <h4>Jackpot Entry</h4>
                                        <p>320 USDC</p>
                                    </Box>
                                </Box>
                                <Box className="card"><img src="../image/trophie.png" alt="" />
                                    <Box className="texts second">
                                        <h4>Current Award</h4>
                                        <p>334 USDC</p>
                                    </Box>
                                </Box>
                                <Box className="card"><img src="../image/mesh.png" alt="" />
                                    <Box className="texts">
                                        <h4>Information</h4>
                                        <p>Participants: 3121<br />Bets: 77</p>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        {/* <Box className="view view-big"
                            style={{ transform: "scale(0.7, 0.7)", translate: "none", rotate: "none", scale: "none", opacity: 0, zIndex: 0 }}>
                            <h2 className="title" style={{ color: "rgb(148, 144, 213)", backgroundColor: "rgb(31, 28, 74)" }}>BIG</h2>
                            <Box className="info" style={{ backgroundColor: "rgb(46, 42, 111)" }}>
                                <Box className="card"><img src="../image/money_bag.png" alt=""
                                    style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                                    <Box className="texts"
                                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                                        <h4>Jackpot Entry</h4>
                                        <p>320 USDC</p>
                                    </Box>
                                </Box>
                                <Box className="card"><img src="../image/trophie.png" alt=""
                                    style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                                    <Box className="texts second"
                                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                                        <h4>Current Award</h4>
                                        <p>334 USDC</p>
                                    </Box>
                                </Box>
                                <Box className="card"><img src="../image/mesh.png" alt=""
                                    style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                                    <Box className="texts"
                                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                                        <h4>Information</h4>
                                        <p>Participants: 3121<br />Bets: 77</p>
                                    </Box>
                                </Box>
                            </Box>
                        </Box> */}
                        <Flex justifyContent="space-between">
                            <Box className="view game-over pictured view-gameover active" w="45%" h="calc(80vh - 100px)" pos="relative"
                                style={{ transform: "translate(0px, 0px)", translate: "none", rotate: "none", scale: "none", opacity: 1, zIndex: 5 }}>
                                <h2 className="title">Minor</h2>
                                <Box className="info"><img src="../image/treasure.svg" alt="treasure chest" className="chest"
                                    style={{ translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) scale(1.0998, 1.0998)" }} />
                                    <Box className="splash-text">
                                        <Box
                                            style={{ translate: "none", rotate: "none", scale: "none", transform: "rotate(50deg) skew(-30deg, 0deg) scale(5, 5)", opacity: 0.1, top: "50%" }}>
                                            <p>You Win</p>
                                        </Box>
                                        <Box className="prize-Box"
                                            style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "skew(-30deg, 0deg)" }}>
                                            <p className="prize">2000 USDC</p>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="bomb-bar" h="calc( 60vh - 100px)"><img src="../image/alpha_bomb.png" alt="" className="bang" />
                                <Box className="progress-bar vertical">
                                    <Box className="bar" style={{ height: "54.596%" }}></Box>
                                </Box>
                            </Box>
                            <Box className="view game-over pictured view-gameover active" w="45%" h="calc(80vh - 100px)" pos="relative"
                                style={{ transform: "translate(0px, 0px)", translate: "none", rotate: "none", scale: "none", opacity: 1, zIndex: 5 }}>
                                <h2 className="title">GAMEOVER</h2>
                                <Box className="info" borderRadius="1rem"><img src="../image/coin_stack.png" alt="treasure chest" className="chest"
                                    style={{ transform: "translate3d(0px, 0px, 0px) scale(1.0152, 1.0152)", translate: "none", rotate: "none", scale: "none" }} />
                                    <Box className="splash-text">
                                        <Box
                                            style={{ translate: "none", rotate: "none", scale: "none", transform: "rotate(50deg) skew(-30deg, 0deg) scale(3, 3)", opacity: 0.1, top: "50%" }}>
                                            <p>You are out of</p>
                                        </Box>
                                        <Box className="prize-Box"
                                            style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "skew(-30deg, 0deg)" }}>
                                            <p className="prize">LUCK!</p>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Flex>
                        {/* <Box className="view bomb-mode view-bomb"
                            style={{ transform: "scale(0.7, 0.7)", translate: "none", rotate: "none", scale: "none", opacity: 0, zIndex: 0 }}>
                            <h2 className="title" style={{ color: "rgb(248, 200, 34)", backgroundColor: "rgb(148, 116, 5)" }}>BOMB 💥</h2><img
                                src="../image/alpha_bomb.png" alt="Alpha365 Bomb" className="alpha-bomb"
                                style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0%, 0%)" }} />
                            <Box className="info" style={{ backgroundColor: "rgb(113, 93, 47)" }}>
                                <Box className="card"><img src="../image/money_bag.png" alt=""
                                    style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                                    <Box className="texts"
                                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                                        <h4>Jackpot Entry</h4>
                                        <p>320 USDC</p>
                                    </Box>
                                </Box>
                                <Box className="card"><img src="../image/trophie.png" alt=""
                                    style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                                    <Box className="texts second"
                                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                                        <h4>Current Award</h4>
                                        <p>334 USDC</p>
                                    </Box>
                                </Box>
                                <Box className="card"><img src="../image/mesh.png" alt=""
                                    style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                                    <Box className="texts"
                                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                                        <h4>Information</h4>
                                        <p>Participants: 3121<br />Bets: 77</p>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="view winner pictured view-win"
                            style={{ transform: "scale(0.7, 0.7)", translate: "none", rotate: "none", scale: "none", opacity: 0, zIndex: 0 }}>
                            <h2 className="title">CASHOUT</h2>
                            <Box className="info"><img src="../image/treasure.svg" alt="treasure chest" className="chest"
                                style={{ translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) scale(1.0998, 1.0998)" }} />
                                <Box className="splash-text">
                                    <Box
                                        style={{ translate: "none", rotate: "none", scale: "none", transform: "rotate(50deg) skew(-30deg, 0deg) scale(5, 5)", opacity: 0.1, top: "50%" }}>
                                        <p>You Win</p>
                                    </Box>
                                    <Box className="prize-Box"
                                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "skew(-30deg, 0deg)" }}>
                                        <p className="prize">2000 USDC</p>
                                    </Box>
                                </Box>
                            </Box>
                        </Box> */}
                    </Box>


                    <Center w="100vw" p="80px">
                        <Box className="bets" w="400px" h="7.2rem" pos="absolute" bottom="50px">
                            <Box className="bet" id='6' onClick={() => SelectedButton("6", formatEther(jackpotData[5].result))}>
                                <h2>${jackpotData[5] && formatEther(jackpotData[5].result)}</h2>
                                <Box className="subinfo"><i className="material-icons-outlined">timer</i>
                                    <p>10 min</p>
                                </Box>
                            </Box>
                            <Box className="bet" id='11' onClick={() => SelectedButton("11", formatEther(jackpotData[6].result))}>
                                <h2>${jackpotData[6] && formatEther(jackpotData[6].result)}</h2>
                                <Box className="subinfo"><i className="material-icons-outlined">timer</i>
                                    <p>5 min</p>
                                </Box>
                            </Box>
                            <Box className="bet" id='21' onClick={() => SelectedButton("21", formatEther(jackpotData[7].result))}>
                                <h2>${jackpotData[7] && formatEther(jackpotData[7].result)}</h2>
                                <Box className="subinfo"><i className="material-icons-outlined">timer</i>
                                    <p>2.5 min</p>
                                </Box>
                            </Box>
                        </Box>
                    </Center>
                </Box>
            </section>
        </Box>
    )
}