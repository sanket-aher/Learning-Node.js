/* 1]app.listen() : It is used to start a web server and listen to the connections on the specified host and port. */

/* Ports : Port are the logical endpoints of a network connection that is used to exchange information between a web server and a web client. */

const express=require("express");
const app=express();
let port = 8080; // or 3000

//To start a server => node index.js
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});
