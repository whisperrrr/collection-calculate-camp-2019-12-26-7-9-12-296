'use strict';
var calculate_average = function(collection){
  var result = 0;
  var evenCount = 0;
  var arrLength = collection.length;
  for (var i = 2; i < arrLength;) {
    result += collection[i];
    i += 2;
    evenCount += 1;
  }
  return result / evenCount;
};
module.exports = calculate_average;
