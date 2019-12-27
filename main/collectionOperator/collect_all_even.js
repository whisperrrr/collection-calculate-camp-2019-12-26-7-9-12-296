'use strict';

function collect_all_even(collection) {
  // var result = [];
  // var length = collection.length;
  // for (var i = 0; i < length; i++) {
  //   if (collection[i] % 2 == 0) {
  //     result.push(collection[i]);
  //   }
  // }
  // return result;
  var result = collection.filter(collection => collection%2 == 0);
  return result;
}
module.exports = collect_all_even;
