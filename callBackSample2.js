var file = 'values.txt'
var insSort = require('./insertionSort')
const fs = require('fs')

function readForSort()
{
    fs.exists(file, checkExist)
    function checkExist(exists)
    {
        if(exists)
        {
            fs.stat(file, statCheck)
        }
        else
        {
            console.log('File does not exist....!');
        }
    }
    
    function statCheck(err, stats)
    {
        if(stats.isFile())
        {
            fs.readFile(file, readFiles)
        }
    }
    
    function readFiles(err, data)
    {
        const arrayData = data.toString().split(", ");
        const numberArray = arrayData.map(Number);
        insSort(numberArray, function(sortedArray){
            console.log(sortedArray);
        });
        
    }
}

readForSort();