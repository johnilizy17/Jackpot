"use client";

import {
  Box,
  Center,
  Divider,
  Flex,
  IconButton,
  Img,
  Slide,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import LetterAlpha from "./LetterAlpha";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box pos="fixed" top="0px" w={["100%", "calc(100% - 200px)"]} zIndex="50">
        <Center
          justifyContent="space-between"
          textAlign="center"
          w="100%"
          p={["5px", "5px", "5px", "20px"]}
          bg="#4D46B9"
        >
          {/* Logo */}
          <Link href="/">
            <Img src="../image/logo_alpha.png" h="60px" w="60px" />
          </Link>
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
          {/* Desktop menu */}
          <Center display={["none", "none", "none", "none", "flex"]}>
            {/* 🌈 RainbowKit handles connect/disconnect */}
            <ConnectButton showBalance={false} />
          </Center>
        </Center>
      </Box>

      {/* Mobile menu */}
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
            width="310px"
            align="start"
          >
            <Center w="full" flexDir="column">
              <Box>
                <Box fontSize="18px" fontWeight="bold" color="#fff">
                  ALPHA365
                </Box>
                <Box
                  fontSize="18px"
                  mt="-5px"
                  fontWeight="bold"
                  color="#F8C822"
                >
                  JACKPOT
                </Box>
              </Box>
              <Divider w="270px" mt="10px" mb="40px" />
            </Center>

            <a href="/">
              <Text color="#fff" fontWeight="700" cursor="pointer" mb="20px">
                Game
              </Text>
            </a>
            <a href="/rules">
              <Text color="#fff" fontWeight="700" cursor="pointer" mb="20px">
                Rules
              </Text>
            </a>
            <a href="/history">
              <Text color="#fff" fontWeight="700" cursor="pointer" mb="20px">
                Winning History
              </Text>
            </a>
            <a href="/swap">
              <Text color="#fff" fontWeight="700" cursor="pointer" mb="20px">
                Swap
              </Text>
            </a>
            <a href="/dashboard">
              <Text color="#fff" fontWeight="700" cursor="pointer" mb="20px">
                Dashboard
              </Text>
            </a>

            {/* 🌈 RainbowKit connect button on mobile */}
            <Box pos="absolute" bottom="20px" right="10px">
              <ConnectButton showBalance={false} />
            </Box>
          </Flex>
          <Box
            w="100%"
            h="100vh"
            onClick={onToggle}
            background="transparent"
          />
        </Flex>
      </Slide>
    </>
  );
}
