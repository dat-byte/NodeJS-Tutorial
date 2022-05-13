const path = require('path')

const express = require('express')

const rootDir = require('../utils/path')

const router = express.Router()

const adminData = require('./admin')


// get and post use exact matching
router.get('/', (req, res, next) => {
    const products = adminData.items
    // res.render('shop', { prods: products, pageTitle: 'Shop', path: '/'}) // PUG
    res.render('shop', { 
        prods: products, 
        pageTitle: 'Shop', 
        path: '/', 
        hasProducts: products.length > 0, 
        activeShop: true,
        productCSS: true
    })
})

module.exports = router