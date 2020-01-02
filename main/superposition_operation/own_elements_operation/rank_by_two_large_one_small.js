'use strict';
function rank_by_two_large_one_small(collection){
  var arrSorted = collection.sort((a,b) => a - b);
  var result = [];
  var arrLength = collection.length;
  while (collection.length >= 3) {
    var arrPiece = collection.splice(0,3);
    var arrPieceMin = arrPiece.shift();
    arrPiece.push(arrPieceMin);
    result.push(arrPiece);
  }
  return result.flat().concat(collection);

}
module.exports = rank_by_two_large_one_small;
