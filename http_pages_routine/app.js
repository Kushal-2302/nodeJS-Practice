const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        try {
            res.writeHead(200,'ok',{'content-type' : 'text/html'})
            let read = fs.createReadStream('index.html','utf-8')
            read.pipe(res)
        } catch (err) {
            console.error(err)
        }
    }
    else if(req.url === '/stylepage'){
        try {
            res.writeHead(200,'ok',{'content-type' : 'text/css'})
            let read = fs.createReadStream('style.css','utf-8')
            read.pipe(res)
        } catch (err) {
            console.error(err)
        }
    }
})

const port = 5000;
server.listen(port, (err) => {
    if(err) console.err(err);
    console.log(`Server is Started : http://localhost:${port}`)
})