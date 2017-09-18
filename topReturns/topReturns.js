function topReturns(arr) {
	var min = arr[0];
	var maxProfit = arr[1] - arr[0];

	for(var i = 0; i<arr.length; i++){
		var currentPrice = arr [i];
		min = Math.min(currentPrice, min);
		var tmpProfit = currentPrice - min
		maxProfit = Math.max(maxProfit,tmpProfit);
	}
	return maxProfit;
}

console.log(topReturns([3,2,1]));

//Given an array of stock prices, find the index of the optimal time to buy and the optimal time to sell
function bestBuySellTimes(arr) {
	var min;
	var maxProfit = topReturns(arr);
	
	var dict = {};
	for (var i = 0; i<arr.length; i++) {
		dict[arr[i]] = i;
	}
	var new_arr = [];
	
	for(var i = 0; i<arr.length; i++) {
		var currentPrice = arr [i];
		min = Math.min(currentPrice, min);
		var tmpProfit = currentPrice - min
		if (maxProfit === tmpProfit) {
			new_arr.push(dict[min]);
			new_arr.push(dict[currentPrice]);
		}
	}
	return new_arr;
}

console.log(bestBuySellTimes([13, 10, 25, 6, 90]));
//[3, 4]