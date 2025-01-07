// Path Module:
// provied utilities for working with file and directory path.
const path = require("node:path");

// filename: full file path with filename.extension.
console.log(__filename);

// dirname: full file path with folder where app.js is located.
console.log(__dirname);

console.log("=== basename ===");
// .basename: return the last portion of the path.
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

// .extname: return file extension of the path
console.log("Extension:", path.extname(__filename));

// .parse(): returns an object with significant properties of the path.
const parseObject = path.parse(__filename);
console.log("Parse Object:", parseObject);

// .format(): return the path string given an object.
const pathString = path.format(parseObject);
console.log(pathString);

// .isAbsolute(): check if the path string is an absolute path.
// Return: true (absolute) false (relative)
const relativePath = "./app.js";
const isAbsolute = path.isAbsolute(pathString);
console.log("Is Absolute:", isAbsolute);
console.log("Is Absolute:", path.isAbsolute(relativePath));

// .normalize(): normalize a path by resolving '..' and '.' segments.
const complexPath = "./username/document/mine/../../files/app.js";
const normalizedPath = path.normalize(complexPath);
console.log("Normalized Path:", normalizedPath);

// directory1
// directory2
// directory3
// .join(): combine path segments into a single, platform-independent path string.
// Seperator:
// forward slash - \ - mac/linux
// backslash - / - windows
const joinedPath = path.join("directory1", "directory2", "app.js");
console.log("Joined Path:", joinedPath);

// resolve(): resolve a sequence of path segments into an absolute path
const resolvedPath = path.resolve("directory1", "directory2", "app.js");
console.log("Resolved Path:", resolvedPath);
