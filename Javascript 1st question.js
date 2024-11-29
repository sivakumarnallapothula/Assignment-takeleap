// Using `let` to declare variables
let num1 = 10;
let num2 = 5;

// Addition
let sum = num1 + num2;
console.log("Sum (let):", sum);

// Subtraction
let difference = num1 - num2;
console.log("Difference (let):", difference);

// Using `var` to declare variables 
var product = num1 * num2;
console.log("Product (var):", product);

// Division
var quotient = num1 / num2;
console.log("Quotient (var):", quotient);

// Using `const` to declare variables whose values cannot be re-assigned (constant)
const pi = 3.14159;
const radius = 7;
const area = pi * radius * radius;
console.log("Area of Circle (const):", area);

// Attempting to reassign `const` (this will cause an error, so it's commented out)
// pi = 3.14;  // Uncommenting this line will cause an error because `pi` is a constant