import React from 'react'

const IndividualRecipe = ({title, missingIngredients, unused}) => {

  return (
    <div className="recipeFlat">
      <h3>{title}</h3>
      <p>Missing Ingredients:</p>
      {unused.map((ingredients) =>
        <li className="missingIngredients" key="ingredients.id">
          {ingredients.name}
        </li>
      )}
      <button type='Submit'> Save Recipe </button>
    </div>
  )
}

export default IndividualRecipe;