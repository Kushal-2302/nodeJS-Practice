const express = require('express')

const adminRouter = express.Router();

adminRouter.get('/',(req,res)=>{
    res.send('Admin Home Page 🏠')
    res.end()
})

adminRouter.get('/about',(req,res)=>{
    res.send('Admin About Page 🤗')
    res.end()
})

adminRouter.post('/add',(req,res)=>{
    res.send('Admin data is added ')
    res.end()
})

adminRouter.delete('/del',(req,res)=>{
    res.send('Admin data is deleted')
    res.end()
})


module.exports = adminRouter