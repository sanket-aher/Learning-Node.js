/* 2]app.use() : The app.use() function is used to mount the specified middleware function(s) at the path that is being executed.
                 It will allow for All http requests(GET,POST,PUT,DELETE) matching that route (i.e it will not check http request method is GET,POST ,it is executed only). */

const express=require("express");
const app=express();
let port = 8080; // or 3000

//To start a server => node index.js
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});

app.use((req,res)=>{
    //console.log(req);  Shows all the request methods and properties.
    console.log("Request Received");

    /* res.send([body]) : The res.send() functions sends the HTTP response.The body parameter can be object,string,array,html tags,etc. */
    let code="<h1>Fruits</h1>"
    res.send(code);
});
/* Output :
    Step1 : Start the server using 
            node index.js
            App is listening on port 8080
    Step2 : Now on browser/hoppscotch.io hit the url
            1)localhost:8080/ (Hit on Browser  response => Fruits)
            2)localhost:8080/searchengine (Hit on Browser response => Fruits)
            3)localhost:8080/ (Hit on hoppscotch.io using any method GET/POST... response => Fruits)

            App is listening on port 8080
            Request Received
            Request Received
            Request Received                
*/


/* Disadv of app.use() : Hit on browser with any url path you will get response 
                        Ex1) localhost:8080/
                        Ex2) localhost:8080/anythingtype

    To overcome this disdv use app.get() and app.post() method.
*/    


