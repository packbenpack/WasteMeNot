import React, {useState, useRef} from 'react'
import Modal from '../Modal.jsx'
import axios from 'axios'

const Uncooked = ({recipeInfo}) => {
  const [recipeMade, updateRecipeMade] = useState(false)
  const openModal = () => {
    modal.current.open();
  };
  const modal = useRef(null);
  const updateCooked = async (id) => {
    try{
      console.log(`http://localhost:3000/recipes/${id}`)
      const update = await axios.put(`http://localhost:3000/recipes/${id}`)
      updateRecipeMade(true)
      } catch(err) {
        console.log(err)
      }
    }
  return (
    <div>
      <p className="recipeName">{recipeInfo.title}</p>
      <button className="recipeBtn" type='button' onClick={openModal}>View Recipe</button>
      <Modal ref={modal} fade>
        <label className="recipeHeader">
          Recipe:
          <p>
          {recipeInfo.title}
          </p>
        </label>
        <label className="recipeHeader">
          Ingredients:
          <p className="recipeText">
            {recipeInfo.ingredients}
          </p>
        </label>
        <label className="recipeHeader">
          Source:
          <p className="recipeText">
            <a href={recipeInfo.sourceUrl} target="_blank">{recipeInfo.sourceUrl}</a>
          </p>
        </label>
        <br />
        <label className="recipeHeader">
          Time to cook:
          <p className="recipeText">
            {recipeInfo.readyInMinutes} minutes
          </p>
        </label>
        <br />
        <label className="recipeHeader">
          Servings:
          <p className="recipeText">
            {recipeInfo.servings}
          </p>
        </label>
        <br />
        <label className="recipeHeader">
          Summary:
          <p className="recipeText">
            {recipeInfo.summary}
          </p>
        </label>
        <label className="recipeHeader">
          Instructions:
          <p className="recipeText">
            {recipeInfo.instructions}
          </p>
        </label>
        {recipeMade
        ? <button type="button" className="cooked-btn-done">
          Yum!!!
        </button>
        : <button type="button" className="cooked-btn" onClick={()=>updateCooked(recipeInfo._id)}>
          I made this!
        </button>
        }
      </Modal>
    </div>
  )
}

export default Uncooked;