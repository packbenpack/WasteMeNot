const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect('mongodb://localhost:27017/recipes', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})