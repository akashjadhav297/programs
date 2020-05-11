var fs = require('fs');
var util = require('util');
var file = 'values.txt';

var existFile = util.promisify(fs.exists);
var statCheck = util.promisify(fs.stat);
var readFile = util.promisify(fs.readfile);

existFile(file)
.then((exists)=>{
    if(exists)
    {
        console.log(exists);
        return statCheck(file);        
    }
})

.then((statCh)=>{
    if(statCh)
    {
        console.log(statCh.isFile());
        return readFile(file);
    }
})

.then((info)=>{
    console.log(info.toString());    
})