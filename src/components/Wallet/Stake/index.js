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
        <Box p="30px">
            <svg
                onClick={() => {
                    setToggle(false)
                    setStaking(false)
                }}
                style={{ marginLeft: 5 }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-backspace-fill" viewBox="0 0 16 16">
                <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z" />
            </svg>
            <table className="table">
                <caption style={{ marginBottom: 10 }}>Transaction History</caption>
                <thead >
                    <tr>
                        <th scope="col">S/N</th>
                        <th scope="col">Amount </th>
                        <th scope="col">Type</th>
                        <th scope="col">Wallet</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td scope="row" data-label="S/N">1</td>
                        <td data-label="Compound">$21</td>
                        <td data-label="Rewards">Deposit</td>
                        <td data-label="Rewards">dnknf93094ke</td>
                    </tr>
                    <tr>
                        <td scope="row" data-label="S/N">1</td>
                        <td data-label="Compound">$21</td>
                        <td data-label="Rewards">Deposit</td>
                        <td data-label="Rewards">dnknf93094ke</td>
                    </tr>
                </tbody>
            </table>
        </Box>
    )
}