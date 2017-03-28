// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var nodeList = [];
  var wholeBody = document.body;
  
  function tester(element){
   
    if(_(element.classList).contains(className)){
      nodeList.push(element);
    }
   
   _(element.childNodes).forEach(function(x) {
    tester(x);
    //console.log(property);
    //console.log(element.childNodes[property]);
   });
  }
  tester(wholeBody);
  console.log(nodeList);
  return nodeList;
};

c 

//classList is a list of something that contains all the classes 
//check element.classList > does it have the className? push into the array
//check element.childNodes > does it have the className(recursively call the function on each nodes)