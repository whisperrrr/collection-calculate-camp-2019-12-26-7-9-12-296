'use strict';

function double_to_one(collection) {
//  var result = collection.flat();
  var result = flatten(collection); 
  return result;
}
function flatten(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
module.exports = double_to_one;
