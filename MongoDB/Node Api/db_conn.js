const {MongoClient} = require("mongodb");

// Paste Your Url
const url = `mongodb+srv://<username>:<password>@learning.ncqphl9.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(url);

const dbConnect = async ()=>{
   let result = await client.connect();
   let db = result.db("learndb");
   return db.collection("learning");
}

module.exports = dbConnect;