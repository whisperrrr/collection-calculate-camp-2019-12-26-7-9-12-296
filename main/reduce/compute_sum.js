'use strict';

function calculate_elements_sum(collection) {
  var result = collection.reduce((acc,cur) => acc + cur);
  return result;
}

module.exports = calculate_elements_sum;

