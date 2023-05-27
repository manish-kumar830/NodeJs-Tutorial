
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
})




const UserSchema = new mongoose.Schema(
   {
      name:String,
      age:Number
   }
);


const insertData = async ()=>{
 
   const UserModel = mongoose.model("User",UserSchema);
   let user = new UserModel({
      name:"Mohan",
      age:20
   });

   let result = await user.save();
   console.log(result);
}

const updateData = async ()=>{
   const UserModel = mongoose.model("User",UserSchema);
   let data = await UserModel.updateOne(
      {name:"Suresh"},{
         $set:{name:"Mahesh"}
      }
   );

   if(data.acknowledged){
      console.log("Data Updated");
   } else {
      console.log("Updation Failed");
   }
}

const deleteData = async ()=>{
   const UserModel = mongoose.model("User",UserSchema);
   let data = await UserModel.deleteOne({name:"Rohan"});

   if(data.acknowledged){
      console.log("Data Deleted");
   } else {
      console.log("Deletion Failed");
   }
}

const getData = async ()=>{
   const UserModel = mongoose.model("User",UserSchema);
   let data = await UserModel.find({});
   console.log(data);
}

// insertData();
// updateData();
// deleteData();
// getData();

