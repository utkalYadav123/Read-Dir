const express = require("express");
var cookieParser = require("cookie-parser");

var app = express();
app.use(cookieParser());

app.get("/", (req, res)=>{
    console.log(req.cookies)
    res.cookie("name", "hello").send("cookie set")
})

app.listen(3000)