import React, {useState, useEffect} from 'react'
import InputIngredients from './InputIngredients.jsx'
import ViewIngredients from './ViewIngredients.jsx'
import RecipesList from './RecipesList.jsx'
import axios from 'axios'

const Ingredients = () => {
  const [recipes, setRecipes] = useState([])
  const [activeRecipes, setActiveRecipes] = useState(false)
  const [ingredientList, setIngredientList] = useState([])
  const [ingredient, setIngredient] = useState('')

  const generateRecipes = async (ingredients) => {
    const res = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientList}&number=20&apiKey=0951c3300ae944fc82b5e5c6ca06133c`)
    await setRecipes(res.data)
    console.log(res.data, 'recipe data')
  }

  return (
    <div className="ingredients">
      <h1>Ingredients</h1>
      <div>
      <form>
        <label>What's going bad?</label>
        <input
          type="text"
          name="ingredients"
          className="ingredientEntry"
          onChange={(e) => setIngredient(e.target.value)}
          >
        </input>
      </form>
      <button
        type="submit"
        onClick={(e)=> {
          setIngredientList([
          ...ingredientList,
          ingredient
        ])
        setIngredient('')
      }}>
        Add Items
      </button>
    </div>
    {ingredientList.map((ingredient) => (
      <ViewIngredients
        key={ingredient.toString()}
        ingredient={ingredient}/>
      ))
    }
      <button type="submit" className="getRecipesBtn" onClick={()=>generateRecipes(ingredientList)}> Get Recipes </button>
      {recipes
        ? <RecipesList activeRecipes={recipes} />
        : null
      }
    </div>
  )
}

export default Ingredients;