/* Cookies : 
        HTTP cookies are small block of data created by a web server while a user is browsing a website and 
        placed on the user's computer or other device by the user's web browser.
*/

/* Get Cookies : For get the cookies install the npm package called cookie-parser and use req.cookies */

/* cookie-parser Package :
        Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
        Optionally you may enable signed cookie support by passing a secret string, which assigns
        req.secret so it may be used by other middleware.
        Installation : npm i cookie-parser
*/

/*
    req.cookies :
            When using cookie-parser middleware, this property is an object that contains cookies sent by the request.
            If the request contains no cookies, it defaults to {}.
*/

/* 
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Cookies/Ex02-Get Cookies
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Cookies/Ex02-Get Cookies
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Cookies/Ex02-Get Cookies
    $npm i cookie-parser
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Cookies/Ex02-Get Cookies
    $touch app.js

*/

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// Cookie Parser Middleware
app.use(cookieParser());

//send cookies
app.get("/setcookies",(req,res)=>{
    res.cookie("greet","namaste"); // Sets cookie name to value.
    res.cookie("madeIN","India");
    res.send("send some cookies");
});

//get cookies for 'name' key only
app.get("/greet",(req,res)=>{
    let {name = "anonymous"} = req.cookies;
    res.send(`Hi,${name}`);
});

//get all cookies
app.get("/",(req,res)=>{
    console.dir(req.cookies);
    res.send("Hi, I am root!")
});

app.listen(3000,(req,res)=>{
    console.log("server is listening to port 3000");
});

/*
Note : 1)cookies are visible on   => Go to webpage inspect => click on aplplication => click on cokkies
       2)Once cookie is send and saved on the browser then for that website only, for different paths the cookie is visible.
*/