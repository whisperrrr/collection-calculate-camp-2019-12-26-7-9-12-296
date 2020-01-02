'use strict';

function average_uneven(collection) {
  var result = 0;
  var arrLength = collection.length;
  for (var i = 0; i < arrLength; i++) {
    if( collection[i] % 2 !== 0) {
      result += collection[i];
    }
  }
  return result / (arrLength / 2);
}

module.exports = average_uneven;
