import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiMoviePlay } from 'react-icons/bi'
import './header.scss'

function Header() {
  return (
    <header className='header-container'>
      <div className='header-title'>
        <BiMoviePlay />
        <p>Cineverse</p>
      </div>
      <ul className='header-links'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/plans'>Plans</NavLink></li>
        <li><NavLink to='/movies'>Movies</NavLink></li>
        <li><NavLink to='/wishlist'>Wishlist</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>      
    </header>
  )
}

export default Header