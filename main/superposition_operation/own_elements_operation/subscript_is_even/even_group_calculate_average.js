'use strict';
var even_group_calculate_average = function(collection){
  var evenArr = getEvenArr(collection);
  var evenArrLength = evenArr.length;
  if (evenArrLength) {
    var result = getArrGroupAverage(evenArr);
    return result;
  }
  else {
    return [0];
  }
  
};
function getArrGroupAverage(arr) {
  var arrOneSum = 0;
  var arrOneCount = 0;
  var arrTwoSum = 0;
  var arrTwoCount = 0;
  var arrThreeSum = 0;
  var arrThreeCount = 0;
  var arrLength = arr.length;
  var result = [];
  for (var i = 0; i < arrLength; i++) {
    if (arr[i] < 10) {
      arrOneSum += arr[i];
      arrOneCount += 1;
    }
    else if(arr[i] < 100) {
      arrTwoSum += arr[i];
      arrTwoCount += 1;
    }
    else {
      arrThreeSum += arr[i];
      arrThreeCount += 1;
    }
  }
  if (arrOneCount === 0 && arrTwoCount == 0) {
    result.push(arrThreeSum / arrThreeCount);
  }
  else {
    result.push(arrOneSum / arrOneCount);
    result.push(arrTwoSum / arrTwoCount);
    result.push(arrThreeSum / arrThreeCount);
  }
  return result;
}
function getEvenArr(collection) {
  var evenArr = [];
  var arrLength = collection.length;
  for (var i = 1; i < arrLength;) {
    if (collection[i] % 2 === 0) {
      evenArr.push(collection[i]);
    }
    i += 2;
  }
  return evenArr;
}
module.exports = even_group_calculate_average;
