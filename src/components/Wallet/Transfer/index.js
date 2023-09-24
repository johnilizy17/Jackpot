import React, { useEffect } from 'react';

export default function Checkout({deposit, setDeposit}) {

    return (
        <div className='checkOut_payment' style={deposit ? { background:"#000"}: {transform:"translateY(190%)"}}>
            <div className='checkout_header'>
                <div className='checkout_amount'>
                    <svg width="10" style={{ marginRight: 5 }} height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.53984 5.25205V4.27992H5.30737L6.15098 5.25205H6.53984ZM6.53984 3.03552V0.825684H8.12308V3.03552H9.03676V4.27992H8.12308V5.25205H9.03676V6.49645H8.12308V8.70725H7.02734L5.12722 6.49645H2.8729V8.70725H1.28852V6.49645H0.375977V5.25205H1.28852V4.27992H0.375977V3.03552H1.28852V0.825684H2.30847L4.2261 3.03552H6.53869H6.53984ZM3.22101 4.27992H2.8729V5.25205H4.05662L3.22101 4.27992Z" fill="#01d293" />
                    </svg>
                    88,500.54
                </div>
                <svg onClick={()=>{setDeposit(false)}} width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 26.8454L26.366 10.2642" stroke="#01d293" stroke-width="2.66724" stroke-miterlimit="22.9256" />
                    <path d="M26.366 26.8454L10 10.2642" stroke="#01d293" stroke-width="2.66724" stroke-miterlimit="22.9256" />
                </svg>
            </div>
            <div>
                <center>
                    <div style={{ marginTop: "20px", fontWeight: "900", fontSize: "19.8px", lineHeight: "37px" }}>
                        Deposit
                    </div>
                    <div style={{ fontWeight: "600", fontSize: "14px", lineHeight: "23px" }}>
                        Deposit with ease.
                    </div>
                    <div style={{ marginTop: "20px", fontWeight: "900", fontSize: "15.8px", lineHeight: "37px" }}>
                        <div>
                            <label style={{ color: "#02383C" }}>
                                Amount to deposit($20)
                            </label>
                        </div>
                        <input placeholder='0.0rgz' style={{marginTop:"5px", color:"#000", marginBottom:"20px", width:"270px", borderRadius: 10, height: 45, padding: 10 }} />
                        <center>
                            <button className="transfer_wallet_deposit">
                                Deposit
                            </button>
                        </center>
                    </div>
                </center>

            </div>
        </div>
    )
}