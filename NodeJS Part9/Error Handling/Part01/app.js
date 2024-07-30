/*
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part01
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part01
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part01
    $touch app.js
*/


/* Handling Errors :
        Express throws an default error handler.
        The default error handling middleware function is added at the end of the middleware function stack.
        When an error occurr :
            - The res.statusCode is set to 500.
            - The res.statusMessage is set according to status code.
*/

/* Q.Activity : API TOKEN AS QUERY STRING */
/* Ex1 - Let's create a middleware function for an path /api that checks if the access token was passed in the query string or not.
        /api?token=giveaccess
*/
const express = require('express');
const app = express();

app.use("/api",(req,res,next) => { 
    let {token} = req.query;
    if(token === "giveaccess")
    {
        next();
    } 
    else{
        throw new Error("ACCESS DENIED!"); 
    }
});

app.get("/api",(req,res)=>{
    res.send("data");
});

app.get("/",(req,res)=>{
    res.send("Hi, I am root.");
});


app.listen(8080,()=>{
    console.log("server listening to port 8080");
});


/*
On Browser :
Output1 : localhost:8080    o/p => Hi, I am root.
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part01
    $node app.js
    server listening to port 8080
    

Output2 : localhost:8080/api    o/p => Error: ACCESS DENIED! ....
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part01
    $node app.js
    server listening to port 8080

Output3 : localhost:8080/api?token=giveaccess   o/p => data
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part01
    $node app.js
    server listening to port 8080

Output4 : localhost:8080/api?token=giveaccessabc    o/p => Error: ACCESS DENIED! ....
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part01
    $node app.js
    server listening to port 8080

Output5 : localhost:8080/abcd    o/p => Cannot GET /abcd
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part01
    $node app.js
    server listening to port 8080

On hoppscotch.io with GET method:
Output6 : localhost:8080/api    o/p => Error: ACCESS DENIED! ....
                                       Status Code = 500
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part01
    $node app.js
    server listening to port 8080

*/