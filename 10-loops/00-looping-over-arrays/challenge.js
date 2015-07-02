module.exports.sumNumbers = function(arrayNumbers) {
  var sum = 0
  for (var i = 0; i < arrayNumbers.length; i++) { 
    sum += arrayNumbers[i] } 
  return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {
return inputString.toLowerCase().split(',');
};

module.exports.addIndex = function(arrayCount) {
  var elements = [];
  for (var i = 0; i < arrayCount.length; i++) {
    elements.push(i + ' is ' + arrayCount[i]);
  }

  return elements;

};





/*Notes
writing functions on one line, " return inputString.toLowerCase().split(','); "
is a good example to remember for the future
*/
