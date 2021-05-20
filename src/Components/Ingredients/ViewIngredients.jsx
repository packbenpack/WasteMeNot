import React, {useState} from 'react'

const ViewIngredients = ({ingredient}) => {

  return (
    <div className="ingredientList">
      <p className="ingredient">{ingredient}</p>
    </div>
  )
}

export default ViewIngredients;