function collect_same_elements(collection_a, object_b) {
  var arrA = getArrKey(collection_a);
  var arrB = object_b.value;
  var result = arrA.filter(ele => arrB.indexOf(ele) > -1);
  function getArrKey(collection_a) {
    var arrA = [];
    var aLength = collection_a.length;
    for (var i = 0; i < aLength; i++) {
      arrA.push(collection_a[i].key);
    }
    return arrA;
  }
  return result;
}

module.exports = collect_same_elements;
