const express = require("express")
const Recipe = require("./models")
const router = express.Router()

router.get("/", async function(req, res){
	const recipes = await Recipe.find()
	res.send(recipes)
})

// router.post("/add", async (req, res) => {
// 	const recipe = new Recipe({
//     ingredients : req.body.ingredients,
//     title: req.body.title,
//     readyInMinutes: req.body.readyInMinutes,
//     servings: req.body.servings,
//     sourceUrl: req.body.sourceUrl,
//     summary: req.body.summary,
//     instructions: req.body.instructions,
//     cooked: req.body.cooked,
//     favorite: req.body.favorite
// 	})
// 	await post.save()
// 	res.send(post)
// })

router.post('/addRecipe', async(req, res) => {
  try {
	const recipe = new Recipe({
    ingredients : req.body.ingredients,
    title: req.body.title,
    readyInMinutes: req.body.readyInMinutes,
    servings: req.body.servings,
    sourceUrl: req.body.sourceUrl,
    summary: req.body.summary,
    instructions: req.body.instructions,
    cooked: req.body.cooked,
    favorite: req.body.favorite
	})
	await recipe.save()
	res.send(recipe)
  } catch (error) {
    console.log(error)
  }
})

router.post("/addIngredient", async(req, res) => {
  const ingredient = new Ingredient({
    ingredient : req.body.ingredient
  })
  await post.save()
  res.send(post)
})

module.exports = router