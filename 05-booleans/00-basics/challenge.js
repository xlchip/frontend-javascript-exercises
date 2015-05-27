module.exports.equalStrings = function(stringOne, stringTwo) {
return stringOne == stringTwo;
};

module.exports.notEqual = function(one, two) {
return one !== two; 
};

module.exports.inBetween = function(lower, middle, upper) {
return (lower < middle) && (middle < upper);
};

module.exports.outsideRanges = function(number) {
return (number < 10 || number > 20) && (number <= 42 || number > 75) && (number <= 1 || number >= 6)

};

module.exports.nameAndPrice = function(name, price) {
return (name === "NYTimes" || name === "LATimes") && (price >= 1);
};

//|| (number <= 42) || (number > 75) || (number = 1 || number = 6 ||); 
/* Notes
-The inequality operator (!=), will show true if operands are not equal.

-For outsideRanges (from ReadME):
 Complete the `outsideRanges` function. This function should:
    - take one argument, 'number', which is a number
    - return true when the number is:
        - not between 10 and 20, it also can't be 10 or 20 
        - not between 42 and 75, it also can't be 75. 42 is allowed 
        - not between 1 and 6. 1 and 6 are allowed
  -true when 10 > number > 20 && number <=42 && number > 75 && 
  Failed attempts:
      //return (10 > number && number >20) || (42 >= number && number > 75) || (1 >= number && number >= 6);
      //return (number < 10) || (number > 20) || (number <= 42) || (number > 75) || (number <= 1)|| (number >= 6);
      //return (10 > number || number > 20) && (42 >= number && number > 75) && (number <= 1) && (number >= 6);

      //(number < 10) && (number > 20) && (number <= 42) && (number > 75) && (number <= 1) && (number >= 6);
      //Try || instead of the 2nd &&

Complete the `nameAndPrice` function. This function should:
    - take two arguments: 'name' which is the name of a newspaper, and 'price' which is a number
    - return true if name is 'NYTimes' or 'LATimes', and price is greater than or equal to 1

    For example:
    
    ```javascript
    nameAndPrice('NYTimes', 1) // returns true
    nameAndPrice('LATimes', 0) // returns false
    nameAndPrice('NYTimes', 0) // returns false
    ```



*/
