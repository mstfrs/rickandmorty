import React from 'react'
import CharacterList from '../../components/CharacterList'

const Characters = () => {
  return (
    <>
    <div className=" flex items-center justify-center mb-8">
    <img
      className="w-full h-40 object-contain  "
      src="/assets/banner.png"
      alt=""
    />
  </div>
    <CharacterList/>
    
    </>
  )
}

export default Characters