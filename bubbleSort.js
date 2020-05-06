var array = [45, 20, 49, 16, 301, 477, 82, 99];
var n = array.length;
for(let i=0;i<n-1;i++)
{
    for(let j=0;j<n-i-1;j++)
    {
        if(array[j]>array[j+1])
        {
			var temp = array[j];
			array[j] = array[j+1];
			array[j+1] = temp;
        }
    }
}
console.log("Array after sorting: " + array);
