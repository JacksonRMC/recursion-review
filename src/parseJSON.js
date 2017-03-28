// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
 
 for(var i = 0; i < json.length + 1; i++){
 	var char = json[i];
 	if(char === '{'){
 		//something for objects
 	} else if(char === '['){
 		//something for arrays
 	} else if(char === '\"'){
 		return str.substr(1, string.length - 1);
 	} else if(char === 't' && [char, (char+1), (char + 2), (char + 3)].join("") === 'true'){
 		return true;
 	}else if(char === 'f' && ([char, (char+1), (char + 2), (char + 3), (char + 4)].join("") === 'false')){
 		return false;
 	} else if(char === 'n' && ([char, (char+1), (char + 2), (char + 3)].join("") === 'null')){
 		return null;
 	} else {
 		return undefined;
 	}
 	



 }
};
