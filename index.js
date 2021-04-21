const express = require('express');
// const { appendFile, read } = require('node:fs');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  
  res.send('Hello World! yess')
});

//Products
const products = [
  { name: "apple", color: "red", price: 20},
  { name: "banana", color: "yellow", price: 20}
]

app.get('/products', (req, res) => {
  res.send(products)
})




app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}!`)
});