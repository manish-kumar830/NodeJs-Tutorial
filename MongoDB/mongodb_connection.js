const { MongoClient } = require("mongodb");

// Paste Your Url
const url = `mongodb+srv://<username>:<password>@learning.ncqphl9.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(url);

async function dbConnect() {
   let result = await client.connect();
   let db = result.db("learndb");
   let collection = db.collection("learning");

   return collection;
   // let response = await collection.find({name:"Manish"}).toArray();
   // console.log(response);
}

module.exports = dbConnect;