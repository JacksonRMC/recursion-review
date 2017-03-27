// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
 
 //return value is an array of childNodes
 	var nodeArray = [];
 	var wholeBody = document.body;
 	//console.log(wholeBody.classList);
  //document is everything
  function getClassNames(element){
  	console.log(element.childNodes)
  	if(element.classList && element.classList.contains(className)){
  		nodeArray.push(element);
  	}

  	element.childNodes.forEach(function(x){
  		getElementsByClassName(x);
  	})
  }

  getClassNames(wholeBody);
 
  return nodeArray;
  	//check if it has a class lsit, then check if the element we are looking for .includes() childNode
  	//classList
  	  //childNodes
};

console.log(getElementsByClassName('targetClassName'));
//console.log(document.getElementsByClassName('targetClassName'));
