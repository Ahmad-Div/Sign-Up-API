const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
app.listen(3000, function () {
  console.log("Ahmad Software Server Running!");
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});
