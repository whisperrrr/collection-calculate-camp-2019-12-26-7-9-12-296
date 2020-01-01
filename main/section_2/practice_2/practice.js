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

module.exports = count_same_elements;
