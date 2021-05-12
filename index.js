const express = require('express');
var cors = require('cors')
const app = express();
require('dotenv').config();

const { routeNotFound } = require('./middlewares/routeNotFound.js')
const { errorHandler } = require('./middlewares/errorHandler.js')

const { initializeDBConnection } = require('./db/db.connect.js')

const { EcomProducts } = require("./models/ecomproductModel.js")
const { Category } = require("./models/categoryModel.js")


const port = 8000;

var productRouter = require('./router/product.router.js');
var categoryRouter = require('./router/category.router.js')



initializeDBConnection()

app.use(cors({ "origin": "http://localhost:3000" }));


app.get('/', (req, res) => {
  res.send(process.env.DB_USER)
});


app.use('/products', productRouter)

app.use('/category', categoryRouter)

app.get('/ecom' ,async (req,res) => {
  try{
    const products = await EcomProducts.find({})
    res.json({ success: true, products})
  } catch(err) {
    res.status(500).json({ success: false, message: "unable to get products", errorMessage: err.message})
  }
})

app.get('/:categoryName' ,async (req,res) => {
  try{  
    const { categoryName } = req.params
    const products = await EcomProducts.find({ categoryName: categoryName})
    res.json({ success: true, products})
  } catch(err) {
    res.status(404).json({ success: false, message: "The product ID sent has no product associated with it. Check and try again", errorMessage: err.message })
  }
})



app.use(routeNotFound)

app.use(errorHandler)


app.listen(process.env.PORT || port, () => {
  console.log(`App listening on port ${port}!`)
});