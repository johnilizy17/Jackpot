import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Display({data, getCurrentJackpotInfo}) {

    console.log(getCurrentJackpotInfo, data)
    function cardTransition(id){
        var element2 = document.getElementById(id);
        // element2.d
    }

    return (
        <Box className="view-swiper">
            <Box className="view game-over pictured view-gameover active" h="450px"
                style={{ transform: "scale(0px, 0px)", translate: "none", rotate: "none", scale: "none", zIndex: 1, opacity: 5 }}>
                <h2 className="title">Minor</h2>
                <Box className="info" w="100%">
                    <Box display="flex"  w="80vw" h="70px" alignItems="center" p="20px" pt="10px" ><img style={{width:40, marginRight:40, height:40}} src="../image/money_bag.png" alt="" />
                        <Box className="texts" mt="20px">
                            <h4>Jackpot Entry</h4>
                            <p>{data[1]} USDC</p>
                        </Box>
                    </Box>
                    <Box display="flex"  w="80vw" h="70px" alignItems="center" p="20px" pt="10px" ><img style={{width:40, marginRight:40, height:40}} src="../image/trophie.png" alt="" />
                        <Box className="texts second" mt="20px">
                            <h4>Staked Amount</h4>
                            <p className="blink_me">{data[0]} USDC</p>
                        </Box>
                    </Box>
                    <Box display="flex"  w="80vw" h="70px" alignItems="center" p="20px" pt="10px" ><img style={{width:40, marginRight:40, height:40}} src="../image/mesh.png" alt="" />
                        <Box className="texts" mt="20px">
                            <h4>Information</h4>
                            <p>Participants: {getCurrentJackpotInfo.length}<br />Bets: {getCurrentJackpotInfo.length}</p>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="view view-big"
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
            </Box>
            <Box className="view view-minor"
                style={{ transform: "translate(0px, 0px)", translate: "none", display:"none", rotate: "none", scale: "none", opacity: 1, zIndex: 5 }}>
                <h2 className="title">GAMEOVER</h2>
                <Box className="info"><img src="../image/coin_stack.png" alt="treasure chest" className="chest"
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
            <Box className="view bomb-mode view-bomb"
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
            </Box>
        </Box>
    )
}