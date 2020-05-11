var fs = require('fs');
var file = "values.txt";

function readFromFile()
{
    return new Promise(function (resolve, reject)
    {
        try {
            fs.exists(file, function(exist){
                if(exist)
                {
                    resolve(exist);
                }
            })
        }
        catch(error) {
            reject(error);
        }
    })
    .then((exist)=> {
        console.log('exist : '+exist);
        return new Promise(function(resolve, reject){
            if(exist)
            {
                fs.stat(file, function(err, statCheck){
                    if(statCheck)
                    {
                        console.log('In exist : '+ statCheck.isFile());
                        resolve(statCheck);
                    }
                })
            }
        })
    })
    .then((statC)=>{
        return new Promise(function(resolve, reject){
            try{
                if(statC.isFile())
                {
                    fs.readFile(file, function(err, data){
                        resolve(data);
                        console.log(data.toString());
                    })

                }
            }
            catch(error)
            {
                rejct(err);
            }
        })
    })
}
readFromFile();
