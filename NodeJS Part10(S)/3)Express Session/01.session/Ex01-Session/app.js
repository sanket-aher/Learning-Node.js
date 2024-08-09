/*
    Q.What is State?
    Ans: 
        1]Stateful Protocol : Stateful Protocol require server to save the status and session information.
                              Ex ftp.
        2]Stateless Protocol : Stateless Protocol does not require the server to retain the server information or status.
                               Ex http.
*/

/*  Session :
        A session is a group of user interaction with your website that take place within a given time frame.
*/

/*
    Express Session :
        An attempt to make our session Stateful Protocol.
*/

/*
    Express Session Package:
        Installation : npm i express-session

        Create a session middleware with the given options.
        1]secret : Required option.This is the secret used to sign the session ID cookie.
*/

/* 
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex01-Session
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex01-Session
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex01-Session
    $npm i express-session
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex01-Session
    $touch app.js
*/

const express = require("express");
const app = express();
const session = require("express-session");

//session middleware
app.use(session({secret:"mysupersecretstring"}));  // mysupersecretstring => any string got encryption

app.get("/test",(req,res)=>{
    res.send("test successful");
});

app.listen(3000,()=>{
    console.log("server is listening to 3000");
});

/* 
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex01-Session
    $node app.js
    express-session deprecated undefined resave option; provide resave option app.js:44:9
    express-session deprecated undefined saveUninitialized option; provide saveUninitialized option app.js:44:9
    server is listening to 3000
*/