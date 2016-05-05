// Oh no, our Math object was "accidently" reset. 
//Can you re-implement some of those functions? 
//We can assure, that only non-negative numbers are passed as arguments. 
//So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

//returns the value of a number rounded to the nearest integer.
//0.4 returns 0
//0.5 returns 1
Math.round = function(number) {
	var strNum = number.toString();
	var deciIndex = strNum.indexOf('.');
	if(deciIndex !== -1){
		var tenths = parseInt(strNum[deciIndex + 1]);
		if(tenths < 5){
		        var roundNum = strNum.slice(0, -deciIndex);
		        return parseInt(roundNum);
		}else{
		        var roundUp = number + 1;
		        strNum = roundUp.toString();
		        var roundNum = strNum.slice(0, -deciIndex);
		        return parseInt(roundNum);
		}	

	}else{
		return number;
	}
};

//returns the smallest integer greater than or equal to a given number.
//0.4 returns 1
//0.5 returns 1
Math.ceil = function(number) {
	var strNum = number.toString();
	var deciIndex = strNum.indexOf('.');
	if(deciIndex !== -1){
		var wholeNum = parseInt(strNum.slice(0, -deciIndex));
		return wholeNum + 1;
	}else{
		return number;
	}
};

//returns the largest integer less than or equal to a given number.
//0.4 returns 0
//0.5 returns 0
Math.floor = function(number) {
 var strNum = number.toString();
 var deciIndex = strNum.indexOf('.');
 if(deciIndex !== -1){
 	var wholeNum = parseInt(strNum.slice(0, -deciIndex));
 	if(wholeNum === 0){
 		return 0;
 	}else{
 		return wholeNum - 1;
 	}
 }else{
 	return number;
 }
};

console.log(Math.round(855.390));
console.log(Math.ceil(855.390));
console.log(Math.ceil(0.390));
console.log(Math.floor(0.4));
console.log(Math.floor(0.390));
