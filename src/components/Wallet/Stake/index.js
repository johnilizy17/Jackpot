import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Toast, useToast, Center, Divider, Flex, IconButton, Img, Slide, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BUSD, contractAddress } from '@/services/NFT'
import ABI from '@/utils/ABI'
import { formatEther, parseEther } from 'viem'
import { useAccount } from 'wagmi'
import { readContract, readContracts } from '@wagmi/core'

export default function Stake({ setStaking, setToggle }) {

    const [fetch, setFetch] = useState([])
    const toast = useToast()
    const { address } = useAccount()


    async function jackpotInfo() {
        try {
            const data = await readContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'getAllJackpot'

            })  
            
            const mapped = data.map((a)=>{
                return a
            })
            
          setFetch([...mapped].reverse())        
        } catch (err) {
            alert(err.message)
        }
    }


    useEffect(() => {
        jackpotInfo()
    }, [])

    return (
        <Center color="#fff">

            {fetch.length > 0 ?

                <table className="table">
                    <caption >
                        <div style={{ marginBottom: 50, marginTop: 90, fontWeight: "800", fontSize: 20 }}>
                            Winning History</div></caption>

                    <thead >
                        <tr style={{ marginBottom: 20 }}>
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
                      {fetch.map((a, b) => (
                           <tr>
                          <td scope="row" data-label="id">{formatEther(a.id) * 1000000000000000000}</td>
                           <td data-label="Jackpot Name">{a.name}</td>
                           <td data-label="Winneer Address">{a.winner}</td>        
                               <td data-label="Status" style={a.status == false? {color:"yellow"}: a.winner === address? {color:"green"}:{color:"red"}}>{a.status == false? "in process" : a.winner === address? "You Won" : "You Loss"}</td>
                                   

                               
                          </tr>
                        ))
                        }
                    </tbody>
                </table>

                :
                <Center>
                    You have no records
                </Center>
            }

        </Center>
    )
}
