const fs = require('fs')
// console.log(fs)

//! CreateWriteStream
// let create = fs.createWriteStream('text.txt') //? file stream
// console.log(create) //? writeStream Object
// console.log('File is created') //todo: confirmation msg
// create.write('I Love JavaScript','utf-8')  //?add data
// console.log('Data is added') //todo : confirmation msg

// create.end() //? process engingg //If it is not ended then finidh willt == not etecude

// //todo : Trying add tahe data after process ending
// create.write('I love Node js','utf-8') //!error

// create.on('finish',()=>{
//     console.log('Task is completed') //todo : final confirmation msg
// })

// create.on('error',()=>{
//     console.log("something fishyyyy in write sream") //todo :
// })

//! Points
//* 
//*
//*
//*

//* Note :  once we ended the process then we can't add any dataor we cannot perform anything

//* on : It is used to manage the events of stream like finish, error, end, data.
//* -on method accepts 2 arguments 1st argument is used to pass event name(finish, error, end, data) and 2nd argument is for callback function




//!--------------------------------------------------------
//! CreateReadStream
// let read = fs.createReadStream('text.txt','utf-8')
// console.log(read) //? ReadStream Object

// let info = "";
// read.on('data',(chunk)=>{
//     // console.log(chunk)
//     info += chunk;
// })

// read.on('end',()=>{
//     console.log(info);
//     console.log("Task is Completed")
// })

// read.on('error',(err)=>{
//     // console.log(err);
//     console.log("something fishyyyy in read stream")
// })


//!------------------------------------------------------
//! Duplex stream pipe() : both (read & write)

// let read = fs.createReadStream('text.txt');
// let write = fs.createWriteStream('demo.txt');
// read.pipe(write);

// read.on('end',()=>{
//     console.log("Task is Completed")
// })

// read.on('error',(err)=>{
//     console.log("Something fishyyy in pipe")
// })


//!--------------------------------------------------------
let read = fs.createReadStream('text.txt',{highWaterMark : 20})
read.on('data',(chunk) =>{
    console.log(chunk.toString(), chunk.length)
})