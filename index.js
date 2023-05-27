const express = require("express");
const app = express();

app.get('',(req,resp)=>{
   resp.send("<h1>Hello World</h1>");
});

app.get('/login',(req,resp)=>{
   console.log("name = ",req.query.name);
   const name = req.query.name;
   if(name==="manish"){
      resp.send("login success");
   } else {
      resp.send("login failed")
   }
   
});


app.listen(5000);