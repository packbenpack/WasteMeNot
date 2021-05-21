import React, {useState} from 'react'
import Uncooked from './Uncooked.jsx'

const RecipesToMake = ({recipes}) => {
  return (
    <div>
       <h3 className="recipeType">Uncooked Recipes</h3>
       {recipes.map((recipe) => (
        <Uncooked recipeInfo={recipe}/>
      ))}
    </div>
  )
}

export default RecipesToMake;