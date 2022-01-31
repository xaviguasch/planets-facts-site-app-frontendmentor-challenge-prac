import { Link } from 'react-router-dom'

import data from '../data.json'

import './Header.css'

const Header = () => {
  return (
    <div className='Heder'>
      <h2>The Planets</h2>

      <nav>
        {data.map((d) => (
          <Link to={`/planets/${d.name.toLowerCase()}`} key={d.name}>
            {d.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Header
