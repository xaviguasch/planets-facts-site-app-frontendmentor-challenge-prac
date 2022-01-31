import { Outlet, Link } from 'react-router-dom'

import Header from './components/Header'
import PlanetContainer from './components/PlanetContainer'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Header />

      <Outlet />
    </div>
  )
}

export default App
