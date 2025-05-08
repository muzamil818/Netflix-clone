import React, { useEffect, useState } from 'react'
import "./Player.css"
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
  const {id} = useParams()
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""

  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjQ2NmFjNjQzNTE3NzA3ZGQxYTUzNWUxMzdjNmI2YSIsIm5iZiI6MS43NDY2MTUzMTA4MTQwMDAxZSs5LCJzdWIiOiI2ODFiM2MwZWUyNjVhOWIwYmZjNjk5N2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.trP_idLEj31QNn-BL9Q9wtsG_Zo3aGYNqmFPOj6DHUc'
    }
  };
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  },[])
  return (
    <div className='player' >
      <img  src={back_arrow_icon} alt='backArrow' className='backArrow' onClick={()=>{navigate(-2)}}/>
      <iframe className='iframe' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' width='90%' height="90%" frameBorder='0'></iframe>
      <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player