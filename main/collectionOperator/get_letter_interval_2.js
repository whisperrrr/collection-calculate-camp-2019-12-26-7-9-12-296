'use strict';

function get_letter_interval_2(number_a, number_b) {
  var str=[
  '0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  'aa','ab','ac','ad','ae','af','ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap','aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay','az', 
  'ba'
  ];
  var result = [];
  if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      result.push(str[i]);
    }
  }else if (number_a > number_b) {
    for (var i = number_b; i <= number_a; i++) {
      result.push(str[i]);
    } 
    result.reverse();
  }else {
    result.push(str[number_a]);
  }
  return result;
}

module.exports = get_letter_interval_2;
// 字符转数字 
// "".charCodeAt();
// "a".charCodeAt()=97
// 数字转字符
// String.fromCharCode(数字);

