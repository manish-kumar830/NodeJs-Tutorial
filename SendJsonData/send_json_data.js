const express = require("express")
const app = express();

const data = [
      {
         "name":"Sohan",
         "age":23
      },
      {
         "name":"Mohan",
         "age":43
      },
      {
         "name":"Rohan",
         "age":20
      },

   ]

app.get('/',(req,resp)=>{
   resp.send("Welcome To Home Page");
});

app.get('/data',(req,resp)=>{
   resp.send(data);
})

app.listen(5000);