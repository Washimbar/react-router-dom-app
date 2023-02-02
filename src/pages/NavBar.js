import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className='navbar'>
        <NavLink className='navLink' to='/'>Home</NavLink>
          <NavLink className='navLink' to='/contact'>Contact</NavLink>
          <NavLink className='navLink' to='/blogs'>Blogs</NavLink>
    </nav>
  )
}

export default NavBar