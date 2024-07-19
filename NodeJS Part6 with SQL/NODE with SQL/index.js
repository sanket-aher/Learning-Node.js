/*
    Git Bash/Terminal :
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part6 with SQL/NODE with SQL
    $npm init -y
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part6 with SQL/NODE with SQL
    $npm i @faker-js/faker
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part6 with SQL/NODE with SQL
    $npm i mysql2
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part6 with SQL/NODE with SQL
    $npm i express
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part6 with SQL/NODE with SQL
    $npm i ejs
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part6 with SQL/NODE with SQL
    $npm i uuid
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part6 with SQL/NODE with SQL
    $npm i method-override
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/learning/NodeJS Learn/NodeJS Part6 with SQL/NODE with SQL
    $node index.js
*/


// SQL CLI : To open mysql workbench query command into terminal(cmd)
/* New Terminal(cmd) :

    C:\Users\Sanket Aher>mysql -u root -p
    Enter Password : root (Type Mysql workbench password)
    mysql> (Type queries to get result like you get in mysql workbench query command)
    mysql> SHOW DATABASES;
    mysql> quit
    C:\Users\Sanket Aher>
*/

// MYSQL WORKBENCH
/* MYSQL Query Command :

    CREATE TABLE user(
	    id VARCHAR(50) PRIMARY KEY,
        username VARCHAR(50) UNIQUE,
        email VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL
    );

*/

const { faker } = require('@faker-js/faker'); // Installed @faker-js/faker package to generate fake data. Installation => npm i @faker-js/faker
const mysql = require('mysql2'); // Installed mysql2 package to connect NodeJs with Mysql database. Installation => npm i mysql2 
const express = require("express");
const app=express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended:true }));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

//create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'app',
    password: 'root'
  });

//Insert Single record query
/*
let query1 = "INSERT INTO user(id,username,email,password) VALUES (?,?,?,?)";
let userData1=["123c","123_newuserc","abc@gmail.comc","abcc"];

try{
    connection.query(query1,userData1,(err,result)=>{
        if(err) throw err;
        console.log(result);
        console.log(result.length);
        console.log(result[0]);
        console.log(result[1]);
    });
}
catch (err){
    console.log(err);
}
*/

//Insert Multiple records query
/*
let query2 = "INSERT INTO user(id,username,email,password) VALUES ?";
let userData2=[
    ["123a","123_newusera","abc@gmail.coma","abca"],
    ["123b","123_newuserb","abc@gmail.comb","abcb"],
];

try{
    connection.query(query2,[userData2],(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
}
catch (err){
    console.log(err);
}
*/



/* to generate fake data using @faker-js/faker package */
let getRandomUser = ()=> {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password()
    ];
}
//console.log(getRandomUser());

//Insert Multiple records query with bulk
/*
let query3 = "INSERT INTO user(id,username,email,password) VALUES ?";
let data=[];

for (let i = 1; i <= 100 ; i++)
{
    data.push(getRandomUser());    
}


try{
    connection.query(query3,[data],(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
}
catch (err){
    console.log(err);
}
*/



/* Routing :

    1)GET    /                  show no of user in DB
    2)GET    /user              show all users(email,id,username)
    3)PATCH  /user/:id          username edit
    4)POST   /user/new          Add new user
    5)DELETE /user/:id/delete   Delete user

*/

app.listen("8080",()=>{
    console.log("Server is listening to port 8080");
});

// 1) GET / show no of user in DB
app.get("/",(req,res)=>{
    let q=`SELECT COUNT(*) FROM user`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let count = result[0]["COUNT(*)"];
            res.render("home.ejs",{count});
        });
    } catch (err){
        console.log(err);
        res.send("Some Error in DB");
    }
});

// 2)GET /user show all users(email,id,username)
app.get("/user",(req,res)=>{
    let q=`SELECT * FROM user`;
    try{
        connection.query(q,(err,users)=>{
            if(err) throw err;
            res.render("showuser.ejs",{users});
        });
    } catch (err){
        console.log(err);
        res.send("Some Error in DB");
    }
});

//3)PATCH  /user/:id   username edit

/* Step1 : GET Method - /user/:id/edit  To get form to edit the username, based on id .This form will require a password. */ 
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;

    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log(result[0]);
            let user = result[0];
            res.render("edit.ejs",{user});
        });
    } catch (err){
        console.log(err);
        res.send("Some Error in DB");
    }
    
});

/* Step2 : PATCH Method - /user/:id  To edit username ,if correct password was entered in form */
app.patch("/user/:id",(req,res)=>{

    let {id}=req.params;
    let {username:newUsername,password:formPass }= req.body;

    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user = result[0];
            if(formPass != user.password){
                res.send("WRONG PASSWORD!");
            } else{
                let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2,(err,result)=>{
                    if(err) throw err;
                    res.redirect("/user");    
                });
            }

        });
    } catch (err){
        console.log(err);
        res.send("Some Error in DB");
    }
});

//4)POST /user/new Add new user

/* Step1 : GET METHOD - /user/new To enter a new username,emailid,password */
app.get("/user/new",(req,res)=>{
    res.render("new.ejs");
});

/* Step2 : POST METHOD - /user/new to add a new user into the database */
app.post("/user/new",(req,res)=>{

    let id = uuidv4();
    let {email,password,username}=req.body;

    let q=`INSERT INTO user(id,username,email,password) VALUES('${id}','${username}','${email}','${password}')`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            res.redirect("/user");
        });
    } catch (err){
        console.log(err);
        res.send("Some Error in DB");
    }

});


//5)DELETE /user/:id/delete   Delete user

/* Step1 : GET Method - /user/:id/delete  To get form to delete the user, based on id .This form will require a correct emailid and password. */
app.get("/user/:id/delete",(req,res)=>{
    let {id}=req.params;

    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log(result[0]);
            let user = result[0];
            res.render("delete.ejs",{user});
        });
    } catch (err){
        console.log(err);
        res.send("Some Error in DB");
    }
});

/* Step2 : DELETE Method - /user/:id  To delete user ,if correct emailid and password was entered in form */
app.delete("/user/:id",(req,res)=>{
    let {id}=req.params;
    let {email:NewEmail,password:NewPassword}=req.body;

    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user = result[0];
            if(NewEmail == user.email && NewPassword == user.password)
            {
                let q2=`DELETE FROM user WHERE id='${id}'`;
                connection.query(q2,(err,result)=>{
                    if(err) throw err;
                    res.redirect("/user");
                });
            }else{   
                res.send("WRONG EMAILID OR PASSWORD!!");
            }
        });
    } catch (err){
        console.log(err);
        res.send("Some Error in DB");
    }

});


//connection.end(); // to close the connection