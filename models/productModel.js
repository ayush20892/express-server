const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({ name: String, price: Number })

const Products = mongoose.model("Product", productSchema)

module.exports = { Products }