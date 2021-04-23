const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')


let counter = 125
//Products
const products = [
  { id: 123,name: "apple", color: "red", price: 40},
  { id: 124,name: "banana", color: "yellow", price: 20}
]
router.use(bodyParser.json())

router.get('/', (req, res) => {
  res.json({products})
})

router.get('/:id', (req,res) => {
  const { id } = req.params;
  const product = products.find(item => item.id === parseInt(id,10))
  res.json({ succes: 200, product })
})


//POST
router.post('/', (req, res) => {
  const { name, color, price } = req.body
  const newProduct = { id: counter++, name, color, price  }
  products.push(newProduct)

  res.json({succes: true, newProduct})
})

router.post('/:id', (req,res) => {
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