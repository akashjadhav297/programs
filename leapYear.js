const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter the year: ', (year) => {
    if(year.length == 4){
        var result = ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0));
        if(result == true){
            console.log('This is a Leap Year');
        }
        else{
            console.log('This is not a Leap Year');
        }
    }
    else{
        console.log('Enter a valid year');
    }


r1.close();
});