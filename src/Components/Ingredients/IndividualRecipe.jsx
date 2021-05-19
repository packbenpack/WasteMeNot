import React from 'react'

const IndividualRecipe = ({title, missingIngredients, unused}) => {

  return (
    <div className="recipeFlat">
      <h3>{title}</h3>
      <p>Missing Ingredients:</p>
      {unused.map((ingredients) =>
        <li className="missingIngredients">{ingredients.name}</li>
      )}
    </div>
  )
}

export default IndividualRecipe;