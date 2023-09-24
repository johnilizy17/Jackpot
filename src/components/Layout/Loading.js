import { Box, Center, Img } from '@chakra-ui/react';
import React from 'react';
import LetterAlpha from './LetterAlpha';

export default function Loading({ display }) {

    return (
        <Center h="100vh" w="100vw" pos="fixed" top="0px" display={display ? "flex" : "none"} background="#171537" zIndex={2000}>
            <Box>
                <Img src="../image/loading.png" alt="loading" w="200px" h="200px" />
                <Center>
                    <Box mt="-20px">
                        <LetterAlpha/>
                    </Box>
                </Center>
            </Box>
        </Center>
    )
}