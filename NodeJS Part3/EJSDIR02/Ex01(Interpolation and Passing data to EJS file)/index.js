/* Ex1 */
/*
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /E/Learning/NodeJS Learn/NodeJS Part3/EJSDIR02//Ex01(Interpolation and Passing data to EJS file)
    $npm init -y  (To add package.json file with default value)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /E/Learning/NodeJS Learn/NodeJS Part3/EJSDIR02//Ex01(Interpolation and Passing data to EJS file)
    $npm install express (Install express package)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /E/Learning/NodeJS Learn/NodeJS Part3/EJSDIR02//Ex01(Interpolation and Passing data to EJS file)
    $npm install ejs (Install ejs package)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /E/Learning/NodeJS Learn/NodeJS Part3/EJSDIR02//Ex01(Interpolation and Passing data to EJS file)
    $npm install -g nodemon (Globally install nodemon package)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /E/Learning/NodeJS Learn/NodeJS Part3/EJSDIR02//Ex01(Interpolation and Passing data to EJS file)
    $nodemon index.js (start a server)
    listening on port 8080..
*/

/* Interpolation Syntax : Interpolation refers to embedding expressions into marked up text. */

/* Tags : (Serach on ejs.co/)
    1)<%= Outputs the value into the template (HTML escaped)
*/

const express = require("express"); //EJS is automatically require by express so we dont need to require("ejs")
const app = express();
const path=require("path"); //path is the global object

const port=8080;

//View engines are useful for rendering web page.It set the view engine to ejs.
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views")); // __dirname holds the current directory address and views is the folder where all webpage will be kept.

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal:diceVal}); // OR res.render("rolldice.ejs",{diceVal});
});

/* Output : Now hit on browser/hoppscotch.io with GET request.

    1)localhost:8080/
            This is the home page 2+3
            5
            COLLEGE
            hello,bjn,nasmaste
            Show the 0th index value:hello
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, vero minus nostrum quidem esse, ut, quo temporibus aliquam tenetur quibusdam beatae corrupti eligendi nesciunt blanditiis ab. Expedita molestias dolorem inventore, quibusdam eos natus distinctio veritatis aut. Iure vero repudiandae accusamus modi cum ullam praesentium, excepturi incidunt laboriosam! Perspiciatis, dolor esse?
    2)localhost:8080/rolldice/
            Dice gave value 3
      localhost:8080/rolldice/ (after refresh)
            Dice gave value 5
*/