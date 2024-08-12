/* connect-flash Package :
            The flash is a special area of the session used for storing messages.
            Messages are written to the flash and cleared after being displayed to the user.
            
            Installation : npm i connect-flash

        Usage : Flash messages are stored in the session. First, setup sessions as usual by enabling session middleware and/or cookieParser.
                Then, use flash middleware provided by connect-flash.
*/

/*
    res.locals :
        Use this property to set variables accessible in templates rendered with res.render
*/

/* 
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/02.connect-flash/Ex02-res.locals
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/02.connect-flash/Ex02-res.locals
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/02.connect-flash/Ex02-res.locals
    $npm i ejs
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/02.connect-flash/Ex02-res.locals
    $npm i express-session
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/02.connect-flash/Ex02-res.locals
    $npm i connect-flash
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/02.connect-flash/Ex02-res.locals
    $touch app.js
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/02.connect-flash/Ex02-res.locals
    $mkdir views
*/

// Write Ex01-req.flash) => In better format 
const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const sessionOptions = {
    secret:"mysupersecretstring",  // mysupersecretstring => any string got encryption
    resave:false,
    saveUninitialized:true 
};


app.use(session(sessionOptions));  //session middleware
app.use(flash()); // connect-flash middleware

//Store  information in session and flash message
app.get("/register",(req,res)=>{
    let {name = "anonymous"} = req.query;
    req.session.name = name; // store 'name' in session

    //Set a flash message by passing the any keyName,followed by the value.
    if(name === 'anonymous'){
        req.flash("error","user not registered");  

    }else{
        req.flash("success","user registered successfully!");
    }
    res.redirect("/hello");
});

//Access 'name' saved value from session information and res.local message pass to ejs files
app.get("/hello",(req,res)=>{
    // Use this property to set variables accessible in templates rendered with res.render
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    res.render("page.ejs",{ name:req.session.name });
});

app.listen(3000,()=>{
    console.log("server is listening to 3000");
});

/* 
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/02.connect-flash/Ex02-res.locals
    $node app.js
    server is listening to 3000
*/

