/* Cookies : 
        HTTP cookies are small block of data created by a web server while a user is browsing a website and 
        placed on the user's computer or other device by the user's web browser.
*/

/*
    req.cookies :
            When using cookie-parser middleware, this property is an object that contains cookies sent by the request.
            If the request contains no cookies, it defaults to {}.
*/

/*
    req.signedCookies :
            When using cookie-parser middleware, this property contains signed cookies sent by the request, unsigned and ready for use.
            Signed cookies does not make it “hidden” or encrypted; but simply prevents tampering (because the secret used to sign is private).
*/

/*
    Note :
            1)req.cookies => get unsigned cookies.
            2)req.signedCookies => get signed cookies.
*/

/* 
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Cookies/Ex03-Signed Cookies
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Cookies/Ex03-Signed Cookies
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Cookies/Ex03-Signed Cookies
    $npm i cookie-parser
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/Express Cookies/Ex03-Signed Cookies
    $touch app.js

*/

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); // for get the cookies key-value pair

// Cookie Parser Middleware
app.use(cookieParser("secretcode")); // secretcode => type any string for encryption

//send signed cookies
app.get("/setcookies",(req,res)=>{
    res.cookie("greet","namaste"); // Send unsigned cookie
    res.cookie("madeIN","India",{signed:true}); // Send signed cookie => see , how different signed cookie is visible
    res.send("cookie sent");
});

//get cookies
app.get("/verify",(req,res)=>{
    console.log('Unsigned cookie',req.cookies); // Unsigned cookie { greet: 'namaste' }
    console.log('Signed cookie',req.signedCookies); // Signed cookie [Object: null prototype] { madeIN: 'India' }
    res.send("verified");
});


app.listen(3000,(req,res)=>{
    console.log("server is listening to port 3000");
});

/*
Note : 1)cookies are visible on   => Go to webpage inspect => click on aplplication => click on cokkies
       2)Once cookie is send and saved on the browser then for that website only, for different paths the cookie is visible.
*/