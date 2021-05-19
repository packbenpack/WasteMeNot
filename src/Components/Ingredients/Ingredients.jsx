import React, {useState, useEffect} from 'react'
import InputIngredients from './InputIngredients.jsx'
import ViewIngredients from './ViewIngredients.jsx'
import RecipesList from './RecipesList.jsx'
import recipeMeta from '../../recipeMeta.json'

const Ingredients = ({ingreds, onChangeMeta}) => {
  const [recipes, setRecipes] = useState([])
  const [activeRecipes, setActiveRecipes] = useState(false)

  const generateRecipes = async (recipes) => {
    await setRecipes(recipes)
    await setActiveRecipes(true)
    console.log(recipes)
  }

  return (
    <div className="ingredients">
      <h1>Ingredients</h1>
      <InputIngredients ingreds={ingreds} onChangeMeta={onChangeMeta}/>
      <ViewIngredients />
      {activeRecipes
        ? <RecipesList activeRecipes={recipes} />
        : null
      }
      <button type="submit" onClick={()=>generateRecipes(recipeMeta)}> Get Recipes </button>
    </div>
  )
}

export default Ingredients;