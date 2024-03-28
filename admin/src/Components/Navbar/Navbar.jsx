import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
import navProfile from '../../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='navbar-title'>
        <h3>Hybrid-Ecomm </h3>
        <p>Admin Panel</p>
      </div>
      <div className="navbar-profile">
        <p>Admin</p>
        <img src={navProfile} alt='profile'/>
      </div>
    </div>
  )
}

export default Navbar