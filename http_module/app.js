//! HTTP modules : 
//? In NodeJS HTTP module is used to create web server and handle http request & http response then print response data in browser, without using any external libraries.
//? http module is built-in module of NODE-JS

// console.log('HTTP Module')

// const http = require("http");
// console.log(http);

//todo : create basic server using http module
// const server = http.createServer((req, res) => {
//     res.write("Welcome")
//     res.end();
// });

// const port = 5000
// server.listen(port, (err) => {
//   if (err) throw `Server is not started`;
//   console.log(`Server is ready : http://localhost:${port}`);
// });


// todo : create server with status message  & status code
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,'OK',{'content-type' : 'text/plain'})
//     res.end('This message is from server side')
// })
// const port = 5000
// server.listen(port, (err) => {
//   if (err) throw `Server is not started`;
//   console.log(`Server is ready : http://localhost:${port}`);
// });


//!------------------------------------------------------------------------------
//todo : create server using http module, read the text file using fs module callback, display file data as a response
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req,res)=>{
//     fs.readFile('text.txt','utf-8',(err, data)=>{
//         if(err){
//             throw `File not found`
//         } else {
//             res.writeHead(200,'ok',{'content-type':'text/plain'})
//             res.end(data)
//         }
//     })
// })

// const port = 5000;
// server.listen(port, err => {
//     if(err) throw err;
//     console.log(`server is ready : http://localhost:${port}`)
// })


//todo :  create server using http module, read the html file using fs module callback the file, display file data as a response

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    fs.readFile('index.html','utf-8',(err, data)=>{
        if(err){
            throw `File not found`
        } else {
            res.writeHead(200,'ok',{'content-type':'text/html'})
            res.end(data)
        }
    })
})

const port = 5000;
server.listen(port, err => {
    if(err) throw err;
    console.log(`server is ready : http://localhost:${port}`)
})



//!-----------------------------------------------------------------
//todo : NOTE : 
//? http.createServer(CBF) : This method is used to create server. createServer is HOF, we can create CBF with 2 parameter i.e., request & response (both are Object)
//? syntax : http.createServer((req, res)=>{})
//? res.write() : It is used to send responce data & it display in Browser
//? res.end() : It is used to end the response info
//? listen(portnumber, CBF) : starts server, (CBF is used to handle the server error)