const fs = require("node:fs");

// readFile(path, encoding, callback): asynchronously read the contents of the file.
fs.readFile("example.txt", "utf-8", (error, content) => {
  // Callback function will handle the result.
  // Error or Content
  if (error) {
    console.log(error);
    return;
  }
  console.log("== reading a file ===");
  console.log("File content:", content);
});

// Writing a file
const content = "Hello, Welcome to Node.js!";
// .writeFile(filename.ext, content, encoding, callback): asynchronously write data to a file.
fs.writeFile("output.txt", content, "utf-8", (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("=== write a file ===");
  console.log("Data written successfully.");
});

// Check if a file exists
const filePath = "example.txt";
// .existsSync: synchronously check if a file or directory exists
// console.log("Output:", fs.existsSync(filePath))
if (fs.existsSync(filePath)) {
  console.log("File exists.");
} else {
  console.log("File does not exists.");
}

// Relative Path
// directory1/directory2/
// directory1/
// ./ - Same directory
// readdir(directoryPath, callback): asynchronously read a directory.
// Return: array of files and folders.
const directoryPath = ".";
fs.readdir(directoryPath, (error, contents) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(" === list of files and directory === ");
  console.log(contents);
});

// .mkdir(directory, callback) : asynchronously create a directory.
fs.mkdir("new_directory", (error) => {
    if (error){
        console.log(error);
        return;
    }
    console.log("=== create a directory ===")
    console.log("Directory created successfully.")
})
