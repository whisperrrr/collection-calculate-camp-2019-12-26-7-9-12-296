'use strict';
var is_exist_element = function(collection,element){
  var evenArr = getEvenArr(collection);
  var result = isInArr(evenArr,element);
  return result;
};
function getEvenArr(collection) {
  var evenArr = [];
  var arrLength = collection.length;
  for (var i = 2; i < arrLength;) {
    evenArr.push(collection[i]);
    i += 2;
  }
  return evenArr;
}
function isInArr(evenArr,element) {
  return evenArr.indexOf(element) > -1;
}
module.exports = is_exist_element;
