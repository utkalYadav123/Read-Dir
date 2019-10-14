// nodejs buffers can be constrcted in follow ways:

// Create a buffer

// // create a buffer of uninitialized of 10 octet
//  var buf = new Buffer(10)

// // crate a buffer from a given array
// var buff = new Buffer([10,20,30,40])

// // create a buffer form string and optionally encoding type 
// var buff = new Buffer("hello world", "utf-8")

// Write to a Buffer

// buf.write(string[, offset][, length][, encoding])

// string - Data 
// offset - index of the buffer to start with , default is 0
// length - number of bytes to write, default is buffer.length
// encoding - encoding to use, "utf8" is default

// Return a value from the buffer
// var buff = new Buffer(256)
// var len = buff.write("Single String hello world")
 
//  console.log("Octets written ", len)

//  // Read from buffer
//  buff.toString([encoding][start][end])

 // one method also to return value
// let buff = new Buffer(26);

// for(let i=0; i<26; i++){
//     buff[i] = i+97
// }

// console.log(buff.toString('ascii'))
// console.log(buff.toString('ascii', 0, 5))
// console.log(buff.toString('utf8', 0, 5))
// console.log(buff.toString(undefined, 0, 5))

// convert buffer to json
// let buff = new Buffer("shubhankar")
// console.log(buff.toJSON())

// concatenate buffers
// let buff1 = new Buffer("shubhankar")
// let buff2 = new Buffer("india")
// let concat = Buffer.concat([buff1, buff2])
// console.log("Concat BUffer ", concat.toString())

// compare buffers
// buff.compare(buffer2)
// console.log(buff1.compare(buff2))
// returns a number indicating wheteer it comes before or after  os is the same as the uff 2
// let result = buff1.compare(buff2)

// Copy buffers
// buff.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])

// let buff1 = new Buffer("shubhankar")
// let buff2 = new Buffer(3);
// buff1.copy(buff2);
// console.log("buffer 2 content", buff2.toString()) 

// Slice Buffer
// buff.slice([start],[end])
// let buff1 = new Buffer("shubhankardubey")
// console.log(buff1.slice(0,9).toString()) 

// // length
// buff1.length

buff.isEncoding(encoding)
// true if encoding is valid, otherwise false

buff.isBuffer(obj)
// tests just like  true else false

buff.byteLength(string[, encoding])
// string.prototype.length
//
