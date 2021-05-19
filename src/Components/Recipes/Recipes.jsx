import React, {useState, useEffect} from 'react'
import RecipesToMake from './RecipesToMake.jsx'
import RecipesMade from './RecipesMade.jsx'
import axios from 'axios'

const Recipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [recipeNames, setRecipeNames] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get('http://localhost:3000/recipes')
      setSavedRecipes(res.data)
      setRecipeNames(res.data[0].title)
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
       <h1>Recipes</h1>
       { savedRecipes
       ? <RecipesToMake recipes={savedRecipes}/>
       : null
       }
         <RecipesMade />
    </div>
  )
}

export default Recipes;