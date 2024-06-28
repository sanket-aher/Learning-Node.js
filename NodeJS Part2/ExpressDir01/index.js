/* Q.What is Library? 
Ans: A library is a collection of pre-written code that can be used to perform specific tasks. ex axios */

/* Q.What is framework?
Ans: A framework is a set of pre-written code that provides a structure for developing software applications. ex express */

/* Express : A Node.js web application framework that helps us to make web applications.It is used for server side programmimng.
    Usage : 1)Listen for incoming request. 2)Parse the data. 3)Match response with Routes. 4)Send Response.  */
/* Q.How to Install Express?
Ans: npm install express (Go to website npmjs.com/package/express) */

const express=require("express");
const app=express();
console.dir(app); // Shows all method and properties of express package