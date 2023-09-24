import React, { useEffect } from 'react';

export default function Widthdraw({deposit, setDeposit}) {

    return (
        <div className='checkOut_payment' style={deposit ? {height: 500, background:"#000"}: {height: 500,transform:"translateY(190%)"}}>
            <div className='checkout_header'>
                <div className='checkout_amount'>
                    $ 88,500.54
                </div>
                <svg onClick={()=>{setDeposit(false)}} width="36" height="37" viewBox="0 0 36 37" fill="#4D46B9" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 26.8454L26.366 10.2642" stroke="#4D46B9" stroke-width="2.66724" stroke-miterlimit="22.9256" />
                    <path d="M26.366 26.8454L10 10.2642" stroke="#4D46B9" stroke-width="2.66724" stroke-miterlimit="22.9256" />
                </svg>
            </div>
            <div>
                <center>
                    <div style={{ marginTop: "20px", fontWeight: "900", fontSize: "19.8px", lineHeight: "37px" }}>
                        Withdrawal
                    </div>
                    <div style={{ fontWeight: "600", fontSize: "14px", lineHeight: "23px" }}>
                        Withdraw with ease to your BNB wallet.
                    </div>
                    <div style={{ marginTop: "20px", fontWeight: "900", fontSize: "15.8px", lineHeight: "37px" }}>
                        <div>
                            <label style={{ color: "#02383C" }}>
                                Amount
                            </label>
                        </div>
                        <input placeholder='100' style={{marginTop:"5px", color:"#000", marginBottom:"20px", width:"270px", borderRadius: 10, height: 45, padding: 10 }} />
                        <div>
                            <label style={{ color: "#02383C" }}>
                               Wallet
                            </label>
                        </div>
                        <input placeholder='0FFNNTRUR4T454' style={{marginTop:"5px", color:"#000", marginBottom:"20px", width:"270px", borderRadius: 10, height: 45, padding: 10 }} />
                       
                        <center>
                            <button className="transfer_wallet_deposit">
                                Pay
                            </button>
                        </center>
                    </div>
                </center>

            </div>
        </div>
    )
}