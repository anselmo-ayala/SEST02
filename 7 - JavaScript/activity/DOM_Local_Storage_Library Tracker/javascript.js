const displayBooksButton = document.getElementById("displayBooks");
const bookList = document.getElementById("bookList");
const addBookForm = document.getElementById("addBookForm");

document.addEventListener("DOMContentLoaded", () => {
  const books = JSON.parse(localStorage.getItem("books")) || [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      borrowed: false,
    },
    { title: "1984", author: "George Orwell", borrowed: false },
    { title: "To Kill a Mockingbird", author: "Harper Lee", borrowed: false },
  ];

  //   Saving to local storage function
  function saveBooks() {
    localStorage.setItem("books", JSON.stringify(books));
  }

  //   Display book function
  function displayBooks() {
    bookList.innerHTML = "";
    books.forEach((book, index) => {
      const li = document.createElement("li");
      li.textContent = `${book.title} by ${book.author} ${
        book.borrowed ? "  " : "  "
      }`;
      document.querySelectorAll("li");
      console.log(li);
      const borrowButton = document.createElement("button");
      borrowButton.textContent = book.borrowed ? "Not Available Return the Book" : "Borrow the Book";
      borrowButton.addEventListener("click", () => {
        book.borrowed = !book.borrowed;
        saveBooks();
        displayBooks();
      });
      li.appendChild(borrowButton);
      bookList.appendChild(li);
    });
  }

  //   Displaying available book inside the array
  displayBooksButton.addEventListener("click", displayBooks);
  addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTitle = document.getElementById("newTitle").value;
    const newAuthor = document.getElementById("newAuthor").value;
    books.push({ title: newTitle, author: newAuthor, borrowed: false });
    saveBooks();
    displayBooks();
    addBookForm.reset();
  });

  // displayBooks();
});
