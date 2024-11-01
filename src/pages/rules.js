import Presale from '@/components/Dashboard/Presale';
import Header from '@/components/Layout';
import Loading from '@/components/Layout/Loading';
import Content from '@/components/Rules';
import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function Rules() {

    const [display, setDisplay] = useState(true)

    setTimeout(() => { setDisplay(false) }, 2000)

    return (
        <Box h="100%" pt="100px" backgroundColor="#171537">
            <Loading display={display} />
            <Box >
                <Header />
                <Content />
            </Box>
            <Presale/>
        </Box>
    )
}