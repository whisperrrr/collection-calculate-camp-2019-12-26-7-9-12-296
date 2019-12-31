'use strict';
//思路：acc是累加值，保存两个数组的差。然后让cur与b进行相减，把差给acc，最后的acc为0就全部相等
function compare_collections(collection_a, collection_b) {
  var result = collection_a.reduce((acc,cur,index) => acc + cur - collection_b[index]);
  return result? true:false;
}

module.exports = compare_collections;


