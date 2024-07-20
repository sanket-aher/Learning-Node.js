/*
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part7 with MongoDB/Express with MongoDB
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part7 with MongoDB/Express with MongoDB
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part7 with MongoDB/Express with MongoDB
    $npm i ejs
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part7 with MongoDB/Express with MongoDB
    $npm i mongoose
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part7 with MongoDB/Express with MongoDB
    $npm i method-override
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part7 with MongoDB/Express with MongoDB
    $touch index.js
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part7 with MongoDB/Express with MongoDB
    $touch init.js (To Create and load sample data into MongoDB Database)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part7 with MongoDB/Express with MongoDB
    $mkdir views
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part7 with MongoDB/Express with MongoDB
    $mkdir public
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part7 with MongoDB/Express with MongoDB
    $mkdir models (for creating schema)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part7 with MongoDB/Express with MongoDB
    $node init.js (To insert sample data once into MongoDB Database)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part7 with MongoDB/Express with MongoDB
    $node index.js
*/

const express=require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const methodOverride = require("method-override");
const Chat = require("./models/chat.js");

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
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
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
    res.render("new.ejs");
});

/* b) Create Route - POST method - to post data into database. */

app.post("/chats",(req,res)=>{
    let { from,to,message } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date()
    });
    newChat.save()
    .then((res)=>{
        console.log("chat was saved");
    })
    .catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats");
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