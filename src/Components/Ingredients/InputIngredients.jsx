import React, {useState, useEffect} from 'react'

const InputIngredients = ({ingreds, onChangeMeta}) => {
  const [invalidEntry, setInvalidEntry] = useState(false)
  const addToIngredients = (target) => {
    if (target.length < 1 || typeof(target !== "string")) {
      console.log('nope')
      setInvalidEntry(true)
      return
    }
    onChangeMeta(target)
    setInvalidEntry(false)
    console.log(ingreds)
  }

  return (
    <div>
      <form>
        <label>What's going bad?</label>
        <input
          type="text"
          name="ingredients"
          className="ingredientEntry"
          onChange={(e) => addToIngredients(e.target.value)}
          >
        </input>
      </form>
      <button type="submit" onClick={addToIngredients}> Add Items </button>
    </div>
  )
}

export default InputIngredients;