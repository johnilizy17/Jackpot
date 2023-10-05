import { Box, useToast, Flex, Center } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Presale from './Presale'
import TimeCounter from './Timer'
import Display from './Display'

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
                    <TimeCounter />
                    </div>
                    <Display/>
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
            </section>
        </Box>
    )
}