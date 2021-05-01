const mongoose = require('mongoose');

const ecomproductSchema = new mongoose.Schema(
  { 
    id: String,
    img: String,
    name: String,
    price: Number,
    beforeDiscount: String,
    quantity: Number,
    inStock: Boolean,
    fastDeliveryAvailable: Boolean,
    trending: Boolean,
  })

const EcomProducts = mongoose.model("ecomproducts", ecomproductSchema)

module.exports = { EcomProducts }