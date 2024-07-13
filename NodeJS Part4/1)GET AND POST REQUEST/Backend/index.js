/* Q.Difference between GET & POST Request?
        Ans:  GET - 1)Used to GET some response.
                    2)Data sent in query strings(limited,string data & visible in URL).
              POST- 1)Used to POST something(for Create/Write/Update)
                    2)Data sent via request body(any type of data)  */

const express=require("express");
const app=express();
const port=8080;

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});

app.get("/register",(req,res)=>{
    let {user,password}= req.query;
    res.send(`Standard GET Response. Welcome ${user}`);
});

/* Handling POST requests : */
//1)Parse POST request data
/* For Parsing Data , mandotory for POST request to get some response using req.body */
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//2)Set up POST request route to get some response
app.post("/register",(req,res)=>{
    // The req.body property contains key-value pairs of data submitted in the request body. By default, it is undefined and is populated when you use a middleware called body-parsing such as express.urlencoded() or express.json().
    let {user,password}= req.body;
    res.send(`Standard POST Response. Welcome ${user}`);
});



/*
    Output : Now hit on browser with GET/POST Request/hoppscotch.io with GET/POST Request , run index.html file of Frontend folder 
            Ex1) Enter Username => john
                 Enter Password => 123
                 Standard GET Response. Welcome john
            Ex2) Enter Username => smith
                 Enter Password => 123
                 Standard POST Response. Welcome smith 
*/