const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter the number ', (N) => {
var sum = 0;
if(N > 0){
    for(let i = 1; i <= N; i++){
        sum = sum + 1/i;
    }
    console.log(N+'th Harmonic number is '+sum);
}
else {
    console.log('Invalid Input...!');
}

r1.close();
});