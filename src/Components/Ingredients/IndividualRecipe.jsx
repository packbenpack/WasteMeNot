import React from 'react'

const IndividualRecipe = ({title, missingIngredients}) => {

  return (
    <div className="recipeFlat">
      <li>{title}</li>
    </div>
  )
}

export default IndividualRecipe;