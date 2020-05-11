function sort(data)
{
    var n = data.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=0;j<n-i-1;j++)
        {
            if(data[j]>data[j+1])
            {
			    var temp = data[j];
			    data[j] = data[j+1];
			    data[j+1] = temp;
            }
        }
    }
    console.log("Data after sorting: " + data);
}

var fs = require('fs');
const value = 'values.txt'

fs.exists(value, function(exist){
    if(exist){
        fs.stat(value, function(err, statCheck){
            if(statCheck.isFile())
            {
                fs.readFile(value, function(err, data)
                {
                    if(err)
                    {
                        throw err
                    }
                    else
                    {
                        var array = data.toString().split(",");
                        var newArray = array.map(Number);
                        sort(newArray);
                    }
                })
            }
        })
    }
    else{
        throw 'File does not exist...!';
    }
})