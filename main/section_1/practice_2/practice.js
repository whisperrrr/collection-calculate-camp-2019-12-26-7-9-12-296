function collect_same_elements(collection_a, collection_b) {
  var result;
//  collection_b = collection_b.flat();
  collection_b = flatten(collection_b);
  result = collection_a.filter(ele => collection_b.indexOf(ele) > -1);
  return result;
}
function flatten(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
module.exports = collect_same_elements;
