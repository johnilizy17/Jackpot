import Link from 'next/link';
import { Box, Center, Flex, IconButton } from '@chakra-ui/react';
import React from 'react';
import { BsDiscord, BsFacebook, BsTelegram, BsTwitter } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';

export default function Footer() {

    return (
        <div className="footer_container">
            <Box pos="absolute" top="0px" p="20px" zIndex="1000" color="#fff" w="100vw">
                <Box fontSize="17px" fontWeight="800">
                    <Box mb="20px">JACKPOT INFO</Box>
                </Box>
                <Box>Participants: 52</Box>
                <Box>  Duration: 5 mins(Min Buy: $5)</Box>
                <Box> Duration: 2.5 mins(Max. Buy 20$) </Box>
                <Box mt="20px">
                    <Box>REWARD DISTRIBUTION</Box>
                    <Flex flexWrap="wrap">
                        <Box mr="10px" mt="10px">50% WINNER</Box>
                        <Box mr="10px" mt="10px">
                            20% NEXT NORMAL JACKPOT
                        </Box>
                        <Box mr="10px" mt="10px">20% BIG JACKPOT</Box>
                        <Box mr="10px" mt="10px">5% MARKETING</Box>
                        <Box mr="10px" mt="10px">5% BOMB PRIZ</Box>
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
                    <Center flexWrap="wrap">
                        
                        <Box mt="10px" mr="10px">
                            Features
                        </Box>
                        <Box mt="10px" mr="10px">
                            How it works
                        </Box>
                        <Box mt="10px" mr="10px">
                            Token info
                        </Box>
                        <Link href="/about">
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