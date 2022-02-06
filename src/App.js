import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import ModalNav from './components/ModalNav'

import './App.css'

function App() {
  const [isNavModalOpen, setIsNavModalOpen] = useState(false)

  const modalLinkHandler = () => {
    setIsNavModalOpen((prev) => !prev)
  }

  return (
    <div className='App'>
      <Header onModalLinkHandler={modalLinkHandler} />

      {isNavModalOpen ? <ModalNav onModalLinkHandler={modalLinkHandler} /> : <Outlet />}
    </div>
  )
}

export default App
