const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3389;

// Set storage engine
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 1024 }, // 1GB
}).single("myFile");

// Public folder
app.use(express.static("./public"));

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.send("Error: " + err.message);
    } else {
      if (req.file == undefined) {
        res.send("No file selected!");
      } else {
        res.send(`File uploaded: ${req.file.filename}`);
      }
    }
  });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
