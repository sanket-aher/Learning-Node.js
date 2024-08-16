/* Authenticaton : Authentication is the process of verifying who someone is - Ex SignUp/LoginIN */
/* Authorization : Authorization is the process of verifying what specific applications,files and data a user has access to */

/* Q. How to Store Password?
 Ans. We NEVER store the passwords as it is.We store their hashed form.
        password     => Hasing Function => how it is stored
        "helloworld"                        "94454ded4e4d4r4ed1xs321...."
*/

/* Hashing :
   1)For every input,there is a fixed length output.
   2)They are one-way functions, we can't get input from output.
   3)For a different input, there is a different output but of same length.
   4)Small changes in input should bring the large change in output.
   5)Hasing Algorithm - Ex SHA256,MD5,CRC,bcrypt. 
*/

/* Salting :
    Password salting is a technique to protect passwords stored in database by adding a string of 32 or more characters and then hashing them.
    Syntax :
              input    =>    Salting        => output
            "password"   "password"+Salting    hasing
*/

/* STEPS FOR installation of Hashing */

/* Step 1 : passport Package :
    Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped
    in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password,
    Facebook, Twitter, and more.
    Installation : npm i passport
*/

/* Step 2 : passport-local Package :
    Passport strategy for authenticating with a username and password.
    Installation : npm i passport-local
*/

/* Note : 
    If we use mysql database or other database, passport package(npm i passport) and passport-local package(npm i passport-local)
    are enough, but with mongoose database for better feature use 'passport-local-mongoose' package also    
*/

/* Step 3 : passport-local-mongoose Package :
    Passport-Local Mongoose is a Mongoose plugin that simplifies building username and password login with Passport.
    Installation : npm i passport-local-mongoose
*/

/* Q. In Passport which hashing algorithm used ?
 Ans. pbkdf2
*/

/* Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/4)Authentication and Authorization\Ex01-SignUp and Login
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/4)Authentication and Authorization\Ex01-SignUp and Login
    $touch app.js
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/4)Authentication and Authorization\Ex01-SignUp and Login
    $mkdir views
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/4)Authentication and Authorization\Ex01-SignUp and Login
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/4)Authentication and Authorization\Ex01-SignUp and Login
    $npm i ejs
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/4)Authentication and Authorization\Ex01-SignUp and Login
    $npm i mongoose
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/4)Authentication and Authorization\Ex01-SignUp and Login
    $npm i express-session
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/4)Authentication and Authorization\Ex01-SignUp and Login
    $npm i connect-flash
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/4)Authentication and Authorization\Ex01-SignUp and Login
    $npm i passport
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/4)Authentication and Authorization\Ex01-SignUp and Login
    $npm i passport-local
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part10(S)/4)Authentication and Authorization\Ex01-SignUp and Login
    $npm i passport-local-mongoose
*/

const express = require("express");
const app = express();
const mongoose =  require("mongoose");
const path = require("path");
const session = require("express-session");
const flash = require('connect-flash'); // Flash a message
const passport = require('passport'); 
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose'); 

// connect to mongoDB Database
const MONGO_URL = "mongodb://127.0.0.1:27017/SignUpLogin";

main().then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({extended:true}));

/* Note : For SignUp and Login required session also */
const sessionOptions = {
    secret: "mysupersecretstring", // mysupersecretstring => any string for encryption
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,  // Set to 1 Week ( 7days * 24hour * 60min * 60sec * 1000ms )
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};


app.use(session(sessionOptions)); // session middleware
app.use(flash()); // flash middleware

//flash middleware
app.use((req,res,next) =>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});


/*
    Note : You're free to define your User Schema how you like email,age,dob,etc.
           Passport-Local Mongoose will add a username, hash and salt field to store the username,
           the hashed password and the salt value by default.
           Additionally, Passport-Local Mongoose adds some methods to your Schema
*/

// User Schema
const userSchema = new mongoose.Schema({
    email: {
        type : String,
        required : true
    }
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

//passport middleware
app.use(passport.initialize()); // A Middleware that initialize passport
app.use(passport.session());    // A web application needs the ability to identify users as they browse from page to page.This series of requests and responses, each associated with the same user, is known as a session.

// use passport localStrategy method
passport.use(new LocalStrategy(User.authenticate()));  // authenticate() : Generates a function that is used in Passport's LocalStrategy

passport.serializeUser(User.serializeUser()); // serializeUser() : Generates a function that is used by Passport to serialize users into the session
passport.deserializeUser(User.deserializeUser()); // deserializeUser() : Generates a function that is used by Passport to deserialize users into the session


app.get("/",(req,res)=>{
    res.send("hi, i am root");
});


// 1)SignUp User

//a)SignUp Form - GET method - /signup -  to submit user signup form data
app.get("/signup",(req,res)=>{
    res.render("./signup.ejs");
});

// b)SignUp Create User - POST method - /signup - A Submitted user signup form data is to submit in mongoDB database 
app.post("/signup", async(req,res)=>{
    try{
        let {username,email,password} = req.body;
        const newUser = new User({email,username});

        //register() : Convenience method to register a new user instance with a given password. Checks if username is unique.
        const registeredUser = await User.register(newUser,password);
        console.log(registeredUser);
        req.flash("success","SIGNUP SUCESSFUL!");
        res.redirect("/signup");
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
});

// 2)Login User

//a)Login Form - GET method - /login -  to submit user login form data
app.get("/login",(req,res)=>{
    res.render("./login.ejs");
});

// b)Login Registered User - POST method - /login - A Submitted user login form data is to validate with already user registered with passport.authenticate middleware
app.post("/login", 
    passport.authenticate('local', { failureRedirect: '/login' , failureFlash: true }),
     async(req,res)=>{
        req.flash("success","LOGIN SUCCESSFUL!");
        res.redirect("/login");
});

app.listen(8080,(req,res)=>{
    console.log("server is listening to port 8080");
})