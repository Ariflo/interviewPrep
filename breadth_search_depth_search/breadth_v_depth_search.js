//
function breadthSearch (node, searchValue){
	
}

//
function depthSearch(node, searchValue){
	
}

//return's the nth number of the fibonacci sequence 
//ie...0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
function fibonacci (n){
	if (n === 0 || n === 1){
		return 1; 
	}

	var curNum = 0;
	var nextNum = 1;
	var fibNum;

	for(var i = 1; i < n; i++){
		fibNum = curNum + nextNum;
		curNum = nextNum; 
		nextNum  = fibNum;
	}
	return fibNum;
}

function factorial (n){
	if(n === 0){
		return 1;
	}

	var ft = factorial(n - 1) * n;

	return ft;
}

//function will return true or false depending if the num is a prime number
function isPrime (num){
	//a prime number is only divisible by 1 and itself

	// run a loop backwards from the number down to 1
	//if it returns no remainder for any other number than one and itself 
	//it is not a prime

	//if any of the numbers in the seqence are multiples of num
	//other than num itself and one
	//return false
	for (var i = num - 1 ; i > 1; i--) {

		if(num % i === 0){
			return false;
		}
	}
	return true;
}

//diffrence between the sum of the squares and the square of the sums of the first nth numbers
function sOfSq(n){

	return  _squareOfSum(n) - _sumOfSquares(n); 

	function _sumOfSquares(num){
		var sqTotal = 0;

		for (var i = num; i > 0; i--) {
			var sq = i * i; 	
			sqTotal += sq;
		}
		return sqTotal;
	}

	function _squareOfSum(num) {
		var sumTotal = 0;

		for (var i = num; i > 0; i--) {
			sumTotal += i; 
		}

		return sumTotal * sumTotal;
	}
}

module.exports = {
	breadthSearch: breadthSearch,
	depthSearch:depthSearch,
	isPrime:isPrime,
	sOfSq: sOfSq,
	fibonacci: fibonacci,
	factorial: factorial
};