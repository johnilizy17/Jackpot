import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function Footer(){

    return(
        <Flex pos="absolute" bottom="20px">
            <Box className="rules"><Link href="about">About Us</Link> </Box>
            <Box className="rules"><Link href="contact">Contact</Link></Box> 
        </Flex>
    )
}