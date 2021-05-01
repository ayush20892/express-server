const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')

const { Products } = require('../models/productModel.js')


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
  } catch {
    res.status(500).json({ success: false, message: "Unable to add products", errorMessage: err.message })
  }
})



// "/products/:id"
router.param("id",async (req, res, next, id) => {
  try {
    const product = await Products.findById(id)

    if(!product)
      return res.status(400).json({ success: false, message: "Error getting product"})

    req.product = product
    next()
  } catch (err) {
    return res.status(400).json({ success: false, message: "Error getting product", errorMessage: err.message})
  }
})

router.route('/:id')
.get(async (req,res) => {
  try{
    const { id } = req.params;
    const product = await Products.findOne({ _id: id})
    res.json({ success: true, product })
  } catch(err) {
    res.status(500).json({ success: false, message: "Unable to get product by ID", errorMessage: err.message })
  }
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