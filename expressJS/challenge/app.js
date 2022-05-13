// 1. Create a npm project and install Express 

// 2. Create an express app which funnels the requests through 2 middleware functions 
//      that  log somethign to the console

// 3. Handle requests to "/" and "/users" such that each request only has one handler/middleware
//      that does something with it (send some dummy response)

const express = require('express')

const app = express()

app.use('/users', (req, res, next) => {
    console.log('Second Middleware')
    res.send('<h1>Second Response endpoint reach</h1>')
})

app.use('/', (req, res, next) => {
    console.log('First Middleware')
    res.send('<h1>First Response endpoint reach</h1>')
})

app.listen(3000)