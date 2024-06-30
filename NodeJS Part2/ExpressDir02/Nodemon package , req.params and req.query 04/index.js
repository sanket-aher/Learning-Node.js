const express=require("express");
const app=express();
let port = 8080; // or 3000

/* Note : In previous examples we manually restart the server after changing the code,now using Nodemon package it automatically restart the server after code changes. */
/* Nodemon Package : To automatically restart server with code save changes.
            Installation : npm install -g nodemon (Install Globally).    */


//Only once start a Nodemon server => nodemon index.js
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});

/* Path Parameters : 1)req.params 2)req.query */
app.get("/",(req,res)=>{
    res.send("You contacted root path");
});

/* 1)req.params : The req.params object allow you to capture dyanamic values from the URL path. */
app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params; /* OR let username=req.params.username; let id=req.params.id; */
    res.send(`Welcome to the page of @${username} with the id=${id}`);
});

/* 2)req.query : The req.query property allows you to access the query parameters from the URL of an incoming HTTP request. Query parameters are key-value pairs included in the URL after the “?” symbol, and they are separated by “&” symbols. */
app.get("/search",(req,res)=>{
    let {q}=req.query; /* let q=req.query.q; */
    console.log(req.query);
    if(!q){
        res.send('<h1>Nothing Searched</h1>');
    }
    res.send(`<h1>Search Result for query: ${q}</h1>`);
});