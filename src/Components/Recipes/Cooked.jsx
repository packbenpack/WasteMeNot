import React, {useState, useRef} from 'react'
import Modal from '../Modal.jsx'

const Cooked = ({recipeInfo}) => {
  const openModal = () => {
    modal.current.open();
  };
  const modal = useRef(null);
  return (
    <div>
      <p className="recipeName">{recipeInfo.title}</p>
      <button className="recipeBtn" type='button' onClick={openModal}>View Recipe</button>
      <Modal ref={modal} fade>
        <label>
          Title:
          {recipeInfo.title}
        </label>
        <label>
          Ingredients:
          {recipeInfo.ingredients}
        </label>
        <label>
          Source:
          {recipeInfo.sourceUrl}
        </label>
        <label>
          Time to cook:
          {recipeInfo.readyInMinutes}
        </label>
        <label>
          Servings:
          {recipeInfo.servings}
        </label>
        <label>
          Summary:
          {recipeInfo.summary}
        </label>
        <label>
          Instructions:
          {recipeInfo.instructions}
        </label>
      </Modal>
    </div>
  )
}

export default Cooked;