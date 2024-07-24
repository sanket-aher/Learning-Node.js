/*
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part02
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part02
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part02
    $touch app.js
*/


/* Using next :
        If the current middleware function does not end the request-response cycle,it must call next() to pass control to the next middleware function.
        The next middleware function is commonly denoted by a varaiable named next.
*/

/* Note : 1)For root("/") path or no path is specified , Middleware are always run irrespective of their wrong or right path on the browser. 
          2)In middleware , the next() function always try to write at the end line of the middleware function or write return next() , to call the next middleware function.
*/

/* Ex2 */
const express = require('express');
const app = express();


app.use((req,res,next) => {     // OR  app.use("/",(req,res,next) => {
    console.log("Hi, I am 1st middleware");
    next();

});

app.use((req,res,next) => {     // OR  app.use("/",(req,res,next) => {
    console.log("Hi, I am 2nd middleware");
    next();
});

app.get("/",(req,res)=>{
    res.send("Hi, I am root.");
});

app.get("/random",(req,res)=>{
    res.send("this is a random page");
});

app.listen(8080,()=>{
    console.log("server listening to port 8080");
});


/*
On Browser / On hoppscotch.io 
Output1 : localhost:8080    o/p => Hi, I am root.
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part02
    $node app.js
    server listening to port 8080
    Hi, I am 1st middleware
    Hi, I am 2nd middleware

Output2 : localhost:8080/random    o/p => this is a random page
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part02
    $node app.js
    server listening to port 8080
    Hi, I am 1st middleware
    Hi, I am 2nd middleware

Output3 : localhost:8080/abcd    o/p => cannot GET /abcd
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part02
    $node app.js
    server listening to port 8080
    Hi, I am 1st middleware
    Hi, I am 2nd middleware    

*/