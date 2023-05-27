
const express = require("express");
require("./db_conn");
const UserModel = require("./model");
const app = express();

app.use(express.json());

// Read Api
app.get("/",async (req,resp)=>{
   let data = await UserModel.find({});
   resp.send(data);
});

// Insert Api
app.post("/",async (req,resp)=>{
   let user = new UserModel(req.body);
   
   let result = await user.save();
   resp.send(result);
})

// Delete Api
app.delete("/",async (req,resp)=>{
   let data = await UserModel.deleteOne(req.body);
   if(data.acknowledged){
      resp.send({text:"Data Deleted"});
   } else {
      console.log({text:"Deletion Failed"});
   }
});

// Update Api
app.put("/",async (req,resp)=>{
   let data = await UserModel.updateOne(
      {name:req.body.name},{
         $set:{age:req.body.age}
      }
   );
   if(data.acknowledged){
      resp.send({text:"Data Updated"});
   } else {
      console.log({text:"Updation Failed"});
   }
});

// Search Api
app.get("/search/:name",async (req,resp)=>{
   let data = await UserModel.find({
      "$or":[
         {name:{$regex:req.params.name}}
      ]
   });
   resp.send(data);
});

app.listen(5000);