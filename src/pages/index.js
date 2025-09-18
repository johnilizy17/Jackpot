import Dashboard from '@/components/Dashboard';
import DashboardDesktop from '@/components/Dashboard/Desktop';
import Presale from '@/components/Dashboard/Presale';
import Header from '@/components/Layout';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import Footer from '@/components/Layout/Footer';
import Loading from '@/components/Layout/Loading';
import { Box, Center } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function Home() {

 const [display, setDisplay] = useState(true)

 setTimeout(()=>{setDisplay(false)}, 2000)

  return (
    <DashboardLayout>
    <Loading display={display} />
      <Box h="100vh" overflow="scroll" backgroundColor="#171537">
        <Center  >
          <Box w={["100%", "600px"]}>
        <Dashboard />
        </Box>
        </Center>
        <Footer/>
      </Box>
    </DashboardLayout>
  )
}
