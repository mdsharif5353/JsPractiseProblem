// Write a function called leapYear() and check whether the next year i.e. 
// 2023 is a leap year or not. The function will return true
//  if it is a leap year and false if it is not a leap year.


function leapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

var isLeapYear = leapYear(2023);
console.log(isLeapYear); // false
