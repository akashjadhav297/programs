var array = [1, -2, 1, 3, 4, -7, 0, 2];
var count = 0;
for(let i=0;i<array.length;i++)
{
    for(let j=i+1;j<array.length;j++)
    {
        for(k=j+1;k<array.length;k++)
        {
            if (array[i] + array[j] + array[k] == 0)
            {
                console.log(array[i] + " " + array[j] + " " + array[k]);
                count++;
            }
        }
    }
}
console.log('Number of triplets are '+count);