import React, { useEffect, useState } from 'react';
import { BUSD, contractAddress } from '@/services/NFT'
import ABI from '@/utils/ABI'
import { formatEther, parseEther } from 'viem'
import { useAccount } from 'wagmi'

export default function Stake({ setStaking, setToggle }) {

    const [fetch, setFetch] = useState([])
   const toast = useToast()
   const { address } = useAccount()

 const initiateProfile2 = async (values, { setSubmitting, resetForm }) => {

    };


    const currentStateStep3 = {
        amount: "",
    }


    const validationSchema3 = Yup.object({
        amount: Yup.string().required("amount is required"),
    });

async function jackpotInfo() {
        try {
            const data = await readContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'getAllStakes'

            })
            
           // const dataParse = data.map((dataB) => {
            // return   dataB.map((a) => {
              //  return formatEther(a)
          //  })
          //  })
           setFetch(data)
            data.map((a)=>{
                if(a.staker == address) {
                   return a
                 }
                })
        } catch(err){
            alert(err.message)
        }
}


    useEffect(()=>{
      jackpotInfo()  
    },[])
    
    return (
        <Box p="60px" color="#fff">
           
            <table className="table">
                <caption >
                    <div style={{ marginBottom: 10, marginTop: 90, fontWeight: "800", fontSize: 20 }}>
                    Winning History</div></caption>
                <thead >
                    <tr style={{marginBottom:20}}>
                        <th scope="col">Jackpot id</th>
                        <th scope="col">Jackpot Amount</th>
                        <th scope="col">Winneer Address</th>
                        <th scope="col">WINNER'S Amount</th>
                        <th scope="col">PARTICIPANTS SHARE</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Next Jackpot Amount</th>
                    </tr>
                </thead>
                <tbody>
                        { 
                           fetch.map((a,b)=>( 
                        <tr>
                        <td scope="row" data-label="Jackpot id">{a.id}</td>
                        <td data-label="Jackpot Amount">${a.stakerShare}</td>
                        <td data-label="Winneer Address">{a.staker}</td>
                        <td data-label="PARTICIPANTS SHARE">${a.jackpotShare}</td>
                        <td data-label="Amount">${a.amountStaked}</td>
                        <td data-label="Winning Status">${a.win}</td>
