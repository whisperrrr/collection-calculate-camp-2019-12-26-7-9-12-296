'use strict';
// 先求出b中a没有的元素，然后再将两个数组结果加起来
function get_union(collection_a, collection_b) {
  var result = collection_b.filter(inArray);
  function inArray(element) {
    return collection_a.indexOf(element) == -1;
  }
  result = collection_a.concat(result);
  return result;
}

module.exports = get_union;

