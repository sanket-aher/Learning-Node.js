/* Embedded Javascript templates(EJS) : EJS is the one of the popular templates in NodeJs.EJS is a simple templating language that lets you generate HTML markup with plain Javascript.
    Installtion : npm install ejs. (Go to websites npmjs/package/ejs fot details of ejs package) */

/* Ex1 */
/*
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /E/Learning/NodeJS Learn/NodeJS Part3/EJSDIR01/EX01
    $npm init -y  (To add package.json file with default value)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /E/Learning/NodeJS Learn/NodeJS Part3/EJSDIR01/EX01
    $npm install express (Install express package)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /E/Learning/NodeJS Learn/NodeJS Part3/EJSDIR01/EX01
    $npm install ejs (Install ejs package)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /E/Learning/NodeJS Learn/NodeJS Part3/EJSDIR01/EX01
    $npm install -g nodemon (Globally install nodemon package)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /E/Learning/NodeJS Learn/NodeJS Part3/EJSDIR01/EX01
    $nodemon index.js (start a server)
    listening on port 8080..
*/


const express = require("express"); //EJS is automatically require by express so we dont need to require("ejs")
const app = express();

const port=8080;

//View engines are useful for rendering web page.It set the view engine to ejs.
app.set("view engine","ejs");

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

app.get("/",(req,res)=>{
    /* res.render() : The res.render() function in Express is used to render a HTML view and sends the rendered HTML data to the client.
            Syntax : res.render(View Path [,locals][,callback]);
            Where Locals : It is an 'object' whose properties define local variables for the view path/ejs html path.
                  callback : It is a callback function. */
    res.render("home.ejs"); // OR res.render("home");  => It automatically render to the views folder by default.
});

app.get("/hello",(req,res)=>{
    res.send("hello");
});

/* Output 1 : Now hit on browser/hoppscotch.io with GET request.

    1)localhost:8080/
            This is the home page
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, vero minus nostrum quidem esse, ut, quo temporibus aliquam tenetur quibusdam beatae corrupti eligendi nesciunt blanditiis ab. Expedita molestias dolorem inventore, quibusdam eos natus distinctio veritatis aut. Iure vero repudiandae accusamus modi cum ullam praesentium, excepturi incidunt laboriosam! Perspiciatis, dolor esse?
            Click Me!
    2)localhost:8080/hello/
            hello
*/

/* Now for Output 2 there is disadv :
    
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /E/Learning/NodeJS Learn/NodeJS Part3/EJSDIR01/EX01
    $cd ..
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /E/Learning/NodeJS Learn/NodeJS Part3/EJSDIR01
    $nodemon EX01/index.js
    listening on port 8080...

    Output 2 : Now hit on browser/hoppscotch.io with GET request.

    1)localhost:8080/  (res.render() not work properly )
            Error: Failed to lookup view "home.ejs" in views directory "E:\Learning\NodeJS Learn\NodeJS Part3\EJSDIR01\views" (No Ex01 folder for serach thats why error)
    2)localhost:8080/hello/
            hello

    To overcome Output 2 we use Views Directory on Ex02 folder.
*/ 

