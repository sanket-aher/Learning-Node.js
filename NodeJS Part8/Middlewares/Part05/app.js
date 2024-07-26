/*
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part05
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part05
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part05
    $touch app.js
*/

/* app.use :
        path     :  The path for which the middleware function is invoked.
        callback :  A middleware function.A series of middleware function(seperated by commas)

        Middleware are also use for login authentications.
*/


/* Note : 1)For root("/") path or no path is specified , Middleware are always run irrespective of their wrong or right path on the browser. 
          2)In middleware , the next() function always try to write at the end line of the middleware function or write return next() , to call the next middleware function.
          3)Middleware always write before http methods(i.e app.get,app.post,..) because http methods sends response(res.send()) so that middlewares not get called after http methods.
          4)For specific path , the middleware run only for that specific path only.
          5) Middleware are also write at the end for the page not found error
*/

/* Ex6 */
const express = require('express');
const app = express();

app.use((req,res,next) => { // OR  app.use("/",(req,res,next) => {
    console.log("I am for all path");
    next();
});


app.get("/",(req,res)=>{
    res.send("Hi, I am root.");
});

app.get("/random",(req,res)=>{
    res.send("this is a random page");
});

//404 for wrong path
app.use((req,res,next) => { 
    res.send("Page not found!")
});


app.listen(8080,()=>{
    console.log("server listening to port 8080");
});


/*
On Browser/On hoppscotch.io :
Output1 : localhost:8080    o/p => Hi, I am root.
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part05
    $node app.js
    server listening to port 8080
    I am for all path
    

Output2 : localhost:8080/random    o/p => this is a random page
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part05
    $node app.js
    server listening to port 8080
    I am for all path

Output3 : localhost:8080/random/something    o/p => Page not found!
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part05
    $node app.js
    server listening to port 8080
    I am for all path

Output4 : localhost:8080/abcd    o/p => Page not found!
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part05
    $node app.js
    server listening to port 8080
    I am for all path

*/