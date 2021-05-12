const mongoose = require('mongoose');
require('dotenv').config();


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.er4pv.mongodb.net/inventory?retryWrites=true&w=majority`

async function initializeDBConnection() {
  try{
    const response = await mongoose.connect(uri, 
    { 
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log("MongoDB Connected")
  } catch(err) {
     console.log("MongoDB connection failed ",err)
  }
}

module.exports = { initializeDBConnection }