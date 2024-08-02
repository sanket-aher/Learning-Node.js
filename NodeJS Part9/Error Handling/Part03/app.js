/*
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part03
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part03
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part03
    $touch app.js
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part03
    $touch ExpressError.js  (Custom Error Class)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part03
    $touch ExpressError.js
*/


/* Handling Errors :
        Express throws an default error handler.
        The default error handling middleware function is added at the end of the middleware function stack.
        When an error occurr :
            - The res.statusCode is set to 500.
            - The res.statusMessage is set according to status code.
*/

/* Q.Activity : API TOKEN AS QUERY STRING */
/* Ex3 - Let's create a middleware function for an path /api that checks if the access token was passed in the query string or not.
        /api?token=giveaccess
*/
const express = require('express');
const app = express();
const ExpressError = require("./ExpressError");

/* ExA */
app.use("/api",(req,res,next) => { 
    let {token} = req.query;
    if(token === "giveaccess")
    {
        next();
    } 
    // custom error handler with custom status and message
    throw new ExpressError(401,"ACCESS DENIED!"); // it bydefault called next(err) middleware i.e line no 58 called
    
});

app.get("/api",(req,res)=>{
    res.send("data");
});

/* ExB */
app.get("/errs",(req,res)=>{
    abcd = abcd;
});

/* ExC */
// Activity - Create an /admin route and send error with a 403 status code
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin is forbidden"); // it bydefault called next(err) middleware i.e line no 58 called
});

//error handler middleware to show short custom error
app.use((err,req,res,next)=>{
    let {status = 500 , message = "some error occurence"} = err;
    res.status(status).send(message);
});

app.listen(8080,()=>{
    console.log("server listening to port 8080");
});


/*
On Browser :
    
Output1 : localhost:8080/api    o/p => ACCESS DENIED!
                                        On console window (status => 401 custom status)
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part03
    $node app.js
    server listening to port 8080

Output2 : localhost:8080/api?token=giveaccess   o/p => data
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part03
    $node app.js
    server listening to port 8080

Output3 : localhost:8080/api?token=giveaccessabc    o/p => ACCESS DENIED!
                                                            On console window (status => 401 custom status)
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part03
    $node app.js
    server listening to port 8080

Output4 : localhost:8080/errs                       o/p => abcd is not defined
                                                             On console window (status => 500 default value status)
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part03
    $node app.js
    server listening to port 8080

Output5 : localhost:8080/admin                       o/p => Access to admin is forbidden
                                                             On console window (status => 403 custom status)
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part03
    $node app.js
    server listening to port 8080

Output6 : localhost:8080/abcd    o/p => Cannot GET /abcd
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part03
    $node app.js
    server listening to port 8080


*/