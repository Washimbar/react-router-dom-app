import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Blogs from './pages/Blogs.js'
import Contact from './pages/Contact.js'
import Error from './pages/Error'
import Home from './pages/Home.js'
import NavBar from './pages/NavBar'


const App = () => {
  return (
    <div className='App'>
      <h1>Welcome</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App