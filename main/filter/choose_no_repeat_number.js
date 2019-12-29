'use strict';
//思路：indexOf返回的是数组中第一个找到的元素.
//所以第一次出现的元素返回的下标和处理中的下标是一致的
function choose_no_repeat_number(collection) {
  var result = collection.filter(findNoRepeat);
  function findNoRepeat(element,index) {
    return collection.indexOf(element) === index;
  }
  return result;
}
module.exports = choose_no_repeat_number;
