const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('What is the Username? ', (username) => {
    if(username.length >=3){
        console.log('Hello '+username);
    }
    else{
        console.log('Username should have atleast 3 characters');
    }

    r1.close();
});