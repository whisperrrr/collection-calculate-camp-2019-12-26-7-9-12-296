'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var result = collection_a.filter(isDivision);
  function isDivision(element) {
    var bLength = collection_b.length;
    for (var i = 0; i < bLength; i++) {
      if(element % collection_b[i] === 0) {
        return true;
      }
    }
    return false;
  }
  return result;
}

module.exports = choose_divisible_integer;
