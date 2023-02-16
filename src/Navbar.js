import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <nav id='nav'>
    <div className='container flex'>
    <img src="" alt="img" />
    <div className='links'>
      <NavLink to='/'><a>Home</a></NavLink>
      <NavLink to='/search'><a>Search</a></NavLink>
      <NavLink to='/login'><a>Login</a></NavLink>
    </div>
    
     </div>
    
    </nav>
    </div>
  )
}

export default Navbar