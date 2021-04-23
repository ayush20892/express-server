const express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors')
// const { appendFile, read } = require('node:fs');
const app = express();
var productRouter = require('./router/product.router.js')

const port = 8000;

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World! yess')
});


app.use('/products', productRouter)



app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}!`)
});