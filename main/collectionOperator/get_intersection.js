'use strict';
// filter用法
function get_intersection(collection_a, collection_b) {
  var result = collection_b.filter(inArray);
  function inArray(element) {
    return collection_a.indexOf(element) > -1;
  }
  return result;
}

// 快慢指针，复杂度小，但是改变了数组的顺序
// function get_intersection(collection_a, collection_b) {
//   var aLength = collection_a.length;
//   var bLength = collection_b.length;
//   var result = [];
//   collection_a.sort();
//   collection_b.sort();
//   for (var i=0,j=0;i<aLength,j<bLength;) {
//     if (collection_a[i] === collection_b[j]) {
//       result.push(collection_a[i]);
//       i++;
//       j++;
//     }else if (collection_a[i] < collection_b[j]) {
//       i++;
//     }else {
//       j++;
//     }
//   }
//   return result;
// }

module.exports = get_intersection;
