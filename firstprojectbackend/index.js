const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
require("dotenv").config;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./model/user");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose
  .connect(
    "mongodb+srv://hossainraihan02:QOMC76zg603gS3VE@cluster0.pbokfo6.mongodb.net/blog-user"
  )
  .then(() => console.log("Connected successfully"));

app.get("/", (req, res) => res.send("Hello World!"));
app.post("/register", (req, res) => {
  let register = User(req.body);
  register.save().then(() => res.send("Successfully Register"));
});
app.post("/login", (req, res) => {
  User.findOne({ username: req.body.username })
    .then((found) => {
      console.log("User found");
      if (found.password == req.body.password) res.send("login successfully");
      else res.send("user name or password incorrect");
    })
    .catch((error) => res.send("No user exist with this username"));
});
User.find().then((data) => console.log(data));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../firstproject/build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(_dirname, "../firstproject", "build", "index.html")
    );
  });
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
