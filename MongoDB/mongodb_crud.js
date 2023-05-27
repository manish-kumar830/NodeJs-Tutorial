const dbConnect = require("./mongodb_connection");


// Read All Data
const readData = async ()=>{
   let db = await dbConnect();
   let response = await db.find().toArray();
   console.log(response);
   console.log("length of data is ",response.length);
}


// Read Particular Data
const readOneData = async ()=>{
   let db = await dbConnect();
   let response = await db.find({name:"Rohan"}).toArray();
   console.log(response);
}


// Insert Single Data
const insertSingleData = async ()=>{
   let db = await dbConnect();
   let response = await db.insertOne(
      {
         "name":"Rohit",
         "age":19
      }
   )

   if(response.acknowledged){
      console.log("Data Inserted")
   } else {
      console.log("Insertion Failed")
   }
}


// Insert Many Data
const insertManyData = async ()=>{
   let db = await dbConnect();
   let response = await db.insertMany(
      [
         {
            "name":"Subham",
            "age":19
         },
         {
            "name":"Subash",
            "age":23
         }
      ]
   )

   if(response.acknowledged){
      console.log("Data Inserted")
   } else {
      console.log("Insertion Failed")
   }
}


// Update Data
const updateData = async ()=>{
   let db = await dbConnect();
   let response = await db.updateOne(
      {name:"Rohit"},{
         $set:{
            age:23
         }
      }
   );

   if(response.acknowledged){
      console.log("Data Updated")
   } else {
      console.log("Updation Failed")
   }
}

// Delete Data
const deleteData = async ()=>{
   let db = await dbConnect();
   let response = await db.deleteOne({name:"Mohan"})

   if(response.acknowledged){
      console.log("Data Deleted")
   } else {
      console.log("Deletion Failed")
   }
}

readData();
// readOneData();
// insertSingleData();
// readData();
// insertManyData();
// updateData();
// deleteData();
