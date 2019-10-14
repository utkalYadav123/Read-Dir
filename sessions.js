const express = require("express");
var cookieParser = require("cookie-parser");
var session = require("express-session");

var app = express();

app.use(cookieParser())
app.use(session({secret: "Its a secret hahahaha"}));

app.get("/", (req, res)=>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send("You visited this page"+ req.session.page_views)
    }else{
        req.session.page_views = 1;
        res.send("Welcome to this page hahah")
    }
})

app.listen(2000)