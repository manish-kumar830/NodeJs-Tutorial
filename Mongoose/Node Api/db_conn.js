
const mongoose = require("mongoose");

// Paste Your Url
const url = `mongodb+srv://<username>:<password>@learning.ncqphl9.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url,{
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(()=>{
   console.log("Database Connected");
}).catch(()=>{
   console.log("Connection Failed");
});
