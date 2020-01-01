function create_updated_collection(collection_a, object_b) {
  var collection_c = count_same_elements(collection_a);
  var result = create_updated_collection_old(collection_c, object_b);
  return result;
}
function count_same_elements(collection) {
  //对于排好序的情况，考虑左右指针
  var left = 0;
  var right = left + 1;
  var result = [];
  var resultCount;
  var arrLength = collection.length;
  while (right <= arrLength) {
    if (collection[left] !== collection[right]) {
      resultCount = {}
      resultCount.key = collection[left];
      resultCount.count = right - left;
      left = right;
      result.push(resultCount);
    }
    right += 1;   
  }
  return result;
}
function create_updated_collection_old(collection_a, object_b) {
  for (var i = 0; i < collection_a.length; i++) {
    for (var j = 0; j < object_b.value.length; j++) {
      if (collection_a[i].key === object_b.value[j]) {
        collection_a[i].count = collection_a[i].count - Math.floor(collection_a[i].count / 3);
      }
    }
  }
  return collection_a;
}
module.exports = create_updated_collection;
