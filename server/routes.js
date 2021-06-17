const express = require("express")
const Recipe = require("./models")
const router = express.Router()

router.get("/", async function(req, res){
	const recipes = await Recipe.find()
	res.send(recipes)
})

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

router.put("/:id", async(req, res) => {
  try {
    const recipe = await Recipe.findOne({ _id: req.params.id })
    recipe.cooked = true
    await recipe.save()
    res.send(recipe)
  } catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!"})
  }
})

router.put("/:id/fav", async(req, res) => {
  try {
    const recipe = await Recipe.findOne({ _id: req.params.id })
    recipe.favorite = true
    await recipe.save()
    res.send(recipe)
  } catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!"})
  }
})

router.put("/:id/unfav", async(req, res) => {
  try {
    const recipe = await Recipe.findOne({ _id: req.params.id })
    recipe.favorite = false
    await recipe.save()
    res.send(recipe)
  } catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!"})
  }
})

module.exports = router