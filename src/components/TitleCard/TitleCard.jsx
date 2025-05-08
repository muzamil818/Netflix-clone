import React, { useEffect, useRef, useState } from "react";
import "./TitleCard.css";
import { Link, } from "react-router-dom";
// import card_data from '../../assets/cards/Cards_data'

const TitleCard = ({ title, catagory }) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjQ2NmFjNjQzNTE3NzA3ZGQxYTUzNWUxMzdjNmI2YSIsIm5iZiI6MS43NDY2MTUzMTA4MTQwMDAxZSs5LCJzdWIiOiI2ODFiM2MwZWUyNjVhOWIwYmZjNjk5N2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.trP_idLEj31QNn-BL9Q9wtsG_Zo3aGYNqmFPOj6DHUc",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    const scrollAmount = event.deltaY * 0.9; // Adjust the factor if needed
    cardsRef.current.scrollLeft += scrollAmount;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        catagory ? catagory : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
    const current = cardsRef.current;
    if (current) {
      current.addEventListener("wheel", handleWheel);
    }
  }, []);

  return (
    <div className="title-card">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img 
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt="movie"  
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
