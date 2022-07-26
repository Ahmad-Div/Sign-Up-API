const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.listen(3000, function () {
  console.log("Ahmad Software Server Running!");
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
