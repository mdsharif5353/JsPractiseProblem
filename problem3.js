// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.
// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.

// largest number using if-else.
const num1 = 13;
const num2 = 79;
const num3 = 45;

let largestNumber;

if (num1 >= num2 && num1 >= num3) {
  largestNumber = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largestNumber = num2;
} else {
  largestNumber = num3;
}
console.log("The largest number is:", largestNumber);

// or another way to solve :
const nums1 = 13;
const nums2 = 79;
const nums3 = 45;

let largest_Number;

if (nums1 >= nums2) {
  if (nums1 >= nums3) {
    largest_Number = nums1;
  } else {
    largest_Number = nums3;
  }
} else {
  if (nums2 >= nums3) {
    largest_Number = nums2;
  } else {
    largest_Number = nums3;
  }
}

console.log("The largest number is:", largest_Number);

// triangle is Isosceles or not using if-else.
const side1 = 9;
const side2 = 8;
const side3 = 9;

if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("The triangle is Isosceles.");
} else {
  console.log("The triangle is not Isosceles.");
}
