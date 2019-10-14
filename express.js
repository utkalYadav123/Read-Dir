const express = require("express");

var app = express();

// middleware
app.get("/asm", (req, res)=>{
    console.log(req.url)
    res.send("hello")
})

var server = app.listen(1234);
var host = server.address().address;
var port = server.address().port;

console.log("App is listening on ", host, port)