import { Box, Center, Flex, IconButton } from '@chakra-ui/react';
import React from 'react';
import { BsDiscord, BsFacebook, BsTelegram, BsTwitter } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';
import Link from 'next/link';

export default function Presale() {

    return (
        <Box mt="30px" color="#fff" m="20px" mt="0px" p="20px" borderRadius="16px" background="#1f1c4a" >
            <Box mt='20px'>
                <Box fontSize="17px" fontWeight="800">
                    <Box mb="20px">JACKPOT INFO</Box>
                </Box>
                <Box>
                    <Box>REWARD DISTRIBUTION</Box>
                    <Box>JACKPOT BALANCE</Box>
                </Box>
                <Box mt="10px">
                    <Box>NORMAL JACKPOTS(Normal jackpots are jackpots that have 20% of
                        the previous jackpot as the starting pot)</Box>
                    <Box>20%</Box>
                </Box>
                <Box mt="10px">
                    <Box>TYPE OF JACKPOT</Box>
                    <Box>1. 5$ with a 10-minute timer</Box>
                    <Box>2. 10$ with 5-minute timer</Box>
                    <Box> 3. 20$ with 2.5 minute timer
                    </Box>
                </Box>

                <Box mt="10px">
                    <Box>NORMAL JACKTOP is WON</Box>
                    <Box>12H</Box>
                </Box>
                <Box mt="10px">
                    <Box>DIVISION OF PRIZES:</Box>
                    <Box>50% WINNER</Box>
                    <Box>
                        20% NEXT NORMAL JACKPOT
                    </Box>
                    <Box>20% BIG JACKPOT</Box>
                    <Box>5% MARKETING</Box>
                    <Box>5% BOMB PRIZ</Box>
                </Box>
                <Center flexDir="column" mt="40px">
                    <Box fontWeight="800" fontSize="24px">FIND US ON SOCIAL</Box>
                    <Flex mt="10px">
                        <IconButton background="transparent" mr="5px">
                            <BsTwitter />
                        </IconButton>
                        <IconButton background="transparent" mr="5px">
                            <BsTelegram />
                        </IconButton>
                        <IconButton background="transparent" mr="5px">
                            <BsDiscord />
                        </IconButton>
                        <IconButton background="transparent" mr="5px">
                            <BsFacebook />
                        </IconButton>
                    </Flex>
                    <Box mt="30px">
                        Features
                    </Box>
                    <Box mt="10px">
                        How it works
                    </Box>
                    <Box mt="10px">
                        Token info
                    </Box>
                    <Link href="/about">
                        <Box mt="10px">
                            About us
                        </Box>
                    </Link>
                </Center>
            </Box>
        </Box>
    )
}