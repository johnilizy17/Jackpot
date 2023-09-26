import { Box, useToast } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Dashboard() {

    const [display, setDisplay] = useState({ sec: "00", min: "00", hour: "00" })
    const [time, setTime] = useState(3600)
    const toast = useToast()
    const [reducer, setReducer] = useState(0)

    function HourSetter(e) {
        const miner2 = e / 24
        const miner = Math.floor(miner2)
        const result = (miner * 24) - e
        if (result === 0) {
            return "00"
        } else if (Math.sign(result) === 1) {
            return result
        } else {
            return -1 * result
        }
    }

    function minSetter(e, a) {
        const miner2 = e / 60
        const miner = Math.ceil(miner2)
        const result = (miner * 60) - e
        if (result === 0) {
            return "00"
        } else if (Math.sign(result) === 1) {
            return (60 - result)
        } else {
            return -1 * result
        }
    }

    function secSetter(e, a) {
        const miner2 = e / 60
        const miner = miner2.toFixed(0)
        const result = (miner * 60) - e
        if (result === 0) {
            return "00"
        } else if (Math.sign(result) === 1) {
            return (60 - result)
        } else {
            return -1 * result
        }
    }

    function tester() {
        let hour = Math.floor(time / 3600)
        let min = Math.ceil(time / 60)
        let sec = time
        setDisplay({ hour: HourSetter(hour), min: minSetter(min, "min"), sec: secSetter(sec, "sec") })

        setTime(time - 1)
    }

    useEffect(() => {
        tester()
    }, [])

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
            const newTime = time - (reducer * 60)
            setTime(newTime)
            setReducer(10)
            toast({
                position: "top-right",
                description: `Time add 10 min added to the the time`,
                status: "success",
                isClosable: true,
            });
        } else if (e === "10") {
            const newTime = time - (reducer * 60)
            setTime(newTime)
            setReducer(5)
            toast({
                position: "top-right",
                description: `Time add 5 min added to the the time`,
                status: "success",
                isClosable: true,
            });
        } else {

            const newTime = time - (reducer * 60)
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
        <Box>
            <section className="page">
                <div className="body">
                    <div className="timer">
                        <div className="time hour">
                            <h2>{display.hour}</h2>
                            <p>Hour</p>
                        </div>
                        <div className="divide"></div>
                        <div className="time min">
                            <h2>{display.min}</h2>
                            <p>Min</p>
                        </div>
                        <div className="divide"></div>
                        <div className="time sec">
                            <h2>{display.sec}</h2>
                            <p>Sec</p>
                        </div>
                    </div>
                    <div className="view-swiper">
                        <div className="view view-minor"
                            style={{ transform: "scale(0.7, 0.7)", translate: "none", rotate: "none", scale: "none", zIndex: 0, opacity: 0 }}>
                            <h2 className="title">Minor</h2>
                            <div className="info">
                                <div className="card"><img src="../image/money_bag.png" alt="" />
                                    <div className="texts">
                                        <h4>Jackpot Entry</h4>
                                        <p>320 USDC</p>
                                    </div>
                                </div>
                                <div className="card"><img src="../image/trophie.png" alt="" />
                                    <div className="texts second">
                                        <h4>Current Award</h4>
                                        <p>334 USDC</p>
                                    </div>
                                </div>
                                <div className="card"><img src="../image/mesh.png" alt="" />
                                    <div className="texts">
                                        <h4>Information</h4>
                                        <p>Participants: 3121<br />Bets: 77</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="view view-big"
                            style={{ transform: "scale(0.7, 0.7)", translate: "none", rotate: "none", scale: "none", opacity: 0, zIndex: 0 }}>
                            <h2 className="title" style={{ color: "rgb(148, 144, 213)", backgroundColor: "rgb(31, 28, 74)" }}>BIG</h2>
                            <div className="info" style={{ backgroundColor: "rgb(46, 42, 111)" }}>
                                <div className="card"><img src="../image/money_bag.png" alt=""
                                    style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                                    <div className="texts"
                                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                                        <h4>Jackpot Entry</h4>
                                        <p>320 USDC</p>
                                    </div>
                                </div>
                                <div className="card"><img src="../image/trophie.png" alt=""
                                    style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                                    <div className="texts second"
                                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                                        <h4>Current Award</h4>
                                        <p>334 USDC</p>
                                    </div>
                                </div>
                                <div className="card"><img src="../image/mesh.png" alt=""
                                    style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                                    <div className="texts"
                                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                                        <h4>Information</h4>
                                        <p>Participants: 3121<br />Bets: 77</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="view game-over pictured view-gameover active"
                            style={{ transform: "translate(0px, 0px)", translate: "none", rotate: "none", scale: "none", opacity: 1, zIndex: 5 }}>
                            <h2 className="title">GAMEOVER</h2>
                            <div className="info"><img src="../image/coin_stack.png" alt="treasure chest" className="chest"
                                style={{ transform: "translate3d(0px, 0px, 0px) scale(1.0152, 1.0152)", translate: "none", rotate: "none", scale: "none" }} />
                                <div className="splash-text">
                                    <div
                                        style={{ translate: "none", rotate: "none", scale: "none", transform: "rotate(50deg) skew(-30deg, 0deg) scale(3, 3)", opacity: 0.1, top: "50%" }}>
                                        <p>You are out of</p>
                                    </div>
                                    <div className="prize-div"
                                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "skew(-30deg, 0deg)" }}>
                                        <p className="prize">LUCK!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="view bomb-mode view-bomb"
                            style={{ transform: "scale(0.7, 0.7)", translate: "none", rotate: "none", scale: "none", opacity: 0, zIndex: 0 }}>
                            <h2 className="title" style={{ color: "rgb(248, 200, 34)", backgroundColor: "rgb(148, 116, 5)" }}>BOMB 💥</h2><img
                                src="../image/alpha_bomb.png" alt="Alpha365 Bomb" className="alpha-bomb"
                                style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0%, 0%)" }} />
                            <div className="info" style={{ backgroundColor: "rgb(113, 93, 47)" }}>
                                <div className="card"><img src="../image/money_bag.png" alt=""
                                    style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                                    <div className="texts"
                                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                                        <h4>Jackpot Entry</h4>
                                        <p>320 USDC</p>
                                    </div>
                                </div>
                                <div className="card"><img src="../image/trophie.png" alt=""
                                    style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                                    <div className="texts second"
                                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                                        <h4>Current Award</h4>
                                        <p>334 USDC</p>
                                    </div>
                                </div>
                                <div className="card"><img src="../image/mesh.png" alt=""
                                    style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                                    <div className="texts"
                                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                                        <h4>Information</h4>
                                        <p>Participants: 3121<br />Bets: 77</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="view winner pictured view-win"
                            style={{ transform: "scale(0.7, 0.7)", translate: "none", rotate: "none", scale: "none", opacity: 0, zIndex: 0 }}>
                            <h2 className="title">CASHOUT</h2>
                            <div className="info"><img src="../image/treasure.svg" alt="treasure chest" className="chest"
                                style={{ translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) scale(1.0998, 1.0998)" }} />
                                <div className="splash-text">
                                    <div
                                        style={{ translate: "none", rotate: "none", scale: "none", transform: "rotate(50deg) skew(-30deg, 0deg) scale(5, 5)", opacity: 0.1, top: "50%" }}>
                                        <p>You Win</p>
                                    </div>
                                    <div className="prize-div"
                                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "skew(-30deg, 0deg)" }}>
                                        <p className="prize">2000 USDC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bomb-bar"><img src="../image/alpha_bomb.png" alt="" className="bang" />
                        <div className="progress-bar vertical">
                            <div className="bar" style={{ height: "54.596%" }}></div>
                        </div>
                    </div>
                    <div className="minor-bar">
                        <div className="labels">
                            <p>Normal</p>
                            <p>Big</p>
                        </div>
                        <div className="progress-bar ">
                            <div className="bar" style={{ width: "13.5803%" }}></div>
                        </div>
                    </div>
                    <div className="bets">
                        <div className="bet" id='5' onClick={() => SelectedButton("5")}>
                            <h2>$5</h2>
                            <div className="subinfo"><i className="material-icons-outlined">timer</i>
                                <p>10 min</p>
                            </div>
                        </div>
                        <div className="bet" id='10' onClick={() => SelectedButton("10")}>
                            <h2>$10</h2>
                            <div className="subinfo"><i className="material-icons-outlined">timer</i>
                                <p>5 min</p>
                            </div>
                        </div>
                        <div className="bet" id='20' onClick={() => SelectedButton("20")}>
                            <h2>$20</h2>
                            <div className="subinfo"><i className="material-icons-outlined">timer</i>
                                <p>2.5 min</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rules"><Link href="/rules">Rules</Link></div>
            </section>
        </Box>
    )
}