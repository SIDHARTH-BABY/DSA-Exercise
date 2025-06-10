const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs").promises;
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});
 
app.use('/assets',express.static("assets"))

app.get("/", (req, res) => {
  res.send("hello world");
});
const readfile = async () => {
  const data = await fs.readFile("textInput.txt", "utf-8");
  console.log(data);
};
const writeFile = async () => {
  const data = await fs.writeFile("textInput.txt", "sidharth baby heree ");
  console.log("File written successfully");
  await readfile(); // read only after writing
};
writeFile();


// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Failed to connect to MongoDB:", error);
//   });
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
