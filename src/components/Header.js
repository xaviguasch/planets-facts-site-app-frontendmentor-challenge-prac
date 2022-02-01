import { Link } from 'react-router-dom'

import data from '../data.json'

import './Header.css'

const Header = () => {
  return (
    <div className='Heder'>
      <h2>The Planets</h2>

      <nav>
        <ul>
          {data.map((d) => (
            <li key={d.name}>
              <Link to={`/planets/${d.name.toLowerCase()}`}>{d.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
