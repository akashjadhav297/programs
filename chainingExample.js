var final = function outerfunction(){
    var value = 100;
    function innerFunction()
    {
        var innerValue = 63;
        var newValue = value + innerValue;
        function innerMost()
        {
            var lastValue = 16;
            return lastValue + newValue;
        }
        return innerMost();
    }
    return innerFunction();
}

var result = final();
console.log(result);
//console.log(test);