import React, {useState} from 'react'
import InputIngredients from './InputIngredients.jsx'
import ViewIngredients from './ViewIngredients.jsx'
import RecipesList from './RecipesList.jsx'

const Ingredients = ({ingreds, onChange}) => {

  const [activeRecipes, setActiveRecipes] = useState(false)

  return (
    <div className="ingredients">
      <h1>Ingredients</h1>
      <InputIngredients />
      <ViewIngredients />
      {activeRecipes
        ? <RecipesList />
        : null
      }
    </div>
  )
}

export default Ingredients;