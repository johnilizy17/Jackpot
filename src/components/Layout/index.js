import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Toast, useToast, Center, Divider, Flex, IconButton, Img, Slide, Text, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import LetterAlpha from './LetterAlpha';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';
import { disconnect } from '@wagmi/core'

export default function Header() {


    const { isOpen, onToggle } = useDisclosure();
    const [userAddress, setUserAddress] = useState("")
    const { open, close } = useWeb3Modal()

    const { address, isConnecting, isDisconnected } = useAccount()

    useEffect(() => {
        if (!address) {
            open()
        } else {
            setUserAddress(address[0] + address[1] + address[2] + address[3] + address[4] + address[5] + `....` + address[38] + address[39])
            close()
        }
    }, [address])

    return (
        <>
            <Box pos="fixed" top="0px" zIndex="50">
                <Center justifyContent={"space-between"} textAlign="center" w="100vw" p={["5px", "5px", "5px", "20px"]} bg="#4D46B9" >
                    <Link href="/">
                        <Img src="../image/logo_alpha.png" h="60px" w="60px" />
                    </Link>
                    <Box mr={["0px", "0px", "0px", "0px", "-110px"]}>
                        <LetterAlpha />
                    </Box>
                    <IconButton display={["flex", "flex", "flex", "flex", "none"]}
                        background="transparent"
                        onClick={onToggle}>
                        {!isOpen ?

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18H21V16H3V18V18ZM3 13H21V11H3V13V13ZM3 6V8H21V6H3V6Z" fill="#fff" />
                            </svg>
                            :
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18H21V16H3V18V18ZM3 13H21V11H3V13V13ZM3 6V8H21V6H3V6Z" fill="#fff" />
                            </svg>
                        }
                    </IconButton>
                    <Center display={["none", "none", "none", "none", "flex"]}>

                        <Link href="/">
                            <Box fontSize="22px" color="#9490D5" ml="-110px" mr="30px">
                                Game
                            </Box>
                        </Link>
                        <Link href="/rules">
                            <Box fontSize="22px" color="#9490D5" mr="30px">
                                Rules
                            </Box>
                        </Link>
                        <Link href="/history">
                            <Box fontSize="22px" color="#9490D5" mr="50px">
                                Winning History
                            </Box>
                        </Link>

                        {userAddress.length > 1 ?
                            <Menu >
                                {({ isOpen }) => (
                                    <>
                                        <MenuButton fontSize={["12px", "14px"]} colorScheme={"green"} isActive={isOpen} as={Button} rightIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" /></svg>}>
                                            {userAddress}
                                        </MenuButton>
                                        <MenuList bg={"#fff"}>
                                            <MenuItem bg={"#fff"} h={"40px"} onClick={async () => { await disconnect(); setUserAddress(""); open(); }}>Disconnect</MenuItem>
                                        </MenuList>
                                    </>
                                )}
                            </Menu>
                            :
                            <Box>
                                <Button colorScheme='green' onClick={() => { open() }}>
                                    Connect
                                </Button>
                            </Box>
                        }
                    </Center>
                </Center>
            </Box>
            <Slide
                direction="left"
                in={isOpen}
                style={{ zIndex: "4000", height: "full", top: "0px" }}
            >
                <Flex>
                    <Flex
                        p="40px"
                        color="white"
                        bg="#2E2A6F"
                        h="100vh"
                        justify="start"
                        direction="column"
                        pos="relative"
                        width="300px"
                        align="start"
                    >
                        <Center w="full" flexDir="column">
                            <Box>
                                <Box fontSize="18px" fontWeight="bold" color="#fff">
                                    ALPHA365
                                </Box>
                                <Box fontSize="18px" mt="-5px" fontWeight="bold" color="#F8C822" >
                                    JACKPOT
                                </Box>
                            </Box>

                            <Divider w="270px" mt="10px" mb="40px" />
                        </Center>
                        <Link href="/">
                            <Center justifyContent="space-between" w="250px" mb="20px">
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

                            <Center justifyContent="space-between" w="250px" mb="20px">
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
                        <Link href="/history">

                            <Center justifyContent="space-between" w="250px" mb="20px">
                                <Text
                                    fontSize="14.56px"
                                    lineHeight="25px"
                                    color="#fff"
                                    fontWeight="700"
                                    cursor="pointer"
                                    onClick={onToggle}
                                >
                                    Winning History
                                </Text>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0086 6.5L8.59863 7.91L13.1786 12.5L8.59863 17.09L10.0086 18.5L16.0086 12.5L10.0086 6.5Z" fill="#C9C8EA" />
                                </svg>
                            </Center>
                        </Link>
                        <Box pos="absolute" bottom="10px">
                           
                            <Link href="/about">

                                <Center justifyContent="space-between" w="250px" mb="20px">
                                    <Text
                                        fontSize="14.56px"
                                        lineHeight="25px"
                                        color="#fff"
                                        fontWeight="700"
                                        cursor="pointer"
                                        onClick={onToggle}
                                    >
                                        About Us
                                    </Text>
                                </Center>
                            </Link>
                            <Link href="/contact">

                                <Center justifyContent="space-between" w="250px" mb="20px">
                                    <Text
                                        fontSize="14.56px"
                                        lineHeight="25px"
                                        color="#fff"
                                        fontWeight="700"
                                        cursor="pointer"
                                        onClick={onToggle}
                                    >
                                        Contact
                                    </Text>
                                </Center>
                            </Link>
                            {userAddress.length > 1 ?
                                <Menu mt="20px">
                                    {({ isOpen }) => (
                                        <>
                                            <MenuButton fontSize={["12px", "14px"]} colorScheme={"green"} isActive={isOpen} as={Button} rightIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" /></svg>}>
                                                {userAddress}
                                            </MenuButton>
                                            <MenuList bg={"#fff"}>
                                                <MenuItem bg={"#fff"} h={"40px"} onClick={async () => { await disconnect(); setUserAddress(""); open(); }}>Disconnect</MenuItem>
                                            </MenuList>
                                        </>
                                    )}
                                </Menu>
                                :
                                <Box mt="20px">
                                    <Button colorScheme='green' onClick={() => { open() }}>
                                        Connect
                                    </Button>
                                </Box>
                            }
                        </Box>
                    </Flex>
                    <Box w="100%" h="100vh" onClick={onToggle} background="transparent" onFocus={{ background: "transparent" }}>

                    </Box>
                </Flex>
            </Slide>
        </>
    )
}