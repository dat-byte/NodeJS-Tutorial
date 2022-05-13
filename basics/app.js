// can also be named server.js
// Core Modules: http, https, fs, path, os, etc..
// http     -> launching a server
// https    -> launching an SSL server
// fs       -> file system management
// path     -> 
// os       -> 


// import http module
const http  = require('http')
const routes = require('./routes')

// request  -> contains data about the request
// response -> response for request
// function rqListener(request, response){
//     console.log(request)
// }
// http.createServer(rqListener)

// alternative for creating server
const server = http.createServer(routes.handler)

// have the server listen on port 3000
server.listen(3000)



