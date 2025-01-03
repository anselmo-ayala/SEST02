// Global Objects: we can access it anywhere in any file.

// var - mutable/changeable - global scope
var varContainer = "Global Scope";
var varFunction = function () {
  console.log("Function expression using var keyword");
};

// let - mutable/changeable - block scope
let letContainer = "Block scope";

// // Browser: window object
// console.log("=== ACCESS USING WINDOW OBJECT ===");
// console.log(window.varContainer);
// window.varFunction();
// console.log("=== AUTOMATIC PREFIX ===");
// console.log(varContainer);
// varFunction();

// console.log("=== ACCESS USING WINDOW OBJECT BLOCK ===");
// console.log(window.letContainer); // undefined

// console.log("=== PROBLEM ===");
// var varContainer = "Updated Global Scope";
// var varFunction = function () {
//   console.log("Function expression using var keyword (Updated).");
// };
// console.log(window.varContainer);
// window.varFunction();