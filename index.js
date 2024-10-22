// Console output
console.log("sub");

// Variable declarations and calculations
var a = 20;
var b = 30;
var c = 40;
console.log(a + b + c); // Output: 90

// Conditional statements
if (a === 20) {
  console.log("matched"); // Output: matched
}

var f = "100";
if (f == 100) {
  console.log("matched"); // Output: matched
}

var g = "100";
if (g === 100) {
  // This condition will not be met because g is a string, not a number
}

// For loop
for (i = 0; i < 10; i++) {
  console.log(i); // Output: 0 1 2 3 4 5 6 7 8 9
}

// Array declaration and access
const arr = [1, 2, 4, 5, 6, 7, 8, 4];
console.log(arr[4]); // Output: 6

// Module import and usage
const app = require("./app");
console.log(app.x); // Output: 10
console.log(app.z()); // Output: Hello from z

// Array filtering
arr.filter((item) => {
  console.log(item); // Output: 1 2 4 5 6 7 8 4
});

let result = arr.filter((item) => {
  return item > 3;
});
console.log(result); // Output: [4, 5, 6, 7, 8, 4]

// File system operations
const fs = require("fs");

fs.writeFileSync("ffsdfdsfsdf", "Hello, world!");
console.log("-", __filename); // Output: - /path/to/your/script.js

// JSON operations (assuming you have a JSON file named colors.json)
const colors = require("colors");
console.log("Hello, world".red); // Output: Hello, world
console.log("Hello, world".bgBlue); // Output: Hello, world (background color blue)

console.log("gg")