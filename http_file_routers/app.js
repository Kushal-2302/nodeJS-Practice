const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        fs.readFile('text.txt', 'utf-8',(err, data)=>{
            if(err) throw err;
            else {
                res.writeHead(200,'ok',{'content-type' : 'text/plain'})
                res.end(data)
            }
        })
    }else if(req.url === '/htmlfile'){
        fs.readFile('index.html','utf-8',(err,data)=>{
            if(err) throw err;
            else{
                res.writeHead(200,'OK',{'content-type' : 'text/html'})
                res.end(data)
            }
        })
    
    } else if(req.url === '/cssfile'){
        fs.readFile('style.css','utf-8',(err,data)=>{
            if(err) throw err;
            else{
                res.writeHead(200,'OK',{'content-type' : 'text/css'})
                res.end(data)
            }
        })
    
    }else if(req.url === '/javascriptfile'){
        fs.readFile('script.js','utf-8',(err,data)=>{
            if(err) throw err;
            else{
                res.writeHead(200,'OK',{'content-type' : 'text/js'})
                res.end(data)
            }
        })
    
    }
    else {
        res.write("file not found")
        res.end()
    }
    
})

const port = 5000;
server.listen(port, (err) => {
    if(err) throw `Server is not started`
    console.log(`server is started : http://localhost:${port}`)
})