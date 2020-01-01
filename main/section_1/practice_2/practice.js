function collect_same_elements(collection_a, collection_b) {
  var result;
  collection_b = collection_b.flat();
  result = collection_a.filter(ele => collection_b.indexOf(ele) > -1);
  return result;
}

module.exports = collect_same_elements;
