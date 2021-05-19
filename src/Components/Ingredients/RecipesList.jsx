import React, {useState} from 'react'
import IndividualRecipe from './IndividualRecipe.jsx'

const RecipesList = ({activeRecipes}) => {

  return (
    <div className="recipeBox">
      <p>hi</p>
      <div>
      {activeRecipes.map((recipe) =>
        <IndividualRecipe key = {recipe.id}
                          title={recipe.title}
        />
      )}
      </div>
    </div>
  )
}

export default RecipesList;