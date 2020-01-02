'use strict';

function hybrid_operation_to_uneven(collection) {
  var oddArr = collection.filter(ele => ele % 2 !== 0);
  var arrResult = oddArr.map(x => x * 3 + 5);
  var result = arrResult.reduce((acc,cur) => acc + cur);
  return result;
}

module.exports = hybrid_operation_to_uneven;

