import React, {useState} from 'react'
import axios from 'axios'

const IndividualRecipe = ({title, missingIngredients, unused, id}) => {
  const [saveRecipes, setSaveRecipes] = useState('')

  const cleanText = (str) => {
    let strippedString = str.replace(/(<([^>]+)>)/gi, "");
    return strippedString
  }

  const getExtendedRecipe = async (recipe) => {
    const ingredientsArray = []
    for (let i = 0; i < recipe.extendedIngredients.length; i++) {
      ingredientsArray.push(recipe.extendedIngredients[i].originalString)
    }
    const cleanedSummary = cleanText(recipe.summary)
    const cleanedInstructions = cleanText(recipe.instructions)
    const recipeShape = {
      ingredients: ingredientsArray,
      title: recipe.title,
      readyInMinutes: recipe.readyInMinutes,
      servings: recipe.servings,
      sourceUrl: recipe.sourceUrl,
      summary: cleanedSummary,
      instructions: cleanedInstructions,
      cooked: false,
      favorite: false,
    }
    try {
    await axios.post('http://localhost:3000/recipes/addRecipe', recipeShape)
    console.log('success')
    } catch (err) {
      console.log(err)
    }
  }

  const getRecipe = async (recipeId) => {
    const res = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?&apiKey=0951c3300ae944fc82b5e5c6ca06133c`)
    setSaveRecipes(res.data);
  }

  return (
    <div className="recipeFlat">
      <h3>{title}</h3>

      <p>Missing Ingredients:</p>
      {unused.map((ingredients) =>
        <li
          className="missingIngredients" key={ingredients.id}>
          {ingredients.name}
        </li>
      )}
      <button type='Submit' onClick={()=> getRecipe(id)}> Save Recipe </button>
      <button type='Submit' onClick={()=> getExtendedRecipe(saveRecipes)}> Test Recipe </button>
    </div>
  )
}

export default IndividualRecipe;