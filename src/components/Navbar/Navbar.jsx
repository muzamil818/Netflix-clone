import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import dropdown from '../../assets/caret_icon.svg'

const Navbar = () => {
  const [showSignOut, setShoSignOut] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt='Logo' />
        <ul className='links'>
          <li>Home</li>
          <li>Tv Show</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li>Browse my Language</li>
        </ul>
      </div>

      <div className='navbar-right'>

        <img src={search_icon} alt='Logo' className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt='bellIcon' className='bellicon' />

        <div className='navbar-profile' >

          <img src={profile} alt='profile' className='profile' />
          <img onClick = {() => setShoSignOut(prev => !prev)} src={dropdown} alt='dropdown' className='dropdownIcon' />
         {showSignOut && <div className="dropdown">
            Sign out
          </div>}
        </div>

      </div>
    </div>
  )
}

export default Navbar