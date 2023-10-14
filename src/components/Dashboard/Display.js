import { Box, Button, Flex } from '@chakra-ui/react';
import React from 'react';

export default function Display({ data, getCurrentJackpotInfo, name, setName, bigBang }) {

    function cardTransition(id) {
    }

    return (
        <Box className="view-swiper">
            <Box className="view game-over pictured view-gameover active" h="450px"
                style={name !== "start" ? { rotate: "none", scale: "none", opacity: 0, zIndex: 0 } : { transform: "scale(0px, 0px)", translate: "none", rotate: "none", scale: "none", zIndex: 1, opacity: 5 }}>
                <h2 className="title">Minor</h2>
                <Box className="info" w={["100%", "600px"]}>
                    <Box display="flex" w={["100%", "500px"]} h="70px" alignItems="center" p="20px" pt="10px" ><img style={{ width: 40, marginRight: 40, height: 40 }} src="../image/money_bag.png" alt="" />
                        <Box className="texts" mt="20px">
                            <h4>Big Bang Balance</h4>
                            <p >{(bigBang * 10).toFixed(2)} USDC</p>
                        </Box>
                    </Box>
                    <Box display="flex" w={["100%", "500px"]} h="70px" alignItems="center" p="20px" pt="10px" ><img style={{ width: 40, marginRight: 40, height: 40 }} src="../image/trophie.png" alt="" />
                        <Box className="texts second" mt="20px">
                            <h4>Jackpot Amount</h4>
                            <p className="blink_me" style={{ color: "rgb(30, 240, 30)" }}>{data[0] ? JSON.parse(data[0]).toFixed(2) : 0} USDC</p>
                        </Box>
                    </Box>
                    <Box display="flex" w={["100%", "500px"]} h="70px" alignItems="center" p="20px" pt="10px" ><img style={{ width: 40, marginRight: 40, height: 40 }} src="../image/mesh.png" alt="" />
                        <Box className="texts" mt="20px">
                            <h4>Information</h4>
                            <p>Participants: {getCurrentJackpotInfo.length}<br />Bets: {getCurrentJackpotInfo.length}</p>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="view bomb-mode view-bomb"
                style={name !== "bomb" ? { rotate: "none", scale: "none", opacity: 0, zIndex: 0 } : { transform: "scale(0px, 0px)", overflow:"hidden", translate: "none", rotate: "none", scale: "none", zIndex: 1, opacity: 5 }}>
                <h2 className="title" style={{ color: "rgb(248, 200, 34)", backgroundColor: "rgb(148, 116, 5)" }}>BOMB 💥</h2><img
                    src="../image/alpha_bomb.png" alt="Alpha365 Bomb" className="alpha-bomb bomb"
                    style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0%, 0%)" }} />
                <Box className="info" style={{ backgroundColor: "rgb(113, 93, 47)" }}>
                    <Box display="flex" w={["100%", "500px"]} h="70px" alignItems="center" p="20px" pt="10px" overflow="hidden"><img  src="../image/money_bag.png" alt=""
                        style={{ width: 40, marginRight: 40, height: 40 }} />
                        <Box className="texts"
                            style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                            <h4>Big Bang Balance</h4>
                            <p>{JSON.parse(bigBang).toFixed(2)} USDC</p>
                        </Box>
                    </Box>
                    <Box display="flex" w={["100%", "500px"]} h="70px" alignItems="center" p="20px" pt="10px" ><img  src="../image/trophie.png" alt=""
                        style={{ width: 40, marginRight: 40, height: 40 }} />
                        <Box className="texts second"
                            style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                            <h4>Jackpot Amount</h4>
                            <p className="blink_me" style={{ color: "rgb(30, 240, 30)" }}>{data[0] ? JSON.parse(data[0]).toFixed(2) : 0} USDC</p>
                        </Box>
                    </Box>
                    <Box display="flex" w={["100%", "500px"]} h="70px" alignItems="center" p="20px" pt="10px" ><img  src="../image/mesh.png" alt=""
                        style={{ width: 40, marginRight: 40, height: 40 }} />
                        <Box className="texts"
                            style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                            <h4>Information</h4>
                            <p>Participants: {getCurrentJackpotInfo.length}<br />Bets: {getCurrentJackpotInfo.length}</p>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box className="view game-over pictured  view-gameover active" h="450px"
                style={name !== "loss" ? { transform: "scale(0.7, 0.7)", translate: "none", rotate: "none", scale: "none", opacity: 0, zIndex: 0 } : { transform: "scale(0px, 0px)", translate: "none", rotate: "none", scale: "none", zIndex: 1, opacity: 5 }}>
                <h2 className="title" style={{ marginTop: -60 }}>GAMEOVER</h2>
                <Box className="info" style={{ top: "-40px", width: "140%", height: '500px' }}><img src="../image/coin_stack.png" alt="treasure chest" className="chest popping"
                    style={{ transform: "translate3d(0px, 0px, 0px) scale(1.0152, 1.0152)", translate: "none", rotate: "none", scale: "none", width: 200, height: 200 }} />
                    <Box className="splash-text" >
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
                <Flex mt="510px" w="140%" onClick={() => setName("start")}>
                    <Button color="#fff" bg="#F8C822" mr="20px">  Play Again </Button>
                </Flex>
            </Box>
            <Box className="view game-over pictured view-gameover active" h="450px"
                style={name !== "win" ? { transform: "scale(0.7, 0.7)", translate: "none", rotate: "none", scale: "none", opacity: 0, zIndex: 0 } : { transform: "scale(-0.2px, -0.2px)", translate: "none", rotate: "none", scale: "none", zIndex: 1, opacity: 5 }}>
                <h2 className="title" style={{ marginTop: -60 }}>CASHOUT</h2>
                <Flex mt="510px" w="140%">
                    <Button color="#fff" bg="#F8C822" mr="20px" onClick={() => setName('start')}>
                        Play Again </Button>
                </Flex>
                <Box className="info" style={{ top: "-40px", width: "140%", height: '500px' }}>
                    <img src="../image/treasure.svg" alt="treasure chest" className="chest popping"
                        style={{ translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) scale(1.0998, 1.0998)", width: 200, height: 200 }} />
                    <Box className="splash-text" >
                        <Box
                            style={{ translate: "none", rotate: "none", scale: "none", transform: "rotate(50deg) skew(-30deg, 0deg) scale(5, 5)", opacity: 0.1, top: "50%" }}>
                            <p>You Win</p>
                        </Box>
                        <Box className="prize-Box"
                            style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "skew(-30deg, 0deg)" }}>
                            <p className="prize">Jackpot Winner</p>
                        </Box>
                    </Box>
                </Box>

            </Box>

        </Box>
    )
}
