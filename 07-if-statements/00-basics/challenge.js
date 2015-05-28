module.exports.favoriteNumber = function(fav, guess){
  if (guess < fav) {
    return 'Too low' 
  } else if (guess === fav) {
      return 'You got it!'
    } else {
      return 'Too high'
    }
};

module.exports.checkLock = function(first, second, third, fourth) {
  if ( (first === 3 || first === 5 || first === 7) && (second === 2) && (5<= third && third <= 100) && (fourth <9 || fourth >20)){
    return 'correct'
  } else {
    return 'incorrect'
  }
};

module.exports.canIGet = function (item, money) {
    if ((item === 'MacBook Air') && (money >= 999)) {
      return true
  }else if ((item === 'MacBook Air') && (money < 999)) {
      return false
  }else if ((item === 'MacBook Pro') && (money >= 1299)) {
      return true
  }else if ((item === 'MacBook Pro') && (money < 1299)) {
      return false
  }else if ((item === 'Mac Pro') && (money >= 2499)) {
      return true
  }else if ((item === 'Mac Pro') && (money < 2499)) {
      return false
  }else if ((item === 'Apple Sticker') && (money >= 1)) {
      return true
  }else if ((item === 'Apple Sticker') && (money < 1)) {
      return false
  }else{
  } return false
};

/* favoriteNumber Notes
arguments: favorite number, guess
    - This function should return:
        - "Too high" if `guess` is greater than `fav` 
        - "Too low" if `guess` is less than `fav` 
        - "You got it!" if `guess` is equal to `fav`
*/

/* checkLock Notes
- Complete the `checkLock` function. This function should:
    - have four arguments that are all numbers
    - return "correct" if the four numbers are a valid combination
    - return "incorrect" if the 4 numbers aren't a valid combination
    - a combination is valid if:
        - the first number is a 3, 5, or 7
        - the second number is 2
        - the third number is between 5 and 100. 5 and 100 are both valid numbers
        - the fourth number is less than 9 or greater than 20. 9 and 20 both invalid numbers

  My failed attempts:
    (first === 3 || 5 || 7) && (second == 2) && (5 <= third <= 100) && (fourth < 9 || fourth > 20)
      return "correct"  ..
    --- I realized that first === 3 || 5 || 7 does not mean first is equal to each #,
     it needs to be written out for each number.
    if (first === 3 || 5 || 7) {
      return 'correct'
    } else if (first !== 3 || 5 || 7) {
      return 'incorrect'
    } else if (second === 2) {
      return 'correct'
    } else if (5 >= third <= 100) {
      return 'correct'
    } else if (fourth < 9 || fourth > 20) {
      return 'correct'
    } else {
      return 'incorrect'
    }
  };
    --- My mentor pointed me back to my original attempt after trying this
*/

/* canIget Notes
//else if ((item !== 'MacBook Pro') || (item !== 'MacBook Pro') || (item !== 'Mac Pro') || (item !== 'Apple Sticker') {

  //if (item !== "Macbook Pro" || item !== "Macbook Pro" || item !== "Mac Pro") {
  //  return 'false'
*/