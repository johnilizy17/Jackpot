import Header from '@/components/Layout';
import Loading from '@/components/Layout/Loading';
import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function Home() {

 const [display, setDisplay] = useState(true)

 setTimeout(()=>{setDisplay(false)}, 2000)

  return (
    <>
    <Loading display={display} />
      <Box h="100vh" overflow="scroll" backgroundColor="#171537">
        <Header />
      </Box>
    </>
  )
}