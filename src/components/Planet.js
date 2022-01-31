import React from 'react'
import { useParams } from 'react-router-dom'

import './Planet.css'

const Planet = () => {
  let params = useParams()
  return (
    <div className='Planet'>
      <h1>{params.planetName}</h1>
    </div>
  )
}

export default Planet
