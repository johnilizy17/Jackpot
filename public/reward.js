async function getUserApprove(ABI, contractAddress) {
        
    try {

        let authorizeAddr = "0xd43c891a5B1c50FA995F1a3966700308280570d6";
        let pk = "ce3838105f0decbee3a29da7c6a74922d78455425213079e27d10717dfedf9af";
        let netId = 97;
        //await web3.eth.net.getId();

        let web3_ext = new Web3('https://bsc-testnet.publicnode.com');
        
        let chainlink = "https://testnet.bscscan.com/tx";
        
        let contractInstance = await new web3_ext.eth.Contract(ABI, contractAddress);


        if (contractInstance) {

            const tx = await contractInstance.methods.awardJackpot();
            const gas = 1000000000;
             const gasPrice = await tx.getGasPrice();
            const data = tx.encodeABI();
            const nonce = await web3_ext.eth.getTransactionCount(authorizeAddr);
            const signedTx = await web3_ext.eth.accounts.signTransaction({
                to: contractAddress,
                data,
                gas,
                nonce,
                gasPrice,
                chainId: netId
            }, pk);
            web3_ext.eth.sendSignedTransaction(signedTx.rawTransaction, function (error, hash) {
                if (!error) {
                    console.log(hash, contractAddress, "The hash of your transaction  he status of your transaction!");
               return hash
                } else {
                    console.log("!Something went wrong while submitting your transaction:", error);

                }
            });
        }
    } catch (err) {
        //$("#report1").html("Error Occur!"+ err);
        console.log(err.message)
    }
}
