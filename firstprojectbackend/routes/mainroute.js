const express = require("express");
const Router = require("Router");
const User = require("../model/user");

Router.get("/contact", (req, res) => {
  res.send("<h2>this is contact page</h2>");
});
Router.get("/", (req, res) => {
  res.send("<h2>Home page</h2>");
});

module.exports = Router;
