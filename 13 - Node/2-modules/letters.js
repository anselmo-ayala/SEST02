// Modules(files): Self-container units of code that encapsulates variables and functions
const letters = ["A", "B", "C"];
function displayLetters() {
  console.log("=== Display Letters ===");
  letters.forEach((letter) => {
    console.log(letter);
  });
}

// displayLetters();

module.exports = {
  letters: letters,
  displayLetters,
};
