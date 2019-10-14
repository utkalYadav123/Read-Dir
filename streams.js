// Reading from a stream

var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("compressed.txt.gz"));

    console.log("file compressed")
// piping multiple streams

// var readStream = fs.createReadStream('input.txt');
// var writeStream = fs.createWriteStream("output.txt");

// readStream.pipe(writeStream)

console.log("finish")


// var data = 'Hello world there i am'

// var writeStream = fs.createWriteStream("input.txt");

// writeStream.write(data, "utf8")

// // mark the end of file
// writeStream.end()

// writeStream.on("finish", ()=>{
//     console.log("writing finisihed")
// })

// errpr

// creating a readable strem
// var readStream = fs.createReadStream('input.txt');

// readStream.setEncoding("utf8");

// readStream.on("data", (bits)=>{
//     console.log(bits)
//     data += bits;
// })

// readStream.on("end", ()=>{
//     console.log(data)
// })

// readStream.on("error", (err)=>{
//     console.log(err)
// })

// console.log("finish")

// console.log()

// writng to a stream

