import React, {useState} from 'react'

const RecipesToMake = ({recipes}) => {
  return (
    <div>
       <h1>Uncooked Recipes</h1>
       <div>
        {recipes.map((recipe) => (
          <p>{recipe.title}</p>
        ))}
       </div>
    </div>
  )
}

export default RecipesToMake;