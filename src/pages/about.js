import ContactFaq from '@/components/Contact/ContactFaq';
import ContactFrom from '@/components/Contact/ContactForm';
import Presale from '@/components/Dashboard/Presale';
import FAQ from '@/components/FQAContent';
import Header from '@/components/Layout';
import Loading from '@/components/Layout/Loading';
import Content from '@/components/Rules';
import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function Rules() {

  const [display, setDisplay] = useState(true)

  setTimeout(() => { setDisplay(false) }, 2000)

  return (
    <Box h="100%" p="20px" pt="100px" backgroundColor="#171537">
      <Loading display={display} />
      <Box >
        <Header />
        <Text
          fontSize={['40px', '50px', '60px']}
          lineHeight={['55px', '70px', "90px"]}
          fontFamily="THICCCBOI"
          color="#ffffff"
          fontWeight="500"
          textAlign="center"
          textTransform='capitalize'

        >
          frequently asked <span className='gradient-text'>questions.</span>
        </Text>
        <FAQ />
              </Box>
      <Presale />
    </Box>
  )
}