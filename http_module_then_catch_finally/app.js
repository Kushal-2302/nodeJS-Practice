//!-----------------------------------------------------------------------
//todo : create server using http module and Promises .thne .catch .finally , read the data from json file and display on browser.
const http = require('http')
const fs = require('fs').promises

const server = http.createServer((req,res)=>{
     res.writeHead(200,'OK',{'content-type' : 'text/plain'})
     fs.readFile('text.txt', 'utf-8')
     .then(()=>{
        read.end(res);
     })
     .catch((err)=>{
        console.log("File not found")
     })
     .finally(()=>{
        console.log("Task is Completed ")
     })
})
const port = 5000;
server.listen(port, (err)=>{
    if(err) throw `Server is not started`
    console.log(`Server is started : http://localhost:${port}`)
})
