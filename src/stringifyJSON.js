// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// used for stringifyJSON spec
// hint: JSON does not allow you to stringify functions or
// undefined values, so you should skip those key/value pairs.


// unstringifiableValues = [
//   {
//     'functions': function() {},
//     'undefined': undefined
//   }
// ];


var stringifyJSON = function(obj) {

    var emptyArray = [];
    var emptyObject = {};
    var emptyString = '';
	if (typeof(obj) === 'string' || typeof(obj) === 'number' || typeof(obj) === 'boolean' || obj === null){
	  emptyString += obj;
	  if (typeof(obj) === 'string'){
	  	emptyString = '"' + emptyString + '"';
	  }
	  return emptyString;
	}
	else if(Array.isArray(obj)){
      obj.forEach(function(element){
      emptyArray.push(stringifyJSON(element));
    });
      return '[' + emptyArray.join(',') + ']';
    }
    else if (typeof(obj) === 'object'){
	  for (var property in obj){
        if (property === 'functions' || property === 'undefined'){
        	return '{}';
        }
        var empty = stringifyJSON(property) + ':' + stringifyJSON(obj[property]);
        emptyArray.push(empty);
	  }
	  return '{' + emptyArray.join(',') + '}';
	}
};
