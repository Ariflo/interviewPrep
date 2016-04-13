//Is Unique: Implement an algoritihim to determine if a string has all unique characters. 
//What if you cannot use additional data structures

function isUnique (str){

	for(var i = 0; i < str.length; i++){
		for(var j = i; j < str.length; j++){
			if(str.charCodeAt(i) === str.charCodeAt(j+1)){
				return false;
			}else{
				return true;
			}
		}
	}
}


module.exports = {
	isUnique:isUnique
};