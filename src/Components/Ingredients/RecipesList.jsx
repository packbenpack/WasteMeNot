import React, {useState} from 'react'
import IndividualRecipe from './IndividualRecipe.jsx'

const RecipesList = ({activeRecipes}) => {

  return (
    <div className="recipeBox">
      <div>
      {activeRecipes.map((recipe) =>
        <IndividualRecipe key = {recipe.id}
                          id = {recipe.id}
                          title={recipe.title}
                          unused={recipe.missedIngredients}
        />
      )}
      </div>
    </div>
  )
}

export default RecipesList;