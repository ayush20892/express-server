const mongoose = require('mongoose');

async function initializeDBConnection() {
  try{
    const response = await mongoose.connect('mongodb+srv://ayush20892:8777367407Aa@cluster0.er4pv.mongodb.net/inventory?retryWrites=true&w=majority', 
    { useNewUrlParser: true, 
      useUnifiedTopology: true
    })
    console.log("MongoDB Connected")
  } catch(err) {
     console.log("MongoDB connection failed ",err)
  }
}

module.exports = { initializeDBConnection }