module.exports.getKeys = function(arrayKeys) {
  return Object.keys(arrayKeys);
};

module.exports.getValues = function(obj) {
var array = [];
  for (var key in obj) {
     array.push(obj[key]);
  }
  return array
};

module.exports.objectToArray = function(arr) {
var array = [];
  for (var key in arr) {
    array.push(key + " is " + arr[key]);
  }
  return array
};





//object {key:value}