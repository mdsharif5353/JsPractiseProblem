// write a function in js that will take 3 number and return max & Min


// 1. for max number 
function findMax(a, b, c) {
  return Math.max(a, b, c);
}

const num1 = 10;
const num2 = 25;
const num3 = 15;

const maxNumber = findMax(num1, num2, num3);
console.log("The maximum number is:", maxNumber);


// 2. for min number 
function findMin(a, b, c) {
  return Math.min(a, b, c);
}

const numm1 = 10;
const numm2 = 25;
const numm3 = 15;

const minNumber = findMin(num1, num2, num3);
console.log("The minimum number is:", minNumber);



// Both in one Function 
function findMinMax(a, b, c) {
  const max = Math.max(a, b, c);
  const min = Math.min(a, b, c);
  return { max, min };
}

const number1 = 10;
const number2 = 25;
const number3 = 15;

const { max, min } = findMinMax(num1, num2, num3);
console.log("The maximum number is:", max);
console.log("The minimum number is:", min);
