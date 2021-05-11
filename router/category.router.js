const express = require('express')
const router = express.Router()

const { Category } = require("../models/categoryModel.js")


router.route("/")
.get(async (req,res) => {
  try{
    const category = await Category.find({})
    res.json({ success: true, category})
  } catch(err) {
    res.status(500).json({ success: false, message: "Unable to get categories data", errorMessage: err})
  }
})


router.route("/:categoryName")
.get(async (req,res) => {
  try{
    const { categoryName } = req.params
    const category = await Category.find({ categoryName: categoryName })
    res.json({ success: true, category})
  } catch(err) {
    res.status(500).json({ success: false, message: "Unable to get categories data", errorMessage: err})
  }
})


module.exports = router