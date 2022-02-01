import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import data from '../data.json'

import './Planet.css'

const Planet = () => {
  let params = useParams()

  const dataPlanet = data.find((item) => item.name.toLowerCase() === params.planetName)

  if (dataPlanet) {
    return (
      <div className='Planet'>
        <nav>
          <ul>
            <li>
              <button>Overview</button>
            </li>
            <li>
              <button>Structure</button>
            </li>
            <li>
              <button>Surface</button>
            </li>
          </ul>
        </nav>
        <h1>{params.planetName}</h1>
      </div>
    )
  } else {
    return (
      <div className='Planet'>
        <h2>This planet: {params.planetName} is not available</h2>
      </div>
    )
  }
}

export default Planet
