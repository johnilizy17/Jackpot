import { Box, useToast, Flex, Center } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Footer from '../Layout/Footer'
import Presale from './Presale'

export default function DashboardDesktop() {

    const [display, setDisplay] = useState({ sec: "00", min: "00", hour: "00" })
    const [time, setTime] = useState(3600)
    const toast = useToast()
    function HourSetter(e) {
        const miner2 = e / 24
        const miner = Math.floor(miner2)
        const result = (miner*24) - e
        if (result === 0) {
            return "00"
        } else if(Math.sign(result) === 1) {    
            return   result
        } else {
           return -1*result
    }
    }

    function minSetter(e, a) {
        const miner2 = e / 60
        const miner = Math.ceil(miner2)
        const result = (miner*60) - e
        if (result === 0) {
            return "60"
        } else if(Math.sign(result) === 1) {    
            return  (60 - result)
        } else {
           return -1*result
    }
    }

    function secSetter(e, a) {
        const miner2 = e / 60
        const miner = miner2.toFixed(0)
        const result = (miner*60) - e
        if (result === 0) {
            return "00"
        } else if(Math.sign(result) === 1) {    
            return  (60 - result)
        } else {
           return -1*result
    }
}

    function tester() {
        let hour = Math.floor(time / 3600)
        let min = Math.ceil(time / 60)
        let sec = time
        setDisplay({ hour: HourSetter(hour), min: minSetter(min, "min"), sec: secSetter(sec, "sec") })

        setTime(time - 1)
    }

    useEffect(()=>{
        tester()
    },[])

    setInterval(() => {
        tester()
    }, 10000)


    function SelectedButton(e) {

        var element2 = document.getElementById("5");
        element2.style.background = ("#1f1c4a");

        var element3 = document.getElementById("10");
        element3.style.background = ("#1f1c4a");

        var element4 = document.getElementById("20");
        element4.style.background = ("#1f1c4a");

        var element = document.getElementById(e);
        element.style.background = ("#4D46B9");
        if (e === "5") {
            const newTime = time - (reducer * 60) + (10*60)
            setTime(newTime)
            setReducer(10)
            toast({
                position: "top-right",
                description: `Time add 10 min added to the the time`,
                status: "success",
                isClosable: true,
            });
        } else if (e === "10") {
            const newTime = time - (reducer * 60) + (5*60)
            setTime(newTime)
            setReducer(5)
            toast({
                position: "top-right",
                description: `Time add 5 min added to the the time`,
                status: "success",
                isClosable: true,
            });
        } else {

            const newTime = time - (reducer * 60) + (2.5*60)
            setTime(newTime)
            setReducer(2.5)
            toast({
                position: "top-right",
                description: `Time add 2.5 min added to the the time`,
                status: "success",
                isClosable: true,
            });
        }
    }


    return (
        <Box pt="90px" pos='relative'>
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
                        <Box className="time hour">
                            <h2>{display.hour}</h2>
                            <p>Hour</p>
                        </Box>
                        <Box className="divide"></Box>
                        <Box className="time min">
                            <h2>{display.min}</h2>
                            <p>Min</p>
                        </Box>
                        <Box className="divide"></Box>
                        <Box className="time sec">
                            <h2>{display.sec}</h2>
                            <p>Sec</p>
                        </Box>
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
                        {/* <Box className="view view-minor"
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
                        </Box> */}
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
                            <Box className="view game-over pictured view-gameover active" w="40%" h="calc(50vh - 100px)" pos="relative"
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
                            <Box className="bomb-bar" h="calc(50vh - 100px)"><img src="../image/alpha_bomb.png" alt="" className="bang" />
                                <Box className="progress-bar vertical">
                                    <Box className="bar" style={{ height: "54.596%" }}></Box>
                                </Box>
                            </Box>
                            <Box className="view game-over pictured view-gameover active" w="40%" h="calc(50vh - 100px)" pos="relative"
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
                            <Box className="bet" id='5' onClick={() => SelectedButton("5")}>
                                <h2>$5</h2>
                                <Box className="subinfo"><i className="material-icons-outlined">timer</i>
                                    <p>10 min</p>
                                </Box>
                            </Box>
                            <Box className="bet" id='10' onClick={() => SelectedButton("10")}>
                                <h2>$10</h2>
                                <Box className="subinfo"><i className="material-icons-outlined">timer</i>
                                    <p>5 min</p>
                                </Box>
                            </Box>
                            <Box className="bet" id='20' onClick={() => SelectedButton("20")}>
                                <h2>$20</h2>
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