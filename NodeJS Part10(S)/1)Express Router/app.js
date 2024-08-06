const express = require("express");
const app= express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");


app.listen("8080",()=>{
    console.log('server is listening to port 8080');
});

app.get("/",(req,res)=>{
    res.send("Hi,I am root");
});

//Routes
app.use("/users",users);  // /users => is common path from user.js file
app.use("/posts",posts);  // /posts => is common path from post.js file


/*
    Output : On Browser(GET method):
    1)locahost:8080             o/p =>   Hi,I am root
    2)locahost:8080/users       o/p =>   GET for users
    3)locahost:8080/users/abc   o/p =>   GET for user id
    4)locahost:8080/posts       o/p =>   GET for posts
    5)locahost:8080/posts/xyz   o/p =>   GET for post id

*/