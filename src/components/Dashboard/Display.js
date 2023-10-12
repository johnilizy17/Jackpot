import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Display({data, getCurrentJackpotInfo, name}) {

    function cardTransition(id){
        var element2 = document.getElementById(id);
        // element2.d
    }

    return (
        <Box className="view-swiper">
            <Box className="view game-over pictured view-gameover active"  h="450px"
                style={name !== "start"? { transform: "scale(0.7, 0.7)", translate: "none", rotate: "none", scale: "none", opacity: 0, zIndex: 0 }:{ transform: "scale(0px, 0px)", translate: "none", rotate: "none", scale: "none", zIndex: 1, opacity: 5 }}>
                <h2 className="title">Minor</h2>
                <Box className="info" w={["100%", "600px"]}>
                    <Box display="flex"  w={["100%", "500px"]} h="70px" alignItems="center" p="20px" pt="10px" ><img style={{width:40, marginRight:40, height:40}} src="../image/money_bag.png" alt="" />
                        <Box className="texts" mt="20px">
                            <h4>Jackpot Entry</h4>
                            <p >{data[1]} USDC</p>
                        </Box>
                    </Box>
                    <Box display="flex"  w={["100%", "500px"]} h="70px" alignItems="center" p="20px" pt="10px" ><img style={{width:40, marginRight:40, height:40}} src="../image/trophie.png" alt="" />
                        <Box className="texts second" mt="20px">
                            <h4>Staked Amount</h4>
                            <p  className="blink_me" style={{color:"rgb(30, 240, 30)"}}>{data[0]} USDC</p>
                        </Box>
                    </Box>
                    <Box display="flex"  w={["100%", "500px"]} h="70px" alignItems="center" p="20px" pt="10px" ><img style={{width:40, marginRight:40, height:40}} src="../image/mesh.png" alt="" />
                        <Box className="texts" mt="20px">
                            <h4>Information</h4>
                            <p>Participants: {getCurrentJackpotInfo.length}<br />Bets: {getCurrentJackpotInfo.length}</p>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="view game-over pictured  view-gameover active" h="450px"
               style={name !== "loss"? { transform: "scale(0.7, 0.7)", translate: "none", rotate: "none", scale: "none", opacity: 0, zIndex: 0 }:{ transform: "scale(0px, 0px)", translate: "none", rotate: "none", scale: "none", zIndex: 1, opacity: 5 }}>
               <h2 className="title">GAMEOVER</h2>
                <Box className="info"  w="100%"><img src="../image/coin_stack.png" alt="treasure chest" className="chest popping"
                    style={{ transform: "translate3d(0px, 0px, 0px) scale(1.0152, 1.0152)", translate: "none", rotate: "none", scale: "none", width:200, height: 200 }} />
                    <Box className="splash-text" w={["100%", "600px"]}>
                        <Box  w="100%"
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
            <Box className="view game-over pictured view-gameover active" h="450px"
               style={name !== "win"? { transform: "scale(0.7, 0.7)", translate: "none", rotate: "none", scale: "none", opacity: 0, zIndex: 0 }:{ transform: "scale(0px, 0px)", translate: "none", rotate: "none", scale: "none", zIndex: 1, opacity: 5 }}>
               <h2 className="title">CASHOUT</h2>
                <Box className="info"  w="100%"><img src="../image/treasure.svg" alt="treasure chest" className="chest popping"
                    style={{ translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) scale(1.0998, 1.0998)", width:200, height:200 }} />
                    <Box  className="splash-text" w={["100%", "600px"]} >
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
