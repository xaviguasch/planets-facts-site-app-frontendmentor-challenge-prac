import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import data from '../data.json'

import './Planet.css'

const Planet = () => {
  const [infoDisplay, setInfoDisplay] = useState('overview')

  const handleInfoDisplayChange = (e) => {
    setInfoDisplay(e.target.value)
  }

  let params = useParams()

  const dataPlanet = data.find((item) => item.name.toLowerCase() === params.planetName)

  const {
    name,
    images,
    overview,
    structure,
    geology,
    rotation,
    revolution,
    radius,
    temperature,
  } = dataPlanet

  if (dataPlanet) {
    return (
      <div className='Planet'>
        <nav>
          <ul>
            <li>
              <button
                className={`planet-btn ${infoDisplay === 'overview' ? 'active' : ''}`}
                onClick={handleInfoDisplayChange}
                value='overview'
              >
                Overview
              </button>
            </li>
            <li>
              <button
                className={`planet-btn ${infoDisplay === 'structure' ? 'active' : ''}`}
                onClick={handleInfoDisplayChange}
                value='structure'
              >
                Structure
              </button>
            </li>
            <li>
              <button
                className={`planet-btn ${infoDisplay === 'surface' ? 'active' : ''}`}
                onClick={handleInfoDisplayChange}
                value='surface'
              >
                Surface
              </button>
            </li>
          </ul>
        </nav>

        {infoDisplay === 'overview' && (
          <div>
            <h1>{name}</h1>
            <p>{overview.content}</p>
            <p>
              Source: <a href={overview.source}>Wikipedia</a>
            </p>
            <img src={images.planet.replace('./', '/')} alt={name} />
          </div>
        )}
        {infoDisplay === 'structure' && (
          <div>
            <h1>{name}</h1>
            <p>{structure.content}</p>
            <p>
              Source: <a href={structure.source}>Wikipedia</a>
            </p>
            <img src={images.internal.replace('./', '/')} alt={name} />
          </div>
        )}
        {infoDisplay === 'surface' && (
          <div>
            <h1>{name}</h1>
            <p>{geology.content}</p>
            <p>
              Source: <a href={geology.source}>Wikipedia</a>
            </p>
            <img src={images.planet.replace('./', '/')} alt={name} />
            <img src={images.geology.replace('./', '/')} alt={name} />
          </div>
        )}

        <ul>
          <li>
            <div>
              <span>Rotation Time</span>
              <span>{rotation} days</span>
            </div>
          </li>
          <li>
            <div>
              <span>Revolution Time</span>
              <span>{revolution} days</span>
            </div>
          </li>
          <li>
            <div>
              <span>Radius</span>
              <span>{radius} km</span>
            </div>
          </li>
          <li>
            <div>
              <span>Average temp.</span>
              <span>{temperature} ºC</span>
            </div>
          </li>
        </ul>
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
