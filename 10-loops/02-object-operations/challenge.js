module.exports.copy = function(arr) {
var x = {};

for ( var key in arr ) {
  x[key] = arr[key];
}
  return x;
};

module.exports.extend = function(dest, src) {
for ( var key in src ) {
 dest[key] = src[key];
}
  return dest;
};


module.exports.hasElems = function(objectarr, arrayarr) {

  for (var element = 0; element < arrayarr.length; element++) {
    if ( !objectarr.hasOwnProperty(arrayarr[element]) ) {
      return false;
    }
  }

  return true;
};



//Notes

//for in loops, don't use with arrays.  Use it with objects
//hasOwnProperty checsk to see if the element exists in the argument, objectarr.
