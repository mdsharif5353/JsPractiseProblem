// In JS write a function called  odd_even() which takes an integer values 
// and tells whether  this value is even or odd. 
// You need to do it in 4 ways :  
// 1. Has return  + Has parameter,    
// 2. No return + Has parameter


// 1.Has return + Has parameter:
function odd_even(num) {
    if (num % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  
// 2.No return + Has parameter:
function odd_even(num) {
    if (num % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  }

//   3.Has return + No parameter:
  function odd_even() {
    let num = prompt("Enter a number: ");
    if (num % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  
//   4.No return + No parameter:
  function odd_even() {
    let num = prompt("Enter a number: ");
    if (num % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  }
  