/*  Session :
        A session is a group of user interaction with your website that take place within a given time frame.
*/

/*
    Express Session :
        An attempt to make our session Stateful Protocol.
*/

/*
    Express Session Package:
        Installation : npm i express-session.

        Create a session middleware with the given options.
        1]secret : Required option.This is the secret used to sign the session ID cookie.
        2]resave : Forces the session to be served back to the session store, even if the session was never modified during the request.
        3]saveUninitialized : Forces a session that is 'uninitialized' to be saved to the store.
        4]cookie : Settings object for the session ID cookie. The default value is { path: '/', httpOnly: true, secure: false, maxAge: null }.
                   The following are options that can be set in this object.
                   1)cookie.expires : Specifies the Date object to be the value for the Expires Set-Cookie attribute. By default, no expiration is set, and most clients will consider this a "non-persistent cookie" and will delete it on a condition like exiting a web browser application.
                   2)cookie.maxAge : Specifies the number (in milliseconds) to use when calculating the Expires Set-Cookie attribute. This is done by taking the current server time and adding maxAge milliseconds to the value to calculate an Expires datetime. By default, no maximum age is set.
                   3)cookie.httpOnly : Specifies the boolean value for the HttpOnly Set-Cookie attribute. When truthy, the HttpOnly attribute is set, otherwise it is not. By default, the HttpOnly attribute is set.
                   4)etc ...
*/


/* 
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex04-Cookie in SessionOption
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex04-Cookie in SessionOption
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex04-Cookie in SessionOption
    $npm i express-session
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex04-Cookie in SessionOption
    $touch app.js
*/

const express = require("express");
const app = express();
const session = require("express-session");

const sessionOptions = {
    secret:"mysupersecretstring",  // mysupersecretstring => any string got encryption
    resave:false,
    saveUninitialized:true,
    cookie:{
            expires: Date.now() + 7 * 24 * 60 * 60 * 1000,  // Set to 1 Week ( 7days * 24hour * 60min * 60sec * 1000ms )
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true
        }
};

//session middleware
app.use(session(sessionOptions));  


app.get("/test",(req,res)=>{
    res.send("test successful");
});

app.listen(3000,()=>{
    console.log("server is listening to 3000");
});

/* 
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Session/01.session/Ex04-Cookie in SessionOption
    $node app.js
    server is listening to 3000
*/