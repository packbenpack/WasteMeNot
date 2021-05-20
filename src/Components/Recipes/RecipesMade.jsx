import React, {useState, useRef} from 'react'
import Modal from '../Modal.jsx'
import Cooked from './Cooked.jsx'

const RecipesMade = ({recipesDone}) => {


  return (
    <div>
       <h1>Cooked Recipes</h1>
       <div>
        {recipesDone.map((recipe) => (

          <Cooked recipeInfo={recipe}/>
        ))}
       </div>
    </div>
  )
}

export default RecipesMade;