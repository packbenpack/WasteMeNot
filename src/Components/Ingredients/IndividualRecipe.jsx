import React, {useState} from 'react'
import axios from 'axios'

const IndividualRecipe = ({title, missingIngredients, unused, id}) => {
  const [saveRecipes, setSaveRecipes] = useState('')

  const getRecipe = async (recipeId) => {
    axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?&apiKey=0951c3300ae944fc82b5e5c6ca06133c`)
  .then((res) => {
    useState(res.data);
  });
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
    </div>
  )
}

export default IndividualRecipe;