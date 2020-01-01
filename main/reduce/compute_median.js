'use strict';

function compute_median(collection) {
  var arrLength = collection.length;
  collection = collection.sort((a,b) => a-b);
  if (arrLength % 2 == 0) {
    return (collection[arrLength/2] + collection[arrLength/2-1]) / 2;
  }
  else {
    return collection[(arrLength-1)/2];
  }
}

module.exports = compute_median;


