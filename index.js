const express = require('express');
var bodyParser = require('body-parser')
// const { appendFile, read } = require('node:fs');
const app = express();
var productRouter = require('./router/product.router.js')

const port = 8000;
let counter = 125;

app.use('/products', productRouter)
app.use(bodyParser.json())




app.get('/', (req, res) => {
  res.send('Hello World! yess')
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}!`)
});