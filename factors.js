function primeCheck(number){
    var count = 0;
    for(let i = 1; i <= number; i++){
        if(number % i == 0)
        {
            count++;
        }
    }
    if(count <= 2)
    {
        return true;
    }
}
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter the number to be factorized ', (number) => {

    for(let factor = 1; factor < number; factor++)
    {
        if(number % factor == 0)
        {
            var result = primeCheck(factor);
            if(result == true){
                console.log(factor);
            }
        }
    }
    
r1.close();
});