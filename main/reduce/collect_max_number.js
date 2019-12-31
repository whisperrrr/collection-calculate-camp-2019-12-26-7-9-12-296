'use strict';

function collect_max_number(collection) {
  var result = collection.reduce((acc,cur) => Math.max(acc,cur));
  return result;
}

module.exports = collect_max_number;
