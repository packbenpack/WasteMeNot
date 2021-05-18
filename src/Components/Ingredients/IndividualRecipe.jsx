import React from 'react'

const IndividualRecipe = ({title, missingIngredients}) => {

  return (
    <div className="recipeFlat">
      <h3>{title}</h3>
      <p>Missing Ingredients:</p>
      {missingIngredients.map((ingredients) => {
        <p>{ingredients}</p>
      })}
    </div>
  )
}

export default IndividualRecipe;