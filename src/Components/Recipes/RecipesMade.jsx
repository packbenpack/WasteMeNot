import React, {useState, useRef} from 'react'
import Modal from '../Modal.jsx'
import Cooked from './Cooked.jsx'

const RecipesMade = ({recipesDone}) => {


  return (
    <div>
       <h3 className="recipeType">Cooked Recipes</h3>
       <div>
        {recipesDone.map((recipe) => (

          <Cooked recipeInfo={recipe}/>
        ))}
       </div>
    </div>
  )
}

export default RecipesMade;