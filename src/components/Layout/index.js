import { Box, Center, Flex, IconButton, Img, Slide, Text, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function Header() {


    const { isOpen, onToggle } = useDisclosure();

    return (
        <>
            <Box>
                <Center justifyContent={"space-between"} w="100vw" p="20px" bg="#4D46B9" >
                    <Img src="./image/logo_alpha.png" h="60px" w="60px" />
                    <Box>
                        <Box fontSize="18px" fontWeight="bold" color="#fff">
                            ALPHA365
                        </Box>
                        <Box fontSize="18px" mt="-5px" fontWeight="bold" color="#F8C822" >
                            JACKPOT
                        </Box>
                    </Box>
                    <IconButton display={["flex", "flex", "flex", "flex", "none"]}
                        onClick={onToggle}>
                        {!isOpen ?

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18H21V16H3V18V18ZM3 13H21V11H3V13V13ZM3 6V8H21V6H3V6Z" fill="#4D46B9" />
                            </svg>
                            :
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18H21V16H3V18V18ZM3 13H21V11H3V13V13ZM3 6V8H21V6H3V6Z" fill="#4D46B9" />
                            </svg>
                        }
                    </IconButton>
                    <Center display={["none", "none", "none", "none", "flex"]}>
                        <Box fontSize="22px" color="#9490D5" mr="30px">
                            Game
                        </Box>
                        <Box fontSize="22px" color="#9490D5" mr="30px">
                            Rules
                        </Box>
                        <Box fontSize="22px" color="#9490D5" mr="50px">
                            Wallet
                        </Box>
                    </Center>
                </Center>
            </Box>
            <Slide
                direction="left"
                in={isOpen}
                style={isOpen ? { zIndex: 80, width: 300, height: "full", top: "0px" } : {}}
            >
                <Flex
                    p="40px"
                    color="white"
                    bg="#2E2A6F"
                    h="100vh"
                    justify="start"
                    direction="column"
                    align="start"
                >
                    <Center w="full">
                        <Box>
                            <Box fontSize="18px" fontWeight="bold" color="#fff">
                                ALPHA365
                            </Box>
                            <Box fontSize="18px" mt="-5px" fontWeight="bold" color="#F8C822" >
                                JACKPOT
                            </Box>
                        </Box>
                    </Center>
                    <Link href="/">
                        <Center>
                            <Text
                                fontSize="14.56px"
                                lineHeight="25px"
                                color="#fff"
                                fontWeight="700"
                                cursor="pointer"
                                onClick={onToggle}
                            >
                                Game
                            </Text>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0086 6.5L8.59863 7.91L13.1786 12.5L8.59863 17.09L10.0086 18.5L16.0086 12.5L10.0086 6.5Z" fill="#C9C8EA" />
                            </svg>
                        </Center>
                    </Link>

                    <Link href="/rules">

                        <Center>
                            <Text
                                fontSize="14.56px"
                                lineHeight="25px"
                                color="#fff"
                                fontWeight="700"
                                cursor="pointer"
                                onClick={onToggle}
                            >
                                Rules
                            </Text>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0086 6.5L8.59863 7.91L13.1786 12.5L8.59863 17.09L10.0086 18.5L16.0086 12.5L10.0086 6.5Z" fill="#C9C8EA" />
                            </svg>

                        </Center>
                    </Link>
                    <Link href="/wallet">

                        <Center>
                            <Text
                                fontSize="14.56px"
                                lineHeight="25px"
                                color="#fff"
                                fontWeight="700"
                                cursor="pointer"
                                onClick={onToggle}
                            >
                                Wallet
                            </Text>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0086 6.5L8.59863 7.91L13.1786 12.5L8.59863 17.09L10.0086 18.5L16.0086 12.5L10.0086 6.5Z" fill="#C9C8EA" />
                            </svg>
                        </Center>
                    </Link>
                </Flex>
            </Slide>
        </>
    )
}