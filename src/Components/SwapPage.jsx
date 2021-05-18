import React, {useState} from 'react'

const SwapPage = ({currentPage, swapFunction}) => {

  return (
    <button type="submit" onClick={swapFunction}> Show </button>
  )
}

export default SwapPage;