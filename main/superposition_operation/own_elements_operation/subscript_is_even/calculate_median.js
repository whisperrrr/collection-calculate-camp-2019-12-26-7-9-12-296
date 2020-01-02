'use strict';
var calculate_median = function(collection){
  var evenArr = getEvenArr(collection);
  var evenArrLength = evenArr.length;
  var result = compute_median(evenArr);
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
function compute_median(collection) {
  var arrLength = collection.length;
  collection = collection.sort((a,b) => a-b);
  if (arrLength % 2 === 0) {
    return (collection[arrLength/2] + collection[arrLength/2-1]) / 2;
  }
  else {
    return collection[(arrLength-1)/2];
  }
}
module.exports = calculate_median;
