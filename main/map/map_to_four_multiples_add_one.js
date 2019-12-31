'use strict';
var map_to_four_multiples_add_one = function(collection){
  var result = collection.map(x => 4 * x + 1);
  return result;
};

module.exports = map_to_four_multiples_add_one;
