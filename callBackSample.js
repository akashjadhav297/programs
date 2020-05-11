var fs = require('fs');
var file =  "pizza.txt";
console.log('Program Started');
var data = fs.readFile(file);
console.log(data.toString());
console.log('Program ended');
