//Is Unique: Implement an algoritihim to determine if a string has all unique characters. 
//What if you cannot use additional data structures

function isUnique (str){

	var dict = {};

	for(var i = 0; i < str.length; i++){
		if(!dict[str[i]]){
			dict[str[i]] = str.charCodeAt(i);  
		}else{
			return false; 
		}
	}
	return true;
}

//String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another. 
//Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring 
//(e.g., "waterbottle" is a rotation of "erbottlewat").

function isRotated (s1, s2) {

	var lowS1 = s1.toLowerCase();
	var lowS2 = s2.toLowerCase();

	for(var i = 1; i < lowS1.length; i++){

		var frontStr = lowS1.slice(0, i);
		var backStr = lowS1.slice(i, lowS1.length);
		backStr += frontStr;

		if(backStr === lowS2){
			return true;
		}
	}
	return false;
	
	

	function _isSubstring (string1, string2){
		if(string1.indexOf(string2) > -1){
			return true;
		}else{
			return false;
		}
	}
}


//Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
//A palindrome is a word or phrase  that is the same forwards and backwards. A permutation 
//is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 
//word: Tact Coa return: true
function isPermutationOfPalindrome(str) {
	var lowStr = str.toLowerCase().replace(/ /g,'');
	var dict = {};

	for(var i = 0; i < lowStr.length; i++){
		if(!dict[lowStr[i]]){
			dict[lowStr[i]] = 1; 

		}else{
			dict[lowStr[i]] += 1;
		}
	}

	var oddCount = 0; 
	for(var letter in dict){
		if(dict[letter] % 2 !== 0){
			oddCount += 1; 
		}

		if(oddCount > 1){
			return false;
		}
	}
	return true; 
}


module.exports = {
	isUnique:isUnique,
	isRotated:isRotated,
	isPermutationOfPalindrome: isPermutationOfPalindrome
};

