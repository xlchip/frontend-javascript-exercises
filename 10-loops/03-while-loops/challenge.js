module.exports.stream = function(conditional, action) {
  while ( conditional() ) {
    action();
  }
};

module.exports.sumNumbers = function(wholearray) {
var counter = 0;
var totalsum = 0;
while (counter <= wholearray.length - 1) {
  totalsum += wholearray[counter];
  counter++; }
  return totalsum;
};


//howmuch += sum;
//sum++
