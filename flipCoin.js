/*
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter the number of flips ', (flips) => {

var result = (Math.random() < 0.5);
if(result == true){
    console.log('Heads');
}
else {
    console.log('Tails');
}

r1.close();
});
*/

function coinFlip() {
    return(Math.random() < 0.3) ? 'Heads' : 'Tails'; //ofc 0.3 is 30% (3/10)
}

var howManyTimes=15;
var countHeads=0; 
for (var i=0; i<howManyTimes;i++){
if (coinFlip()==='Heads'){
 countHeads++;
}
}
console.log("Heads appear "+(countHeads/howManyTimes)*100+"% of the time");