//Binary search will return the index of the search value 
function binarySearch (arr, searchValue){
	//create a pointer to the front, end, and center of the array
	var midpoint = Math.floor(arr.length/2);
	var firstIndex = 0;
	var lastIndex = arr.length - 1; 

	//run a loop through the array changing the pointers until the search value is found
	while(searchValue !== arr[midpoint]){

		if (searchValue > arr[midpoint]){
			firstIndex = midpoint + 1; 
			midpoint = Math.floor((firstIndex + lastIndex)/ 2);

		}else if(searchValue < arr[midpoint]){
			lastIndex = midpoint - 1; 
			midpoint  = Math.floor((firstIndex +lastIndex)/2);
		}else{
			return -1; 
		}
	}
	return midpoint;
}

//Binary search will return the index of the search value (recursively)
function binaryRecursive(arr, searchValue, firstIndex, lastIndex){

	if(firstIndex === undefined || lastIndex === undefined){
		firstIndex = 0; 
		lastIndex = arr.length - 1;
	}

	var midpoint = Math.floor((firstIndex + lastIndex)/2);

	if(searchValue === arr[midpoint]){
		return midpoint;

	}else if(searchValue > arr[midpoint]){
		firstIndex = midpoint + 1; 
		return binaryRecursive(arr, searchValue, firstIndex, lastIndex);

	}else if (searchValue < arr[midpoint]){
		lastIndex = midpoint - 1; 
		return binaryRecursive(arr, searchValue, firstIndex, lastIndex);

	}else{
		return -1; 
	}

}

module.exports = {
	binarySearch: binarySearch,
	binaryRecursive:binaryRecursive
};