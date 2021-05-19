const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require("./routes.js")

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

mongoose
  .connect('mongodb://localhost:27017/recipes', { useNewUrlParser: true })
  .then(() => {
    app.use("/recipes", routes)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})