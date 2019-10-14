var findInFiles = require("find-in-files");
var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
var app = express();
var path = require("path")

var pattern = ".html$"

app.get("/", function(req, res) {
    res.render("form");
});

app.set("view engine", "pug");
app.set("views", "./public");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.static("public"));

app.post("/matchResult", async function(req, resp) {
  let results = await findInFiles.find(req.body.to, req.body.say, pattern);
  let finalArray = [];
  for (var result in results) {
    var res = results[result];
    let json = {
      fileName: result,
      value: res
    };
    finalArray.push(json);
  }
  resp.render("formNew", {
      data: finalArray
  })
});

app.listen(3000);
