import React, {useState} from 'react'

const InputIngredients = () => {

  return (
    <div>
      <form>
        <label>What's going bad?</label>
        <input
          type="text"
          name="ingredients"
          className="ingredientEntry">
        </input>
      </form>
    </div>
  )
}

export default InputIngredients;