// Check whether your age is odd or even number with a function. 
// If a number is given as a parameter to that function, the function 
// will return true if that number is Even and false if it is Odd.



function isEven(number) {
    return number % 2 === 0;
}

var myAge = 28;
var isAgeEven = isEven(myAge);

console.log(isAgeEven); // Output: true
