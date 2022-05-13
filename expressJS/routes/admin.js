const path = require('path')

const express = require('express')

const rootDir = require('../utils/path')

const router = express.Router()

const products = []

router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add_product.html'))
    res.render('add_product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        activeProduct: true,
        formCSS: true,
        productCSS: true
    })
})

// app.post vs app.get vs app.use
router.post('/product', (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/')
})

module.exports = {
    routes: router,
    items: products
}