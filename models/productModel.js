const mongoose = require('mongoose');
require('mongoose-type-url')

const productSchema = new mongoose.Schema(
  { 
    name: {
      type: String,
      required: [true, "Cannot Enter product without Name, please enter Name"]
    }, 
    modelNo: {
      type: String,
      required: "Cannot Enter product without ModelNo, please enter model number",
      unique: [ true, "Custom Unique failed"]
    },
    price: {
      type: Number,
      required: [true, "Cannot Enter product without price, please enter price"]
    },
    url: {
      type: mongoose.SchemaTypes.Url,
      required: "Cannot Enter product without Name, please enter Name"
    },
    description: {
      type: String,
      min: [ 300, "Description must be minimum 300 characters"]
    }
  },
  {
    timestamps: true
  })

const Products = mongoose.model("Product", productSchema)

module.exports = { Products }