import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={hero_banner} alt='hero banner' className='banner-img' />
        <div className='heroTitle'>
          <img src={hero_title} alt='hero title' className='heroImg' />
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
        </div>
      </div>
    </div>
  )
}

export default Home