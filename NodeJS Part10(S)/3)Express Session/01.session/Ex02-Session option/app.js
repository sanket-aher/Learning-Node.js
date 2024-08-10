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

        Note : To resolve the warnings of Ex01-Session folder user option resave and saveUninitialized.
        Create a session middleware with the given options.
        1]secret : Required option.This is the secret used to sign the session ID cookie.
        2]resave : Forces the session to be served back to the session store, even if the session was never modified during the request.
        3]saveUninitialized : Forces a session that is 'uninitialized' to be saved to the store.
*/

/*
    req.session :
        It represents/temporarily stores important information about a current user's session on your app/website.
*/


/* 
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex02-Session option
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex02-Session option
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex02-Session option
    $npm i express-session
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex02-Session option
    $touch app.js
*/

const express = require("express");
const app = express();
const session = require("express-session");

//session middleware
app.use(
    session({
        secret:"mysupersecretstring",  // mysupersecretstring => any string got encryption
        resave:false,
        saveUninitialized:true 
    })
);  

app.get("/reqcount",(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }
    else{
        req.session.count = 1;
    }
    res.send(`You sent a request ${req.session.count} times`);
});

app.listen(3000,()=>{
    console.log("server is listening to 3000");
});

/* 
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex02-Session option
    $node app.js
    server is listening to 3000
*/