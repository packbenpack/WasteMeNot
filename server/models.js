const mongoose = require('mongoose');

const schema = mongoose.Schema({
    ingredients : [
      {ingredientName: String}
    ],
    title: String,
    readyInMinutes: Number,
    servings: Number,
    sourceUrl: String,
    summary: String,
    instructions: String,
    cooked: {Type : Boolean, default : false},
    favorite: {Type : Boolean, default : false}
});

module.exports = mongoose.model("Recipe", schema);