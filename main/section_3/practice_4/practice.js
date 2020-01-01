function create_updated_collection(collection_a, object_b) {
  var collection_c = count_same_elements(collection_a);
  var result = create_updated_collection_old(collection_c, object_b);
  return result;
}
function count_same_elements(collection) {
  var left = 0;
  var right = left + 1;
  var result = [];
  var resultCount;
  var arrLength = collection.length;
  var count = 0;
  while (right <= arrLength) {
    var baseWord = transToWordObject(collection[left]);
    var currentWord = transToWordObject(collection[right]);
    if (baseWord.word !== currentWord.word) {
      resultCount = {};
      resultCount.key = baseWord.word;
      resultCount.count = count + baseWord.count;
      left = right;
      result.push(resultCount);
      count = 0;
    }
    else {
      count = count + currentWord.count;  
    }
    right += 1;
  }
  return result;
}
//将每个元素转成一个对象
function transToWordObject(word) {
  var wordArr;
  var result = {};
  if (!word) {
    result.word = "";
    result.count = 0; 
    return result;   
  }
  if (word.length !== 1) {
    wordArr = word.split("-");
    result.word = wordArr[0];
    result.count = parseInt(wordArr[1]);
  }
  else {
    result.word = word;
    result.count = 1;
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
