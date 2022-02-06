import { Link } from 'react-router-dom'

import data from '../data.json'

import IconHamburger from '../assets/icon-hamburger.svg'

import './Header.css'

const Header = ({ onModalLinkHandler, onIsNavModalOpen }) => {
  return (
    <div className='Header'>
      <h2 className='Header__title'>The Planets</h2>

      <nav>
        <ul className='Header__nav__list'>
          {data.map((d) => (
            <li key={d.name}>
              <Link to={`/planets/${d.name.toLowerCase()}`}>{d.name}</Link>
            </li>
          ))}
        </ul>

        <button
          className='Header__nav__hamb'
          onClick={onModalLinkHandler}
          disabled={onIsNavModalOpen}
        >
          <img src={IconHamburger} alt='icon-hamburger' />
        </button>
      </nav>
    </div>
  )
}

export default Header
