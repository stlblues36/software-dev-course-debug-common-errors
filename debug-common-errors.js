/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp");  // Corrected: String properly closed with quotation marks.

// What’s Wrong? // Syntax error: Missing closing quotation mark for the string.


// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, "eight"]; // Fixed: Ensure only numbers are doubled.
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === 'number') { // Check if the element is a number
    let doubled = numbers[i] * 2;
    console.log(doubled);
  } else {
    console.log(numbers[i] + " is not a number"); // Handle the case where the element is not a number
  }
}

// What’s Wrong?  // Type error: "eight" is a string, and multiplying it by 2 will result in NaN.



// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;  // Corrected: Return false when num is divisible by i (num is NOT prime)
    }
  }
  return true; // Corrected: Return true when num is prime (no divisors found)
}

console.log(isPrime(7)); // Expected true, and now it returns true

// What’s Wrong?  The issue is in the return true; statement inside the loop. When the function detects that a number is divisible by i (i.e., num % i === 0), it should return false because the number is not prime. However, the current code returns true, which is incorrect for a non-prime number.
