const express = require('express');
var cors = require('cors')
const app = express();

const { routeNotFound } = require('./middlewares/routeNotFound.js')
const { errorHandler } = require('./middlewares/errorHandler.js')

const { initializeDBConnection } = require('./db/db.connect.js')

const { EcomProducts } = require("./models/ecomproductModel.js")

const port = 8000;

var productRouter = require('./router/product.router.js');


initializeDBConnection()

app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello World! yess')
});


app.use('/products', productRouter)

app.get("/menhalfSleeveTshirt" ,async (req,res) => {
  try{
    const products = await EcomProducts.find({})
    res.json({ success: true, products})
  } catch(err) {
    res.status(500).json({ success: false, message: "unable to get products", errorMessage: err.message})
  }
})


app.use(routeNotFound)

app.use(errorHandler)


app.listen(process.env.PORT || port, () => {
  console.log(`App listening on port ${port}!`)
});