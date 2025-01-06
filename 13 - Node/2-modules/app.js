const lettersModule = require("./letters");
// import module without export
// return an empty object: {}
// console.log(lettersModule);
// console.log("Letters:", letters);
// displayLetters();
// Output:
// ReferenceError: letters is not defined
// ReferenceError: displayLetters is not defined

// With export
// console.log(lettersModule);
console.log(lettersModule.letters);
lettersModule.displayLetters();
