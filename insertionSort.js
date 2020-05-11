function insertionSort(arr, callBack)
{
	console.log(arr);
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
	
	console.log('Sorted array is : ');
	callBack(arr);
}

module.exports = insertionSort;