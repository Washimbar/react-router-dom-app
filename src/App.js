import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Blogs from './pages/Blogs'
import NavBar from './Navigations/NavBar'
import AboutUs from './pages/AboutUs'
import PrevYearQuestion from './pages/PrevYearQuestion'

const App = () => {
  return (
    <BrowserRouter>
        <NavBar />
      <div className='app'>
        <div className='left__container'>

        </div>
        <div className='right__container'>
          <Routes>
            <Route path='*' element={<Error />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/blogs' element={<Blogs />}></Route>
            <Route path='/about' element={<AboutUs />}></Route>
            <Route path='/prevyear' element={<PrevYearQuestion />}></Route>
            <Route path='/practice' element={<PrevYearQuestion />}></Route>
          </Routes>
        </div>

      </div>

    </BrowserRouter>
  )
}

export default App