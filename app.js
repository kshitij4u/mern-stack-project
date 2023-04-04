const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const User = require("./Models/userSchema");
const app = express();

dotenv.config({ path: "./config.env" });

require("./DB/Connection");

app.use(express.json());
app.use(require("./Router/auth"));

const port = process.env.PORT;

// app.get("/", (req, resp) => {
//   resp
//     .status(200)
//     .json({ status: "success", message: "Hello from home page" });
// });
// app.get("/aboutme", (req, resp) => {
//   resp
//     .status(200)
//     .json({ status: "success", message: "Hello from about me page" });
// });
// app.get("/contact", (req, resp) => {
//   resp
//     .status(200)
//     .json({ status: "success", message: "Hello from contact page" });
// });
// app.get("/signin", (req, resp) => {
//   resp
//     .status(200)
//     .json({ status: "success", message: "Hello from login page" });
// });

// app.get("/signup", (req, resp) => {
//   resp
//     .status(200)
//     .json({ status: "success", message: "Hello from register page" });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
