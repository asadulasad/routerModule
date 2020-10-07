//Router Separetion File
const userRouter = require('express').Router

userRouter.get('/logout', (req, res) => {
    res.send('<h1>User Router Module Added </h1>')
})




