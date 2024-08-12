/* connect-flash Package :
            The flash is a special area of the session used for storing messages.
            Messages are written to the flash and cleared after being displayed to the user.
            
            Installation : npm i connect-flash

        Usage : Flash messages are stored in the session. First, setup sessions as usual by enabling session middleware and/or cookieParser.
                Then, use flash middleware provided by connect-flash.
*/

/*
    req.flash(key,value) :
            Set a flash message by passing the key,followed by the value.
*/


/* 
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/02.connect-flash/Ex01-req.flash
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/02.connect-flash/Ex01-req.flash
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/02.connect-flash/Ex01-req.flash
    $npm i ejs
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/02.connect-flash/Ex01-req.flash
    $npm i express-session
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/02.connect-flash/Ex01-req.flash
    $npm i connect-flash
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/02.connect-flash/Ex01-req.flash
    $touch app.js
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/02.connect-flash/Ex01-req.flash
    $mkdir views
*/

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
    req.flash("successKey","user registered successfully!");  //Set a flash message by passing the any keyName("successKey"),followed by the value("user registered successfully!").
    res.redirect("/hello");
});

//Access 'name' saved value from session information and flash message pass to ejs files
app.get("/hello",(req,res)=>{
    //console.log(req.flash("successKey")); // ['user registered successfully!']
    res.render("page.ejs",{ name:req.session.name , msg:req.flash("successKey")});
});

app.listen(3000,()=>{
    console.log("server is listening to 3000");
});

/* 
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/02.connect-flash/Ex01-req.flash
    $node app.js
    server is listening to 3000
*/

