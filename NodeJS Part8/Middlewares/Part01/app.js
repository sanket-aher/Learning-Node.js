/* 
    Middleware :It is an intermediary.
                Request ===> Middleware ===> Response
                Middleware in Express are functions that come into play after the server receives the request and before the response is sent to the client.
*/

/* 
    Comman Middleware functions : methodOverride
                                  bodyParser
                                  express.static
                                  express.urlencoded

    Properties of Middleware    : 1)Access req,res Object.
                                  2)Middleware chaining
                                  3)Send a response to stop next middleware chaining

*/

/*
    Q   What does the middleware do?
    Ans Middleware functions can perform the following tasks :
        1)Execute any code.
        2)Make changes to the request and response object.
        3)End the request-response cycle.
        4)Call the next middleware function in the stack
*/

/*
    app.use() : The middleware function is executed when the base of the requested path matches path.
                The app.use() method work for every method request(GET,POST,PUT,..) 
            Syntax : app.use([path,]callback[,callback])
*/

/*
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part01
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part01
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part01
    $touch app.js
*/

/* Note : 1)For root("/") path or no path is specified , Middleware are always run irrespective of their wrong or right path on the browser. */

/* Ex1 */
const express = require('express');
const app = express();

app.use((req,res) => {     // OR  app.use("/",(req,res) => {
    console.log("Hi, I am middleware");
    res.send("Middleware finished");
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
Output1 : localhost:8080    o/p => Middleware finished.
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part01
    $node app.js
    server listening to port 8080
    Hi, I am middleware

Output2 : localhost:8080/random    o/p => Middleware finished.
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part01
    $node app.js
    server listening to port 8080
    Hi, I am middleware

Output3 : localhost:8080/abcd    o/p => Middleware finished.
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part01
    $node app.js
    server listening to port 8080
    Hi, I am middleware    

*/