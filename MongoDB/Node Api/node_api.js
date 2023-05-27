const express = require("express");
const dbConnect = require("./db_conn");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Read Api
app.get("/",async (req,resp)=>{
   let data = await dbConnect();
   let response = await data.find({}).toArray();
   resp.send(response);
})


// Insert Api
app.post("/",async (req,resp)=>{
   let data = await dbConnect();
   let name = req.body.name;
   let age = req.body.age;
   let response = await data.insertOne(
      {
         "name":name,
         "age":age
      }
   )
   if(response.acknowledged){
      resp.send({ status:200, text:"Data Inserted"});
   } else {
      resp.send({ status:400, text:"Error"});
   }
   
})

// Update Api
app.put("/",async (req,resp)=>{
   let data = await dbConnect();
   let name = req.body.name;
   let age = req.body.age;
   let response = await data.updateOne(
      {name:req.body.name},{
         $set:{name:req.body.name,age:req.body.age}
      }
   )
   if(response.acknowledged){
      resp.send({ status:200, text:"Data Updated"});
   } else {
      resp.send({ status:400, text:"Error"});
   }
   
})


// Delete Api
app.delete("/",async (req,resp)=>{
   let data = await dbConnect();
   let name = req.body.name;
   let response = await data.deleteOne({"name":name})
   if(response.acknowledged){
      resp.send({ status:200, text:"Data Deleted"});
   } else {
      resp.send({ status:400, text:"Error"});
   }
   
})

app.listen(5000);