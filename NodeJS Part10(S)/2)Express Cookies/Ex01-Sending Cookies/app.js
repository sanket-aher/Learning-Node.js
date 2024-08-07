/* Cookies : 
        HTTP cookies are small block of data created by a web server while a user is browsing a website and 
        placed on the user's computer or other device by the user's web browser.
*/

/* Sending Cookies in Express :
    res.cookie(name,value,[,option]) : 
                    Sets cookie name to value.The value paramater may be string or object convverted to JSON.
*/

const express = require('express');
const app = express();

app.get("/setcookies",(req,res)=>{
    res.cookie("greet","namaste");
    res.cookie("origin","India");
    res.send("send some cookies");
});

app.get("/",(req,res)=>{
    res.send("Hi,I am root path");
});

app.listen(3000,(req,res)=>{
    console.log("server is listening to port 3000");
});

/*
Note : 1)cookies are visible on   => Go to webpage inspect => click on aplplication => click on cokkies
       2)Once cookie is send and saved on the browser then for that website only, for different paths the cookie is visible.
*/