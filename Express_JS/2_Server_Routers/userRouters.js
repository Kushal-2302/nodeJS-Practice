const express = require('express')

const userRouter = express.Router();

userRouter.get('/',(req,res)=>{
    res.send('User Home Page 🏠')
    res.end()
})

userRouter.get('/about',(req,res)=>{
    res.send('User About Page 🤗')
    res.end()
})

userRouter.get('/contact',(req,res)=>{
    res.send('User Contact Page ☎️')
    res.end()
})


module.exports = userRouter