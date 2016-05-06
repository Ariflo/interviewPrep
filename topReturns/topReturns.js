function topReturns(arr) {
	var min = arr[0];
	var maxProfit = arr[1] - arr[0];

	for(var i = 0; i<arr.length; i++){
		var currentPrice = arr [i];
		min = Math.min(currentPrice, min);
		var tmpProfit = currentPrice -  min
		maxProfit = Math.max(maxProfit,tmpProfit);
	}
	return maxProfit;
}

console.log(topReturns([13, 10, 25, 6, 90]));