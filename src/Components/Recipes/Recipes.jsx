import React, {useState, useEffect} from 'react'
import RecipesToMake from './RecipesToMake.jsx'
import RecipesMade from './RecipesMade.jsx'
import axios from 'axios'

const Recipes = () => {
  const [savedRecipesUnmade, setSavedRecipesUnmade] = useState('');
  const [savedRecipesMade, setSavedRecipesMade] = useState('');
  const [recipeNames, setRecipeNames] = useState([]);
  useEffect(async () => {
    try {
      const res = await axios.get('http://localhost:3000/recipes')
      let made = [];
      let unmade = [];
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].cooked === true) {
          made.push(res.data[i])
        } else {
          unmade.push(res.data[i])
        }
      }
      setSavedRecipesUnmade(unmade)
      setSavedRecipesMade(made)
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
       <h1>Recipes</h1>
       { savedRecipesUnmade
       ? <RecipesToMake recipes={savedRecipesUnmade}/>
       : null
       }
       {savedRecipesMade
         ? <RecipesMade recipesDone=    {savedRecipesMade}/>
         : null
       }
    </div>
  )
}

export default Recipes;