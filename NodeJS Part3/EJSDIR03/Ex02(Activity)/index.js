/*
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /E/Learning/NodeJS Learn/NodeJS Part3/EJSDIR03/Ex02(Activity)
    $npm init -y  (To add package.json file with default value)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /E/Learning/NodeJS Learn/NodeJS Part3/EJSDIR03/Ex02(Activity)
    $npm install express (Install express package)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /E/Learning/NodeJS Learn/NodeJS Part3/EJSDIR03/Ex02(Activity)
    $npm install ejs (Install ejs package)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /E/Learning/NodeJS Learn/NodeJS Part3/EJSDIR03/Ex02(Activity)
    $npm install -g nodemon (Globally install nodemon package)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /E/Learning/NodeJS Learn/NodeJS Part3/EJSDIR03/Ex02(Activity)
    $nodemon index.js (start a server)
    listening on port 8080..
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

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];
    if(data)
    {
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs");

    }
});

/* Output : Now hit on browser/hoppscotch.io with GET request.

    1)localhost:8080/ig/cats
        This page belongs to @cats
        Follow Message
        Followers : 25000      Following : 5

        some img
        Likes : 200      Comments : 17

        some img
        Likes : 312      Comments : 19

        some img
        Likes : 1065      Comments : 200

    2)localhost:8080/ig/dogs
        This page belongs to @dogs
        Follow Message
        Followers : 75000      Following : 150

        some img
        Likes : 3000      Comments : 41

        some img
        Likes : 2500      Comments : 32

        some img
        Likes : 500      Comments : 6

    3)localhost:8080/ig/animal
        No such Account


*/