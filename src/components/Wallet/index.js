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
        <div className="wallet_container" >
            <div className='wallet_transaction' >
                <div className='wallet_header'>

                    <div className='wallet_flex'>
                        <div style={{ marginRight: "19px", fontWeight: 800, fontSize: "16.5px", lineHeight: "31px" }}>
                            My Wallet
                        </div>
                        <svg width="24" height="6" style={{ marginTop: 0 }} viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.8829 2.95948C22.8829 1.50114 21.7904 0.318923 20.4429 0.318923C19.0953 0.318923 18.0029 1.50114 18.0029 2.95948C18.0029 4.41782 19.0953 5.6001 20.4429 5.6001C21.7904 5.6001 22.8829 4.41782 22.8829 2.95948Z" fill="#ef621c" stroke="#007575" stroke-width="0.5" stroke-miterlimit="22.9256" />
                            <path d="M14.3815 2.95949C14.3815 1.50115 13.289 0.318933 11.9415 0.318933C10.5939 0.318933 9.50146 1.50115 9.50146 2.95949C9.50146 4.41783 10.5939 5.6001 11.9415 5.6001C13.289 5.6001 14.3815 4.41783 14.3815 2.95949Z" fill="#ef621c" stroke="#007575" stroke-width="0.5" stroke-miterlimit="22.9256" />
                            <path d="M5.88 2.95948C5.88 1.50114 4.78758 0.318928 3.44 0.318928C2.09242 0.318928 1 1.50114 1 2.95948C1 4.41783 2.09242 5.6001 3.44 5.6001C4.78758 5.6001 5.88 4.41783 5.88 2.95948Z" fill="#ef621c" stroke="#007575" stroke-width="0.5" stroke-miterlimit="22.9256" />
                        </svg>
                    </div>
                </div>
                <div style={{ background: "#0097b2", height: "100%" }}>
                    {staking ?
                        <Stake setStaking={setStaking} setToggle={setToggle} /> :
                        <center style={{ paddingTop: 50 }}>
                            <Center>
                                <Box fontSize="18px" fontWeight={"700"}>Wallet Amount</Box>
                            </Center>
                            
                            <Lottie animationData={vault} loop={true} />
                            <div className='wallet_card_svg' style={{ display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600", fontSize: "38px", lineHeight: "62px" }}>
                                $ 5
                            </div>
                        </center>}
                </div>
                <div className="wallet_card" style={toggle ? { position: "absolute", bottom: "0px", height: "300px", width: "100%", borderRadius: "20px 20px 0px 0px", padding: "15px", transition: "1s ease-in" } : { position: "absolute", bottom: "0px", height: "50px", width: "100%", borderRadius: "20px 20px 0px 0px", padding: "15px", transition: "1s ease-in" }}>
                    <center flexDirection={"column"}>
                        <Box p="10px" cursor="pointer" onClick={() => { setToggle(!toggle) }}>
                            <svg width="40" height="10" viewBox="0 0 40 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.9865 0.00129871C20.3197 0.00129871 20.6498 0.0531904 20.9561 0.153248L38.3668 5.87111C39.2381 6.18522 39.7945 6.85779 39.7945 7.59556C39.7945 8.64807 38.681 9.5017 37.3073 9.5017C37.0063 9.5017 36.7074 9.45991 36.4262 9.37758L19.9865 3.98396L3.54631 9.37758C3.21441 9.49727 2.85274 9.55872 2.48725 9.55872C1.11355 9.55872 0 8.70502 0 7.65252C0 6.86029 0.63882 6.15104 1.60621 5.8705L19.0172 0.15263C19.3228 0.0525719 19.6527 0.000633278 19.9865 0V0.00129871Z" fill="#ef621c" />
                            </svg>
                        </Box>
                        <div>
                            <button className="wallet_withdraw_button" onClick={() =>{ 
                                setToggle(false)
                                 setTransferState(true)}}>
                                Transfer
                            </button>
                        </div>
                        <div>
                            <button className='wallet_addFund_button' onClick={() =>{
                                 setToggle(false)
                                setDeposit(true)}}>
                                Add Fund
                            </button>
                        </div>
                        <div>
                            <button className='wallet_addFund_button' onClick={() => {
                                setToggle(false)
                                setStaking(true)
                            }}>
                                History
                            </button>
                        </div>
                    </center>
                </div>
                <Widthdraw deposit={transferState} setDeposit={setTransferState} />
                <Checkout deposit={deposit} setDeposit={setDeposit} />
            </div>
        </div>
    )
}