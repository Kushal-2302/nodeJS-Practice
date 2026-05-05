const express = require('express');
// console.log(express);
const dotenv = require('dotenv').config()

const server = express();
// console.log(server);

server.get('/',(req,res) => {
    res.send("Welcome to express JS");
    res.end();
})

server.post('/',(req,res)=>{
    res.send("Data is added");
    res.end();
})

server.delete('/',(req,res)=>{
    res.send("Data is deleted");
    res.end();
})

server.use((req,res)=>{
    res.send("Page not found");
    res.end();
})

const PORT = process.env.PORT;
server.listen(PORT, err => {
    if(err) throw err;
    console.log(`Server is Created  : http://localhost:${PORT}`);
})

