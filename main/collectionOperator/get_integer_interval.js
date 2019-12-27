'use strict';

function get_integer_interval(number_a, number_b) {
  var result = [];
  var flag = number_a - number_b;
  var max = Math.max(number_a, number_b);
  var min = Math.min(number_a, number_b);
  for (var i = min; i <= max; i++) {
    result.push(i);
  }
  return flag<0 ? result:result.reverse();
}

module.exports = get_integer_interval;

