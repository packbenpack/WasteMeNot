import React, {useState} from 'react'
import axios from 'axios'

const IndividualRecipe = ({title, missingIngredients, unused, id}) => {
  const [saveRecipes, setSaveRecipes] = useState('')
  const [recipeHasBeenSaved, setRecipeHasBeenSaved] = useState(false)

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
    setRecipeHasBeenSaved(true)
    } catch (err) {
      console.log(err)
    }
  }

  const getRecipe = async (recipeId) => {
    const res = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?&apiKey=0951c3300ae944fc82b5e5c6ca06133c`)
    setSaveRecipes(res.data);
    getExtendedRecipe(res.data)
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
      { recipeHasBeenSaved
      ? <button type='Submit' className="savedRecipe" onClick={()=> getRecipe(id)}> Recipe Saved </button>
      : <button type='Submit' className="saveRecipe" onClick={()=> getRecipe(id)}> Save Recipe </button>
      }
    </div>
  )
}

export default IndividualRecipe;