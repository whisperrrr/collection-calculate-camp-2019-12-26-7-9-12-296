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

module.exports = count_same_elements;
