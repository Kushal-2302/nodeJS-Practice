const http = require('http')
const fs = require('fs')

const server = http.createServer((req , res)=>{
    if(req.url === '/'){
        try {
            res.writeHead(200, 'ok', {'content-type' : 'text/html'})
            let read = fs.createReadStream("../Client/index.html", 'utf-8')
            read.pipe(res)
        } catch (error) {
            console.log(error)
        }
    }
    else if(req.url === '/design'){
        try {
            res.writeHead(200, 'ok', {'content-type' : 'text/css'})
            let read = fs.createReadStream("../Client/style.css", 'utf-8')
            read.pipe(res)
        } catch (error) {
            console.log(error)
        }
    }
     else if(req.url === '/scriptfile'){
        try {
            res.writeHead(200, 'ok', {'content-type' : 'text/js'})
            let read = fs.createReadStream("../Client/app.js", 'utf-8')
            read.pipe(res)
        } catch (error) {
            console.log(error)
        }
    }
})


const PORT = 5000;
server.listen(PORT, (err)=>{
    if(err) throw err;
    console.log(`Server is started : http://localhost:${PORT}`)
})