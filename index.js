const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  
  res.send('Hello World! yess')
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}!`)
});