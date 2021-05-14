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

router.route('/:categoryName/:productType')
.get(async (req,res) => {
  try{
    const { categoryName, productType } = req.params
    const category = await Category.find({ categoryName: categoryName },`${productType}`)
    res.json({ success: true, category })
  } catch(err) {
    res.status(500).json({ success: false, message: `Unable to get ${categoryName} category data of ${productType} typw`, errorMessage: err.message })
  }
})


module.exports = router