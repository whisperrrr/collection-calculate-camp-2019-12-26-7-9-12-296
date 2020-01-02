'use strict';

function hybrid_operation(collection) {
  var mapArr = collection.map(x => x * 3 + 2);
  var result = mapArr.reduce((acc,cur) => acc + cur);
  return result;
}

module.exports = hybrid_operation;

