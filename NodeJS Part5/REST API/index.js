/* REST(Representational State Transfer) :
        REST is an architectural style that defines a set of constraints/rule to be used for creating web services.
        REST API's communicate through HTTP request to perform standard database functions like creating,reading,updating and deleting records(also known as CRUD) within a resource. 
*/


/*
    CRUD(Create,Read,Update,Delete) Operations :
    HTTP Request Methods:
    1)GET retrieves resources.
    2)POST submits new data to the server.
    3)PUT updates existing data.
    4)PATCH update existing data partially.
    5)DELETE removes data
*/

/* Activity : Create a Quoro Posts.
        Creating RESTFUL APIs :
        Srno Method   Resource       Description 
         1    GET      /posts        To get data for all posts => INDEX(main page)
         2    POST     /posts        To add a new post => CREATE
         3    GET      /posts/:id    To get one post(using id) => VIEW
         4    PATCH    /posts/:id    To update specific post => UPDATE
         5    DELETE   /posts/:id    To delete specific post => DESTROY
*/

/*
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part5/REST API
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part5/REST API
    $npm install express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part5/REST API
    $npm install ejs
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part5/REST API
    $npm install uuid
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part5/REST API
    $npm install method-override
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part5/REST API
    $nodemon index.js
*/

const express = require("express");
const app = express();
const path=require("path");
const { v4: uuidv4 } = require('uuid'); // installed uuid package for creating unique ids
var methodOverride = require('method-override'); // In form there is only 2 methods to send request either a GET req or a POST req but we want PATCh,DELETE method. So to overcome install package called method-override($ npm install method-override).

const port = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"/public")));
app.use(methodOverride('_method')); // In form there is only 2 methods to send request either a GET req or a POST req but we want PATCh,DELETE method. So to overcome install package called method-override($ npm install method-override).

app.listen(port,()=>{
    console.log("listening to port : 8080");
});

let posts=[
    {   
        id:uuidv4(),
        username:"coders",
        content:"I Love coding!"
    },
    {
        id:uuidv4(),
        username:"shradha",
        content:"Hard work is important to achieve success"
    },
    {
        id:uuidv4(),
        username:"rahul kumar",
        content:"I got selected for my 1st intership!"
    },
];

// 1)To get data for all posts
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

// 2)To add a new post
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username,content}= req.body;
    let id=uuidv4(); // To create new id
    posts.push({id,username,content});
    /* The res.redirect() is a URL utility function that helps to redirect the web pages according to the specified paths. */
    res.redirect("/posts"); //By default GET method of /posts url
});

// 3)To get one post(using id)
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("show.ejs",{post});
});

/* Create id for Posts:
        Install UUID(Universal unique identifier) Package for create unique ids.
            npm install uuid
*/

// 4)To update specific post
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    
    let newContent = req.body.content;
    post.content = newContent;
    res.redirect("/posts"); //By default GET method of /posts url  
});

/* In form there is only 2 methods to send request either a GET req or a POST req but we want PATCh,DELETE method. So to overcome install package called method-override($ npm install method-override). */

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});
});

// 5)To delete specific post
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts"); //By default GET method of /posts url  
});




