import { Outlet, Link } from 'react-router-dom'

import './App.css'

import Planet from './components/Planet'

function App() {
  return (
    <div className='App'>
      <h1>Planets Site</h1>
      <Link to='/planet'>{<Planet />}</Link>

      <Outlet />
    </div>
  )
}

export default App
