import React from 'react'
import './Titel.css'
const Titel = ({supTitel, titel}) => {
  return (
    <div className='titel'>
        <p>{supTitel}</p>
        <h2>{titel}</h2>
      
    </div>
  )
}

export default Titel
