import React, {useState, useEffect} from 'react'

const InputIngredients = () => {
  const [invalidEntry, setInvalidEntry] = useState(false)

  const handleChange = (e) => {
    setIngredients(e.target.value)
  }

  return (
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
      <button type="submit" onClick={addToIngredients}> Add Items </button>
    </div>
  )
}

export default InputIngredients;