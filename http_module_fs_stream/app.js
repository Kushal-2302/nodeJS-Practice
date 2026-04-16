
//!-----------------------------------------------------------------------
//todo : create server using http module and file stream , read the data from text file and display on browser.

// const http = require('http');
// const fs = require('fs')

// const server = http.createServer((req,res)=>{
//     try {
//         res.writeHead(200,'OK',{'content-type' : 'text/plain'})
//         let read = fs.createReadStream("text.txt",'utf-8')
//         read.pipe(res);
//     } catch (error) {
//         console.log(error)
//     }
// })
// const port = 5000;
// server.listen(port,(err)=>{
//     if(err) throw `Server not started`
//     console.log(`Server is started : http://localhost:${port}`)
// })


//!-----------------------------------------------------------------------
//todo : create server using http module and file stream , read the data from HTML file and display on browser.
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res)=>{
//     try {
//         res.writeHead(200,'OK',{'content-type' : 'text/html'})
//         let read = fs.createReadStream('index.html','utf-8')
//         read.pipe(res)
//     } catch (error) {
//         console.log(error)
//     }
// })
// const port = 5000;
// server.listen(port, (err)=>{
//     if(err) throw `Server is not started`
//     console.log(`Server is started : http://localhost:${port}`)
// })


//!-----------------------------------------------------------------------
//todo : create server using http module and file stream , read the data from CSS file and display on browser.
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res)=>{
//     try {
//         res.writeHead(200,'OK',{'content-type' : 'text/css'})
//         let read = fs.createReadStream('style.css','utf-8')
//         read.pipe(res)
//     } catch (error) {
//         console.log(error)
//     }
// })
// const port = 5000;
// server.listen(port, (err)=>{
//     if(err) throw `Server is not started`
//     console.log(`Server is started : http://localhost:${port}`)
// })


//!-----------------------------------------------------------------------
//todo : create server using http module and file stream , read the data from Javascript file and display on browser.
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res)=>{
//     try {
//         res.writeHead(200,'OK',{'content-type' : 'text/js'})
//         let read = fs.createReadStream('script.js','utf-8')
//         read.pipe(res)
//     } catch (error) {
//         console.log(error)
//     }
// })
// const port = 5000;
// server.listen(port, (err)=>{
//     if(err) throw `Server is not started`
//     console.log(`Server is started : http://localhost:${port}`)
// })


//!-----------------------------------------------------------------------
//todo : create server using http module and file stream , read the data from json file and display on browser.
const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    try {
        res.writeHead(200,'OK',{'content-type' : 'application/json'})
        let read = fs.createReadStream('data.json','utf-8')
        read.pipe(res)
    } catch (error) {
        console.log(error)
    }
})
const port = 5000;
server.listen(port, (err)=>{
    if(err) throw `Server is not started`
    console.log(`Server is started : http://localhost:${port}`)
})




//!-------------------------------------------------------------------------------
