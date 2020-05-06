const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter the value of N ', (N) => {

if(N <= 31){
    for(let power = 1; power <=N; power++){
        var result = Math.pow(2,power);
        console.log(result);
    }
}
else {
    console.log('The power should be smaller than 31');
}

r1.close();
});