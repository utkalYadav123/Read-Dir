const express = require("express");
var cookieParser = require("cookie-parser");
var session = require("express-session");

var app = express();

app.use("/static", express.static("public1"));
app.use(express.static("public2"));
console.log("nodemon")

{/* <script src="/static/index.html"> */}

// app.set("view engine", "pug");
// app.set("views", "./views");

// app.get("/first-template", (req, res)=>{
//     res.render("first_view");
// })

app.listen(1234)