'use strict';

function get_letter_interval(number_a, number_b) {
  var str=['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
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

module.exports = get_letter_interval;
