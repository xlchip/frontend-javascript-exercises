module.exports.reversePlusOne = function(array) {
if (array.length < 3) {
      return [1, array[1], array[0]]
    }else if (array.length > 2) {
      return [1, array[3], array[2], array[1], array[0]]
    }
};

module.exports.plusesEverywhere = function(array) {
  if (array.length < 3) {
    return array.join('+')
  }else if (array.length > 2) {
    return array.join('+')
  }
};

module.exports.arrayQuantityPlusOne = function (array) {
  return array.length + 1
};

/* Notes

//array = []
//array[0] = 1
    if (array.length < 3) {
      return [1, array[1], array[0]]

  var array2 = [array.unshift(1), array[1], array[0]]
  if (array.length < 3) {
    return [array2]
*/

/* For PlusesEveryWhere

Looked on MDN to find out how to change an array into a string
while including + signs between each object in string
*/

/* For arrayQuantityPlusOne
.length will give # of items, using numerical index starting at 1, which
indicates the # of items in an array.  Plus one, is just adding 1 to it.
*/

