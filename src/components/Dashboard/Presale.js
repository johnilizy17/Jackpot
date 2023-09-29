import { Box, Center, Flex, IconButton } from '@chakra-ui/react';
import React from 'react';
import { BsDiscord, BsFacebook, BsTelegram, BsTwitter } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';

export default function Presale() {

    return (
        <Box mt="30px" color="#fff" m="20px" mt="0px" p="20px" borderRadius="16px" background="#1f1c4a" >
            <Box>Participants: 52 Duration: 5 mins Min Buy: 0.1 BNB Max. Buy 10 BNB</Box>
            <Box mt='20px'>
                <Box fontSize="17px" fontWeight="800">
                    <Box mb="20px">JACKPOT INFO</Box>
                </Box>
                <Box>
                    <Box>REWARD DISTRIBUTION</Box>
                    <Box>JACKPOT BALANCE</Box>
                </Box>
                <Box mt="10px">
                    <Box>WINNER PERCENTAGE</Box>
                    <Box>50%</Box>
                </Box>
                <Box mt="10px">
                    <Box>NEXT JACKPOT PERCENTAGE</Box>
                    <Box>25%</Box>
                </Box>
                <Box mt="10px">
                    <Box>DISTRIBUTION MODE</Box>
                    <Box>AUTO (Gas fee taken frm rewards %)</Box>
                </Box>
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
                <Box mt="10px">
                    About us
                </Box>
            </Center>
        </Box>
    )
}