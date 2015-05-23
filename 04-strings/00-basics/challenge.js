module.exports.formLetter = function(firstName, senderName, message) {
  return 'Hello ' + firstName + ',\n\n'+ message + '\n\n' +'Sincerely,\n' + senderName; 
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  return bigString.substring(startA,endA) + bigString.substring(startB,endB); 
};


module.exports.findFirstMatch = function(text, searchString) {
  return text.indexOf(searchString);
};


module.exports.findLastMatch = function(text, searchString) {
  return text.lastIndexOf(searchString);
};


module.exports.substringBetweenMatches = function(text, searchString) {
  var firstMatch = text.indexOf(searchString) + searchString.length;
  var secondMatch = text.lastIndexOf(searchString);
  return text.substring(firstMatch, secondMatch);
};



/* My notes to help solve the problems. - Problem 1 - formLetter
-3 Strings as arguments:
  first name of recipient
  sender's signature name
  message of the letter
-Combine into single string w/ additional greetings and closings. w/ additional new lines b/w greeting, message and signature
-So we want greeting \n message \n  signature.

-"Hello Rob,\n\nTake care.\n\nSincerely,\nJoe" = correct output in Mocha test
Looking in the spec.js file and comparing arguments found in challenge.js file... 
  firstname is Rob
  sendername is Joe
  message is Take Care.

-We want it to look like how it is in the spec.js file: "Hello Rob,\n\nTake care.\n\nSincerely,\nJoe"
*/ 

/* My Notes to help solve the problems Problem 2 -sliceItAndCombineIt
-take a string and 4 indices
-return new string that is the concatentation of two substrings marked by the first and second index of each pair of indices.
  For disjoint substring test.
*/

// Notes - Problem 3 - findFirstMatch
//Notes - Problem 5 - substringBetween Match. I want output to be, "apples are really" from string, "Roses are red, apples are really red";
