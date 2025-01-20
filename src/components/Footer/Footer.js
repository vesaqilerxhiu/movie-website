import React from 'react'
import './footer.scss'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-links'>
        <a href='https://www.facebook.com/' target='_blank'><FaFacebook /></a>
        <a href='https://www.instagram.com/' target='_blank'><FaInstagram /></a>
        <a href='https://twitter.com/' target='_blank'><FaTwitter /></a>
      </div>
      <div className='footer-text'>  
        <p>&copy; 2023 CINEVERSE. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer