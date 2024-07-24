/*
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part03
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part03
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part03
    $touch app.js
*/
/* Creating Utility Middleware : 
                    It is useful for Logger file(useful information)
*/

/* Note : 1)For root("/") path or no path is specified , Middleware are always run irrespective of their wrong or right path on the browser. 
          2)In middleware , the next() function always try to write at the end line of the middleware function or write return next() , to call the next middleware function.
          3)Middleware always write before http methods(i.e app.get,app.post,..) because http methods sends response(res.send()) so that middlewares not get called after http methods.
*/

/* Ex3 */
const express = require('express');
const app = express();


app.use((req,res,next) => {     // OR  app.use("/",(req,res,next) => {
    req.time = new Date(Date.now()).toString();  // Creating our method
    console.log(req.method,req.hostname,req.path,req.time);
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
On Browser/On hoppscotch.io with GET method : 
Output1 : localhost:8080    o/p => Hi, I am root.
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part03
    $node app.js
    server listening to port 8080
    GET localhost /random Sun May 26 2024 15:50:46 GMT+0530 (India Standard Time)
    

Output2 : localhost:8080/random    o/p => this is a random page
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part03
    $node app.js
    server listening to port 8080
    GET localhost /random Sun May 26 2024 15:50:46 GMT+0530 (India Standard Time)

Output3 : localhost:8080/abcd    o/p => cannot GET /abcd
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part03
    $node app.js
    server listening to port 8080
    GET localhost /random Sun May 26 2024 15:50:46 GMT+0530 (India Standard Time)    

On hoppscotch.io with POST method :
Output4 : localhost:8080/random    o/p => this is a random page
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part03
    $node app.js
    server listening to port 8080
    POST localhost /random Sun May 26 2024 15:50:46 GMT+0530 (India Standard Time)


*/