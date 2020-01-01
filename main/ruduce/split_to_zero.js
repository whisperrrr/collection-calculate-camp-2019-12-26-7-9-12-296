'use strict';

function spilt_to_zero(number, interval) {
  var result = [number];
  while (number > 0) {
    number = Math.round((number - interval)*10)/10;
    result.push(number);
  }
  return result;
}

module.exports = spilt_to_zero;
//正常减会涉及精度问题