/*
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part08
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part08
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part08
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
          5) Middleware are also write at the end to send response if wrong path occurr.
*/

/* Handling Errors :
        Express throws an default error handler.
        The default error handling middleware function is added at the end of the middleware function stack.
        When an error occurr :
            - The res.statusCode is set to 500.
            - The res.statusMessage is set according to status code.
*/

/* Q.Activity : API TOKEN AS QUERY STRING */
/* Ex9 - Let's create a middleware function for an path /api that checks if the access token was passed in the query string or not.
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
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part08
    $node app.js
    server listening to port 8080
    

Output2 : localhost:8080/api    o/p => Error: ACCESS DENIED! ....
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part08
    $node app.js
    server listening to port 8080

Output3 : localhost:8080/api?token=giveaccess   o/p => data
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part08
    $node app.js
    server listening to port 8080

Output4 : localhost:8080/api?token=giveaccessabc    o/p => Error: ACCESS DENIED! ....
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part08
    $node app.js
    server listening to port 8080

Output5 : localhost:8080/abcd    o/p => Cannot GET /abcd
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part08
    $node app.js
    server listening to port 8080

On hoppscotch.io with GET method:
Output6 : localhost:8080/api    o/p => Error: ACCESS DENIED! ....
                                       Status Code = 500
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part8/Middlewares/Part08
    $node app.js
    server listening to port 8080

*/