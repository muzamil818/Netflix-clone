import React from 'react'
import "./Player.css"
import back_arrow_icon from '../../assets/back_arrow_icon.png'
const Player = () => {
  return (
    <div className='player' >
      <img src={back_arrow_icon} alt='backArrow' className='backArrow'/>
      <iframe className='iframe' src='https://www.youtube.com/embed/pAsmrKyMqaA' title='trailer' width='90%' height="90%" frameBorder='0'></iframe>
      <div className='player-info'>
        <p>Publish Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Player