// Write a function called make_avg() which will take an three integers 
// and return the average of those values


function make_avg(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    const average = sum / 3;
    return average;
}

const result = make_avg(10, 20, 30);
console.log(result); // Output will be 20,



// Write a function called make_avg() which will take an array of inegers and the size of that array 
// and return the average of those values

function make_avg(arr, size) {
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum / size;
}

let arr = [1, 2, 3, 4, 5];
let size = arr.length;
let avg = make_avg(arr, size);
console.log(avg);
