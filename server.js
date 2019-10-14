// requireing the http module
// let http = require("http");

// http.createServer((request, response)=>{
// response.writeHead(200, {"Content-Type": "text/plain"})
// response.end("Hello World")
// }).listen(1723)

const fs = require("fs");
// fs stands for file system.
// var data = fs.readFileSync("input.txt");

var data = fs.readFile("input.txt", (err, data)=>{
    if (err) return console.error(err);
    console.log(data.toString());  
}) 

console.log("paragraph ended");
