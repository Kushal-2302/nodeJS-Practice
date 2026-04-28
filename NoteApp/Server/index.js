const http = require('http');
const fs = require('fs');
let {connectMongoDb} = require('./database')
connectMongoDb();

const server = http.createServer((req,res)=>{
    if (req.url === "/") {
            try {
              res.writeHead(200, "ok", { "content-type": "text/html" });
              let read = fs.createReadStream("../Client/index.html", "utf-8");
              read.pipe(res);
            } catch (error) {
              console.log(error);
            }
    } else if (req.url === "/scriptfile") {
            try {
              res.writeHead(200, "ok", { "content-type": "application/javascript" });
              let read = fs.createReadStream("../Client/app.js", "utf-8");
              read.pipe(res);
            } catch (error) {
              console.log(error);
            }
    } else if (req.url === '/add' && req.method ===' POST') {
        
        let body = "";
        req.on('data',chunk => {
            body += chunk.toString()
        })

        req.on('end', async () => {
            try {
                const collection = await connectMongoDb();
                let data = JSON.parse(body) //Coverts a (JSON) string into an object.
                collection.insertOne()
            } catch (error) {
                console.log(error)
            }
        })
    }
})

const PORT = 5000;
server.listen(PORT, err => {
    if(err) throw err;
    console.log(`Server is started : http://localhost:${PORT}`)
})