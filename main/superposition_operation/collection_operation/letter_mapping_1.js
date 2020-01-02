'use strict';

function even_to_letter(collection) {
  var str=['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var result = collection.filter(ele => ele % 2 === 0);
  result = result.map(ele => str[ele]);
  return result;
}

module.exports = even_to_letter;
