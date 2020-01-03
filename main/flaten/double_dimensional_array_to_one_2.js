'use strict';

function double_to_one(collection) {
//  var result = collection.flat();
  var result = flatten(collection);
  result = result.filter(isRepeat);
  function isRepeat(ele,index) {
    if (result.indexOf(ele)===index) {
      return true;
    }
    return false;
  }
  return result;
}
function flatten(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
module.exports = double_to_one;
