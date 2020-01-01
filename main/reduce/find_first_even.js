'use strict';

function find_first_even(collection) {
  var result = collection.filter(ele => ele % 2 === 0);
  return result[0];  
}

module.exports = find_first_even;

