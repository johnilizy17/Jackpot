
  let addr = "0x1....";
let pk = "02319303...";
const tx = await contractInstance.methods.buybackJackpot();
          const gas = await tx.estimateGas({from:addr});
         // const gasPrice = await tx.getGasPrice();
          const data = tx.encodeABI();
          const nonce = await web3.eth.getTransactionCount(addr);
          const signedTx = await web3.eth.accounts.signTransaction({
            to: NFT_ADDRESS,
            data,
            gas,
            nonce,
            chainId: 97
        },
            pk
        );
       // console.log(tx+" - "+ gas +" - "+ pk + " - "+ data + " - "+nonce+ " - "+signedTx);
        // console.log(tx+" - "+ gas+ " - "+ data+ " - "+nonce+" - "+netId+ " - "+pk);
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
            
    if (!error) {
        
      //console.log("The hash of your transaction is: ", hash, "\n Click here to view the status of your transaction!");
    console.log("Transaction Successful! <a className='link' target='_blank' href='https://testnet.bscscan.com/tx/"+hash+"'>click here to view transaction.</a>");
    } else {
      console.log("!Something went wrong while submitting your transaction:", error);
      }

    