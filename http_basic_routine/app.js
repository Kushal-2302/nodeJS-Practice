// console.log("hello")

const http = require('http')

const server = http.createServer((req, res) => {
    if(res.url === '/'){
        res.write("welcome")
        res.end() 
    }else if(req.url === '/about'){
        res.write("I am im about page")
        res.end()
    }else if(req.url === '/menu'){
        res.write("I am in menu page")
        res.end()
    }else {
        res.write('page not found')
        res.end()
    }
})
const port = 5000;
server.listen(port, (err) => {
    if(err) throw ` Server is not started`
    console.log(`Server is started : http://localhost:${port}`)
})