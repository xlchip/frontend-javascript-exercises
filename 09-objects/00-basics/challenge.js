module.exports.createCourse = function(title, duration, students) {
  var createCourse = {
    title: title,
    duration: duration,
    students: students
  }
  return createCourse
};

module.exports.addProperty = function(object, newProp, newValue) {
  if ( !object.hasOwnProperty(newProp) ) {
    object[newProp] = newValue;
  }
  return object;
};


module.exports.formLetter = function(data) {
  return 'Hello ' + data.recipient + ',\n\n' + data.msg + '\n\nSincerely,\n' + data.sender;
};


module.exports.canIGet = function(item,money) {
  var priceTable = {
    'MacBook Air': 999,
    'MacBook Pro': 1299,
    'Mac Pro': 2499,
    'Apple Sticker': 1
  };

  // Assume item === "Jason's Giant Thing"
  // Now, Assume item === "Mac Pro"
  // if ( priceTable.hasOwnProperty(item) === false ) { ... }
  return (priceTable.hasOwnProperty(item)) && (money >= priceTable[item]);
};



/*if (object[newProp] = newValue) {
  return object;
}
};
*/