import { Link } from 'react-router-dom'

import data from '../data.json'

import IconHamburger from '../assets/icon-hamburger.svg'

import './Header.css'

const Header = ({ onModalLinkHandler, onIsNavModalOpen }) => {
  return (
    <div className='Header'>
      <h2 className='Header__title'>The Planets</h2>

      <nav className='Header__nav'>
        <ul className='Header__nav__list'>
          {data.map((d) => (
            <li key={d.name}>
              <Link to={`/planets/${d.name.toLowerCase()}`}>{d.name}</Link>
            </li>
          ))}
        </ul>

        {/* Correct CSS of the button and it's disabled state */}
        <button
          className='Header__nav__hamb-btn'
          onClick={onModalLinkHandler}
          disabled={onIsNavModalOpen} // if the nav is already open, we are disabling the hamburger button
        >
          <img src={IconHamburger} alt='icon-hamburger' />
        </button>
      </nav>
    </div>
  )
}

export default Header
