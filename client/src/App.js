import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { About, Contact, Home, Portfolio, Services } from './pages'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          {/* <Route element={<Portfolio />} path='/portfolio' /> 
          <Route element={<Contact />} path='/contact' /> 
          <Route element={<About />} path='/about' />
          <Route element={<Services />} path='/services' />  */}
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App