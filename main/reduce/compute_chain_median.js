'use strict';

function compute_chain_median(collection) {
  var arrChain = collection.split("->");
  var arrLength = arrChain.length;
  arrChain = arrChain.sort((a,b) => a - b);
  arrChain = arrChain.map(x => parseInt(x));
  if (arrLength % 2 === 0) {
    return (arrChain[arrLength/2]+arrChain[arrLength/2-1])/2;
  }
  else {
    return arrChain[(arrLength-1)/2];
  }
}

module.exports = compute_chain_median;
