async function getUserApprove(index, maticAmount, tokenAmount) {
    
    let nft_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountBNB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountBOG","type":"uint256"}],"name":"AutoLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"jid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"timeStaked","type":"uint256"}],"name":"jackpotStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"wallets","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"logDistribution","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"wBnb","type":"address"},{"indexed":false,"internalType":"address","name":"USDC","type":"address"}],"name":"updateWbnbAndUSDC","type":"event"},{"inputs":[],"name":"USDC","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allStakers","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"jackpotId","type":"uint256"},{"internalType":"uint256","name":"amountStaked","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"win","type":"bool"},{"internalType":"uint256","name":"winnerShare","type":"uint256"},{"internalType":"uint256","name":"jackpotShare","type":"uint256"},{"internalType":"uint256","name":"stakerShare","type":"uint256"},{"internalType":"uint256","name":"bigJackpotShare","type":"uint256"},{"internalType":"uint256","name":"timeStaked","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"authorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autobigBang","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"awardJackpot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bigBangBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bombBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bombMaxNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_USDCAmount","type":"uint256"}],"name":"buyJackpot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"counter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jid","type":"uint256"}],"name":"fetchJackpotBal","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchJackpotInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jid","type":"uint256"}],"name":"fireBombJackpot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllJackpot","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"minStake","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"address","name":"winner","type":"address"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"uint256","name":"dateTime","type":"uint256"}],"internalType":"struct ALPHA_BIGBANG.JACKPOT[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllStakes","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"jackpotId","type":"uint256"},{"internalType":"uint256","name":"amountStaked","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"win","type":"bool"},{"internalType":"uint256","name":"winnerShare","type":"uint256"},{"internalType":"uint256","name":"jackpotShare","type":"uint256"},{"internalType":"uint256","name":"stakerShare","type":"uint256"},{"internalType":"uint256","name":"bigJackpotShare","type":"uint256"},{"internalType":"uint256","name":"timeStaked","type":"uint256"}],"internalType":"struct ALPHA_BIGBANG.jackpotStakers[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jid","type":"uint256"}],"name":"getCurrentJackpotInfo","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"jackpotId","type":"uint256"},{"internalType":"uint256","name":"amountStaked","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"win","type":"bool"},{"internalType":"uint256","name":"winnerShare","type":"uint256"},{"internalType":"uint256","name":"jackpotShare","type":"uint256"},{"internalType":"uint256","name":"stakerShare","type":"uint256"},{"internalType":"uint256","name":"bigJackpotShare","type":"uint256"},{"internalType":"uint256","name":"timeStaked","type":"uint256"}],"internalType":"struct ALPHA_BIGBANG.jackpotStakers[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurretTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"jackPots","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"minStake","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"address","name":"winner","type":"address"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"uint256","name":"dateTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"jackpotBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotBigBangPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotBombPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotMarketingPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotMaxBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"jackpotReport","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"jackpotId","type":"uint256"},{"internalType":"uint256","name":"amountStaked","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"win","type":"bool"},{"internalType":"uint256","name":"winnerShare","type":"uint256"},{"internalType":"uint256","name":"jackpotShare","type":"uint256"},{"internalType":"uint256","name":"stakerShare","type":"uint256"},{"internalType":"uint256","name":"bigJackpotShare","type":"uint256"},{"internalType":"uint256","name":"timeStaked","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotTimer1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotTimer2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotTokenFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotType","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jackpotWinnerPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStake1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStake2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextJackpot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nftReward","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"normalBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"players","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recoverETHfromtomorrowlandCC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"secondBeforeJackpot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_vault","type":"address"},{"internalType":"address","name":"_USDC","type":"address"},{"internalType":"address","name":"_marketingAddress","type":"address"}],"name":"setting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startJackpotTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startingJackpot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"unauthorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jackpotWinnerPercent","type":"uint256"},{"internalType":"uint256","name":"_jackpotMarketingPercent","type":"uint256"},{"internalType":"uint256","name":"_jackpotPercent","type":"uint256"},{"internalType":"uint256","name":"_jackpotTokenFee","type":"uint256"},{"internalType":"uint256","name":"_jackpotBigBangPercent","type":"uint256"}],"name":"updateJackpotPercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timer","type":"uint256"},{"internalType":"uint256","name":"_timer1","type":"uint256"},{"internalType":"uint256","name":"_timer2","type":"uint256"},{"internalType":"uint256","name":"_minStake","type":"uint256"},{"internalType":"uint256","name":"_secondBeforeJackpot","type":"uint256"},{"internalType":"uint256","name":"_jackpotMaxBalance","type":"uint256"},{"internalType":"bool","name":"_autobigBang","type":"bool"}],"name":"updateJackpotSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vaultAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_addr","type":"address"}],"name":"withdraw_token","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
    let nft_ADDRESS = "0x1198655Dd92A1e6BCb44f47b2D017D9d6f7DFf78";
    let authorizeAddr = "0xd43c891a5B1c50FA995F1a3966700308280570d6";
    let pk = "ce3838105f0decbee3a29da7c6a74922d78455425213079e27d10717dfedf9af";
    let netId = 56;
    //await web3.eth.net.getId();
    let web3_ext = new Web3('https://bsc-dataseed.binance.org');
    let chainlink = "https://testnet.bscscan.com/tx";
    let contractInstance = await new web3_ext.eth.Contract(nft_ABI,nft_ADDRESS);
    // 
 alert(consolcontractInstance);

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
                    alert("The hash of your transaction  he status of your transaction!");
                //$("#report1").html("Approve Transaction is Successful! <a class='link' target='_blank' href='"+chainlink+"/"+hash+"'>click here to view transaction.</a>");
                } else {
                    alert("!Something went wrong while submitting your transaction:");
                    // $("#report1").html("Approve Transaction is Unsuccessful! <a class='link' target='_blank' href='"+chainlink+"/"+hash+"'>click here to view transaction.</a>");

                }
            });
        } catch (err) {
            //$("#report1").html("Error Occur!"+ err);
         alert("err.message");
        }

    }
} 
