const express = require("express");
const path = require("path");
const app = express();

const public_path = path.join(__dirname,'public');


// This is static method
// app.use(express.static(public_path));


// This is dynamic method
app.get('/',(req,resp)=>{
   resp.sendFile(`${public_path}/index.html`)
});

app.get('/about',(req,resp)=>{
   resp.sendFile(`${public_path}/about.html`)
});

app.get('*',(req,resp)=>{
   resp.sendFile(`${public_path}/p_n_f.html`)
});


app.listen(5000);

// Access in browser like this    :    http://localhost:5000/index.html

// index.html    this is default root page