import React, { useEffect, useState } from 'react';
import Checkout from './Transfer';
import Widthdraw from './Transfer/Widthdraw';
import { Box, Center } from '@chakra-ui/react';
import Stake from './Stake';
import Lottie from 'lottie-react';
import * as Yup from "yup";
import vault from '@/assets/dashboard/vault.json'

export default function Wallet() {
    const profile = '../images/user.png'

    const [deposit, setDeposit] = useState(false)
    const [transferState, setTransferState] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [staking, setStaking] = useState(false)

    return (
        <Stake setStaking={setStaking} setToggle={setToggle} />  
    )
}