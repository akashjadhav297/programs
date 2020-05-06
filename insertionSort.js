var arr = [45, 20, 49, 16, 301, 477, 82, 99]
var n = arr.length;
for(let i=1;i<n;i++)
		{
			var key = arr[i];
			var j = i-1;
			
			while(j >= 0 && arr[j] > key)
			{
				arr[j+1] = arr[j];
				j = j-1;
				
			}
			arr[j+1] = key;
        }
        
console.log('Sorted array is : '+arr);