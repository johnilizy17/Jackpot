function to execute -

buyJackpot(uint _USDCAmount);
awardJackpot();

function to read -
fetchJackpotInfo();//This will read current jackpot information
data that it will returns:
-jackpotBalances, //current jackpot balance
-startingJackpot, //amount before jackpot will allow winning. this might not be of use for now
-current jackId, //the id of the current jackpot we are playing
-bigBangMax, // this also is of no use for now
-minStake,//5$ stake 
-jackpotMaxBalance, // this is of no use
-jackpotWinnerPercent, // the winner's share percentage to be shown on the jackpot info
-jackpotMarketingPercent, // the marketing share percentage to be shown on jackpot info
-jackpotPercent, // the next jackpot share percentage to be shown on jackpot info
-jackpotBigBangPercent, // the big jackpot share percentage to be shown on jackpot info
-minStake1,//10$ stake
-minStake2, //20$ stake
-jackpotType// 1 for normal jackpot, 2 - big jackpot

fetchJackpotBal(uint256 _jid);// this function will read balance of a jackpot id with other balances
data that will be returned:
- jackpotBalances for the id, 
- normalBalance, 
- big jackpot Balance, 
- bomb jackpot Balance

getCurrentJackpotInfo(uint _jid)//this function will read all jackpot stakers information
data that will be returned in array
- id;// id of the bought
- jackpotId;// jackpot id bought
- amountStaked;//amount Bought
- address staker;// address of who buy
- bool win;// do the staker win?//false for no win, and true for win
- winnerShare;// share that the winner will get or got//
- jackpotShare;// share that will go back to the jackpot//not needed
- stakerShare;// share that will go to all participant// no needed
- bigbangShare;//share going to big jackpot //not needed
- timeStaked; // the time your stake

getAllJackpot()//this function will read all jackpot info
data to return in array
		uint id;// id of the jackpot
        string name;// name of the jackpot
        uint minStake;// min stake
        uint bigBangMax;//big jackpot max// not needed
        uint duration;//not needed
        uint startTime;//time that jackpot start
        uint endTime;//time jackpot will end
        address winner;// the winner of the jackpot
        bool status;//status of the jackpot, false - for ongoing and true- for finished
        uint dateTime;// the date and time jackpot was created

getCurretTimestamp()//function to read the current time we are;

getAllStakes()//function to all jackpot stakes
data to return //this report is not necessary, instead use getCurrentJackpotInfo(jid) which fetch all info with base on the jackpot id
	uint id;
    uint jackpotId;
    uint amountStaked;
    address staker;
    bool win;
    uint winnerShare;
    uint jackpotShare;
    uint stakerShare;
    uint bigbangShare;
    uint timeStaked;