'use strict';

function compute_average(collection) {
  var result = collection.reduce((acc,cur) => acc + cur);
  var accLenght = collection.length;
  return result / accLenght; 
}

module.exports = compute_average;

