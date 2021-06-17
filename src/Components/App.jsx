import React, {useState} from 'react'
import Ingredients from './Ingredients/Ingredients.jsx'
import Recipes from './Recipes/Recipes.jsx'
require('react-dom');

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
  <h1 className = "logo"> WasteMeNot </h1>
  <div className="swapPage">
        {ingredientsPage
        ? <button className="swapBtn" type="submit" onClick={()=> handleSwap()}> View recipes </button>
        : <button className="swapBtn" type="submit" onClick={()=> handleSwap()}> View ingredients </button>
        }
        </div>
    <div className="wrapper">
      <hr />
        {ingredientsPage
          ? <Ingredients />
          : <Recipes />
        }
      <hr />

      </div>
    </div>
  )
}

export default App;

