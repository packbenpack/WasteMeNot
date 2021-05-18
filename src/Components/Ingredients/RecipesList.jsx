import React, {useState} from 'react'
import IndividualRecipe from './IndividualRecipe.jsx'

const RecipesList = ({activeRecipes}) => {

  return (
    <div className="recipeBox">
      {activeRecipes.map((recipe) => {
        <IndividualRecipe
          key={recipe.id}
          missingIngredients={recipe.missedIngredients}
          title={recipe.title}
        />
        // this will post to the user's DB
      })}
    </div>
  )
}

export default RecipesList;