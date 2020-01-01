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
      resultCount.name = baseWord.word;
      resultCount.summary = count + baseWord.count;
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
  //元素为空，针对右指针溢出
  if (!word) {
    result.word = "";
    result.count = 0; 
    return result;   
  }
  //特殊元素
  if (word.length !== 1) {
    switch (word[1]) {
      case "-" :
        result.word = word[0];
        result.count = parseInt(word.slice(2));
        break;
      case ":" :
        result.word = word[0];
        result.count = parseInt(word.slice(2));
        break;
      case "[" :
        result.word = word[0];
        result.count = parseInt(word.slice(2,-1));
        break;
      default:
          console.log("wrong word");
    }
  }
  else {
    result.word = word;
    result.count = 1;
  }
  return result;
}
module.exports = count_same_elements;
