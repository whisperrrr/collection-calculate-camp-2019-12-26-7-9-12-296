'use strict';
//方法一：循环实现，将满足偶数的push到result里面
//速度：4ms
function collect_all_even(collection) {
  var result = [];
  var length = collection.length;
  for (var i = 0; i < length; i++) {
    if (collection[i] % 2 == 0) {
      result.push(collection[i]);
    }
  }
  return result;
}
// //方法二：array.filter() 将满足条件的过滤出来
// //速度：3ms
// function collect_all_even(collection) {
//   var result = collection.filter(collection => collection % 2 == 0);
//   return result;
// }
// //速度：4ms
// function collect_all_even(collection) {
//   var result = collection.filter(function(element) {return element % 2 == 0});
//   return result;
// }
// //速度：4ms
// function collect_all_even(collection) {
//   var result = collection.filter(isEvenNum);
//   function isEvenNum(element) {
//     return element % 2 == 0;
//   }
//   return result;
// }

module.exports = collect_all_even;
