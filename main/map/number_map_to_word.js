'use strict';
var number_map_to_word = function(collection){
  var str=['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var result = collection.map(x => str[x]);
  return result;
};

module.exports = number_map_to_word;
