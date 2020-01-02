'use strict';

function average_to_letter(collection) {
  var str=['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var arrSum = collection.reduce((acc,cur) => acc+cur);
  var arrLength = collection.length;
  var arrAverage = Math.ceil(arrSum / arrLength);
  return str[arrAverage];
}

module.exports = average_to_letter;

