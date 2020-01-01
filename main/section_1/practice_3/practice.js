function collect_same_elements(collection_a, object_b) {
  var result;
  collection_b = object_b.value;
  result = collection_a.filter(ele => collection_b.indexOf(ele) > -1);
  return result;
}

module.exports = collect_same_elements;
