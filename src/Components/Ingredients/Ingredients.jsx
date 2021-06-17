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
  const [ingredientsStored, setIngredientsStored] = useState(false)

  const generateRecipes = async (ingredients) => {
    const res = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientList}&number=20&apiKey=0951c3300ae944fc82b5e5c6ca06133c`)
    await setRecipes(res.data)
    console.log(res.data, 'recipe data')
  }

  useEffect(() => {
    setIngredientsStored(true)
  }, [ingredientList])

  return (
    <div className="ingredients">
      <h1 className="ingredientsHeader">Ingredients</h1>
      <div>
      <form className="enterIngredients">
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
        className = "submitIngredients"
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
    {ingredientsStored
      ? <button
      type="submit"
      className="getRecipesBtn"
      onClick={()=>generateRecipes(ingredientList)}>
      Get Recipes
      </button>
      : null
    }
          {recipes
        ? <RecipesList activeRecipes={recipes} />
        : null
      }
    </div>
  )
}

export default Ingredients;