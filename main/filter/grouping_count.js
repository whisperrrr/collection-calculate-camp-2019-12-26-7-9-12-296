'use strict';
//思路：和上一题是一样的，index和indexOf是一样的时候就是第一次出现
function grouping_count(collection) {
  var result = {};
  var arrFilter = collection.filter(calculate);
  function calculate(ele,index) {
    if (collection.indexOf(ele) === index) {
      result[ele] = 1;
    }
    else {
      result[ele] += 1;
    }
    return true;
  }
  return result;
}

module.exports = grouping_count;
