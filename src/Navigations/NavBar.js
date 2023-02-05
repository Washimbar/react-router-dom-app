import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className='navbar'>
      <NavLink className='navLink' to='/home'>Home</NavLink>
      <NavLink className='navLink' to='/prevyear'>Previous Year questions</NavLink>
      <NavLink className='navLink' to='/practice'>Practice Set</NavLink>
      <NavLink className='navLink' to='/blogs'>Blogs</NavLink>
      <NavLink className='navLink' to='/blogs'>Blogs</NavLink>
      <NavLink className='navLink' to='/blogs'>Blogs</NavLink>
      <NavLink className='navLink' to='/contact'>Contact</NavLink>
      <NavLink className='navLink' to='/about'>About us</NavLink>
      <NavLink className='login' to='/login'>Login</NavLink>      
    </nav>
  )
}

export default NavBar