import React, {useState, useRef} from 'react'
import Modal from '../Modal.jsx'
import axios from 'axios'

const Cooked = ({recipeInfo}) => {
  const [recipeFaved, updateRecipeFaved] = useState(false)
  const openModal = () => {
    modal.current.open();
  };
  const modal = useRef(null);
  const markAsFavorite = (recipeId) => {
    console.log(recipeInfo)
  }
  const updateFavorite = async (id) => {
    try{
      const update = await axios.put(`http://localhost:3000/recipes/${id}/fav`)
      updateRecipeFaved(true)
      } catch(err) {
        console.log(err)
      }
    }

    const updateUnfavorite = async (id) => {
      try{
        const update = await axios.put(`http://localhost:3000/recipes/${id}/unfav`)
        updateRecipeFaved(false)
        } catch(err) {
          console.log(err)
        }
      }

  return (
    <div>
      <p className="recipeName">{recipeInfo.title}</p>
      <button className="recipeBtn" type='button' onClick={openModal}>View Recipe</button>
      {recipeInfo.favorite !== true
      ? <button className="favoriteBtn" type='button' onClick={()=>updateFavorite(recipeInfo._id)}>Favorite</button>
      : <button className="favoriteBtn" type='button' onClick={()=>updateUnfavorite(recipeInfo._id)}>Unfavorite</button>
      }
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
            {recipeInfo.readyInMinutes} minutes
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