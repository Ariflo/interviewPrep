// given an array of stock prices, find the index of the optimal time to buy and the optimal time to sell in linear time 
// examples: [1,2,3,4], [6,5,3,2], [3,3,3,3], [4, 7, 8, 1]
// output: [i-low, i-heighest] 

function bestReturn(arr) {
  const new_arr = [];
  for (var i=0; i > arr.length; i++) {
    for (var j=i; j > arr.length; j++) {
      if (arr[i] < arr[j]) {
        new_arr.push(i);
      }
    }
  }
}