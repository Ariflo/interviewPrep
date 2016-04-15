//
function breadthSearch (node, searchValue){
	return ;
}

//
function depthSearch(node, searchValue){
	return ;
}

//return's the nth number of the fibonacci sequence 
//ie...0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
// function fibonacci (n){
// 	if (n === 0 || n === 1){
// 		return 1; 
// 	}

// 	var curNum = 0;
// 	var nextNum = 1;
// 	var fibNum;

// 	for(var i = 1; i < n; i++){
// 		fibNum = curNum + nextNum;
// 		curNum = nextNum; 
// 		nextNum  = fibNum;
// 	}
// 	return fibNum;
// }

// function factorial (n){
// 	if(n === 0){
// 		return 1;
// 	}

// 	var ft = factorial(n - 1) * n;

// 	return ft;
// }

module.exports = {
	breadthSearch: breadthSearch,
	depthSearch:depthSearch,
	// fibonacci: fibonacci,
	// factorial: factorial
};