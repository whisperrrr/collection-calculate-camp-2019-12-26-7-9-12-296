'use strict';

function hybrid_operation_to_uneven(collection) {
  var oddArr = collection.filter(ele => ele % 2 !== 0);
  var result = oddArr.map(x => x * 3 + 2);
  return result;
}

module.exports = hybrid_operation_to_uneven;

