import { Link } from 'react-router-dom'

import React from 'react'
import './ModalNav.css'

import data from '../data.json'

const ModalNav = ({ onModalLinkHandler }) => {
  return (
    <div className='ModalNav'>
      <ul className='modal--nav--list'>
        {data.map((d) => (
          <li key={d.name}>
            <Link
              className='modal__link'
              to={`/planets/${d.name.toLowerCase()}`}
              onClick={onModalLinkHandler}
            >
              <div className='planet-symbol-pair'>
                <span className={`symbol ${d.name}`}></span>
                <span className='name-in-modal'>{d.name}</span>
              </div>
              <div className='icon-chevron'>
                <svg xmlns='http://www.w3.org/2000/svg' width='6' height='8'>
                  <path fill='none' stroke='#FFF' opacity='.4' d='M1 0l4 4-4 4' />
                </svg>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ModalNav
