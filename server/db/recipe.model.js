const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Recipe = new Schema({
    ingredients : [
      {ingredientName: String}
    ],
    title: String,
    readyInMinutes: Number,
    servings: Number,
    sourceUrl: String,
    summary: String,
    instructions: String,
    Cooked: {Type : Boolean, default : false},
    Favorite: {Type : Boolean, default : false}
});

module.exports = mongoose.model("Recipe", Recipe);