import React, { useState, useEffect } from 'react'

import { Outlet, useParams } from 'react-router-dom'

import Header from './components/Header'
import ModalNav from './components/ModalNav'

import './App.css'

function App() {
  const [isNavModalOpen, setIsNavModalOpen] = useState(true)

  let params = useParams()

  useEffect(() => {
    // Checks if params object is empty or not. If it has data (because the user wrote a planet url directly), then it closes the modal via state and shows the planet component.
    if (Object.keys(params).length !== 0) {
      setIsNavModalOpen(false)
    }
  }, [])

  const modalLinkHandler = () => {
    setIsNavModalOpen((prev) => !prev)
  }

  return (
    <div className='App'>
      <Header onModalLinkHandler={modalLinkHandler} onIsNavModalOpen={isNavModalOpen} />

      {isNavModalOpen ? <ModalNav onModalLinkHandler={modalLinkHandler} /> : <Outlet />}
    </div>
  )
}

export default App
