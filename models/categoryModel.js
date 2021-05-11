const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  { 
    categoryName: String,
    categoryImg: String,
    productType: [
      {
        id: String,
        img: String,
        name: String,
        page: String
      }
    ]
  })

const Category = mongoose.model("category", categorySchema)

module.exports = { Category }