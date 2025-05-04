import React, { useEffect, useRef } from 'react'
import './TitleCard.css'
import card_data from '../../assets/cards/Cards_data'
const TitleCard = () => {

    const cardsRef = useRef();
  
    const handleWheel = (event) => {
      event.preventDefault();
      const scrollAmount = event.deltaY * 0.90; // Adjust the factor if needed
      cardsRef.current.scrollLeft += scrollAmount;
    };
  
    useEffect(() => {
      const current = cardsRef.current;
      if (current) {
        current.addEventListener('wheel', handleWheel);
      }
  
    }, []);
  

  return (
    <div className='title-card'>
      <h2>Popular on Netflix</h2>
      <div className='card-list' ref={cardsRef}>
      {card_data.map((card, index)=>{
          return <div className='card' key={index} >
            <img src={card.image} alt='movie'/>
            <p>{card.name}</p>
          </div>
      })}

</div>
    </div>
  )
}

export default TitleCard