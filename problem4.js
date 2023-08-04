// write a function called foo() which prints "foo" and a function called bar() 
// which prints "bar". Call function bar() in the function after printing .
//  what will the out put? Now call the foo() to see the output


function foo() {
    console.log("foo");
    bar();
  }
  
  function bar() {
    console.log("bar");
  }
  
  foo();
  