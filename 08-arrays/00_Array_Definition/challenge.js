module.exports.newArray = function (a,b,c,d) {
  return [a,b,c,d]
};

module.exports.firstAndLast = function (array1) {
  var lastelementindex = array1.length - 1
  return [ array1[0], array1[lastelementindex] ]
};







 /* firstAndLast Notes

 var lastelementindex = array1.length - 1
    return [array1[0]] && [array1[lastelementindex]]
};


*/



// array1[0] && (array1[lastelementindex])
