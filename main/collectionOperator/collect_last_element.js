'use strict';
//方法一：pop弹出最后一个元素,1ms
function collect_last_element(collection) {
  var result = collection.pop();
  return result;
}
//方法二：数组查找,1ms
// function collect_last_element(collection) {
//   var result = collection[collection.length - 1];
//   return result;
// }
module.exports = collect_last_element;
