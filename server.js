const express = require('express')
const app = express()

var PORT = process.env.PORT || 3001;

app.get('/', function (req, res) {
  res.send('Hot Restaurant')
})
 
app.listen( PORT )