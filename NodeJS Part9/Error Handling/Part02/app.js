/*
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part02
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part02
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part02
    $touch app.js
*/


/* Handling Errors :
        Express throws an default error handler.
        The default error handling middleware function is added at the end of the middleware function stack.
        When an error occurr :
            - The res.statusCode is set to 500.
            - The res.statusMessage is set according to status code.
*/

/* Ex2 */

const express = require('express');
const app = express();

app.get("/errs",(req,res)=>{
    abcd = abcd;
});

// error handler middleware 1
app.use((err,req,res,next)=>{
    console.log("---------ERROR1----------");
    //next(); // calling non-error handler middleware
    next(err); // calling error handler middleware i.e (error handler middleware 2)
});

// non-error handler middleware - it calls only for next(), you can uncomment line 31 and check
app.use((req,res,next)=>{
    console.log("No error");
    next();
});

// error handler middleware 2
app.use((err,req,res,next)=>{
    console.log("---------ERROR2----------");
    next(err); 
});

/* Difference between next() and next(err)? 
Ans : next() calling non-error handler middleware
      next(err) calling error handler middleware
*/

app.listen(8080,()=>{
    console.log("server listening to port 8080");
});


/*
On Browser/On hoppscotch.io :
Output1 : localhost:8080/errs    o/p => ReferenceError: abcd is not defined ....    
                                        On console window (status => 500 bydefault)
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part01
    $node app.js
    server listening to port 8080
    ---------ERROR1----------
    ---------ERROR2----------
    ReferenceError: abcd is not defined ....

*/