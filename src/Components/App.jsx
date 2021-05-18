import React, {useState} from 'react'
import SwapPage from './SwapPage.jsx'
import Ingredients from './Ingredients/Ingredients.jsx'
import Recipes from './Recipes/Recipes.jsx'
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const App = () => {

  const [ingredientsPage, setIngredientsPage] = useState(true);

  const handleSwap = () => {
    if (ingredientsPage) {
      setIngredientsPage(false)
    } else {
      setIngredientsPage(true)
    }
  }

  return (

    <div>
        <SwapPage
          swapFunction={handleSwap}
          currentPage={ingredientsPage}
        />
        {ingredientsPage
        ? <Ingredients />
        : <Recipes />
        }
    </div>
  )
}

export default App;