/*
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part04/PartA
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part04/PartA
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part04/PartA
    $npm i ejs
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part04/PartA
    $npm i mongoose
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part04/PartA
    $npm i method-override
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part04/PartA
    $touch index.js
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part04/PartA
    $touch ExpressError.js (Custom Error Class)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part04/PartA
    $touch init.js (To Create and load sample data into MongoDB Database)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part04/PartA
    $mkdir views
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part04/PartA
    $mkdir public
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part04/PartA
    $mkdir models (for creating schema)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part04/PartA
    $node init.js (To insert sample data once into MongoDB Database)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part9/Error Handling/Part04/PartA
    $node index.js
*/

/*
    Error Handling Types :
        1)Normal functions (line no 82)
        2)async functions (line no 145)
        3)try and catch for async functions (line no 92)
*/


const express=require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const methodOverride = require("method-override");
const Chat = require("./models/chat.js");
const ExpressError = require("./ExpressError.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

app.listen(8080,()=>{
    console.log("Server is listening on port 8080");
});

app.get("/",(req,res)=>{
    res.send("root is working");
});

// 1) Index Route - GET method - to show all chats

app.get("/chats",async (req,res)=>{
    let chats=await Chat.find();
    res.render("index.ejs",{chats});
});


// 2) New and Create Route

/* a) New Route - GET method - to show new form for filling data. */

app.get("/chats/new",(req,res)=>{
    //throw new ExpressError(404,"Page not found"); // 1)Throw error on normal function(i.e without async function) it works perfectly bcz on on normal function it automatically call next(error handler)
    res.render("new.ejs");
});

/* b) Create Route - POST method - to post data into database. */

app.post("/chats",async (req,res,next)=>{
    /* Ex2 - Validation error (some fields are required if empty then error generate) */
    // Handling Async Errors using try and catch block
    try{
        let { from,to,message } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            message: message,
            created_at: new Date()
        });
        await newChat.save();
        res.redirect("/chats");
    } catch (err){
        next(err); // calling Error Handler Middleware
    }
});

// 3) Edit and Update Route

/* a)Edit Route - GET method - to show that edited form by using id  */
app.get("/chats/:id/edit",async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});


/* b)Update Route - PUT method - to update that edited form by using id  */
app.put("/chats/:id",async (req,res)=>{
    let {id} = req.params;
    let {message:newMsg} = req.body;

    let updatedChat = await Chat.findByIdAndUpdate(id,{message:newMsg},{runValidators:true, new:true});
    console.log(updatedChat);
    res.redirect("/chats");

});

//4) Delete Route - DELETE method - delete the existing data.

app.delete("/chats/:id", async (req,res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

// New - Show Route
app.get("/chats/:id",async (req,res,next)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    
    /* Ex1 - Wrong id Error */
    // Handling Async Errors using next(Error handler)
    if(!chat){
        //throw new ExpressError(404,"chat not found"); // 2)Throw error on async function it not works perfectly bcz on async function we explicitly call next(error handler) ,see the effect on 135 line no
        next(new ExpressError(404,"Chat not found"));
    }
    res.render("edit.ejs",{chat});
});

// Error Handler Middleware
app.use((err,req,res,next)=>{
    let {status = 500 , message ="Some Error Occurred"} = err;
    res.status(status).send(message);
});

/*
    Note : 1)When we throw error on normal function it automatically call next(error handler), but for async function we explicitly call next(error handler).
           2)On async function, Error Handler middleware can be called using i)next(error handler) - Ex1  ii)try and catch - Ex2 
*/

