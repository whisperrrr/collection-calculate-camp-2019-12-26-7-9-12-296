'use strict';
var single_element = function(collection){  
  var evenArr = getEvenArr(collection);
  var result = selectUnRepeat(evenArr);
  return result;
};
function getEvenArr(collection) {
  var evenArr = [];
  var arrLength = collection.length;
  for (var i = 1; i < arrLength;) {
    evenArr.push(collection[i]);
    i += 2;
  }
  return evenArr;
}
function selectUnRepeat(arr) {
  var result = [];
  arr.forEach(function(ele, i ,arr) {   
  if(arr.indexOf(ele) === arr.lastIndexOf(ele)){
   result.push(ele);
  }
 })
 return result;
}
module.exports = single_element;
