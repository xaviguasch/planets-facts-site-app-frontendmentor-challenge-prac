import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    <div className='Heder'>
      <h2>The Planets</h2>
      <Link to='/planet'>Planet</Link>
    </div>
  )
}

export default Header
