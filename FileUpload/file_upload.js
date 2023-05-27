const express = require("express");
const multer = require("multer");
const app = express();

const upload = multer({
   storage:multer.diskStorage({
      destination:function(req,file,cb){
         cb(null,"upload");
      },
      filename:function(req,file,cb){
         cb(null,file.filename+"-"+Date.now()+".jpg");
      }
   })
}).single("user_file");


app.get("/",(req,resp)=>{
   resp.send("Please Visit /upload Path")
})

app.post("/",(req,resp)=>{
   resp.send("Please Visit /upload Path")
})

app.post("/upload",upload,(req,resp)=>{
   resp.send("File Uploaded");
});

app.listen(5000);