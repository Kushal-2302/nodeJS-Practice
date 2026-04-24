// const mongodb = require('mongodb').MongoClient

const {MongoClient} = require('mongodb');

const url = `mongodb://localhost:27017`;

exports.connectDatabase = async () => {
    const client = new MongoClient(url)
    try {
        //! steps to connect & create database in mongodb compass : 
        //todo 1 : connect mongodb through URL
        const connected = await client.connect(url);
        console.log("Database is Connected")

        //todo 2 : create database in mongodb
        const database = await connected.db('Student_Application')
        console.log("Database is created")

        //todo 3 : create  collection in database
        await database.createCollection("student_Details");
        console.log("Collection is created in database");

        //!------------------------------------------------------------

    } catch (error) {
        console.log(`Database is not Connected : ${error}`)
    } finally {
        console.log("Task is Completed")
    }
}
