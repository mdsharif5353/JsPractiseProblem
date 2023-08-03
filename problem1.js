//  You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

//  a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
//  b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ['Apple', 'Banana', 'Orange'];

// Find the index of 'Banana'
var indexOfBanana = fruits.indexOf('Banana');
console.log(indexOfBanana);

// If 'Banana' exists in the array, replace it with 'Mango'
  fruits[indexOfBanana] = 'Mango';
console.log(fruits);

// remove '‘Orange’', add it'‘Watermelon’'
fruits.pop();
fruits.push('Watermelon');