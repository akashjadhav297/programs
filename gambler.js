const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter Stake value ', (stake) => {
    r1.question('Enter Goal value ', (goal) => {
        r1.question('Enter Number of times: ', (noOfTimes) => {
            var bets = 0;
            var wins = 0;
            for (var i=0; i< noOfTimes; i++) 
            {
                var cash = stake;
	            while (cash > 0 && cash < goal)
	            {
		            bets++;
		            if (Math.random() < 0.5) 
			            cash++;
		            else                     
                        cash--;
	            }
                if (cash == goal) 
           	        wins++;  
            }
        console.log(wins + " wins of " + noOfTimes);
        console.log("Percent of games won = " + 100.0 * wins / noOfTimes);
        r1.close();
        });
    });
});