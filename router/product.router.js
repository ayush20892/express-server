const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')
const { extend } = require('lodash')

const { Products } = require('../models/productModel.js')
const { EcomProducts } = require("../models/ecomproductModel.js")

let counter = 125
router.use(bodyParser.json())


// '/products'
router.route('/')
.get(async (req, res) => {
  try{
    const products = await Products.find({})
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
  } catch (err){
    res.status(500).json({ success: false, message: "Unable to add products", errorMessage: err.message })
  }
})



// "/products/:id"
router.param("productId",async (req,res,next,productId) => {
  try{
    const product = await Products.findById(productId)

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
    product.__v = undefined
    res.json({ success: true, product})
})
.post(async (req,res) => {
    const updateProduct = req.body
    let { product } = req

    product = extend(product, updateProduct)

    product = await product.save()
    res.json({ success: true, product })
})
.delete(async (req,res) => {
  let { product } = req;

  product = await product.delete()
  res.json({ succes: true, DeletedProduct: product})
})


module.exports = router