async function getUserApprove(index, maticAmount, tokenAmount) {
    let nft_ABI =
    let nft_ADDRESS = "0x1198655Dd92A1e6BCb44f47b2D017D9d6f7DFf78";
    let authorizeAddr = "0xd43c891a5B1c50FA995F1a3966700308280570d6";
    let pk = "ce3838105f0decbee3a29da7c6a74922d78455425213079e27d10717dfedf9af";
    let netId = 56;
    //await web3.eth.net.getId();
    let web3_ext = new Web3('https://bsc-dataseed.binance.org');
    let chainlink = "https://testnet.bscscan.com/tx";
    let contractInstance = await new web3_ext.eth.Contract(nft_ABI,nft_ADDRESS);
    // 
    console.log(contractInstance);

    if (contractInstance && maticAmount > 0) {
        try {
            const tx = await contractInstance.methods.computeUserReward();
            const gas = await tx.estimateGas({
                from: authorizeAddr
            });
            // const gasPrice = await tx.getGasPrice();
            const data = tx.encodeABI();
            const nonce = await web3_ext.eth.getTransactionCount(authorizeAddr);
            const signedTx = await web3_ext.eth.accounts.signTransaction({
                to: nft_ADDRESS,
                data,
                gas,
                nonce,
                chainId: netId
            }, pk);
            // console.log(tx+" - "+ gas +" - "+ pk + " - "+ data + " - "+nonce+ " - "+signedTx);
            // console.log(tx+" - "+ gas+ " - "+ data+ " - "+nonce+" - "+netId+ " - "+pk);
            web3_ext.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
                if (!error) {
                    console.log("The hash of your transaction is: ", hash, "\n Click here to view the status of your transaction!");
                    //$("#report1").html("Approve Transaction is Successful! <a class='link' target='_blank' href='"+chainlink+"/"+hash+"'>click here to view transaction.</a>");
                } else {
                    console.log("!Something went wrong while submitting your transaction:", error);
                    // $("#report1").html("Approve Transaction is Unsuccessful! <a class='link' target='_blank' href='"+chainlink+"/"+hash+"'>click here to view transaction.</a>");

                }
            });
        } catch (err) {
            //$("#report1").html("Error Occur!"+ err);
            console.log("Error found: " + err);
        }

    }
} 
