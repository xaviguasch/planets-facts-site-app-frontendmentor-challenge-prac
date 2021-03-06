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
                <span className='Planet__btn__num'>01</span>Overview
              </button>
            </li>
            <li>
              <button
                className={`Planet__btn ${infoDisplay === 'structure' ? 'active' : ''}`}
                onClick={handleInfoDisplayChange}
                value='structure'
              >
                <span className='Planet__btn__num'>02</span>Structure
              </button>
            </li>
            <li>
              <button
                className={`Planet__btn ${infoDisplay === 'surface' ? 'active' : ''}`}
                onClick={handleInfoDisplayChange}
                value='surface'
              >
                <span className='Planet__btn__num'>03</span>Surface
              </button>
            </li>
          </ul>
        </nav>

        {infoDisplay === 'overview' && (
          <div className='planet-img-container'>
            <img
              className='planet-img'
              src={images.planet.replace('./', '/')}
              alt={name}
            />
          </div>
        )}
        {infoDisplay === 'structure' && (
          <div className='planet-img-container'>
            <img
              className='planet-img'
              src={images.internal.replace('./', '/')}
              alt={name}
            />
          </div>
        )}
        {infoDisplay === 'surface' && (
          <div className='planet-img-container'>
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

        {infoDisplay === 'overview' && (
          <div className='Planet__copy'>
            <h1 className='name'>{name}</h1>
            <p className='text'>{overview.content}</p>
            <p className='source'>
              Source :{' '}
              <a className='source__link' href={overview.source}>
                Wikipedia
              </a>{' '}
              <img
                className='icon-source'
                src='../assets/icon-source.svg'
                alt='icon-source'
              />
            </p>
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
          </div>
        )}

        <ul className='Planet__stats'>
          <li className='stat-item'>
            <span className='stat-name'>Rotation Time</span>
            <span className='stat-value'>{rotation}</span>
          </li>
          <li className='stat-item'>
            <span className='stat-name'>Revolution Time</span>
            <span className='stat-value'>{revolution}</span>
          </li>
          <li className='stat-item'>
            <span className='stat-name'>Radius</span>
            <span className='stat-value'>{radius}</span>
          </li>
          <li className='stat-item'>
            <span className='stat-name'>Average temp.</span>
            <span className='stat-value'>{temperature}</span>
          </li>
        </ul>
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
