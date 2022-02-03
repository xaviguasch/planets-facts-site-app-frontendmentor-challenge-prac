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
      <div className={`Planet ${name}`}>
        <nav className='Planet__nav'>
          <ul>
            <li>
              <button
                className={`Planet__btn ${infoDisplay === 'overview' ? 'active' : ''}`}
                onClick={handleInfoDisplayChange}
                value='overview'
              >
                Overview
              </button>
            </li>
            <li>
              <button
                className={`Planet__btn ${infoDisplay === 'structure' ? 'active' : ''}`}
                onClick={handleInfoDisplayChange}
                value='structure'
              >
                Structure
              </button>
            </li>
            <li>
              <button
                className={`Planet__btn ${infoDisplay === 'surface' ? 'active' : ''}`}
                onClick={handleInfoDisplayChange}
                value='surface'
              >
                Surface
              </button>
            </li>
          </ul>
        </nav>

        <div className='Planet__content'>
          {infoDisplay === 'overview' && (
            <div className='Planet__copy'>
              <h1 className='name'>{name}</h1>
              <p className='text'>{overview.content}</p>
              <p className='source'>
                Source:{' '}
                <a className='source__link' href={overview.source}>
                  Wikipedia
                </a>
              </p>
              <img
                className='planet-img'
                src={images.planet.replace('./', '/')}
                alt={name}
              />
            </div>
          )}
          {infoDisplay === 'structure' && (
            <div className='Planet__copy'>
              <h1 className='name'>{name}</h1>
              <p className='text'>{structure.content}</p>
              <p className='source'>
                Source:{' '}
                <a className='source__link' href={structure.source}>
                  Wikipedia
                </a>
              </p>
              <img
                className='planet-img'
                src={images.internal.replace('./', '/')}
                alt={name}
              />
            </div>
          )}
          {infoDisplay === 'surface' && (
            <div className='Planet__copy'>
              <h1 className='name'>{name}</h1>
              <p className='text'>{geology.content}</p>
              <p className='source'>
                Source:{' '}
                <a className='source__link' href={geology.source}>
                  Wikipedia
                </a>
              </p>
              <img
                className='planet-img'
                src={images.planet.replace('./', '/')}
                alt={name}
              />
              <img
                className='planet-img planet-img__2'
                src={images.geology.replace('./', '/')}
                alt={name}
              />
            </div>
          )}

          <ul className='Planet__stats'>
            <li>
              <div>
                <span className='stat-name'>Rotation Time</span>
                <span className='stat-value'>{rotation} days</span>
              </div>
            </li>
            <li>
              <div>
                <span className='stat-name'>Revolution Time</span>
                <span className='stat-value'>{revolution} days</span>
              </div>
            </li>
            <li>
              <div>
                <span className='stat-name'>Radius</span>
                <span className='stat-value'>{radius} km</span>
              </div>
            </li>
            <li>
              <div>
                <span className='stat-name'>Average temp.</span>
                <span className='stat-value'>{temperature} ºC</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  } else {
    return (
      <div className='Planet'>
        <div className='error-card'>
          <h2>This planet: {params.planetName} is not available</h2>
        </div>
      </div>
    )
  }
}

export default Planet
