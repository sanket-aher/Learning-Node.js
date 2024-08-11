/*  Session :
        A session is a group of user interaction with your website that take place within a given time frame.
*/

/*
    Express Session :
        An attempt to make our session Stateful Protocol.
*/

/*
    Express Session Package:
        Storing and access/using information.

        Installation : npm i express-session.

        Create a session middleware with the given options.
        1]secret : Required option.This is the secret used to sign the session ID cookie.
        2]resave : Forces the session to be served back to the session store, even if the session was never modified during the request.
        3]saveUninitialized : Forces a session that is 'uninitialized' to be saved to the store.
*/


/* 
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex03-Session Storing and Acessing
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex03-Session Storing and Acessing
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex03-Session Storing and Acessing
    $npm i express-session
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex03-Session Storing and Acessing
    $touch app.js
*/

const express = require("express");
const app = express();
const session = require("express-session");

const sessionOptions = {
    secret:"mysupersecretstring",  // mysupersecretstring => any string got encryption
    resave:false,
    saveUninitialized:true 
};

//session middleware
app.use(session(sessionOptions));  

//Store 'name' information in session
app.get("/register",(req,res)=>{
    let {name = "anonymous"} = req.query;
    req.session.name = name;
    res.send(name);
});

//Access 'name' saved value from session information
app.get("/hello",(req,res)=>{
    res.send(`hello, ${req.session.name}`);
});

app.listen(3000,()=>{
    console.log("server is listening to 3000");
});

/* 
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex03-Session Storing and Acessing
    $node app.js
    server is listening to 3000
*/