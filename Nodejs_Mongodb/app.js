//! Connection nodejs & mongodb

//todo : import mongodb module(3rd party data that is , we want to install)
//todo : steps
//? 1 : create package.json file using i.e., (npm init).
//? 2 : install mongodb package using i.e., (npm i mongodb / npm install mongodb).

//todo : NOTE --> 
//? :  when we install any 3rd party library then in package.json it will creates one---
//? : ----dependencied property object and it create package-lock-json file and node_modules folder 
//? To install node_modules folder use cmd i.e., (npm i / npm install)
const mongodb = require('mongodb').MongoClient

const url = `mongodb://localhost:27017`;

const connectDatabase = async () => {
    try {
        //! steps to connect & create database in mongodb compass : 
        //todo 1 : connect mongodb through URL
        const connected = await mongodb.connect(url);
        console.log("Database is Connected")

        //todo 2 : create database in mongodb
        const database = await connected.db('A9')
        console.log("Database is created")

        //todo 3 : create  collection in database
        await database.createCollection("students");
        console.log("Collection is created in database");

        //!------------------------------------------------------------

    } catch (error) {
        console.log(`Database is not Connected : ${error}`)
    } finally {
        console.log("Task is Completed")
    }
}
connectDatabase()