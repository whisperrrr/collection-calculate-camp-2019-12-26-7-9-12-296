'use strict';

function find_last_even(collection) {
  var result = collection.filter(ele => ele % 2 === 0);
  var arr_length = result.length;
  return result[arr_length-1]
}

module.exports = find_last_even;
