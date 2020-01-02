'use strict';

function median_to_letter(collection) {
  var str=[
    '0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'aa','ab','ac','ad','ae','af','ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap','aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay','az', 
    'ba'
    ];
  var arrMedian = compute_median(collection);
  return str[Math.ceil(arrMedian)];
}
function compute_median(collection) {
  var arrLength = collection.length;
  collection = collection.sort((a,b) => a-b);
  if (arrLength % 2 === 0) {
    return (collection[arrLength/2] + collection[arrLength/2-1]) / 2;
  }
  else {
    return collection[(arrLength-1)/2];
  }
}

module.exports = median_to_letter;
