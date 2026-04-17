//!-----------------------------------------------------------------------
//todo : create server using http module and Promises .then .catch .finally , read the data from json file and display on browser.
// const http = require('http')
// const fs = require('fs').promises

// const server = http.createServer((req,res)=>{
//      fs.readFile('text.txt', 'utf-8')
//      .then((data)=>{
//         res.writeHead(200,'OK',{'content-type' : 'text/plain'})
//         res.end(data);
//      })
//      .catch((err)=>{
//         console.log("File not found")
//      })
//      .finally(()=>{
//         console.log("This Task is Completed using .then .catch  ")
//      })
// })
// const port = 5000;
// server.listen(port, (err)=>{
//     if(err) throw `Server is not started`
//     console.log(`Server is started : http://localhost:${port}`)
// })



//!-----------------------------------------------------------------------
//todo : create server using http module and Promises async and await , read the data from json file and display on browser.
const http = require('http')
const fs = require('fs').promises

const server =  http.createServer(async (req,res)=>{
     try {
      let data = await fs.readFile('text.txt', 'utf-8')

      res.writeHead(200,'OK',{'content-type' : 'text/plain'})
      res.end(data)
     
     } catch (error) {
       console.log("File not found")
      
     } finally{
      console.log("This task is completed using async and await")
     }
      
})
const port = 5000;
server.listen(port, (err)=>{
    if(err) throw `Server is not started`
    console.log(`Server is started : http://localhost:${port}`)
})

