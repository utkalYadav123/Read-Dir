const express = require("express");
var bodyParser = require("body-parser");

var app = express();

// form url encoded data
app.use(bodyParser.urlencoded({extended: false}))

// json

app.use(bodyParser.json());

app.use("/api", (req, res, next)=> {
    console.log("a new req has been catched on"+ new Date());
    // your progra, logic
    // This function call is very important . It tells that mmore processing is required for the current
    // request and is in the next middleware
    // function route handler
    if(valid){
        next();
    }else{
        return 0;
    }
})

app.get("/api", (req, res)=>{
    res.send("hello there");
})

app.listen(3001);