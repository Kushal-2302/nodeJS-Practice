const express = require('express');
const adminRouter = require('./adminRouter.js')
const userRouter = require('./userRouters.js')

const app = express();
// console.log(app)

app.get('/',(req,res) => {
    res.send("Welcome to express JS");
    res.end();
})

app.use('/admin', adminRouter)

app.use('/user' , userRouter)

app.use((req,res)=>{
    res.send("Page not Found")
    res.end()
})

module.exports = app