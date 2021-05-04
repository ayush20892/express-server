const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')

const { Products } = require('../models/productModel.js')
const { EcomProducts } = require("../models/ecomproductModel.js")

let counter = 125
router.use(bodyParser.json())


// '/products'
router.route('/')
.get(async (req, res) => {
  try{
    const products = await EcomProducts.find({})
    res.json({ success: true, products})
  } catch(err) {
    res.status(500).json({ success: false, message: "unable to get products", errorMessage: err.message})
  }
})
.post(async (req, res) => {
  try {
    const product = req.body
    const newProduct = new Products(product)
    const savedProduct = await newProduct.save()

    res.json({succes: true, product: savedProduct})
  } catch {
    res.status(500).json({ success: false, message: "Unable to add products", errorMessage: err.message })
  }
})



// "/products/:id"
router.param("productId",async (req,res,next,productId) => {
  try{
    const product = await EcomProducts.findById(productId)

    if(!product)
      return res.status(400).json({ status: false, message: "Error getting product by Id"})

    req.product = product
    next()
  } catch (err){
    res.status(400).json({ status: false, message: err.message})
  }
})

router.route('/:productId')
.get((req,res) => {
    let { product } = req
    res.json({ success: true, product})
})
.post((req,res) => {
  const { id } = req.params
  const updateProduct = req.body

  products.forEach(product => {
    if(product.id === parseInt(id,10))
    {
      Object.keys(updateProduct).forEach(key => {
        if(key in product) {
          product[key] = updateProduct[key]
        }
      })
    }
  })
  const product = products.find(item => item.id === parseInt(id,10))
  res.json({ succes: true, product})
})


module.exports = router