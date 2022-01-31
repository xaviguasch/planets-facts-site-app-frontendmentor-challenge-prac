import { Outlet, Link } from 'react-router-dom'

import './PlanetContainer.css'

const PlanetContainer = () => {
  return (
    <div className='PlanetContainer'>
      <h1>Planet Container</h1>

      <Outlet />
    </div>
  )
}

export default PlanetContainer
