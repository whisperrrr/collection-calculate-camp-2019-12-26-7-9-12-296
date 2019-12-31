'use strict';
var number_map_to_word_over_26 = function(collection){
  var str=[
    '0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'aa','ab','ac','ad','ae','af','ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap','aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay','az', 
    'ba'
    ];
  var result = collection.map(x => str[x]);
  return result;
};

module.exports = number_map_to_word_over_26;
