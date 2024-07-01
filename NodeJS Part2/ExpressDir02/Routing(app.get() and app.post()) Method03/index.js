/* Routing : It is Process of selecting a path for traffic in a network or between or multiple networks. */

/* 3]app.get() : The app.get() is to route HTTP GET requests to the specified path associating them with the specified callback functions
    Syntax : app.get(path,callback); */

/* 4]app.post() : The app.post() is to route HTTP POST requests to the specified path associating them with the specified callback functions
    Syntax : app.post(path,callback); */

const express=require("express");
const app=express();
let port = 8080; // or 3000

//To start a server => node index.js
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});

app.get("/",(req,res)=>{
    res.send("You contacted a root path");
});

app.get("/apple",(req,res)=>{
    res.send("You contacted apple path");
});

app.get("/mango",(req,res)=>{
    res.send("You contacted mango path");
});

app.post("/",(req,res)=>{
    res.send("You send a POST request");
});

// Not mandatory, but if other than root path,mango path,apple path is hit so use * to send a another response. 
app.get("*",(req,res)=>{
    res.send("This path doest not exits");
});

/* Output:
    Now hit the url on browser with GET method or hoppscotch.io with GET/POST method
    On Browser (GET Methods only):
    1)localhost:8080/           Response =>  You contacted a root path
    2)localhost:8080/apple      Response =>  You contacted apple path
    3)localhost:8080/mango      Response =>  You contacted mango path  
    4)localhost:8080/typeany    Response =>  This path doest not exits
    
    On hoppscotch.io (GET/POST Methods):
    1)localhost:8080/           Response(GET METHOD)  =>  You contacted a root path
    2)localhost:8080/apple      Response(GET METHOD)  =>  You contacted apple path
    3)localhost:8080/mango      Response(GET METHOD)  =>  You contacted mango path  
    4)localhost:8080/typeany    Response(GET METHOD)  =>  This path doest not exits
    5)localhost:8080/           Response(POST METHOD) =>  You send a POST request

*/

/* Q.Difference between app.use() and app.get() */
/*Ans: 1)The app.use() will allow for all http requests(get,post,put,...) matching that route.
       2)The app.get() will allowed for http GET requests to that particular route. */