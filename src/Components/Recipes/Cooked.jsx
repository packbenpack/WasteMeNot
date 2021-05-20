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
            {recipeInfo.sourceUrl}
          </p>
        </label>
        <label className="recipeHeader">
          Time to cook:
          <p className="recipeText">
            {recipeInfo.readyInMinutes}
          </p>
        </label>
        <label className="recipeHeader">
          Servings:
          <p className="recipeText">
            {recipeInfo.servings}
          </p>
        </label>
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
      </Modal>
    </div>
  )
}

export default Cooked;