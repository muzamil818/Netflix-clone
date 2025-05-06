import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={facebook_icon}/>
        <img src={youtube_icon}/>
        <img src={twitter_icon}/>
        <img src={instagram_icon}/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>jobs</li>
        <li>Terms og Use</li>
        <li>Privacay</li>
        <li>Legal Notices</li>
        <li>Cookie Prefrences</li>
        <li>Corporate Information</li>
        <li>Contact us</li>
      </ul>
      <p className='copy-right'>© 1997-2026 Netflix, Inc.</p>
    </div>
  )
}

export default Footer