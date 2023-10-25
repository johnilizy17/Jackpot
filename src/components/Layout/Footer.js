import Link from 'next/link';
import { Box, Center, Flex, IconButton } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { BsDiscord, BsFacebook, BsTelegram, BsTwitter } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';
import { readContract, readContracts } from '@wagmi/core'
import { contractAddress } from '@/services/NFT'
import ABI from '@/utils/ABI';
import { formatEther } from 'viem'

export default function Footer() {
    const [jackpotData, setJackpotData] = useState([])

    async function jackpotInfo() {
        try {
            const data = await readContracts({
                contracts: [{
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'bigBangMax',
                },
                {
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'jackpotWinnerPercent',
                },
                {
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'jackpotMarketingPercent',
                },
                {
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'jackpotPercent',
                },
                {
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'jackpotBigBangPercent',
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
                    functionName: 'getAllStakes',
                }
                ]
            })
            console.log(data)
            setJackpotData(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        jackpotInfo()
        console.log("here")
    }, [true])

    return (
        <div className="footer_container">
            <Box pos="absolute" top="0px" p="20px" zIndex="44" color="#fff" w="100vw">
                <Box fontSize="17px" fontWeight="800">
                    <Box mb="20px">JACKPOT INFO</Box>
                </Box>
                <Box>Participants: {jackpotData[8] && jackpotData[8].result && jackpotData[8].result.length}</Box>
                <Box>  Duration: 10 mins(Min Buy: ${jackpotData[5] && jackpotData[8].result && formatEther(jackpotData[5].result)})</Box>
                <Box> Duration: 2.5 mins(Max. Buy ${jackpotData[7] && jackpotData[8].result && formatEther(jackpotData[7].result)}) </Box>
                <Box mt="20px">
                    <Box>REWARD DISTRIBUTION</Box>
                    <Flex flexWrap="wrap" flexDir='column'>
                        <Box mr="10px" mt="10px">1. {jackpotData[1] && jackpotData[8].result && formatEther(jackpotData[1].result) * 1000000000000000000}% WINNER</Box>
                        <Box mr="10px" mt="10px">
                            2. {jackpotData[3] && jackpotData[8].result && formatEther(jackpotData[3].result) * 1000000000000000000}% NEXT NORMAL JACKPOT
                        </Box>
                        <Box mr="10px" mt="10px">2. 10% BIG JACKPOT</Box>
                        <Box mr="10px" mt="10px">3. {jackpotData[2] && jackpotData[8].result && formatEther(jackpotData[2].result) * 1000000000000000000}% MARKETING</Box>
                        <Box mr="10px" mt="10px">4. 10% BOMB PRIZ</Box>
                    </Flex>
                </Box>
            </Box>
            <footer class="footer">
                <div class="waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                    <div class="wave" id="wave4"></div>
                </div>
                <Center flexDir="column" mt="40px" color="#fff">
                    <Box fontWeight="800" fontSize="24px">FIND US ON SOCIAL</Box>
                    <Flex mt="10px">
        <Link href="https://twitter.com/Alpha365Finance">
                        <IconButton background="transparent" mr="5px">
                            <BsTwitter />
                        </IconButton>
        </Link>
        <Link href="https://t.me/alpha365official">
                        <IconButton background="transparent" mr="5px">
                            <BsTelegram />
                        </IconButton>
        </Link>
        <Link href="https://instagram.com/alpha365finance?igshid=MzNlNGNkZWQ4Mg==">
        <IconButton background="transparent" mr="5px">
                            <BsDiscord />
                        </IconButton>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100094498805790&mibextid=ZbWKwL">
        <IconButton background="transparent" mr="5px">
                            <BsFacebook />
                        </IconButton>
        </Link>
        </Flex>
              
        <Center flexWrap="wrap">
                   <Link href="/rule">
                        <Box mt="10px" mr="10px">
                            Rule
                        </Box>
        </Link>  
        <Link href="history">
        <Box mt="10px" mr="10px">
                            History
                        </Box>
        </Link>     
        
        <Link href="https://medium.com/@alpha365Official">
                            <Box mt="10px" mr="10px">
                                About us
                            </Box>
                        </Link>
                    </Center>
                </Center>
                <Box textAlign="center">  <p>&copy;2021 ALPHA | All Rights Reserved</p></Box>
            </footer>
        </div>
    )
}
