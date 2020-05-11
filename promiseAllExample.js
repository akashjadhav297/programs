const fs = require('fs');
const util = require('util');
var file = 'values.txt'

var existsFile = util.promisify(fs.exists);
var statCheck = util.promisify(fs.stat);
var readFile = util.promisify(fs.readFile);

Promise.all([
    existsFile(file),
    existsFile('pizza.txt')
])
.then(stat=>{
  return  Promise.all([
        statCheck(file),
        statCheck('pizza.txt')
    ])
})
.then(info=>{
   return Promise.all([
        readFile(file),
        readFile('pizza.txt')
    ])
})
.then(data=>{
    const [data1 , data2] = data;
    console.log((data.toString()));
    console.log(('\n'+data2.toString()));
})