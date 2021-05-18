import React, {useState} from 'react'

const SwapPage = ({currentPage, swapFunction}) => {

  return (

    <button type="submit" onClick={swapFunction}> Toggle Ingredients / Recipe </button>
  )
}

export default SwapPage;