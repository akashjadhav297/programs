const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter the number of rowws', (m) => {
r1.question('Enter the number of columns', (n) => {

    var array1 = [];
    for(let i=0;i<m;i++)
    {
        array1[i] = [];
    }
    
    for(let i=0;i<m;i++)
    {
        for(let j=0;j<n;j++)
        {
            r1.question('Enter element', (array1[i][j]) => {
        }
    }

    for(let i=0;i<matchMedia;i++)
    {
        for(let j=0;j<n;j++)
        {
            console.log(array1[i][j]+' ');
        }
    }
r1.close();
});
});
});