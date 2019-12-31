'use strict';

function collect_min_number(collection) {
  var result = collection.reduce((acc,cur) => Math.min(acc,cur));
  return result;
}

module.exports = collect_min_number;

