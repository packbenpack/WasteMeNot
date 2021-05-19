import React, {useState} from 'react'
import SwapPage from './SwapPage.jsx'
import Ingredients from './Ingredients/Ingredients.jsx'
import Recipes from './Recipes/Recipes.jsx'
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const App = () => {

  const [ingredientsPage, setIngredientsPage] = useState(true);
  const [ingredients, setIngredients] = useState(['tomato', 'pickles', 'carrots', 'bleu cheese', 'salami', 'mustard', 'rye bread'])
  const handleSwap = () => {
    if (ingredientsPage) {
      setIngredientsPage(false)
    } else {
      setIngredientsPage(true)
    }
  }
  const addIngredients = (newIngredients) => {
    setIngredients([...ingredients, newIngredients])
  }

  return (
<div>
  <h1 className = "logo"> WasteMeNot </h1>
    <div className="wrapper">
      <hr />
        {ingredientsPage
          ? <Ingredients ingreds={ingredients} onChangeMeta={addIngredients}/>
          : <Recipes ingreds={ingredients}/>
        }
      <hr />
        <div className="swapPage">
          <SwapPage
            swapFunction={handleSwap}
            currentPage={ingredientsPage}
          />
        </div>
      </div>
    </div>
  )
}

export default App;

