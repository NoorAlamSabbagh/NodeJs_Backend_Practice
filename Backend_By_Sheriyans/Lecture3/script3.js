const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/error", function (req, res) {
  throw Error("Something went wrong");
});
app.get("/about", function (req, res) {
  res.render("index2", { name: "Alam" });
});

app.use(function errorHandler(err, req, res, next) {
  if (res.headerSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(3000);
