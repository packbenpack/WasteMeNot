const express = require("express")
const Recipe = require("./models")
const router = express.Router()

router.get("/", async function(req, res){
	const recipes = await Recipe.find()
	res.send(recipes)
})

router.post("/add", async (req, res) => {
	const recipe = await new Recipe({
    ingredients : req.body.ingredients,
    title: req.body.title,
    readyInMinutes: req.body.readyInMinutes,
    servings: req.body.servings,
    sourceUrl: Strreq.body.sourceUrling,
    summary: req.body.summary,
    instructions: req.body.instructions,
    cooked: req.body.cooked,
    favorite: req.body.favorite
	})
	await post.save()
	res.send(post)
})

module.exports = router