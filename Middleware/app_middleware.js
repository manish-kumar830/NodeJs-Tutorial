
// Application Level Middleware


const express = require("express");
const app = express();

// middleware code

const reqFilter = (req,resp,next)=>{
   if(!req.query.age){
      resp.send("<h1>Please Provide Age</h1>");
   } else if(req.query.age<18) {
      resp.send("<h1>You Have Under Age</h1>")
   } else {
      next();
   }
}

// using middleware

app.use(reqFilter);

app.get('',(req,resp)=>{
   resp.send("<h1>Welcome To Home Page</h1>");
});

app.get('/users',(req,resp)=>{
   resp.send("<h1>Welcome To Users Page</h1>");
});

app.listen(5000);