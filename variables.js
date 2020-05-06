/*
*Testing var which will print undefined as varis created but not initialized at very initial level
*scope is within the function
*/
console.log(data);
var data = 15;
console.log(data);

/*
*scope is within the block
*/

console.log(testLet);
let testLet = 16;
console.log(testLog);

/*
*/
const testConstant = 17;
testConstant = 20;
console.log(testConstant);