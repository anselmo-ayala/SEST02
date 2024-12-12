// Initial library setup
const library = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isAvailable: true,
  },
  { title: "1984", author: "George Orwell", isAvailable: true },
  { title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true },
];

// Function to display available books
function displayAvailableBooks() {
  const output = document.getElementById("output");
  output.innerHTML = "<h2>Available Books:</h2>";
  library.forEach((book) => {
    if (book.isAvailable) {
      output.innerHTML += `<li>${book.title} by ${book.author}</li>`;
    }
  });
}

// Function to borrow a book
function borrowBook(title) {
  const book = library.find((book) => book.title === title);
  if (book) {
    if (book.isAvailable) {
      book.isAvailable = false;
      alert(`You have borrowed "${book.title}" by ${book.author}.`);
    } else {
      alert(`Sorry, "${book.title}" is already borrowed.`);
    }
  } else {
    alert(`Book titled "${title}" not found in the library.`);
  }
}
