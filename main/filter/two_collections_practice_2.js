'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var result = collection_a.filter(element => collection_b.indexOf(element) === -1);
  return result;
}

module.exports = choose_no_common_elements;
