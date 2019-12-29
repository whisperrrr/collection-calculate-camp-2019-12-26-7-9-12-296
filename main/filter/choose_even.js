'use strict';

function choose_even(collection) {
  var result = collection.filter(e => e % 2==0);
  return result 
}

module.exports = choose_even;
