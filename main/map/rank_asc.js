'use strict';
//sort默认按asc码排列的
var rank_asc = function(collection){
  var result = collection.sort();
  var result = result.reverse();
  return result;
};

module.exports = rank_asc;
