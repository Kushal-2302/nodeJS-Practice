//todo : import mongodb;
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

let collection;

exports.connectMongoDb = async () => {
  // console.log("hi")
  try {
    await client.connect(url);
    console.log("Database is Connected");

    let database = await client.db("Student_App");
    console.log("Student db is created");

    collection = await database.createCollection("student_details");
    console.log("Collection is created")

    return collection;
  } catch (error) {
    console.log(`database is not connected`)
  }finally{
    console.log("Task is completed");
  }
};
