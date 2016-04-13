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




module.exports = {
	isUnique:isUnique,
	isRotated:isRotated
};

