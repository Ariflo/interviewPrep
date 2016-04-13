//insertion sort: write a function that will take in an array of numbers and sort the right most element to the correct spot 
//input: [1,3,4,5,7,2]
//output: [1,2,3,4,5,7]

function sortArray (arr){
	for (var i = arr.length - 1; i >= 0; i--) {
		//less than the left niehbor, swap
		if(arr[i] < arr[i - 1]){
			var tmp = arr[i];
			arr[i] = arr[i - 1];
			arr[i - 1] = tmp;
		}
	}
	return arr; 
}

console.log(sortArray([1,3,4,5,7,2]));