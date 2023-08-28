import React from 'react'
import './Navbar.css';
import logo from './logo-modified.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='title'>Sarkar</div>
    </div>
  )
}

export default Navbar