import { Outlet } from 'react-router-dom'

import './PlanetContainer.css'

const PlanetContainer = () => {
  return (
    <div className='PlanetContainer'>
      <Outlet />
    </div>
  )
}

export default PlanetContainer
