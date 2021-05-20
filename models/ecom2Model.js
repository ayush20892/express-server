const mongoose = require('mongoose');

const ecomTwoSchema = new mongoose.Schema(
{
  categoryName: String,
    productType:{
      typeName: String,
      products: [
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
        }
      ]
    }
})

const EcomTwo = mongoose.model("item", ecomTwoSchema)

module.exports = { EcomTwo }


