const mongoose = require('mongoose');

const schema = mongoose.Schema({
    ingredients : [],
    title: String,
    readyInMinutes: Number,
    servings: Number,
    sourceUrl: String,
    summary: String,
    instructions: String,
    cooked: {
        type : Boolean,
        default : false
    },
    favorite: {
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model("Recipe", schema);