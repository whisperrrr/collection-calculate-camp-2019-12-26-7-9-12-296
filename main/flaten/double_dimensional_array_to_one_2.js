'use strict';

function double_to_one(collection) {
  var result = collection.flat();
  result = result.filter(isRepeat);
  function isRepeat(ele,index) {
    if (result.indexOf(ele)===index) {
      return true;
    }
    return false;
  }
  return result;
}

module.exports = double_to_one;
