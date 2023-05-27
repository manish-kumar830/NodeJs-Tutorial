const express = require("express");
const con = require("./db_conn");
const app =express();

app.use(express.json());


// Read Api
app.get("/",(req,resp)=>{
   con.query("Select * From users",(err,result)=>{
      if(err){
         console.log("Error : " + err);
      } else {
         resp.send(result);
      }
   });
});


// Insert Api
app.post("/",(req,resp)=>{
   let data = req.body;
   con.query("Insert Into users SET ?",data,(err,result,field)=>{
      if(err){
         console.log("Error : " + err);
      } else {
         resp.send("Data Inserted");
      }
   });
});


// Update Api
app.put("/:ID",(req,resp)=>{
   let data = [req.body.Name,req.body.Password,req.body.Email,req.params.ID]
   con.query("Update users SET Name = ?, Password = ?, Email = ? where Id = ?",data,(err,result,field)=>{
      if(err){
         console.log("Error : " + err);
      } else {
         resp.send("Data Updated");
      }
   });
});


// Delete Api
app.delete("/:ID",(req,resp)=>{
   con.query("Delete from users where ID = "+req.params.ID,(err,result,field)=>{
      if(err){
         console.log("Error : " + err);
      } else {
         resp.send("Data Deleted");
      }
   });
});


app.listen(5000);