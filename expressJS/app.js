const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars')

const app = express()

// HANDLE BARS TEMPLATE ENGINE
// app.engine('handlebars', expressHbs({
//     layoutDir: 'views/layouts/', 
//     defaultLayout:'main-layout',
//     extname: 'handlebars'
// }))
// app.set('view engine', 'handlebars')

// PUG TEMPLATE ENGINE
// app.set('view engine', 'pug')

app.set('view engine', 'ejs')
app.set('views', 'views')

const adminRoutes = require('./routes/admin')
const shopRoutes  = require('./routes/shop')

// parse incoming request body
// automatically call next to go through the rest of middlewares
app.use(bodyParser.urlencoded())
// file requests would be forward to public directory
app.use(express.static(path.join(__dirname, 'public')))

// /admin/products
app.use('/admin', adminRoutes.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
    res.status(404).render('404', { pageTitle: 'Page Not Founds'})
})

app.listen(3000)