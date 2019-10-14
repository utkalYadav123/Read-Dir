const express = require("express");
var bodyparser = require("body-parser");
var app = express();
var multer = require("multer")
const fs = require("fs");

var storage = multer.diskStorage({
   destination: (req,res, cb)=>{
       cb(null, "uploads")
   },
   filename: (req, file, cb)=>{
    cb(null, file.fieldname + "-" + Date.now())
   } 
})

var upload = multer({storage: storage})

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended: true}));

app.post("/uploadfile", upload.single('myfile'), (req, res)=>{
    const files = req.file;
    if(!files){
        res.send("Error")
        return false
    }
    res.send(files)
})

app.post("/uploadmultiplefile", upload.array('myfiles', 3), (req, res, next)=>{
    console.log(req.files)
    const file = req.files;
    if(!file){
        const error = new Error("No file")
        error.httpStatusCode = 404
        return next(error)
    }
    res.send(file)
})

app.post("/uploadmultiplefile", upload.array('myfiles', 3), (req, res, next)=>{
    console.log(req.files)
    const file = req.files;
    if(!file){
        const error = new Error("No file")
        error.httpStatusCode = 404
        return next(error)
    }
    res.send(file)
})

app.post("/upload/photo", upload.single("picture"), (req,res)=>{
    var img = fs.readFileSync(req.file.path)
    var encode_image = img.toString("base64")
    // define a jsonObject for the image attributes so that we can save it somewhere or push it
    // into the db
    var finalImg = {
        contentType: req.file.mimetype,
        image: new Buffer(encode_image, "base64")
    }
    // write your db save function here
    // //

    // //
    res.send(finalImg)
})

app.listen(1234)