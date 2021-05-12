const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  [
    {
      emailId : String,
      username : String,
      password : String,
      cart : [{ type: Schema.Types.ObjectId, ref: 'EcomProducts' }],
      wishList : [{ type: Schema.Types.ObjectId, ref: 'EcomProducts' }]
    }
  ])

const User = mongoose.model("user", userSchema)

module.exports = { User }