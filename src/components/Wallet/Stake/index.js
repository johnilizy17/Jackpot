import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center, Heading, Box, Button } from '@chakra-ui/react';
import CustomInput from '../../Contact/CustomInput';
import { Form, Formik } from 'formik';
import Lottie from 'lottie-react';
import * as Yup from "yup";
import vault from '@/assets/dashboard/vault.json'

export default function Stake({ setStaking, setToggle }) {

    const initiateProfile2 = async (values, { setSubmitting, resetForm }) => {

    };


    const currentStateStep3 = {
        amount: "",
    }


    const validationSchema3 = Yup.object({
        amount: Yup.string().required("amount is required"),
    });

    return (
        <Box p="60px" color="#fff">
           
            <table className="table">
                <caption >
                    <div style={{ marginBottom: 10, marginTop: 90, fontWeight: "800", fontSize: 20 }}>
                    Winning History</div></caption>
                <thead >
                    <tr style={{marginBottom:20}}>
                        <th scope="col">Jackpot id</th>
                        <th scope="col">Name </th>
                        <th scope="col">Jackpot Amount</th>
                        <th scope="col">Winneer Address</th>
                        <th scope="col">WINNER'S Amount</th>
                        <th scope="col">PARTICIPANTS SHARE</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Next Jackpot Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row" data-label="Jackpot id">1</td>
                        <td data-label="Name">France</td>
                        <td data-label="Jackpot Amount">$50</td>
                        <td data-label="Winneer Address">0Xedj23029302jdfjd</td>
                        <td data-label="PARTICIPANTS SHARE">$0.5</td>
                        <td data-label="Amount">$5</td>
                        <td data-label="Next Jackpot Amount">$5</td>
                    </tr>
                    <tr>
                        <td scope="row" data-label="Jackpot id">1</td>
                        <td data-label="Name">France</td>
                        <td data-label="Jackpot Amount">$50</td>
                        <td data-label="Winneer Address">0Xedj23029302jdfjd</td>
                        <td data-label="PARTICIPANTS SHARE">$0.5</td>
                        <td data-label="Amount">$5</td>
                        <td data-label="Next Jackpot Amount">$5</td>
                    </tr>
                </tbody>
            </table>
        </Box>
    )
}